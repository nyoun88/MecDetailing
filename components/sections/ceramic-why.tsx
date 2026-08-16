import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { whyCeramicBenefits } from "@/data/ceramic-page";

export function CeramicWhy() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading size="md" eyebrow="The Coating" heading="Why Ceramic Coating?" />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyCeramicBenefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.06} className="border-t border-border pt-6">
              <h3 className="text-lg font-bold text-ink">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {benefit.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
