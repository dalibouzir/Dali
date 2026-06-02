"use client";

import Image from "next/image";
import Link from "next/link";
import { owner } from "@/content/siteMeta";
import { SITE } from "@/config/site";

export function HomeHero() {
  return (
    <section id="about" aria-labelledby="hero-heading" className="section relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-0">
      {/* Glowing background effects like Anton */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(248, 113, 113, 0.25), transparent 50%)",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid gap-16 items-center lg:grid-cols-2">
          {/* Left: Text content */}
          <div className="flex flex-col gap-8 justify-center">
            {/* Badge */}
            <div className="inline-block w-fit">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[rgb(var(--brand))] opacity-80">
                Junior AI Engineer
              </span>
            </div>

            {/* Main heading with color accents like Anton */}
            <h1 id="hero-heading" className="text-balance font-display text-[clamp(3.2rem,3rem+3vw,5rem)] font-bold leading-[1.1] tracking-tight">
              <span className="sr-only">{SITE.title}</span>
              <span className="text-[rgb(var(--brand))]">Evidence</span>
              <span className="text-[rgb(var(--text))]">—</span>
              <span className="text-[rgb(var(--brand-soft))]">First</span>
              <br />
              <span className="text-[rgb(var(--text))]">AI Engineering</span>
            </h1>

            {/* Tagline with colored accents */}
            <p className="max-w-xl text-lg text-[rgb(var(--text-secondary))] leading-relaxed">
              <span className="text-[rgb(var(--brand))]">LLM/RAG</span> • 
              <span className="text-[rgb(var(--brand-soft))] mx-2">Machine Learning</span> • 
              <span className="text-[rgb(var(--brand))] ml-2">FastAPI</span> • 
              <span className="text-[rgb(var(--text-secondary))]"> PostgreSQL/pgvector</span> • 
              <span className="text-[rgb(var(--brand))]"> Next.js</span>
            </p>

            {/* Subtitle */}
            <p className="max-w-xl text-base text-[rgb(var(--text-secondary))]">
              Building validation-backed AI decision-support systems combining SQL analytics, RAG retrieval, ML advisory signals, and human-in-the-loop decision workflows.
            </p>

            {/* CTAs like Anton */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/projects/weefarm"
                className="inline-flex items-center gap-3 rounded-full bg-[rgb(var(--brand))] px-8 py-3.5 font-bold text-white transition-all hover:shadow-lift hover:scale-105 active:scale-95"
              >
                View Case Study
                <span aria-hidden>→</span>
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[rgb(var(--text-secondary))] px-8 py-3.5 font-bold text-[rgb(var(--text))] transition-all hover:border-[rgb(var(--brand))] hover:text-[rgb(var(--brand))]"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right: Profile image with glow */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-[380px]">
              {/* Glow effect like Anton's design */}
              <div className="absolute -inset-12 -translate-x-4 translate-y-12 rounded-full bg-[rgb(var(--brand)/0.3)] blur-[80px]" aria-hidden />
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-[rgb(var(--brand)/0.5)] bg-[rgb(var(--surface))] p-2">
                <Image
                  src="/profile/Dali.jpg"
                  alt={`Professional portrait of ${owner.name}, Junior AI Engineer`}
                  width={400}
                  height={400}
                  priority
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Info grid below */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3 border-t border-[rgb(var(--surface-muted))] pt-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Location</p>
            <p className="mt-2 text-lg font-semibold text-[rgb(var(--text))]">{owner.location}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Email</p>
            <p className="mt-2 text-lg font-semibold text-[rgb(var(--text))]">{owner.email}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Phone</p>
            <p className="mt-2 text-lg font-semibold text-[rgb(var(--text))]">{owner.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
