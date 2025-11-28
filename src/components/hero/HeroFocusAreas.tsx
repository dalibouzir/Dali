type HeroFocusAreasProps = {
  areas: string[];
};

export function HeroFocusAreas({ areas }: HeroFocusAreasProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {areas.map((area) => (
        <span
          key={area}
          className="rounded-full border border-[rgb(var(--surface-muted)/0.45)] bg-[rgb(var(--surface-muted)/0.35)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-secondary))] shadow-sm shadow-cyan-400/20"
        >
          {area}
        </span>
      ))}
    </div>
  );
}
