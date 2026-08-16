"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { images } from "@/data/images";
import { cn, formatCurrency } from "@/lib/utils";
import type { DetailingService } from "@/data/detailing";
import { track } from "@/lib/analytics";

/**
 * Service card for /detailing. Same visual language as the ceramic
 * PackageCard and NewCarPackageCard — background photo, gradient, "From $X"
 * headline price, inclusions revealed on hover (desktop) / always visible
 * on touch (mobile, no hover to reveal it there).
 */
export function DetailingServiceCard({ service }: { service: DetailingService }) {
  return (
    <div
      id={service.id}
      className={cn(
        "group scroll-mt-28 relative flex flex-col overflow-hidden rounded-[3px] border transition-all duration-500 ease-out",
        service.featured
          ? "border-border-strong md:min-h-[600px]"
          : "border-border md:min-h-[520px]",
      )}
    >
      <div className="absolute inset-0">
        <Photo
          image={images[service.image]}
          className="h-full w-full rounded-none border-0 transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/30 transition-opacity duration-500 group-hover:from-bg/95 group-hover:via-bg/88" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end p-7 md:p-9">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-accent">
            {service.index} / {service.name.toUpperCase()}
          </span>
          {service.badge && (
            <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              {service.badge}
            </span>
          )}
        </div>

        <h3
          className={cn(
            "mt-5 font-bold uppercase leading-[0.95] tracking-tight text-ink",
            service.featured
              ? "text-[clamp(1.85rem,3.6vw,2.75rem)]"
              : "text-[clamp(1.7rem,3.2vw,2.35rem)]",
          )}
        >
          {service.name}
        </h3>

        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
          {service.tagline}
        </p>

        <p className="mt-5 text-2xl font-bold text-ink">
          From {formatCurrency(service.priceFrom)}
          {service.priceUnit && (
            <span className="text-base font-semibold text-ink-muted">{service.priceUnit}</span>
          )}
        </p>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          {service.description}
        </p>

        <ul className="mt-6 max-h-0 space-y-2 overflow-hidden opacity-0 transition-all duration-500 ease-out md:group-hover:mt-6 md:group-hover:max-h-60 md:group-hover:opacity-100 max-md:mt-6 max-md:max-h-60 max-md:opacity-100">
          {service.inclusions.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-ink-muted">
              <Check aria-hidden className="size-3.5 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-border pt-6">
          <Button
            href="/quote"
            variant={service.featured ? "primary" : "outline"}
            showArrow
            onClick={() => track.packageViewed(service.id)}
          >
            Get A Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
