import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Photo } from "@/components/ui/photo";
import { images } from "@/data/images";
import { packages } from "@/data/packages";
import { protectionExtras } from "@/data/ceramic-page";

const [crystalSerumLight, crystalSerumUltra] = packages;
const exo5 = protectionExtras.find((extra) => extra.id === "exo-5-topcoat")!;

/**
 * Focuses on the technology/expertise behind the protection rather than
 * pricing — figures shown (warranty terms) are read from data/packages.ts
 * and data/ceramic-page.ts, not hardcoded, so they can't drift from what's
 * actually sold on /ceramic-coating.
 */
export function WhyMecCoatingSystems() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <Photo image={images.products} className="aspect-[4/5] w-full" sizes="(min-width: 768px) 50vw, 100vw" />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            size="md"
            eyebrow="Gtechniq Accredited"
            heading="Professional Protection. Proven Technology."
            body="We use Gtechniq coating systems selected according to the vehicle, its condition and the level of protection required."
            className="max-w-none"
          />

          <dl className="mt-10 space-y-6 border-t border-border pt-8">
            <div>
              <dt className="text-sm font-semibold text-ink">{crystalSerumLight.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
                {crystalSerumLight.warranty} — enhanced gloss, hydrophobic performance and chemical
                resistance.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink">{crystalSerumUltra.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
                {crystalSerumUltra.warranty} — our flagship coating, with the highest level of gloss
                and hydrophobic performance we install.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink">{exo5.name}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-muted">{exo5.description}</dd>
            </div>
          </dl>

          <p className="mt-8 max-w-lg text-sm leading-relaxed text-ink-muted">
            Every system is applied by Gtechniq-accredited installers, following the manufacturer&rsquo;s
            preparation and application process — professional preparation, backed by manufacturer
            warranties.
          </p>

          <div className="mt-8">
            <ArrowLink href="/ceramic-coating">View Ceramic Packages</ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
