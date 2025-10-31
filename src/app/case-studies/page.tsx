import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { buildMetadata } from "@/components/Seo";
import { SITE } from "@/config/site";
import { caseStudies } from "@/content/caseStudies";

// @improvement: overview page listing all available case studies
export const metadata: Metadata = buildMetadata({
  title: `Case Studies · ${SITE.title}`,
  description: "Product deep dives showcasing measurable AI and MLOps outcomes.",
  path: "/case-studies",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies",
  description: "Deep dives authored by Dali Ben covering AI product delivery, decision intelligence, and MLOps.",
  url: `${SITE.url}/case-studies`,
  hasPart: caseStudies.map((study) => ({
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    url: `${SITE.url}/case-studies/${study.slug}`,
  })),
};

export default function CaseStudiesIndex() {
  return (
    <>
      <Nav />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Section
          id="case-studies"
          eyebrow="Portfolio"
          title="Case studies"
          description={
            <p>
              Strategic breakdowns of how {SITE.name} ships AI and data products to production—covering constraints, architecture,
              and measurable wins.
            </p>
          }
        >
          <div className="grid gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
