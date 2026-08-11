import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { paintIssues, beforeAfterExample } from "@/data/correction";

export function PaintCorrection() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <Reveal className="max-w-4xl">
          <h2 className="text-balance text-[clamp(2.25rem,6vw,4.75rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
            The coating is only
            <br />
            as good as the
            <br />
            <span className="text-ink-muted">paint underneath it.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <BeforeAfterSlider
            before={{ src: beforeAfterExample.before, alt: beforeAfterExample.beforeAlt }}
            after={{ src: beforeAfterExample.after, alt: beforeAfterExample.afterAlt }}
            className="mx-auto max-w-5xl"
          />
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {paintIssues.map((issue) => (
              <li key={issue.title} className="text-sm text-ink-muted">
                {issue.title}
              </li>
            ))}
          </ul>
          <ArrowLink href="/quote">Talk To Us About Your Vehicle</ArrowLink>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 max-w-lg text-xs leading-relaxed text-ink-muted/70">
            Paint correction requirements vary depending on vehicle condition
            and are assessed during quoting.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
