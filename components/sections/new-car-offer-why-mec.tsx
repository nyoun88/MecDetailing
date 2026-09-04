import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { newCarTrustPoints } from "@/data/new-car-protection";

/**
 * Trust section — read-only reuse of newCarTrustPoints (the same
 * legitimate business facts the existing /new-car-protection page uses,
 * from data/business.ts / data/why-mec.ts). Nothing new is asserted.
 */
export function NewCarOfferWhyMec() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Why MEC"
          heading="Not All Ceramic Coating Installations Are The Same."
          body="Your vehicle deserves more than a coating. It deserves professional preparation, premium products and a protection system applied correctly from day one."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newCarTrustPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.06} className="border-t border-border pt-6">
              <h3 className="text-lg font-bold text-ink">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
