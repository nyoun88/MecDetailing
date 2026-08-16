import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { newCarPackages } from "@/data/new-car-protection";
import { formatCurrency } from "@/lib/utils";

/**
 * Frames the packages as bundled value, not a discount. Positioned right
 * after the package cards. The breakdown table's figures are read
 * straight from newCarPackages[].bundleValue — computed in
 * data/new-car-protection.ts from the real standalone ceramic prices and
 * real extras prices (including EXO 5's /packages price), never
 * hardcoded here.
 */
export function NewCarBundleValue() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-balance text-[clamp(2.1rem,5vw,3.75rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
              More Protection.
              <br />
              <span className="text-ink-muted">Better Value.</span>
            </h2>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg">
              Our New Car Protection packages bundle multiple protection
              systems into one professionally prepared service, giving you
              better value than purchasing each protection service
              individually.
            </p>
            <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg">
              Protecting your new vehicle individually can quickly add up.
              Our packages combine paint, wheels, glass and interior
              protection into one complete system at a package price.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-accent">
              Bundled For Better Value — Engineered For Complete Protection.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14 overflow-x-auto rounded-[3px] border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-secondary">
                <th className="px-6 py-4 font-semibold uppercase tracking-[0.08em] text-ink-muted">
                  &nbsp;
                </th>
                {newCarPackages.map((pkg) => (
                  <th
                    key={pkg.id}
                    className="px-6 py-4 font-semibold uppercase tracking-[0.08em] text-ink"
                  >
                    {pkg.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-6 py-4 font-medium text-ink">Standalone Coating</td>
                {newCarPackages.map((pkg) => (
                  <td key={pkg.id} className="px-6 py-4 text-ink-muted">
                    {pkg.bundleValue.standaloneCoatingLabel} —{" "}
                    {formatCurrency(pkg.bundleValue.standaloneCoatingPrice)}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-4 font-medium text-ink">
                  Additional Protection Services
                </td>
                {newCarPackages.map((pkg) => (
                  <td key={pkg.id} className="px-6 py-4 text-ink-muted">
                    {formatCurrency(pkg.bundleValue.extrasValue)}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-4 font-medium text-ink">Combined Individual Value</td>
                {newCarPackages.map((pkg) => (
                  <td key={pkg.id} className="px-6 py-4 text-ink-muted">
                    {pkg.bundleValue.combinedIndividualValue !== undefined
                      ? `From ${formatCurrency(pkg.bundleValue.combinedIndividualValue)}`
                      : "Bundled value"}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="px-6 py-4 font-medium text-ink">Package Price</td>
                {newCarPackages.map((pkg) => (
                  <td key={pkg.id} className="px-6 py-4 font-semibold text-ink">
                    From {formatCurrency(pkg.priceFrom)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-ink">Potential Bundle Saving</td>
                {newCarPackages.map((pkg) => (
                  <td key={pkg.id} className="px-6 py-4 font-semibold text-accent">
                    {pkg.bundleValue.potentialSaving !== undefined
                      ? `From ${formatCurrency(pkg.bundleValue.potentialSaving)}`
                      : "Complete protection, one price"}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-6 max-w-3xl">
          <p className="text-xs leading-relaxed text-ink-muted/70">
            Figures compare each package price against booking the same
            standalone ceramic coating and additional protection services
            (wheel, glass, interior and, for Ultimate Shield, EXO 5
            topcoat) individually at their current prices.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
