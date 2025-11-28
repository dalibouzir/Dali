import type { Metadata } from "next";
import Section from "@/components/Section";
import { ProjectShowcaseCard } from "@/components/ProjectShowcaseCard";
import { buildMetadata } from "@/components/Seo";
import { SITE } from "@/config/site";
import { projects } from "@/content/projects";

// @improvement: index page enumerating all projects for SEO crawlers
export const metadata: Metadata = buildMetadata({
  title: `Projects · ${SITE.title}`,
  description: "Full list of shipped AI, MLOps, and full-stack projects.",
  path: "/projects",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects",
  description: "Projects delivered by Dali Ben across AI, MLOps, and full-stack engineering.",
  url: `${SITE.url}/projects`,
  hasPart: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    url: `${SITE.url}/projects/${project.slug}`,
    about: project.summary,
  })),
};

export default function ProjectsIndex() {
  return (
    <>
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Section
          id="projects"
          eyebrow="Portfolio"
          title="Projects"
          description={
            <p>
              End-to-end delivery spanning data ingestion, MLOps, and user-facing products. Dive in for stacks, outcomes,
              and production readiness notes.
            </p>
          }
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
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
      </main>
    </>
  );
}
