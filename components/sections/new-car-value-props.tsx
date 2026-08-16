import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { newCarThreats, newCarFeatureBlocks } from "@/data/new-car-protection";

/**
 * Explains why a brand-new vehicle still needs protection, then breaks the
 * package down into the four surfaces it actually covers — paint, wheels,
 * glass, interior — so the offer reads as complete coverage rather than a
 * single-surface ceramic coating.
 */
export function NewCarValueProps() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Protect A New Car"
          heading="Your New Car Deserves More Than Just A New-Car Shine."
          body="Even a brand-new vehicle is exposed to the elements from the moment it leaves the dealership. Our new-car packages protect multiple surfaces from day one, rather than focusing on paint alone."
        />

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2.5">
          {newCarThreats.map((threat) => (
            <span
              key={threat}
              className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-ink-muted"
            >
              {threat}
            </span>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {newCarFeatureBlocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.08} className="border-t border-border pt-6">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold uppercase tracking-tight text-ink">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {block.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
