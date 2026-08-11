import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { packages } from "@/data/packages";
import { formatCurrency } from "@/lib/utils";

export function VariantPricing() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading
          size="md"
          eyebrow="Full Pricing"
          heading="Pricing By Size"
          body="Both packages are available in two coating sizes, with or without the ExoV5 topcoat. Final pricing is confirmed once your vehicle is assessed."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.1}>
              <p className="font-mono text-xs text-accent">
                {pkg.index} / {pkg.label.toUpperCase()}
              </p>
              <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight text-ink">
                {pkg.product}
              </h3>

              <div className="mt-6 border-t border-border">
                {pkg.variants.map((variant) => (
                  <div
                    key={variant.id}
                    className="flex items-center justify-between border-b border-border py-4"
                  >
                    <span className="text-sm text-ink-muted">
                      {variant.size}
                      {variant.withExoV5 && (
                        <span className="ml-2 text-ink">+ ExoV5</span>
                      )}
                    </span>
                    <span className="font-mono text-base font-semibold text-ink">
                      {formatCurrency(variant.price)}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-lg text-xs leading-relaxed text-ink-muted/70">
            Each package includes a wash, clay decontamination and a
            1-hour machine buff prior to coating application. Wheel Kit
            and interior protection are priced separately — see optional
            upgrades below.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
