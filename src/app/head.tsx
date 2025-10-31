import { Seo } from "@/components/Seo";
import { SITE } from "@/config/site";

// @improvement: ensure base head tags reuse Seo helper
export default function Head() {
  return <Seo title={SITE.title} description={SITE.tagline} path="/" />;
}
