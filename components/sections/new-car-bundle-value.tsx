import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

/**
 * Frames the packages as one bundled system rather than four separate
 * purchases. Positioned right after the package cards. Deliberately makes
 * no specific dollar-saving claim, since one can't be accurately
 * calculated without individual à la carte pricing for every component
 * (glass and interior protection aren't sold standalone).
 */
export function NewCarBundleValue() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container className="max-w-3xl">
        <Reveal>
          <h2 className="text-balance text-[clamp(2.1rem,5vw,3.75rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
            More Than Ceramic Coating.
            <br />
            <span className="text-ink-muted">A Complete Protection System.</span>
          </h2>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg">
            Instead of booking paint, wheel, glass and interior treatments as
            separate services, every package brings all four together in one
            professionally prepared appointment — engineered as one coherent
            system, not four separate add-ons. Your price covers the whole
            vehicle, not paint alone.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
