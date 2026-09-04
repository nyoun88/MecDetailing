import { BadgeCheck, Clock, Sparkles, MapPin, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

/**
 * Slim credibility strip directly under the hero — distinct from the
 * Google rating badge already shown in the hero itself, and from the
 * fuller NewCarOfferWhyMec section further down the page. Same pattern
 * as components/sections/detailing-trust-strip.tsx, content specific to
 * this page.
 */
const trustPoints: { icon: LucideIcon; label: string }[] = [
  { icon: BadgeCheck, label: "Gtechniq Accredited" },
  { icon: Clock, label: "5+ Years Experience" },
  { icon: Sparkles, label: "Premium Gtechniq Products" },
  { icon: MapPin, label: "Brisbane Based" },
];

export function NewCarOfferTrustStrip() {
  return (
    <section className="border-b border-border bg-bg-secondary py-8">
      <Container>
        <Reveal className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between">
          {trustPoints.map((point) => (
            <div
              key={point.label}
              className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted sm:text-sm"
            >
              <point.icon aria-hidden className="size-4 text-accent" strokeWidth={1.75} />
              {point.label}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
