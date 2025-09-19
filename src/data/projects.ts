export type ProjectLink = {
  label: string;
  href: string;
  emoji?: string;
};

export type ProjectMediaImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectMediaVideo = {
  src: string;
  caption?: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  images?: ProjectMediaImage[];
  videos?: ProjectMediaVideo[];
  links?: ProjectLink[];
  impact?: string;
  featured?: boolean;
  featuredOrder?: number;
  showMedia?: boolean;
};

export const dataAI: Project[] = [
  {
    title: "AFFA – Fantasy Football Assistant",
    category: "Data & AI",
    description:
      "Personal ML assistant that helps fantasy football players make smarter lineup decisions. End-to-end pipeline: data collection/cleaning → modeling → FastAPI services → monitoring. Combines player performance forecasting with recommendation logic (NLTK + ML pipelines). Dockerized, tracked with MLflow, and monitored via Elastic/Kibana. Outperformed my own baseline strategy; realtime latency kept under ~2s/rec.",
    impact: "Cut lineup decision time by 40% while keeping inference under two seconds per recommendation.",
    tech: ["Python", "Flask", "FastAPI", "NLTK", "MongoDB", "Docker", "MLflow", "ElasticSearch", "Kibana"],
    featured: true,
    featuredOrder: 1,
    images: [
      { src: "/assets/projects/affa/images/cover.webp", alt: "AFFA fantasy football assistant dashboard with lineup insights" },
      { src: "/assets/projects/affa/images/screen-1.webp", alt: "Player comparison screen showcasing performance projections" },
      { src: "/assets/projects/affa/images/screen-2.webp", alt: "Team roster selection view with confidence scores" },
    ],
    videos: [
      { src: "/assets/projects/affa/videos/demo.mov", caption: "Lineup simulation with real-time recommendation updates" },
      { src: "/assets/projects/affa/videos/demo2.mov", caption: "Model monitoring dashboard captured from production deployment" },
    ],
    links: [
      { label: "Live Demo", href: "https://bouzirdaliaa.pythonanywhere.com/", emoji: "🚀" },
    ],
  },
];

export const mlResearch: Project[] = [
  {
    title: "Speech Emotion Recognition (VAE + Diffusion)",
    category: "ML Research",
    description:
      "Reproduced a university project on speech emotion recognition and used synthetic augmentation (VAE + diffusion) to expand limited datasets. Found synthetic data measurably improved recognition accuracy compared to baselines; explored trade-offs between sample quality and training stability.",
    impact: "Improved emotion classification accuracy by augmenting with curated synthetic spectrograms.",
    tech: ["PyTorch", "VAE", "Diffusion", "Jupyter"],
    images: [
      { src: "/assets/projects/ser-vae-diffusion/images/cover.png", alt: "Notebook showing VAE reconstruction of audio spectrograms" },
    ],
    videos: [
      { src: "/assets/projects/ser-vae-diffusion/videos/demo.mp4", caption: "Walkthrough of the VAE + diffusion augmentation pipeline" },
    ],
    links: [
      { label: "Notebook", href: "https://colab.research.google.com/drive/1-FUw-_7uFVSYHlILZZfPqzf_q2FhU0x9?usp=drive_link", emoji: "📓" },
    ],
  },
  {
    title: "Climate Change Time Series (Colab)",
    category: "ML Research",
    description:
      "Modeled climate indicators (temperature, CO₂, sea levels). Compared classical approaches (ARIMA/Prophet) vs ML methods; produced exploratory dashboards for trend visualization and forecasting.",
    impact: "Surfaced decade-long climate trends with confidence intervals for policy discussions.",
    tech: ["Python", "Colab", "Time Series"],
    images: [
      { src: "/assets/projects/time-series-climate/images/cover.png", alt: "Climate dashboard summarizing temperature and CO₂ trends" },
    ],
    videos: [
      { src: "/assets/projects/time-series-climate/videos/demo.mp4", caption: "Exploration of forecasting notebooks comparing ARIMA and Prophet" },
    ],
    links: [
      { label: "Notebook", href: "https://colab.research.google.com/drive/1spY1OTo6azGFCt7-9OGNY79VJ7qgPAlq?usp=drive_link", emoji: "📓" },
    ],
  },
  {
    title: "VGG vs CNN for Ligament Classification",
    category: "ML Research",
    description:
      "Worked on ~8GB MRI dataset for ligament diagnosis. Compared VGG vs custom CNN: CNN trained faster; VGG achieved higher accuracy but tended to overfit. Delivered insights on accuracy vs complexity for medical imaging tasks.",
    impact: "Quantified 6% accuracy lift from transfer learning while documenting overfitting risks.",
    tech: ["TensorFlow", "Keras", "Matplotlib", "Colab"],
    images: [
      { src: "/assets/projects/vgg-vs-cnn/images/cover.png", alt: "Training metrics comparing CNN and VGG performance curves" },
    ],
    videos: [
      { src: "/assets/projects/vgg-vs-cnn/videos/demo.mp4", caption: "Notebook review comparing VGG16 and custom CNN confusion matrices" },
    ],
    links: [
      { label: "Notebook", href: "https://colab.research.google.com/drive/1goyTDSoYdgo7QPFEUHSBC0WIKJqb_2BG", emoji: "📓" },
    ],
  },
];

