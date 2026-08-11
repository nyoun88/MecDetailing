"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { images } from "@/data/images";
import { track } from "@/lib/analytics";
import { EASE } from "@/lib/motion";

const trustPoints = [
  "Gtechniq Accredited",
  "Professional Installation",
  "Manufacturer-Backed Warranties",
];

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-bg md:min-h-[92vh]">
      <div className="absolute inset-0">
        <ImagePlaceholder
          image={images.heroVehicle}
          className="h-full w-full rounded-none border-0"
          label="Hero image placeholder"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-transparent" />
      </div>

      <Container className="relative z-10 pb-20 pt-40 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-accent"
        >
          Premium Vehicle Protection • Brisbane
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="mt-5 max-w-3xl text-balance text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-tight text-ink"
        >
          Brisbane&rsquo;s Ceramic Coating Specialists
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg"
        >
          Premium Gtechniq ceramic coatings professionally installed by
          accredited specialists — engineered to protect your vehicle,
          enhance gloss and make maintenance easier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            href="/quote"
            size="lg"
            showArrow
            onClick={() => track.ctaClicked("Get My Free Quote", "hero")}
          >
            Get My Free Quote
          </Button>
          <Button
            href="/packages"
            variant="outline"
            size="lg"
            onClick={() => track.ctaClicked("View Ceramic Packages", "hero")}
          >
            View Ceramic Packages
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.36 }}
          className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.1em] text-ink-muted"
        >
          {trustPoints.map((point, i) => (
            <li key={point} className="flex items-center gap-4">
              {i > 0 && <span className="hidden text-border-strong sm:inline">|</span>}
              {point}
            </li>
          ))}
        </motion.ul>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute inset-x-0 bottom-6 z-10 flex justify-center"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5 text-ink-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
