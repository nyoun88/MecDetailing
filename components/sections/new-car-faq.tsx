import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { newCarFaqs } from "@/data/new-car-protection";

export function NewCarFaq() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <Container className="max-w-3xl">
        <SectionHeading heading="New Car Protection — Questions?" />

        <Reveal delay={0.1} className="mt-14 border-t border-border">
          <Accordion
            size="lg"
            items={newCarFaqs.map((faq) => ({
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
