import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PageHero } from "@/components/sections/packages-hero";
import { EditorialSplit } from "@/components/sections/editorial-split";
import { WhyMecDifferent } from "@/components/sections/why-mec-different";
import { WhyMecTrustedBy } from "@/components/sections/why-mec-trusted-by";
import { WhyMecStandard } from "@/components/sections/why-mec-standard";
import { WhyMecPreparationChain } from "@/components/sections/why-mec-preparation-chain";
import { WhyMecCoatingSystems } from "@/components/sections/why-mec-coating-systems";
import { WhyMecResults } from "@/components/sections/why-mec-results";
import { WhyMecAftercare } from "@/components/sections/why-mec-aftercare";
import { WhyMecComparison } from "@/components/sections/why-mec-comparison";
import { WhyMecFaq } from "@/components/sections/why-mec-faq";
import { whyMecSections, whyMecFaqs } from "@/data/why-mec";
import { images } from "@/data/images";

const preparationSection = whyMecSections.find((s) => s.id === "preparation-standards")!;

export const metadata: Metadata = {
  title: "Why MEC — Ceramic Coating Brisbane",
  description:
    "Gtechniq-accredited ceramic coating and paint protection in Brisbane, built on proper preparation, professional products and a considered process — not just an application.",
  alternates: { canonical: "/why-mec" },
};

// FAQPage structured data, built from the same `whyMecFaqs` array
// WhyMecFaq renders below — see app/faq/page.tsx for the same pattern
// site-wide.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: whyMecFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function WhyMecPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Why MEC"
        heading="Protection Built Around Your Vehicle"
        body="Professional paint protection isn't just about the coating. It's about everything that happens before, during and after it."
        image={images.whyMecHero}
        imagePosition="62% 55%"
        primaryCta={{ label: "Get A Free Quote", href: "/quote" }}
        secondaryCta={{ label: "View Ceramic Packages", href: "/packages" }}
      />

      <WhyMecDifferent />
      <WhyMecTrustedBy />
      <WhyMecStandard />

      <EditorialSplit section={preparationSection} index="05" />
      <WhyMecPreparationChain />

      <WhyMecCoatingSystems />
      <WhyMecResults />
      <WhyMecAftercare />
      <WhyMecComparison />
      <WhyMecFaq />

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
              Your Vehicle Deserves
              <br />
              <span className="text-ink-muted">More Than Just A Coating.</span>
            </h2>
            <p className="mt-8 max-w-md text-balance text-base leading-relaxed text-ink-muted md:text-lg">
              Tell us about your vehicle, its current condition and what
              you&rsquo;re looking to achieve. We&rsquo;ll recommend the
              right protection system for it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/quote" size="lg" showArrow>
                Get My Free Quote
              </Button>
              <ArrowLink href="/packages">View Ceramic Packages</ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="hairline mt-16" />
            <p className="pt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">
              Professional Preparation • Gtechniq Accredited • Brisbane Based
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
