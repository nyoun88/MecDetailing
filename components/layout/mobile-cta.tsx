"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { business } from "@/data/business";
import { track } from "@/lib/analytics";

export default function MobileCta() {
  const pathname = usePathname();
  if (pathname?.startsWith("/quote")) return null;

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
