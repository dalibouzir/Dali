type SkillClusterProps = {
  title: string;
  items: readonly string[];
};

export function SkillCluster({ title, items }: SkillClusterProps) {
  return (
    <div className="rounded-[2.25rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface))] p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-[rgb(var(--text))]">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-[rgb(var(--text))] sm:text-sm">
        {items.map((item) => (
          <span key={item} className="chip" data-tone="soft">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
