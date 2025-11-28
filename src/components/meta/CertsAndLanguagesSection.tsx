"use client";

import { motion } from "framer-motion";
import { certifications, languages } from "@/data/certifications";

export function CertsAndLanguagesSection() {
  return (
    <section id="certifications" className="section px-4 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-10 text-white">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">Credibility</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Certifications & Languages.</h2>
          <p className="text-base text-white/80">
            Proof points that show ongoing learning in AI and data plus the languages I collaborate in.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.85)] backdrop-blur-2xl dark:border-white/15 lg:col-span-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">Certifications</p>
            <ul className="mt-4 space-y-4">
              {certifications.map((cert) => (
                <li key={cert.id} className="space-y-1 text-sm text-white/80">
                  <p className="font-semibold text-white">{cert.title}</p>
                  <p className="text-white/60">
                    {cert.issuer} — {cert.date}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.85)] backdrop-blur-2xl dark:border-white/15"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">Languages</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {languages.map((language) => (
                <span
                  key={language.id}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85"
                >
                  {language.name} · {language.proficiency}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
