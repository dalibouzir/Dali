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
  impact: string[];
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
    slug: "ai-business-agent",
    category: "AI & MLOps",
    title: "AI Business Agent — Intelligent Decision-Support SaaS",
    tagline: "LLM-powered decision engine with conversational analytics",
    summary:
      "Production-ready SaaS platform that drives decisions using LLM reasoning, RAG, and Monte Carlo risk modeling.",
    impact: [
      "Scaled to process 35,000+ queries and execute 120+ simulations with ~92% response accuracy and ~2.7 s median latency.",
      "Engineered ingestion for PDF, spreadsheet, and image data with governance controls and Grafana-based observability.",
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
    links: [
      {
        label: "Kaggle Notebook",
        href: "https://www.kaggle.com/code/mohamedalibouzir/kaggle-llama31-refined/",
      },
      {
        label: "GitHub",
        href: "https://github.com/dalibouzir/AI-Agnet",
      },
    ],
    featured: true,
    visual: {
      src: "/assets/projects/ai-business-agent/cover.svg",
      alt: "AI Business Agent dashboard with conversational analytics",
    },
    media: {
      image: "/assets/projects/ai-business-agent/cover.svg",
    },
  },
  {
    slug: "affa",
    category: "AI & MLOps",
    title: "AFFA — Automated Fantasy Football Assistant",
    tagline: "AI assistant for weekly fantasy lineup recommendations",
    summary:
      "Developed an AI assistant that recommends weekly lineups with ±2 point prediction accuracy across 15+ gameweeks.",
    impact: [
      "Reduced prediction error by ~73% through MLflow-tracked experimentation and optimized ensemble modeling.",
      "Deployed real-time monitoring with ElasticSearch and Kibana to track model performance and surface insights.",
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
    links: [
      {
        label: "Live Demo",
        href: "https://bouzirdaliaa.pythonanywhere.com",
      },
    ],
    featured: true,
    visual: {
      src: "/assets/projects/affa/images/cover.webp",
      alt: "AFFA fantasy football assistant lineup recommendations",
    },
    media: {
      image: "/assets/projects/affa/images/cover.webp",
    },
  },
  {
    slug: "quirkhire",
    category: "AI & MLOps",
    title: "QuirkHire — AI Résumé Recommendation Platform",
    tagline: "Hybrid NLP/LLM résumé analysis for recruiters",
    summary:
      "Engineered hybrid NLP/LLM résumé analysis that generates personalized, explainable recommendations for recruiters.",
    impact: [
      "Deployed analytics dashboards so career centers can evaluate match accuracy, monitor candidates, and track engagement.",
      "Designed an intuitive front end that streamlines applications and recruiter collaboration.",
    ],
    stack: ["React", "Django", "DRF", "Supabase", "Redux Toolkit", "OpenRouter API"],
    links: [
      {
        label: "Live",
        href: "https://career-reco.vercel.app",
      },
    ],
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
    slug: "mymatch",
    category: "Backend Engineering",
    title: "MyMatch — Back-End & Admin Panel",
    tagline: "Centralized admin platform for sports complexes",
    summary:
      "Designed a full-featured administration dashboard managing 7,000+ players and 70+ sports complexes.",
    impact: [
      "Built scalable Laravel services with Firebase and REST APIs for real-time sync and secure authentication.",
      "Implemented interactive dashboards that improved responsiveness and operational efficiency for administrators.",
    ],
    stack: ["Laravel", "Firebase", "REST APIs"],
    links: [],
    featured: true,
    media: {
      image: "/assets/projects/mymatch/images/cover.webp",
    },
  },
  {
    slug: "meriem-booking",
    category: "Full-Stack Applications",
    title: "Meriem Booking (Fittrah Moms) — Therapist Scheduling",
    tagline: "Therapist booking platform with AI assistant",
    summary:
      "Engineered a responsive booking platform in Next.js 14 and Supabase to streamline therapist scheduling.",
    impact: [
      "Implemented real-time calendar sync, session exceptions, and dynamic availability for a smooth client experience.",
      "Integrated an AI assistant using OpenAI API to support users and streamline interactions.",
      "Built an admin dashboard so therapists can manage bookings and calendars efficiently.",
    ],
    stack: ["Next.js 14", "Supabase", "motion-dom", "Tailwind CSS"],
    links: [
      {
        label: "Live",
        href: "https://fittrahmoms.com",
      },
    ],
    featured: true,
    visual: {
      src: "/assets/projects/therapist-funnel/images/img5.webp",
      alt: "Therapist scheduling interface for Fittrah Moms",
    },
    media: {
      image: "/assets/projects/therapist-funnel/images/img5.webp",
    },
  },
];
