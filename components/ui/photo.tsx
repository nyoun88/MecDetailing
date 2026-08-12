import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { cn } from "@/lib/utils";
import type { ImageSlot } from "@/data/images";

/**
 * Renders real photography once it's ready (`image.ready`), falling back to
 * the labelled `ImagePlaceholder` otherwise. Use this anywhere a component
 * maps over data to render one of several dynamic image slots, so each slot
 * can independently switch over to a real photo as it's supplied — see
 * data/images.ts for the `ready` flag.
 */
export function Photo({
  image,
  className,
  sizes = "100vw",
  objectPosition,
  priority,
  label,
}: {
  image: ImageSlot;
  className?: string;
  sizes?: string;
  objectPosition?: string;
  priority?: boolean;
  label?: string;
}) {
  if (!image.ready) {
    return <ImagePlaceholder image={image} className={className} label={label} />;
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}
