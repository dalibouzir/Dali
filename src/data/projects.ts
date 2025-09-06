export const dataAI = [
  {
    title: "AFFA – Fantasy Football Assistant",
    description:
      "Predictive assistant with ML models, MLOps, and Flask/FastAPI services. Provides performance analysis and personalized recommendations.",
    tech: ["Python", "Flask", "FastAPI", "NLTK", "MongoDB", "Docker", "MLflow", "ElasticSearch", "Kibana"],
    images: [
      { src: "/assets/projects/affa/images/cover.png", alt: "AFFA UI" },
      { src: "/assets/projects/affa/images/screen-1.png", alt: "AFFA screen 1" },
      { src: "/assets/projects/affa/images/screen-2.png", alt: "AFFA screen 2" },
    ],
    videos: [
      { src: "/assets/projects/affa/videos/demo.mov" },
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
      "Reproduction and exploration of synthetic data generation with VAEs and diffusion models to improve emotion recognition in speech.",
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
      "Time series modeling and analysis for climate indicators with exploratory visualization.",
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
      "Comparative study of VGG and CNN architectures on medical images with analysis of accuracy, overfitting, and complexity.",
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
      "Full web application for members, subscriptions, schedules, and activity booking with responsive design and secure data handling.",
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
      "Admin dashboard for managing mobile app users with Laravel backend, Firebase integration, and real-time visualization.",
    tech: ["Laravel", "Firebase", "REST"],
    images: [
      { src: "/assets/projects/mymatch-admin/images/cover.png", alt: "MyMatch Admin" },
    ],
    videos: [
      { src: "/assets/projects/mymatch-admin/videos/demo.mp4" },
    ],
  },
  {
    title: "QuirkHire (LLM-powered career recommender)",
    description:
      "Smart platform using NLP/LLM to match candidates with jobs. Semantic CV analysis with explainable recommendations and analytics.",
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
];

export const mlops = [
  {
    title: "Production-ready MLOps stack (AFFA backend)",
    description:
      "FastAPI services with MLflow tracking, Dockerized deployment, logging and monitoring via ElasticSearch and Kibana.",
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
