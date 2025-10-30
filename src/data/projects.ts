export type ProjectAction = {
  label: string;
  href: string;
  type?: "primary" | "secondary";
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type FeaturedProject = {
  slug: string;
  title: string;
  summary: string;
  image: ProjectImage;
  stack: string[];
  impact: string[];
  features: string[];
  category: string;
  actions: ProjectAction[];
};

export type CapabilityProject = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  category: string;
  actions: ProjectAction[];
};

export type ResearchProject = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  link: ProjectAction;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "ai-business-agent",
    title: "AI Business Agent — Intelligent Decision-Support SaaS",
    summary:
      "Decision-support copilot that blends retrieval-augmented generation with Monte Carlo simulations so operations teams can ask nuanced questions and receive defensible answers in seconds.",
    image: {
      src: "/assets/projects/ai-business-agent/cover.svg",
      alt: "AI Business Agent dashboard with conversational insight and scenario analytics",
    },
    stack: [
      "Next.js 14",
      "FastAPI",
      "PostgreSQL + pgVector",
      "OpenSearch",
      "MinIO",
      "Redis",
      "Ollama 3B",
      "Docker Compose",
      "Grafana",
    ],
    impact: [
      "Resolved 35,000+ analyst questions with contextual, source-grounded answers.",
      "Automated 120+ risk simulations weekly with narrative-ready reports.",
      "Maintained 92% response accuracy with a 2.7 s median latency across workloads.",
    ],
    features: [
      "Hybrid RAG pipeline merging pgVector + OpenSearch for multimodal ingestion (PDF, CSV, imagery).",
      "Agentic orchestration layer coordinating Ollama 3B reasoning with deterministic guardrails.",
      "Monte Carlo engine (10k+ iterations) producing per-scenario KPIs, confidence bands, and alerting.",
      "End-to-end observability via Grafana dashboards, OpenTelemetry traces, and FastAPI instrumentation.",
    ],
    category: "Decision Intelligence",
    actions: [
      { label: "Case Study", href: "/case-studies/ai-business-agent.html", type: "primary" },
      { label: "Request Demo", href: "mailto:bouzirdali@gmail.com?subject=AI%20Business%20Agent%20Demo", type: "secondary" },
    ],
  },
  {
    slug: "quirkhire",
    title: "QuirkHire — AI Résumé Recommendation Platform",
    summary:
      "LLM-assisted hiring assistant that scores résumés against live roles, explains rationale to recruiters, and monitors pipeline health.",
    image: {
      src: "/assets/projects/quirkhire/images/cover.png",
      alt: "QuirkHire dashboard highlighting AI-generated role recommendations",
    },
    stack: ["React", "Django + DRF", "Supabase", "Redux Toolkit", "OpenRouter API"],
    impact: [
      "Hybrid embeddings + rubric scoring reduced CV screening time to under two minutes.",
      "Explainable summaries increased recruiter trust and candidate follow-up rates.",
      "Supabase analytics revealed conversion funnels and talent pool coverage in real time.",
    ],
    features: [
      "Dual-pass semantic matching with OpenRouter LLMs and deterministic weighting for fairness.",
      "Narrative rationales highlighting matched skills, gaps, and recommended follow-up tasks.",
      "Role pipeline dashboard with engagement metrics, saved searches, and recruiter collaboration.",
    ],
    category: "Talent Intelligence",
    actions: [
      { label: "Live Demo", href: "https://career-reco.vercel.app", type: "primary" },
      { label: "Request Access", href: "mailto:bouzirdali@gmail.com?subject=QuirkHire%20Access", type: "secondary" },
    ],
  },
  {
    slug: "affa",
    title: "AFFA — Automated Fantasy Football Assistant",
    summary:
      "Personalized ML assistant that ingests live stats, forecasts player performance, and recommends optimal lineups with explainable metrics.",
    image: {
      src: "/assets/projects/affa/images/cover.webp",
      alt: "AFFA fantasy football assistant displaying lineup intelligence",
    },
    stack: [
      "Python",
      "Flask",
      "FastAPI",
      "NLTK",
      "MongoDB",
      "Docker",
      "MLflow",
      "ElasticSearch",
      "Kibana",
    ],
    impact: [
      "Achieved ±2 point prediction accuracy across weekly matchups.",
      "Reduced lineup decision time by 73% through explainable recommendations.",
      "Real-time monitoring alerted drift and latency issues before they impacted users.",
    ],
    features: [
      "Automated ingestion and cleaning of live sports feeds with feature-store style caching.",
      "Forecast ensemble combining statistical baselines and neural models with uncertainty bounds.",
      "FastAPI microservices deployed via Docker with MLflow tracking and A/B experimentation.",
    ],
    category: "Applied ML Product",
    actions: [
      { label: "Live Demo", href: "https://bouzirdaliaa.pythonanywhere.com/", type: "primary" },
      { label: "Source", href: "https://github.com/dalibouzir/football-assistant", type: "secondary" },
    ],
  },
  {
    slug: "therapist-funnel",
    title: "Therapist Funnel — Booking & Lead Automation",
    summary:
      "Next.js funnel for therapists that exchanges educational resources for verified leads, syncs Calendly, and powers an admin CRM.",
    image: {
      src: "/assets/projects/therapist-funnel/images/img1.webp",
      alt: "Therapist Funnel admin analytics dashboard",
    },
    stack: ["Next.js 14", "Supabase", "Postgres", "Tailwind", "Calendly API"],
    impact: [
      "Automated distribution of gated resources with tracked redemption codes.",
      "Streamlined therapist bookings with a consolidated admin calendar and reminders.",
      "Delivered a full CRM for leads, conversions, and follow-up automations.",
    ],
    features: [
      "Content funnel with context-aware CTA testing and Supabase row-level security.",
      "Calendly integration for real-time availability and booking confirmations.",
      "Analytics workspace summarizing conversion by funnel stage and resource type.",
    ],
    category: "Growth Automation",
    actions: [{ label: "Live Demo", href: "https://www.fittrahmoms.com", type: "primary" }],
  },
];

