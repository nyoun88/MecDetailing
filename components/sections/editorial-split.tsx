import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { cn } from "@/lib/utils";
import type { WhyMecSection } from "@/data/why-mec";

export function EditorialSplit({
  section,
  reverse,
}: {
  section: WhyMecSection;
  reverse?: boolean;
}) {
  return (
    <section className="border-b border-border py-20 last:border-b-0 md:py-28">
      <Container
        className={cn(
          "grid items-center gap-12 md:grid-cols-2 md:gap-16",
        )}
      >
        <Reveal className={cn(reverse && "md:order-2")}>
          <ImagePlaceholder image={section.image} className="aspect-[4/5] w-full" />
        </Reveal>

        <Reveal delay={0.1} className={cn(reverse && "md:order-1")}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {section.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-ink">
            {section.title}
          </h2>
          <div className="mt-6 space-y-4">
            {section.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
