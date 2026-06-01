export const SITE = {
  name: "Mohamed Ali Bouzir",
  title: "Mohamed Ali Bouzir — Junior AI Engineer",
  tagline:
    "Junior AI Engineer focused on LLM/RAG, ML advisory systems, FastAPI, PostgreSQL/pgvector, and evidence-first decision support.",
  email: "bouzirdali@gmail.com",
  phone: "+216 56 815 716",
  url: "https://dali-eight.vercel.app",
  twitter: "@medalibouzir1",
  linkedin: "https://www.linkedin.com/in/mohamed-ali-bouzir/",
  github: "https://github.com/dalibouzir",
  ogImage: "/og.jpg",
  locale: "en",
} as const;

export type SiteConfig = typeof SITE;
