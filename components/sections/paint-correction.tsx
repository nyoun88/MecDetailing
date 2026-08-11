import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { paintIssues, beforeAfterExample } from "@/data/correction";

export function PaintCorrection() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
        <Reveal>
          <BeforeAfterSlider
            before={{ src: beforeAfterExample.before, alt: beforeAfterExample.beforeAlt }}
            after={{ src: beforeAfterExample.after, alt: beforeAfterExample.afterAlt }}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Preparation Matters"
            heading="The finish starts before the coating."
            body="Ceramic coating enhances the condition of the paint beneath it, which is why preparation matters."
            className="max-w-none"
          />

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
            {paintIssues.map((issue) => (
              <li key={issue.title} className="text-sm text-ink-muted">
                <span className="text-ink">{issue.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button href="/quote" variant="outline" showArrow>
              Talk To Us About Your Vehicle
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
