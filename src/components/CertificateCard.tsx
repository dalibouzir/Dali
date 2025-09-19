import Image from "next/image";

export default function CertificateCard({
  title,
  issuer,
  date,
  file,
  link,
  index,
  total,
}: {
  title: string;
  issuer: string;
  date?: string;
  file: string;
  link?: string;
  index?: number;
  total?: number;
}) {
  const isPdf = file.toLowerCase().endsWith(".pdf");
  const sequence = typeof index === "number" && typeof total === "number" ? `${String(index + 1).padStart(2, "0")}/${String(total).padStart(2, "0")}` : null;
  const viewHref = link || file;

  return (
    <article className="card relative overflow-hidden p-5 sm:p-6">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/10 via-transparent to-transparent opacity-80"
        aria-hidden
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
              {isPdf ? (
                <span>PDF</span>
              ) : (
                <Image
                  src={file}
                  alt={title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nI0MxQzRDNCcvPjwvc3ZnPg=="
                  sizes="64px"
                  quality={75}
                />
              )}
            </div>
            <div className="min-w-0 space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">{issuer}</p>
              <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
              {date && <p className="text-sm text-zinc-400">{date}</p>}
            </div>
          </div>
          {sequence && (
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.25em] text-white/70">
              {sequence}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            className="btn btn-accent"
            href={viewHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${title}`}
          >
            View Credential
          </a>
          <a className="btn" href={file} download aria-label={`Download ${title}`}>
            Download Copy
          </a>
        </div>
      </div>
    </article>
  );
}
