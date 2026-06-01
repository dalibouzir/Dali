import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { SITE } from "../src/config/site";

const pages = [
  { path: "/", label: "home" },
  { path: "/projects/ai-business-agent", label: "project" },
  { path: "/case-studies/ai-business-agent", label: "case study" },
];

// @improvement: smoke + accessibility coverage for critical routes
for (const { path, label } of pages) {
  test.describe(`${label} page`, () => {
    test(`should load cleanly with SEO metadata — ${label}`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") {
          consoleErrors.push(message.text());
        }
      });

      await page.goto(path, { waitUntil: "domcontentloaded" });
      await page.locator("main").first().waitFor({ state: "visible" });

      expect(consoleErrors, "No console errors should surface").toHaveLength(0);

      const title = await page.title();
      expect(title).toContain(SITE.title);

      const metaDescription = await page
        .locator('meta[name="description"]')
        .first()
        .getAttribute("content");
      expect(metaDescription).toBeTruthy();

      const ogTitle = await page
        .locator('meta[property="og:title"]')
        .first()
        .getAttribute("content");
      expect(ogTitle).toBeTruthy();

      const twitterCard = await page
        .locator('meta[name="twitter:card"]')
        .first()
        .getAttribute("content");
      expect(twitterCard).toBeTruthy();

      const jsonLdScripts = page.locator('script[type="application/ld+json"]');
      const scriptCount = await jsonLdScripts.count();
      expect(scriptCount).toBeGreaterThan(0);

      for (let index = 0; index < scriptCount; index += 1) {
        const raw = await jsonLdScripts.nth(index).textContent();
        expect(raw, "JSON-LD script must have content").toBeTruthy();
        expect(() => JSON.parse(raw ?? ""), "JSON-LD must parse as JSON").not.toThrow();
      }
    });

    test(`should have zero serious/critical axe violations — ${label}`, async ({ page }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });
      await page.locator("main").first().waitFor({ state: "visible" });

      const axe = new AxeBuilder({ page });
      const results = await axe.analyze();
      const highImpactViolations = results.violations.filter((violation) =>
        violation.impact === "critical" || violation.impact === "serious",
      );

      expect(highImpactViolations).toHaveLength(0);
    });
  });
}
