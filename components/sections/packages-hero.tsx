import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { images } from "@/data/images";

export function PageHero({
  eyebrow,
  heading,
  body,
  image,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  image?: typeof images.packagesHero;
}) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-bg md:min-h-[56vh]">
      <div className="absolute inset-0">
        <ImagePlaceholder
          image={image ?? images.packagesHero}
          className="h-full w-full rounded-none border-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/20" />
      </div>

      <Container className="relative z-10 pb-16 pt-32">
        <Reveal>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 max-w-2xl text-balance text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-ink">
            {heading}
          </h1>
          {body && (
            <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg">
              {body}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
