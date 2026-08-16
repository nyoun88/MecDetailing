import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqSearch } from "@/components/sections/faq-search";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about ceramic coating, new car protection, detailing, paint correction, warranties, maintenance and booking with MEC Detailing Australia in Brisbane.",
  alternates: { canonical: "/faq" },
};

// FAQPage structured data — lets Google show these Q&As directly in search
// results. Built from the same `faqs` array FaqSearch renders below, so the
// schema always matches what's actually visible on the page (a Google
// Search Central requirement for FAQ rich results).
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <section className="bg-bg pb-28 pt-36 md:pt-44">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <SectionHeading
          heading="Questions?"
          body="Search for a question, or browse by category below."
          headingAs="h1"
        />

        <div className="mt-14">
          <FaqSearch />
        </div>
      </Container>
    </section>
  );
}
