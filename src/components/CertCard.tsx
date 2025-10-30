import Image from "next/image";
import Link from "next/link";

export type CertCardProps = {
  title: string;
  issuer: string;
  date?: string;
  logo?: string;
  credentialUrl?: string;
  downloadUrl?: string;
  index?: number;
  total?: number;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function CertCard({
  title,
  issuer,
  date,
  logo,
  credentialUrl,
  downloadUrl,
  index,
  total,
}: CertCardProps) {
  const displayUrl = credentialUrl ?? downloadUrl ?? "#";
  const hasDownload = Boolean(downloadUrl);
  const sequence =
    typeof index === "number" && typeof total === "number"
      ? `${String(index + 1).padStart(2, "0")}·${String(total).padStart(2, "0")}`
      : null;

  return (
    <article className="group relative overflow-hidden rounded-[2.25rem] border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface))] p-5 shadow-soft transition hover:shadow-lift lg:p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-[rgb(var(--brand)/0.08)] blur-2xl transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-1 items-start gap-4">
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] bg-[rgb(var(--surface-muted)/0.3)]">
            {logo ? (
              <Image
                src={logo}
                alt={`${issuer} logo`}
                width={64}
                height={64}
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[rgb(var(--muted))]">
                {initials(issuer)}
              </span>
            )}
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgb(var(--muted))]">{issuer}</p>
            <h3 className="font-display text-lg font-semibold text-[rgb(var(--text))] sm:text-xl">{title}</h3>
            {date ? <p className="text-sm text-[rgb(var(--text-secondary))]">{date}</p> : null}
          </div>
        </div>
        {sequence ? (
          <span className="inline-flex h-10 items-center rounded-full border border-[rgb(var(--surface-muted)/0.55)] bg-[rgb(var(--surface-muted)/0.3)] px-4 text-xs font-semibold uppercase tracking-[0.32em] text-[rgb(var(--muted))]">
            {sequence}
          </span>
        ) : null}
      </div>

      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        <Link
          href={displayUrl}
          className="rounded-2xl bg-[rgb(var(--brand))] px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-lift"
          target={displayUrl.startsWith("http") ? "_blank" : undefined}
          rel={displayUrl.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={`View credential: ${title}`}
        >
          View credential
        </Link>
        {hasDownload ? (
          <Link
            href={downloadUrl ?? "#"}
            className="rounded-2xl border border-[rgb(var(--surface-muted)/0.6)] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] transition hover:border-[rgb(var(--brand)/0.45)]"
            aria-label={`Download credential: ${title}`}
          >
            Download copy
          </Link>
        ) : null}
      </div>
    </article>
  );
}