export const development: Project[] = [
  {
    title: "ElyosDigital / PowerGym – Gym Management Platform",
    category: "Development",
    description:
      "Full gym management platform: member registration, subscriptions, scheduling, activity booking, and product sales. Multi-role auth (admins/trainers/members) with validation and secure data handling; streamlined operations and reduced manual work.",
    impact: "Automated membership workflows and reduced manual admin work by replacing spreadsheets.",
    tech: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    images: [
      { src: "/assets/projects/elyosdigital-powergym/images/img1.webp", alt: "PowerGym dashboard summarizing members and active plans" },
      { src: "/assets/projects/elyosdigital-powergym/images/img2.webp", alt: "Membership creation form with validation states" },
      { src: "/assets/projects/elyosdigital-powergym/images/img3.webp", alt: "Trainer schedule view with daily class timeline" },
      { src: "/assets/projects/elyosdigital-powergym/images/img4.webp", alt: "Billing management table with payment statuses" },
      { src: "/assets/projects/elyosdigital-powergym/images/img5.webp", alt: "Point of sale interface for in-gym purchases" },
      { src: "/assets/projects/elyosdigital-powergym/images/img6.webp", alt: "Workout program list grouped by coach" },
      { src: "/assets/projects/elyosdigital-powergym/images/img7.webp", alt: "Member profile with attendance and subscription history" },
      { src: "/assets/projects/elyosdigital-powergym/images/img8.webp", alt: "Class booking calendar showing upcoming sessions" },
      { src: "/assets/projects/elyosdigital-powergym/images/img9.webp", alt: "Analytics widgets highlighting revenue trends" },
      { src: "/assets/projects/elyosdigital-powergym/images/img10.webp", alt: "Inventory management screen for supplements and merchandise" },
    ],
    videos: [
      { src: "/assets/projects/elyosdigital-powergym/videos/demo-1.mov", caption: "Admin experience navigating the core dashboards" },
      { src: "/assets/projects/elyosdigital-powergym/videos/demo-2.mov", caption: "Trainer workflow for scheduling classes" },
      { src: "/assets/projects/elyosdigital-powergym/videos/demo-3.mov", caption: "Member self-service booking flow" },
      { src: "/assets/projects/elyosdigital-powergym/videos/demo-4.mov", caption: "Point of sale checkout with receipt generation" },
    ],
  },
  {
    title: "MyMatch – Admin Panel",
    category: "Development",
    description:
      "Admin dashboard for real football app to manage players, stadiums, and matches. Integrated Firebase for realtime updates and delivered clear visualization of users, matches, and usage metrics.",
    impact: "Enabled non-technical staff to manage league logistics in minutes instead of hours.",
    tech: ["Laravel", "Firebase", "REST"],
    images: [
      { src: "/assets/projects/mymatch-admin/images/cover.png", alt: "Admin overview of players, matches, and stadium occupancy" },
    ],
    videos: [
      { src: "/assets/projects/mymatch-admin/videos/demo.mp4", caption: "Realtime updates flowing from Firebase into the admin dashboard" },
    ],
  },
  {
    title: "QuirkHire – LLM Career Recommender",
    category: "Development",
    description:
      "LLM-powered career assistant: semantically analyzes CVs with embeddings for better job matching than keyword search. Adds explainability by highlighting skills and reasons behind each recommendation; delivers accurate, low-latency results.",
    impact: "Surface relevant job matches with rationale, cutting recruiter screening time to seconds.",
    tech: ["React", "Django", "DRF", "Supabase", "Redux Toolkit", "OpenRouter API"],
    featured: true,
    featuredOrder: 2,
    images: [
      { src: "/assets/projects/quirkhire/images/cover.png", alt: "QuirkHire dashboard highlighting recommended roles with explanations" },
    ],
    videos: [
      { src: "/assets/projects/quirkhire/videos/demo.mp4", caption: "Applicant flow generating AI-backed job recommendations" },
    ],
    links: [
      { label: "Live Demo", href: "https://career-reco.vercel.app", emoji: "🚀" },
    ],
  },
  {
    title: "Therapist Funnel – Next.js + Supabase (Vercel)",
    category: "Development",
    description:
      "Therapist content funnel app lets clients access free educational resources in exchange for a simple form signup. Each download email includes a unique redeem code, which unlocks a free consultation booking via Calendly. Calendly handles scheduling and meeting links, while the app tracks leads, codes, and bookings. A full admin panel gives therapists control over uploads, codes, leads, analytics, and Calendly integration—all seamlessly deployed on Vercel.",
    impact: "Automated lead capture with tracked consultations and zero manual code distribution.",
    tech: ["Next.js", "Supabase", "Postgres", "Vercel", "Calendly API"],
    featured: true,
    featuredOrder: 3,
    images: [
      { src: "/assets/projects/therapist-funnel/images/img1.webp", alt: "Therapist funnel admin dashboard showing recent leads" },
      { src: "/assets/projects/therapist-funnel/images/img2.webp", alt: "Public landing page offering downloadable resources" },
      { src: "/assets/projects/therapist-funnel/images/img3.webp", alt: "Unique redeem code generator form" },
      { src: "/assets/projects/therapist-funnel/images/img4.webp", alt: "Calendly availability embedded within the admin" },
      { src: "/assets/projects/therapist-funnel/images/img5.webp", alt: "Automated download email template with secure link" },
      { src: "/assets/projects/therapist-funnel/images/img6.webp", alt: "Lead analytics overview with conversion metrics" },
      { src: "/assets/projects/therapist-funnel/images/img7.webp", alt: "Calendly confirmation flow captured inside the product" },
      { src: "/assets/projects/therapist-funnel/images/img8.webp", alt: "Lead profile detail view with interactions" },
      { src: "/assets/projects/therapist-funnel/images/img9.webp", alt: "Redeem code validation workflow" },
      { src: "/assets/projects/therapist-funnel/images/img10.webp", alt: "Consultation booking summary with Calendly reference" },
      { src: "/assets/projects/therapist-funnel/images/img11.webp", alt: "Follow-up automation settings for email sequences" },
      { src: "/assets/projects/therapist-funnel/images/img12.webp", alt: "Conversion metrics dashboard for therapists" },
    ],
    links: [
      { label: "Live Demo", href: "https://www.fittrahmoms.com", emoji: "🚀" },
    ],
  },
];

export const mlops: Project[] = [
  {
    title: "Production-ready MLOps (AFFA backend)",
    category: "MLOps",
    description:
      "FastAPI microservices with MLflow experiment tracking, Dockerized deployments, and observability via ElasticSearch/Kibana (logs, metrics, model KPIs). Focused on reliability, reproducibility, and governance; multiple experiments and service versions tracked.",
    impact: "Stabilized production inference with experiment lineage and alerting for regression monitoring.",
    tech: ["FastAPI", "Docker", "MLflow", "ElasticSearch", "Kibana"],
    images: [
      { src: "/assets/projects/mlops-affa-backend/images/cover.png", alt: "MLflow experiment dashboard tracking model versions" },
    ],
    videos: [
      { src: "/assets/projects/mlops-affa-backend/videos/demo.mp4", caption: "FastAPI endpoints deployed with monitoring hooks" },
    ],
    links: [
      { label: "Source Code", href: "https://github.com/dalibouzir/MLops", emoji: "💻" },
    ],
  },
];

export const allProjects: Project[] = [...dataAI, ...mlResearch, ...development, ...mlops];
