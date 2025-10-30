export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl: string;
  logo?: string;
  downloadUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Fundamentals of Visualization with Tableau",
    issuer: "University of California",
    date: "Dec 23, 2023",
    credentialUrl: "/assets/certifications/images/tableau-fundamentals.pdf",
    downloadUrl: "/assets/certifications/images/tableau-fundamentals.pdf",
    logo: "/assets/certifications/logos/uc.svg",
  },
  {
    title: "What is Data Science?",
    issuer: "IBM",
    date: "Dec 27, 2023",
    credentialUrl: "/assets/certifications/images/ibm-what-is-data-science.pdf",
    downloadUrl: "/assets/certifications/images/ibm-what-is-data-science.pdf",
    logo: "/assets/certifications/logos/ibm.svg",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Dec 3, 2023",
    credentialUrl: "/assets/certifications/images/ibm-python-ds-ai-dev.pdf",
    downloadUrl: "/assets/certifications/images/ibm-python-ds-ai-dev.pdf",
    logo: "/assets/certifications/logos/ibm.svg",
  },
];
