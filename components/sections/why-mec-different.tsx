import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { whyMecDifferentPoints } from "@/data/why-mec";

export function WhyMecDifferent() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          size="md"
          heading="Not Just Another Ceramic Coating Installer"
          body="The coating is only one part of the protection system. Our process, preparation and attention to detail are what determine the result."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyMecDifferentPoints.map((point, i) => (
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
