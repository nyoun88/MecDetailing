import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

/**
 * Frames the packages as one bundled service rather than four separate
 * purchases. Deliberately makes no specific dollar-saving claim, since one
 * can't be accurately calculated without individual à la carte pricing for
 * every component (glass and interior protection aren't sold standalone).
 */
export function NewCarBundleValue() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container className="max-w-3xl">
        <Reveal>
          <h2 className="text-balance text-[clamp(2.1rem,5vw,3.75rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
            Complete Protection.
            <br />
            <span className="text-ink-muted">One Package.</span>
          </h2>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg">
            Instead of booking paint, wheel, glass and interior protection as
            separate services, every New Car Protection package brings all
            four together in one professionally prepared visit — installed
            as one coherent system, not four separate add-ons.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
