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
        <div className="card p-6">
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
        blurb="I ship end-to-end, data-driven features: from data collection and pipelines to modeling and UIs/APIs. I balance scientific rigor with product sense, metrics, and collaborative delivery — autonomous, organized, rigorous, and team-oriented."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-3 text-sm text-zinc-300">
            <div className="badge">Why I fit</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Owns pipeline → model → product</li>
              <li>Clear metrics and iterative delivery</li>
              <li>Strong Python + ML stack</li>
              <li>Communicates trade-offs effectively</li>
              <li>Certifications: IBM Python DS/AI, IBM What is DS, Tableau Fundamentals</li>
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
        blurb="I reproduce papers, design controlled experiments, and communicate results clearly. Comfortable with PyTorch, VAEs/diffusion, and rigorous evaluation. Strong documentation and collaboration skills."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-3 text-sm text-zinc-300">
            <div className="badge">Why I fit</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Paper reproduction and baselines</li>
              <li>Thoughtful experiment design</li>
              <li>PyTorch, VAE/Diffusion comfort</li>
              <li>Clear reporting + notebooks</li>
            </ul>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            {mlResearch.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard {...p} showMedia={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Development */}
      <Section
        id="development"
        title="Software Development"
        blurb="I build pragmatic web apps with clean backends (Laravel/Django/FastAPI) and usable UIs (React). I prioritize maintainability, security, and performance, and I communicate trade-offs clearly."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-3 text-sm text-zinc-300">
            <div className="badge">Why I fit</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>RESTful backends with auth + security</li>
              <li>React UIs with a11y and performance</li>
              <li>Clean code, maintainable structure</li>
              <li>Pragmatic, delivery-focused</li>
            </ul>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            {development.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard {...p} showMedia={p.title.toLowerCase().includes("powergym")} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* MLOps */}
      <Section
        id="mlops"
        title="MLOps & Systems"
        blurb="I productionize ML: FastAPI services, Dockerized deployments, experiment tracking (MLflow), and logging/monitoring with Elastic/Kibana. Organized, rigorous, and effective in cross-functional environments."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-3 text-sm text-zinc-300">
            <div className="badge">Why I fit</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Deploys + monitors ML services</li>
              <li>MLflow tracking + governance</li>
              <li>Docker, Elastic/Kibana familiarity</li>
              <li>Reliability + observability mindset</li>
            </ul>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            {mlops.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard {...p} showMedia={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="card p-6">
          <p className="text-zinc-300">
            Let’s connect about opportunities in Data Science, ML, Backend, or MLOps.
          </p>
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
