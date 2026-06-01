"use client";

import { useEffect, useMemo, useState } from "react";

type SectionLink = {
  id: string;
  label: string;
};

type ProjectSectionNavProps = {
  sections: SectionLink[];
  title?: string;
};

export function ProjectSectionNav({ sections, title = "On this page" }: ProjectSectionNavProps) {
  const validSections = useMemo(() => sections.filter((section) => section.id && section.label), [sections]);
  const [activeId, setActiveId] = useState(validSections[0]?.id ?? "");

  useEffect(() => {
    if (validSections.length === 0 || typeof window === "undefined") {
      return;
    }

    setActiveId(validSections[0].id);

    const targets = validSections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-42% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [validSections]);

  if (validSections.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Project sections"
      className="rounded-[1.8rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))] p-5 shadow-soft"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgb(var(--muted))]">{title}</p>
      <ol className="relative mt-4 flex flex-col gap-2 border-l border-[rgb(var(--surface-muted)/0.7)] pl-4">
        {validSections.map((section) => {
          const isActive = section.id === activeId;

          return (
            <li key={section.id} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[1.12rem] top-2 h-2.5 w-2.5 rounded-full border transition ${
                  isActive
                    ? "border-[rgb(var(--brand))] bg-[rgb(var(--brand))]"
                    : "border-[rgb(var(--surface-muted)/0.75)] bg-[rgb(var(--surface))]"
                }`}
              />
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`block rounded-xl px-2 py-1.5 text-sm transition ${
                  isActive
                    ? "bg-[rgb(var(--brand)/0.14)] text-[rgb(var(--text))]"
                    : "text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--surface-muted)/0.25)] hover:text-[rgb(var(--text))]"
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
