import type { Metadata } from "next";
import Section from "@/components/Section";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { buildMetadata } from "@/components/Seo";
import { SITE } from "@/config/site";
import { caseStudies } from "@/content/caseStudies";

// @improvement: overview page listing all available case studies
export const metadata: Metadata = buildMetadata({
  title: `Case Studies · ${SITE.title}`,
  description: "Case studies covering validation-backed AI decision-support systems and assistant architecture.",
  path: "/case-studies",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies",
  description: "Deep dives authored by Mohamed Ali Bouzir covering AI decision support and assistant orchestration.",
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
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Section
          id="case-studies"
          eyebrow="Portfolio"
          title="Case studies"
          description={
            <p>
              Strategic breakdowns of how {SITE.name} designs evidence-first AI assistants, with architecture choices,
              constraints, and validation considerations.
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
