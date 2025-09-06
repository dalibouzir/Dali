export const dataAI = [
  {
    title: "AFFA – Fantasy Football Assistant",
    description:
      "Personal ML assistant that helps fantasy football players make smarter lineup decisions. End-to-end pipeline: data collection/cleaning → modeling → FastAPI services → monitoring. Combines player performance forecasting with recommendation logic (NLTK + ML pipelines). Dockerized, tracked with MLflow, and monitored via Elastic/Kibana. Outperformed my own baseline strategy; realtime latency kept under ~2s/rec.",
    tech: ["Python", "Flask", "FastAPI", "NLTK", "MongoDB", "Docker", "MLflow", "ElasticSearch", "Kibana"],
    images: [
      { src: "/assets/projects/affa/images/cover.png", alt: "AFFA UI" },
      { src: "/assets/projects/affa/images/screen-1.png", alt: "AFFA screen 1" },
      { src: "/assets/projects/affa/images/screen-2.png", alt: "AFFA screen 2" },
    ],
    videos: [
      { src: "/assets/projects/affa/videos/demo.mov" },
       { src: "/assets/projects/affa/videos/demo2.mov" },
    ],
    links: [
      { label: "Demo", href: "https://bouzirdaliaa.pythonanywhere.com/", emoji: "🚀" },
      // { label: "Code", href: "", emoji: "💻" },
    ],
  },
];

export const mlResearch = [
  {
    title: "Speech Emotion Recognition (VAE + Diffusion)",
    description:
      "Reproduced a university project on speech emotion recognition and used synthetic augmentation (VAE + diffusion) to expand limited datasets. Found synthetic data measurably improved recognition accuracy compared to baselines; explored trade-offs between sample quality and training stability.",
    tech: ["PyTorch", "VAE", "Diffusion", "Jupyter"],
    images: [
      { src: "/assets/projects/ser-vae-diffusion/images/cover.png", alt: "SER Notebook" },
    ],
    videos: [
      { src: "/assets/projects/ser-vae-diffusion/videos/demo.mp4" },
    ],
    links: [
      { label: "Notebook", href: "https://colab.research.google.com/drive/1-FUw-_7uFVSYHlILZZfPqzf_q2FhU0x9?usp=drive_link", emoji: "📓" },
    ],
  },
  {
    title: "Climate Change Time Series (Colab)",
    description:
      "Modeled climate indicators (temperature, CO₂, sea levels). Compared classical approaches (ARIMA/Prophet) vs ML methods; produced exploratory dashboards for trend visualization and forecasting.",
    tech: ["Python", "Colab", "Time Series"],
    images: [
      { src: "/assets/projects/time-series-climate/images/cover.png", alt: "Climate Time Series" },
    ],
    videos: [
      { src: "/assets/projects/time-series-climate/videos/demo.mp4" },
    ],
    links: [
      { label: "Notebook", href: "https://colab.research.google.com/drive/1spY1OTo6azGFCt7-9OGNY79VJ7qgPAlq?usp=drive_link", emoji: "📓" },
    ],
  },
  {
    title: "VGG vs CNN for Ligament Classification",
    description:
      "Worked on ~8GB MRI dataset for ligament diagnosis. Compared VGG vs custom CNN: CNN trained faster; VGG achieved higher accuracy but tended to overfit. Delivered insights on accuracy vs complexity for medical imaging tasks.",
    tech: ["TensorFlow", "Keras", "Matplotlib", "Colab"],
    images: [
      { src: "/assets/projects/vgg-vs-cnn/images/cover.png", alt: "VGG vs CNN" },
    ],
    videos: [
      { src: "/assets/projects/vgg-vs-cnn/videos/demo.mp4" },
    ],
    links: [
      { label: "Notebook", href: "https://colab.research.google.com/drive/1goyTDSoYdgo7QPFEUHSBC0WIKJqb_2BG", emoji: "📓" },
    ],
  },
];

