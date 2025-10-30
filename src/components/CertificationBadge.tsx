type Props = {
  name: string;
  issuer: string;
  date: string;
};

export function CertificationBadge({ name, issuer, date }: Props) {
  const displayDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

  return (
    <div className="flex flex-col gap-1 rounded-3xl border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] px-5 py-4 text-sm shadow-soft">
      <span className="text-[rgb(var(--text))] font-semibold">{name}</span>
      <span className="text-xs text-[rgb(var(--text-secondary))]">
        {issuer} • {displayDate}
      </span>
    </div>
  );
}
