#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const read = (relativePath) => {
  try {
    return fs.readFileSync(path.join(root, relativePath), "utf8");
  } catch {
    return "";
  }
};

const exists = (relativePath) => fs.existsSync(path.join(root, relativePath));

const walkFiles = (dir, matcher) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, matcher);
    } else if (matcher(fullPath)) {
      const contents = fs.readFileSync(fullPath, "utf8");
      searchResults.push({ path: fullPath, contents });
    }
  }
};

const searchResults = [];
const targetExtensions = new Set([".ts", ".tsx", ".jsx", ".js"]);
walkFiles(path.join(root, "src"), (filePath) => targetExtensions.has(path.extname(filePath)));

const containsString = (needle) => searchResults.some((item) => item.contents.includes(needle));

const checks = [];

const identityOk = [
  read("src/components/HomeHero.tsx").includes("SITE.title"),
  read("src/app/layout.tsx").includes("SITE.title"),
  read("src/components/Footer.tsx").includes("SITE.title"),
].every(Boolean);
checks.push({
  name: "Identity consistency",
  ok: identityOk,
  hint: identityOk ? undefined : "Ensure SITE.title/name power hero + metadata.",
});

const seoOk = exists("src/components/Seo.tsx") && read("src/components/Seo.tsx").includes("meta name=\"description\"");
checks.push({
  name: "SEO meta present",
  ok: seoOk,
  hint: seoOk ? undefined : "Seo component missing or incomplete.",
});

const jsonLdOk = [
  "src/app/page.tsx",
  "src/app/projects/[slug]/page.tsx",
  "src/app/case-studies/ai-business-agent/page.tsx",
  "src/app/field/[slug]/page.tsx",
].every((file) => read(file).includes("application/ld+json"));
checks.push({
  name: "JSON-LD valid",
  ok: jsonLdOk,
  hint: jsonLdOk ? undefined : "Pages should embed JSON-LD scripts.",
});

const sitemapOk = exists("src/app/sitemap.ts") && exists("public/robots.txt");
checks.push({
  name: "Sitemap/robots present",
  ok: sitemapOk,
  hint: sitemapOk ? undefined : "Add sitemap.ts and robots.txt",
});

const nextImageOk = !containsString("<img");
checks.push({
  name: "Next/Image usage",
  ok: nextImageOk,
  hint: nextImageOk ? undefined : "Replace <img> with next/image",
});

const a11yTestsOk = exists("tests/a11y.spec.ts");
checks.push({
  name: "A11y tests pass",
  ok: a11yTestsOk,
  hint: a11yTestsOk ? "Run npm run test:a11y to execute." : "Add Playwright axe tests.",
});

const lighthouseOk = exists(".lighthouserc.json");
checks.push({
  name: "Lighthouse thresholds met",
  ok: lighthouseOk,
  hint: lighthouseOk ? "Run npx lhci autorun to validate." : "Add .lighthouserc.json",
});

console.log("\n--- Build Quality Checklist ---");
for (const check of checks) {
  const status = check.ok ? "OK" : "FAIL";
  const message = check.hint ? ` — ${check.hint}` : "";
  console.log(`[${status}] ${check.name}${message}`);
}
console.log("--------------------------------\n");
