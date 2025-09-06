"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type Media = {
  src: string;
  type?: "image" | "video";
  alt?: string;
};

export default function ProjectShowcase({
  media,
  intervalMs = 4000,
}: {
  media: Media[];
  intervalMs?: number;
}) {
  const items = useMemo(() => media.filter(Boolean), [media]);
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, intervalMs, items.length]);

  const start = () => {
    stop();
    timer.current = window.setTimeout(() => setIndex((i) => (i + 1) % items.length), intervalMs);
  };
  const stop = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = null;
  };

  const go = (i: number) => setIndex(((i % items.length) + items.length) % items.length);

  if (!items.length) return null;
  const current = items[index];

  return (
    <div
      className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 shadow-2xl shadow-black/30 group"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <div key={index} className="absolute inset-0 animate-fade-in">
        {current.type === "video" ? (
          // Autoplay muted inline to comply with browser policies
          <video
            ref={videoRef}
            src={current.src}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Image src={current.src} alt={current.alt || ""} fill className="object-cover" />
        )}
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          type="button"
          className="pointer-events-auto btn !px-2 !py-1"
          onClick={(e) => {
            e.stopPropagation();
            stop();
            go(index - 1);
          }}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          type="button"
          className="pointer-events-auto btn !px-2 !py-1"
          onClick={(e) => {
            e.stopPropagation();
            stop();
            go(index + 1);
          }}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${i === index ? "bg-white w-4" : "bg-white/50"}`}
            onClick={(e) => {
              e.stopPropagation();
              stop();
              go(i);
            }}
            aria-label={`Go to ${i + 1}`}
          />)
        )}
      </div>
    </div>
  );
}
