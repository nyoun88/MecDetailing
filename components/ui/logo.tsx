import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * MEC Detailing's real logo lockup. The site is dark-themed throughout, so
 * this renders the light/inverted variant (derived from the supplied
 * artwork — see /brand-source) meant for dark surfaces. A dark-on-light
 * variant also exists at /brand/logo-full-dark.png for any future light
 * surface (print, email, etc.).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-full-light.png"
      alt="MEC Detailing Australia"
      width={900}
      height={133}
      priority
      className={cn("h-8 w-auto md:h-9", className)}
    />
  );
}
