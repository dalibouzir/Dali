type ProjectFiltersProps = {
  filters: readonly string[];
  activeFilter: string;
  onChange: (value: string) => void;
};

export function ProjectFilters({ filters, activeFilter, onChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = filter === activeFilter;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
              isActive
                ? "border-cyan-200/70 bg-cyan-200/10 text-white shadow-lg shadow-cyan-500/20"
                : "border-white/20 bg-white/5 text-white/70 hover:border-cyan-200/40"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
