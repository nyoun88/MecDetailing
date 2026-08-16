import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { newCarComparisonTable } from "@/data/new-car-protection";

export function NewCarComparisonTable() {
  return (
    <section id="compare" className="scroll-mt-24 bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading size="md" heading="Compare The Packages" />

        <Reveal delay={0.1} className="mt-14 overflow-x-auto rounded-[3px] border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-secondary">
                <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em] text-ink-muted">
                  Feature
                </th>
                <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em] text-ink">
                  Signature
                </th>
                <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em] text-ink">
                  Platinum
                </th>
                <th className="bg-accent/10 px-6 py-4 font-semibold uppercase tracking-[0.08em] text-accent">
                  Ultimate Shield
                </th>
              </tr>
            </thead>
            <tbody>
              {newCarComparisonTable.map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-b-0">
                  <td className="px-6 py-4 font-medium text-ink">{row.feature}</td>
                  <td className="px-6 py-4 text-ink-muted">{row.signature}</td>
                  <td className="px-6 py-4 text-ink-muted">{row.platinum}</td>
                  <td className="bg-accent/[0.04] px-6 py-4 font-medium text-ink">
                    {row.ultimateShield}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
