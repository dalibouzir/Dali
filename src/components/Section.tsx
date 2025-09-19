import { ReactNode } from "react";
import TypewriterOnView from "./TypewriterOnView";

export default function Section({
  id,
  title,
  blurb,
  children,
  full = true,
  typeBlurb = false,
}: {
  id: string;
  title: string;
  blurb?: string;
  children: ReactNode;
  full?: boolean;
  typeBlurb?: boolean;
}) {
  return (
    <section id={id} className={`section scroll-mt-24 sm:scroll-mt-32 ${full ? "container-wide" : "container-narrow"}`}>
      <div className="-mt-6 mb-10 h-6 opacity-70" aria-hidden>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <h2 className="section-title title-gradient">{title}</h2>
      {blurb && (
        <div className="section-lede">
          {typeBlurb ? (
            <TypewriterOnView text={blurb} className="text-sm sm:text-base" />
          ) : (
            <p>{blurb}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
