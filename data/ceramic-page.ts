/**
 * Supporting data for the restructured /ceramic-coating page — everything that
 * isn't the two core coating products themselves (see data/packages.ts).
 * Kept separate since none of this is shared with the homepage teaser or
 * the quote funnel, unlike data/packages.ts.
 */

export interface CeramicBenefit {
  title: string;
  description: string;
}

export const whyCeramicBenefits: CeramicBenefit[] = [
  {
    title: "Protects Paint",
    description: "Shields your paint from environmental contamination.",
  },
  {
    title: "Enhances Gloss",
    description: "A deeper, richer finish than paint alone.",
  },
  {
    title: "Hydrophobic Surface",
    description: "Water beads and sheets off instead of sitting on the paint.",
  },
  {
    title: "Easier Washing",
    description: "Dirt and grime release from the surface far more easily.",
  },
  {
    title: "Chemical Resistance",
    description: "Better resistance to contaminants that etch unprotected paint.",
  },
  {
    title: "Lasting Appearance",
    description: "Helps your vehicle hold its finish for years, not months.",
  },
];

export interface CeramicComparisonRow {
  feature: string;
  light: string;
  ultra: string;
}

export const ceramicComparisonTable: CeramicComparisonRow[] = [
  { feature: "Protection", light: "5 Years", ultra: "9 Years" },
  { feature: "Gloss", light: "High", ultra: "Exceptional" },
  { feature: "Hydrophobic Performance", light: "Excellent", ultra: "Excellent" },
  { feature: "Chemical Resistance", light: "Excellent", ultra: "Advanced" },
  { feature: "Best For", light: "Long-term protection", ultra: "Maximum standalone coating protection" },
];

export interface ProtectionExtra {
  id: string;
  name: string;
  /** Short handle used in the "Selected Protection" summary. */
  shortLabel: string;
  description: string;
  price: number;
  /** e.g. "Add Interior Protection" — doubles as the toggle button label. */
  ctaLabel: string;
}

/**
 * The five optional protection extras. Deliberately presented as
 * selectable add-ons alongside a coating, never as their own package
 * tier — that's what /new-car-protection is for.
 */
export const protectionExtras: ProtectionExtra[] = [
  {
    id: "interior-protection",
    name: "Smart Fabric / Leather / Vinyl Protection",
    shortLabel: "Interior Protection",
    description:
      "Protect interior fabric, leather and vinyl surfaces from everyday contamination and spills.",
    price: 300,
    ctaLabel: "Add Interior Protection",
  },
  {
    id: "wheel-protection",
    name: "Wheel Protection",
    shortLabel: "Wheel Protection",
    description:
      "Professional wheel coating designed to help protect wheels from brake dust and road contamination.",
    price: 400,
    ctaLabel: "Add Wheel Protection",
  },
  {
    id: "glass-protection",
    name: "G1 ClearVision Smart Glass",
    shortLabel: "Glass Protection",
    description:
      "Hydrophobic glass protection designed to improve water repellency and make glass easier to maintain.",
    price: 399,
    ctaLabel: "Add Glass Protection",
  },
  {
    id: "trim-protection",
    name: "Trim Protection",
    shortLabel: "Trim Protection",
    description:
      "Professional protection for exterior trim surfaces to help maintain their appearance and protect against environmental exposure.",
    price: 295,
    ctaLabel: "Add Trim Protection",
  },
  {
    id: "exo-5-topcoat",
    name: "Gtechniq EXO 5 Topcoat",
    shortLabel: "EXO 5 Topcoat",
    description:
      "A hydrophobic topcoat applied over Crystal Serum Ultra, designed to enhance water repellency and surface performance.",
    price: 400,
    ctaLabel: "Add EXO 5 Topcoat",
  },
];

export interface CeramicProcessStep {
  number: string;
  title: string;
  description: string;
}

export const ceramicProcessSteps: CeramicProcessStep[] = [
  {
    number: "01",
    title: "Choose Your Coating",
    description: "Select Crystal Serum Light or Crystal Serum Ultra.",
  },
  {
    number: "02",
    title: "Select Your Extras",
    description: "Add wheel, glass, interior, trim or EXO 5 topcoat protection if required.",
  },
  {
    number: "03",
    title: "Vehicle Preparation",
    description:
      "Your vehicle is washed, decontaminated and professionally prepared before coating.",
  },
  {
    number: "04",
    title: "Professional Application",
    description:
      "Your selected protection systems are professionally applied by MEC Detailing.",
  },
];

export interface CeramicFaq {
  id: string;
  question: string;
  answer: string;
}

export const ceramicFaqs: CeramicFaq[] = [
  {
    id: "light-vs-ultra",
    question: "What's the difference between Crystal Serum Light and Crystal Serum Ultra?",
    answer:
      "Both are professional Gtechniq ceramic coatings, professionally prepared and applied. Crystal Serum Ultra is the more advanced option — a longer coating term, exceptional gloss and advanced hydrophobic performance — while Crystal Serum Light still delivers genuine long-term protection at a lower starting price.",
  },
  {
    id: "how-long-does-it-last",
    question: "How long does ceramic coating last?",
    answer:
      "Crystal Serum Light carries a 5-year Gtechniq warranty and Crystal Serum Ultra up to 9 years. Actual longevity also depends on your vehicle's environment and how it's maintained.",
  },
  {
    id: "paint-correction-needed",
    question: "Do I need paint correction before ceramic coating?",
    answer:
      "Not always. Every coating includes a wash, clay decontamination and machine polish to prepare the paint. If your paint has heavier defects, more extensive correction can be assessed and quoted separately.",
  },
  {
    id: "add-wheel-glass",
    question: "Can I add wheel or glass protection?",
    answer:
      "Yes. Wheel Protection and G1 ClearVision Smart Glass are both available as optional extras alongside either coating.",
  },
  {
    id: "add-interior",
    question: "Can I add interior protection?",
    answer:
      "Yes. Smart Fabric / Leather / Vinyl Protection is available as an optional extra to protect your interior surfaces alongside your coating.",
  },
  {
    id: "add-trim",
    question: "Can I add protection to my exterior trim?",
    answer:
      "Yes. Trim Protection is available as an optional extra, applied to your exterior trim surfaces alongside your coating.",
  },
  {
    id: "add-exo5",
    question: "Can I add the EXO 5 topcoat?",
    answer:
      "Yes. Gtechniq EXO 5 is available as an optional extra applied over Crystal Serum Ultra, designed to enhance water repellency and surface performance.",
  },
  {
    id: "multiple-extras",
    question: "Can I choose more than one optional extra?",
    answer:
      "Yes. You can add as many of the five optional extras as you'd like — they're independent of each other and of which coating you choose.",
  },
  {
    id: "worth-it-daily-driver",
    question: "Is ceramic coating worth it on a daily driver?",
    answer:
      "Yes — daily drivers are exposed to more road grime, UV and contamination than most vehicles, which is exactly what a ceramic coating is designed to help with. It also makes routine washing noticeably easier to keep on top of.",
  },
];
