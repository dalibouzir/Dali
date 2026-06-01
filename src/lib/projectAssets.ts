import fs from "node:fs";
import path from "node:path";

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"]);
const videoExtensions = new Set([".mp4", ".webm", ".mov", ".m4v"]);

export type ProjectAssets = {
  cover: string;
  images: string[];
  videos: string[];
};

export function getProjectAssets(slug: string, fallbackImage?: string): ProjectAssets {
  const baseDir = path.join(process.cwd(), "public", "assets", "projects", slug);

  const readFiles = (segments: string[], extensions: Set<string>) => {
    const absolute = path.join(baseDir, ...segments);
    try {
      return fs
        .readdirSync(absolute, { withFileTypes: true })
        .filter((entry) => entry.isFile() && extensions.has(path.extname(entry.name).toLowerCase()))
        .map((entry) => {
          const relativeSegments = ["assets", "projects", slug, ...segments, entry.name].filter(Boolean);
          return `/${relativeSegments.join("/")}`.replace(/\\/g, "/");
        });
    } catch {
      return [];
    }
  };

  const rootImages = readFiles([], imageExtensions);
  const nestedImages = readFiles(["images"], imageExtensions);
  const images = [...rootImages, ...nestedImages];

  const rootVideos = readFiles([], videoExtensions);
  const nestedVideos = readFiles(["videos"], videoExtensions);
  const videos = [...rootVideos, ...nestedVideos];

  const cover = images[0] ?? fallbackImage ?? "/assets/projects/default.svg";
  const normalizedImages = images.length > 0 ? images : fallbackImage ? [fallbackImage] : [];

  return {
    cover,
    images: normalizedImages,
    videos,
  };
}
