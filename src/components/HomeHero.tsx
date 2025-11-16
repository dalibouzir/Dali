import Image from "next/image";
import Link from "next/link";
import { owner } from "@/content/siteMeta";

export function HomeHero() {
  return (
    <section id="about" aria-labelledby="hero-heading" className="section pt-16 sm:pt-24">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] px-6 py-14 shadow-lift sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 15% 20%, rgb(var(--brand) / 0.18), transparent 55%), radial-gradient(circle at 85% 0%, rgb(var(--brand-soft) / 0.14), transparent 50%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(var(--surface-muted) / 0.24) 1px, transparent 1px), linear-gradient(0deg, rgb(var(--surface-muted) / 0.24) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(circle at center, rgba(0,0,0,0.65), rgba(0,0,0,0))",
            }}
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 shadow-soft backdrop-blur-xl dark:border-white/15 dark:bg-white/8">
                  Mohamed Ali Bouzir
                </span>
                <h1 id="hero-heading" className="text-balance font-display text-[clamp(2.6rem,2.1rem+2.5vw,4rem)] font-semibold leading-tight">
                  Data Product Engineer · AI &amp; MLOps
                </h1>
                <p className="max-w-2xl text-lg text-[rgb(var(--text-secondary))] md:text-xl">
                  I build measurable AI products end-to-end.
                </p>
                <p className="max-w-2xl text-base text-[rgb(var(--text-secondary))]">
                  I partner with founders and product teams to ship AI systems—from inference-ready pipelines to feedback-rich user
                  experiences that prove their value in production.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <Link
                  href={owner.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[rgb(var(--brand))] px-5 py-2.5 text-white transition hover:shadow-lift"
                >
                  View CV (PDF)
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-5 py-2.5 text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
                >
                  Hire me
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface-muted)/0.25)] px-5 py-2.5 text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
                >
                  View Projects
                </a>
              </div>

              <div className="rounded-3xl border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface-muted)/0.25)] p-5 text-sm text-[rgb(var(--text-secondary))] sm:grid sm:grid-cols-3 sm:gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[rgb(var(--muted))]">Location</p>
                  <p className="mt-1 font-semibold text-[rgb(var(--text))]">{owner.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[rgb(var(--muted))]">Email</p>
                  <p className="mt-1 font-semibold text-[rgb(var(--text))]">{owner.email}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[rgb(var(--muted))]">Phone</p>
                  <p className="mt-1 font-semibold text-[rgb(var(--text))]">{owner.phone}</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex max-w-sm items-center justify-center lg:max-w-none">
              <div className="relative w-full max-w-[360px]">
                <div className="absolute inset-0 -translate-x-8 translate-y-6 rounded-[3rem] bg-[rgb(var(--brand)/0.15)] blur-3xl" aria-hidden />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] p-3 shadow-soft">
                  <div className="relative overflow-hidden rounded-[2rem] bg-[rgb(var(--surface-muted)/0.25)] p-[3px]">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[rgb(var(--brand)/0.35)] to-transparent" aria-hidden />
                    <div className="relative overflow-hidden rounded-[1.9rem]">
                      <Image
                        src="/images/Dali.jpeg"
                        alt={`Portrait of ${owner.name}`}
                        width={640}
                        height={640}
                        priority
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-4 py-3 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Focus Areas</p>
                      <p className="mt-1 font-semibold text-[rgb(var(--text))]">
                        AI Product Strategy · Data Platform Engineering · LLM Applications · MLOps Enablement
                      </p>
                    </div>
                    <span aria-hidden className="hidden text-lg sm:block">
                      🚀
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
