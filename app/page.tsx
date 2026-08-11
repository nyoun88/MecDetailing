import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ValueProposition } from "@/components/sections/value-proposition";
import { Benefits } from "@/components/sections/benefits";
import { MecDifference } from "@/components/sections/mec-difference";
import { Stats } from "@/components/sections/stats";
import { PackagesSection } from "@/components/sections/packages-section";
import { PaintCorrection } from "@/components/sections/paint-correction";
import { Process } from "@/components/sections/process";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Ceramic Coating Brisbane",
  description:
    "Premium Gtechniq ceramic coating in Brisbane. Professionally installed ceramic paint protection, paint correction and vehicle protection by MEC Detailing Australia.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProposition />
      <Benefits />
      <MecDifference />
      <Stats />
      <PackagesSection />
      <PaintCorrection />
      <Process />
      <Gallery />
      <Reviews />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
