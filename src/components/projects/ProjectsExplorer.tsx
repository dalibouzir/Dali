"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectShowcaseCard } from "@/components/ProjectShowcaseCard";
import type { Project } from "@/content/projects";
import { PROJECTS_PAGE_COPY, type Locale } from "@/lib/i18n";

type ProjectsExplorerProps = {
  projects: Project[];
  locale: Locale;
};

type SortMode = "featured" | "alphabetical";

export function ProjectsExplorer({ projects, locale }: ProjectsExplorerProps) {
  const copy = PROJECTS_PAGE_COPY[locale].explorer;
  const allLabel = locale === "fr" ? "Tous" : locale === "ar" ? "الكل" : "All";
  const cardLabels =
    locale === "fr"
      ? { caseStudy: "Étude de cas", stack: "Stack", deepDive: "Détail", live: "Live", github: "GitHub", generatedVisual: "Visuel généré" }
      : locale === "ar"
        ? { caseStudy: "دراسة حالة", stack: "التقنيات", deepDive: "تفاصيل", live: "تشغيل", github: "GitHub", generatedVisual: "صورة مولدة" }
        : { caseStudy: "Case Study", stack: "Stack", deepDive: "Deep dive", live: "Live", github: "GitHub", generatedVisual: "Generated Visual" };
  const categoryLabels: Record<Project["category"], string> = {
    "AI & MLOps":
      locale === "fr" ? "IA & MLOps" : locale === "ar" ? "ذكاء اصطناعي وعمليات تعلم آلي" : "AI & MLOps",
    "Backend Engineering":
      locale === "fr" ? "Ingénierie Backend" : locale === "ar" ? "هندسة باكند" : "Backend Engineering",
    "Full-Stack Applications":
      locale === "fr" ? "Applications Full-Stack" : locale === "ar" ? "تطبيقات متكاملة" : "Full-Stack Applications",
  };
  const prefersReducedMotion = useReducedMotion();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | Project["category"]>("All");
  const [activeStack, setActiveStack] = useState<string>("All");
  const [sortMode, setSortMode] = useState<SortMode>("featured");

  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((project) => project.category))] as const;
  }, [projects]);

  const stackOptions = useMemo(() => {
    const counts = new Map<string, number>();

    projects.forEach((project) => {
      project.stack.forEach((item) => {
        counts.set(item, (counts.get(item) ?? 0) + 1);
      });
    });

    return [
      "All",
      ...Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([label]) => label),
    ];
  }, [projects]);

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesStack = activeStack === "All" || project.stack.includes(activeStack);

      if (!matchesCategory || !matchesStack) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchable = [
        project.title,
        project.tagline,
        project.summary,
        project.problem,
        project.role,
        project.category,
        project.stack.join(" "),
        project.tags?.join(" ") ?? "",
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });

    return filtered.sort((a, b) => {
      if (sortMode === "alphabetical") {
        return a.title.localeCompare(b.title);
      }

      const featuredDelta = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      if (featuredDelta !== 0) {
        return featuredDelta;
      }

      return a.title.localeCompare(b.title);
    });
  }, [activeCategory, activeStack, projects, query, sortMode]);

  return (
    <div className="space-y-7">
      <div className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-5 shadow-soft sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <label htmlFor="project-search" className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.searchLabel}</span>
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
              className="w-full rounded-full border border-[rgb(var(--surface-muted)/0.72)] bg-[rgb(var(--surface-muted)/0.2)] px-4 py-2.5 text-sm text-[rgb(var(--text))] placeholder:text-[rgb(var(--muted))] focus:border-[rgb(var(--brand)/0.6)] focus:outline-none"
            />
          </label>

          <label className="space-y-2 lg:min-w-[190px]">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.sortLabel}</span>
            <select
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              className="w-full rounded-full border border-[rgb(var(--surface-muted)/0.72)] bg-[rgb(var(--surface-muted)/0.2)] px-4 py-2.5 text-sm text-[rgb(var(--text))] focus:border-[rgb(var(--brand)/0.6)] focus:outline-none"
            >
              <option value="featured">{copy.sortFeatured}</option>
              <option value="alphabetical">{copy.sortAlphabetical}</option>
            </select>
          </label>
        </div>

        <div className="mt-5 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.categoryLabel}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition sm:text-sm ${
                      isActive
                        ? "border-[rgb(var(--brand)/0.6)] bg-[rgb(var(--brand)/0.16)] text-[rgb(var(--text))]"
                        : "border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface-muted)/0.12)] text-[rgb(var(--text-secondary))] hover:border-[rgb(var(--brand)/0.45)] hover:text-[rgb(var(--text))]"
                    }`}
                  >
                    {category === "All" ? allLabel : categoryLabels[category]}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{copy.stackLabel}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {stackOptions.map((item) => {
                const isActive = item === activeStack;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveStack(item)}
                    className={`rounded-full border px-3 py-1 text-xs transition sm:text-sm ${
                      isActive
                        ? "border-[rgb(var(--brand)/0.65)] bg-[rgb(var(--brand)/0.12)] text-[rgb(var(--text))]"
                        : "border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] text-[rgb(var(--text-secondary))] hover:border-[rgb(var(--brand)/0.45)] hover:text-[rgb(var(--text))]"
                    }`}
                  >
                    {item === "All" ? allLabel : item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[rgb(var(--text-secondary))]">
        <p>
          {copy.showing} <span className="font-semibold text-[rgb(var(--text))]">{visibleProjects.length}</span> {copy.of}{" "}
          <span className="font-semibold text-[rgb(var(--text))]">{projects.length}</span> {copy.projectsWord}
        </p>
        {(query || activeCategory !== "All" || activeStack !== "All") && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveCategory("All");
              setActiveStack("All");
              setSortMode("featured");
            }}
            className="rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
          >
            {copy.resetFilters}
          </button>
        )}
      </div>

      {visibleProjects.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, x: index % 2 === 0 ? -62 : 62, y: 18 }
              }
              whileInView={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 1, x: 0, y: 0 }
              }
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1], delay: prefersReducedMotion ? 0 : index * 0.04 }}
            >
              <ProjectShowcaseCard
                slug={project.slug}
                title={project.title}
                summary={project.summary}
                stack={project.stack}
                links={project.links}
                visual={project.visual}
                labels={cardLabels}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="rounded-[1.9rem] border border-[rgb(var(--surface-muted)/0.52)] bg-[rgb(var(--surface))] p-8 text-center">
          <h3 className="font-display text-2xl text-[rgb(var(--text))]">{copy.noMatchTitle}</h3>
          <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">{copy.noMatchBody}</p>
        </div>
      )}
    </div>
  );
}
