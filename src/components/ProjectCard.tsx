import ProjectShowcase, { Media } from "./ProjectShowcase";

export type ProjectLink = { label: string; href: string; emoji?: string };

export default function ProjectCard({
  title,
  description,
  tech,
  images,
  videos,
  media,
  showMedia = true,
  links = [],
}: {
  title: string;
  description: string;
  tech: string[];
  images?: { src: string; alt?: string }[];
  videos?: { src: string }[];
  media?: Media[];
  showMedia?: boolean;
  links?: ProjectLink[];
}) {
  const mergedMedia: Media[] = media
    ? media
    : [
        ...(images?.map((i) => ({ src: i.src, alt: i.alt, type: "image" as const })) || []),
        ...(videos?.map((v) => ({ src: v.src, type: "video" as const })) || []),
      ];
  return (
    <div className="card p-4 sm:p-6">
      <div className="flex flex-col gap-4 md:gap-6">
        {showMedia && mergedMedia.length ? (
          <div className="w-full">
            <ProjectShowcase media={mergedMedia} />
          </div>
        ) : null}

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-zinc-300">{description}</p>

          {!!tech?.length && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          )}

          {!!links?.length && (
            <div className="mt-4 flex flex-wrap gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  className="btn"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{l.emoji || "🔗"}</span>
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* No thumbnail grid below: single, large showcase only */}
    </div>
  );
}
