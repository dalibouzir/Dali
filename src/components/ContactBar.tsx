import { owner, siteLinks } from "@/content/siteMeta";

export function ContactBar() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-bar-heading"
      className="rounded-[2.5rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface))] px-6 py-8 shadow-soft sm:px-10 sm:py-10"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <span className="badge" data-emphasis="brand">
            Contact
          </span>
          <h2 id="contact-bar-heading" className="text-balance text-2xl font-semibold text-[rgb(var(--text))] sm:text-3xl">
            Ready to collaborate on data-driven products and AI systems.
          </h2>
          <p className="text-sm text-[rgb(var(--text-secondary))]">
            Email <a href={`mailto:${owner.email}`} rel="nofollow" className="underline-offset-4 hover:underline">
              {owner.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${owner.phone.replace(/\\s+/g, "")}`} rel="nofollow" className="underline-offset-4 hover:underline">
              {owner.phone}
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={siteLinks.contact}
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-[rgb(var(--brand))] px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-lift"
          >
            Contact
          </a>
          <a
            href={owner.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-5 py-2.5 text-sm font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}
