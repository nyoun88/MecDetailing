"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { images } from "@/data/images";
import { EASE, viewport } from "@/lib/motion";

const threats = [
  "UV exposure",
  "Chemical contamination",
  "Bird droppings",
  "Tree sap",
  "Road grime",
  "Environmental fallout",
];

export function CeramicStory() {
  return (
    <section className="bg-bg py-24 md:py-0">
      <Container className="grid gap-14 md:grid-cols-2 md:items-start md:gap-20">
        <div className="md:sticky md:top-28 md:h-[75vh]">
          <div className="relative h-[60vh] w-full overflow-hidden rounded-[3px] border border-border md:h-full">
            <Image
              src={images.waterBeading.src}
              alt={images.waterBeading.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:py-32">
          <Eyebrow index="01">Ceramic Protection</Eyebrow>
          <h2 className="mt-5 text-balance text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
            A better defence
            <br />
            against the
            <br />
            <span className="text-ink-muted">everyday.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
            A professionally installed ceramic coating creates a durable
            layer over your paint — engineered to stand between it and
            everything the road puts in its way.
          </p>

          <ul className="mt-12 space-y-0 border-t border-border">
            {threats.map((threat, i) => (
              <motion.li
                key={threat}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                className="flex items-center gap-4 border-b border-border py-4 text-base text-ink md:text-lg"
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {threat}
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
