"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { EASE, viewport } from "@/lib/motion";

/**
 * A deliberate break from the hero: no imagery, no CTA — just scale and
 * confidence. Full-black, huge typography, a short independent statement,
 * and a scroll cue into the rest of the story.
 */
export function Statement() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center bg-bg py-24 md:py-32">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-balance text-[clamp(2.75rem,9vw,7.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink"
        >
          Your vehicle.
          <br />
          <span className="text-ink-muted">Protected</span>
          <br />
          Properly.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="mt-12 max-w-sm text-balance text-base leading-relaxed text-ink-muted md:ml-auto md:mt-16 md:text-lg"
        >
          MEC specialises in professional ceramic coating and vehicle
          protection for owners who expect more from their finish.
        </motion.p>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 md:mt-28"
      >
        <div className="hairline" />
        <Container>
          <p className="py-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">
            Scroll To Discover
          </p>
        </Container>
      </motion.div>
    </section>
  );
}
