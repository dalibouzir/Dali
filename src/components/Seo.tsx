import type { Metadata } from "next";
import { SITE } from "@/config/site";

export type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

function buildCanonical(path?: string) {
  return new URL(path ?? "/", SITE.url).toString();
}

function buildOgImage(image?: string) {
  return new URL(image ?? SITE.ogImage, SITE.url).toString();
}

// @improvement: central SEO helper usable with head.tsx and generateMetadata
export function Seo({ title, description, path, image }: SeoProps) {
  const metaTitle = title ?? SITE.title;
  const metaDescription = description ?? SITE.tagline;
  const canonical = buildCanonical(path);
  const imageUrl = buildOgImage(image);

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {SITE.twitter ? <meta name="twitter:site" content={SITE.twitter} /> : null}
    </>
  );
}

export function buildMetadata({ title, description, path, image }: SeoProps = {}): Metadata {
  const metaTitle = title ?? SITE.title;
  const metaDescription = description ?? SITE.tagline;
  const canonical = buildCanonical(path);
  const imageUrl = buildOgImage(image);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE.name,
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: imageUrl,
          width: OG_WIDTH,
          height: OG_HEIGHT,
          alt: `${SITE.name} — ${metaTitle}`,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.twitter,
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}
