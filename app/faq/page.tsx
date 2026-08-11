import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqSearch } from "@/components/sections/faq-search";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about ceramic coating, paint correction, warranties, maintenance and booking with MEC Detailing Australia in Brisbane.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <section className="bg-bg pb-28 pt-36 md:pt-44">
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
