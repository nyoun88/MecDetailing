"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Photo } from "@/components/ui/photo";
import { GoogleRatingBadge } from "@/components/ui/google-rating-badge";
import { images } from "@/data/images";
import { track } from "@/lib/analytics";
import type { GooglePlaceData } from "@/lib/google-reviews";

/**
 * Standalone hero built specifically for /new-car-protection-offer — not
 * the shared PageHero (components/sections/packages-hero.tsx), since that
 * component is also used by the existing /new-car-protection page and
 * three others, and this landing page is deliberately isolated from all
 * of them. A bespoke hero also lets this page carry its own trust line,
 * which PageHero doesn't have a slot for.
 */
export function NewCarOfferHero({ googleData }: { googleData: GooglePlaceData | null }) {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-bg md:min-h-[100vh]">
      <div className="absolute inset-0">
        <Photo
          image={images.industry}
          className="h-full w-full rounded-none border-0"
          sizes="100vw"
          objectPosition="55% 45%"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-bg/10" />
        <div className="grain-overlay" />
      </div>

      <Container className="relative z-10 pb-14 pt-36 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>New Car Protection | Brisbane</Eyebrow>

          <h1 className="mt-5 max-w-3xl text-balance text-[clamp(2.6rem,7vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink">
            Your New Car Deserves More Than A New-Car Shine.
          </h1>

          <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg">
            Protect your vehicle from day one with a complete paint,
            wheel, glass &amp; interior protection system.
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Gtechniq Accredited Installation · Professional Preparation ·
            Premium Vehicle Protection
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button
              href="/new-car-protection/quote"
              size="lg"
              showArrow
              onClick={() => track.ctaClicked("Protect My New Car", "offer-hero")}
            >
              Protect My New Car
            </Button>
            <ArrowLink
              href="#packages"
              onClick={() => track.ctaClicked("View Protection Packages", "offer-hero")}
            >
              View Protection Packages
            </ArrowLink>
          </div>

          <GoogleRatingBadge
            className="mt-8"
            rating={googleData?.rating}
            reviewCount={googleData?.reviewCount}
          />
        </motion.div>
      </Container>
    </section>
  );
}
