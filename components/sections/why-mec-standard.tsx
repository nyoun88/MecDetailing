import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { whyMecStandardSteps } from "@/data/why-mec";

/**
 * Deliberately not the same sticky-heading + list pattern used by
 * Process/CeramicProcess/NewCarProcess elsewhere on the site — this is a
 * staggered grid on desktop (alternating row offset) that collapses to a
 * plain vertical stack on mobile, per the brief's explicit ask for a
 * distinct "elegant visual timeline" for this page.
 */
export function WhyMecStandard() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="The MEC Standard"
          body="Every vehicle follows a considered preparation and protection process designed around its condition, finish and intended use."
        />

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3 md:gap-y-0">
          {whyMecStandardSteps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 0.08}
              className={cn("border-t border-border pt-6", i >= 3 && "md:mt-20")}
            >
              <span className="font-mono text-3xl text-accent sm:text-4xl">{step.number}</span>
              <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted sm:text-base">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
