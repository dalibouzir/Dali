Portfolio — Mohamed Ali Bouzir
================================

Tech stack: Next.js (App Router), TypeScript, Tailwind styles.

Structure
- `src/app/page.tsx`: Renders sections (About, Data & AI, ML Research, Development, MLOps, Contact)
- `src/components/*`: UI components (NavBar, Section, ProjectCard)
- `src/data/*`: Profile + projects data
- `public/images/*`: Project screenshots (placeholders)
- `public/assets/certifications/*`: Certification images/PDFs
- `public/cv/Mohamed_Ali_Bouzir_CV.pdf`: Downloadable CV (placeholder)

Getting started
1) Install deps
   npm install
2) Run dev server
   npm run dev
3) Open
   http://localhost:3000

Customize content
- Edit `src/data/profile.ts` to set your GitHub/LinkedIn and tweak skills/intro.
- Edit `src/data/projects.ts` to update projects, tech stacks, links, and media (images + videos).
- Replace placeholders in `public/images/` with real screenshots, keeping the same filenames or update paths in data.
- Place media per project in `public/assets/projects/<slug>/{images,videos}`.
- Place certificates in `public/assets/certifications/images` (or PDFs directly under `certifications/`) and update `src/data/certifications.ts`.
- Replace the placeholder CVs with your real PDFs at `public/cv/Mohamed_Ali_Bouzir_CV_EN.pdf` and `public/cv/Mohamed_Ali_Bouzir_CV_FR.pdf`.

Notes
- All external links (Demo | Code | Notebook) are optional; add them as available.
- Tailwind utility classes are used inline; global CSS includes a dark theme and gradient accents.
- Project cards showcase media with an autoplay slider (images + mp4); hover to pause, use arrows/dots to navigate.

Portfolio Quality Checklist
---------------------------
- **Design & UX**: Sticky, auto-hiding header with a persistent “Hire me” CTA, smooth anchored scrolling, case-study promo card, and a bespoke architecture diagram for storytelling context.
- **Content & Story**: Centralised `SITE` config ensures one narrative voice; new `/case-studies/ai-business-agent` deep dive and `/projects/[slug]` detail pages connect metrics, constraints, and outcomes.
- **Technical polish**: SEO helper (`Seo.tsx`), JSON-LD across routes, dynamic robots/sitemap, Next/Image usage checks, and post-build quality checklist automation.
- **Accessibility**: Turnstile-protected contact form with privacy note, actionable mail/phone links, Playwright + axe guardrails (`npm run test:a11y`), and consistent heading structure per page.
- **SEO & Performance**: Canonical meta bundle, Open Graph/Twitter sharing defaults, Lighthouse assertions (`.lighthouserc.json`), and static OG asset preload for faster perceived loads.
