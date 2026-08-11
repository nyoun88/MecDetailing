import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { cn } from "@/lib/utils";
import type { WhyMecSection } from "@/data/why-mec";

export function EditorialSplit({
  section,
  index,
  reverse,
}: {
  section: WhyMecSection;
  index?: string;
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
          <Eyebrow index={index}>{section.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-balance text-[clamp(1.9rem,4vw,3rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
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
