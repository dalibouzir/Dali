import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionBaseProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  headingTag?: "h2" | "h3";
};

type SectionProps = SectionBaseProps &
  Omit<ComponentPropsWithoutRef<"section">, keyof SectionBaseProps | "children">;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  containerClassName,
  className,
  headingTag: HeadingTag = "h2",
  ...rest
}: SectionProps) {
  const headingId = `${id}-heading`;
  const descriptionId = description ? `${id}-description` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className={cx("section", className)}
      {...rest}
    >
      <div className={cx("container-wide", containerClassName)}>
        <div className="mb-8 max-w-3xl space-y-3">
          {eyebrow ? (
            <p className="badge" data-emphasis="brand">
              {eyebrow}
            </p>
          ) : null}
          <HeadingTag id={headingId} className="section-title">
            {title}
          </HeadingTag>
          {description ? (
            <div id={descriptionId} className="section-lede">
              {description}
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
