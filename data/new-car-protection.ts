import type { images } from "@/data/images";

/**
 * Data for the dedicated /new-car-protection page — a separate offering
 * from the ceramic-only packages in data/packages.ts. Bundles ceramic,
 * wheel, glass and interior protection together for new-car owners.
 * Deliberately does not touch data/packages.ts or its existing pricing.
 */

export interface NewCarPackage {
  id: string;
  index: string;
  label: string;
  name: string;
  nameLines: [string, string];
  /** Short product line shown under the name. */
  tagline: string;
  /** One-line positioning statement. */
  positioning: string;
  /** Headline "From $X" figure. */
  priceFrom: number;
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
    name: "Signature Protection",
    nameLines: ["Signature", "Protection"],
    tagline: "Crystal Serum Light • Wheel • Glass • Interior Protection",
    positioning: "The premium entry-level package.",
    priceFrom: 1949,
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
    name: "Platinum Protection",
    nameLines: ["Platinum", "Protection"],
    tagline: "Crystal Serum Ultra • Wheel • Glass • Interior Protection",
    positioning: "The ideal balance of premium protection, longevity and value.",
    priceFrom: 2149,
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
    label: "Ultimate",
    name: "Ultimate Protection",
    nameLines: ["Ultimate", "Protection"],
    tagline: "Crystal Serum Ultra + EXO 5 • Wheel • Glass • Interior Protection",
    positioning: "The complete premium new-car protection system.",
    priceFrom: 2549,
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
      "Ceramic protection designed to enhance gloss and make maintenance easier.",
  },
  {
    title: "Wheels",
    description: "Protection against brake dust and road contamination.",
  },
  {
    title: "Glass",
    description:
      "Hydrophobic glass protection for improved water repellency and visibility.",
  },
  {
    title: "Interior",
    description:
      "Protection for fabric, leather and vinyl surfaces against everyday spills and contamination.",
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
      "The vehicle is washed, decontaminated and prepared before protection is applied.",
  },
  {
    number: "03",
    title: "Protect",
    description:
      "The selected ceramic, wheel, glass and interior protection systems are professionally installed.",
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
      "In most cases, yes — but even new vehicles require proper inspection and preparation before coating, since factory paint can carry swirl marks or contaminants from transport and delivery. That's why inspection and preparation are built into every package.",
  },
  {
    id: "paint-correction-on-new-car",
    question: "Do I need paint correction on a brand-new car?",
    answer:
      "It depends on the vehicle's condition. The preparation included in every package — wash, clay decontamination and a machine polish — is designed to prepare the paint before coating. More extensive correction is assessed and quoted separately if your paint needs it.",
  },
  {
    id: "crystal-serum-light-vs-ultra",
    question: "What's the difference between Crystal Serum Light and Crystal Serum Ultra?",
    answer:
      "Both are professional Gtechniq ceramic coating systems. Crystal Serum Ultra is the more advanced and longer-lasting option, which is why it carries a longer coating protection term than Crystal Serum Light.",
  },
  {
    id: "what-does-exo5-add",
    question: "What does EXO 5 add?",
    answer:
      "EXO 5 is an additional hydrophobic topcoat applied over Crystal Serum Ultra, designed to enhance water repellency and surface performance — included as standard in Ultimate Protection.",
  },
  {
    id: "interior-protection-included",
    question: "Does the package protect the interior too?",
    answer:
      "Yes. All three packages include Gtechniq Smart Fabric / Leather / Vinyl Interior Protection, alongside paint, wheel and glass coating.",
  },
];
