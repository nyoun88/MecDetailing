"use client";

import { useRef } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { reviews } from "@/data/reviews";

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }

  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading size="md" heading="What Our Customers Say" />
          {reviews.length > 0 && (
            <div className="hidden gap-3 md:flex">
              <CarouselButton direction="left" onClick={() => scrollBy(-1)} />
              <CarouselButton direction="right" onClick={() => scrollBy(1)} />
            </div>
          )}
        </div>

        {reviews.length === 0 ? (
          <Reveal delay={0.1} className="mt-14 max-w-lg rounded-[3px] border border-dashed border-border-strong p-10">
            <p className="text-sm leading-relaxed text-ink-muted">
              Customer reviews are on their way — this section is wired up
              and ready to display real feedback as soon as it&rsquo;s
              collected.
            </p>
          </Reveal>
        ) : (
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
                <p className="mt-8 text-sm font-semibold text-ink">{review.customerName}</p>
                <p className="text-xs text-ink-muted">{review.vehicle}</p>
              </article>
            ))}
          </div>
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
