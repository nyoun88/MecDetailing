"use client";

import { Sun, Bird, Wind, Disc, Droplets, Sofa, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";

/**
 * Threat cards defined locally (icon + copy) rather than in
 * data/new-car-protection.ts — this page is deliberately isolated from
 * the existing /new-car-protection page's data and components, so
 * nothing here is shared with or can affect that page.
 */
const threats: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Sun, title: "UV & Sunlight", description: "Fades and dulls paint over time with prolonged exposure." },
  { icon: Bird, title: "Bird Droppings", description: "Acidic and can etch into unprotected paint if left too long." },
  { icon: Wind, title: "Road Grime", description: "Everyday dust and debris build up on paint and glass." },
  { icon: Disc, title: "Brake Dust", description: "Bonds to wheels and is difficult to remove once contaminated." },
  { icon: Droplets, title: "Water Spotting", description: "Mineral deposits left behind after washing or rain." },
  { icon: Sofa, title: "Interior Spills", description: "Everyday wear, spills and staining on fabric, leather and vinyl." },
];

export function NewCarOfferProblem() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          heading="Your New Car Doesn't Stay New For Long."
          body="From the moment it leaves the dealership, your vehicle is exposed to the same everyday threats as every other car on the road."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {threats.map((threat, i) => (
            <Reveal key={threat.title} delay={i * 0.06} className="border-t border-border pt-6">
              <threat.icon aria-hidden className="size-6 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-bold uppercase tracking-tight text-ink">
                {threat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {threat.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 max-w-xl">
          <p className="text-balance text-xl font-semibold leading-snug text-ink md:text-2xl">
            Why wait until your car looks old to protect it?
            <br />
            <span className="text-ink-muted">Protect it while it&rsquo;s new.</span>
          </p>
          <Button
            href="/new-car-protection/quote"
            size="lg"
            showArrow
            className="mt-8"
            onClick={() => track.ctaClicked("Protect My Car", "offer-problem")}
          >
            Protect My Car
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
