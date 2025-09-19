import ProjectShowcase, { Media } from "./ProjectShowcase";

export type ProjectLink = { label: string; href: string; emoji?: string };

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  images?: { src: string; alt?: string; caption?: string }[];
  videos?: { src: string; caption?: string }[];
  media?: Media[];
  showMedia?: boolean;
  links?: ProjectLink[];
  category?: string;
  impact?: string;
  featured?: boolean;
  variant?: "standard" | "featured";
};

export default function ProjectCard({
  title,
  description,
  tech,
  images,
  videos,
  media,
  showMedia = true,
  links = [],
  category,
  impact,
  featured = false,
  variant = "standard",
}: ProjectCardProps) {
  const mergedMedia: Media[] = media
    ? media
    : [
        ...(images?.map((i) => ({ src: i.src, alt: i.alt, caption: i.caption, type: "image" as const })) || []),
        ...(videos?.map((v) => ({ src: v.src, caption: v.caption, type: "video" as const })) || []),
      ];

  const hasImageMedia = mergedMedia.some((item) => item.type !== "video");
  const hasVideo = mergedMedia.some((item) => item.type === "video");
  const showGallery = showMedia && hasImageMedia;
  const isFeaturedVariant = variant === "featured" && showGallery;
  const cardClassName = isFeaturedVariant
    ? "card overflow-hidden flex flex-col lg:grid lg:grid-cols-[1.15fr_1fr]"
    : "card overflow-hidden flex flex-col";
  const bodySpacing = isFeaturedVariant ? "px-6 py-6 lg:px-8 lg:py-8" : "px-6 py-6";
  const primaryLink = links[0];

  const renderMediaOverlay = () => (
    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6">
      <div className="flex items-start justify-between gap-3 text-[11px] uppercase tracking-[0.35em] text-white/70">
        {category ? (
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-[0.4em]">
            {category}
          </span>
        ) : (
          <span>Case Study</span>
        )}
        {primaryLink && (
          <span className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-white/85 md:inline-flex">
            <span>{primaryLink.emoji || "🔗"}</span>
            {primaryLink.label}
          </span>
        )}
        {hasVideo && (
          <span className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium md:inline-flex">
            Hover preview
          </span>
        )}
      </div>
      <div>
        <h3 className="text-balance text-2xl font-semibold text-white lg:text-3xl">{title}</h3>
        {!!tech?.length && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="chip pointer-events-auto bg-white/10 text-white/90">
                {t}
              </span>
            ))}
          </div>
        )}
        <p className="mt-5 text-[10px] uppercase tracking-[0.42em] text-white/60">
          Tap to open gallery
        </p>
      </div>
    </div>
  );

  return (
    <article className={cardClassName}>
      {showGallery && (
        <div className="relative">
          <ProjectShowcase media={mergedMedia} label={`Open ${title} gallery`} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          {renderMediaOverlay()}
        </div>
      )}

      <div className={`flex flex-col gap-5 ${bodySpacing}`}>
        {!showGallery && (
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-zinc-500">
            {category && <span className="badge">{category}</span>}
            {featured && <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.35em] text-white/80">Featured</span>}
          </div>
        )}

        {!showGallery && <h3 className="text-2xl font-semibold text-white">{title}</h3>}

        <p className="text-sm text-zinc-300 sm:text-base">{description}</p>

        {impact && (
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85">
            <p className="text-xs uppercase tracking-[0.32em] text-white/60">Impact</p>
            <p className="mt-1 text-sm text-white/90">{impact}</p>
          </div>
        )}

        {!!tech?.length && (!showGallery || isFeaturedVariant) && (
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
            {links.map((l, index) => (
              <a
                key={l.href}
                className={`btn ${index === 0 ? "btn-accent" : ""}`}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${l.label} (${title})`}
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
