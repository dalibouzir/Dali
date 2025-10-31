import { Seo } from "@/components/Seo";
import { SITE } from "@/config/site";
import { projects } from "@/content/projects";

// @improvement: SEO tags for project detail routes
export default async function Head({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Seo title={SITE.title} description={SITE.tagline} path="/projects" />;
  }

  const description = project.summary[0] ?? SITE.tagline;

  return (
    <Seo
      title={`${project.title} · ${SITE.title}`}
      description={description}
      path={`/projects/${project.slug}`}
      image={project.visual?.src}
    />
  );
}
