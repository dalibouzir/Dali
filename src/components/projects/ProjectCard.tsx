"use client";

import Link from "next/link";
import type { MotionStyle } from "framer-motion";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  glowStyle?: MotionStyle;
};

export function ProjectCard({ project, glowStyle }: ProjectCardProps) {
  const detailHref = `/projects/${project.slug ?? project.id}`;

  return (
    <article className="flex h-full flex-col gap-6 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 text-white shadow-[0_35px_100px_-48px_rgba(15,23,42,0.9)] backdrop-blur-2xl dark:border-white/15 sm:p-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-5 dark:border-white/15">
        <motion.div
          style={glowStyle}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),transparent_65%)]"
        />
        <div className="relative flex items-center justify-between">
          <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/85 shadow-sm">
            {project.chip}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.36em] text-white/60">Case study</span>
        </div>
        <p className="relative mt-6 text-2xl font-semibold">{project.title}</p>
        <p className="relative text-sm text-white/70">{project.tagline}</p>
      </div>

      <div className="space-y-4">
        <p className="text-base text-white/80">{project.description}</p>
        <ul className="space-y-2 text-sm text-white/75">
          {project.impact.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.36em] text-white/60">Stack</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/85">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href={detailHref}
          className="inline-flex flex-1 min-w-[140px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-200/60 hover:text-cyan-100"
        >
          View deep dive
        </Link>
        {project.links?.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex flex-1 min-w-[140px] items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition ${
              link.variant === "secondary"
                ? "border-white/30 bg-transparent text-white hover:border-cyan-200/60"
                : "border-transparent bg-cyan-400/90 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
