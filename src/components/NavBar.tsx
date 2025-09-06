"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { href: "#about", label: "About Me" },
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur" : ""}`}>
      <nav className="container-wide glass rounded-xl flex items-center justify-between py-3 px-4 mt-2 border border-white/10">
        <Link href="#" className="text-sm font-semibold text-zinc-300 hover:text-white">
          Mohamed Ali
        </Link>
        <ul className="hidden md:flex items-center gap-4 text-sm text-zinc-300">
          {sections.map((s) => (
            <li key={s.href}>
              <a className="hover:text-white" href={s.href}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Menu"
          className="md:hidden btn px-3 py-1"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden container-wide px-0">
          <div className="glass rounded-xl mt-2 border border-white/10 overflow-hidden">
            <ul className="divide-y divide-white/5 text-zinc-200">
              {sections.map((s) => (
                <li key={s.href}>
                  <a
                    className="block px-4 py-3 active:bg-white/5 hover:bg-white/5"
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
