"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { SkillGroupCard } from "./SkillGroupCard";

export function SkillsSection() {
  return (
    <section id="skills" className="section px-4 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">Tech Stack</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Tools I use to ship AI-native products.</h2>
          <p className="text-base text-white/80">
            A stack spanning Python, web frameworks, data science libraries, and MLOps tooling used to design, deploy, and
            monitor AI systems end-to-end.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            >
              <SkillGroupCard group={group} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
