"use client";

import { useRef } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";
import { business } from "@/data/business";
import type { GooglePlaceData } from "@/lib/google-reviews";

export function Reviews({
  heading = "What Our Customers Say",
  data,
}: {
  heading?: string;
  /**
   * Live Google Business Profile data, fetched server-side (see
   * lib/google-reviews.ts) by whichever page.tsx renders this section —
   * Reviews itself is a client component (for the scroll carousel) and
   * can't fetch. Pass null/undefined when GOOGLE_PLACES_API_KEY or
   * GOOGLE_PLACE_ID aren't configured yet, or the request failed — the
   * section falls back to the static rating with no written reviews.
   */
  data?: GooglePlaceData | null;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { url } = business.googleReviews;
  const rating = data?.rating ?? business.googleReviews.rating;
  const reviewCount = data?.reviewCount;
  const reviews = data?.reviews ?? [];

  function scrollBy(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }

  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading size="md" heading={heading} />
          {reviews.length > 0 && (
            <div className="hidden gap-3 md:flex">
              <CarouselButton direction="left" onClick={() => scrollBy(-1)} />
              <CarouselButton direction="right" onClick={() => scrollBy(1)} />
            </div>
          )}
        </div>

        {reviews.length === 0 ? (
          // Either the Google Places integration isn't configured yet
          // (GOOGLE_PLACES_API_KEY / GOOGLE_PLACE_ID), or the profile has
          // no written reviews to pull yet — either way, show the
          // confirmed rating honestly instead of an empty placeholder or
          // fabricated testimonials.
          <Reveal delay={0.1} className="mt-14 max-w-lg rounded-[3px] border border-border bg-bg-card p-10">
            <div className="flex gap-1 text-accent" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} aria-hidden className="size-5" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-5 text-2xl font-bold text-ink">
              {rating.toFixed(1)} Rating On Google
              {reviewCount ? ` (${reviewCount} Reviews)` : ""}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Individual written reviews will appear here as they&rsquo;re
              collected — in the meantime, read what customers have said on
              our Google Business Profile.
            </p>
            <ArrowLink href={url} target="_blank" rel="noopener noreferrer" className="mt-6">
              Read Our Google Reviews
            </ArrowLink>
          </Reveal>
        ) : (
          <>
            <div
              ref={trackRef}
              className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto"
            >
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="w-[85vw] shrink-0 snap-start border-t border-border pt-8 sm:w-[420px]"
                >
                  <div className="flex gap-1 text-accent" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        aria-hidden
                        className="size-4"
                        fill={idx < review.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <p className="mt-6 text-xl leading-snug text-ink">&ldquo;{review.text}&rdquo;</p>
                  <p className="mt-8 text-sm font-semibold text-ink">{review.authorName}</p>
                  {review.relativeTime && (
                    <p className="text-xs text-ink-muted">{review.relativeTime} on Google</p>
                  )}
                </article>
              ))}
            </div>
            <Reveal delay={0.15} className="mt-10">
              <ArrowLink href={url} target="_blank" rel="noopener noreferrer">
                Read Our Google Reviews
              </ArrowLink>
            </Reveal>
          </>
        )}
      </Container>
    </section>
  );
}

function CarouselButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous review" : "Next review"}
      className="flex size-11 items-center justify-center rounded-full border border-border-strong text-ink transition-colors hover:border-accent hover:text-accent"
    >
      <Icon aria-hidden className="size-4" />
    </button>
  );
}
