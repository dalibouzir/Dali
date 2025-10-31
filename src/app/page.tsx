import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { HomeHero } from "@/components/HomeHero";
import { ProjectShowcaseCard } from "@/components/ProjectShowcaseCard";
import { CVCard } from "@/components/CVCard";
import { CertificationBadge } from "@/components/CertificationBadge";
import { ContactBar } from "@/components/ContactBar";
import { SkillCluster } from "@/components/SkillCluster";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { projects } from "@/content/projects";
import { certifications } from "@/content/certifications";
import { fields } from "@/content/fields";
import { owner } from "@/content/siteMeta";
import { skillGroups } from "@/content/skills";
import { featuredCaseStudy } from "@/content/caseStudies";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/components/Seo";

// @improvement: homepage metadata derived from SITE config
export const metadata: Metadata = buildMetadata({
  title: SITE.title,
  description: SITE.tagline,
  path: "/",
});

const spotlightOrder = ["ai-business-agent", "quirkhire", "affa", "meriem-booking"] as const;
const featuredProjects = spotlightOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is typeof projects[number] => Boolean(project));
// @improvement: structured data for Person + WebSite + breadcrumbs
const personSchema = {
  "@context": "https://schema.org",
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
      <Nav />
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema, breadcrumbs]),
          }}
        />
        <HomeHero />

        {/* @improvement: surface flagship case study on the homepage */}
        <Section
          id="case-study"
          eyebrow="Deep Dive"
          title="How the AI Business Agent delivers measurable impact"
          description={
            <p>
              A behind-the-scenes look at how {SITE.name} architected ingestion, retrieval, and Monte Carlo simulations to
              shrink analyst turnaround from 12 hours to seconds.
            </p>
          }
        >
          <CaseStudyCard study={featuredCaseStudy} />
        </Section>

        <Section
          id="featured"
          eyebrow="Best Projects"
          title="Featured delivery across AI, back-end, and full-stack launches."
          description={
            <p>
              Flagship builds that align data engineering, applied AI, and resilient shipping. Each project surfaces measurable metrics
              and production stacks pulled straight from the CV.
            </p>
          }
        >
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-3 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(148,163,184,0.25)] to-transparent md:block"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-3 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(148,163,184,0.25)] to-transparent md:block"
            />
            <div className="grid gap-5 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectShowcaseCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  summary={project.summary}
                  stack={project.stack}
                  links={project.links}
                  visual={project.visual}
                />
              ))}
            </div>
          </div>
        </Section>

        <section className="section pt-0">
          <div className="container-wide">
            <div className="relative overflow-hidden rounded-[2.75rem] border border-[rgb(var(--surface-muted)/0.45)] bg-gradient-to-r from-[rgb(var(--brand)/0.18)] via-[rgb(var(--brand-soft)/0.15)] to-[rgb(var(--brand)/0.1)] p-6 shadow-soft sm:p-8">
              <div className="grid gap-5 md:grid-cols-3">
                <ImpactItem
                  title="35k+"
                  label="LLM-backed answers shipped"
                  detail="AI Business Agent"
                />
                <ImpactItem
                  title="±2"
                  label="Point prediction accuracy"
                  detail="AFFA lineup engine"
                />
                <ImpactItem
                  title="7000+"
                  label="Players synced"
                  detail="Fittrah Moms & MyMatch pipelines"
                />
              </div>
            </div>
          </div>
        </section>

        <Section
          id="cv"
          eyebrow="Professional Snapshot"
          title="CV, credentials, and certifications at a glance."
          description={
            <p>
              Download the latest CV, connect directly, and review certifications that reinforce data science, visualization, and AI delivery.
            </p>
          }
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <CVCard />
            <div className="grid gap-4 md:grid-cols-2">
              {certifications.map((cert) => (
                <CertificationBadge
                  key={cert.name}
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                />
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="fields"
          eyebrow="Fields / Jobs"
          title="Focused practice areas with tailored experience."
          description={
            <p>
              Explore how skills, projects, and experience align to specific mandates. Each field page dives deeper into relevant objectives, outcomes, and tooling.
            </p>
          }
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {fields.map((field) => (
              <Link
                key={field.slug}
                href={`/field/${field.slug}`}
                className="group flex flex-col gap-5 rounded-[2.25rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface))] p-6 shadow-soft transition hover:border-[rgb(var(--brand)/0.35)] hover:shadow-lift"
              >
                <div className="space-y-2">
                  <p className="badge" data-emphasis="brand">
                    {field.label}
                  </p>
                  <h3 className="text-xl font-semibold text-[rgb(var(--text))]">{field.hero.title}</h3>
                  <p className="text-sm text-[rgb(var(--text-secondary))]">{field.hero.intro[0]}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--brand))]">
                  View field page
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Section>

        <Section
          id="tech-stack"
          eyebrow="Tech Stack"
          title="Tooling used across data, engineering, and delivery."
          description={
            <p>
              Skills drawn directly from recent projects and certifications—balanced across programming, web platforms, applied AI, and MLOps tooling.
            </p>
          }
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <SkillCluster title="Programming Languages" items={skillGroups.programming} />
            <SkillCluster title="Web Development" items={skillGroups.web} />
            <SkillCluster title="Data Science & AI" items={skillGroups.dataAi} />
            <SkillCluster title="Data Engineering & MLOps" items={skillGroups.dataEngineering} />
            <SkillCluster title="Tools & Environments" items={skillGroups.tools} />
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

type ImpactItemProps = {
  title: string;
  label: string;
  detail: string;
};

function ImpactItem({ title, label, detail }: ImpactItemProps) {
  return (
    <div className="flex flex-col gap-2 rounded-[1.75rem] border border-white/20 bg-white/12 p-5 text-white shadow-[0_18px_48px_-24px_rgba(15,23,42,0.38)] backdrop-blur dark:border-white/10 dark:bg-white/10">
      <span className="text-3xl font-semibold sm:text-4xl">{title}</span>
      <span className="text-sm uppercase tracking-[0.28em] text-white/70">{label}</span>
      <span className="text-sm font-medium text-white/85">{detail}</span>
    </div>
  );
}
