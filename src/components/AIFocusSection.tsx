"use client";

import { AIFocusCard } from "./AIFocusCard";
import { coreValueCards } from "@/content/homeContent";

export function AIFocusSection() {
  return (
    <section
      id="ai-focus"
      className="section py-20 sm:py-28"
      aria-labelledby="ai-focus-heading"
    >
      <div className="container-wide">
        {/* Section header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="inline-block rounded-full bg-[rgb(var(--brand)/0.12)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-[rgb(var(--brand))]">
            Focus Areas
          </span>
          <h2
            id="ai-focus-heading"
            className="text-balance font-display text-[clamp(2rem,1.5rem+2vw,3.2rem)] font-semibold leading-[1.2]"
          >
            Evidence-First AI Engineering
          </h2>
          <p className="text-lg text-[rgb(var(--text-secondary))] leading-relaxed">
            Five core principles that guide every system I build: from SQL-grounded
            assistants to human-in-the-loop decision support.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-4 xl:gap-5">
          {coreValueCards.map((card, index) => (
            <AIFocusCard
              key={card.title}
              title={card.title}
              detail={card.detail}
              tags={card.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
