"use client";

import { useEffect, useRef } from "react";

export default function BackgroundDecor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY || 0;
      el.style.setProperty("--parallax", `${Math.min(100, y * 0.05)}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft wave background */}
      <svg className="absolute top-0 left-0 w-[200%] h-[50vh] -translate-x-1/4" viewBox="0 0 1440 400">
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(34,211,238,0.12)" />
            <stop offset="60%" stopColor="rgba(168,85,247,0.10)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0.10)" />
          </linearGradient>
        </defs>
        <path
          d="M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,96C840,96,960,160,1080,186.7C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          fill="url(#waveGradient)"
          className="translate-y-[var(--parallax)] transition-transform duration-300 ease-out"
        />
      </svg>

      {/* Floating gradient blobs */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 blur-3xl animate-float-slower" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/10 to-emerald-500/10 blur-3xl animate-float-slowest" />
    </div>
  );
}

