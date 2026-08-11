import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { images } from "@/data/images";

export function FinalCta() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-bg">
      <div className="absolute inset-0">
        <ImagePlaceholder
          image={images.finalCta}
          className="h-full w-full rounded-none border-0"
        />
        <div className="absolute inset-0 bg-bg/85" />
        <div className="grain-overlay" />
      </div>

      <Container className="relative z-10 py-24">
        <Reveal>
          <h2 className="text-balance text-[clamp(2.75rem,8vw,6.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink">
            Ready to
            <br />
            protect
            <br />
            <span className="text-ink-muted">your vehicle?</span>
          </h2>
          <p className="mt-8 max-w-md text-balance text-base leading-relaxed text-ink-muted md:text-lg">
            Tell us about your vehicle and we&rsquo;ll recommend the right
            protection package.
          </p>
          <div className="mt-10">
            <Button href="/quote" size="lg" showArrow>
              Get My Free Quote
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="hairline mt-16" />
          <p className="pt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">
            Brisbane • Gtechniq • Professional Installation
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
