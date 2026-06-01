import { Seo } from "@/components/Seo";
import { SITE } from "@/config/site";

// @improvement: head metadata for project listing
export default function Head() {
  return (
    <Seo
      title={`Projects · ${SITE.title}`}
      description="Selected AI engineering projects focused on LLM/RAG systems, ML advisory signals, and evidence-first decision support."
      path="/projects"
    />
  );
}
