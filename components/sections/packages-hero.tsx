import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";
import { images, type ImageSlot } from "@/data/images";

export function PageHero({
  eyebrow,
  heading,
  body,
  image,
  imagePosition,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  image?: ImageSlot;
  imagePosition?: string;
}) {
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-bg md:min-h-[68vh]">
      <div className="absolute inset-0">
        <Photo
          image={image ?? images.packagesHero}
          className="h-full w-full rounded-none border-0"
          sizes="100vw"
          objectPosition={imagePosition}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/20" />
        <div className="grain-overlay" />
      </div>

      <Container className="relative z-10 pb-16 pt-32">
        <Reveal>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 max-w-2xl text-balance text-[clamp(2.5rem,6.5vw,5rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
            {heading}
          </h1>
          {body && (
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted md:text-lg">
              {body}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
