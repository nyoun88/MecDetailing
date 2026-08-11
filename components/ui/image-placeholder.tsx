import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImageSlot } from "@/data/images";

/**
 * Renders a deliberate, on-brand placeholder in place of real photography.
 * Never presents itself as an actual MEC project photo. Once real images
 * are dropped into /public/images using the filename shown here, swap this
 * component out for next/image using the same `image` slot.
 */
export function ImagePlaceholder({
  image,
  className,
  label = "Image placeholder",
}: {
  image: ImageSlot;
  className?: string;
  label?: string;
}) {
  const filename = image.src.split("/").pop();

  return (
    <div
      role="img"
      aria-label={image.alt}
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden rounded-[10px] border border-border bg-bg-secondary",
        className,
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 14px)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <ImageIcon aria-hidden className="size-7 text-ink-muted/70" />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted/80">
            {label}
          </p>
          <p className="mt-1 font-mono text-[11px] text-ink-muted/50">{filename}</p>
        </div>
      </div>
    </div>
  );
}
