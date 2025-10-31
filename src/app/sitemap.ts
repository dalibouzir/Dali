import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { fields } from "@/content/fields";
import { projects } from "@/content/projects";

const buildUrl = (path: string) => new URL(path, SITE.url).toString();

// @improvement: dynamic sitemap with lastmod timestamps
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [
    {
      url: buildUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  fields.forEach((field) => {
    entries.push({
      url: buildUrl(`/field/${field.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  entries.push({
    url: buildUrl("/case-studies"),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  });

  entries.push({
    url: buildUrl("/case-studies/ai-business-agent"),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  });

  entries.push({
    url: buildUrl("/projects"),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  });

  projects.forEach((project) => {
    entries.push({
      url: buildUrl(`/projects/${project.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return entries;
}
