import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    title: "Accredited Application",
    description:
      "Gtechniq products are installed by accredited applicators trained in the correct preparation and application standards.",
  },
  {
    title: "Manufacturer-Backed Warranty",
    description:
      "Each system carries a Gtechniq warranty, giving you a documented standard the coating is expected to meet.",
  },
  {
    title: "A Complete Product Range",
    description:
      "From paint to wheels, glass and interior, Gtechniq's range lets us protect the whole vehicle with one coherent system.",
  },
];

export function WhyGtechniq() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading
          size="md"
          eyebrow="The Product"
          heading="Why Gtechniq?"
          body="We install Gtechniq's professional ceramic coating systems — an established range within the professional detailing industry, applied here under Gtechniq accreditation."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08} className="border-t border-border pt-6">
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
