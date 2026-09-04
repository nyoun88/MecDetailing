"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { business } from "@/data/business";
import { track } from "@/lib/analytics";

export default function MobileCta() {
  const pathname = usePathname();
  if (pathname?.startsWith("/quote")) return null;

  // The dedicated ad-campaign landing page gets its own sticky CTA
  // (label + destination), matching its own funnel — everything else
  // keeps the site-wide default below, unchanged.
  if (pathname?.startsWith("/new-car-protection-offer")) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur-md md:hidden">
        <Button
          href="/new-car-protection/quote"
          size="lg"
          className="w-full"
          onClick={() => track.ctaClicked("Protect My New Car", "mobile-sticky-bar")}
        >
          Protect My New Car
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur-md md:hidden">
      <Button
        href="/quote"
        size="lg"
        className="w-full"
        onClick={() => track.ctaClicked(business.primaryCta, "mobile-sticky-bar")}
      >
        Get A Free Quote
      </Button>
    </div>
  );
}
