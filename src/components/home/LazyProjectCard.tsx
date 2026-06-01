"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { HomeProject } from "@/content/homeContent";

type LazyProjectCardProps = {
  project: HomeProject;
  index: number;
};

export function LazyProjectCard({ project, index }: LazyProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.26 }}
      transition={{ duration: reduceMotion ? 0 : 0.44, delay: reduceMotion ? 0 : index * 0.04, ease: "easeOut" }}
      className="group flex h-full flex-col gap-5 rounded-3xl border border-white/14 bg-[rgb(var(--surface))/0.72] p-6 shadow-[0_34px_70px_-42px_rgba(15,23,42,0.82)]"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/14 bg-[rgb(var(--surface-muted))/0.26]">
        {project.media.video ? (
          <video
            controls
            preload="metadata"
            playsInline
            poster={project.media.poster ?? project.media.image}
            className="h-52 w-full object-cover"
          >
            <source src={project.media.video} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={project.media.image}
            alt={`${project.title} preview`}
            width={1200}
            height={760}
            loading="lazy"
            sizes="(min-width: 1024px) 46vw, 95vw"
            className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        )}
        <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-full border border-white/18 bg-[#071124]/78 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-slate-200">
          <span>{project.role}</span>
          <span className="text-sky-200">{project.status}</span>
        </div>
      </div>

      <div className="space-y-3">
        <span className="inline-flex rounded-full border border-white/20 bg-white/6 px-3 py-1 text-[0.67rem] font-semibold uppercase tracking-[0.24em] text-[rgb(var(--text-secondary))]">
          {project.category}
        </span>
        <h3 className="text-2xl font-semibold text-[rgb(var(--text))]">{project.title}</h3>
        <p className="text-sm text-[rgb(var(--text-secondary))]">{project.subtitle}</p>
      </div>

      <p className="text-sm text-[rgb(var(--text-secondary))]">{project.summary}</p>

      <ul className="space-y-2 text-sm text-[rgb(var(--text-secondary))]">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span aria-hidden className="mt-[0.42rem] h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand))]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Stack</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/16 bg-white/6 px-3 py-1 text-xs text-[rgb(var(--text-secondary))]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.links.map((link) => {
          const className =
            link.label.toLowerCase().includes("case study") || link.label.toLowerCase().includes("project detail")
              ? "inline-flex items-center justify-center rounded-full bg-[rgb(var(--brand))] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              : "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/6 px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand))/0.5]";

          if (link.external) {
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
                {link.label}
              </a>
            );
          }

          return (
            <Link key={link.label} href={link.href} className={className}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </motion.article>
  );
}
