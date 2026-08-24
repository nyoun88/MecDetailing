import { Star } from "lucide-react";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

/**
 * Clickable "★★★★★ 5.0 on Google" badge — links out to the business's real
 * Google reviews (business.googleReviews.url). Reused across the hero,
 * PageHero and footer so the rating reads consistently everywhere it
 * appears (deliberately not repeated in DetailingTrustStrip — PageHero
 * already shows it immediately above on that page).
 */
export function GoogleRatingBadge({ className }: { className?: string }) {
  const { rating, url } = business.googleReviews;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/rating inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-ink",
        className,
      )}
    >
      <span className="flex gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} aria-hidden className="size-3" fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <span className="border-b border-current pb-0.5">
        {rating.toFixed(1)} On Google
      </span>
    </a>
  );
}
