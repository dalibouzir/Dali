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
  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero / About */}
      <Section id="about" title="About Me" typeBlurb={false}>
        <div className="card p-4 sm:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="md:w-44 md:self-start">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-zinc-800">
                <Image src="/images/Dali.jpeg" alt="Mohamed Ali" fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-semibold text-white">
                {profile.name}
              </h1>
              <p className="mt-1 text-cyan-400">{profile.title}</p>
              <p className="mt-4 text-zinc-300">{profile.intro}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.skills.map((s) => (
                  <span key={s} className="badge">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <a className="btn" href={`mailto:${profile.email}`}>✉️ Email</a>
                {profile.github && (
                  <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                    💻 GitHub
                  </a>
                )}
                {profile.linkedin && (
                  <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                    🔗 LinkedIn
                  </a>
                )}
                {profile.cv?.en && (
                  <Link className="btn btn-accent" href={profile.cv.en} target="_blank">
                    ⬇️ CV (EN)
                  </Link>
                )}
                {profile.cv?.fr && (
                  <Link className="btn btn-accent" href={profile.cv.fr} target="_blank">
                    ⬇️ CV (FR)
                  </Link>
                )}
              </div>
            </div>
            <div className="md:w-64">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300">
                <div>📍 {profile.location}</div>
                <div>📞 {profile.phone}</div>
                <div>📧 {profile.email}</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Data Science & AI */}
      <Section
        id="data-ai"
        title="Data Science & AI"
        blurb="I ship end-to-end ML features: collection → cleaning → modeling → serving → monitoring. I balance scientific rigor with production constraints and always tie models to metrics."
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
        blurb="Validated foundations in data science and visualization. Click to view certificates (images or PDFs)."
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
        blurb="I reproduce ML papers, design controlled experiments, and explore advanced generative approaches. Focus areas: speech, vision, time series, medical data."
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
        blurb="I build pragmatic, secure web applications with clean backends and usable UIs. I prioritize maintainability, scalability, and performance."
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
        blurb="I productionize ML systems with modern tooling: APIs, Dockerized deployments, experiment tracking, and observability."
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
      <Section id="contact" title="Contact">
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
    </div>
  );
}
