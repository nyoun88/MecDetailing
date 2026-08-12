import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
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
        imagePosition="62% 55%"
      />

      <TrustBar />

      {whyMecSections.map((section, i) => (
        <EditorialSplit
          key={section.id}
          section={section}
          index={String(i + 1).padStart(2, "0")}
          reverse={i % 2 === 1}
        />
      ))}

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
              protection package for you.
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
