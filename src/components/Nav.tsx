"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  LOCALE_COOKIE_NAME,
  LOCALE_LABELS,
  NAV_COPY,
  type Locale,
} from "@/lib/i18n";

const HOME_SECTION_IDS = ["about", "skills", "best-works", "contact"] as const;

type NavProps = {
  initialLocale: Locale;
};

export default function Nav({ initialLocale }: NavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const languageMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setLocale(initialLocale);
  }, [initialLocale]);

  const copy = NAV_COPY[locale];
  const uiCopy = {
    toggleMenuAria: locale === "fr" ? "Ouvrir le menu" : locale === "ar" ? "فتح القائمة" : "Toggle menu",
    logoAria: locale === "fr" ? "Portfolio Mohamed Ali" : locale === "ar" ? "ملف أعمال محمد علي" : "Mohamed Ali portfolio",
    logoSubline: locale === "ar" ? "ذكاء اصطناعي · FULL STACK · DESIGN" : "AI · FULL STACK · DESIGN",
  };

  const homeLinks = useMemo(
    () => [
      { href: "#about", label: copy.homeLinks.about },
      { href: "#skills", label: copy.homeLinks.skills },
      { href: "#best-works", label: copy.homeLinks.bestWorks },
      { href: "#contact", label: copy.homeLinks.contacts },
    ],
    [copy.homeLinks],
  );

  const pageLinks = useMemo(
    () => [
      { href: "/", label: copy.pageLinks.home },
      { href: "/projects", label: copy.pageLinks.projects },
      { href: "/#contact", label: copy.pageLinks.contact },
    ],
    [copy.pageLinks],
  );

  const links = isHomePage ? homeLinks : pageLinks;

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 16);

      if (!isHomePage) {
        setActiveHash("");
        return;
      }

      let nextActive = "#about";
      for (const id of HOME_SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top;
        if (top <= 180) {
          nextActive = `#${id}`;
        }
      }

      setActiveHash(nextActive);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHomePage]);

  useEffect(() => {
    if (!menuOpen) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!languageOpen) {
      return;
    }

    const onPointerDown = (event: MouseEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [languageOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return activeHash === href;
    if (href === "/#contact") return pathname === "/";
    return pathname === href;
  };

  const onNavigate = (href: string) => {
    setMenuOpen(false);

    if (!isHomePage || !href.startsWith("#")) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(target, {
        offset: -90,
        duration: 1.04,
      });
      return;
    }

    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  const applyLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      setLanguageOpen(false);
      return;
    }

    setLocale(nextLocale);
    setLanguageOpen(false);
    document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; Max-Age=31536000; Path=/; SameSite=Lax`;
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";
    router.refresh();
  };

  return (
    <header className={`anton-header ${!isHomePage ? "is-page" : ""} ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
      <div className="anton-nav-shell">
        <Link href="/" className="anton-logo" onClick={() => setMenuOpen(false)}>
          <span className="anton-logo-word" aria-label={uiCopy.logoAria}>
            <span className="anton-logo-primary">MOHAMED</span>
            <span aria-hidden>&nbsp;</span>
            <span className="anton-logo-secondary">ALI</span>
          </span>
          <span className="anton-logo-sub">{uiCopy.logoSubline}</span>
        </Link>

        <nav className="anton-nav-desktop" aria-label={copy.menuAria}>
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`anton-nav-link ${isActive(item.href) ? "is-active" : ""}`}
              onClick={(event) => {
                if (isHomePage && item.href.startsWith("#")) {
                  event.preventDefault();
                  onNavigate(item.href);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="anton-nav-actions" ref={languageMenuRef}>
          <button
            type="button"
            className="anton-lang-pill"
            aria-label={copy.openLanguageMenuAria}
            aria-haspopup="menu"
            aria-expanded={languageOpen}
            onClick={() => setLanguageOpen((prev) => !prev)}
          >
            {LOCALE_LABELS[locale].short} <span aria-hidden>⇄</span>
          </button>

          <div className={`anton-lang-menu ${languageOpen ? "is-open" : ""}`} role="menu" aria-label={copy.selectLanguageAria}>
            {(Object.keys(LOCALE_LABELS) as Locale[]).map((entry) => {
              const isCurrent = entry === locale;
              return (
                <button
                  key={entry}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isCurrent}
                  className={`anton-lang-option ${isCurrent ? "is-active" : ""}`}
                  onClick={() => applyLocale(entry)}
                >
                  <span>{LOCALE_LABELS[entry].short}</span>
                  <span>{LOCALE_LABELS[entry].name}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="anton-menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={uiCopy.toggleMenuAria}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`anton-mobile-menu ${menuOpen ? "is-open" : ""}`}>
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`anton-mobile-link ${isActive(item.href) ? "is-active" : ""}`}
            onClick={(event) => {
              if (isHomePage && item.href.startsWith("#")) {
                event.preventDefault();
                onNavigate(item.href);
                return;
              }

              setMenuOpen(false);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
