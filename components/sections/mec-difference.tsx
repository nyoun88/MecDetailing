import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { differencePoints } from "@/data/benefits";

export function MecDifference() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="The MEC Standard" heading="Why MEC" />

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {differencePoints.map((point, i) => (
            <Reveal key={point.index} delay={i * 0.08} className="border-t border-border pt-8">
              <span className="font-mono text-sm text-accent">{point.index}</span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink">
                {point.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-muted">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
