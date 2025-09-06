import { ReactNode } from "react";
import TypewriterOnView from "./TypewriterOnView";

export default function Section({ id, title, blurb, children, full = true, typeBlurb = true }: { id: string; title: string; blurb?: string; children: ReactNode; full?: boolean; typeBlurb?: boolean }) {
  return (
    <section id={id} className={`section ${full ? "container-wide" : "container-narrow"}`}>
      <div className="h-6 -mt-6 mb-8 opacity-60" aria-hidden>
        <div className="h-px w-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20" />
      </div>
      <h2 className="section-title title-gradient">{title}</h2>
      {blurb && (
        typeBlurb ? (
          <TypewriterOnView text={blurb} className="-mt-2 mb-6 text-sm text-zinc-300 max-w-3xl" />
        ) : (
          <p className="-mt-2 mb-6 text-sm text-zinc-300 max-w-3xl">{blurb}</p>
        )
      )}
      {children}
    </section>
  );
}
