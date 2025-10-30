"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ProjectAction = {
  label: string;
  href: string;
  type?: "primary" | "secondary";
  icon?: ReactNode;
};

export type ProjectCardProps = {
  title: string;
  summary: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  stack: string[];
  impact?: string[];
  features?: string[];
  actions: ProjectAction[];
  category?: string;
  variant?: "default" | "horizontal" | "compact";
  className?: string;
  imagePriority?: boolean;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectCard({
  title,
  summary,
  image,
  stack,
  impact = [],
  features = [],
  actions,
  category,
  variant = "default",
  className,
  imagePriority,
}: ProjectCardProps) {
  const primaryAction = actions[0];
  const primaryIsExternal = primaryAction?.href.startsWith("http");
  const displayFeatures =
    variant === "compact" && features.length > 0 ? features.slice(0, 2) : features;
  const layoutClasses =
    variant === "horizontal"
      ? "lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-10"
      : variant === "compact"
        ? "flex flex-col gap-5"
        : "flex flex-col gap-6";

  return (
    <article
      className={cx(
        "group relative overflow-hidden rounded-[2.5rem] border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] p-6 shadow-soft transition hover:shadow-lift sm:p-7",
        variant === "compact" && "sm:p-6",
        className,
      )}
    >
      {primaryAction ? (
        <Link
          href={primaryAction.href}
          aria-label={`Open ${title} (${primaryAction.label})`}
          className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--ring))]"
          target={primaryIsExternal ? "_blank" : undefined}
          rel={primaryIsExternal ? "noopener noreferrer" : undefined}
        />
      ) : null}

      <div
        className={cx(
          "relative z-20 pointer-events-none",
          layoutClasses,
          variant !== "horizontal" && "gap-6",
        )}
      >
        <div
          className={cx(
            "relative overflow-hidden rounded-[2rem] border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface-muted)/0.25)]",
            variant === "compact" ? "aspect-[4/3]" : "aspect-[5/3] sm:aspect-[16/9]",
          )}
        >
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--brand)/0.25)] to-transparent" aria-hidden />
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={imagePriority}
            sizes={variant === "horizontal" ? "(min-width: 1024px) 530px, (min-width: 640px) 70vw, 88vw" : "(min-width: 1280px) 480px, (min-width: 768px) 45vw, 88vw"}
            className={cx(
              "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]",
              variant === "horizontal" ? "lg:object-cover" : "",
            )}
          />
          {category ? (
            <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-[rgb(var(--surface)/0.85)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-[rgb(var(--muted))] shadow-soft">
              {category}
            </span>
          ) : null}
        </div>

        <div className="flex flex-col gap-6 pt-2 text-sm text-[rgb(var(--text-secondary))] lg:pt-0">
          <div className="space-y-4">
            <h3 className="text-balance font-display text-2xl font-semibold text-[rgb(var(--text))] sm:text-3xl">
              {title}
            </h3>
            <p className="text-base text-[rgb(var(--text-secondary))]">{summary}</p>
          </div>

          {impact.length > 0 ? (
            <div className="pointer-events-none rounded-3xl border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface-muted)/0.3)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Impact</p>
              <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--text-secondary))]">
                {impact.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {displayFeatures.length > 0 ? (
            <div className="pointer-events-none space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Highlights</p>
              <ul className="space-y-2">
                {displayFeatures.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span aria-hidden className="mt-1 text-[rgb(var(--brand))]">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="pointer-events-none">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Stack</p>
            <div
              className={cx(
                "mt-3 flex flex-wrap gap-2",
                variant === "compact" ? "text-xs" : "text-sm",
              )}
            >
              {stack.map((item) => (
                <span key={item} className="chip pointer-events-none" data-tone="soft">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {actions.length > 0 ? (
            <div className="flex flex-wrap gap-2 pointer-events-auto">
              {actions.map((action, index) => (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className={cx(
                    "relative z-30 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition",
                    action.type === "secondary" || index > 0
                      ? "border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] text-[rgb(var(--text))] hover:border-[rgb(var(--brand)/0.45)]"
                      : "border border-transparent bg-[rgb(var(--brand))] text-white shadow-soft hover:shadow-lift",
                  )}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  aria-label={`${action.label} (${title})`}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {action.icon ? <span aria-hidden>{action.icon}</span> : null}
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
