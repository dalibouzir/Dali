"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const sections = [
  { href: "#about", label: "About Me" },
  { href: "#featured", label: "Featured Projects" },
  { href: "#data-ai", label: "Data Science & AI" },
  { href: "#ml-research", label: "ML Research" },
  { href: "#development", label: "Development Projects" },
  { href: "#mlops", label: "MLOps & Systems" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(sections[0].href);

  const sectionIds = useMemo(() => sections.map((s) => s.href.replace("#", "")), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .map((entry) => entry.target.id);

        if (visible.length) {
          const match = sections.find((s) => s.href === `#${visible[0]}`);
          if (match) setActive(match.href);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur bg-[hsl(var(--surface)/0.85)] border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container-wide flex items-center justify-between gap-4 py-3">
        <Link
          href="#about"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400 transition hover:text-white"
        >
          Mohamed Ali
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {sections.map((s) => (
            <li key={s.href}>
              <a
                className={`relative pb-1 transition hover:text-white ${
                  active === s.href ? "text-white" : "text-zinc-400"
                }`}
                href={s.href}
              >
                {s.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-white transition-transform duration-200 ${
                    active === s.href ? "scale-x-100" : ""
                  }`}
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="btn btn-accent px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] md:px-4 md:py-2 md:text-sm md:normal-case md:tracking-normal"
          >
            Hire Me
          </Link>
          <button
            aria-label="Menu"
            className="md:hidden btn px-3 py-2 text-lg"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            ☰
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <div id="mobile-nav" className="md:hidden bg-[hsl(var(--surface)/0.96)]/95">
          <div className="container-wide flex flex-col gap-3 py-4">
            <Link
              href="#contact"
              className="btn btn-accent justify-center"
              onClick={() => setOpen(false)}
            >
              Hire Me
            </Link>
            <ul className="divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/5 text-zinc-200">
              {sections.map((s) => (
                <li key={s.href}>
                  <a
                    className={`block px-5 py-3 text-sm transition ${
                      active === s.href ? "bg-white/10 text-white" : "active:bg-white/5 hover:bg-white/5"
                    }`}
                    href={s.href}
                    onClick={() => setOpen(false)}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
