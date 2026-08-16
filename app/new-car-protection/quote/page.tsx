import type { Metadata } from "next";
import { NewCarQuoteFunnel } from "@/components/forms/new-car-quote-funnel";

export const metadata: Metadata = {
  title: "Get Your New Car Protection Quote",
  description:
    "Tell us about your new vehicle and MEC Detailing Australia will recommend the right New Car Protection package for you.",
  alternates: { canonical: "/new-car-protection/quote" },
  robots: { index: false, follow: true },
};

export default function NewCarProtectionQuotePage() {
  return <NewCarQuoteFunnel />;
}
