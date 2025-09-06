"use client";
import { useEffect, useRef, useState } from "react";

export default function TypewriterOnView({
  text,
  className = "",
  min = 0.0,
  max = 1.0,
  speedMultiplier = 2.5,
}: {
  text: string;
  className?: string;
  min?: number;
  max?: number;
  speedMultiplier?: number;
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // progress when element is within viewport
      const top = Math.min(Math.max(0, vh - rect.top), vh + rect.height);
      const total = vh + rect.height;
      const ratio = top / total; // 0..1 approx
      const boosted = Math.min(1, ratio * speedMultiplier);
      const clamped = Math.min(Math.max(boosted, min), max);
      const n = Math.floor(clamped * text.length);
      setChars((prev) => (n > prev ? n : prev)); // only progress forward
    };

    const tick = () => {
      onScroll();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, min, max]);

  return (
    <p ref={ref} className={className}>
      <span>{text.slice(0, chars)}</span>
      <span className="opacity-50">{chars < text.length ? "▌" : ""}</span>
    </p>
  );
}
