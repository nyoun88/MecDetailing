import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";

/**
 * Defined locally rather than imported from data/new-car-protection.ts —
 * this landing page is deliberately isolated from the existing
 * /new-car-protection page's data, so editing this list can never affect
 * that page's FAQ section (or vice versa). Also exported for the
 * FAQPage structured data built in app/new-car-protection-offer/page.tsx.
 */
export const offerFaqs = [
  {
    id: "why-new-car-needs-prep",
    question: "Why does a brand-new car need preparation?",
    answer:
      "Factory paint can carry swirl marks or contaminants picked up during transport and delivery, even on a brand-new vehicle. That's why professional inspection and preparation — wash, clay decontamination and a machine polish — are built into every package before coating.",
  },
  {
    id: "should-i-ceramic-coat-new-car",
    question: "Should I ceramic coat a brand-new car?",
    answer:
      "In most cases, yes — protecting the paint while it's still in its best condition is easier and more effective than waiting until it's already showing wear. Every package includes proper preparation first, so the coating is applied to a genuinely clean surface.",
  },
  {
    id: "does-ceramic-prevent-scratches",
    question: "Does ceramic coating prevent scratches?",
    answer:
      "No coating makes paint scratch-proof or immune to damage. Ceramic coating adds a hard, durable layer that can help resist light marring and makes the surface easier to maintain, but it doesn't prevent stone chips, deeper scratches or other physical damage.",
  },
  {
    id: "crystal-serum-light-vs-ultra",
    question: "What's the difference between Crystal Serum Light and Crystal Serum Ultra?",
    answer:
      "Both are professional Gtechniq ceramic coating systems. Crystal Serum Ultra is the more advanced coating level, carrying a longer protection duration (up to 9 years) than Crystal Serum Light (5 years).",
  },
  {
    id: "whats-included",
    question: "What's included in the New Car Protection packages?",
    answer:
      "Every package includes ceramic paint protection, Gtechniq wheel coating, G1 ClearVision glass protection and Smart Fabric/Leather/Vinyl interior protection, alongside a full wash, clay decontamination and machine polish before application.",
  },
  {
    id: "interior-protection-included",
    question: "Do you protect the interior too?",
    answer:
      "Yes. All three packages include Gtechniq Smart Fabric / Leather / Vinyl Interior Protection, alongside paint, wheel and glass coating.",
  },
  {
    id: "book-before-car-arrives",
    question: "Can I book before my new car arrives?",
    answer:
      "Yes. Many customers book their protection package while they're still waiting on delivery, so their appointment is ready to go as soon as their vehicle is. Get in touch with your expected delivery date and we'll work with it.",
  },
  {
    id: "how-long-does-installation-take",
    question: "How long does installation take?",
    answer:
      "Turnaround depends on the package selected and your vehicle's condition, since preparation time varies. We'll confirm an estimated timeframe once we've assessed your vehicle at the time of quoting.",
  },
];

export function NewCarOfferFaq() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container className="max-w-3xl">
        <SectionHeading align="center" className="mx-auto" heading="Questions?" />

        <Reveal delay={0.1} className="mt-14 border-t border-border">
          <Accordion
            size="lg"
            items={offerFaqs.map((faq) => ({
              id: faq.id,
              title: faq.question,
              content: faq.answer,
            }))}
          />
        </Reveal>
      </Container>
    </section>
  );
}
