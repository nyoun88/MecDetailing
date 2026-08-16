import { images } from "@/data/images";

export interface WhyMecSection {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  image: (typeof images)[keyof typeof images];
}

/**
 * Content for the redesigned /why-mec page's sections beyond the six
 * EditorialSplit blocks below (which the "Preparation Deep Dive" section
 * still reuses one entry from — see id "preparation-standards"). Every
 * claim here is a restatement of facts already established elsewhere in
 * this file, data/business.ts, data/packages.ts or data/ceramic-page.ts —
 * nothing new is asserted.
 */

export interface WhyMecFeaturePoint {
  id: string;
  title: string;
  description: string;
}

/** Section 2 — "Not Just Another Ceramic Coating Installer". */
export const whyMecDifferentPoints: WhyMecFeaturePoint[] = [
  {
    id: "accreditation",
    title: "Gtechniq Accredited",
    description:
      "Professional installation using Gtechniq coating systems and manufacturer-backed processes.",
  },
  {
    id: "preparation",
    title: "Preparation First",
    description: "Every vehicle is assessed and properly prepared before protection is applied.",
  },
  {
    id: "experience",
    title: "Automotive Experience",
    description: "Experience working with private vehicle owners and automotive businesses.",
  },
  {
    id: "aftercare",
    title: "Aftercare Support",
    description: "Our relationship doesn't end when the vehicle leaves the studio.",
  },
];

export interface WhyMecStandardStep {
  number: string;
  title: string;
  description: string;
}

/** Section 4 — "The MEC Standard" six-step process. */
export const whyMecStandardSteps: WhyMecStandardStep[] = [
  {
    number: "01",
    title: "Assess",
    description:
      "We inspect the vehicle and its existing paint condition before recommending the appropriate protection system.",
  },
  {
    number: "02",
    title: "Prepare",
    description: "The vehicle is thoroughly washed, decontaminated and prepared for correction and coating.",
  },
  {
    number: "03",
    title: "Correct",
    description:
      "Where required, paint correction is performed to improve gloss and remove or reduce suitable paint imperfections.",
  },
  {
    number: "04",
    title: "Protect",
    description: "The selected Gtechniq coating system is professionally applied according to the manufacturer's process.",
  },
  {
    number: "05",
    title: "Inspect",
    description: "The finish is carefully inspected under appropriate lighting before the vehicle is handed back.",
  },
  {
    number: "06",
    title: "Hand Over",
    description: "You receive the information and guidance required to properly maintain your vehicle's protection.",
  },
];

/** Section 5 — the preparation process chain, rendered top to bottom. */
export const whyMecPreparationChain: string[] = [
  "Decontamination",
  "Paint Inspection",
  "Correction",
  "Panel Preparation",
  "Coating Application",
  "Final Inspection",
];

/** Section 9 — "Protection Doesn't End At Handover". */
export const whyMecAftercarePoints: WhyMecFeaturePoint[] = [
  {
    id: "guidance",
    title: "Aftercare Guidance",
    description: "Clear advice on how to safely maintain the coating.",
  },
  {
    id: "maintenance",
    title: "Maintenance Support",
    description: "Professional maintenance options to keep the vehicle looking its best.",
  },
  {
    id: "long-term",
    title: "Long-Term Protection",
    description: "Support throughout the life of the protection system where applicable.",
  },
];

/** Section 10 — "Because The Coating Isn't The Whole Job". Deliberately
 *  doesn't name any competitor; framed as basic vs. professional
 *  installation in general. */
export const whyMecComparison = {
  basic: [
    "Minimal preparation",
    "Generic process",
    "Limited inspection",
    "Application-focused",
    "Little ongoing support",
  ],
  mec: [
    "Vehicle assessment",
    "Thorough preparation",
    "Paint inspection",
    "Correction where required",
    "Professional coating application",
    "Final inspection",
    "Aftercare guidance",
  ],
};

export interface WhyMecFaq {
  id: string;
  question: string;
  answer: string;
}

