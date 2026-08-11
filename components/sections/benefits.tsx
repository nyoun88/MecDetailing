import { Droplets, Sun, FlaskConical, SprayCan } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { benefits } from "@/data/benefits";

const icons = [Droplets, Sun, FlaskConical, SprayCan];

export function Benefits() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading heading="What Ceramic Coating Does" align="center" className="mx-auto" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={benefit.title} delay={i * 0.08}>
                <Card className="h-full">
                  <Icon aria-hidden className="size-7 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-6 text-lg font-bold text-ink">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {benefit.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-xs leading-relaxed text-ink-muted/70">
            Ceramic coating is not scratch-proof and does not replace paint
            protection film.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
