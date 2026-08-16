import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { NewCarPackageCard } from "@/components/sections/new-car-package-card";
import { newCarPackages } from "@/data/new-car-protection";

export function NewCarPackages() {
  return (
    <section id="packages" className="scroll-mt-24 bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="Choose Your Level Of Protection"
          body="Three carefully engineered protection packages. One goal — keeping your new vehicle looking its best."
        />

        <div className="mt-16 grid items-start gap-6 md:grid-cols-3">
          {newCarPackages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.1} className={pkg.featured ? "" : "md:pt-10"}>
              <NewCarPackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
