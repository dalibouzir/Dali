import { Seo } from "@/components/Seo";
import { SITE } from "@/config/site";

// @improvement: head metadata for project listing
export default function Head() {
  return (
    <Seo
      title={`Projects · ${SITE.title}`}
      description="Full catalogue of AI, data, and engineering work shipped by Dali Ben."
      path="/projects"
    />
  );
}
