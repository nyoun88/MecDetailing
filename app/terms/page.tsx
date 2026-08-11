import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="bg-bg pb-28 pt-36 md:pt-44">
      <Container className="max-w-2xl">
        <h1 className="text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-tight text-ink">
          Terms &amp; Conditions
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-muted">
          <p>
            This page is a placeholder. {business.name} has not yet supplied
            finalised terms and conditions — replace this content with the
            business&rsquo;s actual booking terms, cancellation policy, and
            Gtechniq warranty terms and conditions.
          </p>
          <p>
            Specific warranty coverage is confirmed at the time of
            installation and depends on the Gtechniq product applied — see
            the Ceramic Packages page for a general overview.
          </p>
        </div>
      </Container>
    </section>
  );
}
