import type { Metadata } from "next";
import { PortfolioHome } from "@/components/home/PortfolioHome";
import { buildMetadata } from "@/components/Seo";
import { SITE } from "@/config/site";
import { getServerLocale } from "@/lib/serverLocale";

export const metadata: Metadata = buildMetadata({
  title: SITE.title,
  description: SITE.tagline,
  path: "/",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Junior AI Engineer",
  url: SITE.url,
  sameAs: [SITE.github, SITE.linkedin],
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Monastir",
    addressCountry: "TN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  headline: SITE.title,
  name: SITE.name,
  description: SITE.tagline,
  url: SITE.url,
};

export default async function HomePage() {
  const locale = await getServerLocale();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema]) }}
      />
      <PortfolioHome locale={locale} />
    </>
  );
}
