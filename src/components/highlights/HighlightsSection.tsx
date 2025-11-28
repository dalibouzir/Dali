"use client";

import { highlights } from "@/data/highlights";
import { HighlightCard } from "./HighlightCard";
import { HighlightsStickyHeader } from "./HighlightsStickyHeader";

export function HighlightsSection() {
  return (
    <section id="highlights" className="section-spacing">
      <div className="page-shell space-y-8">
        <div className="space-y-4">
          <HighlightsStickyHeader />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <HighlightCard key={highlight.metric} highlight={highlight} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
