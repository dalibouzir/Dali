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
    id: "ai-business-agent",
    slug: "ai-business-agent",
    title: "AI Business Agent",
    tagline: "Intelligent Decision-Support SaaS",
    category: "AI & MLOps",
    chip: "AI & MLOps",
    description:
      "Production-ready SaaS platform that drives decisions using LLM reasoning, RAG, and Monte Carlo risk modeling.",
    impact: [
      "Orchestrated a multi-route decision engine that handled 24k+ queries and 150 simulations with ~97% routing accuracy and ~2.7 s median latency.",
      "Integrated PostgreSQL + pgVector with OpenSearch for hybrid semantic retrieval, backed by Grafana and Prometheus observability.",
      "Shipped conversational dashboards turning complex reports into natural-language answers for business users.",
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
      "Kaggle Notebook",
      "GitHub",
    ],
    links: [
      { label: "Model notebook", href: "https://www.kaggle.com/code/dalibouzir/ai-business-agent", variant: "primary" },
      { label: "Source", href: "https://github.com/dalibouzir/ai-business-agent", variant: "secondary" },
    ],
  },
  {
    id: "affa",
    slug: "affa",
    title: "AFFA",
    tagline: "Automated Fantasy Football Assistant",
    category: "AI & MLOps",
    chip: "AI & MLOps",
    description:
      "AI assistant that recommends weekly lineups with measurable accuracy across fantasy gameweeks.",
    impact: [
      "Engineered an ensemble prediction engine using Random Forest and Bayesian inference, improving weekly recommendations by ~73%.",
      "Achieved ±2-point forecast precision across 15+ gameweeks, tracked via MLflow experiments.",
      "Instrumented real-time dashboards in Elasticsearch and Kibana to monitor model drift and performance.",
    ],
    stack: ["Python", "Flask", "FastAPI", "NLTK", "MongoDB", "API-Football", "Docker", "MLflow", "Elasticsearch", "Kibana"],
    links: [{ label: "Live Demo", href: "https://bouzirdaliaa.pythonanywhere.com/", variant: "primary" }],
  },
  {
    id: "quirkhire",
    slug: "quirkhire",
    title: "QuirkHire",
    tagline: "AI Résumé Recommendation Platform",
    category: "AI & MLOps",
    chip: "AI & MLOps",
    description:
      "LLM-powered talent-matching platform that helps career centers and recruiters match candidates with explainable recommendations.",
    impact: [
      "Matched 1,200+ candidates to 200+ job postings, increasing recruiter match accuracy by ~28%.",
      "Cut screening and shortlisting time by about 35% thanks to explainable, ranked recommendations.",
      "Delivered dashboards for match quality, candidate engagement, and model performance monitoring.",
    ],
    stack: ["React", "Django", "Django REST Framework", "Supabase", "Redux Toolkit", "OpenRouter API"],
    links: [{ label: "Live", href: "https://career-reco.vercel.app", variant: "primary" }],
  },
  {
    id: "mymatch",
    slug: "mymatch",
    title: "MyMatch",
    tagline: "Back-End & Admin Panel",
    category: "Backend",
    chip: "Backend",
    description:
      "Full-featured administration dashboard for a sports platform managing thousands of players and complexes.",
    impact: [
      "Centralized 7,000+ player profiles and 70+ complexes, improving data accessibility by around 65%.",
      "Implemented Laravel services integrated with Firebase and REST APIs, hitting ~99.9% uptime and sub-2-second sync latency.",
      "Built analytics views that cut manual tracking time by ~40% and lifted admin productivity by 60%+.",
    ],
    stack: ["Laravel", "Firebase", "REST APIs", "MySQL"],
    links: [{ label: "View details", href: "mailto:bouzirdali@gmail.com?subject=MyMatch%20case%20study", variant: "primary" }],
  },
  {
    id: "meriem-booking",
    slug: "meriem-booking",
    title: "Meriem Booking",
    tagline: "Fittrah Moms Therapist Scheduling",
    category: "Full-Stack",
    chip: "Full-Stack",
    description:
      "Responsive booking platform that streamlines therapist scheduling and client experience for a wellness brand.",
    impact: [
      "Implemented real-time calendar synchronization, dynamic availability, and exception handling for sessions.",
      "Integrated an AI assistant via OpenAI API to support users and automate common questions.",
      "Built an intuitive admin dashboard for appointments, timetables, and therapist workloads.",
    ],
    stack: ["Next.js 14", "Supabase", "motion-dom", "Tailwind CSS"],
    links: [{ label: "Live", href: "https://fittrahmoms.com", variant: "primary" }],
  },
  {
    id: "elyosdigital-powergym",
    slug: "elyosdigital-powergym",
    title: "PowerGym by ElyosDigital",
    tagline: "Gym admin + member automation",
    category: "Backend",
    chip: "Backend",
    description:
      "Laravel-based gym management platform launched during the ElyosDigital internship to digitize memberships and scheduling.",
    impact: [
      "Centralized memberships, subscriptions, and coach schedules in a secure dashboard.",
      "Automated session scheduling workflows that cut manual coordination by ~40% and raised timetable accuracy by 25–30%.",
      "Emphasized responsive back-office modules with solid access control and data integrity safeguards.",
    ],
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    links: [{ label: "View details", href: "mailto:bouzirdali@gmail.com?subject=PowerGym%20case%20study", variant: "primary" }],
  },
];
