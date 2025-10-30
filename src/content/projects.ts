export type Project = {
  slug: string;
  title: string;
  summary: string[];
  stack: string[];
  tags: string[];
  links: {
    live?: string;
    repo?: string;
  };
  featured?: boolean;
  visual?: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    slug: "ai-business-agent",
    title: "AI Business Agent — Intelligent Decision-Support SaaS",
    summary: [
      "Delivered a production-ready SaaS platform that drives decisions through LLM reasoning, RAG, and Monte Carlo risk modeling.",
      "Scaled to process 35,000+ queries, execute 120+ simulations, and sustain 92% response accuracy with a 2.7 s median latency.",
      "Engineered ingestion for PDF, spreadsheet, and image sources with Grafana-based observability and governance controls.",
    ],
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
    tags: [
      "ai",
      "data-science",
      "mlops",
      "analytics",
      "fullstack",
      "data-eng",
      "pgvector",
      "opensearch",
      "llm",
      "fastapi",
    ],
    links: {},
    featured: true,
    visual: {
      src: "/assets/projects/ai-business-agent/cover.svg",
      alt: "AI Business Agent dashboard with conversational analytics",
    },
  },
  {
    slug: "quirkhire",
    title: "QuirkHire — AI Résumé Recommendation Platform",
    summary: [
      "Engineered hybrid NLP/LLM résumé analysis that generates personalized, explainable recommendations for recruiters.",
      "Deployed analytics dashboards so career centers can evaluate match accuracy, monitor candidates, and track engagement.",
      "Designed an intuitive front-end experience that streamlines applications and recruiter collaboration.",
    ],
    stack: ["React", "Django", "DRF", "Supabase", "Redux Toolkit", "OpenRouter API"],
    tags: ["ai", "nlp", "fullstack", "react", "llm", "supabase"],
    links: {
      live: "https://career-reco.vercel.app",
    },
    featured: true,
    visual: {
      src: "/assets/projects/quirkhire/cover.svg",
      alt: "QuirkHire recommendation dashboard motif",
    },
  },
  {
    slug: "affa",
    title: "AFFA — Automated Fantasy Football Assistant",
    summary: [
      "Developed an AI assistant that recommends weekly lineups with ±2 point prediction accuracy across 15+ gameweeks.",
      "Reduced prediction error by 73% through MLflow-tracked experimentation and optimized ensemble modeling.",
      "Deployed real-time monitoring with ElasticSearch and Kibana to track performance and surface insights.",
    ],
    stack: [
      "Python",
      "Flask",
      "FastAPI",
      "NLTK",
      "MongoDB",
      "API-Football",
      "Docker",
      "MLflow",
      "ElasticSearch",
      "Kibana",
    ],
    tags: [
      "ai",
      "data-science",
      "mlops",
      "backend",
      "mlflow",
      "elasticsearch",
      "kibana",
      "fastapi",
      "flask",
    ],
    links: {
      live: "https://bouzirdaliaa.pythonanywhere.com",
    },
    featured: true,
    visual: {
      src: "/assets/projects/affa/images/cover.webp",
      alt: "AFFA fantasy football assistant lineup recommendations",
    },
  },
  {
    slug: "mymatch",
    title: "MyMatch — Back-End & Admin Panel",
    summary: [
      "Designed a full-featured administration dashboard managing 7,000+ players and 70+ sports complexes.",
      "Built scalable Laravel services with Firebase and REST APIs for real-time sync and secure authentication.",
      "Implemented interactive dashboards that enhanced responsiveness and operational efficiency for administrators.",
    ],
    stack: ["Laravel", "Firebase", "REST APIs"],
    tags: ["backend", "api", "laravel"],
    links: {},
    featured: true,
  },
  {
    slug: "meriem-booking",
    title: "Meriem Booking (Fittrah Moms) — Therapist Scheduling",
    summary: [
      "Engineered a responsive booking platform in Next.js 14 and Supabase to streamline therapist scheduling.",
      "Integrated real-time slot management and schedule exceptions for a seamless client experience.",
      "Built a lightweight admin dashboard so therapists can oversee bookings and manage calendars efficiently.",
    ],
    stack: ["Next.js 14", "Supabase", "motion-dom", "Tailwind CSS"],
    tags: ["fullstack", "react", "nextjs", "supabase", "ui"],
    links: {
      live: "https://fittrahmoms.com",
    },
    featured: true,
    visual: {
      src: "/assets/projects/therapist-funnel/images/img5.webp",
      alt: "Therapist scheduling interface for Fittrah Moms",
    },
  },
];
