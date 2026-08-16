import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { newCarTrustPoints } from "@/data/new-car-protection";

/**
 * Trust section making the case for MEC itself, not just the packages.
 * Every point here is already established elsewhere on the site
 * (data/business.ts, data/why-mec.ts) — see data/new-car-protection.ts.
 */
export function NewCarWhyMec() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          size="md"
          eyebrow="Why MEC"
          heading="Why Protect Your New Car With MEC?"
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
