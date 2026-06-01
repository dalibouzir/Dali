"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type ProjectMediaGalleryProps = {
  title: string;
  images: string[];
  videos: string[];
  fallbackPoster: string;
};

type MediaSlide =
  | { type: "image"; src: string; label: string }
  | { type: "video"; src: string; poster: string; label: string };

export function ProjectMediaGallery({ title, images, videos, fallbackPoster }: ProjectMediaGalleryProps) {
  const slides = useMemo<MediaSlide[]>(() => {
    const imageSlides = images.map((src, index) => ({
      type: "image" as const,
      src,
      label: `${title} screenshot ${index + 1}`,
    }));

    const videoSlides = videos.map((src, index) => ({
      type: "video" as const,
      src,
      poster: images[index] ?? images[0] ?? fallbackPoster,
      label: `${title} demo video ${index + 1}`,
    }));

    return [...imageSlides, ...videoSlides];
  }, [fallbackPoster, images, title, videos]);

  const [activeIndex, setActiveIndex] = useState(0);
  const active = slides[activeIndex];

  if (!active) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[1.75rem] border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface-muted)/0.2)]">
        {active.type === "video" ? (
          <video
            controls
            preload="metadata"
            playsInline
            poster={active.poster}
            className="h-auto w-full rounded-[1.75rem] rounded-b-none bg-black"
          >
            <source src={active.src} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={active.src}
            alt={active.label}
            width={1200}
            height={760}
            loading="lazy"
            sizes="(min-width: 1024px) 68vw, 96vw"
            className="h-auto w-full object-cover"
          />
        )}
        <div className="border-t border-[rgb(var(--surface-muted)/0.45)] px-4 py-2 text-xs text-[rgb(var(--text-secondary))]">
          {active.label}
        </div>
      </div>

      {slides.length > 1 ? (
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={`${slide.type}-${slide.src}`}
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-xl border text-left transition ${
                index === activeIndex
                  ? "border-[rgb(var(--brand)/0.7)]"
                  : "border-[rgb(var(--surface-muted)/0.5)] hover:border-[rgb(var(--brand)/0.45)]"
              }`}
              aria-pressed={index === activeIndex}
            >
              {slide.type === "video" ? (
                <div className="relative">
                  <Image
                    src={slide.poster}
                    alt={`${slide.label} poster`}
                    width={420}
                    height={250}
                    loading="lazy"
                    sizes="220px"
                    className="h-20 w-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 rounded-full bg-black/70 px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.18em] text-white">
                    Video
                  </span>
                </div>
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.label}
                  width={420}
                  height={250}
                  loading="lazy"
                  sizes="220px"
                  className="h-20 w-full object-cover"
                />
              )}
              <span className="line-clamp-2 px-2 py-1 text-[0.62rem] text-[rgb(var(--text-secondary))]">{slide.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
