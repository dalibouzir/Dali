import type { Project } from "./projects";

export type Field = {
  slug: "data-science-ai" | "backend-engineering" | "fullstack-web" | "mlops-data-engineering";
  label: string;
  hero: {
    title: string;
    intro: string[];
  };
  projectTags: Project["tags"];
  experienceTags: string[];
  coreSkills: string[];
  certificationNames: string[];
  metaDescription: string;
};

export const fields: Field[] = [
  {
    slug: "data-science-ai",
    label: "Data Science & AI",
    hero: {
      title: "Transforming complex datasets into actionable intelligence.",
      intro: [
        "Computer Engineer specializing in Artificial Intelligence and Data Science, with a strong focus on building scalable, data-driven solutions.",
        "Proficient in transforming complex datasets into actionable insights, automating workflows, and deploying intelligent systems that enhance decision-making and operational efficiency.",
        "Flagship projects such as the AI Business Agent and AFFA demonstrate production-ready analytics, experiment tracking, and explainable recommendations that stay accountable to accuracy and latency targets.",
      ],
    },
    projectTags: ["ai", "data-science", "analytics", "nlp", "llm"],
    experienceTags: ["fullstack", "backend", "api"],
    coreSkills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "NLTK",
      "SpaCy",
      "Transformers",
      "CRISP-DM",
    ],
    certificationNames: [
      "Python for Data Science, AI & Development",
      "What is Data Science?",
    ],
    metaDescription:
      "Data Science & AI portfolio for BOUZIR Mohamed Ali—production-grade analytics, LLM solutions, and measurable ML impact.",
  },
  {
    slug: "backend-engineering",
    label: "Backend Engineering",
    hero: {
      title: "Back-end systems that keep data and operations flowing.",
      intro: [
        "Computer Engineer with a strong focus on back-end development for scalable, data-driven products.",
        "Experienced in automating workflows, securing authentication, and building resilient APIs that power real-time dashboards and admin tooling.",
        "Freelance and internship engagements like MyMatch and ElyosDigital show how Laravel, Firebase, and REST APIs come together to support 7,000+ players, sports complexes, and coach scheduling.",
      ],
    },
    projectTags: ["backend", "api", "laravel", "fastapi", "flask"],
    experienceTags: ["backend", "api", "laravel"],
    coreSkills: ["Python", "Java", "C/C++", "SQL", "JavaScript", "PHP", "FastAPI", "Laravel", "REST", "Docker"],
    certificationNames: ["Python for Data Science, AI & Development"],
    metaDescription:
      "Backend engineering work by BOUZIR Mohamed Ali—secure APIs, Laravel systems, and data-first automation.",
  },
  {
    slug: "fullstack-web",
    label: "Full-Stack Web",
    hero: {
      title: "Full-stack experiences that balance UX craft and data rigor.",
      intro: [
        "Computer Engineer delivering responsive web platforms with React, Next.js, and Laravel.",
        "Applies AI, analytics, and secure workflows to craft experiences that streamline bookings, admin operations, and stakeholder decision-making.",
        "Recent launches such as Meriem Booking, QuirkHire, and MyMatch pair intuitive interfaces with data-backed insights for therapists, recruiters, and sports operators.",
      ],
    },
    projectTags: ["fullstack", "react", "nextjs", "supabase", "ui"],
    experienceTags: ["fullstack", "backend"],
    coreSkills: ["React", "Next.js", "Laravel", "Supabase", "Firebase", "Tailwind CSS", "Redux Toolkit"],
    certificationNames: ["Fundamentals of Visualization with Tableau"],
    metaDescription:
      "Full-stack web portfolio for BOUZIR Mohamed Ali—Next.js, React, Laravel, and data-infused product delivery.",
  },
  {
    slug: "mlops-data-engineering",
    label: "MLOps / Data Engineering",
    hero: {
      title: "Operationalizing machine learning with reliable data pipelines.",
      intro: [
        "Computer Engineer focused on deploying intelligent systems that enhance decision-making and operational efficiency.",
        "Builds data engineering and MLOps workflows with FastAPI, MLflow, PostgreSQL (pgVector), OpenSearch, and observability across Grafana, ElasticSearch, and Kibana.",
        "Production systems like the AI Business Agent and AFFA pair containerized inference, Monte Carlo simulations, and real-time monitoring to keep ML accountable in the field.",
      ],
    },
    projectTags: ["mlops", "data-eng", "mlflow", "elasticsearch", "kibana", "pgvector", "opensearch"],
    experienceTags: ["backend", "fullstack"],
    coreSkills: ["FastAPI", "MLflow", "Elasticsearch", "Kibana", "PostgreSQL (pgVector)", "OpenSearch", "Docker"],
    certificationNames: ["Python for Data Science, AI & Development", "What is Data Science?"],
    metaDescription:
      "MLOps and data engineering work by BOUZIR Mohamed Ali—FastAPI services, MLflow tracking, and observability pipelines.",
  },
];