/** Section 11 FAQ. */
export const whyMecFaqs: WhyMecFaq[] = [
  {
    id: "wm-why-preparation-matters",
    question: "Why is preparation so important before ceramic coating?",
    answer:
      "A ceramic coating bonds to the surface beneath it, so any contamination, defects or inconsistencies left in the paint get sealed in along with it. Proper decontamination, inspection and correction where needed are what determine how the finished result looks and performs.",
  },
  {
    id: "wm-all-coatings-same",
    question: "Are all ceramic coatings the same?",
    answer:
      "No. Coating systems vary in formulation, durability and performance. We install Gtechniq's professional range — Crystal Serum Light and Crystal Serum Ultra — selected according to the vehicle and the level of protection required.",
  },
  {
    id: "wm-every-vehicle-correction",
    question: "Does every vehicle require paint correction?",
    answer:
      "Not always. It depends on the paint's actual condition. Every coating includes a wash, clay decontamination and a machine polish to prepare the surface — more extensive multi-stage correction is assessed and quoted separately if the paint needs it.",
  },
  {
    id: "wm-how-long-does-it-last",
    question: "How long does ceramic coating last?",
    answer:
      "Crystal Serum Light carries a 5-year Gtechniq warranty and Crystal Serum Ultra up to 9 years. Actual longevity also depends on your vehicle's environment and how it's maintained.",
  },
  {
    id: "wm-what-is-gtechniq-accreditation",
    question: "What does Gtechniq accreditation mean?",
    answer:
      "It means we've been trained and accredited to install Gtechniq's ceramic coating systems to the standard required to back them with a manufacturer warranty, following their specified preparation and application process.",
  },
  {
    id: "wm-choosing-the-right-package",
    question: "How do I choose the right coating package?",
    answer:
      "It comes down to your vehicle, how you use it and the level of protection you want. Crystal Serum Ultra offers the longest protection term and most advanced performance; Crystal Serum Light still delivers genuine long-term protection at a lower starting price. Tell us about your vehicle when you request a quote and we can help you decide.",
  },
  {
    id: "wm-maintaining-the-coating",
    question: "How do I maintain my ceramic coating?",
    answer:
      "A coated vehicle is easier to maintain, but still needs regular washing with pH-neutral products and correct technique. We provide aftercare guidance at handover so you know how to look after your coating long-term.",
  },
  {
    id: "wm-can-you-protect-new-vehicle",
    question: "Can you protect a brand-new vehicle?",
    answer:
      "Yes. New vehicles still benefit from paint decontamination and, in many cases, light correction before coating, since factory paint can carry swirl marks or contaminants from transport and delivery. See our New Car Protection packages for bundled options built specifically for new vehicles.",
  },
];

export const whyMecSections: WhyMecSection[] = [
  {
    id: "experience",
    eyebrow: "Experience",
    title: "Years of hands-on detailing work.",
    body: [
      "MEC Detailing has spent years working exclusively on vehicle paint protection — from daily drivers to vehicles supplied through automotive dealership partners.",
      "That experience shapes how we assess paint, plan preparation and apply coatings consistently, vehicle after vehicle.",
    ],
    image: images.experience,
  },
  {
    id: "accreditation",
    eyebrow: "Professional Accreditation",
    title: "Gtechniq accredited installation.",
    body: [
      "We hold professional Gtechniq accreditation, meaning our application process follows the standards required to install Gtechniq's ceramic coating systems and back them with a manufacturer warranty.",
    ],
    image: images.accreditation,
  },
  {
    id: "industry-relationships",
    eyebrow: "Industry Relationships",
    title: "Trusted by automotive businesses.",
    body: [
      "We've worked with automotive businesses and dealerships including BYD, Eagers Automotive, Urban Garage and Norris Motor Group, alongside our direct relationship with Gtechniq.",
      "That work means operating to a consistent standard, at volume, under commercial expectations.",
    ],
    image: images.industry,
  },
  {
    id: "preparation-standards",
    eyebrow: "Preparation Standards",
    title: "The coating is only as good as the prep.",
    body: [
      "Before any ceramic system goes on, paint is decontaminated and assessed. Where correction is needed, it happens before coating — not after.",
      "This is the step that determines how the finished result looks and performs.",
    ],
    image: images.preparation,
  },
  {
    id: "premium-products",
    eyebrow: "Premium Products",
    title: "Professional Gtechniq systems.",
    body: [
      "We install Gtechniq's professional ceramic coating range across paint, wheels, glass and interior — a coherent system rather than a mix of unrelated products.",
    ],
    image: images.products,
  },
  {
    id: "aftercare",
    eyebrow: "Aftercare",
    title: "Guidance that continues after handover.",
    body: [
      "Every vehicle leaves with a handover walkthrough and aftercare guidance, so you know how to maintain your coating and get the most from its warranty term.",
    ],
    image: images.benefitProtection,
  },
];
