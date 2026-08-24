import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import MobileCta from "@/components/layout/mobile-cta";
import { MotionProvider } from "@/components/providers/motion-provider";
import { business } from "@/data/business";
import { getGooglePlaceData } from "@/lib/google-reviews";
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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${business.name} — Premium Ceramic Coating & Paint Protection, Brisbane`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Ceramic Coating Brisbane | ${business.name}`,
    description:
      "Premium Gtechniq ceramic coating in Brisbane, professionally installed by accredited specialists.",
    images: ["/og-image.jpg"],
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
    streetAddress: `${business.address.unit}/${business.address.street}`,
    addressLocality: business.address.suburb,
    addressRegion: business.address.state,
    postalCode: business.address.postcode,
    addressCountry: "AU",
  },
  telephone: business.contact.phone,
  email: business.contact.email,
  priceRange: "$$",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // AggregateRating is only added when we have a real review count from
  // the Places API (see lib/google-reviews.ts) — schema.org/Google both
  // expect ratingCount alongside ratingValue, and it isn't available from
  // the static business.googleReviews fallback.
  const googleData = await getGooglePlaceData();
  const schema = googleData
    ? {
        ...localBusinessSchema,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: googleData.rating,
          ratingCount: googleData.reviewCount,
        },
      }
    : localBusinessSchema;

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg pb-20 text-ink md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
