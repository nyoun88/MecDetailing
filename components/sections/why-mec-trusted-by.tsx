import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { trustPartners } from "@/data/trust";

/**
 * A more prominent treatment of data/trust.ts than the homepage's TrustBar
 * — this page needs it to read as a major trust section, not a footnote
 * strip. No logo assets exist for these partners (see data/trust.ts), so
 * this stays a clean text wordmark treatment rather than an invented or
 * stock logo grid.
 */
export function WhyMecTrustedBy() {
  return (
    <section className="border-y border-border bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="Trusted By Automotive Businesses"
          body="From individual enthusiasts to established automotive businesses, MEC provides professional vehicle protection with the same attention to detail."
        />

        <Reveal
          delay={0.1}
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-border pt-14 sm:grid-cols-3 md:grid-cols-5"
        >
          {trustPartners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <span className="text-balance text-center text-xl font-bold uppercase leading-tight tracking-tight text-ink-muted transition-colors hover:text-ink sm:text-2xl">
                {partner.name}
              </span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
