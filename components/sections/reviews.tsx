import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { reviews } from "@/data/reviews";

export function Reviews() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading align="center" className="mx-auto" heading="What Our Customers Say" />

        {reviews.length === 0 ? (
          <Reveal delay={0.1} className="mx-auto mt-14 max-w-lg rounded-[10px] border border-dashed border-border-strong p-10 text-center">
            <p className="text-sm leading-relaxed text-ink-muted">
              Customer reviews are on their way — this section is wired up
              and ready to display real feedback as soon as it&rsquo;s
              collected.
            </p>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((review, i) => (
              <Reveal key={review.id} delay={i * 0.1}>
                <Card className="h-full">
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
                  <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="mt-6 text-sm font-semibold text-ink">
                    {review.customerName}
                  </p>
                  <p className="text-xs text-ink-muted">{review.vehicle}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        )}

        {reviews.length > 0 && (
          <Reveal delay={0.2} className="mt-12 flex justify-center">
            <Button href="/quote" variant="outline">
              View More Reviews
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
