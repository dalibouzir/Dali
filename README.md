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
