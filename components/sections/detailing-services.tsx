import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Photo } from "@/components/ui/photo";
import { images } from "@/data/images";
import { detailingServices } from "@/data/detailing";
import { formatCurrency } from "@/lib/utils";

export function DetailingServices() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <Eyebrow index="01">Our Services</Eyebrow>
        <h2 className="mt-5 max-w-xl text-balance text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
          Detailing, Done Properly
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
          Standalone detailing services for vehicles that need a clean, a
          correction, or a full reset — with or without ceramic coating.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {detailingServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <div className="group relative flex min-h-[440px] flex-col overflow-hidden rounded-[3px] border border-border">
                <div className="absolute inset-0">
                  <Photo
                    image={images[service.image]}
                    className="h-full w-full rounded-none border-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/25" />
                </div>

                <div className="relative z-10 flex flex-1 flex-col justify-end p-8 md:p-10">
                  <span className="font-mono text-xs text-accent">{service.index}</span>
                  <h3 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-2xl font-bold text-ink">
                    From {formatCurrency(service.priceFrom)}
                    {service.priceUnit && (
                      <span className="text-base font-semibold text-ink-muted">
                        {service.priceUnit}
                      </span>
                    )}
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-ink-muted">
            Final pricing depends on vehicle size and condition — confirmed
            at the time of quoting.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
