"use client";

import { useMemo } from "react";
import { experiences, educationItems } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";
import { EducationCard } from "./EducationCard";

type TimelineItem =
  | { type: "experience"; id: string; experience: (typeof experiences)[number]; index: number }
  | { type: "education"; id: string; education: (typeof educationItems)[number] };

export function ExperienceSection() {
  const cards = useMemo<TimelineItem[]>(
    () => [
      ...experiences.map((experience, index) => ({ type: "experience" as const, id: experience.id, experience, index })),
      ...educationItems.map((education) => ({ type: "education" as const, id: education.id, education })),
    ],
    [],
  );

  return (
    <section id="experience" className="section-spacing">
      <div className="page-shell space-y-8">
        <div className="space-y-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">Experience</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Hands-on delivery across freelance, internships, and study.</h2>
          <p className="text-base text-white/80">
            Roles where I owned back-end services, data flows, and front-end delivery, plus a snapshot of my education in AI and data.
          </p>
        </div>
        <div className="space-y-6">
          {cards.map((card) =>
            card.type === "experience" ? (
              <ExperienceCard key={card.id} experience={card.experience} index={card.index} />
            ) : (
              <EducationCard key={card.id} education={card.education} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
