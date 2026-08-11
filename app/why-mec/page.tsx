import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/packages-hero";
import { EditorialSplit } from "@/components/sections/editorial-split";
import { TrustBar } from "@/components/sections/trust-bar";
import { whyMecSections } from "@/data/why-mec";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Why MEC",
  description:
    "Gtechniq-accredited ceramic coating, built on preparation, premium products and industry relationships across Brisbane's automotive trade.",
  alternates: { canonical: "/why-mec" },
};

export default function WhyMecPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Philosophy"
        heading="Built Around The Finish"
        body="Every part of how we work exists to protect one thing: the condition of your paint, long after the coating goes on."
        image={images.whyMecHero}
      />

      <TrustBar />

      {whyMecSections.map((section, i) => (
        <EditorialSplit key={section.id} section={section} reverse={i % 2 === 1} />
      ))}

      <section className="bg-bg-secondary py-24 md:py-32">
        <Container className="text-center">
          <Reveal className="mx-auto max-w-xl">
            <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.08] tracking-tight text-ink">
              Ready to protect your vehicle?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Tell us about your vehicle and we&rsquo;ll recommend the right
              protection package for you.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/quote" size="lg" showArrow>
                Get My Free Quote
              </Button>
              <Button href="/packages" variant="outline" size="lg">
                View Ceramic Packages
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
