import { SITE } from "@/config/site";
import type { Project } from "./projects";

// @improvement: field copy references SITE identity for consistency

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
        `${SITE.name}, Junior AI Engineer, partnering with product teams to translate complex datasets into decisions, dashboards, and automated workflows.`,
        "Proficient in transforming complex datasets into actionable insights, automating workflows, and deploying intelligent systems that enhance decision-making and operational efficiency.",
        "Flagship projects such as WeeFarm, AI Business Agent, and AFFA demonstrate validation-backed analytics, experiment tracking, and explainable advisory recommendations.",
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
    metaDescription: `Data Science & AI portfolio for ${SITE.name}—LLM/RAG systems, validation-backed ML advisory workflows, and evidence-first decision support.`,
  },
  {
    slug: "backend-engineering",
    label: "Backend Engineering",
    hero: {
      title: "Back-end systems that keep data and operations flowing.",
      intro: [
        `${SITE.name}, Junior AI Engineer, with a strong focus on back-end development for scalable, data-driven products.`,
        "Experienced in automating workflows, securing authentication, and building resilient APIs that power real-time dashboards and admin tooling.",
        "Internship and project engagements show how Laravel, FastAPI, PostgreSQL, and REST APIs support operational workflows with clear service boundaries.",
      ],
    },
    projectTags: ["backend", "api", "laravel", "fastapi", "flask"],
    experienceTags: ["backend", "api", "laravel"],
    coreSkills: ["Python", "Java", "C/C++", "SQL", "JavaScript", "PHP", "FastAPI", "Laravel", "REST", "Docker"],
    certificationNames: ["Python for Data Science, AI & Development"],
    metaDescription: `Backend engineering work by ${SITE.name}—secure APIs, Laravel systems, and data-first automation.`,
  },
  {
    slug: "fullstack-web",
    label: "Full-Stack Web",
    hero: {
      title: "Full-stack experiences that balance UX craft and data rigor.",
      intro: [
        `${SITE.name}, Junior AI Engineer, delivering responsive web platforms with React, Next.js, and Laravel.`,
        "Applies AI, analytics, and secure workflows to craft experiences that streamline bookings, admin operations, and stakeholder decision-making.",
        "Recent prototypes such as QuirkHire and internship builds pair user-facing interfaces with data-backed operational workflows.",
      ],
    },
    projectTags: ["fullstack", "react", "nextjs", "supabase", "ui"],
    experienceTags: ["fullstack", "backend"],
    coreSkills: ["React", "Next.js", "Laravel", "Supabase", "Firebase", "Tailwind CSS", "Redux Toolkit"],
    certificationNames: ["Fundamentals of Visualization with Tableau"],
    metaDescription: `Full-stack web portfolio for ${SITE.name}—Next.js, React, Laravel, and data-infused product delivery.`,
  },
  {
    slug: "mlops-data-engineering",
    label: "MLOps / Data Engineering",
    hero: {
      title: "Operationalizing machine learning with reliable data pipelines.",
      intro: [
        `${SITE.name}, Junior AI Engineer, focused on deploying intelligent systems that enhance decision-making and operational efficiency.`,
        "Builds data engineering and MLOps workflows with FastAPI, MLflow, PostgreSQL (pgVector), OpenSearch, and observability across Grafana, ElasticSearch, and Kibana.",
        "Projects such as WeeFarm, AI Business Agent, and AFFA pair containerized inference workflows, retrieval orchestration, and validation-aware monitoring.",
      ],
    },
    projectTags: ["mlops", "data-eng", "mlflow", "elasticsearch", "kibana", "pgvector", "opensearch"],
    experienceTags: ["backend", "fullstack"],
    coreSkills: ["FastAPI", "MLflow", "Elasticsearch", "Kibana", "PostgreSQL (pgVector)", "OpenSearch", "Docker"],
    certificationNames: ["Python for Data Science, AI & Development", "What is Data Science?"],
    metaDescription: `MLOps and data engineering work by ${SITE.name}—FastAPI services, MLflow tracking, and observability pipelines.`,
  },
];
