import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { ContactBar } from "@/components/ContactBar";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/components/Seo";
import { projects } from "@/content/projects";
import { getProjectAssets } from "@/lib/projectAssets";

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
  const assets = getProjectAssets(project.slug, project.media?.image ?? project.visual?.src);
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
                <p className="text-base text-[rgb(var(--text-secondary))]">{project.summary}</p>

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
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-5 py-2.5 text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <figure className="overflow-hidden rounded-[2.25rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface-muted)/0.15)] p-3">
                <Image
                  src={assets.cover}
                  alt={project.visual?.alt ?? `${project.title} preview`}
                  width={600}
                  height={450}
                  className="h-auto w-full rounded-[1.75rem] object-cover"
                />
                <figcaption className="mt-3 text-xs text-[rgb(var(--text-secondary))]">
                  {project.visual?.alt ?? `${project.title} preview`}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {(assets.images.length > 0 || assets.videos.length > 0) && (
          <Section
            id="project-media"
            eyebrow="Media"
            title="See it in action"
            description={<p>Captured visuals and recordings from {project.title}. Assets originate from the /public/assets/projects directory.</p>}
          >
            <div className="space-y-8">
              {assets.images.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {assets.images.map((image, index) => (
                    <figure
                      key={image}
                      className="overflow-hidden rounded-[1.75rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface-muted)/0.2)]"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        width={900}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                      <figcaption className="px-4 py-2 text-xs text-[rgb(var(--text-secondary))]">
                        {project.title} — view {index + 1}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}

              {assets.videos.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {assets.videos.map((video) => (
                    <div
                      key={video}
                      className="overflow-hidden rounded-[1.75rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface-muted)/0.2)]"
                    >
                      <video
                        controls
                        playsInline
                        poster={assets.cover}
                        className="h-full w-full rounded-[1.75rem] rounded-b-none bg-black"
                      >
                        <source src={video} />
                        Your browser does not support the video tag.
                      </video>
                      <div className="px-4 py-2 text-xs text-[rgb(var(--text-secondary))]">Demo recording</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </Section>
        )}

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
                {project.tags?.map((tag) => (
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
