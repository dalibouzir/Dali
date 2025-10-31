import Link from "next/link";
import { profile } from "@/data/profile";
import { SITE } from "@/config/site";

// @improvement: footer copy reflects SITE identity + contact data

type FooterNavItem = {
  label: string;
  href: string;
};

type FooterProps = {
  navigation: FooterNavItem[];
};

const socials = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "CV (EN)", href: profile.cv?.en },
];

export default function Footer({ navigation }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface))]">
      <div className="container-wide flex flex-col gap-12 py-12 lg:flex-row lg:justify-between">
        <div className="max-w-md space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
            {SITE.name}
          </p>
          <p className="text-lg font-semibold text-[rgb(var(--text))]">
            {SITE.title}
          </p>
          <p className="text-sm text-[rgb(var(--text-secondary))]">
            {SITE.tagline} Based in {profile.location} and collaborating remotely on AI platforms, data products, and
            production MLOps initiatives.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-[rgb(var(--text))]">
            <a
              className="rounded-full border border-[rgb(var(--surface-muted)/0.6)] px-3 py-2 transition hover:border-[rgb(var(--brand)/0.45)]"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
            <a
              className="rounded-full border border-[rgb(var(--surface-muted)/0.6)] px-3 py-2 transition hover:border-[rgb(var(--brand)/0.45)]"
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            >
              {profile.phone}
            </a>
          </div>
        </div>

        <div className="grid gap-10 text-sm text-[rgb(var(--text-secondary))] sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Navigate</p>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-[rgb(var(--text))]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Social</p>
            <ul className="space-y-2">
              {socials
                .filter((item): item is { label: string; href: string } => Boolean(item.href))
                .map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition-colors hover:text-[rgb(var(--text))]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Availability</p>
            <p>
              Currently partnering on data products, AI copilots, and platform groundwork. Happy to discuss fractional or
              full-time engagements.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface-muted)/0.25)]">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-[rgb(var(--muted))] sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>Crafted with Next.js, TypeScript, and a love for measurable impact.</span>
        </div>
      </div>
    </footer>
  );
}
