import { ReactNode } from "react";

interface GlassSectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  children: ReactNode;
}

export function GlassSection({ id, title, eyebrow, description, children }: GlassSectionProps) {
  return (
    <section id={id} className="section">
      <div className="relative mx-auto w-full max-w-6xl px-3 sm:px-4 lg:px-6 xl:max-w-7xl 2xl:max-w-[96rem]">
        <div
          className="pointer-events-none absolute -inset-x-24 -top-40 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)] opacity-70 blur-3xl motion-safe:animate-slow-float"
          aria-hidden
        />
        <div className="relative">
          <header className="mb-8 max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-[rgb(var(--muted))]">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="section-title text-balance text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
            {description ? <div className="section-lede">{description}</div> : null}
          </header>
          {children}
        </div>
      </div>
    </section>
  );
}
