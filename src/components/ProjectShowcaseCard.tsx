import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type Props = Pick<Project, "slug" | "title" | "summary" | "stack" | "links" | "visual"> & {
  labels?: {
    caseStudy?: string;
    stack?: string;
    deepDive?: string;
    live?: string;
    github?: string;
    generatedVisual?: string;
  };
};

export function ProjectShowcaseCard({ slug, title, summary, stack, links, visual, labels }: Props) {
  const copy = {
    caseStudy: labels?.caseStudy ?? "Case Study",
    stack: labels?.stack ?? "Stack",
    deepDive: labels?.deepDive ?? "Deep dive",
    live: labels?.live ?? "Live",
    github: labels?.github ?? "GitHub",
    generatedVisual: labels?.generatedVisual ?? "Generated Visual",
  };

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
          <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(9,21,41,0.86),rgba(16,48,83,0.86)_55%,rgba(11,30,53,0.85)),radial-gradient(circle_at_22%_22%,rgba(125,211,252,0.26),transparent_52%),radial-gradient(circle_at_78%_14%,rgba(200,16,46,0.24),transparent_54%)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:46px_46px] opacity-25" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/14 bg-black/20 p-4 backdrop-blur-sm">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-sky-100/80">{copy.generatedVisual}</p>
              <p className="mt-2 text-lg font-semibold text-white">{title}</p>
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-full border border-white/15 bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(15,23,42,0.25)] backdrop-blur">
          <span className="uppercase tracking-[0.24em]">{copy.caseStudy}</span>
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">{copy.stack}</p>
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
              {copy.deepDive}
            </Link>
          ) : null}
          {links?.find((link) => link.label.toLowerCase().includes("live")) ? (
            <Link
              href={links.find((link) => link.label.toLowerCase().includes("live"))!.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[rgb(var(--brand))] px-4 py-2 text-slate-950 transition hover:shadow-lift"
            >
              {copy.live}
            </Link>
          ) : null}
          {links?.find((link) => link.label.toLowerCase().includes("github")) ? (
            <Link
              href={links.find((link) => link.label.toLowerCase().includes("github"))!.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] px-4 py-2 text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.4)]"
            >
              {copy.github}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
