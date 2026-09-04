import { Sparkles, Disc, Droplets, Sofa, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const surfaces: { icon: LucideIcon; title: string; tagline: string; points: string[] }[] = [
  {
    icon: Sparkles,
    title: "Paint",
    tagline: "Gtechniq Ceramic Protection",
    points: ["Gloss enhancement", "Hydrophobic performance", "Easier maintenance", "Chemical resistance"],
  },
  {
    icon: Disc,
    title: "Wheels",
    tagline: "Wheel Protection",
    points: ["Helps make brake dust easier to manage", "Reduces road contamination build-up", "Easier routine cleaning"],
  },
  {
    icon: Droplets,
    title: "Glass",
    tagline: "G1 ClearVision Smart Glass",
    points: ["Hydrophobic water repellency", "Improved visibility in rain", "Easier to keep clean"],
  },
  {
    icon: Sofa,
    title: "Interior",
    tagline: "Fabric · Leather · Vinyl",
    points: ["Protection against everyday spills", "Helps resist contamination", "Guards against staining"],
  },
];

/**
 * Introduces the idea that MEC protects the whole car, not just paint —
 * four premium cards, one per surface. Distinct from NewCarOfferSystem
 * directly below, which is a short reframing statement rather than
 * another features grid.
 */
export function NewCarOfferSurfaces() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Complete Vehicle Protection"
          heading="One Car. Four Surfaces. Complete Protection."
          body="MEC doesn't just protect paint. Every package covers four surfaces from day one."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {surfaces.map((surface, i) => (
            <Reveal
              key={surface.title}
              delay={i * 0.08}
              className="rounded-[3px] border border-border p-7"
            >
              <surface.icon aria-hidden className="size-7 text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-bold uppercase tracking-tight text-ink">
                {surface.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
                {surface.tagline}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {surface.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-ink-muted">
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
