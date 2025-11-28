type HeroHeaderProps = {
  label: string;
  name: string;
  titles: string[];
  valueStatement: string;
  paragraph: string;
  bullets: string[];
};

type HeroIdentityProps = {
  label: string;
  name: string;
  titles: string[];
};

export function HeroIdentity({ label, name, titles }: HeroIdentityProps) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">{label}</p>
      <div>
        <p className="text-3xl font-semibold text-[rgb(var(--text))] sm:text-[2.6rem] sm:leading-tight">{name}</p>
        {titles.map((title) => (
          <p key={title} className="text-lg font-medium text-[rgb(var(--text-secondary))] sm:text-xl">
            {title}
          </p>
        ))}
      </div>
    </div>
  );
}

type HeroNarrativeProps = {
  valueStatement: string;
  paragraph: string;
  bullets: string[];
};

export function HeroNarrative({ valueStatement, paragraph, bullets }: HeroNarrativeProps) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-lg font-semibold text-cyan-300">{valueStatement}</p>
        <p className="mt-2 text-base text-[rgb(var(--text-secondary))]">{paragraph}</p>
      </div>
      <ul className="space-y-2 text-sm text-[rgb(var(--text-secondary))]">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span aria-hidden className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HeroHeader({ label, name, titles, valueStatement, paragraph, bullets }: HeroHeaderProps) {
  return (
    <div className="space-y-5">
      <HeroIdentity label={label} name={name} titles={titles} />
      <HeroNarrative valueStatement={valueStatement} paragraph={paragraph} bullets={bullets} />
    </div>
  );
}
