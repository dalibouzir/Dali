type ProjectFiltersProps<Filter extends string> = {
  filters: readonly Filter[];
  activeFilter: Filter;
  onChange: (value: Filter) => void;
};

export function ProjectFilters<Filter extends string>({ filters, activeFilter, onChange }: ProjectFiltersProps<Filter>) {
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
