"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { owner } from "@/content/siteMeta";
import { useTheme } from "@/components/theme/ThemeProvider";

// @improvement: single-page navigation anchored to sections

const PRIMARY_LINKS = [
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Highlights" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeHash, setActiveHash] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 8);

      if (isMenuOpen) {
        setIsNavVisible(true);
        lastScrollY = current;
        return;
      }

      // Update active section for hash-based nav on scroll
      const sectionIds = ["about", "highlights", "projects", "experience", "tech-stack", "contact"];
      const offset = 160;
      let bestId: string | null = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);
        if (distance < bestDistance && rect.bottom > 80) {
          bestDistance = distance;
          bestId = id;
        }
      }

      setActiveHash(bestId ? `#${bestId}` : null);

      if (current < 96) {
        setIsNavVisible(true);
      } else if (current > lastScrollY + 12 && current > 144) {
        setIsNavVisible(false);
      } else if (current < lastScrollY - 12) {
        setIsNavVisible(true);
      }

      lastScrollY = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (isMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }

    return;
  }, [isMenuOpen]);

  const navBackgroundClass = useMemo(
    () =>
      isScrolled || isMenuOpen
        ? "backdrop-blur-xl border border-white/15 bg-white/16 shadow-[0_18px_46px_-24px_rgba(15,23,42,0.45)] transition-all duration-300 dark:border-white/10 dark:bg-white/12"
        : "backdrop-blur-xl border border-white/10 bg-white/12 shadow-[0_14px_38px_-24px_rgba(15,23,42,0.32)] transition-all duration-300 dark:border-white/8 dark:bg-white/10",
    [isScrolled, isMenuOpen],
  );

  const isActive = (href: string) => {
    if (!href.startsWith("#")) {
      return pathname === href;
    }
    // During SSR, activeHash is null so no link is active, avoiding mismatch.
    return activeHash === href;
  };

  const renderPrimaryLinks = (onClick?: () => void) =>
    PRIMARY_LINKS.map((item) => {
      const active = isActive(item.href);
      return (
        <li key={item.href} className="relative">
          <a
            href={item.href}
            className={`inline-flex items-center text-sm transition-colors ${
              active ? "text-[rgb(var(--text))]" : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
            }`}
            aria-current={active ? "page" : undefined}
            onClick={(event) => {
              onClick?.();
              if (item.href.startsWith("#")) {
                event.preventDefault();
                const target = document.querySelector<HTMLElement>(item.href);
                if (target) {
                  const headerOffset = 96;
                  const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                  const offsetPosition = elementPosition - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }
            }}
          >
            {item.label}
            <span
              aria-hidden
              className={`absolute left-0 right-0 -bottom-2 mx-auto h-[3px] w-8 rounded-full bg-[rgb(var(--brand))] ${
                active ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 ease-out`}
            />
          </a>
        </li>
      );
    });

  const headerVisibilityClass = isNavVisible ? "translate-y-0" : "-translate-y-full";

  return (
    <header className={`sticky top-0 z-50 px-4 pt-4 transition-transform duration-300 sm:px-8 ${headerVisibilityClass}`}>
      <div className={`mx-auto w-full max-w-[min(100%,1200px)] rounded-[2.5rem] ${navBackgroundClass}`}>
        <nav aria-label="Primary" className="flex items-center justify-between gap-6 px-4 py-3 sm:px-6 sm:py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-base font-semibold uppercase tracking-[0.24em] text-[rgb(var(--muted))] transition-colors hover:text-[rgb(var(--text))]"
            onClick={() => setIsMenuOpen(false)}
          >
          {owner.name}
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium xl:flex">{renderPrimaryLinks()}</ul>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href={owner.cvUrl}
              className="hidden rounded-full border border-transparent bg-[rgb(var(--surface-muted)/0.7)] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] shadow-soft transition hover:border-[rgb(var(--brand)/0.3)] hover:text-[rgb(var(--text))] md:inline-flex md:items-center md:justify-center"
              prefetch={false}
              target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </Link>
          <a
            href="#contact"
            className="hidden rounded-full border border-transparent bg-[rgb(var(--brand))] px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-lift md:inline-flex md:items-center md:justify-center"
          >
            Hire me
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--surface-muted)/0.65)] bg-[rgb(var(--surface))] text-base text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)] focus:outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--ring))] md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            >
              <span aria-hidden>{isMenuOpen ? "✕" : "☰"}</span>
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--surface-muted)/0.65)] bg-[rgb(var(--surface))] text-sm text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)] focus:outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--ring))] md:inline-flex"
              aria-label="Toggle color theme"
            >
              <span aria-hidden>{theme === "dark" ? "☾" : "☀"}</span>
            </button>
          </div>
        </nav>

        <div
          className={`xl:hidden ${isMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-[max-height,opacity] duration-300 ease-out`}
        >
          <div className="flex flex-col gap-3 px-4 pb-6 sm:px-6">
            <ul className="flex flex-col gap-2 text-sm font-medium text-[rgb(var(--text))]">{renderPrimaryLinks(() => setIsMenuOpen(false))}</ul>
            <div className="flex flex-col gap-3 pt-1">
              <Link
                href={owner.cvUrl}
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--surface-muted)/0.65)] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
                onClick={() => setIsMenuOpen(false)}
              >
                View CV
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-[rgb(var(--brand))] px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-lift"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
