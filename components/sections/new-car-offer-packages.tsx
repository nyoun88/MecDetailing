import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { NewCarOfferPackageCard } from "@/components/sections/new-car-offer-package-card";
import { newCarPackages } from "@/data/new-car-protection";
import { formatCurrency } from "@/lib/utils";

// Read-only reuse of the same package data the existing
// /new-car-protection page uses — real, current pricing, never
// duplicated or hardcoded here.
const [signature, platinum] = newCarPackages;
const platinumStepUp = platinum.priceFrom - signature.priceFrom;

export function NewCarOfferPackages() {
  return (
    <section id="packages" className="scroll-mt-24 bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="Choose How You Want To Protect Your New Car"
          body="Three carefully engineered protection packages. One goal — keeping your new vehicle looking its best."
        />

        <Reveal delay={0.08} className="mx-auto mt-4 max-w-xl text-center">
          <p className="text-sm text-ink-muted">
            Platinum steps up to Crystal Serum Ultra for {formatCurrency(platinumStepUp)} more
            than Signature. Ultimate Shield adds EXO 5 for the highest level of protection we
            install.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-6 md:grid-cols-3">
          {newCarPackages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.1} className={pkg.featured ? "" : "md:pt-10"}>
              <NewCarOfferPackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
