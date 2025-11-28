"use client";

import { motion } from "framer-motion";
import type { ResearchItem } from "@/data/research";

type ResearchCardProps = {
  item: ResearchItem;
  index: number;
};

export function ResearchCard({ item, index }: ResearchCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 32, y: 24 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      className="group rounded-3xl border border-white/10 bg-slate-900/40 p-6 text-white shadow-[0_25px_70px_-40px_rgba(15,23,42,0.85)] backdrop-blur-2xl transition hover:border-cyan-200/40 hover:shadow-cyan-500/20 dark:border-white/15"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">Research</p>
        <span className="text-xs uppercase tracking-[0.28em] text-white/50">#{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
      <p className="mt-2 text-sm text-white/75">{item.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {item.details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span aria-hidden className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.stack.map((stack) => (
          <span key={stack} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            {stack}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
