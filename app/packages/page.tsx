import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/packages-hero";
import { PackageCard } from "@/components/sections/package-card";
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
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2" id="package-cards">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.1}>
                <div id={pkg.id} className="scroll-mt-28">
                  <PackageCard pkg={pkg} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Upgrades />
      <WhyGtechniq />
      <ComparisonTable />

      <section className="bg-bg-secondary py-24 md:py-32">
        <Container className="text-center">
          <Reveal className="mx-auto max-w-xl">
            <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.08] tracking-tight text-ink">
              Ready to protect your vehicle?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Tell us about your vehicle and we&rsquo;ll recommend the right
              package.
            </p>
            <div className="mt-8 flex justify-center">
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
