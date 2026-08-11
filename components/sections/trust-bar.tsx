import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { trustPartners } from "@/data/trust";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-bg-secondary py-10">
      <Container>
        <Reveal className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted md:text-left">
          Trusted By Automotive Industry Leaders
        </Reveal>
        <div className="no-scrollbar flex items-center gap-10 overflow-x-auto md:justify-between md:gap-6">
          {trustPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-16 shrink-0 items-center justify-center rounded-[8px] border border-border px-8 text-sm font-semibold uppercase tracking-[0.08em] text-ink-muted/80 grayscale transition-colors hover:text-ink"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
