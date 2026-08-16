"use client";

import { ArrowLink } from "@/components/ui/arrow-link";
import { Photo } from "@/components/ui/photo";
import { images } from "@/data/images";
import { cn, formatCurrency } from "@/lib/utils";
import type { NewCarPackage } from "@/data/new-car-protection";
import { track } from "@/lib/analytics";

/**
 * Package card for /new-car-protection. Same visual language as the
 * ceramic-only PackageCard — background photo, gradient, "From $X"
 * headline price. The spec grid (paint protection -> additional
 * protection -> preparation -> protection period) is the card's only
 * inclusions summary — the full line-item checklist was dropped since
 * it just repeated the same information and made the card feel
 * crowded, especially on mobile where it was always expanded.
 */
export function NewCarPackageCard({ pkg }: { pkg: NewCarPackage }) {
  return (
    <div
      id={pkg.id}
      className={cn(
        "group scroll-mt-28 relative flex flex-col overflow-hidden rounded-[3px] border transition-all duration-500 ease-out",
        pkg.featured
          ? "border-border-strong md:min-h-[720px]"
          : "border-border md:min-h-[660px]",
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

        <p className="mt-2 text-xs text-ink-muted">
          Individual protection services included:{" "}
          <span className="text-ink">{formatCurrency(pkg.bundleValue.extrasValue)} value</span>
          {pkg.bundleValue.potentialSaving !== undefined && (
            <>
              <br />
              Potential bundle saving:{" "}
              <span className="font-semibold text-accent">
                From {formatCurrency(pkg.bundleValue.potentialSaving)}
              </span>
            </>
          )}
        </p>

        <dl className="mt-5 space-y-2.5 border-y border-border py-5">
          <SpecRow label="Paint Protection" value={pkg.paintProtection} />
          <SpecRow label="Additional Protection" value={pkg.additionalProtection} />
          <SpecRow label="Preparation" value={pkg.preparation} />
          <SpecRow label="Protection Period" value={pkg.protectionPeriod} />
        </dl>

        <div className="mt-6 flex items-center justify-between">
          <ArrowLink href="/new-car-protection/quote" onClick={() => track.packageViewed(pkg.id)}>
            Get A Quote
          </ArrowLink>
        </div>
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
