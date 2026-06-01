"use client";

import { useEffect, useState } from "react";

const INTRO_TOTAL_MS = 1900;
const INTRO_FADE_MS = 480;

export function PageIntro() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = document.documentElement;
    root.classList.add("intro-active");
    setVisible(true);

    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, INTRO_TOTAL_MS - INTRO_FADE_MS);

    const doneTimer = window.setTimeout(() => {
      root.classList.remove("intro-active");
      setVisible(false);
    }, INTRO_TOTAL_MS);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      root.classList.remove("intro-active");
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`anton-intro ${leaving ? "is-leaving" : ""}`} aria-hidden>
      <div className="anton-intro-sun" />
      <div className="anton-intro-smoke anton-intro-smoke-a" />
      <div className="anton-intro-smoke anton-intro-smoke-b" />
      <div className="anton-intro-smoke anton-intro-smoke-c" />
      <div className="anton-intro-grid" />
    </div>
  );
}
