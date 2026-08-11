"use client";

import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";
import type { CeramicPackage } from "@/data/packages";
import { track } from "@/lib/analytics";

export function PackageCard({ pkg }: { pkg: CeramicPackage }) {
  return (
    <Card
      hoverLift={false}
      className={cn(
        "flex h-full flex-col p-9 transition-transform duration-300 hover:-translate-y-1",
        pkg.featured && "border-accent/50 bg-bg-card shadow-[0_0_0_1px_rgba(199,199,199,0.15)] md:scale-[1.03]",
      )}
    >
      <Badge tone={pkg.featured ? "accent" : "default"}>{pkg.badge}</Badge>

      <h3 className="mt-6 text-2xl font-bold tracking-tight text-ink">{pkg.name}</h3>
      <p className="mt-2 text-sm text-ink-muted">{pkg.product}</p>

      <p className="mt-6 text-4xl font-bold tracking-tight text-ink">
        From {formatCurrency(pkg.priceFrom)}
      </p>

      <ul className="mt-8 space-y-3">
        {pkg.inclusions.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-9 flex flex-col gap-3">
        <Button
          href={`/packages#${pkg.id}`}
          variant={pkg.featured ? "primary" : "outline"}
          className="w-full"
          onClick={() => track.packageViewed(pkg.id)}
        >
          View Package
        </Button>
        <Button href="/quote" variant="ghost" className="w-full">
          Get A Quote
        </Button>
      </div>
    </Card>
  );
}
