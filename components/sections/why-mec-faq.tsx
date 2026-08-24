import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { whyMecFaqs } from "@/data/why-mec";

export function WhyMecFaq() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container className="max-w-3xl">
        <SectionHeading heading="Why MEC — Questions?" />

        <Reveal delay={0.1} className="mt-14 border-t border-border">
          <Accordion
            size="lg"
            items={whyMecFaqs.map((faq) => ({
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
