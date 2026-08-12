import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PageHero } from "@/components/sections/packages-hero";
import { DetailingServices } from "@/components/sections/detailing-services";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Detailing Services",
  description:
    "Standalone detailing services from MEC Detailing Australia — Mini Detail, Interior Detail, Full Detail and Paint Correction, priced individually.",
  alternates: { canonical: "/detailing" },
};

export default function DetailingPage() {
  return (
    <>
      <PageHero
        eyebrow="Vehicle Detailing"
        heading="Detailing Services"
        body="Wash, correction and full resets — standalone services for vehicles that need a clean without a full ceramic package."
        image={images.detailingHero}
        imagePosition="55% 60%"
      />

      <DetailingServices />

      <section className="bg-bg-secondary py-24 md:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
              Ready to book
              <br />
              your vehicle in?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
              Tell us about your vehicle and which service you&rsquo;re after,
              and we&rsquo;ll confirm pricing and availability.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/quote" size="lg" showArrow>
                Get My Free Quote
              </Button>
              <ArrowLink href="/packages">View Ceramic Packages</ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
