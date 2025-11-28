export type ExperienceItem = {
  id: string;
  title: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

export type EducationItem = {
  id: string;
  title: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "mymatch",
    title: "MyMatch – Backend & Admin Panel (Freelance)",
    role: "Freelance Developer · Backend & Admin Panel",
    location: "Remote – Monastir, Tunisia",
    dates: "Sep 2024 – May 2025",
    bullets: [
      "Developed a centralized admin dashboard managing 7,000+ player profiles and 70+ sports complexes with clear segmentation by league and venue.",
      "Built scalable Laravel backend services integrated with Firebase and REST APIs, reaching ~99.9% uptime and sub-2-second synchronization across mobile clients.",
      "Rolled out analytics dashboards that cut manual tracking time by about 40% and improved administrative productivity by more than 60%.",
    ],
  },
  {
    id: "elyosdigital",
    title: "ElyosDigital Company – Web Development Intern",
    role: "Web Development Intern",
    location: "Monastir, Tunisia",
    dates: "Jun 2024 – Jul 2024",
    bullets: [
      "Launched a full-stack gym management platform in Laravel to digitize memberships, subscriptions, and coach scheduling.",
      "Automated session scheduling workflows, reducing manual coordination by roughly 40% and improving schedule accuracy by around 25–30%.",
      "Focused on responsive, secure back-office modules with attention to data integrity and strong access control.",
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    id: "education",
    title: "Education – Computer Science · AI & Data",
    bullets: [
      "Engineering Program in Computer Science – Artificial Intelligence & Data Science (École Supérieure Privée d’Ingénierie de Monastir, 2023–Present).",
      "Bachelor’s in Software Engineering and Computer Science (Faculty of Sciences of Monastir, 2020–2023).",
      "Technical Baccalaureate with emphasis on engineering fundamentals and applied mathematics (Fattouma Bourguiba High School, Monastir, 2019–2020).",
    ],
  },
];