export const dataAiProjects: CapabilityProject[] = [
  {
    slug: "affa-lineup-engine",
    title: "AFFA Lineup Engine",
    summary:
      "Ingested multi-season stats, engineered 150+ features, and served explainable lineup recommendations with latency under two seconds.",
    stack: ["Python", "FastAPI", "MongoDB", "Docker", "MLflow"],
    highlights: [
      "Automated DAG for scraping, feature store refresh, and model retraining.",
      "Confidence-aware recommendations surfaced pros/cons for each roster slot.",
      "Elastic/Kibana dashboards monitored inference health and user impact.",
    ],
    category: "Data Science & AI",
    actions: [
      { label: "Live Demo", href: "https://bouzirdaliaa.pythonanywhere.com/", type: "primary" },
      { label: "Source", href: "https://github.com/dalibouzir/football-assistant", type: "secondary" },
    ],
  },
  {
    slug: "climate-forecasting",
    title: "Climate Forecasting Experiments",
    summary:
      "Compared Prophet, ARIMA, and neural baselines on climate indicators to surface actionable projections with confidence bands.",
    stack: ["Python", "Prophet", "ARIMA", "Plotly"],
    highlights: [
      "Data pipelines harmonized NOAA temperature, CO₂, and sea-level series.",
      "Benchmarking notebook captured error bars and scenario commentary for policy partners.",
      "Delivered interactive dashboards for communicating long-horizon risk.",
    ],
    category: "Data Science & AI",
    actions: [
      {
        label: "Notebook",
        href: "https://colab.research.google.com/drive/1spY1OTo6azGFCt7-9OGNY79VJ7qgPAlq?usp=drive_link",
        type: "primary",
      },
    ],
  },
];

export const researchProjects: ResearchProject[] = [
  {
    slug: "speech-emotion-recognition",
    title: "Speech Emotion Recognition (VAE + Diffusion)",
    summary:
      "Augmented low-resource SER dataset with VAE + diffusion synth data, boosting emotion classification without degrading fidelity.",
    tags: ["PyTorch", "Diffusion", "VAE", "Audio"],
    link: {
      label: "Notebook",
      href: "https://colab.research.google.com/drive/1-FUw-_7uFVSYHlILZZfPqzf_q2FhU0x9?usp=drive_link",
    },
  },
  {
    slug: "ligament-classification",
    title: "Ligament MRI — VGG vs Custom CNN",
    summary:
      "Benchmarked transfer learning against bespoke CNNs on medical imagery, documenting the accuracy/overfitting trade-offs.",
    tags: ["TensorFlow", "Keras", "Medical Imaging"],
    link: {
      label: "Notebook",
      href: "https://colab.research.google.com/drive/1goyTDSoYdgo7QPFEUHSBC0WIKJqb_2BG",
    },
  },
  {
    slug: "climate-research-notebook",
    title: "Climate Trend Modeling",
    summary:
      "Explored A/B forecasting stacks for climate indicators, translating raw projections into policy-ready narratives.",
    tags: ["Time Series", "Python", "Analytics"],
    link: {
      label: "Notebook",
      href: "https://colab.research.google.com/drive/1spY1OTo6azGFCt7-9OGNY79VJ7qgPAlq?usp=drive_link",
    },
  },
];

export const developmentProjects: CapabilityProject[] = [
  {
    slug: "elyosdigital-powergym",
    title: "PowerGym Management Suite",
    summary:
      "End-to-end gym platform covering memberships, scheduling, POS, and trainer workflows with granular role-based access.",
    stack: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    highlights: [
      "Automated subscription billing, renewals, and notification cadences.",
      "Trainer and member portals delivered real-time occupancy and class management.",
      "Point-of-sale module unified inventory, payments, and reconciliation exports.",
    ],
    category: "Full-stack Delivery",
    actions: [],
  },
  {
    slug: "mymatch-admin",
    title: "MyMatch Football Admin",
    summary:
      "Realtime admin dashboard for stadium bookings and match logistics with Firebase-backed analytics for league operators.",
    stack: ["Laravel", "Firebase"],
    highlights: [
      "Live updates on fixtures, player rosters, and venue capacity.",
      "Role-based dashboards for admins, referees, and stadium managers.",
      "Automated alerts for scheduling conflicts and under-utilised slots.",
    ],
    category: "Full-stack Delivery",
    actions: [],
  },
];

export const mlopsProjects: CapabilityProject[] = [
  {
    slug: "affa-mlops",
    title: "Production MLOps for AFFA",
    summary:
      "Hardened the AFFA backend with experiment tracking, container orchestration, and observability for sustained reliability.",
    stack: ["FastAPI", "Docker", "MLflow", "ElasticSearch", "Kibana"],
    highlights: [
      "MLflow lineage tracked model versions, hyperparameters, and deployment history.",
      "Containerized inference services with rolling updates and smoke-test hooks.",
      "Telemetry dashboards (Elastic/Kibana) flagged latency drift and error spikes.",
    ],
    category: "MLOps & Systems",
    actions: [
      { label: "Source", href: "https://github.com/dalibouzir/MLops", type: "primary" },
    ],
  },
];
