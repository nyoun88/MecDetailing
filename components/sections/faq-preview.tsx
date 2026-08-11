import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { ArrowLink } from "@/components/ui/arrow-link";
import { faqs, homepageFaqIds } from "@/data/faqs";

export function FaqPreview() {
  const items = homepageFaqIds
    .map((id) => faqs.find((faq) => faq.id === id))
    .filter((faq): faq is (typeof faqs)[number] => Boolean(faq));

  return (
    <section className="bg-bg py-24 md:py-32">
      <Container className="max-w-3xl">
        <SectionHeading heading="Questions?" />

        <Reveal delay={0.1} className="mt-14 border-t border-border">
          <Accordion
            size="lg"
            items={items.map((faq) => ({
              id: faq.id,
              title: faq.question,
              content: faq.answer,
            }))}
          />
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <ArrowLink href="/faq">View All FAQs</ArrowLink>
        </Reveal>
      </Container>
    </section>
  );
}
