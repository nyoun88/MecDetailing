import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { TrustBar } from "@/components/sections/trust-bar";
import { CeramicStory } from "@/components/sections/ceramic-story";
import { Benefits } from "@/components/sections/benefits";
import { Process } from "@/components/sections/process";
import { PackagesSection } from "@/components/sections/packages-section";
import { PaintCorrection } from "@/components/sections/paint-correction";
import { Gallery } from "@/components/sections/gallery";
import { Stats } from "@/components/sections/stats";
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
      <Statement />
      <TrustBar />
      <CeramicStory />
      <Benefits />
      <Process />
      <PackagesSection />
      <PaintCorrection />
      <Gallery />
      <Stats />
      <Reviews />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
