export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  file: string; // path to image or pdf under /public
  link?: string; // external verification or course link
};

export const certifications: Certification[] = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Dec 3, 2023",
    file: "/assets/certifications/images/ibm-python-ds-ai-dev.png",
  },
  {
    title: "What is Data Science?",
    issuer: "IBM",
    date: "Dec 27, 2023",
    file: "/assets/certifications/images/ibm-what-is-data-science.png",
  },
  {
    title: "Fundamentals of Visualization with Tableau",
    issuer: "University of California",
    date: "Dec 23, 2023",
    file: "/assets/certifications/images/tableau-fundamentals.png",
  },
];

