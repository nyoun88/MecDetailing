import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { images } from "@/data/images";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-bg py-28 md:py-36">
      <div className="absolute inset-0">
        <ImagePlaceholder
          image={images.finalCta}
          className="h-full w-full rounded-none border-0"
        />
        <div className="absolute inset-0 bg-bg/80" />
      </div>

      <Container className="relative z-10 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-balance text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-ink">
            Ready to protect your vehicle?
          </h2>
          <p className="mt-5 text-balance text-base leading-relaxed text-ink-muted md:text-lg">
            Tell us about your vehicle and we&rsquo;ll recommend the right
            protection package for you.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/quote" size="lg" showArrow>
              Get My Free Quote
            </Button>
            <Button href="/packages" variant="outline" size="lg">
              View Ceramic Packages
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
