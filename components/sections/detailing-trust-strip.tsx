import { Clock, BadgeCheck, Sparkles, MapPin, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

/**
 * Slim credibility strip directly under the hero. Doesn't repeat the
 * Google rating badge — PageHero (see components/sections/packages-hero.tsx)
 * already shows it immediately above this section, and stacking the same
 * badge twice within a few hundred pixels read as redundant rather than
 * reinforcing.
 */
const trustPoints: { icon: LucideIcon; label: string }[] = [
  { icon: Clock, label: "5+ Years Experience" },
  { icon: BadgeCheck, label: "Gtechniq Accredited" },
  { icon: Sparkles, label: "Premium Products" },
  { icon: MapPin, label: "Brisbane Based" },
];

export function DetailingTrustStrip() {
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
