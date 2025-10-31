import { owner, siteLinks } from "@/content/siteMeta";
import ContactForm from "@/components/ContactForm";

// @improvement: contact section pairs quick actions with secure contact form
export function ContactBar() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-bar-heading"
      className="rounded-[2rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface))] px-5 py-6 shadow-soft sm:px-8 sm:py-8"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
        <div className="space-y-3">
          <div className="space-y-1.5">
            <span className="badge" data-emphasis="brand">
              Contact
            </span>
            <h2 id="contact-bar-heading" className="text-balance text-xl font-semibold text-[rgb(var(--text))] sm:text-2xl">
              Ready to collaborate on AI-native products and resilient MLOps.
            </h2>
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              Email <a href={`mailto:${owner.email}`} rel="nofollow" className="underline-offset-4 hover:underline">
                {owner.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${owner.phone.replace(/\s+/g, "")}`}
                rel="nofollow"
                className="underline-offset-4 hover:underline"
              >
                {owner.phone}
              </a>
              . Happy to discuss fractional leadership, project-based delivery, or embedded product teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-[rgb(var(--brand))] px-4 py-2 text-sm font-semibold text-white transition hover:shadow-lift"
            >
              Hire me
            </a>
            <a
              href={owner.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
            >
              View CV
            </a>
            <a
              href={siteLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="rounded-[1.8rem] border border-[rgb(var(--surface-muted)/0.5)] bg-[rgb(var(--surface-muted)/0.2)] p-4 sm:p-5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
