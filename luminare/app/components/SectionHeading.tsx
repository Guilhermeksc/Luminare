interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${align === "center" ? "text-center" : "text-left"}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--color-accent)]">
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl text-[color:var(--color-foreground)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-2xl text-base text-[color:var(--color-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
