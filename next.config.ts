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
        source: "/:path(images|icons)/:file*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
