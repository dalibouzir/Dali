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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-zinc-950/50" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between py-4">
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
      </nav>
    </header>
  );
}
