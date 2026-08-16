import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { DetailingServiceCard } from "@/components/sections/detailing-service-card";
import { detailingServices } from "@/data/detailing";

export function DetailingPackages() {
  return (
    <section id="services" className="scroll-mt-24 bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="Choose Your Detailing Service"
          body="Four services covering everything from a quick refresh to complete paint correction — priced individually, with ceramic coating available as the next step."
        />

        <div className="mt-16 grid items-start gap-6 sm:grid-cols-2">
          {detailingServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <DetailingServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-14 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-ink-muted">
            Final pricing depends on vehicle size and condition — confirmed
            at the time of quoting.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
