"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { images } from "@/data/images";
import { cn, formatCurrency } from "@/lib/utils";
import type { CeramicPackage } from "@/data/packages";
import { track } from "@/lib/analytics";

/**
 * Product card for the two standalone ceramic coatings. Also reused (with
 * showPrice=false) by the homepage teaser — see packages-section.tsx.
 * Presented as a vehicle specification, not a pricing card: index label,
 * oversized name, price and subtitle as "spec sheet" data, with the full
 * inclusion list revealed on hover (desktop) — always visible on touch,
 * since there's no hover to reveal it there.
 */
export function PackageCard({
  pkg,
  showPrice = true,
}: {
  pkg: CeramicPackage;
  showPrice?: boolean;
}) {
  return (
    <div
      id={pkg.id}
      className={cn(
        "group scroll-mt-28 relative flex flex-col overflow-hidden rounded-[3px] border transition-all duration-500 ease-out",
        pkg.featured
          ? "border-border-strong md:min-h-[640px]"
          : "border-border md:min-h-[560px]",
      )}
    >
      <div className="absolute inset-0">
        <Photo
          image={images[pkg.image]}
          className="h-full w-full rounded-none border-0 transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/25 transition-opacity duration-500 group-hover:from-bg/95 group-hover:via-bg/85" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end p-8 md:p-10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-accent">
            {pkg.index} / {pkg.nameLines[1].toUpperCase()}
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
              ? "text-[clamp(2.25rem,4.5vw,3.75rem)]"
              : "text-[clamp(2rem,4vw,3.25rem)]",
          )}
        >
          {pkg.nameLines[0]}
          <br />
          {pkg.nameLines[1]}
        </h3>

        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
          {pkg.subtitle}
        </p>

        {showPrice && (
          <p className="mt-5 text-2xl font-bold text-ink">From {formatCurrency(pkg.priceFrom)}</p>
        )}

        <ul className="mt-6 max-h-0 space-y-2 overflow-hidden opacity-0 transition-all duration-500 ease-out md:group-hover:mt-6 md:group-hover:max-h-60 md:group-hover:opacity-100 max-md:mt-6 max-md:max-h-60 max-md:opacity-100">
          {pkg.inclusions.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-ink-muted">
              <Check aria-hidden className="size-3.5 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-border pt-6">
          <Button
            href="/quote"
            variant="primary"
            showArrow
            onClick={() => track.packageViewed(pkg.id)}
          >
            Get A Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
