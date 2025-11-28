"use client";

import { motion } from "framer-motion";
import type { EducationItem } from "@/data/experience";

type EducationCardProps = {
  education: EducationItem;
};

export function EducationCard({ education }: EducationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 text-white shadow-[0_30px_80px_-48px_rgba(15,23,42,0.8)] backdrop-blur-2xl dark:border-white/15"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">{education.title}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {education.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span aria-hidden className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
