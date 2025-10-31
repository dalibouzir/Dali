import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { ContactBar } from "@/components/ContactBar";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/components/Seo";
import { featuredCaseStudy } from "@/content/caseStudies";

// @improvement: dedicated case study route highlighting AI Business Agent delivery
export const metadata: Metadata = buildMetadata({
  title: `${featuredCaseStudy.title} · ${SITE.title}`,
  description: featuredCaseStudy.seoDescription,
  path: `/case-studies/${featuredCaseStudy.slug}`,
  image: featuredCaseStudy.architecture.src,
});

const CASE_STUDY_URL = `${SITE.url}/case-studies/${featuredCaseStudy.slug}`;

const metricQuantValues = [
  { name: "Queries answered", value: 35000, unitText: "questions" },
  { name: "Median latency", value: 2.7, unitText: "seconds" },
  { name: "Answer accuracy", value: 0.92, unitText: "ratio" },
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: `${featuredCaseStudy.title} Case Study`,
  author: {
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.title,
    url: SITE.url,
    sameAs: [
      SITE.github,
      SITE.linkedin,
      `https://twitter.com/${SITE.twitter.replace("@", "")}`,
    ],
    email: `mailto:${SITE.email}`,
  },
  maintainer: {
    "@type": "Person",
    name: SITE.name,
  },
  codeRepository: SITE.github,
  programmingLanguage: ["Python", "TypeScript"],
  runtimePlatform: ["FastAPI", "Next.js 15"],
  applicationCategory: "BusinessApplication",
  headline: featuredCaseStudy.summary,
  url: CASE_STUDY_URL,
  image: new URL(featuredCaseStudy.architecture.src, SITE.url).toString(),
  keywords: [
    "AI Business Agent",
    "Decision Intelligence",
    "RAG",
    "Monte Carlo Simulation",
    "MLOps",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  workExample: metricQuantValues.map((metric) => ({
    "@type": "QuantitativeValue",
    name: metric.name,
    value: metric.value,
    unitText: metric.unitText,
  })),
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE.url}/case-studies` },
    { "@type": "ListItem", position: 3, name: featuredCaseStudy.title, item: CASE_STUDY_URL },
  ],
};

export default function CaseStudyPage() {
  const problem = featuredCaseStudy.sections.find((section) => section.id === "problem");
  const constraints = featuredCaseStudy.sections.find((section) => section.id === "constraints");
  const options = featuredCaseStudy.sections.find((section) => section.id === "options");
  const approach = featuredCaseStudy.sections.find((section) => section.id === "approach");
  const failures = featuredCaseStudy.sections.find((section) => section.id === "failures");
  const nextSteps = featuredCaseStudy.sections.find((section) => section.id === "next-steps");

  return (
    <>
      <Nav />
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([softwareSchema, breadcrumbs]) }}
        />

        <section className="section pt-16 sm:pt-24">
          <div className="container-wide">
            <div className="grid gap-10 rounded-[2.75rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] p-8 shadow-lift md:grid-cols-[minmax(0,1fr)_minmax(0,0.45fr)]">
              <div className="space-y-6">
                <span className="badge" data-emphasis="brand">
                  {featuredCaseStudy.heroEyebrow}
                </span>
                <h1 className="text-balance font-display text-[clamp(2.75rem,2.1rem+1.8vw,3.75rem)] font-semibold leading-tight">
                  {featuredCaseStudy.title}
                </h1>
                <p className="max-w-3xl text-lg text-[rgb(var(--text-secondary))]">
                  {featuredCaseStudy.heroIntro}
                </p>
                <p className="max-w-3xl text-base text-[rgb(var(--text-secondary))]">
                  {featuredCaseStudy.summary}
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {featuredCaseStudy.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[1.75rem] border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface-muted)/0.3)] p-4"
                    >
                      <p className="text-[rgb(var(--brand))] text-sm font-semibold uppercase tracking-[0.28em]">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-3xl font-semibold text-[rgb(var(--text))]">{metric.value}</p>
                      <p className="mt-1 text-sm text-[rgb(var(--text-secondary))]">{metric.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-[2.25rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface-muted)/0.2)] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Before → After Snapshot</p>
                <ul className="space-y-4 text-sm text-[rgb(var(--text-secondary))]">
                  {featuredCaseStudy.beforeAfter.map((item) => (
                    <li key={item.metric} className="rounded-[1.5rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">
                        {item.metric}
                      </p>
                      <p className="mt-2 text-[rgb(var(--text))]">
                        <span className="font-semibold">Before:</span> {item.before}
                      </p>
                      <p className="mt-1 text-[rgb(var(--text))]">
                        <span className="font-semibold">After:</span> {item.after}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {problem ? (
          <Section
            id="problem"
            eyebrow="Problem"
            title={problem.title}
            description={<p>{problem.summary}</p>}
          >
            <ul className="space-y-3 text-base text-[rgb(var(--text-secondary))]">
              {problem.bullets.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden className="mt-1 text-[rgb(var(--brand))]">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {constraints ? (
          <Section
            id="constraints"
            eyebrow="Constraints"
            title={constraints.title}
            description={<p>{constraints.summary}</p>}
          >
            <div className="grid gap-4 md:grid-cols-3">
              {constraints.bullets.map((point) => (
                <div key={point} className="rounded-[1.75rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface))] p-4">
                  <p className="text-sm text-[rgb(var(--text))]">{point}</p>
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        {options ? (
          <Section
            id="options"
            eyebrow="Options"
            title={options.title}
            description={<p>{options.summary}</p>}
          >
            <div className="grid gap-4 md:grid-cols-3">
              {options.bullets.map((point) => (
                <div key={point} className="rounded-[1.75rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface-muted)/0.2)] p-4">
                  <p className="text-sm text-[rgb(var(--text-secondary))]">{point}</p>
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        {approach ? (
          <Section
            id="approach"
            eyebrow="Why this approach"
            title={approach.title}
            description={<p>{approach.summary}</p>}
          >
            <ul className="space-y-3 text-base text-[rgb(var(--text-secondary))]">
              {approach.bullets.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden className="mt-1 text-[rgb(var(--brand))]">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        <Section
          id="architecture"
          eyebrow="Architecture"
          title="Pipeline view"
          description={
            <p>
              Retrieval, simulation, and guardrails combine to keep accuracy accountable while staying within the 3 second
              latency budget.
            </p>
          }
        >
          <figure className="overflow-hidden rounded-[2.5rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface))] shadow-soft">
            <Image
              src={featuredCaseStudy.architecture.src}
              alt={featuredCaseStudy.architecture.alt}
              width={1200}
              height={720}
              priority={false}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface-muted)/0.2)] p-4 text-sm text-[rgb(var(--text-secondary))]">
              {featuredCaseStudy.architecture.caption}
            </figcaption>
          </figure>
        </Section>

        <Section
          id="resilience"
          eyebrow="Operational resilience"
          title="Keeping trust during failure modes"
          description={<p>{failures?.summary}</p>}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[rgb(var(--text))]">Mitigations</h3>
              <ul className="space-y-3 text-sm text-[rgb(var(--text-secondary))]">
                {failures?.bullets.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="mt-1 text-[rgb(var(--brand))]">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[rgb(var(--text))]">Next steps</h3>
              <ul className="space-y-3 text-sm text-[rgb(var(--text-secondary))]">
                {nextSteps?.bullets.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="mt-1 text-[rgb(var(--brand))]">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <div className="section">
          <div className="container-wide">
            <ContactBar />
          </div>
        </div>
      </main>
    </>
  );
}
