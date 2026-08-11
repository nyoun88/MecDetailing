import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { trustPartners } from "@/data/trust";

export function TrustBar() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <Reveal>
          <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-ink">
            Trusted in the automotive industry.
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-muted">
            Our experience extends beyond individual vehicles. MEC has
            worked alongside automotive businesses and industry
            professionals across Brisbane.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-3">
            {trustPartners.map((partner) => (
              <li
                key={partner.name}
                className="text-lg font-semibold uppercase tracking-[0.02em] text-ink-muted/70 transition-colors hover:text-ink"
              >
                {partner.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
