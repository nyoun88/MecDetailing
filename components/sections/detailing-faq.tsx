import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { detailingFaqs } from "@/data/detailing";

export function DetailingFaq() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container className="max-w-3xl">
        <SectionHeading heading="Detailing — Questions?" />

        <Reveal delay={0.1} className="mt-14 border-t border-border">
          <Accordion
            size="lg"
            items={detailingFaqs.map((faq) => ({
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
