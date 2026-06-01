import { Seo } from "@/components/Seo";
import { SITE } from "@/config/site";

// @improvement: head metadata for case study index
export default function Head() {
  return (
    <Seo
      title={`Case Studies · ${SITE.title}`}
      description="Case studies on validation-backed AI decision-support systems and SQL-grounded assistant architecture."
      path="/case-studies"
    />
  );
}
