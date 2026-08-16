import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { whyMecPreparationChain } from "@/data/why-mec";

/**
 * Pairs with the reused EditorialSplit "preparation-standards" block right
 * above it (same bg tone, no divider between them, so they read as one
 * section) — this is the process-chain half of "The Coating Is Only As
 * Good As The Prep".
 */
export function WhyMecPreparationChain() {
  return (
    <section className="bg-bg pb-24 md:pb-32">
      <Container className="max-w-3xl">
        <Reveal className="mx-auto flex flex-col items-center">
          {whyMecPreparationChain.map((step, i) => (
            <div key={step} className="flex flex-col items-center">
              <span className="rounded-full border border-border-strong bg-bg-card px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink sm:text-sm">
                {step}
              </span>
              {i < whyMecPreparationChain.length - 1 && (
                <ArrowDown aria-hidden className="my-3 size-4 text-ink-muted" strokeWidth={1.75} />
              )}
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-xl text-center">
          <p className="text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
            We don&rsquo;t coat what we haven&rsquo;t inspected.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Every vehicle is different. Paint condition, previous repairs,
            contamination and existing defects can all affect the final
            result. That&rsquo;s why our process starts with inspection
            rather than application.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
