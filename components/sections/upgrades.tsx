import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { packages, optionalUpgrades } from "@/data/packages";

export function Upgrades() {
  const items = [
    {
      id: "whats-included",
      title: "What's Included",
      content: (
        <div className="grid gap-8 sm:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.id}>
              <p className="text-sm font-semibold text-ink">{pkg.name}</p>
              <ul className="mt-3 space-y-2">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="text-sm text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "optional-upgrades",
      title: "Optional Upgrades",
      content: (
        <div className="grid gap-6 sm:grid-cols-2">
          {optionalUpgrades.map((upgrade) => (
            <div key={upgrade.id}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-semibold text-ink">{upgrade.name}</p>
                <p className="font-mono text-sm text-accent">{upgrade.priceLabel}</p>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{upgrade.description}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="bg-bg py-24 md:py-32">
      <Container className="max-w-3xl">
        <Reveal>
          <Accordion items={items} defaultOpenId="whats-included" />
        </Reveal>
      </Container>
    </section>
  );
}
