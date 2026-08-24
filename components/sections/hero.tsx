"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { GoogleRatingBadge } from "@/components/ui/google-rating-badge";
import { images } from "@/data/images";
import { business } from "@/data/business";
import { track } from "@/lib/analytics";
import { EASE } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden bg-bg">
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src={images.heroVehicle.src}
          alt={images.heroVehicle.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "60% 55%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/20" />
        <div className="grain-overlay" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mt-auto"
      >
        <Container className="pb-12 md:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-muted"
          >
            Premium Vehicle Protection — Brisbane
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mt-4 text-[clamp(3rem,10vw,8.5rem)] font-bold uppercase leading-[0.88] tracking-tight text-ink"
          >
            Protection.
            <br />
            <span className="text-ink-muted">Without</span>
            <br />
            Compromise.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            className="mt-8 max-w-md text-balance text-base leading-relaxed text-ink-muted md:text-lg"
          >
            Gtechniq ceramic coatings. Precision preparation. Professional
            installation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Button
              href="/quote"
              size="lg"
              showArrow
              onClick={() => track.ctaClicked("Get Your Free Quote", "hero")}
            >
              Get Your Free Quote
            </Button>
            <ArrowLink
              href="/ceramic-coating"
              onClick={() => track.ctaClicked("Explore Ceramic Coatings", "hero")}
            >
              Explore Ceramic Coatings
            </ArrowLink>
          </motion.div>
        </Container>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="hairline"
        />

        <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {business.heroSpecs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
          <GoogleRatingBadge />
        </Container>
      </motion.div>
    </section>
  );
}
