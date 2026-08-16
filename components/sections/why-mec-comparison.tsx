import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { whyMecComparison } from "@/data/why-mec";

/**
 * Educates on why professional installation costs more, without naming or
 * attacking any competitor — "Basic Application" is a generic category,
 * not a specific installer.
 */
export function WhyMecComparison() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="Because The Coating Isn't The Whole Job"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[3px] border border-border bg-bg-card p-8 md:p-10">
            <span className="font-mono text-xs text-ink-muted">01 / GENERIC</span>
            <h3 className="mt-4 text-2xl font-bold uppercase tracking-tight text-ink-muted">
              Basic Application
            </h3>
            <ul className="mt-6 space-y-3">
              {whyMecComparison.basic.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
                  <Minus aria-hidden className="mt-1 size-3.5 shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-[3px] border border-border-strong bg-bg-card p-8 md:p-10"
          >
            <span className="font-mono text-xs text-accent">02 / MEC</span>
            <h3 className="mt-4 text-2xl font-bold uppercase tracking-tight text-ink">
              MEC Professional Installation
            </h3>
            <ul className="mt-6 space-y-3">
              {whyMecComparison.mec.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <Check aria-hidden className="mt-1 size-3.5 shrink-0 text-accent" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
