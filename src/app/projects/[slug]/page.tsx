import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { ContactBar } from "@/components/ContactBar";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/components/Seo";
import { projects } from "@/content/projects";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// @improvement: project detail pages for SEO + storytelling depth
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return {};
  }

  const description = project.summary || SITE.tagline;

  return buildMetadata({
    title: `${project.title} · ${SITE.title}`,
    description,
    path: `/projects/${project.slug}`,
    image: project.visual?.src ?? SITE.ogImage,
  });
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const projectUrl = new URL(`/projects/${project.slug}`, SITE.url).toString();
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: SITE.name,
      jobTitle: SITE.title,
      email: `mailto:${SITE.email}`,
    },
    url: projectUrl,
    image: new URL(project.visual?.src ?? SITE.ogImage, SITE.url).toString(),
    keywords: project.tags,
    programmingLanguage: project.stack,
    codeRepository: project.links.find((link) => link.label.toLowerCase().includes("github"))?.href,
    applicationCategory: "BusinessApplication",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE.url}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: projectUrl },
    ],
  };

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
            <div className="grid gap-10 rounded-[2.75rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] p-8 shadow-lift lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
              <div className="space-y-4">
                <span className="badge" data-emphasis="brand">
                  Project
                </span>
                <h1 className="text-balance font-display text-[clamp(2.4rem,1.9rem+1.4vw,3.3rem)] font-semibold leading-tight">
                  {project.title}
                </h1>
                <ul className="space-y-3 text-base text-[rgb(var(--text-secondary))]">
                  {project.summary.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-1 text-[rgb(var(--brand))]">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Stack</p>
                  <div className="flex flex-wrap gap-2 text-sm text-[rgb(var(--text))]">
                    {project.stack.map((item) => (
                      <span key={item} className="chip" data-tone="soft">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm font-semibold">
                  {project.links.live ? (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[rgb(var(--brand))] px-5 py-2.5 text-white transition hover:shadow-lift"
                    >
                      View live
                    </Link>
                  ) : null}
                  {project.links.repo ? (
                    <Link
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-5 py-2.5 text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
                    >
                      View repo
                    </Link>
                  ) : null}
                </div>
              </div>

              {project.visual ? (
                <figure className="overflow-hidden rounded-[2.25rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface-muted)/0.15)] p-3">
                  <Image
                    src={project.visual.src}
                    alt={project.visual.alt}
                    width={600}
                    height={450}
                    className="h-auto w-full rounded-[1.75rem] object-cover"
                  />
                  <figcaption className="mt-3 text-xs text-[rgb(var(--text-secondary))]">
                    {project.visual.alt}
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </div>
        </section>

        <Section
          id="project-details"
          eyebrow="Delivery"
          title="What was built"
          description={<p>Stacks, integrations, and capabilities that shipped as part of this engagement.</p>}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-[2rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface))] p-5">
              <h3 className="text-lg font-semibold text-[rgb(var(--text))]">Focus areas</h3>
              <ul className="space-y-2 text-sm text-[rgb(var(--text-secondary))]">
                {project.tags.map((tag) => (
                  <li key={tag} className="inline-flex items-center gap-2">
                    <span aria-hidden>●</span>
                    <span className="uppercase tracking-[0.22em] text-[rgb(var(--muted))]">{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-[2rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface))] p-5">
              <h3 className="text-lg font-semibold text-[rgb(var(--text))]">Outcomes recorded</h3>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                Each bullet in the summary reflects shipped functionality or measurable impact confirmed with stakeholders. Reach out if you’d like a private demo or architecture walk-through.
              </p>
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
