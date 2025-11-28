"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroCard } from "./HeroCard";
import { HeroIdentity, HeroNarrative } from "./HeroHeader";
import { HeroActions } from "./HeroActions";
import { HeroContact } from "./HeroContact";
import { HeroFocusAreas } from "./HeroFocusAreas";
import { useTheme } from "@/components/theme/ThemeProvider";

const focusAreas = [
  "AI Product Strategy",
  "Data Platform Engineering",
  "LLM Applications",
  "MLOps Enablement",
  "Backend APIs & Microservices",
  "Analytics Dashboards & Observability",
];

const aboutBullets = [
  "Architects data-driven systems that automate workflows and surface actionable insights.",
  "Comfortable across the stack: from model training and MLOps to front-end delivery.",
  "Enjoys turning ambiguous product ideas into measurable, shipped features.",
];

const heroActions = [
  { label: "View CV (PDF)", href: "/cv.pdf", variant: "solid" as const },
  { label: "Hire me", href: "#contact", variant: "solid" as const },
  { label: "View Projects", href: "#projects", variant: "ghost" as const },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = (event: MediaQueryListEvent) => {
      setMotionEnabled(event.matches);
    };

    setMotionEnabled(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update);
      return () => {
        mediaQuery.removeEventListener("change", update);
      };
    }

    mediaQuery.addListener(update);
    return () => {
      mediaQuery.removeListener(update);
    };
  }, []);

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.85]);

  const identityX = useTransform(scrollYProgress, [0.05, 0.18], [-40, 0]);
  const identityOpacity = useTransform(scrollYProgress, [0.05, 0.18], [0, 1]);

  const narrativeX = useTransform(scrollYProgress, [0.15, 0.28], [-30, 0]);
  const narrativeOpacity = useTransform(scrollYProgress, [0.15, 0.28], [0, 1]);

  const ctaY = useTransform(scrollYProgress, [0.25, 0.38], [30, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.25, 0.38], [0, 1]);

  const portraitX = useTransform(scrollYProgress, [0.32, 0.46], [60, 0]);
  const portraitOpacity = useTransform(scrollYProgress, [0.32, 0.46], [0, 1]);

  const footerY = useTransform(scrollYProgress, [0.4, 0.56], [40, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0.4, 0.56], [0, 1]);

  const noteY = useTransform(scrollYProgress, [0.48, 0.66], [24, 0]);
  const noteOpacity = useTransform(scrollYProgress, [0.48, 0.66], [0, 1]);

  const statsY = useTransform(scrollYProgress, [0.58, 0.76], [50, 0]);
  const statsOpacity = useTransform(scrollYProgress, [0.58, 0.76], [0, 1]);

  const { theme } = useTheme();
  const heroBackgroundClass =
    theme === "dark"
      ? "bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/90"
      : "bg-gradient-to-b from-[rgb(var(--bg))] via-[rgb(var(--surface))] to-[rgb(var(--surface-muted))]";

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={`relative min-h-[160vh] md:min-h-[200vh] lg:min-h-[220vh] ${heroBackgroundClass}`}
    >
      <motion.div
        aria-hidden
        style={{ opacity: backgroundOpacity }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%)]"
      />
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 pb-10 pt-6 sm:px-6 md:h-screen md:sticky md:top-10">
        <div className="w-full max-w-[84rem]">
          <motion.div
            initial={motionEnabled ? { opacity: 0, scale: 0.94, y: 20 } : undefined}
            animate={motionEnabled ? { opacity: 1, scale: 1, y: 0 } : undefined}
            transition={motionEnabled ? { duration: 0.65, ease: "easeOut" } : undefined}
          >
            <HeroCard className="mx-auto w-full max-w-[min(100vw-2rem,84rem)]">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                <div className="flex-1 space-y-6">
                  <motion.div style={motionEnabled ? { x: identityX, opacity: identityOpacity } : undefined}>
                    <HeroIdentity
                      label="Data-Oriented Computer Engineer"
                      name="Mohamed Ali Bouzir"
                      titles={[
                        "Data Product Engineer · AI & MLOps",
                        "Specialized in AI, Data Science, and backend systems.",
                      ]}
                    />
                  </motion.div>
                  <motion.div style={motionEnabled ? { x: narrativeX, opacity: narrativeOpacity } : undefined}>
                    <HeroNarrative
                      valueStatement="I build measurable AI products end-to-end."
                      paragraph="I partner with founders and product teams to ship AI systems—from inference-ready pipelines and data platforms to feedback-rich user experiences that prove their value in production."
                      bullets={aboutBullets}
                    />
                  </motion.div>
                  <motion.div style={motionEnabled ? { y: ctaY, opacity: ctaOpacity } : undefined}>
                    <HeroActions
                      primary={heroActions}
                      secondary={{
                        label: "View Portfolio",
                        href: "https://dali-eight.vercel.app",
                        variant: "ghost",
                        external: true,
                      }}
                    />
                  </motion.div>
                  <motion.div
                    style={motionEnabled ? { y: footerY, opacity: footerOpacity } : undefined}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.32em] text-[rgb(var(--muted))]">Focus areas</p>
                        <div className="mt-3">
                          <HeroFocusAreas areas={focusAreas} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <HeroContact
                          location="Monastir, Tunisia"
                          email="bouzirdali@gmail.com"
                          phone="+216 56 815 716"
                          secondaryPhone="+216 51 056 932"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 space-y-5">
                  <motion.div style={motionEnabled ? { y: statsY, opacity: statsOpacity } : undefined}>
                    <div className="rounded-2xl border border-[rgb(var(--surface-muted)/0.65)] bg-[rgb(var(--surface))] p-4 text-[rgb(var(--text-secondary))] shadow-inner shadow-cyan-500/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">All time views</p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-[rgb(var(--text))]">0</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">since launch —</p>
                    </div>
                  </motion.div>
                  <motion.div
                    style={motionEnabled ? { x: portraitX, opacity: portraitOpacity } : undefined}
                    className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.6)] bg-gradient-to-b from-[rgb(var(--surface-muted)/0.35)] via-[rgb(var(--surface-muted)/0.2)] to-[rgb(var(--surface))] p-3 text-center shadow-2xl shadow-slate-900/50"
                  >
                    <div className="overflow-hidden rounded-[1.5rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface-muted)/0.35)]">
                      <Image
                        src="/portrait.jpg"
                        alt="Portrait of Mohamed Ali Bouzir"
                        width={800}
                        height={900}
                        className="h-full w-full object-cover"
                        priority
                      />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-secondary))]">Portrait of Mohamed Ali Bouzir</p>
                  </motion.div>
                  <motion.div style={motionEnabled ? { y: noteY, opacity: noteOpacity } : undefined}>
                    <div className="rounded-2xl border border-[rgb(var(--surface-muted)/0.65)] bg-[rgb(var(--surface))] p-4 text-sm text-[rgb(var(--text-secondary))] shadow-inner shadow-cyan-500/10">
                      <p className="font-semibold text-[rgb(var(--text))]">
                        “Pinned hero card that narrates the work as you scroll—just like I run AI delivery: structured,
                        transparent, and measurable.”
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Scroll to explore ↓</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </HeroCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
