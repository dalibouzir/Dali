import { Seo } from "@/components/Seo";
import { SITE } from "@/config/site";
import { featuredCaseStudy } from "@/content/caseStudies";

// @improvement: case study head tags share Seo helper + SITE defaults
export default function Head() {
  return (
    <Seo
      title={`${featuredCaseStudy.title} · ${SITE.title}`}
      description={featuredCaseStudy.seoDescription}
      path={`/case-studies/${featuredCaseStudy.slug}`}
      image={featuredCaseStudy.architecture.src}
    />
  );
}
