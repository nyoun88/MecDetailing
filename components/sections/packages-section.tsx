import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/sections/package-card";
import { packages } from "@/data/packages";

export function PackagesSection() {
  return (
    <section id="packages" className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="Choose Your Level Of Protection"
          body="From essential protection to our ultimate ceramic coating system, we'll help you choose the right package for your vehicle."
        />

        <div className="mt-16 grid items-start gap-6 md:grid-cols-2">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.1} className={pkg.featured ? "md:pt-0" : "md:pt-20"}>
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-14 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-ink-muted">
            Every vehicle is different. Final pricing depends on vehicle
            size, paint condition and the level of preparation required.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/quote" showArrow>
              Not Sure Which Package? Get A Free Quote
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
