export type CtaLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ValueCard = {
  title: string;
  detail: string;
  tags: string[];
};

export type HomeProjectCategory =
  | "Flagship"
  | "LLM/RAG"
  | "ML"
  | "Backend"
  | "Full-stack";

export type HomeProject = {
  slug: string;
  title: string;
  subtitle: string;
  category: HomeProjectCategory;
  summary: string;
  role: string;
  status: string;
  stack: string[];
  highlights: string[];
  media: {
    image: string;
    video?: string;
    poster?: string;
  };
  links: CtaLink[];
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  location: string;
  project?: string;
  bullets: string[];
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type ValidationSignal = {
  metric: string;
  value: string;
  detail: string;
  tone: "success" | "neutral" | "warning";
};

export type LearningItem = {
  title: string;
  detail: string;
};

export const heroContent = {
  name: "Mohamed Ali Bouzir",
  title: "Junior AI Engineer",
  stackLine: "LLM/RAG • Machine Learning • FastAPI • PostgreSQL/pgvector • Next.js",
  paragraph:
    "I build evidence-first AI decision-support systems that combine FastAPI backend services, PostgreSQL/Supabase data workflows, pgvector-backed RAG, ML advisory signals, and structured LLM response composition for human-reviewed operational decisions.",
  photo: {
    src: "/profile/mohamed-ali-bouzir.jpg",
    alt: "Mohamed Ali Bouzir",
  },
  ctas: [
    { label: "View WeeFarm Case Study", href: "/projects/weefarm" },
    { label: "Download CV", href: "/cv/cv_ai_engineer_final_recruiter_2page.pdf" },
    { label: "Contact Me", href: "#contact" },
  ] as CtaLink[],
} as const;

export const coreValueCards: ValueCard[] = [
  {
    title: "SQL-grounded LLM/RAG assistants",
    detail:
      "Assistants separate factual SQL evidence from contextual retrieval before response synthesis.",
    tags: ["SQL", "RAG", "LLM orchestration"],
  },
  {
    title: "FastAPI backend AI services",
    detail:
      "API-first service layers for orchestration, role-aware workflows, and operational telemetry.",
    tags: ["FastAPI", "REST", "Workflow orchestration"],
  },
  {
    title: "ML advisory validation",
    detail:
      "Readiness-gated advisory signals with explicit train/test validation and threshold controls.",
    tags: ["Model validation", "Recall tracking", "Readiness gates"],
  },
  {
    title: "Human-in-the-loop decision support",
    detail:
      "Final actions remain manager-reviewed with clear evidence trails and operational safeguards.",
    tags: ["Decision support", "Review workflows", "Traceability"],
  },
  {
    title: "Deployment and smoke-test awareness",
    detail:
      "Dockerized services with smoke-test discipline for stable demo and review cycles.",
    tags: ["Docker", "Deployment hygiene", "Smoke tests"],
  },
];

export const weefarmCaseStudy = {
  title: "WeeFarm",
  subtitle: "AI-Assisted Decision-Support Platform for Agricultural Cooperatives",
  context: "AI Engineer Internship — Verdanova Solutions · March 2026 – July 2026",
  description:
    "Validation-backed prototype combining cooperative workflows, SQL factual analytics, RAG contextual retrieval, ML advisory signals, and structured chatbot responses.",
  cover: "/assets/projects/weefarm/cover.svg",
  bullets: [
    "Built with FastAPI, Next.js, PostgreSQL/Supabase, pgvector, SQLAlchemy, Alembic, Docker, Azure Container Apps, and Vercel.",
    "Designed evidence-first assistant orchestration separating SQL facts, RAG context, ML advisory signals, and LLM response composition.",
    "Implemented role-scoped workflows for stock, lots, post-harvest traceability, treasury, exports, document uploads, and manager operations.",
    "Converted stakeholder feedback from project meetings into scoped backend, frontend, workflow, AI assistant, export, and role-hierarchy improvements.",
    "Validated final assistant baseline with 20/20 executed cases, 17 PASS / 3 PARTIAL / 0 FAIL, 100% route accuracy, and 0 runtime errors.",
    "Integrated readiness-gated ML advisory signals with strict train/test validation, reaching 0.8412 high-risk recall.",
  ],
  metrics: [
    { metric: "Executed audit cases", value: "20/20" },
    { metric: "Case outcomes", value: "17 PASS / 3 PARTIAL / 0 FAIL" },
    { metric: "Assistant route accuracy", value: "100%" },
    { metric: "Runtime errors", value: "0" },
    { metric: "High-risk recall", value: "0.8412" },
  ],
} as const;

export const projectFilters = ["All", "Flagship", "LLM/RAG", "ML", "Backend", "Full-stack"] as const;

export const selectedProjects: HomeProject[] = [
  {
    slug: "weefarm",
    title: "WeeFarm",
    subtitle: "AI-Assisted Decision-Support Platform for Agricultural Cooperatives",
    category: "Flagship",
    summary:
      "Evidence-first AI assistant architecture blending SQL facts, RAG context, ML advisory signals, and human manager review.",
    role: "AI Engineer Intern",
    status: "Validation-backed prototype",
    stack: ["FastAPI", "Next.js", "PostgreSQL/Supabase", "pgvector", "SQLAlchemy", "Docker"],
    highlights: [
      "20/20 executed validation cases with 100% route accuracy and zero runtime errors.",
      "Role-scoped operational workflows for managers and cooperative teams.",
      "Readiness-gated advisory ML behavior integrated into assistant response composition.",
    ],
    media: {
      image: "/assets/projects/weefarm/cover.svg",
      poster: "/assets/projects/weefarm/cover.svg",
    },
    links: [
      { label: "View Case Study", href: "/projects/weefarm" },
      { label: "Contact for Demo Walkthrough", href: "#contact" },
    ],
  },
  {
    slug: "ai-business-agent",
    title: "AI Business Agent",
    subtitle: "Decision-support project with retrieval and simulation workflows",
    category: "LLM/RAG",
    summary:
      "AI decision-support project combining RAG retrieval, LLM orchestration, simulation workflows, and web interfaces with FastAPI, PostgreSQL/pgvector, OpenSearch, MinIO, Redis, and Docker.",
    role: "AI Engineering Project",
    status: "Prototype + architecture demo",
    stack: ["FastAPI", "PostgreSQL/pgvector", "OpenSearch", "MinIO", "Redis", "Docker"],
    highlights: [
      "Structured retrieval and response pipelines for business-facing assistant usage.",
      "Simulation-oriented workflows for decision scenarios and traceable rationale.",
      "Operational visibility through telemetry and service-level instrumentation.",
    ],
    media: {
      image: "/assets/projects/ai-business-agent/cover.svg",
      poster: "/assets/projects/ai-business-agent/cover.svg",
    },
    links: [
      { label: "Project Detail", href: "/projects/ai-business-agent" },
      { label: "GitHub", href: "https://github.com/dalibouzir/AI-Agnet", external: true },
    ],
  },
  {
    slug: "affa",
    title: "AFFA",
    subtitle: "ML recommendation prototype for fantasy football decisions",
    category: "ML",
    summary:
      "ML-based recommendation prototype using Python services, API-driven data flows, player comparison, and recommendation workflows.",
    role: "ML Advisory Prototype",
    status: "Experiment + product prototype",
    stack: ["Python", "FastAPI", "Flask", "MLflow", "Elasticsearch", "Kibana"],
    highlights: [
      "Model-driven advisory recommendations oriented to weekly decision support.",
      "Experiment and monitoring layers for evaluating recommendation quality.",
      "API-based integration with external football data feeds.",
    ],
    media: {
      image: "/assets/projects/affa/images/cover.webp",
      video: "/assets/projects/affa/videos/demo.mov",
      poster: "/assets/projects/affa/images/cover.webp",
    },
    links: [{ label: "Project Detail", href: "/projects/affa" }],
  },
  {
    slug: "quirkhire",
    title: "QuirkHire",
    subtitle: "Resume recommendation prototype for recruiter workflows",
    category: "LLM/RAG",
    summary:
      "AI-based resume recommendation prototype with recruiter workflows using React, Django/DRF, and Supabase.",
    role: "AI Product Prototype",
    status: "Workflow prototype",
    stack: ["React", "Django/DRF", "Supabase", "Recommendation Logic"],
    highlights: [
      "Workflow support for recruiter triage and candidate shortlisting.",
      "Prototype recommendation logic designed for transparency and manual review.",
      "Web product flow focused on practical evaluation usage.",
    ],
    media: {
      image: "/assets/projects/quirkhire/cover.svg",
      poster: "/assets/projects/quirkhire/cover.svg",
    },
    links: [{ label: "Project Detail", href: "/projects/quirkhire" }],
  },
  {
    slug: "elyosdigital-powergym",
    title: "PowerGym",
    subtitle: "Operational gym workflows built during ElyosDigital internship",
    category: "Backend",
    summary:
      "Laravel-based membership, scheduling, and administrative workflow platform with real operational media evidence.",
    role: "Web Development Intern",
    status: "Delivered internship system",
    stack: ["Laravel", "MySQL", "REST APIs", "Back-office workflows"],
    highlights: [
      "Developed membership and subscription operations flows.",
      "Implemented coach/session scheduling and administration modules.",
      "Shipped secure database-backed management views.",
    ],
    media: {
      image: "/assets/projects/elyosdigital-powergym/images/img5.webp",
      video: "/assets/projects/elyosdigital-powergym/videos/demo-1.mov",
      poster: "/assets/projects/elyosdigital-powergym/images/img5.webp",
    },
    links: [{ label: "Project Detail", href: "/projects/elyosdigital-powergym" }],
  },
  {
    slug: "meriem-booking",
    title: "Meriem Booking (Fittrah Moms)",
    subtitle: "Therapist booking and scheduling platform",
    category: "Full-stack",
    summary:
      "Full-stack booking workflow project with scheduling, availability management, and operational admin surfaces.",
    role: "Full-stack Delivery Project",
    status: "Shipped web workflow",
    stack: ["Next.js", "Supabase", "Scheduling workflows", "Responsive UI"],
    highlights: [
      "Implemented booking and scheduling flows for therapist operations.",
      "Delivered user-facing and admin-facing interfaces with database-backed behavior.",
      "Captured production-like UI snapshots for workflow proof.",
    ],
    media: {
      image: "/assets/projects/therapist-funnel/images/img5.webp",
      poster: "/assets/projects/therapist-funnel/images/img5.webp",
    },
    links: [{ label: "Project Detail", href: "/projects/meriem-booking" }],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "AI Engineer Intern",
    organization: "Verdanova Solutions",
    period: "March 2026 – July 2026",
    location: "Monastir, Tunisia",
    project: "WeeFarm",
    bullets: [
      "Built an AI decision-support platform using FastAPI, Next.js, PostgreSQL/Supabase, and pgvector.",
      "Designed evidence-first SQL/RAG/ML assistant orchestration for manager-facing decisions.",
      "Added readiness-gated ML advisory behavior and validation-backed assistant outputs.",
      "Converted stakeholder feedback into scoped backend, frontend, workflow, and AI assistant improvements.",
    ],
  },
  {
    title: "Web Development Intern",
    organization: "ElyosDigital",
    period: "June 2024 – July 2024",
    location: "Monastir, Tunisia",
    bullets: [
      "Developed Laravel-based workflows for gym memberships, subscriptions, session planning, and coach scheduling.",
      "Implemented database-backed CRUD workflows for members, coaches, sessions, and administrative operations.",
      "Delivered backend and back-office improvements for secure administrative usage and operational coordination.",
    ],
  },
];

export const technicalStackGroups: StackGroup[] = [
  {
    title: "AI / LLM / ML",
    items: [
      "LLM applications",
      "RAG",
      "Machine Learning",
      "Model validation",
      "Vector search",
      "Human-in-the-loop AI",
    ],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "REST APIs", "SQLAlchemy", "Alembic"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Supabase", "pgvector", "SQL"],
  },
  {
    title: "Frontend / Cloud",
    items: ["Next.js", "React", "Docker", "Azure Container Apps", "Vercel"],
  },
  {
    title: "Supporting",
    items: ["OpenSearch", "MinIO", "Redis", "Git/GitHub"],
  },
];

export const validationSignals: ValidationSignal[] = [
  {
    metric: "Assistant audit execution",
    value: "20/20 cases",
    detail: "Executed end-to-end assistant validation cases.",
    tone: "success",
  },
  {
    metric: "Validation outcomes",
    value: "17 PASS / 3 PARTIAL / 0 FAIL",
    detail: "Measured outcomes from structured validation scenarios.",
    tone: "success",
  },
  {
    metric: "Route accuracy",
    value: "100%",
    detail: "Assistant routing matched expected paths in audited cases.",
    tone: "success",
  },
  {
    metric: "Runtime stability",
    value: "0 runtime errors",
    detail: "No runtime failures during the validated baseline session.",
    tone: "neutral",
  },
  {
    metric: "High-risk recall",
    value: "0.8412",
    detail: "Readiness-gated ML advisory recall on validated split.",
    tone: "warning",
  },
];

export const researchItems: LearningItem[] = [
  {
    title: "Speech Emotion Recognition — VAE & Diffusion",
    detail: "Explored generative augmentation for emotion signal clarity with reproducible PyTorch runs.",
  },
  {
    title: "Ligament Classification — VGG vs Custom CNN",
    detail: "Compared architecture tradeoffs with attention to overfitting behavior and error patterns.",
  },
  {
    title: "PowerGym operational experiment trail",
    detail: "Captured real internship UI flows and process videos for workflow quality analysis.",
  },
];

export const certificationsAndEducation: LearningItem[] = [
  {
    title: "Engineering Degree in Computer Science, Data Science & AI",
    detail: "École Supérieure Privée d’Ingénierie de Monastir — 2023–2026",
  },
  {
    title: "Bachelor in Software Engineering / Computer Science",
    detail: "Faculty of Sciences of Monastir — 2020–2023",
  },
  {
    title: "Python for Data Science, AI & Development — IBM",
    detail: "Certification — 2023",
  },
  {
    title: "What is Data Science? — IBM",
    detail: "Certification — 2023",
  },
  {
    title: "Fundamentals of Visualization with Tableau — University of California",
    detail: "Certification — 2023",
  },
];
