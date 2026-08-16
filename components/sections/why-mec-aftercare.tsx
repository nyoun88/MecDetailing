import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { whyMecAftercarePoints } from "@/data/why-mec";

export function WhyMecAftercare() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading
          size="md"
          heading="Protection Doesn't End At Handover"
          body="A ceramic coating is an investment in your vehicle. Proper maintenance is what keeps that investment performing and looking its best."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {whyMecAftercarePoints.map((point, i) => (
            <Reveal key={point.id} delay={i * 0.08} className="border-t border-border pt-6">
              <h3 className="text-lg font-bold text-ink">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
