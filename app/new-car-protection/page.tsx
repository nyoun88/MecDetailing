import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PageHero } from "@/components/sections/packages-hero";
import { NewCarValueProps } from "@/components/sections/new-car-value-props";
import { NewCarPackages } from "@/components/sections/new-car-packages";
import { NewCarComparisonTable } from "@/components/sections/new-car-comparison-table";
import { NewCarBundleValue } from "@/components/sections/new-car-bundle-value";
import { NewCarProcess } from "@/components/sections/new-car-process";
import { NewCarFaq } from "@/components/sections/new-car-faq";
import { newCarPackages, newCarFaqs } from "@/data/new-car-protection";
import { images } from "@/data/images";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "New Car Protection Packages",
  description:
    "Complete new-car protection bundles from MEC Detailing — ceramic, wheel, glass and interior coating installed together for Brisbane vehicles, from $1,949.",
  alternates: { canonical: "/new-car-protection" },
};

// Service + Offer structured data — one entry per bundle, built from the
// same `newCarPackages` array the cards below render, so pricing shown to
// Google always matches what's on the page.
const packagesSchema = newCarPackages.map((pkg) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "New Car Protection Bundle",
  name: pkg.name,
  description: `${pkg.tagline} — ${pkg.positioning}`,
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
    price: pkg.price30ml,
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
    url: `${business.siteUrl}/new-car-protection#${pkg.id}`,
  },
}));

// FAQPage structured data, built from the same `newCarFaqs` array NewCarFaq
// renders below — see app/faq/page.tsx for the same pattern site-wide.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: newCarFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function NewCarProtectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="New Car Protection"
        heading="Protect Your New Car From Day One."
        body="Complete paint, wheel, glass and interior protection packages engineered to keep your new vehicle looking better for longer."
        image={images.benefitProtection}
        imagePosition="60% 55%"
        primaryCta={{ label: "Get A Quote", href: "/quote" }}
        secondaryCta={{ label: "Compare Packages", href: "#compare" }}
      />

      <NewCarValueProps />
      <NewCarPackages />
      <NewCarComparisonTable />
      <NewCarBundleValue />
      <NewCarProcess />
      <NewCarFaq />

      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-bg">
        <div className="absolute inset-0">
          <Image
            src={images.finalCta.src}
            alt={images.finalCta.alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 60%" }}
          />
          <div className="absolute inset-0 bg-bg/85" />
          <div className="grain-overlay" />
        </div>

        <Container className="relative z-10 py-24">
          <Reveal>
            <h2 className="text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink">
              Your New Car.
              <br />
              <span className="text-ink-muted">Protected From Day One.</span>
            </h2>
            <p className="mt-8 max-w-md text-balance text-base leading-relaxed text-ink-muted md:text-lg">
              Choose your protection package and give your vehicle the level
              of protection it deserves.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/quote" size="lg" showArrow>
                Get Your Quote
              </Button>
              {business.contact.phoneHref && (
                <ArrowLink href={business.contact.phoneHref}>Contact MEC Detailing</ArrowLink>
              )}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
