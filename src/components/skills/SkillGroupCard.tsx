import type { SkillGroup } from "@/data/skills";

type SkillGroupCardProps = {
  group: SkillGroup;
};

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 text-white shadow-[0_25px_70px_-40px_rgba(15,23,42,0.85)] backdrop-blur-2xl dark:border-white/15">
      <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200">{group.title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span key={item} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
