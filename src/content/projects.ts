export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMedia = {
  image?: string;
  video?: string;
};

export type Project = {
  slug: string;
  category: "AI & MLOps" | "Backend Engineering" | "Full-Stack Applications";
  title: string;
  tagline: string;
  summary: string;
  role: string;
  status: string;
  problem: string;
  architecture: string[];
  features: string[];
  impact: string[];
  validation?: string[];
  limitations: string[];
  stack: string[];
  links: ProjectLink[];
  tags?: string[];
  featured?: boolean;
  visual?: {
    src: string;
    alt: string;
  };
  media?: ProjectMedia;
};

export const projects: Project[] = [
  {
    slug: "weefarm",
    category: "AI & MLOps",
    title: "WeeFarm — AI-Assisted Decision-Support Platform",
    tagline: "Validation-backed prototype for agricultural cooperative operations",
    summary:
      "Built an evidence-first assistant workflow combining SQL factual analytics, RAG contextual retrieval, ML advisory signals, and structured response composition with human manager review.",
    role: "AI Engineer Intern — Verdanova Solutions",
    status: "Validation-backed prototype (PFE/demo-ready)",
    problem:
      "Cooperative operations required structured decision support across stock, lots, traceability, treasury, and exports while preserving factual evidence and manager oversight.",
    architecture: [
      "Operational PostgreSQL/Supabase data",
      "SQL factual layer",
      "RAG contextual layer",
      "ML advisory layer",
      "LLM response composition",
      "Human manager review",
    ],
    features: [
      "Role-scoped workflows for stock, lots, traceability, treasury, exports, document uploads, and manager operations.",
      "Evidence-first orchestration separating SQL facts, RAG context, ML advisory signals, and final response composition.",
      "Feedback-driven improvements from project meetings into backend, frontend, workflow, and assistant layers.",
    ],
    impact: [
      "Built with FastAPI, Next.js, PostgreSQL/Supabase, pgvector, SQLAlchemy, Alembic, Docker, Azure Container Apps, and Vercel.",
      "Validated baseline behavior with 20/20 executed cases, 17 PASS / 3 PARTIAL / 0 FAIL, 100% route accuracy, and 0 runtime errors.",
      "Integrated readiness-gated ML advisory signals with strict train/test validation, reaching 0.8412 high-risk recall.",
    ],
    validation: [
      "20/20 executed assistant audit cases",
      "17 PASS / 3 PARTIAL / 0 FAIL",
      "100% route accuracy",
      "0 runtime errors",
      "0.8412 high-risk recall",
    ],
    limitations: [
      "Validation-backed prototype; not positioned as production-ready enterprise automation.",
      "ML signals are advisory and readiness-gated rather than autonomous control.",
      "Human manager review remains required before operational execution.",
    ],
    stack: [
      "FastAPI",
      "Next.js",
      "PostgreSQL/Supabase",
      "pgvector",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Azure Container Apps",
      "Vercel",
    ],
    links: [{ label: "Case Study", href: "/projects/weefarm" }],
    tags: ["ai", "llm", "rag", "decision-support", "fastapi", "pgvector", "mlops"],
    featured: true,
    visual: {
      src: "/assets/projects/weefarm/cover.svg",
      alt: "WeeFarm architecture overview card",
    },
    media: {
      image: "/assets/projects/weefarm/cover.svg",
    },
  },
  {
    slug: "ai-business-agent",
    category: "AI & MLOps",
    title: "AI Business Agent — Intelligent Decision-Support SaaS",
    tagline: "RAG retrieval, orchestration, and simulation workflows",
    summary:
      "AI decision-support project combining RAG retrieval, LLM orchestration, simulation workflows, and web interfaces with FastAPI, PostgreSQL/pgvector, OpenSearch, MinIO, Redis, and Docker.",
    role: "AI Engineering Project",
    status: "Prototype + architecture demo",
    problem:
      "Business users needed traceable assistant responses across mixed structured and semi-structured data while maintaining deterministic retrieval and decision support transparency.",
    architecture: [
      "FastAPI orchestration services",
      "PostgreSQL + pgvector factual/semantic retrieval",
      "OpenSearch and MinIO contextual storage",
      "Simulation and routing workflows",
      "Structured response composition UI",
    ],
    features: [
      "Separated retrieval, route planning, and response-composition responsibilities for clearer assistant behavior.",
      "Integrated hybrid data workflow across PostgreSQL/pgvector, OpenSearch, and object storage.",
      "Implemented observability hooks for route behavior and latency inspections.",
    ],
    impact: [
      "Shipped end-to-end architecture with backend orchestration and web delivery surfaces.",
      "Enabled scenario-oriented workflows for operational decision support experiments.",
      "Provided measurable traceability through structured response and retrieval boundaries.",
    ],
    limitations: [
      "Prototype framing with advisory output posture.",
      "Evaluation outcomes are context-dependent and require workflow-specific validation.",
      "Operational decisions require human review.",
    ],
    stack: [
      "FastAPI",
      "PostgreSQL + pgvector",
      "OpenSearch",
      "MinIO",
      "Redis",
      "Docker",
      "Next.js",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/dalibouzir/AI-Agnet",
      },
    ],
    tags: ["ai", "llm", "rag", "decision-support", "fastapi", "pgvector", "mlops"],
    featured: true,
    visual: {
      src: "/assets/projects/ai-business-agent/cover.svg",
      alt: "AI Business Agent dashboard with assistant workflows",
    },
    media: {
      image: "/assets/projects/ai-business-agent/cover.svg",
    },
  },
  {
    slug: "affa",
    category: "AI & MLOps",
    title: "AFFA — Automated Fantasy Football Assistant",
    tagline: "ML-based recommendation prototype for weekly decisions",
    summary:
      "ML-based recommendation prototype using Python services, API-driven data flows, player comparison, and recommendation workflows.",
    role: "ML Advisory Prototype",
    status: "Experiment + product prototype",
    problem:
      "Fantasy football users needed explainable weekly lineup recommendations from changing player statistics and fixture conditions.",
    architecture: [
      "Python data ingestion services",
      "Feature engineering and player scoring",
      "Recommendation API layer (Flask/FastAPI)",
      "Evaluation and monitoring with MLflow, Elasticsearch, and Kibana",
    ],
    features: [
      "Built advisory recommendation flows with model experiments and evaluation tracking.",
      "Implemented API-driven data ingestion for structured feature generation.",
      "Added monitoring views for trend inspection and decision-support iteration.",
    ],
    impact: [
      "Delivered a working recommendation prototype with demo-ready API and UI surfaces.",
      "Established experiment traceability and iteration workflows through monitoring stack.",
      "Connected data feeds and recommendation logic into repeatable advisory loop.",
    ],
    limitations: [
      "Recommendation output remains advisory and not guaranteed competitive performance.",
      "Data freshness and league dynamics can affect result quality.",
      "Prototype evaluation scope is narrower than production league operations.",
    ],
    stack: ["Python", "Flask", "FastAPI", "MLflow", "Elasticsearch", "Kibana"],
    links: [
      {
        label: "Live Demo",
        href: "https://bouzirdaliaa.pythonanywhere.com",
      },
    ],
    tags: ["ai", "ml", "advisory", "analytics"],
    featured: true,
    visual: {
      src: "/assets/projects/affa/images/cover.webp",
      alt: "AFFA recommendation interface",
    },
    media: {
      image: "/assets/projects/affa/images/cover.webp",
      video: "/assets/projects/affa/videos/demo.mov",
    },
  },
  {
    slug: "quirkhire",
    category: "AI & MLOps",
    title: "QuirkHire — Resume Recommendation Prototype",
    tagline: "Recruiter-facing recommendation workflows",
    summary:
      "AI-based resume recommendation prototype with recruiter workflows using React, Django/DRF, and Supabase.",
    role: "AI Product Prototype",
    status: "Workflow prototype",
    problem:
      "Recruiters and career-center operators needed structured support to triage CVs and shortlist candidates with clearer ranking rationale.",
    architecture: [
      "React recruiter interface",
      "Django/DRF backend APIs",
      "Supabase data workflow",
      "Recommendation pipeline for shortlist ranking",
    ],
    features: [
      "Designed recruiter workflow screens for recommendation review and candidate shortlisting.",
      "Implemented recommendation logic with manual review-friendly outputs.",
      "Integrated web product flow for practical hiring support experimentation.",
    ],
    impact: [
      "Delivered a role-oriented recommendation workflow prototype.",
      "Improved recruiter-side comparison flow with clearer recommendation presentation.",
      "Demonstrated AI-assisted ranking integration in practical UI workflow.",
    ],
    limitations: [
      "Prototype recommendation layer requires further domain calibration.",
      "Final hiring decisions remain human-reviewed.",
      "Evaluation depth depends on available labeled hiring outcomes.",
    ],
    stack: ["React", "Django", "Django REST Framework", "Supabase"],
    links: [
      {
        label: "Live",
        href: "https://career-reco.vercel.app",
      },
    ],
    tags: ["ai", "llm", "nlp", "recruitment", "recommendations"],
    featured: true,
    visual: {
      src: "/assets/projects/quirkhire/cover.svg",
      alt: "QuirkHire recommendation dashboard motif",
    },
    media: {
      image: "/assets/projects/quirkhire/cover.svg",
    },
  },
  {
    slug: "elyosdigital-powergym",
    category: "Backend Engineering",
    title: "PowerGym — ElyosDigital Internship Platform",
    tagline: "Gym management workflows with real operational media",
    summary:
      "Laravel-based internship project for memberships, subscriptions, scheduling, and secure administrative operations.",
    role: "Web Development Intern",
    status: "Delivered internship system",
    problem:
      "Gym operators required database-backed workflows for memberships, sessions, coach planning, and daily administration.",
    architecture: [
      "Laravel backend modules",
      "MySQL persistence",
      "Admin interfaces for memberships and sessions",
      "Secure back-office operations",
    ],
    features: [
      "Implemented membership, subscription, and coach scheduling workflows.",
      "Built CRUD administration surfaces for members, coaches, sessions, and operations.",
      "Captured real interface and process recordings during internship delivery.",
    ],
    impact: [
      "Digitized operational tasks that were previously managed manually.",
      "Improved visibility of schedules and administrative updates.",
      "Shipped a secure back-office workflow baseline for operational coordination.",
    ],
    limitations: [
      "Web operations project; not positioned as core AI case study.",
      "Media and workflow scope tied to internship context.",
      "Future AI augmentation would require additional domain-specific modeling.",
    ],
    stack: ["Laravel", "MySQL", "REST APIs", "Back-office workflows"],
    links: [],
    tags: ["backend", "laravel", "operations"],
    featured: false,
    visual: {
      src: "/assets/projects/elyosdigital-powergym/images/img5.webp",
      alt: "PowerGym admin interface snapshot",
    },
    media: {
      image: "/assets/projects/elyosdigital-powergym/images/img5.webp",
      video: "/assets/projects/elyosdigital-powergym/videos/demo-1.mov",
    },
  },
  {
    slug: "meriem-booking",
    category: "Full-Stack Applications",
    title: "Meriem Booking (Fittrah Moms)",
    tagline: "Therapist scheduling and booking workflow platform",
    summary:
      "Next.js and Supabase booking workflow project for therapist scheduling, user booking, and operational administration.",
    role: "Full-stack Delivery Project",
    status: "Shipped web workflow",
    problem:
      "The platform needed a practical scheduling and booking flow for therapists and clients with operational visibility for administrators.",
    architecture: [
      "Next.js front-end flow",
      "Supabase data and auth integration",
      "Dynamic availability and booking logic",
      "Administrative scheduling operations",
    ],
    features: [
      "Implemented calendar-aligned therapist booking and availability workflows.",
      "Built responsive UI paths for user booking and operator oversight.",
      "Added operational administration views for schedule and appointment coordination.",
    ],
    impact: [
      "Delivered a complete booking workflow from user request to session tracking.",
      "Improved operational clarity by centralizing scheduling operations.",
      "Provided reusable full-stack architecture patterns for service-style platforms.",
    ],
    limitations: [
      "Workflow platform project, not positioned as an AI flagship case study.",
      "Further AI augmentation would require additional domain-specific evaluation.",
      "Production-level telemetry and stress validation were outside current scope.",
    ],
    stack: ["Next.js", "Supabase", "Scheduling workflows", "Responsive UI"],
    links: [],
    tags: ["fullstack", "nextjs", "supabase", "workflow"],
    featured: false,
    visual: {
      src: "/assets/projects/therapist-funnel/images/img5.webp",
      alt: "Therapist booking interface preview",
    },
    media: {
      image: "/assets/projects/therapist-funnel/images/img5.webp",
    },
  },
];
