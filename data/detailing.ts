import { images } from "@/data/images";
import type { WhyMecSection } from "@/data/why-mec";

/**
 * Data for the redesigned /detailing page — standalone detailing services
 * (not bundled with ceramic coating; see data/packages.ts and
 * data/new-car-protection.ts for the coating-based offers this page
 * upsells into). Every inclusion below is paraphrased directly from each
 * service's existing description, not invented, and pricing is unchanged
 * from the original site content.
 */

export interface DetailingService {
  id: string;
  index: string;
  name: string;
  /** Short positioning line shown under the service name. */
  tagline: string;
  priceFrom: number;
  /** Unit suffix for services priced by rate rather than flat fee, e.g. "/hr". */
  priceUnit?: string;
  description: string;
  inclusions: string[];
  /** Pill text shown on the card, e.g. "Most Popular". Omit for no pill. */
  badge?: string;
  featured: boolean;
  image: keyof typeof images;
  /** Question shown in the "Which Detail Is Right For Your Vehicle?" decision section. */
  matchQuestion: string;
  matchAnswer: string;
}

export const detailingServices: DetailingService[] = [
  {
    id: "mini-detail",
    index: "01",
    name: "Mini Detail",
    tagline: "For vehicles that just need a professional refresh.",
    priceFrom: 275,
    description:
      "A quick refresh for vehicles that just need a light clean — exterior wash and a basic interior tidy-up.",
    inclusions: [
      "Exterior Hand Wash",
      "Wheels & Tyres Cleaned",
      "Interior Vacuum",
      "Interior Wipe-Down",
      "Windows Cleaned, Inside & Out",
    ],
    featured: false,
    image: "detailingMini",
    matchQuestion: "Just Need A Refresh?",
    matchAnswer:
      "A light exterior wash and interior tidy-up for a vehicle that's already in good shape.",
  },
  {
    id: "interior-detail",
    index: "02",
    name: "Interior Detail",
    tagline: "Restore and refresh the cabin.",
    priceFrom: 385,
    description:
      "A thorough clean throughout the cabin — vacuuming, surface cleaning and trim care from front to back.",
    inclusions: [
      "Full Interior Vacuum",
      "Seats & Carpets Cleaned",
      "Dashboard & Trim Detail",
      "Door Panels & Console Cleaned",
      "Interior Glass Cleaned",
    ],
    featured: false,
    image: "detailingInterior",
    matchQuestion: "Interior Looking Tired?",
    matchAnswer:
      "A thorough front-to-back cabin clean when the outside is fine but the inside needs attention.",
  },
  {
    id: "full-detail",
    index: "03",
    name: "Full Detail",
    tagline: "The complete vehicle reset.",
    priceFrom: 595,
    description:
      "A complete interior and exterior detail — wash, decontamination and clean, inside and out.",
    inclusions: [
      "Exterior Wash & Decontamination",
      "Full Interior Detail",
      "Wheels, Tyres & Arches Cleaned",
      "Door Shuts & Trim Detailed",
      "Interior & Exterior Glass Cleaned",
    ],
    badge: "Most Popular",
    featured: true,
    image: "benefitGloss",
    matchQuestion: "Needs A Complete Reset?",
    matchAnswer:
      "Our most popular service — a full interior and exterior detail for a vehicle that needs it all.",
  },
  {
    id: "paint-correction",
    index: "04",
    name: "Paint Correction",
    tagline: "For swirl marks, scratches and dull paint.",
    priceFrom: 154,
    priceUnit: "/hr",
    description:
      "Machine polishing to reduce swirl marks, light scratches and oxidation, restoring gloss and clarity to the paint. Charged hourly — time required depends on paint condition.",
    inclusions: [
      "Paint Inspection & Assessment",
      "Machine Polishing",
      "Swirl Mark & Light Scratch Reduction",
      "Gloss & Clarity Restoration",
      "Priced Hourly To Match Paint Condition",
    ],
    featured: false,
    image: "detailingCorrection",
    matchQuestion: "Paint Looking Dull Or Swirled?",
    matchAnswer:
      "Machine polishing to reduce swirl marks and restore gloss — priced by the time your paint needs.",
  },
];

