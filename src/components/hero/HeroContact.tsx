type HeroContactProps = {
  location: string;
  email: string;
  phone: string;
  secondaryPhone?: string;
};

export function HeroContact({ location, email, phone, secondaryPhone }: HeroContactProps) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface))] p-5 text-sm text-[rgb(var(--text-secondary))] shadow-inner shadow-indigo-500/10">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">Contact</p>
      <dl className="mt-3 space-y-2">
        <div className="flex items-start gap-2">
          <dt className="w-20 text-xs uppercase tracking-wide text-[rgb(var(--muted))]">Location</dt>
          <dd className="text-[rgb(var(--text))]">{location}</dd>
        </div>
        <div className="flex items-start gap-2">
          <dt className="w-20 text-xs uppercase tracking-wide text-[rgb(var(--muted))]">Email</dt>
          <dd>
            <a
              href={`mailto:${email}`}
              className="underline-offset-4 text-[rgb(var(--text))] transition hover:text-cyan-200 hover:underline"
            >
              {email}
            </a>
          </dd>
        </div>
        <div className="flex items-start gap-2">
          <dt className="w-20 text-xs uppercase tracking-wide text-[rgb(var(--muted))]">Phone</dt>
          <dd className="space-y-1">
            <p className="text-[rgb(var(--text))]">{phone}</p>
            {secondaryPhone ? (
              <p className="text-xs text-[rgb(var(--text-secondary))]">{secondaryPhone}</p>
            ) : null}
          </dd>
        </div>
      </dl>
    </div>
  );
}
