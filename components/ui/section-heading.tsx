import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

const sizeClasses = {
  lg: "text-[clamp(2.5rem,6vw,5.25rem)]",
  md: "text-[clamp(2.1rem,5vw,3.75rem)]",
};

export function SectionHeading({
  eyebrow,
  index,
  heading,
  body,
  align = "left",
  headingAs: HeadingTag = "h2",
  size = "lg",
  className,
  bodyClassName,
}: {
  eyebrow?: string;
  index?: string;
  heading: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
  headingAs?: "h1" | "h2" | "h3";
  size?: "lg" | "md";
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow index={index} className={cn("mb-5", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <HeadingTag
        className={cn(
          "text-balance font-bold uppercase leading-[0.98] tracking-tight text-ink",
          sizeClasses[size],
        )}
      >
        {heading}
      </HeadingTag>
      {body && (
        <p
          className={cn(
            "mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg",
            align === "center" && "mx-auto",
            bodyClassName,
          )}
        >
          {body}
        </p>
      )}
    </Reveal>
  );
}
