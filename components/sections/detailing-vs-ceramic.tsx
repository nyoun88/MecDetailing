import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";

/**
 * Naturally upsells ceramic coating without turning the detailing page into
 * an ad for it — a plain two-column comparison, each side with its own CTA.
 * "Explore Detailing" stays on this page (jumps to the service cards);
 * "Explore Ceramic Protection" is the only link that leaves the page.
 */
export function DetailingVsCeramic() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="Just Need It Clean? Or Want To Protect It?"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="flex flex-col justify-between rounded-[3px] border border-border bg-bg-card p-8 md:p-10">
            <div>
              <span className="font-mono text-xs text-accent">01 / DETAILING</span>
              <h3 className="mt-4 text-2xl font-bold uppercase tracking-tight text-ink">
                Restore The Appearance.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                Professional interior, exterior and paint correction services
                designed to refresh and restore your vehicle.
              </p>
            </div>
            <ArrowLink href="#services" className="mt-8">
              Explore Detailing
            </ArrowLink>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col justify-between rounded-[3px] border border-border-strong bg-bg-card p-8 md:p-10"
          >
            <div>
              <span className="font-mono text-xs text-accent">02 / CERAMIC COATING</span>
              <h3 className="mt-4 text-2xl font-bold uppercase tracking-tight text-ink">
                Protect The Finish.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                Long-term paint protection designed to enhance gloss, make
                maintenance easier and protect your vehicle&rsquo;s finish.
              </p>
            </div>
            <ArrowLink href="/ceramic-coating" className="mt-8">
              Explore Ceramic Protection
            </ArrowLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
