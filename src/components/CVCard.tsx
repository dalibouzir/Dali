"use client";

import { useState } from "react";
import Link from "next/link";
import { owner, siteLinks } from "@/content/siteMeta";

// @improvement: CV card pulls identity/contact data from SITE-backed owner meta

export function CVCard() {
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);

  const copyToClipboard = async (value: string, field: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <section
      aria-labelledby="cv-card-heading"
      className="rounded-[2.5rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface))] p-8 shadow-soft"
    >
      <header className="space-y-3">
        <span className="badge" data-emphasis="brand">
          Download
        </span>
        <div>
          <h2 id="cv-card-heading" className="text-2xl font-semibold text-[rgb(var(--text))] sm:text-3xl">
            {owner.name}
          </h2>
          <p className="text-sm text-[rgb(var(--text-secondary))]">{owner.title}</p>
        </div>
      </header>

      <dl className="mt-6 space-y-4 text-sm text-[rgb(var(--text-secondary))]">
        <div>
          <dt className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Location</dt>
          <dd className="mt-1 text-[rgb(var(--text))]">{owner.location}</dd>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${owner.email}`} rel="nofollow" className="text-[rgb(var(--text))] underline-offset-4 hover:underline">
                {owner.email}
              </a>
            </dd>
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(owner.email, "email")}
            className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-3 py-1.5 text-xs font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
          >
            Copy
            <span className="text-[rgb(var(--brand))]">{copiedField === "email" ? "✓" : "⧉"}</span>
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Phone</dt>
            <dd className="mt-1">
              <a href={`tel:${owner.phone.replace(/\\s+/g, "")}`} rel="nofollow" className="text-[rgb(var(--text))] underline-offset-4 hover:underline">
                {owner.phone}
              </a>
            </dd>
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(owner.phone, "phone")}
            className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-3 py-1.5 text-xs font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
          >
            Copy
            <span className="text-[rgb(var(--brand))]">{copiedField === "phone" ? "✓" : "⧉"}</span>
          </button>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">Portfolio</dt>
          <dd className="mt-1">
            <Link
              href={owner.portfolio}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-[rgb(var(--text))] underline-offset-4 hover:underline"
            >
              {owner.portfolio}
            </Link>
          </dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={owner.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[rgb(var(--brand))] px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-lift"
        >
          Download CV (PDF)
        </Link>
        <a
          href={siteLinks.contact}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-5 py-2.5 text-sm font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