export const development = [
  {
    title: "ElyosDigital / PowerGym – Gym Management Platform",
    description:
      "Full gym management platform: member registration, subscriptions, scheduling, activity booking, and product sales. Multi-role auth (admins/trainers/members) with validation and secure data handling; streamlined operations and reduced manual work.",
    tech: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    images: [
      { src: "/assets/projects/elyosdigital-powergym/images/img1.png", alt: "Dashboard" },
      { src: "/assets/projects/elyosdigital-powergym/images/img2.png" },
      { src: "/assets/projects/elyosdigital-powergym/images/img3.png" },
      { src: "/assets/projects/elyosdigital-powergym/images/img4.png" },
      { src: "/assets/projects/elyosdigital-powergym/images/img5.png" },
      { src: "/assets/projects/elyosdigital-powergym/images/img6.png" },
      { src: "/assets/projects/elyosdigital-powergym/images/img7.png" },
      { src: "/assets/projects/elyosdigital-powergym/images/img8.png" },
      { src: "/assets/projects/elyosdigital-powergym/images/img9.png" },
      { src: "/assets/projects/elyosdigital-powergym/images/img10.png" },
    ],
    videos: [
      { src: "/assets/projects/elyosdigital-powergym/videos/demo-1.mov" },
      { src: "/assets/projects/elyosdigital-powergym/videos/demo-2.mov" },
      { src: "/assets/projects/elyosdigital-powergym/videos/demo-3.mov" },
      { src: "/assets/projects/elyosdigital-powergym/videos/demo-4.mov" },
    ],
  },
  {
    title: "MyMatch – Admin Panel",
    description:
      "Admin dashboard for real football app to manage players, stadiums, and matches. Integrated Firebase for realtime updates and delivered clear visualization of users, matches, and usage metrics.",
    tech: ["Laravel", "Firebase", "REST"],
    images: [
      { src: "/assets/projects/mymatch-admin/images/cover.png", alt: "MyMatch Admin" },
    ],
    videos: [
      { src: "/assets/projects/mymatch-admin/videos/demo.mp4" },
    ],
  },
  {
    title: "QuirkHire – LLM Career Recommender",
    description:
      "LLM-powered career assistant: semantically analyzes CVs with embeddings for better job matching than keyword search. Adds explainability by highlighting skills and reasons behind each recommendation; delivers accurate, low-latency results.",
    tech: ["React", "Django", "DRF", "Supabase", "Redux Toolkit", "OpenRouter API"],
    images: [
      { src: "/assets/projects/quirkhire/images/cover.png", alt: "QuirkHire UI" },
    ],
    videos: [
      { src: "/assets/projects/quirkhire/videos/demo.mp4" },
    ],
    links: [
      { label: "Live Demo", href: "https://career-reco.vercel.app", emoji: "🚀" },
      // { label: "Code", href: "", emoji: "💻" },
    ],
  },
  {
    title: "Therapist Funnel – Next.js + Supabase (Vercel)",
    description:
      "End-to-end content funnel for a therapist: upload educational books/videos; on download, clients complete a form and receive a no-reply email with a secure download link and a unique redeem code. The code unlocks a free call flow where clients pick a time, submit details, and a Google Meet is auto-generated with both parties invited via Google Calendar. Deployed on Vercel.",
    tech: ["Next.js", "Supabase", "Postgres", "Vercel", "Google Calendar API", "Google Meet"],
    images: [
      { src: "/assets/projects/therapist-funnel/images/img1.jpeg", alt: "Content upload dashboard" },
      { src: "/assets/projects/therapist-funnel/images/img2.png", alt: "Client download + form" },
      { src: "/assets/projects/therapist-funnel/images/img3.png", alt: "Redeem code + scheduling" },
      { src: "/assets/projects/therapist-funnel/images/img4.png", alt: "Calendar + Meet automation" },
      { src: "/assets/projects/therapist-funnel/images/img5.png", alt: "Confirmation + follow-up" },
    ],
  },
];

export const mlops = [
  {
    title: "Production-ready MLOps (AFFA backend)",
    description:
      "FastAPI microservices with MLflow experiment tracking, Dockerized deployments, and observability via ElasticSearch/Kibana (logs, metrics, model KPIs). Focused on reliability, reproducibility, and governance; multiple experiments and service versions tracked.",
    tech: ["FastAPI", "Docker", "MLflow", "ElasticSearch", "Kibana"],
    images: [
      { src: "/assets/projects/mlops-affa-backend/images/cover.png", alt: "MLOps Stack" },
    ],
    videos: [
      { src: "/assets/projects/mlops-affa-backend/videos/demo.mp4" },
    ],
    links: [
      { label: "Code", href: "https://github.com/dalibouzir/MLops", emoji: "💻" },
    ],
  },
];
