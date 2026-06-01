import { SITE } from "@/config/site";

export const owner = {
  name: SITE.name,
  title: "Junior AI Engineer",
  location: "Monastir, Tunisia",
  email: SITE.email,
  phone: SITE.phone,
  portfolio: SITE.url,
  cvUrl: "/cv/cv_ai_engineer_final_recruiter_2page.pdf",
  tagline: SITE.tagline,
};

export const siteLinks = {
  contact: `mailto:${SITE.email}`,
  github: SITE.github,
  linkedin: SITE.linkedin,
  twitter: `https://twitter.com/${SITE.twitter.replace("@", "")}`,
};
