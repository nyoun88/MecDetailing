import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { paintIssues, beforeAfterExample } from "@/data/correction";

/**
 * Reuses the same BeforeAfterSlider and real before/after photo pair as the
 * homepage's PaintCorrection section (data/correction.ts) — it's the only
 * real before/after pair supplied for the site, so this is the same true
 * example rather than a fabricated one. The slider itself is a native
 * range input under the hood, so it already works correctly on touch.
 */
export function DetailingBeforeAfter() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="See The Difference"
          body="Professional detailing and paint correction can completely transform the appearance of a vehicle."
        />

        <Reveal delay={0.1} className="mt-14">
          <BeforeAfterSlider
            before={beforeAfterExample.before}
            after={beforeAfterExample.after}
            className="mx-auto max-w-5xl"
          />
        </Reveal>

        <Reveal
          delay={0.2}
          className="mx-auto mt-10 flex max-w-3xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {paintIssues.map((issue) => (
              <li key={issue.title} className="text-sm text-ink-muted">
                {issue.title}
              </li>
            ))}
          </ul>
          <ArrowLink href="#paint-correction">Explore Paint Correction</ArrowLink>
        </Reveal>
      </Container>
    </section>
  );
}
