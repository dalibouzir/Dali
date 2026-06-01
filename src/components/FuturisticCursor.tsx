"use client";

import { useEffect, useRef } from "react";

export function FuturisticCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const root = document.documentElement;
    root.classList.add("has-ai-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) {
      return;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let frame = 0;

    const setActiveState = (active: boolean) => {
      ring.classList.toggle("is-active", active);
    };

    const move = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

      const element = event.target as Element | null;
      const interactive = element?.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor='interactive']",
      );
      setActiveState(Boolean(interactive));
    };

    const onLeave = () => {
      root.classList.remove("cursor-visible");
    };

    const onEnter = () => {
      root.classList.add("cursor-visible");
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);

    onEnter();
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      root.classList.remove("has-ai-cursor", "cursor-visible");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="ai-cursor-ring" aria-hidden>
        <span className="ai-cursor-chip">
          <span className="ai-cursor-chip-core" />
        </span>
      </div>
      <div ref={dotRef} className="ai-cursor-dot" aria-hidden />
    </>
  );
}
