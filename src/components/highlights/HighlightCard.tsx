import type { Highlight } from "@/data/highlights";

type HighlightCardProps = {
  highlight: Highlight;
  className?: string;
};

export function HighlightCard({ highlight, className = "" }: HighlightCardProps) {
  return (
    <article
      className={`flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/30 to-slate-900/80 p-6 text-white shadow-[0_30px_80px_-48px_rgba(15,23,42,0.9)] backdrop-blur-2xl dark:border-white/15 ${className}`}
    >
      <div>
        <p className="text-4xl font-semibold tracking-tight text-cyan-200">{highlight.metric}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.36em] text-white/60">{highlight.label}</p>
        <p className="mt-1 text-sm font-semibold text-white/90">{highlight.subLabel}</p>
      </div>
      <p className="mt-4 text-sm text-white/80">{highlight.caption}</p>
    </article>
  );
}
