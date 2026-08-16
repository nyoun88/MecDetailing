import type { images } from "@/data/images";

/**
 * Data for the dedicated /new-car-protection page — a separate offering
 * from the ceramic-only coatings in data/packages.ts. Bundles ceramic,
 * wheel, glass and interior protection together for new-car owners.
 * Deliberately does not touch data/packages.ts or its existing pricing.
 */

export interface NewCarPackage {
  id: string;
  index: string;
  label: string;
  nameLines: [string, string];
  /** Short product line shown under the name. */
  tagline: string;
  /** One-line positioning statement. */
  positioning: string;
  /** Headline "From $X" figure. */
  priceFrom: number;
  /** Grouped "spec sheet" summary — always visible, ahead of the full
   *  inclusions checklist below, so each card scans in one glance. */
  paintProtection: string;
  additionalProtection: string;
  preparation: string;
  protectionPeriod: string;
  warrantyLabel: string;
  /** Pill text shown on the card, e.g. "Most Popular". Omit for no pill. */
  badge?: string;
  featured: boolean;
  inclusions: string[];
  image: keyof typeof images;
}

export const newCarPackages: NewCarPackage[] = [
  {
    id: "signature-protection",
    index: "01",
    label: "Signature",
    nameLines: ["Signature", "Protection"],
    tagline: "Crystal Serum Light • Wheel • Glass • Interior Protection",
    positioning: "Premium ceramic protection for your new vehicle.",
    priceFrom: 1949,
    paintProtection: "Crystal Serum Light",
    additionalProtection: "Wheel + Glass + Interior",
    preparation: "Wash + Clay + 1-Hour Machine Polish/Buff",
    protectionPeriod: "5 Years",
    warrantyLabel: "5-Year Coating Protection",
    featured: false,
    inclusions: [
      "Gtechniq Crystal Serum Light — 30ml",
      "Gtechniq Wheel Coating — All 4 Wheels",
      "Gtechniq G1 ClearVision Smart Glass",
      "Gtechniq Smart Fabric / Leather / Vinyl Interior Protection",
      "Professional Vehicle Wash",
      "Full Clay / Decontamination Treatment",
      "1-Hour Machine Polish / Buff",
      "Professional Ceramic Coating Application",
      "New-Car Paint Preparation",
      "5-Year Coating Protection",
    ],
    image: "essentialProtection",
  },
  {
    id: "platinum-protection",
    index: "02",
    label: "Platinum",
    nameLines: ["Platinum", "Protection"],
    tagline: "Crystal Serum Ultra • Wheel • Glass • Interior Protection",
    positioning: "Our most popular balance of protection, longevity and value.",
    priceFrom: 2149,
    paintProtection: "Crystal Serum Ultra",
    additionalProtection: "Wheel + Glass + Interior",
    preparation: "Wash + Clay + 1-Hour Machine Polish/Buff",
    protectionPeriod: "9 Years",
    warrantyLabel: "9-Year Coating Protection",
    badge: "Most Popular",
    featured: true,
    inclusions: [
      "Gtechniq Crystal Serum Ultra — 30ml",
      "Gtechniq Wheel Coating — All 4 Wheels",
      "Gtechniq G1 ClearVision Smart Glass",
      "Gtechniq Smart Fabric / Leather / Vinyl Interior Protection",
      "Professional Vehicle Wash",
      "Full Clay / Decontamination Treatment",
      "1-Hour Machine Polish / Buff",
      "Professional Ceramic Coating Application",
      "New-Car Paint Preparation",
      "9-Year Coating Protection",
    ],
    image: "ultimateProtection",
  },
  {
    id: "ultimate-protection",
    index: "03",
    label: "Ultimate Shield",
    nameLines: ["Ultimate Shield", "Protection"],
    tagline: "Crystal Serum Ultra + EXO 5 • Wheel • Glass • Interior Protection",
    positioning: "The complete premium new-car protection system.",
    priceFrom: 2549,
    paintProtection: "Crystal Serum Ultra + EXO 5",
    additionalProtection: "Wheel + Glass + Interior",
    preparation: "Wash + Clay + 1-Hour Machine Polish/Buff",
    protectionPeriod: "9 Years",
    warrantyLabel: "9-Year Crystal Serum Ultra Protection + EXO 5 Topcoat",
    badge: "Best Protection",
    featured: false,
    inclusions: [
      "Gtechniq Crystal Serum Ultra — 30ml",
      "Gtechniq EXO 5 — 30ml",
      "Gtechniq Wheel Coating — All 4 Wheels",
      "Gtechniq G1 ClearVision Smart Glass",
      "Gtechniq Smart Fabric / Leather / Vinyl Interior Protection",
      "Professional Vehicle Wash",
      "Full Clay / Decontamination Treatment",
      "1-Hour Machine Polish / Buff",
      "Professional Multi-Layer Ceramic Coating Application",
      "New-Car Paint Preparation",
      "9-Year Crystal Serum Ultra Protection",
      "EXO 5 Hydrophobic Topcoat",
    ],
    image: "waterBeading",
  },
];

/** Everyday threats a new car is still exposed to, used in the value prop section. */
export const newCarThreats = [
  "UV Exposure",
  "Road Grime",
  "Environmental Contamination",
  "Bird Droppings",
  "Brake Dust",
  "Water Spotting",
  "Interior Staining",
  "Everyday Wear",
];

export interface NewCarFeatureBlock {
  title: string;
  description: string;
}

