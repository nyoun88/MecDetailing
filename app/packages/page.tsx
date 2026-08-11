import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/packages-hero";
import { PackageCard } from "@/components/sections/package-card";
import { VariantPricing } from "@/components/sections/variant-pricing";
import { Upgrades } from "@/components/sections/upgrades";
import { WhyGtechniq } from "@/components/sections/why-gtechniq";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { packages } from "@/data/packages";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Ceramic Coating Packages",
  description:
    "Compare MEC Detailing's Essential and Ultimate Gtechniq ceramic coating packages — inclusions, warranty terms and optional upgrades for Brisbane vehicles.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ceramic Protection"
        heading="Ceramic Coating Packages"
        body="Professional Gtechniq ceramic protection, installed with precision and tailored to your vehicle."
        image={images.packagesHero}
      />

      <section className="bg-bg py-24 md:py-32">
        <Container>
          <div className="grid items-start gap-6 md:grid-cols-2">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.1} className={pkg.featured ? "" : "md:pt-20"}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <VariantPricing />
      <Upgrades />
      <WhyGtechniq />
      <ComparisonTable />

      <section className="bg-bg-secondary py-24 md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
              Ready to protect
              <br />
              your vehicle?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
              Tell us about your vehicle and we&rsquo;ll recommend the right
              package.
            </p>
            <div className="mt-9">
              <Button href="/quote" size="lg" showArrow>
                Get My Free Quote
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
