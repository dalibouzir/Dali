"use client";

import Link from "next/link";
import Image from "next/image";
import { weefarmCaseStudy } from "@/content/homeContent";

export function WeeFarmCaseStudy() {
  const architectureSteps = [
    "Operational PostgreSQL data",
    "SQL factual layer",
    "RAG contextual layer",
    "ML advisory layer",
    "LLM response composition",
    "Human manager review",
  ];

  return (
    <section id="weefarm" className="section py-20 sm:py-28" aria-labelledby="weefarm-heading">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="inline-block rounded-full bg-[rgb(var(--accent-emerald)/0.12)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-[rgb(var(--accent-emerald))]">
            Flagship Case Study
          </span>
          <h2 id="weefarm-heading" className="font-display text-[clamp(2rem,1.5rem+2vw,3.2rem)] font-semibold leading-[1.2]">
            {weefarmCaseStudy.title}
          </h2>
          <p className="text-lg text-[rgb(var(--text-secondary))] leading-relaxed">
            {weefarmCaseStudy.subtitle}
          </p>
          <p className="text-sm uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
            {weefarmCaseStudy.context}
          </p>
        </div>

        {/* Cover Image */}
        <div className="relative mb-12 overflow-hidden rounded-[2rem] border border-[rgb(var(--surface-muted)/0.4)] bg-[rgb(var(--surface-muted)/0.2)] p-2">
          <Image
            src={weefarmCaseStudy.cover}
            alt="WeeFarm architecture and validation overview"
            width={1200}
            height={600}
            className="h-auto w-full rounded-[1.7rem]"
          />
        </div>

        {/* Metrics Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {weefarmCaseStudy.metrics.map((item) => (
            <div key={item.metric} className="rounded-xl border border-[rgb(var(--surface-muted)/0.4)] bg-[rgb(var(--surface-muted)/0.2)] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--muted))]">{item.metric}</p>
              <p className="mt-2 text-xl font-semibold text-[rgb(var(--brand))]">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Architecture Flow */}
        <div className="mb-12">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
            Evidence-First Architecture Flow
          </h3>
          <div className="grid gap-3 lg:grid-cols-6">
            {architectureSteps.map((step, index) => (
              <div key={step} className="rounded-lg border border-[rgb(var(--surface-muted)/0.4)] bg-[rgb(var(--surface-muted)/0.15)] p-4 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))]">Step {index + 1}</p>
                <p className="mt-2 text-sm font-semibold text-[rgb(var(--text))]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Bullets */}
        <div className="mb-12">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
            Key Achievements
          </h3>
          <ul className="space-y-3 text-[rgb(var(--text-secondary))]">
            {weefarmCaseStudy.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span aria-hidden className="shrink-0 text-[rgb(var(--brand))]">▸</span>
                <span className="text-sm leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects/weefarm"
            className="inline-flex rounded-full bg-[rgb(var(--brand))] px-6 py-3 font-semibold text-white transition-all hover:shadow-lift active:scale-95"
          >
            View Full Case Study →
          </Link>
          <a
            href="#contact"
            className="inline-flex rounded-full border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface-muted)/0.2)] px-6 py-3 font-semibold text-[rgb(var(--text))] transition-all hover:border-[rgb(var(--brand)/0.4)]"
          >
            Contact for Demo
          </a>
        </div>
      </div>
    </section>
  );
}
