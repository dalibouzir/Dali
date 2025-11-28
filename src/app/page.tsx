import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/components/Seo";
import { HeroSection } from "@/components/hero/HeroSection";
import { HighlightsSection } from "@/components/highlights/HighlightsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ResearchSection } from "@/components/research/ResearchSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { CertsAndLanguagesSection } from "@/components/meta/CertsAndLanguagesSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { owner } from "@/content/siteMeta";

// @improvement: homepage metadata derived from SITE config
export const metadata: Metadata = buildMetadata({
  title: SITE.title,
  description: SITE.tagline,
  path: "/",
});

// @improvement: structured data for Person + WebSite + breadcrumbs
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed Ali Bouzir",
  jobTitle: "Data Product Engineer · AI & MLOps",
  url: SITE.url,
  sameAs: [
    SITE.github,
    SITE.linkedin,
    `https://twitter.com/${SITE.twitter.replace("@", "")}`,
  ],
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: owner.location,
    addressCountry: "TN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  headline: SITE.title,
  name: SITE.name,
  description: SITE.tagline,
  url: SITE.url,
  potentialAction: {
    "@type": "ContactAction",
    target: `mailto:${SITE.email}`,
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.url,
    },
  ],
};

export default function Home() {
  return (
    <>
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema, breadcrumbs]),
          }}
        />
        <HeroSection />
        <HighlightsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResearchSection />
        <SkillsSection />
        <CertsAndLanguagesSection />
        <ContactSection />
      </main>
    </>
  );
}
