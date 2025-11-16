import { ReactNode } from "react";

interface GlassCardProps {
  as?: "div" | "article" | "section";
  className?: string;
  children: ReactNode;
}

export function GlassCard({ as: Component = "div", className = "", children }: GlassCardProps) {
  return (
    <Component
      className={`relative rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/40 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl dark:border-white/10 dark:bg-slate-900/40 ${className}`}
    >
      {children}
    </Component>
  );
}
