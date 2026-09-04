"use client";

import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { images } from "@/data/images";
import { cn, formatCurrency } from "@/lib/utils";
import type { NewCarPackage } from "@/data/new-car-protection";
import { track } from "@/lib/analytics";

const ctaLabels: Record<string, string> = {
  "signature-protection": "Choose Signature",
  "platinum-protection": "Choose Platinum",
  "ultimate-protection": "Choose Ultimate",
};

/**
 * Package card built specifically for /new-car-protection-offer. Reads
 * pricing/inclusions straight from the shared `newCarPackages` data (the
 * same real figures the existing /new-car-protection page uses), but
 * this card component itself is independent — a stronger, full-width
 * button CTA per the landing-page brief, rather than the existing page's
 * ArrowLink-style "Get A Quote".
 */
export function NewCarOfferPackageCard({ pkg }: { pkg: NewCarPackage }) {
  const ctaLabel = ctaLabels[pkg.id] ?? `Choose ${pkg.label}`;

  return (
    <div
      id={`offer-${pkg.id}`}
      className={cn(
        "group scroll-mt-28 relative flex flex-col overflow-hidden rounded-[3px] border transition-all duration-500 ease-out",
        pkg.featured
          ? "border-border-strong md:min-h-[740px]"
          : "border-border md:min-h-[680px]",
      )}
    >
      <div className="absolute inset-0">
        <Photo
          image={images[pkg.image]}
          className="h-full w-full rounded-none border-0 transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/35 transition-opacity duration-500 group-hover:from-bg/95 group-hover:via-bg/92" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end p-7 md:p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-accent">
            {pkg.index} / {pkg.label.toUpperCase()}
          </span>
          {pkg.badge && (
            <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              {pkg.badge}
            </span>
          )}
        </div>

        <h3
          className={cn(
            "mt-5 font-bold uppercase leading-[0.95] tracking-tight text-ink",
            pkg.featured
              ? "text-[clamp(1.85rem,3.6vw,2.75rem)]"
              : "text-[clamp(1.7rem,3.2vw,2.35rem)]",
          )}
        >
          {pkg.nameLines[0]}
          <br />
          {pkg.nameLines[1]}
        </h3>

        <p className="mt-4 text-sm text-ink-muted">{pkg.positioning}</p>

        <p className="mt-6 text-2xl font-bold text-ink">From {formatCurrency(pkg.priceFrom)}</p>

        <dl className="mt-5 space-y-2.5 border-y border-border py-5">
          <SpecRow label="Paint Protection" value={pkg.paintProtection} />
          <SpecRow label="Additional Protection" value={pkg.additionalProtection} />
          <SpecRow label="Protection Period" value={pkg.protectionPeriod} />
        </dl>

        <Button
          href="/new-car-protection/quote"
          size="lg"
          showArrow
          variant={pkg.featured ? "primary" : "outline"}
          className="mt-6 w-full"
          onClick={() => {
            track.packageViewed(pkg.id);
            track.ctaClicked(ctaLabel, "offer-packages");
          }}
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
        {label}
      </dt>
      <dd className="text-right text-sm font-medium text-ink">{value}</dd>
    </div>
  );
}
