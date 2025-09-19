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
  images?: { src: string; alt?: string; caption?: string }[];
  videos?: { src: string; caption?: string }[];
  media?: Media[];
  showMedia?: boolean;
  links?: ProjectLink[];
}) {
  const mergedMedia: Media[] = media
    ? media
    : [
        ...(images?.map((i) => ({ src: i.src, alt: i.alt, caption: i.caption, type: "image" as const })) || []),
        ...(videos?.map((v) => ({ src: v.src, caption: v.caption, type: "video" as const })) || []),
      ];

  const hasMedia = showMedia && mergedMedia.length > 0;
  const hasVideo = mergedMedia.some((item) => item.type === "video");

  return (
    <article className="card overflow-hidden">
      {hasMedia && (
        <div className="relative">
          <ProjectShowcase media={mergedMedia} label={`Open ${title} gallery`} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex items-start justify-between text-xs uppercase tracking-[0.3em] text-white/70">
              <span>Case study</span>
              {hasVideo && <span className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium md:inline-flex">Hover preview</span>}
            </div>
            <div>
              <h3 className="text-balance text-2xl font-semibold text-white">{title}</h3>
              {!!tech?.length && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span key={t} className="chip pointer-events-auto bg-white/10 text-white/90">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-5 text-[11px] uppercase tracking-[0.4em] text-white/60">
                Tap to open gallery
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4 px-6 py-6">
        {!hasMedia && (
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        )}
        <p className="text-sm text-zinc-300">{description}</p>

        {!!tech?.length && !hasMedia && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        )}

        {!!links?.length && (
          <div className="flex flex-wrap gap-2">
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
    </article>
  );
}