/** Section 3 intro — reuses the same EditorialSplit layout as /why-mec. */
export const detailingIntro: WhyMecSection = {
  id: "detailing-done-properly",
  eyebrow: "The MEC Approach",
  title: "Detailing Done Properly.",
  body: [
    "MEC Detailing isn't a quick wash. Every vehicle is assessed individually, then treated with proper preparation, professional products and genuine attention to detail — inside and out.",
    "Whether your vehicle needs a light refresh or a complete reset, the same standard applies: restore the appearance properly, not just make it look clean for a day.",
  ],
  image: images.benefitMaintenance,
};

export interface DetailingWhyPoint {
  id: string;
  title: string;
  description: string;
}

/** Every claim here is already established elsewhere on the site
 *  (data/business.ts, data/why-mec.ts, data/new-car-protection.ts). */
export const detailingWhyPoints: DetailingWhyPoint[] = [
  {
    id: "experience",
    title: "5+ Years Experience",
    description: "Experienced in professional vehicle detailing and paint correction.",
  },
  {
    id: "accreditation",
    title: "Gtechniq Accredited",
    description: "Professional ceramic coating expertise and accreditation.",
  },
  {
    id: "products",
    title: "Premium Products",
    description: "Professional-grade products selected to achieve superior results.",
  },
  {
    id: "workmanship",
    title: "Detail-Focused Workmanship",
    description:
      "Every vehicle is assessed individually rather than treated as a one-size-fits-all job.",
  },
  {
    id: "brisbane",
    title: "Brisbane Based",
    description: "Professional vehicle care for Brisbane customers.",
  },
];

export interface DetailingFaq {
  id: string;
  question: string;
  answer: string;
}

export const detailingFaqs: DetailingFaq[] = [
  {
    id: "how-long-does-a-detail-take",
    question: "How long does a detail take?",
    answer:
      "Turnaround depends on your vehicle's size, condition and the service booked. We'll confirm an estimated timeframe once we've assessed your vehicle at the time of quoting.",
  },
  {
    id: "which-package-is-right",
    question: "Which detailing package is right for my vehicle?",
    answer:
      "It depends on what your vehicle needs — a light refresh, a cabin clean, a complete reset, or paint correction for swirl marks and dull finish. Use the guide above, or tell us about your vehicle when you request a quote and we'll recommend the right service.",
  },
  {
    id: "mobile-detailing",
    question: "Do you offer mobile detailing?",
    answer:
      "MEC Detailing operates from our Kedron studio, where every vehicle is detailed in a controlled environment with the right tools and products on hand. Get in touch with your vehicle and location and we can confirm the best option for you.",
  },
  {
    id: "can-you-remove-scratches",
    question: "Can you remove scratches?",
    answer:
      "Paint correction addresses light, surface-level scratches that catch and scatter light. Deeper scratches may need additional correction time, or may not be fully removable — we'll assess your paint and let you know what's achievable before starting.",
  },
  {
    id: "detailing-vs-correction",
    question: "What's the difference between detailing and paint correction?",
    answer:
      "Detailing cleans and restores your vehicle's interior and exterior — wash, decontamination and interior care. Paint correction is a separate, more involved process using machine polishing to reduce swirl marks, light scratches and oxidation from the clear coat itself.",
  },
  {
    id: "add-ceramic-after-detail",
    question: "Can I add ceramic coating after a detail?",
    answer:
      "Yes. A Full Detail or paint correction is a great foundation before ceramic coating, since properly prepared paint gets the best result from the coating. Explore our ceramic coating options and let us know if you'd like to add it to your booking.",
  },
  {
    id: "how-do-i-get-a-quote",
    question: "How do I get a quote?",
    answer:
      "Use the Get My Free Quote button anywhere on this page to tell us about your vehicle and which service you're after. We'll confirm pricing and availability.",
  },
];
