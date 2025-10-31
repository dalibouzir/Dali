import { Seo } from "@/components/Seo";
import { SITE } from "@/config/site";

// @improvement: head metadata for case study index
export default function Head() {
  return (
    <Seo
      title={`Case Studies · ${SITE.title}`}
      description="Deep dives showcasing measurable AI and MLOps delivery across data products."
      path="/case-studies"
    />
  );
}
