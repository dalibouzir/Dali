import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

// @improvement: expose robots policy referencing canonical sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
