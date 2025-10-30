export type Experience = {
  slug: string;
  title: string;
  organization: string;
  engagement: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    slug: "elyosdigital-internship",
    title: "Web Development Intern",
    organization: "ElyosDigital Company",
    engagement: "Internship",
    location: "Monastir, Tunisia",
    period: "Jun 2024 – Jul 2024",
    bullets: [
      "Designed and launched a full-stack gym management platform in Laravel to digitalize memberships, subscriptions, and coach scheduling—boosting administrative efficiency by ~30%.",
      "Introduced automated session scheduling workflows that reduced manual coordination and enhanced operational consistency.",
      "Streamlined coach assignment and session planning, improving schedule accuracy and reducing conflicts.",
      "Delivered responsive, secure back-office modules emphasizing data protection and user experience.",
    ],
    tags: ["fullstack", "backend", "laravel"],
  },
  {
    slug: "mymatch-freelance",
    title: "Back-End & Admin Panel Engineer",
    organization: "MyMatch",
    engagement: "Freelance Project",
    location: "Remote – Monastir, Tunisia",
    period: "Sep 2024 – May 2025",
    bullets: [
      "Designed a full-featured administration dashboard to manage 7,000+ players and 70+ sports complexes, enabling centralized monitoring and operational control.",
      "Built scalable backend services using Laravel and integrated Firebase and REST APIs to facilitate real-time data synchronization and authentication.",
      "Implemented interactive dashboards for administrators with real-time performance tracking and dynamic visual analytics.",
      "Optimized data flow and integrated secure authentication, enhancing responsiveness and improving administrative efficiency.",
    ],
    tags: ["backend", "api", "laravel", "fullstack"],
  },
];
