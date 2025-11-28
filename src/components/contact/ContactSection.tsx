"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/config/site";

const projectTypes = ["AI Assistant", "Data Platform", "Full-Stack Build", "MLOps Audit", "Other"] as const;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <section id="contact" className="section px-4 sm:px-6">
      <div className="mx-auto w-full max-w-6xl space-y-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/60 p-8 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.9)] backdrop-blur-2xl dark:border-white/15 sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.65fr_0.35fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ready to collaborate on AI-native products and resilient MLOps.
              </h2>
              <p className="text-base text-white/75">
                Whether you’re shipping your first AI feature or hardening an existing system, I can help with data platforms,
                model pipelines, and measurable end-to-end delivery.
              </p>
              <dl className="mt-6 space-y-3 text-sm text-white/80">
                <div className="flex gap-3">
                  <dt className="w-20 text-xs uppercase tracking-[0.3em] text-white/50">Location</dt>
                  <dd>Monastir, Tunisia</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 text-xs uppercase tracking-[0.3em] text-white/50">Email</dt>
                  <dd>
                    <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:text-cyan-200 hover:underline">
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 text-xs uppercase tracking-[0.3em] text-white/50">Phone</dt>
                  <dd>{SITE.phone}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 text-xs uppercase tracking-[0.3em] text-white/50">Portfolio</dt>
                  <dd>
                    <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-cyan-200 hover:underline">
                      {SITE.url.replace(/^https?:\/\//, "")}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-cyan-400/90 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                >
                  Hire me
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-200/60"
                >
                  View projects
                </a>
              </div>
              <p className="text-sm text-white/60">
                Outside of work, I enjoy playing piano, exploring digital media, and following football with a competitive team
                spirit.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-200/60 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-200/60 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-type" className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Project Type
                </label>
                <select
                  id="contact-type"
                  name="projectType"
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white focus:border-cyan-200/60 focus:outline-none"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about the product, constraints, and goals..."
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-200/60 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full border border-transparent bg-cyan-400/90 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Send message
              </button>
              {status === "submitted" ? (
                <p className="text-xs text-white/70">Thanks! I&apos;ll reply quickly with a short road-mapping note.</p>
              ) : null}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
