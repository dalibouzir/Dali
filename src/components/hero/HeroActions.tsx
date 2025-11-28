type HeroAction = {
  label: string;
  href: string;
  variant?: "solid" | "ghost";
  external?: boolean;
};

type HeroActionsProps = {
  primary: HeroAction[];
  secondary: HeroAction | null;
};

export function HeroActions({ primary, secondary }: HeroActionsProps) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        {primary.map(({ label, href, variant = "solid", external }) => (
          <a
            key={label}
            href={href}
            className={`inline-flex flex-1 min-w-[160px] items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              variant === "solid"
                ? "border-transparent bg-cyan-400/90 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300"
                : "border-[rgb(var(--surface-muted)/0.7)] bg-[rgb(var(--surface))] text-[rgb(var(--text))] hover:border-[rgb(var(--brand)/0.45)]"
            }`}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {label}
          </a>
        ))}
      </div>
      {secondary ? (
        <a
          href={secondary.href}
          target={secondary.external ? "_blank" : undefined}
          rel={secondary.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--text-secondary))] underline-offset-4 hover:text-cyan-200 hover:underline"
        >
          {secondary.label}
          <span aria-hidden>↗</span>
        </a>
      ) : null}
    </div>
  );
}
