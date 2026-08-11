"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { images } from "@/data/images";
import { benefits } from "@/data/benefits";

/**
 * Large horizontal-scrolling section: the outer wrapper is tall, an inner
 * track stays pinned to the viewport while its content translates
 * horizontally as the user scrolls down through it. Falls back to a plain
 * horizontal-scroll strip on small screens, where scroll-jacking doesn't
 * translate well to touch.
 */
export function Benefits() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    function measure() {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setMaxTranslate(Math.max(trackWidth - viewportWidth, 0));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  return (
    <section className="bg-bg-secondary">
      <Container className="pt-24 md:pt-32">
        <Eyebrow index="02">The Result</Eyebrow>
        <h2 className="mt-5 text-balance text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
          What you&rsquo;ll notice
        </h2>
      </Container>

      {/* Desktop: pinned horizontal scroll */}
      <div ref={wrapperRef} className="relative mt-16 hidden md:block" style={{ height: `${benefits.length * 70}vh` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-6 pl-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))]">
            {benefits.map((benefit) => (
              <BenefitPanel key={benefit.title} benefit={benefit} />
            ))}
            <div className="w-6 shrink-0" aria-hidden />
          </motion.div>
        </div>
      </div>

      {/* Mobile: native horizontal scroll */}
      <div className="no-scrollbar mt-10 flex gap-4 overflow-x-auto px-6 pb-6 md:hidden">
        {benefits.map((benefit) => (
          <BenefitPanel key={benefit.title} benefit={benefit} compact />
        ))}
      </div>

      <Container>
        <p className="pb-16 pt-2 text-xs leading-relaxed text-ink-muted/70 md:pb-20">
          Ceramic coating is not scratch-proof and does not replace paint
          protection film.
        </p>
      </Container>
    </section>
  );
}

function BenefitPanel({
  benefit,
  compact = false,
}: {
  benefit: (typeof benefits)[number];
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "relative w-[80vw] shrink-0 overflow-hidden rounded-[3px] border border-border"
          : "relative h-[65vh] w-[70vw] shrink-0 overflow-hidden rounded-[3px] border border-border md:w-[42vw] lg:w-[34vw]"
      }
    >
      <ImagePlaceholder image={images[benefit.image]} className="h-full w-full rounded-none border-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <span className="font-mono text-xs text-accent">{benefit.index}</span>
        <h3 className="mt-2 text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold uppercase leading-[1.02] tracking-tight text-ink">
          {benefit.title}
        </h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
