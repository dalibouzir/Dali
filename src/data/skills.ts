export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C / C++", "R", "SQL", "JavaScript", "PHP"],
  },
  {
    title: "Web & Backend",
    items: ["Next.js", "React", "Laravel", "Django", "Flask", "Django REST Framework", "REST APIs", "Firebase", "Supabase", "Bootstrap", "HTML", "CSS"],
  },
  {
    title: "Data Science & ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "NLTK", "spaCy", "Transformers", "VAE", "Diffusion Models", "R (time series / statistics)"],
  },
  {
    title: "Data Engineering & MLOps",
    items: ["FastAPI", "MLflow", "Elasticsearch", "Kibana", "PostgreSQL + pgVector", "OpenSearch", "Docker", "Grafana", "Prometheus"],
  },
  {
    title: "Tools & Environments",
    items: ["Git", "GitHub", "VS Code", "Postman", "Airtable", "Trello", "Tableau", "Excel", "Oracle DB", "Arduino IDE", "Google Workspace"],
  },
];
