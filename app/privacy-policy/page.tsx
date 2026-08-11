import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-bg pb-28 pt-36 md:pt-44">
      <Container className="max-w-2xl">
        <h1 className="text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-muted">
          <p>
            This page is a placeholder. {business.name} has not yet supplied
            a finalised privacy policy — replace this content with the
            business&rsquo;s actual policy covering what information is
            collected via the quote form (vehicle details, contact
            information, optional photos), how it is stored and used, and
            how customers can request its removal.
          </p>
          <p>
            Until real legal copy is supplied, no assumptions have been made
            about data retention periods, third-party processors, or
            customer rights beyond what is legally required.
          </p>
        </div>
      </Container>
    </section>
  );
}
