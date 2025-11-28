export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string;
  downloadUrl?: string;
};

export type Language = {
  id: string;
  name: string;
  proficiency: string;
};

export const certifications: Certification[] = [
  {
    id: "ibm-python",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Dec 2023",
    credentialUrl: "/assets/certifications/images/ibm-python-ds-ai-dev.pdf",
    logo: "/assets/certifications/logos/ibm.svg",
    downloadUrl: "/assets/certifications/images/ibm-python-ds-ai-dev.pdf",
  },
  {
    id: "uc-tableau",
    title: "Fundamentals of Visualization with Tableau",
    issuer: "University of California",
    date: "Dec 2023",
    credentialUrl: "/assets/certifications/images/tableau-fundamentals.pdf",
    logo: "/assets/certifications/logos/uc.svg",
    downloadUrl: "/assets/certifications/images/tableau-fundamentals.pdf",
  },
  {
    id: "ibm-what-is-ds",
    title: "What is Data Science?",
    issuer: "IBM",
    date: "Dec 2023",
    credentialUrl: "/assets/certifications/images/ibm-what-is-data-science.pdf",
    logo: "/assets/certifications/logos/ibm.svg",
    downloadUrl: "/assets/certifications/images/ibm-what-is-data-science.pdf",
  },
];

export const languages: Language[] = [
  { id: "arabic", name: "Arabic", proficiency: "Native" },
  { id: "french", name: "French", proficiency: "Fluent (B2 – TCF Campus France)" },
  { id: "english", name: "English", proficiency: "Fluent" },
];
