import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type Props = Pick<Project, "slug" | "title" | "summary" | "stack" | "links" | "visual">;

export function ProjectShowcaseCard({ slug, title, summary, stack, links, visual }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[2.25rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface))] shadow-soft transition hover:border-[rgb(var(--brand)/0.35)] hover:shadow-lift">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[rgb(var(--brand)/0.18)] via-transparent to-[rgb(var(--brand-soft)/0.16)]">
        {visual ? (
          <>
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              sizes="(min-width: 1280px) 460px, (min-width: 768px) 50vw, 92vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(var(--surface))] via-transparent to-transparent opacity-75" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.45),transparent_55%),radial-gradient(circle_at_75%_15%,rgba(79,70,229,0.45),transparent_60%)]" />
        )}
        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-full border border-white/15 bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(15,23,42,0.25)] backdrop-blur">
          <span className="uppercase tracking-[0.24em]">Featured</span>
          <span className="truncate text-[rgb(var(--brand))]" title={stack.slice(0, 4).join(" · ")}>
            {stack.slice(0, 3).join(" · ")}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <header className="space-y-2">
          <h3 className="text-balance font-display text-[clamp(1.55rem,1.45rem+0.4vw,1.85rem)] font-semibold text-[rgb(var(--text))]">
            {title}
          </h3>
        </header>
        <p className="text-sm text-[rgb(var(--text-secondary))]">{summary}</p>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-[rgb(var(--text))] sm:text-sm">
            {stack.map((item) => (
              <span key={item} className="chip" data-tone="soft">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-1 text-sm font-semibold">
          {/* @improvement: surface deep-dive link when project page exists */}
          {slug ? (
            <Link
              href={`/projects/${slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] px-4 py-2 text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.4)]"
            >
              Deep dive
            </Link>
          ) : null}
          {links?.find((link) => link.label.toLowerCase().includes("live")) ? (
            <Link
              href={links.find((link) => link.label.toLowerCase().includes("live"))!.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[rgb(var(--brand))] px-4 py-2 text-white transition hover:shadow-lift"
            >
              Live
            </Link>
          ) : null}
          {links?.find((link) => link.label.toLowerCase().includes("github")) ? (
            <Link
              href={links.find((link) => link.label.toLowerCase().includes("github"))!.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] px-4 py-2 text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.4)]"
            >
              GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
