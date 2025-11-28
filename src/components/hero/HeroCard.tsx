"use client";

import type { MotionStyle } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HeroCardProps = {
  children: ReactNode;
  style?: MotionStyle;
  className?: string;
};

export function HeroCard({ children, style, className }: HeroCardProps) {
  const baseClasses =
    "w-full rounded-[2.5rem] border border-[rgb(var(--surface-muted)/0.65)] bg-[rgb(var(--surface))] p-5 sm:p-7 lg:p-8 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-2xl transition-colors";

  return (
    <motion.article style={style} className={`${baseClasses} ${className ?? ""}`.trim()}>
      {children}
    </motion.article>
  );
}
