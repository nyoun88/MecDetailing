"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Photo } from "@/components/ui/photo";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";

const spanClasses: Record<NonNullable<(typeof galleryItems)[number]["span"]>, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  default: "",
};

export function Gallery() {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryItems.filter(
    (item) => category === "All" || item.category === category,
  );

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading heading="The MEC Standard" />

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-[3px] border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors",
                category === cat
                  ? "border-ink bg-ink text-bg"
                  : "border-border text-ink-muted hover:border-border-strong hover:text-ink",
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 md:auto-rows-[240px] md:grid-cols-4">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className={cn(
                "group relative overflow-hidden rounded-[3px]",
                spanClasses[item.span ?? "default"],
              )}
            >
              <Photo
                image={{ src: item.image, alt: item.alt, ready: item.ready }}
                className="h-full w-full rounded-[3px] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 25vw, 50vw"
                label={item.category}
              />
            </button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-bg/95 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close preview"
              className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-border-strong text-ink hover:border-accent hover:text-accent"
            >
              <X aria-hidden className="size-5" />
            </button>

            {filtered.length > 1 && (
              <>
                <NavButton
                  direction="left"
                  onClick={() =>
                    setLightboxIndex((idx) => (idx! - 1 + filtered.length) % filtered.length)
                  }
                />
                <NavButton
                  direction="right"
                  onClick={() => setLightboxIndex((idx) => (idx! + 1) % filtered.length)}
                />
              </>
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="w-full max-w-3xl"
            >
              <Photo
                image={{ src: activeItem.image, alt: activeItem.alt, ready: activeItem.ready }}
                className="aspect-[4/3] w-full"
                sizes="(min-width: 768px) 60vw, 100vw"
                label={activeItem.category}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function NavButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous image" : "Next image"}
      className={cn(
        "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong text-ink hover:border-accent hover:text-accent",
        direction === "left" ? "left-4" : "right-4",
      )}
    >
      <Icon aria-hidden className="size-5" />
    </button>
  );
}
