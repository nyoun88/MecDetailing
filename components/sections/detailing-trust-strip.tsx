import { Clock, BadgeCheck, Sparkles, MapPin, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

/**
 * Slim credibility strip directly under the hero. Deliberately doesn't
 * include a specific review/star-rating claim — data/reviews.ts has no
 * real reviews supplied yet, so asserting a rating here would be an
 * invented claim. See DetailingReviews (reuses the site's existing empty
 * -state-aware Reviews component) for honest social proof instead.
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
