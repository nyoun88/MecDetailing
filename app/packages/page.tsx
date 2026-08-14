import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/packages-hero";
import { PackageCard } from "@/components/sections/package-card";
import { Upgrades } from "@/components/sections/upgrades";
import { WhyGtechniq } from "@/components/sections/why-gtechniq";
import { ProductComparison } from "@/components/sections/product-comparison";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { packages } from "@/data/packages";
import { images } from "@/data/images";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Ceramic Coating Packages",
  description:
    "Compare MEC Detailing's Essential and Ultimate Gtechniq ceramic coating packages — inclusions, warranty terms and optional upgrades for Brisbane vehicles.",
  alternates: { canonical: "/packages" },
};

// Service + Offer structured data — one entry per package, using the same
// `packages` array PackageCard renders below so pricing shown to Google
// always matches what's on the page. Lets eligible queries surface price
// info directly in search results.
const packagesSchema = packages.map((pkg) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Ceramic Coating",
  name: pkg.name,
  description: pkg.description,
  provider: {
    "@type": "AutoDetailing",
    name: business.name,
    url: business.siteUrl,
  },
  areaServed: {
    "@type": "City",
    name: "Brisbane",
  },
  offers: {
    "@type": "Offer",
    price: pkg.priceFrom,
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
    url: `${business.siteUrl}/packages`,
  },
}));

export default function PackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesSchema) }}
      />
      <PageHero
        eyebrow="Ceramic Protection"
        heading="Ceramic Coating Packages"
        body="Professional Gtechniq ceramic protection, installed with precision and tailored to your vehicle."
        image={images.packagesHero}
        imagePosition="66% 58%"
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

      <Upgrades />
      <WhyGtechniq />
      <ProductComparison />
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
