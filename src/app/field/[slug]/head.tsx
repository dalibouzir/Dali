import { Seo } from "@/components/Seo";
import { SITE } from "@/config/site";
import { fields } from "@/content/fields";

type Params = {
  slug: string;
};

// @improvement: consistent SEO tags for dynamic field pages
export default async function Head({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const field = fields.find((item) => item.slug === slug);

  if (!field) {
    return <Seo title={SITE.title} description={SITE.tagline} path="/field" />;
  }

  return (
    <Seo
      title={`${field.label} · ${SITE.title}`}
      description={field.metaDescription}
      path={`/field/${field.slug}`}
    />
  );
}
