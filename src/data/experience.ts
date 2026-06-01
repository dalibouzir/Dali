export type ExperienceItem = {
  id: string;
  title: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

export type EducationItem = {
  id: string;
  title: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "verdanova",
    title: "Verdanova Solutions — AI Engineer Intern",
    role: "Junior AI Engineer",
    location: "Monastir, Tunisia",
    dates: "Mar 2026 – Jul 2026",
    bullets: [
      "Built an AI decision-support platform using FastAPI, Next.js, PostgreSQL/Supabase, and pgvector.",
      "Designed evidence-first SQL/RAG/ML assistant orchestration for manager-facing decisions.",
      "Integrated readiness-gated ML advisory signals with validation-backed assistant behavior.",
      "Converted stakeholder feedback into scoped backend, frontend, and workflow improvements.",
    ],
  },
  {
    id: "elyosdigital",
    title: "ElyosDigital — Web Development Intern",
    role: "Web Development Intern",
    location: "Monastir, Tunisia",
    dates: "Jun 2024 – Jul 2024",
    bullets: [
      "Developed Laravel-based workflows for gym memberships, subscriptions, session planning, and coach scheduling.",
      "Implemented database-backed CRUD workflows for members, coaches, sessions, and administrative operations.",
      "Delivered backend and back-office improvements for secure administrative usage and operational coordination.",
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    id: "education",
    title: "Education — Computer Science · AI & Data",
    bullets: [
      "Engineering Program in Computer Science — Artificial Intelligence & Data Science (École Supérieure Privée d’Ingénierie de Monastir, 2023–Present).",
      "Bachelor’s in Software Engineering and Computer Science (Faculty of Sciences of Monastir, 2020–2023).",
      "Technical Baccalaureate focused on engineering fundamentals and applied mathematics (Fattouma Bourguiba High School, Monastir, 2019–2020).",
    ],
  },
];
