import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading align="center" className="mx-auto" heading="From Quote To Coating" />

        <div className="mt-16 grid gap-0 md:grid-cols-5 md:gap-6">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 0.08}
              className="relative border-l border-border py-6 pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-8"
            >
              <span className="font-mono text-sm text-accent">{step.number}</span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 pr-2 text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
