"use client";

import Link from "next/link";

type MiniAction = {
  label: string;
  href: string;
  icon?: string;
  emphasis?: "primary" | "secondary";
};

export type MiniProjectCardProps = {
  title: string;
  summary: string;
  stack: string[];
  highlights?: string[];
  category?: string;
  actions?: MiniAction[];
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function MiniProjectCard({
  title,
  summary,
  stack,
  highlights = [],
  category,
  actions = [],
}: MiniProjectCardProps) {
  const primaryAction = actions[0];
  const primaryIsExternal = primaryAction?.href.startsWith("http");

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface))] p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift sm:p-6">
      {primaryAction ? (
        <Link
          href={primaryAction.href}
          className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--ring))]"
          aria-label={`Open ${title} (${primaryAction.label})`}
          target={primaryIsExternal ? "_blank" : undefined}
          rel={primaryIsExternal ? "noopener noreferrer" : undefined}
        />
      ) : null}

      <div className="relative z-20 pointer-events-none space-y-4">
        <div className="space-y-3">
          {category ? (
            <span className="inline-flex items-center rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface-muted)/0.3)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">
              {category}
            </span>
          ) : null}
          <h3 className="text-lg font-semibold text-[rgb(var(--text))] sm:text-xl">{title}</h3>
          <p className="text-sm text-[rgb(var(--text-secondary))]">{summary}</p>
        </div>

        {highlights.length > 0 ? (
          <ul className="space-y-2 text-sm text-[rgb(var(--text-secondary))]">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span aria-hidden className="mt-1 text-[rgb(var(--brand))]">▹</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {stack.map((item) => (
              <span key={item} className="chip pointer-events-none" data-tone="soft">
                {item}
              </span>
            ))}
          </div>
        </div>

        {actions.length > 0 ? (
          <div className="flex flex-wrap gap-2 pointer-events-auto">
            {actions.map((action, index) => {
              const isPrimary = action.emphasis === "primary" || index === 0;
              const isExternal = action.href.startsWith("http");
              return (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className={cx(
                    "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition",
                    isPrimary
                      ? "border border-transparent bg-[rgb(var(--brand))] text-white shadow-soft hover:shadow-lift"
                      : "border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] text-[rgb(var(--text))] hover:border-[rgb(var(--brand)/0.45)]",
                  )}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  onClick={(event) => event.stopPropagation()}
                >
                  {action.icon ? <span aria-hidden>{action.icon}</span> : null}
                  {action.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </article>
  );
}
