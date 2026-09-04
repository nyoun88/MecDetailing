import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { newCarPackages } from "@/data/new-car-protection";
import { formatCurrency } from "@/lib/utils";

// Platinum — the "Most Popular" package — as the representative example.
// All figures read straight from newCarPackages[].bundleValue (computed
// in data/new-car-protection.ts from the real standalone ceramic/extras
// prices), never hardcoded here.
const platinum = newCarPackages.find((p) => p.id === "platinum-protection")!;
const lineItems = [
  { label: "Ceramic Coating", value: platinum.bundleValue.standaloneCoatingPrice },
  { label: "Wheel, Glass & Interior Protection", value: platinum.bundleValue.extrasValue },
];

export function NewCarOfferValue() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="Protecting Your Car Individually Adds Up Fast."
          body="Booking each protection service separately costs more than choosing a complete package — shown here using our Platinum package as the example."
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          <Reveal className="rounded-[3px] border border-border bg-bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Individual Services
            </p>
            <ul className="mt-6 space-y-4 border-t border-border pt-6">
              {lineItems.map((item) => (
                <li key={item.label} className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-ink-muted">{item.label}</span>
                  <span className="text-sm font-medium text-ink">{formatCurrency(item.value)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-border pt-6">
              <span className="text-sm font-semibold uppercase tracking-[0.08em] text-ink">
                Combined Value
              </span>
              <span className="text-xl font-bold text-ink">
                {formatCurrency(platinum.bundleValue.combinedIndividualValue!)}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[3px] border border-border-strong bg-accent/5 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Complete Protection Package
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              Paint, wheel, glass and interior protection, professionally
              prepared and installed together as one system.
            </p>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-muted">
                Package Price
              </p>
              <p className="mt-2 text-3xl font-bold text-ink">
                From {formatCurrency(platinum.priceFrom)}
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold text-accent">
              Potential bundle saving: From {formatCurrency(platinum.bundleValue.potentialSaving!)}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-xs leading-relaxed text-ink-muted/70">
            Figures compare the Platinum package price against booking the
            same standalone ceramic coating and additional protection
            services individually at their current prices. Signature and
            Ultimate Shield are bundled the same way — see the package
            cards above for each package&rsquo;s own pricing.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
