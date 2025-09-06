import Image from "next/image";

export default function CertificateCard({
  title,
  issuer,
  date,
  file,
  link,
}: {
  title: string;
  issuer: string;
  date?: string;
  file: string;
  link?: string;
}) {
  const isPdf = file.toLowerCase().endsWith(".pdf");
  return (
    <div className="card p-4 sm:p-5">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-20 sm:h-16 sm:w-24 overflow-hidden rounded-md border border-zinc-800 bg-zinc-900">
          {isPdf ? (
            <div className="h-full w-full grid place-items-center text-xs text-zinc-400">PDF</div>
          ) : (
            <Image src={file} alt={title} fill className="object-cover" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-white truncate">{title}</div>
          <div className="text-xs text-zinc-400 truncate">{issuer}{date ? ` • ${date}` : ""}</div>
          <div className="mt-2 flex gap-2">
            <a className="btn btn-accent" href={link || file} target="_blank" rel="noreferrer">View</a>
            <a className="btn" href={file} download>Download</a>
          </div>
        </div>
      </div>
    </div>
  );
}
