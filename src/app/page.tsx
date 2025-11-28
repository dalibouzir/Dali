import type { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/components/Seo";
import { GlassSection } from "@/components/GlassSection";
import { GlassCard } from "@/components/GlassCard";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import ContactForm from "@/components/ContactForm";
import { owner } from "@/content/siteMeta";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";

// @improvement: homepage metadata derived from SITE config
export const metadata: Metadata = buildMetadata({
  title: SITE.title,
  description: SITE.tagline,
  path: "/",
});

const featuredProjects = projects.filter((project) => project.featured);
// @improvement: structured data for Person + WebSite + breadcrumbs
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed Ali Bouzir",
  jobTitle: "Data Product Engineer · AI & MLOps",
  url: SITE.url,
  sameAs: [
    SITE.github,
    SITE.linkedin,
    `https://twitter.com/${SITE.twitter.replace("@", "")}`,
  ],
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: owner.location,
    addressCountry: "TN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  headline: SITE.title,
  name: SITE.name,
  description: SITE.tagline,
  url: SITE.url,
  potentialAction: {
    "@type": "ContactAction",
    target: `mailto:${SITE.email}`,
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.url,
    },
  ],
};

export default function Home() {
  return (
    <>
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema, breadcrumbs]),
          }}
        />
        <section id="about" className="scroll-mt-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <HomeHero />
        </section>

        <GlassSection
          id="highlights"
          eyebrow="Highlights"
          title="Impact in numbers."
          description={
            <p>
              Signals that the systems I build ship measurable value—from latency and accuracy to hours saved in operations.
            </p>
          }
        >
          <div className="grid gap-5 md:grid-cols-4">
            <GlassCard className="p-5">
              <span className="text-3xl font-semibold text-cyan-300 sm:text-4xl">35k+</span>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/70">
                LLM-backed answers shipped
              </p>
              <p className="mt-2 text-sm text-white/85">AI Business Agent</p>
            </GlassCard>
            <GlassCard className="p-5">
              <span className="text-3xl font-semibold text-cyan-300 sm:text-4xl">±2 pts</span>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/70">
                Fantasy lineup accuracy
              </p>
              <p className="mt-2 text-sm text-white/85">AFFA engine, 15+ gameweeks</p>
            </GlassCard>
            <GlassCard className="p-5">
              <span className="text-3xl font-semibold text-cyan-300 sm:text-4xl">7,000+</span>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/70">
                Players managed
              </p>
              <p className="mt-2 text-sm text-white/85">MyMatch admin platform</p>
            </GlassCard>
            <GlassCard className="p-5">
              <span className="text-3xl font-semibold text-cyan-300 sm:text-4xl">30%+</span>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/70">
                Efficiency lift
              </p>
              <p className="mt-2 text-sm text-white/85">Gym & scheduling systems</p>
            </GlassCard>
          </div>
        </GlassSection>

        <GlassSection
          id="projects"
          eyebrow="Projects"
          title="Flagship AI, data, and full-stack delivery."
          description={
            <p>
              Production-grade AI assistants, scheduling platforms, and admin systems that ship measurable outcomes—latency, accuracy, and operational lift.
            </p>
          }
        >
          <ProjectsGrid projects={featuredProjects} />
        </GlassSection>

        <GlassSection
          id="experience"
          eyebrow="Experience"
          title="Hands-on delivery across freelance, internships, and study."
          description={
            <p>
              Roles where I owned back-end services, data flows, and front-end delivery, and a brief summary of my education.
            </p>
          }
        >
          <ExperienceTimeline />
        </GlassSection>

        <GlassSection
          id="tech-stack"
          eyebrow="Tech Stack"
          title="Tools I use to ship AI-native products."
          description={
            <p>
              A stack spanning Python, web engineering, applied ML, and MLOps—picked to balance velocity and reliability in production.
            </p>
          }
        >
          <TechStackGrid />
        </GlassSection>

        <GlassSection
          id="contact"
          eyebrow="Contact"
          title="Ready to collaborate on AI-native products and resilient MLOps."
          description={
            <p>
              Tell me about your product, infrastructure, or data challenges. I usually respond within one business day.
            </p>
          }
        >
          <ContactSection />
        </GlassSection>
      </main>
    </>
  );
}

type ImpactItemProps = {
  title: string;
  label: string;
  detail: string;
};

function ImpactItem({ title, label, detail }: ImpactItemProps) {
  return (
    <div className="flex flex-col gap-2 rounded-[1.75rem] border border-white/18 bg-white/10 p-5 text-white shadow-[0_22px_60px_-28px_rgba(15,23,42,0.7)] backdrop-blur-xl dark:border-white/15 dark:bg-white/8">
      <span className="text-3xl font-semibold sm:text-4xl">{title}</span>
      <span className="text-xs uppercase tracking-[0.28em] text-white/70">{label}</span>
      <span className="text-sm font-medium text-white/85">{detail}</span>
    </div>
  );
}

// ProjectsGrid now lives in a dedicated client component at src/components/ProjectsGrid.tsx

