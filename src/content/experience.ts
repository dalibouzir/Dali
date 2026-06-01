export type Experience = {
  slug: string;
  title: string;
  organization: string;
  engagement: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    slug: "verdanova-internship",
    title: "AI Engineer Intern",
    organization: "Verdanova Solutions",
    engagement: "Internship",
    location: "Monastir, Tunisia",
    period: "March 2026 – July 2026",
    bullets: [
      "Built an AI decision-support platform using FastAPI, Next.js, PostgreSQL/Supabase, and pgvector.",
      "Designed evidence-first SQL/RAG/ML assistant orchestration for manager-facing decisions.",
      "Added readiness-gated ML advisory behavior and validation-backed assistant outputs.",
      "Converted stakeholder feedback into scoped backend, frontend, workflow, and AI assistant improvements.",
    ],
    tags: ["ai", "backend", "fastapi", "llm", "rag", "mlops"],
  },
  {
    slug: "elyosdigital-internship",
    title: "Web Development Intern",
    organization: "ElyosDigital",
    engagement: "Internship",
    location: "Monastir, Tunisia",
    period: "June 2024 – July 2024",
    bullets: [
      "Developed Laravel-based workflows for gym memberships, subscriptions, session planning, and coach scheduling.",
      "Implemented database-backed CRUD workflows for members, coaches, sessions, and administrative operations.",
      "Delivered backend and back-office improvements for secure administrative usage and operational coordination.",
    ],
    tags: ["backend", "laravel", "fullstack", "api"],
  },
];
