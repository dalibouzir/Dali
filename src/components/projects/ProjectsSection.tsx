"use client";

import { useMemo, useState } from "react";
import { projectFilters, projects } from "@/data/projects";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("All");
  const filteredProjects = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  );

  return (
    <section id="projects" className="section-spacing">
      <div className="page-shell space-y-8">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">Projects</p>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Flagship AI, data, and full-stack delivery.</h2>
            <p className="text-base text-white/85">
              Production-grade AI assistants, scheduling platforms, and admin systems that ship measurable outcomes—latency, accuracy, and operational lift.
            </p>
          </div>
          <ProjectFilters filters={projectFilters} activeFilter={activeFilter} onChange={setActiveFilter} />
        </div>
        <div className="grid divide-y divide-white/10 border border-white/10 bg-[rgba(15,23,42,0.35)] shadow-[0_35px_100px_-48px_rgba(15,23,42,0.9)] rounded-[2.5rem] md:grid-cols-2 md:divide-y-0 md:divide-x">
          {filteredProjects.map((project) => (
            <div key={project.id} className="border-b border-white/10 p-6 last:border-b-0 md:border-b-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