function ExperienceTimeline() {
  return (
    <ol className="relative space-y-6 border-l border-white/10 pl-6 text-sm text-[rgb(var(--text-secondary))]">
      <li className="relative">
        <span className="absolute -left-[11px] mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.25)]" />
        <div className="rounded-3xl border border-white/14 bg-white/6 p-5 shadow-soft backdrop-blur-xl dark:border-white/12 dark:bg-white/5">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgb(var(--muted))]">
            MyMatch – Backend &amp; Admin Panel (Freelance)
          </p>
          <p className="mt-1 text-xs text-[rgb(var(--muted))]">
            Remote – Monastir, Tunisia · Sep 2024 – May 2025
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>
              Designed and maintained a centralized admin dashboard managing 7,000+ players and 70+ sports complexes.
            </li>
            <li>
              Built Laravel APIs integrated with Firebase to keep data in sync with &lt;2 s latency and ~99.9% uptime.
            </li>
            <li>
              Helped cut manual tracking time by ~40% and improve administrative productivity by 60%+.
            </li>
          </ul>
        </div>
      </li>
      <li className="relative">
        <span className="absolute -left-[11px] mt-1 h-2.5 w-2.5 rounded-full bg-indigo-300 shadow-[0_0_0_6px_rgba(129,140,248,0.25)]" />
        <div className="rounded-3xl border border-white/14 bg-white/6 p-5 shadow-soft backdrop-blur-xl dark:border-white/12 dark:bg-white/5">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgb(var(--muted))]">
            ElyosDigital Company – Web Development Intern
          </p>
          <p className="mt-1 text-xs text-[rgb(var(--muted))]">
            Monastir, Tunisia · Jun 2024 – Jul 2024
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>
              Built a Laravel-based gym management platform to digitize memberships, subscriptions, and coach schedules.
            </li>
            <li>
              Boosted administrative efficiency by ~30% and reduced manual coordination time by 40%.
            </li>
            <li>
              Implemented secure role-based modules and automated scheduling workflows.
            </li>
          </ul>
        </div>
      </li>
      <li className="relative">
        <span className="absolute -left-[11px] mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_0_6px_rgba(74,222,128,0.3)]" />
        <div className="rounded-3xl border border-white/14 bg-white/6 p-5 shadow-soft backdrop-blur-xl dark:border-white/12 dark:bg-white/5">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgb(var(--muted))]">
            Education – Computer Science · AI &amp; Data
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>
              Engineering Program in Computer Science – AI &amp; Data Science (2023–Present).
            </li>
            <li>
              Bachelor&apos;s in Software Engineering and Computer Science (2020–2023).
            </li>
          </ul>
        </div>
      </li>
    </ol>
  );
}

function TechStackGrid() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        <TechStackPanel title="Languages" items={skillGroups.programming} />
        <TechStackPanel title="Web & Back-End" items={skillGroups.web} />
        <TechStackPanel title="Data & MLOps" items={[...skillGroups.dataAi, ...skillGroups.dataEngineering]} />
        <TechStackPanel title="Tools & Other" items={skillGroups.tools} />
      </div>

      <GlassCard className="mt-2 divide-y divide-white/10 p-0 text-sm text-[rgb(var(--text-secondary))]">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
            Certifications
          </span>
        </div>
        <a
          href="/assets/certifications/images/ibm-python-ds-ai-dev.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-white/5"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white/5">
              <img
                src="/assets/certifications/logos/ibm.svg"
                alt="IBM logo"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/90">
              Python for Data Science, AI &amp; Development — IBM
            </span>
          </div>
          <span className="text-xs text-white/60">View PDF</span>
        </a>
        <a
          href="/assets/certifications/images/tableau-fundamentals.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-white/5"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white/5">
              <img
                src="/assets/certifications/logos/uc.svg"
                alt="University of California logo"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/90">
              Fundamentals of Visualization with Tableau — University of California
            </span>
          </div>
          <span className="text-xs text-white/60">View PDF</span>
        </a>
        <a
          href="/assets/certifications/images/ibm-what-is-data-science.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-white/5"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white/5">
              <img
                src="/assets/certifications/logos/ibm.svg"
                alt="IBM logo"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/90">
              What is Data Science? — IBM
            </span>
          </div>
          <span className="text-xs text-white/60">View PDF</span>
        </a>
      </GlassCard>
    </div>
  );
}

type TechStackPanelProps = {
  title: string;
  items: readonly string[];
};

function TechStackPanel({ title, items }: TechStackPanelProps) {
  return (
    <GlassCard className="p-5">
      <h3 className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgb(var(--muted))]">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/90 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-white/10"
          >
            {item}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

function ContactSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
      <GlassCard className="p-6 text-sm text-[rgb(var(--text-secondary))]">
        <h3 className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgb(var(--muted))]">
          Direct details
        </h3>
        <dl className="mt-3 space-y-1.5">
          <div className="flex gap-2">
            <dt className="w-20 text-xs text-[rgb(var(--muted))]">Email</dt>
            <dd className="font-medium text-[rgb(var(--text))]">
              <a href={`mailto:${owner.email}`} className="underline-offset-4 hover:underline">
                {owner.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-20 text-xs text-[rgb(var(--muted))]">Phone</dt>
            <dd className="font-medium text-[rgb(var(--text))]">{owner.phone}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-20 text-xs text-[rgb(var(--muted))]">Location</dt>
            <dd className="font-medium text-[rgb(var(--text))]">{owner.location}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-20 text-xs text-[rgb(var(--muted))]">LinkedIn</dt>
            <dd className="font-medium text-[rgb(var(--text))]">
              <a
                href="https://www.linkedin.com/in/mohamed-ali-bouzir"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                View profile
              </a>
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-[rgb(var(--muted))]">
          Prefer async? Email is perfect for briefs. For complex projects, we can follow up with a short call.
        </p>
      </GlassCard>

      {/* Contact form removed per request; keeping layout ready if reintroduced later */}
    </div>
  );
}
