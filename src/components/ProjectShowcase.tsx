"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type Media = {
  src: string;
  type?: "image" | "video";
  alt?: string;
  caption?: string;
};

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nI0MxQzRDNCcvPjwvc3ZnPg==";

const useCanHover = () => {
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setCanHover(mq.matches);
    const handler = (event: MediaQueryListEvent) => setCanHover(event.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return canHover;
};

type ProjectShowcaseProps = {
  media: Media[];
  label?: string;
};

export default function ProjectShowcase({ media, label = "Open project gallery" }: ProjectShowcaseProps) {
  const items = useMemo(() => media.filter(Boolean), [media]);
  const canHover = useCanHover();
  const coverIndex = useMemo(() => items.findIndex((m) => m.type !== "video"), [items]);
  const fallbackIndex = items.length ? Math.max(0, coverIndex) : 0;
  const previewIndex = useMemo(() => items.findIndex((m) => m.type === "video"), [items]);
  const [activeIndex, setActiveIndex] = useState(fallbackIndex);
  const [lightboxIndex, setLightboxIndex] = useState(fallbackIndex);
  const [open, setOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setActiveIndex(fallbackIndex);
    setLightboxIndex(fallbackIndex);
  }, [fallbackIndex]);

  const handlePointerEnter = () => {
    if (!canHover || previewIndex < 0) return;
    setActiveIndex(previewIndex);
  };

  const handlePointerLeave = () => {
    if (!canHover) return;
    setActiveIndex(fallbackIndex);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setOpen(true);
    document.body.style.setProperty("overflow", "hidden");
  };

  const closeLightbox = () => {
    setOpen(false);
    document.body.style.removeProperty("overflow");
  };

  const go = useCallback(
    (delta: number) => {
      setLightboxIndex((current) => {
        const next = current + delta;
        if (!items.length) return current;
        const safe = ((next % items.length) + items.length) % items.length;
        return safe;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, open]);

  useEffect(() => {
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, []);

  if (!items.length) return null;
  const current = items[activeIndex] ?? items[0];
  const renderMedia = (item: Media, priority = false) => {
    if (item.type === "video") {
      return (
        <video
          src={item.src}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      );
    }

    return (
      <Image
        src={item.src}
        alt={item.alt || ""}
        fill
        className="object-cover"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
        priority={priority}
      />
    );
  };

  return (
    <>
      <div
        className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-black/20 shadow-xl transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60 hover:-translate-y-1"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={() => openLightbox(activeIndex)}
        role="button"
        tabIndex={0}
        aria-label={label}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLightbox(activeIndex);
          }
        }}
      >
        <div className="absolute inset-0">
          {renderMedia(current, activeIndex === 0)}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            Close
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-lg text-white/80 transition hover:bg-white/20 sm:inline-flex"
            onClick={() => go(-1)}
            aria-label="Previous media"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-lg text-white/80 transition hover:bg-white/20 sm:inline-flex"
            onClick={() => go(1)}
            aria-label="Next media"
          >
            ›
          </button>

          <div
            className="relative w-full max-w-4xl"
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
              if (Math.abs(delta) > 60) {
                go(delta < 0 ? 1 : -1);
              }
              touchStartX.current = null;
            }}
          >
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-black/40">
              {items.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  className={`absolute inset-0 transition-opacity duration-300 ${index === lightboxIndex ? "opacity-100" : "opacity-0"}`}
                  aria-hidden={index !== lightboxIndex}
                >
                  {renderMedia(item, index <= 2)}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-white/70">
              <span>{items[lightboxIndex]?.caption || items[lightboxIndex]?.alt || label}</span>
              <span>
                {lightboxIndex + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
