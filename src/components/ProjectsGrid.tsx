"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/content/projects";

const CATEGORY_TABS = [
  { id: "All" as const, label: "All" },
  { id: "AI & MLOps" as const, label: "AI & MLOps" },
  { id: "Backend" as const, label: "Backend" },
  { id: "Full-Stack" as const, label: "Full-Stack" },
];

export type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | "AI & MLOps" | "Backend" | "Full-Stack">("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Backend") return project.category === "Backend Engineering";
    if (activeCategory === "Full-Stack") return project.category === "Full-Stack Applications";
    return project.category === "AI & MLOps";
  });

  return (
    <div className="space-y-8">
      <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 shadow-soft backdrop-blur-lg dark:border-white/10 dark:bg-white/10">
        <span className="rounded-full bg-white/20 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
          Categories
        </span>
        {CATEGORY_TABS.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              className={`rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                isActive ? "bg-cyan-400 text-slate-950 shadow-soft" : "bg-transparent text-white/70 hover:bg-white/10"
              }`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            summary={project.summary}
            image={
              project.visual
                ? {
                    src: project.visual.src,
                    alt: project.visual.alt,
                  }
                : undefined
            }
            stack={project.stack}
            impact={project.impact.slice(0, 2)}
            media={project.media}
            actions={
              project.links.length > 0
                ? project.links.map((link, index) => ({
                    label: link.label,
                    href: link.href,
                    type: index === 0 ? ("primary" as const) : ("secondary" as const),
                  }))
                : [{ label: "View details", href: `#/projects/${project.slug}`, type: "secondary" as const }]
            }
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
}
