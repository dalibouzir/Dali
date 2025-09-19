import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { dataAI, mlResearch, development, mlops } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/RevealOnScroll";
import CertificateCard from "@/components/CertificateCard";
import { certifications } from "@/data/certifications";

export default function Home() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#data-ai", label: "Data & AI" },
    { href: "#ml-research", label: "ML Research" },
    { href: "#development", label: "Development" },
    { href: "#mlops", label: "MLOps" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    profile.linkedin && { label: "LinkedIn", href: profile.linkedin },
    profile.github && { label: "GitHub", href: profile.github },
    profile.x && { label: "X", href: profile.x },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <div className="min-h-screen">
      <NavBar />
      <section id="about" className="container-wide pt-20 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
              {profile.title}
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-[52px]">
              {profile.headline}
              <span className="block text-[color:var(--accent-strong)]">{profile.headlineAccent}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
              {profile.subheadline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
              {profile.skills.map((skill) => (
                <span key={skill} className="chip" data-highlight="true">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-zinc-500">
              <span className="badge">Toolbelt</span>
              <div className="flex flex-wrap gap-2 text-[11px] normal-case tracking-normal text-zinc-400 sm:text-xs">
                {profile.toolbelt.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 px-3 py-1 text-zinc-400">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-accent" href={`mailto:${profile.email}`}>
                ✉️ Email
              </a>
              {profile.linkedin && (
                <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                  🔗 LinkedIn
                </a>
              )}
              {profile.github && (
                <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                  💻 GitHub
                </a>
              )}
              {profile.cv?.en && (
                <Link className="btn" href={profile.cv.en} target="_blank">
                  ⬇️ CV (EN)
                </Link>
              )}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="card overflow-hidden p-0">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/Dali.jpeg"
                  alt="Mohamed Ali Bouzir portrait"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 70vw, 320px"
                />
              </div>
              <div className="border-t border-white/5 px-6 py-5 text-sm text-zinc-300">
                <p className="text-sm font-medium uppercase tracking-[0.26em] text-zinc-500">
                  Available for
                </p>
                <p className="mt-2 text-base text-zinc-200">
                  Product-minded data roles · ML & AI engineering · Full-stack delivery
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p>📍 {profile.location}</p>
                  <p>📧 {profile.email}</p>
                  <p>📞 {profile.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Science & AI */}
      <Section
        id="data-ai"
        title="Data Science & AI"
        blurb="Design ML features that stand up in production — from feature store to serving, with clear metrics on the win."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-3 text-sm text-zinc-300">
            <div className="badge">Why I fit</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Owns pipeline → model → product lifecycle</li>
              <li>Strong Python + ML stack incl. deep learning</li>
              <li>Clear metrics mindset (accuracy, latency, adoption)</li>
              <li>Communicates trade-offs across tech + product</li>
              <li>Certified: IBM Python DS/AI, IBM “What is DS?”, Tableau</li>
            </ul>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            {dataAI.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard {...p} showMedia={p.title.includes("AFFA")} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section
        id="certifications"
        title="Certifications"
        blurb="External validation of core analytics, ML, and visualization chops that back up the project work."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c) => (
            <Reveal key={c.title}>
              <CertificateCard {...c} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ML Research */}
      <Section
        id="ml-research"
        title="Machine Learning Research"
        blurb="Prototype with cutting-edge methods to stretch limited data, validate claims, and hand teams practical takeaways."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            {mlResearch.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard {...p} showMedia={false} />
              </Reveal>
            ))}
          </div>
          <div className="space-y-3 text-sm text-zinc-300">
            <div className="badge">Why I fit</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Experienced in paper reproduction & baselines</li>
              <li>Skilled in PyTorch, VAE, diffusion models</li>
              <li>Rigorous experiment design and reporting</li>
              <li>Comfortable with notebooks + documentation</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Development */}
      <Section
        id="development"
        title="Software Development"
        blurb="Launch full-stack products that blend reliable backends with crisp UX, ready for real customers and future iterations."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-3 text-sm text-zinc-300">
            <div className="badge">Why I fit</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>RESTful backends with auth + security best practices</li>
              <li>React UIs with performance + accessibility</li>
              <li>Clean, modular, delivery-focused code</li>
              <li>Balances client needs vs technical constraints</li>
            </ul>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            {development.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard
                  {...p}
                  showMedia={
                    p.title.toLowerCase().includes("powergym") ||
                    p.title.toLowerCase().includes("therapist")
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* MLOps */}
      <Section
        id="mlops"
        title="MLOps & Systems"
        blurb="Harden ML services with deployments, tracking, and observability so models keep pace long after launch day."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 gap-6 order-2 lg:order-1">
            {mlops.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard {...p} showMedia={false} />
              </Reveal>
            ))}
          </div>
          <div className="space-y-3 text-sm text-zinc-300 order-1 lg:order-2">
            <div className="badge">Why I fit</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Deployed & monitored ML services in real environments</li>
              <li>Experience with MLflow (params, metrics, artifacts)</li>
              <li>ElasticSearch + Kibana dashboards for monitoring</li>
              <li>Reliability, reproducibility, governance focused</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title="Contact"
        blurb="Ready to discuss product-minded data work, rapid ML prototypes, or hands-on delivery support? Drop a line."
      >
        <div className="card p-6">
          <p className="text-zinc-300">Let’s connect about opportunities in Data Science, Machine Learning, Backend, or MLOps.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a className="btn btn-accent" href={`mailto:${profile.email}?subject=Hello%20Mohamed%20Ali`}>✉️ Email Me</a>
            {profile.linkedin && (
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
            )}
            {profile.github && (
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">💻 GitHub</a>
            )}
          </div>

          {/* Simple contact form using mailto */}
          <ContactForm />
        </div>
      </Section>

      <footer className="mt-24 border-t border-white/5 bg-black/20">
        <div className="container-wide flex flex-col gap-8 py-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Mohamed Ali Bouzir</p>
            <p className="text-lg font-semibold text-white">Building data-led products that delight stakeholders and users alike.</p>
            <p className="text-sm text-zinc-400">Based in {profile.location}. Available for remote or hybrid collaboration.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm text-zinc-300 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Navigate</p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a className="transition hover:text-white" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Contact</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a className="transition hover:text-white" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
                    {profile.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Social</p>
              <ul className="mt-3 space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a className="transition hover:text-white" href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="container-wide flex flex-col gap-2 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Mohamed Ali Bouzir. All rights reserved.</span>
            <span>Crafted with Next.js, Tailwind, and a love for measurable outcomes.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
