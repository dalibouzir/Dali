"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface AIFocusCardProps {
  title: string;
  detail: string;
  tags: string[];
  index: number;
}

export function AIFocusCard({ title, detail, tags, index }: AIFocusCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{
        delay: reduceMotion ? 0 : index * 0.1,
        duration: 0.5,
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.3 },
            }
      }
      className="group relative overflow-hidden rounded-[1.8rem] border border-[rgb(var(--surface-muted)/0.4)] bg-gradient-to-br from-[rgb(var(--surface))] to-[rgb(var(--surface-muted)/0.3)] p-6 transition-all duration-300 hover:border-[rgb(var(--brand)/0.3)] hover:shadow-lift sm:p-7"
    >
      {/* Background gradient on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgb(var(--brand) / 0.1), transparent 50%)",
        }}
      />

      {/* Border gradient effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(var(--brand), 0.15) 0%,
              transparent 50%
            )
          `,
        }}
      />

      <div className="relative z-10 space-y-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-[rgb(var(--text))] group-hover:text-[rgb(var(--brand))] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
          {detail}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-[rgb(var(--brand)/0.12)] px-3 py-1 text-xs font-medium text-[rgb(var(--brand))] group-hover:bg-[rgb(var(--brand)/0.18)] transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Accent dot (top-right) */}
      <div className="pointer-events-none absolute top-4 right-4 h-2 w-2 rounded-full bg-[rgb(var(--brand)/0.4)] group-hover:bg-[rgb(var(--brand))] transition-colors duration-300" />
    </motion.div>
  );
}
