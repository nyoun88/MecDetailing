import { Sparkles, Disc, Droplets, Sofa, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const surfaces: { icon: LucideIcon; label: string }[] = [
  { icon: Sparkles, label: "Paint" },
  { icon: Disc, label: "Wheels" },
  { icon: Droplets, label: "Glass" },
  { icon: Sofa, label: "Interior" },
];

/**
 * Short reframing statement between the four-surface breakdown and the
 * package cards — a single contrast statement + icon strip, deliberately
 * brief so it doesn't repeat NewCarOfferSurfaces directly above it.
 */
export function NewCarOfferSystem() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[clamp(2.1rem,5vw,3.75rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
            We Don&rsquo;t Just Coat Your Paint.
            <br />
            <span className="text-ink-muted">We Protect The Car.</span>
          </h2>
          <p className="mt-6 text-balance text-base leading-relaxed text-ink-muted md:text-lg">
            A ceramic coating protects your paint. A complete protection
            system protects your ownership experience.
          </p>
        </div>

        <Reveal
          delay={0.1}
          className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {surfaces.map((surface, i) => (
            <div key={surface.label} className="flex items-center gap-3">
              <div className="flex items-center gap-3 text-ink">
                <surface.icon aria-hidden className="size-5 text-accent" strokeWidth={1.5} />
                <span className="text-sm font-semibold uppercase tracking-[0.1em]">
                  {surface.label}
                </span>
              </div>
              {i < surfaces.length - 1 && (
                <span aria-hidden className="text-lg text-ink-muted/50">
                  +
                </span>
              )}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
