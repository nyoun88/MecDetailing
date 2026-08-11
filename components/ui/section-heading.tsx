import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  headingAs: HeadingTag = "h2",
  className,
  bodyClassName,
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
  headingAs?: "h1" | "h2" | "h3";
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <HeadingTag className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.08] tracking-tight text-ink">
        {heading}
      </HeadingTag>
      {body && (
        <p className={cn("mt-5 text-balance text-base leading-relaxed text-ink-muted md:text-lg", bodyClassName)}>
          {body}
        </p>
      )}
    </Reveal>
  );
}
