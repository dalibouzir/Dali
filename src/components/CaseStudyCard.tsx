import Link from "next/link";
import type { CaseStudy, CaseStudyMetric } from "@/content/caseStudies";

type CaseStudyCardProps = {
  study: Pick<CaseStudy, "title" | "heroIntro" | "summary" | "metrics" | "slug">;
};

// @improvement: reusable promo card to surface deep-dive case studies
export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="flex flex-col gap-6 rounded-[2.5rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface))] p-6 shadow-soft transition hover:border-[rgb(var(--brand)/0.35)] hover:shadow-lift sm:p-8">
      <div className="space-y-2">
        <span className="badge" data-emphasis="brand">
          Case Study
        </span>
        <h2 className="text-balance font-display text-[clamp(2rem,1.7rem+0.8vw,2.6rem)] font-semibold text-[rgb(var(--text))]">
          {study.title}
        </h2>
        <p className="text-base text-[rgb(var(--text-secondary))]">{study.heroIntro}</p>
        <p className="text-sm text-[rgb(var(--text-secondary))]">{study.summary}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {study.metrics.slice(0, 3).map((metric: CaseStudyMetric) => (
          <div
            key={metric.label}
            className="rounded-[1.75rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface-muted)/0.2)] p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">
              {metric.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-[rgb(var(--text))]">{metric.value}</p>
            <p className="mt-1 text-sm text-[rgb(var(--text-secondary))]">{metric.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 text-sm font-semibold">
        <Link
          href={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[rgb(var(--brand))] px-5 py-2.5 text-white transition hover:shadow-lift"
        >
          Read the case study
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-5 py-2.5 text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
        >
          Discuss a build
        </Link>
      </div>
    </article>
  );
}
