import { SITE } from "@/config/site";

// @improvement: align profile contact data with global SITE config
export const profile = {
  name: SITE.name,
  title: "Junior AI Engineer",
  location: "Monastir, Tunisia",
  email: SITE.email,
  phone: SITE.phone,
  github: SITE.github,
  linkedin: SITE.linkedin,
  x: `https://twitter.com/${SITE.twitter.replace("@", "")}`,
  facebook: "https://www.facebook.com/medali.bouzir",
  instagram: "https://www.instagram.com/dali.bouzir",
  cv: {
    en: "/cv/cv_ai_engineer_final_recruiter_2page.pdf",
    fr: "/cv/BOUZIR_MohamedAli_CV_2026_Fr.pdf",
  },
  headline: "Data products that convert insight into impact",
  headlineAccent: "— shipped end to end",
  subheadline:
    "I partner with teams to turn raw data into delightful tools: resilient pipelines, dependable models, and polished experiences that prove their value in production.",
  skills: [
    "Machine Learning Platforms",
    "Applied AI Features",
    "Analytics Engineering",
    "Product Experimentation",
    "MLOps & Observability",
    "Scalable APIs",
  ],
  toolbelt: [
    "Python",
    "FastAPI",
    "Django",
    "React",
    "Next.js",
    "Supabase",
    "Postgres",
    "Docker",
    "MLflow",
    "TensorFlow",
    "PyTorch",
  ],
};

export type Profile = typeof profile;
