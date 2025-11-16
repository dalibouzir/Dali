import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { ProjectShowcaseCard } from "@/components/ProjectShowcaseCard";
import { CertificationBadge } from "@/components/CertificationBadge";
import { ContactBar } from "@/components/ContactBar";
import { SkillCluster } from "@/components/SkillCluster";
import { fields } from "@/content/fields";
import { projects } from "@/content/projects";
import { experiences } from "@/content/experience";
import { certifications } from "@/content/certifications";
import { owner } from "@/content/siteMeta";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/components/Seo";

type Params = {
  slug: (typeof fields)[number]["slug"];
};

export function generateStaticParams() {
  return fields.map((field) => ({ slug: field.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const field = fields.find((item) => item.slug === slug);
  if (!field) {
    return {};
  }

  return buildMetadata({
    title: `${field.label} · ${SITE.title}`,
    description: field.metaDescription,
    path: `/field/${field.slug}`,
  });
}

export default async function FieldPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const field = fields.find((item) => item.slug === slug);

  if (!field) {
    notFound();
  }

  const fieldProjects = projects.filter((project) =>
    project.tags?.some((tag) => field.projectTags?.includes(tag)),
  );
  const fieldExperiences = experiences.filter((experience) =>
    experience.tags.some((tag) => field.experienceTags?.includes(tag)),
  );
  const fieldCertifications = certifications.filter((cert) =>
    field.certificationNames.includes(cert.name),
  );

  const primaryProject = fieldProjects[0];
  const heroStacks = primaryProject?.stack.slice(0, 3) ?? field.coreSkills.slice(0, 3);
  const canonicalPath = `/field/${field.slug}`;
  // @improvement: schema metadata for field web page + breadcrumbs
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${field.label} · ${SITE.title}`,
      description: field.metaDescription,
      url: `${SITE.url}${canonicalPath}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: field.label,
          item: `${SITE.url}${canonicalPath}`,
        },
      ],
    },
  ];

  return (
    <>
      <Nav />
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="section pt-16 sm:pt-20">
          <div className="container-wide">
            <div className="grid gap-6 rounded-[2.5rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface))] p-6 shadow-soft sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="space-y-5">
                <span className="badge" data-emphasis="brand">
                  Field Overview
                </span>
                <h1 className="text-balance font-display text-[clamp(2.1rem,1.85rem+1.6vw,3.25rem)] font-semibold text-[rgb(var(--text))]">
                  {field.label}
                </h1>
                <div className="space-y-3 text-base text-[rgb(var(--text-secondary))] sm:text-lg">
                  {field.hero.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">
                  {field.coreSkills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface-muted)/0.35)] px-3 py-1 text-[rgb(var(--text))]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 text-sm font-semibold text-[rgb(var(--brand))]">
                  <span>Working with {owner.name}</span>
                  <Link
                    href={owner.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-4 py-2 text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
                  >
                    View CV
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border border-[rgb(var(--surface-muted)/0.45)] bg-gradient-to-br from-[rgb(var(--brand)/0.2)] via-transparent to-[rgb(var(--brand-soft)/0.16)] p-4">
                {primaryProject?.visual ? (
                  <>
                    <Image
                      src={primaryProject.visual.src}
                      alt={primaryProject.visual.alt}
                      fill
                      sizes="(min-width: 1024px) 420px, (min-width: 768px) 70vw, 92vw"
                      className="rounded-[1.6rem] object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-[rgb(var(--surface))] via-transparent to-transparent opacity-70" />
                  </>
                ) : null}
                <div className="relative z-10 flex flex-col gap-3 rounded-[1.6rem] border border-white/15 bg-white/18 p-5 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_16px_42px_-24px_rgba(15,23,42,0.35)]">
                  <span>Highlighted Project</span>
                  <span className="text-sm normal-case tracking-normal text-white/80">
                    {primaryProject?.title ?? "End-to-end delivery"}
                  </span>
                  <div className="flex flex-wrap gap-2 text-[0.7rem]">
                    {heroStacks.map((item) => (
                      <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/85">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="projects"
          eyebrow="Relevant Projects"
          title="Projects tailored to this field."
          description={<p>Selected builds aligned with the field focus—showing stacks, metrics, and outcomes documented in the CV.</p>}
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {fieldProjects.map((project) => (
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
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Roles and engagements delivering these outcomes."
          description={<p>Hands-on experience from internships and freelance work that connects requirements to production-ready releases.</p>}
        >
          <div className="grid gap-5">
            {fieldExperiences.map((experience) => (
              <ExperienceCard key={experience.slug} experience={experience} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Core Skills"
          title="Competencies highlighted for this field."
          description={<p>Capabilities sourced directly from the CV skill matrix and recent engagements.</p>}
        >
          <SkillCluster title={field.label} items={field.coreSkills} />
        </Section>

        <Section
          id="certifications"
          eyebrow="Certifications"
          title="Credentials that reinforce this field."
          description={<p>Certification badges that cover foundations, analytics, and AI principles relevant to the field.</p>}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {fieldCertifications.map((cert) => (
              <CertificationBadge key={cert.name} name={cert.name} issuer={cert.issuer} date={cert.date} />
            ))}
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

type ExperienceCardProps = {
  experience: (typeof experiences)[number];
};

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface))] p-5 shadow-soft transition hover:border-[rgb(var(--brand)/0.35)]">
      <header className="space-y-2">
        <h3 className="text-xl font-semibold text-[rgb(var(--text))]">{experience.title}</h3>
        <p className="text-sm text-[rgb(var(--text-secondary))]">
          {experience.organization} • {experience.engagement}
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
          {experience.location} • {experience.period}
        </p>
      </header>
      <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--text-secondary))]">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span aria-hidden className="mt-1 text-[rgb(var(--brand))]">▹</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
