import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { images } from "@/data/images";

export function ValueProposition() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <ImagePlaceholder
            image={images.valueProp}
            className="aspect-[4/5] w-full"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Protection That Goes Beyond The Shine
          </p>
          <h2 className="text-balance text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.08] tracking-tight text-ink">
            Your paint deserves more than a quick detail.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
            Modern vehicles are constantly exposed to UV, road grime,
            chemicals, bird contamination, tree sap and environmental
            fallout.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            A professionally installed ceramic coating creates a durable
            protective layer over your vehicle&rsquo;s paint while
            delivering a deep gloss finish and easier maintenance.
          </p>
          <div className="mt-8">
            <Button href="/why-mec" variant="outline" showArrow>
              Why Ceramic Coating?
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
