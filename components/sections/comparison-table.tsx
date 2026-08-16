import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ceramicComparisonTable } from "@/data/ceramic-page";

export function ComparisonTable() {
  return (
    <section id="compare" className="scroll-mt-24 bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading size="md" heading="Crystal Serum Light vs Crystal Serum Ultra" />

        <Reveal delay={0.1} className="mt-14 overflow-x-auto rounded-[3px] border border-border">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-secondary">
                <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em] text-ink-muted">
                  Feature
                </th>
                <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em] text-ink">
                  Light
                </th>
                <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em] text-accent">
                  Ultra
                </th>
              </tr>
            </thead>
            <tbody>
              {ceramicComparisonTable.map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-b-0">
                  <td className="px-6 py-4 font-medium text-ink">{row.feature}</td>
                  <td className="px-6 py-4 text-ink-muted">{row.light}</td>
                  <td className="px-6 py-4 text-ink-muted">{row.ultra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
