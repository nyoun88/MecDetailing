import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";
import { detailingServices } from "@/data/detailing";

/**
 * A scannable decision guide for customers who don't know detailing
 * terminology — each question links down to the matching service card in
 * DetailingPackages via its id, so choosing a service and viewing its
 * price/inclusions is a single click.
 */
export function DetailingServiceFinder() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading heading="Which Detail Is Right For Your Vehicle?" />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {detailingServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.06} className="border-t border-border pt-6">
              <p className="text-lg font-bold uppercase leading-snug tracking-tight text-ink">
                {service.matchQuestion}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                {service.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{service.matchAnswer}</p>
              <ArrowLink href={`#${service.id}`} className="mt-5">
                View {service.name}
              </ArrowLink>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
