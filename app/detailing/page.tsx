import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PageHero } from "@/components/sections/packages-hero";
import { EditorialSplit } from "@/components/sections/editorial-split";
import { DetailingTrustStrip } from "@/components/sections/detailing-trust-strip";
import { DetailingPackages } from "@/components/sections/detailing-packages";
import { DetailingServiceFinder } from "@/components/sections/detailing-service-finder";
import { DetailingBeforeAfter } from "@/components/sections/detailing-before-after";
import { DetailingWhyMec } from "@/components/sections/detailing-why-mec";
import { DetailingVsCeramic } from "@/components/sections/detailing-vs-ceramic";
import { Reviews } from "@/components/sections/reviews";
import { DetailingFaq } from "@/components/sections/detailing-faq";
import { images } from "@/data/images";
import { business } from "@/data/business";
import { detailingServices, detailingIntro, detailingFaqs } from "@/data/detailing";
import { getGooglePlaceData } from "@/lib/google-reviews";

// Service + Offer structured data — one entry per service, using the same
// `detailingServices` array DetailingPackages renders below so pricing
// shown to Google always matches what's on the page. Hourly-rate services
// (priceUnit set) use a UnitPriceSpecification instead of a flat price.
const detailingSchema = detailingServices.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Vehicle Detailing",
  name: service.name,
  description: service.description,
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
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
    url: `${business.siteUrl}/detailing#${service.id}`,
    ...(service.priceUnit
      ? {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: service.priceFrom,
            priceCurrency: "AUD",
            unitText: service.priceUnit,
          },
        }
      : { price: service.priceFrom }),
  },
}));

// FAQPage structured data, built from the same `detailingFaqs` array
// DetailingFaq renders below — see app/faq/page.tsx for the same pattern
// site-wide.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: detailingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "Car Detailing Brisbane — Interior, Exterior & Paint Correction",
  description:
    "Professional car detailing in Brisbane. Mini, interior and full detailing plus paint correction from MEC Detailing Australia — premium products, proper preparation, from $275.",
  alternates: { canonical: "/detailing" },
};

export default async function DetailingPage() {
  const googleData = await getGooglePlaceData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(detailingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Vehicle Detailing"
        heading="Professional Car Detailing in Brisbane"
        body="Restore the look. Refresh the feel. Protect the finish. Premium interior, exterior and paint correction services for vehicles that deserve more than a basic car wash."
        image={images.detailingFull}
        imagePosition="55% 45%"
        primaryCta={{ label: "Get A Free Quote", href: "/quote" }}
        secondaryCta={{ label: "View Services", href: "#services" }}
      />

      <DetailingTrustStrip />

      <EditorialSplit section={detailingIntro} index="01" />

      <DetailingPackages />
      <DetailingServiceFinder />
      <DetailingBeforeAfter />
      <DetailingWhyMec />
      <DetailingVsCeramic />

      <Reviews heading="Brisbane Drivers Trust MEC" data={googleData} />

      <DetailingFaq />

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
              Ready To Bring Your
              <br />
              <span className="text-ink-muted">Vehicle Back To Its Best?</span>
            </h2>
            <p className="mt-8 max-w-md text-balance text-base leading-relaxed text-ink-muted md:text-lg">
              Tell us about your vehicle and what you&rsquo;d like to
              achieve. We&rsquo;ll recommend the right service and provide
              you with a personalised quote.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/quote" size="lg" showArrow>
                Get My Free Quote
              </Button>
              <ArrowLink href="/ceramic-coating">View Ceramic Packages</ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="hairline mt-16" />
            <p className="pt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">
              No Obligation • Personalised Recommendations • Brisbane Based
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
