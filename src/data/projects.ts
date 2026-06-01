export type ProjectCategory = "AI & MLOps" | "Backend" | "Full-Stack";

export type ProjectLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  description: string;
  impact: string[];
  stack: string[];
  links?: ProjectLink[];
  chip: string;
};

export const projectFilters = ["All", "AI & MLOps", "Backend", "Full-Stack"] as const;

export const projects: Project[] = [
  {
    id: "weefarm",
    slug: "weefarm",
    title: "WeeFarm",
    tagline: "AI-Assisted Decision-Support Platform",
    category: "AI & MLOps",
    chip: "Flagship",
    description:
      "Validation-backed prototype combining SQL analytics, RAG retrieval, ML advisory signals, and structured assistant responses for human-reviewed cooperative decisions.",
    impact: [
      "Executed 20/20 audited cases with 17 PASS / 3 PARTIAL / 0 FAIL.",
      "Measured 100% route accuracy and 0 runtime errors in baseline validation.",
      "Reached 0.8412 high-risk recall with readiness-gated advisory ML behavior.",
    ],
    stack: ["FastAPI", "Next.js", "PostgreSQL/Supabase", "pgvector", "SQLAlchemy", "Docker"],
    links: [{ label: "Case Study", href: "/projects/weefarm", variant: "primary" }],
  },
  {
    id: "ai-business-agent",
    slug: "ai-business-agent",
    title: "AI Business Agent",
    tagline: "Decision-support project with retrieval and simulation workflows",
    category: "AI & MLOps",
    chip: "AI & MLOps",
    description:
      "AI decision-support project combining RAG retrieval, LLM orchestration, simulation workflows, and web interfaces with FastAPI, PostgreSQL/pgvector, OpenSearch, MinIO, Redis, and Docker.",
    impact: [
      "Structured retrieval and response orchestration for business-facing assistant usage.",
      "Integrated PostgreSQL + pgvector, OpenSearch, and object storage for multi-source evidence access.",
      "Added operational observability for latency, route behavior, and assistant health checks.",
    ],
    stack: ["FastAPI", "PostgreSQL + pgvector", "OpenSearch", "MinIO", "Redis", "Docker"],
    links: [
      { label: "Project Detail", href: "/projects/ai-business-agent", variant: "primary" },
      { label: "Source", href: "https://github.com/dalibouzir/AI-Agnet", variant: "secondary" },
    ],
  },
  {
    id: "affa",
    slug: "affa",
    title: "AFFA",
    tagline: "ML recommendation prototype for fantasy football decisions",
    category: "AI & MLOps",
    chip: "AI & MLOps",
    description:
      "ML-based recommendation prototype using Python services, API-driven data flows, player comparison, and recommendation workflows.",
    impact: [
      "Implemented model-driven advisory recommendations with experiment tracking.",
      "Connected external sports data APIs to feature pipelines and recommendation workflows.",
      "Added monitoring dashboards for model behavior and iteration review.",
    ],
    stack: ["Python", "Flask", "FastAPI", "MLflow", "Elasticsearch", "Kibana"],
    links: [{ label: "Project Detail", href: "/projects/affa", variant: "primary" }],
  },
  {
    id: "quirkhire",
    slug: "quirkhire",
    title: "QuirkHire",
    tagline: "Resume recommendation prototype for recruiter workflows",
    category: "AI & MLOps",
    chip: "AI & MLOps",
    description:
      "AI-based resume recommendation prototype with recruiter workflows using React, Django/DRF, and Supabase.",
    impact: [
      "Designed recommendation review flow for recruiter-side decision support.",
      "Implemented prototype ranking logic with transparent recruiter-facing UI states.",
      "Shipped workflow-oriented interface for candidate review and shortlist iteration.",
    ],
    stack: ["React", "Django", "Django REST Framework", "Supabase"],
    links: [{ label: "Project Detail", href: "/projects/quirkhire", variant: "primary" }],
  },
];
