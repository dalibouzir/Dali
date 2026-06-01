import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { buildMetadata } from "@/components/Seo";
import { SITE } from "@/config/site";
import { projects } from "@/content/projects";
import { PROJECTS_PAGE_COPY } from "@/lib/i18n";
import { localizeProjects } from "@/lib/localizedProjects";
import { getServerLocale } from "@/lib/serverLocale";

export const metadata: Metadata = buildMetadata({
  title: `Projects · ${SITE.title}`,
  description: "Selected AI engineering projects with case-study style delivery notes and validation context.",
  path: "/projects",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects",
  description: "Projects delivered by Mohamed Ali Bouzir across AI engineering and decision-support systems.",
  url: `${SITE.url}/projects`,
  hasPart: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    url: `${SITE.url}/projects/${project.slug}`,
    about: project.summary,
  })),
};

export default async function ProjectsIndex() {
  const locale = await getServerLocale();
  const copy = PROJECTS_PAGE_COPY[locale];
  const localizedProjects = localizeProjects(projects, locale);

  return (
    <main id="main" className="section pt-18 sm:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="container-wide">
        <div className="rounded-[2.6rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] p-7 shadow-soft sm:p-9">
          <p className="badge" data-emphasis="brand">
            {copy.badge}
          </p>
          <h1 className="mt-4 text-balance font-display text-[clamp(2.2rem,1.95rem+1.7vw,3.6rem)] font-semibold text-[rgb(var(--text))]">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base text-[rgb(var(--text-secondary))] sm:text-lg">
            {copy.description}
          </p>
        </div>
      </section>

      <section className="container-wide mt-8">
        <ProjectsExplorer projects={localizedProjects} locale={locale} />
      </section>
    </main>
  );
}
