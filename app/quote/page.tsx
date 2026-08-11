import type { Metadata } from "next";
import { QuoteFunnel } from "@/components/forms/quote-funnel";

export const metadata: Metadata = {
  title: "Get Your Free Quote",
  description:
    "Tell us about your vehicle and MEC Detailing Australia will recommend the right Gtechniq ceramic protection package for you.",
  alternates: { canonical: "/quote" },
  robots: { index: false, follow: true },
};

export default function QuotePage() {
  return <QuoteFunnel />;
}
