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
      "Architected an end-to-end AI decision-support platform blending LLM reasoning, retrieval-augmented generation, and Monte Carlo risk simulations for business analysis.",
    impact: [
      "Orchestrated a multi-route decision engine handling 24K+ queries and 150+ simulations with ~97% routing accuracy and ~2.7 s median latency.",
      "Wired PostgreSQL + pgVector with OpenSearch for hybrid semantic retrieval, improving answer relevance and recall across diverse business questions.",
      "Deployed Grafana + Prometheus dashboards for full observability, from latency and routing accuracy to retrieval quality and failure modes.",
    ],
    stack: [
      "Next.js 14",
      "FastAPI",
      "PostgreSQL + pgVector",
      "OpenSearch",
      "MinIO",
      "Redis",
      "Llama 3.1 8B / GPT-4o-mini",
      "Docker Compose",
      "Grafana",
      "Prometheus",
    ],
    tags: ["fullstack", "fitness", "laravel", "ml"],
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
    tags: ["ai", "mlops", "llm", "business-intel"],
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
    tagline: "AI assistant that recommends weekly lineups with ±2-point precision across multiple gameweeks.",
    summary:
      "Built an end-to-end ML assistant that ingests football stats, learns player performance patterns, and recommends fantasy lineups with measurable accuracy in real time.",
    impact: [
      "Engineered an ensemble prediction engine (Random Forest + Bayesian inference) improving weekly recommendation quality by ~73%.",
      "Achieved ±2-point forecast precision across 15+ gameweeks, cutting prediction error by over 70%.",
      "Instrumented real-time dashboards in Elasticsearch + Kibana to track drift, accuracy, and per-player evolution.",
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
      "Elasticsearch",
      "Kibana",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://bouzirdaliaa.pythonanywhere.com",
      },
    ],
    tags: ["ai", "ml", "analytics", "fantasy-sports"],
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
    tagline: "LLM-powered talent platform that matches candidates to jobs with explainable recommendations",
    summary:
      "Designed a talent-matching platform for career centers that uses hybrid NLP/LLM models to understand CVs and job posts, then ranks candidates with transparent explanations.",
    impact: [
      "Matched 1,200+ candidates to 200+ job postings, boosting recruiter match accuracy by ~28%.",
      "Cut screening and shortlisting time by about 35% through explainable, ranked recommendations.",
      "Delivered recruiter dashboards for match quality, engagement metrics, and model performance, improving retention by ~22%.",
    ],
    stack: ["React", "Django", "Django REST Framework", "Supabase", "Redux Toolkit", "OpenRouter API"],
    links: [
      {
        label: "Live",
        href: "https://career-reco.vercel.app",
      },
    ],
    tags: ["ai", "nlp", "recruitment", "recommendations"],
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
    tagline: "Admin panel and backend powering thousands of players and sports complexes with real-time data",
    summary:
      "Led backend and admin panel development for a large sports platform managing players, complex operations, and scheduling with real-time sync to mobile apps.",
    impact: [
      "Centralized 7,000+ player profiles and 70+ sports complexes, improving data accessibility by ~65%.",
      "Built scalable Laravel services integrated with Firebase and REST APIs, achieving ~99.9% uptime and <2-second sync latency.",
      "Shipped dashboards and analytics that cut manual tracking time by ~40% and lifted admin productivity by 60%+.",
    ],
    stack: ["Laravel", "Firebase", "REST APIs"],
    links: [],
    tags: ["backend", "laravel", "admin", "firebase"],
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
      "Built a responsive booking platform that streamlines therapist scheduling and client bookings, syncing calendars in real time and automating support with an AI assistant.",
    impact: [
      "Delivered a Next.js 14 + Supabase booking platform that improves therapist scheduling and client UX.",
      "Implemented real-time calendar sync, dynamic availability, and exception handling to reduce scheduling conflicts.",
      "Integrated an AI assistant via OpenAI API to automate FAQs and support, lowering manual support load.",
    ],
    stack: ["Next.js 14", "Supabase", "motion-dom", "Tailwind CSS"],
    links: [
      {
        label: "Live",
        href: "https://fittrahmoms.com",
      },
    ],
    tags: ["fullstack", "nextjs", "supabase", "ai-assistant"],
    featured: true,
    visual: {
      src: "/assets/projects/therapist-funnel/images/img5.webp",
      alt: "Therapist scheduling interface for Fittrah Moms",
    },
    media: {
      image: "/assets/projects/therapist-funnel/images/img5.webp",
    },
  },
  {
    slug: "elyosdigital-powergym",
    category: "Backend Engineering",
    title: "PowerGym (ElyosDigital) — Gym Management Platform",
    tagline: "Laravel-based membership + scheduling operations",
    summary:
      "Built the FitLife / PowerGym platform combining admin, scheduling, and AI-driven workout insights to replace manual gym workflows across memberships, coaches, and performance dashboards.",
    impact: [
      "Launched a full-stack gym management system covering memberships, subscriptions, activities, and coaches.",
      "Introduced automated session scheduling that reduced manual coordination by ~40% and boosted accuracy by 25–30%.",
      "Implemented AI-driven workout recommendations, BMI tracking, and Plotly dashboards to surface progress and trends.",
      "Delivered responsive, secure admin panels focused on data protection and usability.",
    ],
    stack: ["Laravel", "Python (Flask)", "MySQL", "Plotly", "Tailwind CSS"],
    links: [
      {
        label: "Discuss PowerGym",
        href: "mailto:bouzirdali@gmail.com?subject=PowerGym%20case%20study",
      },
    ],
    visual: {
      src: "/assets/projects/elyosdigital-powergym/cover.svg",
      alt: "PowerGym admin dashboard",
    },
    media: {
      image: "/assets/projects/elyosdigital-powergym/cover.svg",
    },
  },
];
