import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import MobileCta from "@/components/layout/mobile-cta";
import { MotionProvider } from "@/components/providers/motion-provider";
import { business } from "@/data/business";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `Ceramic Coating Brisbane | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description:
    "Premium Gtechniq ceramic coating in Brisbane. Professionally installed ceramic paint protection, paint correction and vehicle protection by MEC Detailing Australia.",
  keywords: [
    "ceramic coating Brisbane",
    "ceramic coating near me",
    "ceramic paint protection Brisbane",
    "Gtechniq ceramic coating Brisbane",
    "paint correction Brisbane",
    "car detailing Brisbane",
    "vehicle paint protection Brisbane",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: business.name,
    title: `Ceramic Coating Brisbane | ${business.name}`,
    description:
      "Premium Gtechniq ceramic coating in Brisbane, professionally installed by accredited specialists.",
    images: ["/brand/icon-512.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: business.name,
  image: `${business.siteUrl}/brand/icon-512.png`,
  url: business.siteUrl,
  foundingDate: String(business.foundedYear),
  areaServed: {
    "@type": "City",
    name: "Brisbane",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: business.location.city,
    addressRegion: business.location.state,
    addressCountry: "AU",
  },
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg pb-20 text-ink md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileCta />
        </MotionProvider>
      </body>
    </html>
  );
}
