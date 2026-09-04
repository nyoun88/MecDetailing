"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { EASE, viewport } from "@/lib/motion";

/**
 * "Just ordered your new car?" — addresses customers who haven't taken
 * delivery yet and don't realise protection can be booked ahead of that
 * date. Steps defined locally, not shared with the existing
 * /new-car-protection page's process section.
 */
const steps = [
  { number: "01", title: "Book Your Protection", description: "Tell us your vehicle and expected delivery date." },
  { number: "02", title: "Plan Around Delivery", description: "We'll organise the installation around your expected arrival." },
  { number: "03", title: "Bring Your New Vehicle To MEC", description: "Your vehicle receives the required preparation." },
  { number: "04", title: "Drive Away Protected", description: "Paint. Wheels. Glass. Interior." },
];

export function NewCarOfferDelivery() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[clamp(2.1rem,5vw,3.75rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
            Just Ordered Your New Car?
          </h2>
          <p className="mt-6 text-balance text-base leading-relaxed text-ink-muted md:text-lg">
            Don&rsquo;t wait until delivery day to think about protection.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          {steps.map((step, i) => (
            <motion.div key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="flex gap-6 border-t border-border py-7 first:border-t-0"
              >
                <span className="font-mono text-2xl text-accent">{step.number}</span>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <div aria-hidden className="flex justify-start pl-1">
                  <span className="text-lg text-ink-muted/40">↓</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            href="/new-car-protection/quote"
            size="lg"
            showArrow
            onClick={() => track.ctaClicked("Book My New Car", "offer-delivery")}
          >
            Book My New Car
          </Button>
        </div>
      </Container>
    </section>
  );
}
