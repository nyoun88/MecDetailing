"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { newCarProcessSteps } from "@/data/new-car-protection";
import { EASE, viewport } from "@/lib/motion";

export function NewCarProcess() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="text-balance text-[clamp(2.1rem,5vw,3.75rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
            From delivery
            <br />
            to fully
            <br />
            <span className="text-ink-muted">protected.</span>
          </h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-ink-muted md:text-lg">
            A straightforward process, built around getting your new vehicle
            protected properly from day one.
          </p>
        </div>

        <div className="border-t border-border">
          {newCarProcessSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="grid grid-cols-[3.5rem_1fr] items-baseline gap-6 border-b border-border py-8 sm:grid-cols-[4.5rem_1fr]"
            >
              <span className="font-mono text-2xl text-accent sm:text-3xl">{step.number}</span>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
