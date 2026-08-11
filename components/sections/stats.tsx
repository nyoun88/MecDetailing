"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { stats } from "@/data/stats";
import { EASE, viewport } from "@/lib/motion";

export function Stats() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <div className="border-t border-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="flex flex-col items-baseline gap-2 border-b border-border py-8 sm:flex-row sm:gap-10 md:py-12"
            >
              <span className="text-[clamp(3.5rem,12vw,8rem)] font-bold leading-[0.85] tracking-tight text-ink">
                {stat.value}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted sm:text-base">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
