import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Photo } from "@/components/ui/photo";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { images } from "@/data/images";
import { beforeAfterExample } from "@/data/correction";
import { galleryItems } from "@/data/gallery";

// A small curated highlight set from the full gallery (data/gallery.ts),
// not the full filterable Gallery component — this section is about the
// evidence, not another instance of the homepage's gallery browser. Picked
// for variety: gloss/reflection, water behaviour, wheel and interior work.
const highlightIds = ["g14", "g9", "g16"];
const highlights = highlightIds
  .map((id) => galleryItems.find((item) => item.id === id))
  .filter((item): item is (typeof galleryItems)[number] => Boolean(item));

export function WhyMecResults() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto"
          heading="The Results Speak For Themselves"
          body="Professional preparation combined with professional protection creates a finish that looks as good as it feels to maintain."
        />

        <Reveal delay={0.1} className="mt-14">
          <BeforeAfterSlider
            before={beforeAfterExample.before}
            after={beforeAfterExample.after}
            className="mx-auto max-w-4xl"
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Reveal delay={0.15}>
            <Photo
              image={images.waterBeading}
              className="aspect-[4/3] w-full"
              sizes="(min-width: 640px) 33vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <Photo
              image={images.benefitGloss}
              className="aspect-[4/3] w-full"
              sizes="(min-width: 640px) 33vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.25}>
            <Photo
              image={{ src: highlights[0].image, alt: highlights[0].alt, ready: highlights[0].ready }}
              className="aspect-[4/3] w-full"
              sizes="(min-width: 640px) 33vw, 100vw"
              label={highlights[0].category}
            />
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <Photo
              image={{ src: highlights[1].image, alt: highlights[1].alt, ready: highlights[1].ready }}
              className="aspect-[16/10] w-full"
              sizes="(min-width: 640px) 50vw, 100vw"
              label={highlights[1].category}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Photo
              image={{ src: highlights[2].image, alt: highlights[2].alt, ready: highlights[2].ready }}
              className="aspect-[16/10] w-full"
              sizes="(min-width: 640px) 50vw, 100vw"
              label={highlights[2].category}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
