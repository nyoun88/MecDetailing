import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PageHero } from "@/components/sections/packages-hero";
import { PackageCard } from "@/components/sections/package-card";
import { CeramicWhy } from "@/components/sections/ceramic-why";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { ProtectionExtras } from "@/components/sections/protection-extras";
import { CeramicProcess } from "@/components/sections/ceramic-process";
import { CeramicFaq } from "@/components/sections/ceramic-faq";
import { packages } from "@/data/packages";
import { ceramicFaqs } from "@/data/ceramic-page";
import { images } from "@/data/images";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Ceramic Coating Brisbane — Crystal Serum Light & Ultra",
  description:
    "Professional Gtechniq ceramic coating in Brisbane. Choose Crystal Serum Light (5-year) or Crystal Serum Ultra (9-year) from $1,199, then add optional wheel, glass, interior or trim protection.",
  alternates: { canonical: "/packages" },
};

// Service + Offer structured data — one entry per coating, using the same
// `packages` array PackageCard renders below so pricing shown to Google
// always matches what's on the page. Lets eligible queries surface price
// info directly in search results. No 30ml/50ml volume pricing is exposed
// here — only the public "From $X" starting price.
const coatingSchema = packages.map((pkg) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Ceramic Coating",
  name: pkg.label,
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
    url: `${business.siteUrl}/packages#${pkg.id}`,
  },
}));

// FAQPage structured data, built from the same `ceramicFaqs` array
// CeramicFaq renders below — see app/faq/page.tsx for the same pattern
// site-wide.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ceramicFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coatingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Ceramic Coating"
        heading="Professional Ceramic Coating. Engineered For Long-Term Protection."
        body="Choose your Gtechniq ceramic coating, then customise your protection with optional wheel, glass, interior and trim protection."
        image={images.packagesHero}
        imagePosition="66% 58%"
        primaryCta={{ label: "Choose Your Coating", href: "#coatings" }}
        secondaryCta={{ label: "Compare Coatings", href: "#compare" }}
      />

      <CeramicWhy />

      <section id="coatings" className="scroll-mt-24 bg-bg py-24 md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-[clamp(2.1rem,5vw,3.75rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
              Choose Your
              <br />
              <span className="text-ink-muted">Ceramic Coating.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid items-start gap-6 md:grid-cols-2">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.1} className={pkg.featured ? "" : "md:pt-20"}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8">
            <p className="max-w-2xl text-xs leading-relaxed text-ink-muted/70">
              Starting prices shown. Final pricing may vary depending on
              vehicle size, condition and coating requirements.
            </p>
          </Reveal>
        </Container>
      </section>

      <ComparisonTable />
      <ProtectionExtras />

      <section className="bg-bg py-14">
        <Container className="text-center">
          <ArrowLink href="/new-car-protection" className="mx-auto">
            Looking For Complete New-Car Protection? Explore Our New Car
            Protection Packages
          </ArrowLink>
        </Container>
      </section>

      <CeramicProcess />
      <CeramicFaq />

      <section className="bg-bg-secondary py-24 md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
              Choose your protection.
              <br />
              <span className="text-ink-muted">We&rsquo;ll handle the rest.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
              Select your ceramic coating and customise your vehicle
              protection with the extras that matter to you.
            </p>
            <div className="mt-9">
              <Button href="/quote" size="lg" showArrow>
                Get Your Quote
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
