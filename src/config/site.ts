// @improvement: centralize site identity and contact data
export const SITE = {
  name: "Mohamed Ali Bouzir",
  title: "Data Product Engineer · AI & MLOps",
  tagline: "I build measurable AI products end-to-end.",
  email: "bouzirdali@gmail.com",
  phone: "+216 56 815 716",
  url: "https://dali-eight.vercel.app",
  twitter: "@medalibouzir1",
  linkedin: "https://www.linkedin.com/in/mohamed-ali-bouzir/",
  github: "https://github.com/dalibouzir",
  ogImage: "/og.jpg",
  locale: "en",
} as const;

export type SiteConfig = typeof SITE;
