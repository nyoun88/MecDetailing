import { Sparkles, SprayCan, Disc, Sofa, ShieldCheck, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/**
 * Outcome-focused benefits — what the customer actually gets, distinct
 * from NewCarOfferSurfaces (which surfaces are covered) and
 * NewCarOfferSystem (why a complete system vs. paint alone). Copy is
 * deliberately hedged — "can make", "help keep" — matching the site-wide
 * standard of accurate, non-exaggerated ceramic coating claims.
 */
const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Sparkles, title: "More Gloss", description: "A cleaner, deeper-looking finish." },
  { icon: SprayCan, title: "Easier Maintenance", description: "Hydrophobic surfaces can make routine washing easier." },
  { icon: Disc, title: "Cleaner Wheels", description: "Wheel protection can make brake-dust contamination easier to manage." },
  { icon: Sofa, title: "Protected Interior", description: "Help keep your new interior looking newer for longer." },
  { icon: ShieldCheck, title: "Long-Term Appearance", description: "Protect the vehicle while it's still at its best." },
];

export function NewCarOfferBenefits() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="What You Get"
          heading="More Than Protection. A Better Ownership Experience."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 0.06}
              className="border-t border-border pt-6 text-center lg:text-left"
            >
              <benefit.icon
                aria-hidden
                className="mx-auto size-6 text-accent lg:mx-0"
                strokeWidth={1.5}
              />
              <h3 className="mt-4 text-base font-bold uppercase tracking-tight text-ink">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {benefit.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
