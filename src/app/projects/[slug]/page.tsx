import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactBar } from "@/components/ContactBar";
import { buildMetadata } from "@/components/Seo";
import { ProjectMediaGallery } from "@/components/projects/ProjectMediaGallery";
import { ProjectSectionNav } from "@/components/projects/ProjectSectionNav";
import { SITE } from "@/config/site";
import { projects } from "@/content/projects";
import { PROJECT_DETAIL_COPY } from "@/lib/i18n";
import { localizeProjects } from "@/lib/localizedProjects";
import { getProjectAssets } from "@/lib/projectAssets";
import { getServerLocale } from "@/lib/serverLocale";

type Params = {
  slug: string;
};

function escapeSvgText(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildGeneratedCoverDataUri(title: string, category: string, stack: string[]) {
  const safeTitle = escapeSvgText(title);
  const safeCategory = escapeSvgText(category);
  const safeStack = escapeSvgText(stack.slice(0, 4).join(" • "));

  const svg = `
<svg width="1200" height="780" viewBox="0 0 1200 780" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="780" gradientUnits="userSpaceOnUse">
      <stop stop-color="#08172C" />
      <stop offset="0.52" stop-color="#103A62" />
      <stop offset="1" stop-color="#0A213C" />
    </linearGradient>
  </defs>
  <rect width="1200" height="780" rx="42" fill="url(#bg)"/>
  <rect x="58" y="58" width="1084" height="664" rx="34" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)"/>
  <rect x="98" y="124" width="1004" height="2" fill="rgba(162,226,255,0.5)"/>
  <text x="98" y="108" fill="#C3E5FF" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="24" font-weight="600">${safeCategory}</text>
  <text x="98" y="210" fill="#EBF5FF" font-family="'Space Grotesk', 'Inter', sans-serif" font-size="62" font-weight="700">${safeTitle}</text>
  <rect x="98" y="254" width="840" height="68" rx="20" fill="rgba(255,255,255,0.08)"/>
  <text x="126" y="297" fill="#D9EEFF" font-family="'Outfit', 'Inter', sans-serif" font-size="31" font-weight="600">${safeStack}</text>
  <g opacity="0.4">
    <circle cx="236" cy="510" r="92" stroke="rgba(125,211,252,0.65)" stroke-width="2"/>
    <circle cx="236" cy="510" r="58" stroke="rgba(125,211,252,0.5)" stroke-width="2"/>
    <circle cx="236" cy="510" r="22" fill="rgba(125,211,252,0.55)"/>
    <circle cx="944" cy="510" r="92" stroke="rgba(200,16,46,0.65)" stroke-width="2"/>
    <circle cx="944" cy="510" r="58" stroke="rgba(200,16,46,0.5)" stroke-width="2"/>
    <circle cx="944" cy="510" r="22" fill="rgba(200,16,46,0.55)"/>
    <path d="M330 510H850" stroke="rgba(240,248,255,0.35)" stroke-width="3" stroke-dasharray="12 8"/>
  </g>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return {};
  }

  return buildMetadata({
    title: `${project.title} · ${SITE.title}`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.visual?.src ?? SITE.ogImage,
  });
}

const isExternalHref = (href: string) => href.startsWith("http") || href.startsWith("mailto:");

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const copy = PROJECT_DETAIL_COPY[locale];
  const localizedProjects = localizeProjects(projects, locale);
  const project = localizedProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const previewLabel = locale === "fr" ? "aperçu" : locale === "ar" ? "معاينة" : "preview";
  const projectUrl = new URL(`/projects/${project.slug}`, SITE.url).toString();
  const categoryLabel =
    locale === "fr"
      ? project.category === "AI & MLOps"
        ? "IA & MLOps"
        : project.category === "Backend Engineering"
          ? "Ingénierie Backend"
          : "Applications Full-Stack"
      : locale === "ar"
        ? project.category === "AI & MLOps"
          ? "ذكاء اصطناعي وعمليات تعلم آلي"
          : project.category === "Backend Engineering"
            ? "هندسة باكند"
            : "تطبيقات متكاملة"
        : project.category;
  const assets = getProjectAssets(project.slug, project.media?.image ?? project.visual?.src);
  const generatedCover = buildGeneratedCoverDataUri(project.title, categoryLabel, project.stack);
  const coverSrc = assets.cover === "/assets/projects/default.svg" ? generatedCover : assets.cover;
  const primaryLinks = project.links.filter((link) => link.href !== `/projects/${project.slug}`);

  const projectIndex = localizedProjects.findIndex((item) => item.slug === project.slug);
  const previousProject = projectIndex > 0 ? localizedProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < localizedProjects.length - 1 ? localizedProjects[projectIndex + 1] : null;
  const breadcrumbHomeLabel = locale === "fr" ? "Accueil" : locale === "ar" ? "الرئيسية" : "Home";
  const breadcrumbProjectsLabel = locale === "fr" ? "Projets" : locale === "ar" ? "المشاريع" : "Projects";

  const sectionLinks = [
    { id: "overview", label: copy.sectionLabels.overview },
    { id: "problem", label: copy.sectionLabels.problem },
    { id: "impact", label: copy.sectionLabels.impact },
    { id: "architecture", label: copy.sectionLabels.architecture },
    { id: "features", label: copy.sectionLabels.features },
    ...(project.validation?.length ? [{ id: "validation", label: copy.sectionLabels.validation }] : []),
    ...(assets.images.length > 0 || assets.videos.length > 0 ? [{ id: "media", label: copy.sectionLabels.media }] : []),
    { id: "limitations", label: copy.sectionLabels.limitations },
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: SITE.name,
      jobTitle: "AI Engineer",
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
      { "@type": "ListItem", position: 1, name: breadcrumbHomeLabel, item: SITE.url },
      { "@type": "ListItem", position: 2, name: breadcrumbProjectsLabel, item: `${SITE.url}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: projectUrl },
    ],
  };

  return (
    <main id="main" className="section pt-16 sm:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([softwareSchema, breadcrumbs]) }} />

      <section className="container-wide">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.62)] bg-[rgb(var(--surface))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.5)]"
        >
          ← {copy.backToProjects}
        </Link>

        <article className="mt-4 grid gap-7 rounded-[2.7rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] p-7 shadow-lift sm:p-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
          <div className="space-y-5">
            <p className="badge" data-emphasis="brand">
              {categoryLabel}
            </p>

            <div className="space-y-3">
              <h1 className="text-balance font-display text-[clamp(2.1rem,1.8rem+1.4vw,3.1rem)] font-semibold leading-tight text-[rgb(var(--text))]">
                {project.title}
              </h1>
              <p className="text-base text-[rgb(var(--text-secondary))] sm:text-lg">{project.tagline}</p>
              <p className="text-sm text-[rgb(var(--text-secondary))]">{project.summary}</p>
            </div>

            <dl className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[rgb(var(--surface-muted)/0.58)] bg-[rgb(var(--surface-muted)/0.2)] p-4">
                <dt className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--muted))]">{copy.labels.role}</dt>
                <dd className="mt-2 text-sm font-semibold text-[rgb(var(--text))]">{project.role}</dd>
              </div>
              <div className="rounded-2xl border border-[rgb(var(--surface-muted)/0.58)] bg-[rgb(var(--surface-muted)/0.2)] p-4">
                <dt className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--muted))]">{copy.labels.status}</dt>
                <dd className="mt-2 text-sm font-semibold text-[rgb(var(--text))]">{project.status}</dd>
              </div>
              <div className="rounded-2xl border border-[rgb(var(--surface-muted)/0.58)] bg-[rgb(var(--surface-muted)/0.2)] p-4">
                <dt className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--muted))]">{copy.labels.stackItems}</dt>
                <dd className="mt-2 text-sm font-semibold text-[rgb(var(--text))]">{project.stack.length}</dd>
              </div>
            </dl>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">{copy.headings.techStack}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="chip" data-tone="soft">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {primaryLinks.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {primaryLinks.map((link) => (
                  <Link
                    key={`${project.slug}-${link.href}-${link.label}`}
                    href={link.href}
                    target={isExternalHref(link.href) ? "_blank" : undefined}
                    rel={isExternalHref(link.href) ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.5)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <figure className="relative overflow-hidden rounded-[2.2rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface-muted)/0.24)] p-3">
            <Image
              src={coverSrc}
              alt={project.visual?.alt ?? `${project.title} ${previewLabel}`}
              width={840}
              height={620}
              className="h-auto w-full rounded-[1.6rem] object-cover"
              priority
            />
            <figcaption className="mt-3 px-1 text-xs text-[rgb(var(--text-secondary))]">
              {project.visual?.alt ?? `${project.title} ${previewLabel}`}
            </figcaption>
          </figure>
        </article>
      </section>

      <section className="container-wide mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(240px,290px)] lg:items-start">
        <div className="space-y-6">
          <article id="overview" className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.sectionLabels.overview}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[rgb(var(--text))]">{copy.headings.projectContext}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--text-secondary))] sm:text-base">{project.summary}</p>
          </article>

          <article id="problem" className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.sectionLabels.problem}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[rgb(var(--text))]">{copy.headings.problemToSolve}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--text-secondary))] sm:text-base">{project.problem}</p>
          </article>

          <article id="impact" className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.sectionLabels.impact}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[rgb(var(--text))]">{copy.headings.deliveryOutcomes}</h2>
            <ul className="mt-5 space-y-3 text-sm text-[rgb(var(--text-secondary))] sm:text-base">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[rgb(var(--brand))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article id="architecture" className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.sectionLabels.architecture}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[rgb(var(--text))]">{copy.headings.executionFlow}</h2>
            <p className="mt-3 text-sm text-[rgb(var(--text-secondary))] sm:text-base">
              {copy.headings.executionFlowLead}
            </p>

            <ol className="relative mt-6 space-y-4 before:absolute before:bottom-2 before:left-4 before:top-2 before:w-px before:bg-gradient-to-b before:from-[rgb(var(--brand)/0.2)] before:via-[rgb(var(--text)/0.55)] before:to-[rgb(var(--brand)/0.2)] md:before:left-1/2 md:before:-translate-x-1/2">
              {project.architecture.map((step, index) => (
                <li key={step} className="relative pl-10 md:grid md:grid-cols-2 md:gap-8 md:pl-0">
                  <span className="absolute left-[0.55rem] top-6 h-3 w-3 rounded-full border-2 border-[rgb(var(--brand))] bg-[rgb(var(--surface))] md:left-1/2 md:-translate-x-1/2" aria-hidden />
                  <div
                    className={`rounded-[1.4rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface-muted)/0.18)] p-4 ${
                      index % 2 === 0 ? "md:mr-6" : "md:col-start-2 md:ml-6"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--muted))]">{copy.labels.step} {index + 1}</p>
                    <p className="mt-2 text-sm text-[rgb(var(--text-secondary))] sm:text-base">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article id="features" className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.sectionLabels.features}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[rgb(var(--text))]">{copy.headings.featuresShipped}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.features.map((feature) => (
                <article key={feature} className="rounded-[1.35rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface-muted)/0.16)] p-4">
                  <p className="text-sm leading-relaxed text-[rgb(var(--text-secondary))] sm:text-base">{feature}</p>
                </article>
              ))}
            </div>
          </article>

          {project.validation?.length ? (
            <article id="validation" className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.sectionLabels.validation}</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-[rgb(var(--text))]">{copy.headings.measuredEvidence}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.validation.map((item) => (
                  <li key={item} className="rounded-[1.2rem] border border-emerald-300/24 bg-emerald-400/8 px-4 py-3 text-sm text-[rgb(var(--text-secondary))]">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ) : null}

          {assets.images.length > 0 || assets.videos.length > 0 ? (
            <article id="media" className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.sectionLabels.media}</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-[rgb(var(--text))]">{copy.headings.mediaTitle}</h2>
              <div className="mt-5">
                <ProjectMediaGallery
                  title={project.title}
                  images={assets.images}
                  videos={assets.videos}
                  fallbackPoster={assets.cover}
                />
              </div>
            </article>
          ) : null}

          <article id="limitations" className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.sectionLabels.limitations}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[rgb(var(--text))]">{copy.headings.scopeBoundaries}</h2>
            <ul className="mt-5 space-y-3 text-sm text-[rgb(var(--text-secondary))] sm:text-base">
              {project.limitations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {(previousProject || nextProject) && (
            <article className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.headings.moreProjects}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {previousProject ? (
                  <Link
                    href={`/projects/${previousProject.slug}`}
                    className="rounded-[1.3rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface-muted)/0.16)] p-4 transition hover:border-[rgb(var(--brand)/0.45)]"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))]">{copy.labels.previous}</p>
                    <p className="mt-2 text-sm font-semibold text-[rgb(var(--text))]">{previousProject.title}</p>
                  </Link>
                ) : (
                  <div className="hidden sm:block" aria-hidden />
                )}

                {nextProject ? (
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="rounded-[1.3rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface-muted)/0.16)] p-4 transition hover:border-[rgb(var(--brand)/0.45)]"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))]">{copy.labels.next}</p>
                    <p className="mt-2 text-sm font-semibold text-[rgb(var(--text))]">{nextProject.title}</p>
                  </Link>
                ) : (
                  <div className="hidden sm:block" aria-hidden />
                )}
              </div>
            </article>
          )}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <ProjectSectionNav sections={sectionLinks} title={copy.labels.onThisPage} />

          <div className="rounded-[1.8rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgb(var(--muted))]">{copy.headings.quickFacts}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-start justify-between gap-3 border-b border-[rgb(var(--surface-muted)/0.4)] pb-2">
                <dt className="text-[rgb(var(--text-secondary))]">{copy.labels.category}</dt>
                <dd className="text-right font-semibold text-[rgb(var(--text))]">{categoryLabel}</dd>
              </div>
              <div className="flex items-start justify-between gap-3 border-b border-[rgb(var(--surface-muted)/0.4)] pb-2">
                <dt className="text-[rgb(var(--text-secondary))]">{copy.labels.status}</dt>
                <dd className="text-right font-semibold text-[rgb(var(--text))]">{project.status}</dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-[rgb(var(--text-secondary))]">{copy.labels.validationItems}</dt>
                <dd className="text-right font-semibold text-[rgb(var(--text))]">{project.validation?.length ?? 0}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="container-wide section pt-10 sm:pt-14">
        <ContactBar />
      </section>
    </main>
  );
}