export const newCarFeatureBlocks: NewCarFeatureBlock[] = [
  {
    title: "Paint",
    description:
      "Ceramic coating designed to enhance gloss, provide hydrophobic performance and make maintenance easier.",
  },
  {
    title: "Wheels",
    description: "Designed to help reduce the impact of brake dust and road contamination.",
  },
  {
    title: "Glass",
    description:
      "Hydrophobic glass treatment for improved water repellency and easier maintenance.",
  },
  {
    title: "Interior",
    description:
      "Coverage for fabric, leather and vinyl surfaces against everyday contamination and spills.",
  },
];

/** The "Why Protect Your New Car With MEC?" trust section. Every claim
 *  here is already established elsewhere on the site (data/business.ts,
 *  data/why-mec.ts) — nothing new is asserted. */
export interface NewCarTrustPoint {
  title: string;
  description: string;
}

export const newCarTrustPoints: NewCarTrustPoint[] = [
  {
    title: "Gtechniq Accredited",
    description: "Professionally trained and accredited to install Gtechniq protection systems.",
  },
  {
    title: "Professional Preparation",
    description:
      "Every vehicle is thoroughly washed, decontaminated and prepared before treatment is applied.",
  },
  {
    title: "5+ Years Experience",
    description: "Experienced in professional automotive detailing and paint preservation.",
  },
  {
    title: "Premium Products",
    description: "We use premium Gtechniq systems throughout our new-car protection range.",
  },
  {
    title: "Complete Vehicle Coverage",
    description: "Our packages protect more than just the paint — wheels, glass and interior surfaces too.",
  },
  {
    title: "Professional Application",
    description: "Every system is applied with attention to preparation, coverage and finish.",
  },
];

export interface NewCarComparisonRow {
  feature: string;
  signature: string;
  platinum: string;
  ultimate: string;
}

const YES = "✓";
const NO = "—";

export const newCarComparisonTable: NewCarComparisonRow[] = [
  { feature: "Crystal Serum Light", signature: YES, platinum: NO, ultimate: NO },
  { feature: "Crystal Serum Ultra", signature: NO, platinum: YES, ultimate: YES },
  { feature: "EXO 5", signature: NO, platinum: NO, ultimate: YES },
  { feature: "Wheel Coating", signature: YES, platinum: YES, ultimate: YES },
  { feature: "G1 ClearVision Smart Glass", signature: YES, platinum: YES, ultimate: YES },
  { feature: "Interior Protection", signature: YES, platinum: YES, ultimate: YES },
  { feature: "Wash", signature: YES, platinum: YES, ultimate: YES },
  { feature: "Clay / Decontamination", signature: YES, platinum: YES, ultimate: YES },
  { feature: "1-Hour Machine Polish / Buff", signature: YES, platinum: YES, ultimate: YES },
  { feature: "Paint Preparation", signature: YES, platinum: YES, ultimate: YES },
  {
    feature: "Coating Protection",
    signature: "5 Years",
    platinum: "9 Years",
    ultimate: "9 Years + EXO 5 Topcoat",
  },
];

export interface NewCarProcessStep {
  number: string;
  title: string;
  description: string;
}

export const newCarProcessSteps: NewCarProcessStep[] = [
  {
    number: "01",
    title: "Inspect",
    description: "We assess the vehicle's paint, condition and surfaces.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "The vehicle is washed, decontaminated and prepared before treatment is applied.",
  },
  {
    number: "03",
    title: "Protect",
    description:
      "The selected ceramic, wheel, glass and interior systems are professionally installed.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Your new vehicle is returned protected, glossy and ready for the road.",
  },
];

export interface NewCarFaq {
  id: string;
  question: string;
  answer: string;
}

export const newCarFaqs: NewCarFaq[] = [
  {
    id: "new-car-ready-for-coating",
    question: "Is my new car ready for ceramic coating?",
    answer:
      "In most cases, yes — but even a new vehicle should be professionally inspected and prepared before coating, since factory paint can carry swirl marks or contaminants from transport and delivery. That's why inspection and preparation are built into every package.",
  },
  {
    id: "paint-correction-on-new-car",
    question: "Do I need paint correction on a brand-new car?",
    answer:
      "It depends on the vehicle's actual paint condition. Every package includes professional preparation — wash, clay decontamination and a machine polish — before coating. More extensive correction is assessed and quoted separately if your paint needs it.",
  },
  {
    id: "crystal-serum-light-vs-ultra",
    question: "What's the difference between Crystal Serum Light and Crystal Serum Ultra?",
    answer:
      "Both are professional Gtechniq ceramic coating systems. Crystal Serum Ultra is the more advanced coating level, carrying a longer protection duration (up to 9 years) than Crystal Serum Light (5 years).",
  },
  {
    id: "what-does-exo5-add",
    question: "What does EXO 5 add?",
    answer:
      "EXO 5 is a hydrophobic topcoat applied over Crystal Serum Ultra, designed to enhance water repellency and surface performance — included as standard in Ultimate Shield Protection.",
  },
  {
    id: "interior-protection-included",
    question: "Does the package protect the interior too?",
    answer:
      "Yes. All three packages include Gtechniq Smart Fabric / Leather / Vinyl Interior Protection, alongside paint, wheel and glass coating.",
  },
  {
    id: "whats-in-wheel-protection",
    question: "What is included in the wheel protection?",
    answer:
      "Each package includes a dedicated Gtechniq wheel coating applied to all four wheels, designed to help reduce the impact of brake dust and road contamination and make routine cleaning easier.",
  },
  {
    id: "glass-protection-included",
    question: "Does the package include glass protection?",
    answer:
      "Yes. All three packages include Gtechniq G1 ClearVision Smart Glass, a hydrophobic glass treatment for improved water repellency and visibility.",
  },
];
