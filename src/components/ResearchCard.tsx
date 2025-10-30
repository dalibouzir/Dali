import Link from "next/link";

type ResearchLink = {
  label: string;
  href: string;
};

export type ResearchCardProps = {
  title: string;
  summary: string;
  tags: string[];
  link: ResearchLink;
};

export default function ResearchCard({ title, summary, tags, link }: ResearchCardProps) {
  const isExternal = link.href.startsWith("http");

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface))] p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift sm:p-6">
      <Link
        href={link.href}
        aria-label={`Open ${title} (${link.label})`}
        className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--ring))]"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      />
      <div className="relative z-20 space-y-4 pointer-events-none">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface-muted)/0.3)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">
            Research
          </span>
          <h3 className="text-lg font-semibold text-[rgb(var(--text))] sm:text-xl">{title}</h3>
          <p className="text-sm text-[rgb(var(--text-secondary))]">{summary}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag) => (
            <span key={tag} className="chip pointer-events-none" data-tone="soft">
              {tag}
            </span>
          ))}
        </div>
        <div className="pointer-events-auto">
          <Link
            href={link.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--brand))] transition hover:text-[rgb(var(--brand-soft))]"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {link.label}
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
