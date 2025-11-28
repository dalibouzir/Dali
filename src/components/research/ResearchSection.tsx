"use client";

import { researchItems } from "@/data/research";
import { ResearchCard } from "./ResearchCard";

export function ResearchSection() {
  return (
    <section id="research" className="section px-4 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">Research & Experiments</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Explorations in models, data, and synthetic generation.</h2>
          <p className="text-base text-white/80">
            Hands-on experiments that explore model architectures, synthetic data, and production-minded research workflows.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchItems.map((item, index) => (
            <ResearchCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
