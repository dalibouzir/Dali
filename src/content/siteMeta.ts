import { SITE } from "@/config/site";

// @improvement: expose owner metadata while deferring identity fields to SITE
export const owner = {
  name: SITE.name,
  title: SITE.title,
  location: "Monastir, Tunisia",
  email: SITE.email,
  phone: SITE.phone,
  portfolio: SITE.url,
  cvUrl: "/cv/BOUZIR_MohamedAli_CV_2026_Eng.pdf",
  tagline: SITE.tagline,
};

export const siteLinks = {
  contact: `mailto:${SITE.email}`,
  github: SITE.github,
  linkedin: SITE.linkedin,
  twitter: `https://twitter.com/${SITE.twitter.replace("@", "")}`,
};
