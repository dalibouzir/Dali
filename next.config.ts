import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer modern formats where supported
    formats: ["image/avif", "image/webp"],
    // Cache optimized images aggressively
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    remotePatterns: [
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },
  async headers() {
    return [
      {
        // Long‑term cache for static assets under public/assets
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache other public images (e.g., /images/*, /icons/*) reasonably
        source: "/(images|icons)/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/case-studies/ai-business-agent",
        destination: "/field/data-science-ai",
        permanent: true,
      },
      {
        source: "/case-studies/ai-business-agent.html",
        destination: "/field/data-science-ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
