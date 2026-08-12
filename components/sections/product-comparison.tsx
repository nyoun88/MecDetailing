import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { comparisonProducts, comparisonMetrics } from "@/data/product-comparison";
import { cn } from "@/lib/utils";

function StarRating({ score, isBest }: { score: number; isBest: boolean }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${score} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "size-3.5",
            i < score
              ? isBest
                ? "fill-accent text-accent"
                : "fill-ink-muted text-ink-muted"
              : "fill-transparent text-border-strong",
          )}
        />
      ))}
    </div>
  );
}

export function ProductComparison() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          size="md"
          eyebrow="The Gtechniq Range"
          heading="How the products compare"
          body="A technical comparison of the Gtechniq systems we install — from the ExoV5 topcoat alone through to Crystal Serum Ultra with ExoV5 on top."
        />

        <Reveal delay={0.1} className="mt-14 overflow-x-auto rounded-[3px] border border-border">
          <table className="w-full min-w-[860px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-secondary">
                <th className="px-6 py-5 font-semibold uppercase tracking-[0.08em] text-ink-muted">
                  Property
                </th>
                {comparisonProducts.map((product) => (
                  <th key={product.id} className="px-6 py-5 align-bottom">
                    <p className="font-semibold uppercase tracking-[0.06em] text-ink">
                      {product.name}
                    </p>
                    {product.packageLabel && (
                      <p className="mt-1 text-xs font-normal normal-case tracking-normal text-accent">
                        {product.packageLabel}
                      </p>
                    )}
                    <p className="mt-1 text-xs font-normal normal-case tracking-normal text-ink-muted">
                      {product.duration}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonMetrics.map((metric) => {
                const max = Math.max(...metric.scores);
                return (
                  <tr key={metric.feature} className="border-b border-border last:border-b-0">
                    <td className="px-6 py-4 font-medium text-ink">{metric.feature}</td>
                    {metric.scores.map((score, i) => (
                      <td key={comparisonProducts[i].id} className="px-6 py-4">
                        <StarRating score={score} isBest={score === max} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-lg text-xs leading-relaxed text-ink-muted/70">
            Ratings reflect Gtechniq&rsquo;s own published product
            comparison. Warranty terms apply only when installed by a
            Gtechniq Accredited Detailer.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
