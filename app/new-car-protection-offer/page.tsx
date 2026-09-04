import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { NewCarOfferHero } from "@/components/sections/new-car-offer-hero";
import { NewCarOfferTrustStrip } from "@/components/sections/new-car-offer-trust-strip";
import { NewCarOfferProblem } from "@/components/sections/new-car-offer-problem";
import { NewCarOfferSurfaces } from "@/components/sections/new-car-offer-surfaces";
import { NewCarOfferSystem } from "@/components/sections/new-car-offer-system";
import { NewCarOfferPackages } from "@/components/sections/new-car-offer-packages";
import { NewCarOfferValue } from "@/components/sections/new-car-offer-value";
import { NewCarOfferBenefits } from "@/components/sections/new-car-offer-benefits";
import { NewCarOfferWhyMec } from "@/components/sections/new-car-offer-why-mec";
import { NewCarOfferDelivery } from "@/components/sections/new-car-offer-delivery";
import { NewCarOfferFaq, offerFaqs } from "@/components/sections/new-car-offer-faq";
import { Reviews } from "@/components/sections/reviews";
import { newCarPackages } from "@/data/new-car-protection";
import { images } from "@/data/images";
import { business } from "@/data/business";
import { getGooglePlaceData } from "@/lib/google-reviews";
import { formatCurrency } from "@/lib/utils";

/**
 * Dedicated ad/campaign landing page for New Car Protection — deliberately
 * separate from /new-car-protection (see app/new-car-protection/page.tsx),
 * which stays untouched. Not linked from any navigation (see data/nav.ts —
 * unchanged); reachable only via direct URL, marketing links and the CTA
 * from that page's own "why-mec" style content elsewhere on the site.
 * Reuses real package/trust data read-only from data/new-car-protection.ts
 * and the shared Reviews/Google Places integration, but every page-
 * specific component lives under the new-car-offer-* naming so nothing
 * here can be imported by (or accidentally affect) the existing page.
 */

const signature = newCarPackages.find((p) => p.id === "signature-protection")!;

export const metadata: Metadata = {
  title: "New Car Protection Brisbane | Ceramic Coating",
  description:
    "Protect your new car from day one with professional ceramic coating, wheel, glass and interior protection in Brisbane. Gtechniq accredited installation.",
  alternates: { canonical: "/new-car-protection-offer" },
};

// Service + Offer structured data — one entry per bundle, built from the
// same `newCarPackages` array the cards render, so pricing shown to
// Google always matches what's on the page. URLs point at this page's
// own anchors, distinct from the existing /new-car-protection page's
// schema.
const packagesSchema = newCarPackages.map((pkg) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "New Car Protection Bundle",
  name: pkg.nameLines.join(" "),
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
    price: pkg.priceFrom,
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
    url: `${business.siteUrl}/new-car-protection-offer#offer-${pkg.id}`,
  },
}));

// FAQPage structured data, built from this page's own local `offerFaqs`
// (see components/sections/new-car-offer-faq.tsx) — not the existing
// page's newCarFaqs.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: offerFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default async function NewCarProtectionOfferPage() {
  const googleData = await getGooglePlaceData();

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

      <NewCarOfferHero googleData={googleData} />
      <NewCarOfferTrustStrip />
      <NewCarOfferProblem />
      <NewCarOfferSurfaces />
      <NewCarOfferSystem />
      <NewCarOfferPackages />
      <NewCarOfferValue />
      <NewCarOfferBenefits />
      <NewCarOfferWhyMec />

      <Reviews heading="Trusted By Brisbane Vehicle Owners" data={googleData} />

      <NewCarOfferDelivery />
      <NewCarOfferFaq />

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
              You Bought It New.
              <br />
              <span className="text-ink-muted">Keep It Looking New.</span>
            </h2>
            <p className="mt-8 max-w-md text-balance text-base leading-relaxed text-ink-muted md:text-lg">
              Protect your new vehicle from day one with professional
              paint, wheel, glass and interior protection.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              New Car Protection From {formatCurrency(signature.priceFrom)}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/new-car-protection/quote" size="lg" showArrow>
                Get My New Car Protection Quote
              </Button>
              {business.contact.phoneHref && (
                <ArrowLink href={business.contact.phoneHref}>Call MEC Detailing</ArrowLink>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="hairline mt-16" />
            <p className="pt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">
              Gtechniq Accredited · Brisbane · Professional Installation
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
