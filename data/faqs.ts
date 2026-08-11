export type FaqCategory =
  | "Ceramic Coating"
  | "Paint Correction"
  | "Warranties"
  | "Maintenance"
  | "Booking";

export interface Faq {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: "what-is-ceramic-coating",
    category: "Ceramic Coating",
    question: "What is ceramic coating?",
    answer:
      "Ceramic coating is a liquid polymer applied by hand to your vehicle's paint, wheels, glass or interior surfaces. It chemically bonds to the surface to form a durable protective layer that supports gloss, hydrophobic beading and easier maintenance.",
  },
  {
    id: "is-ceramic-coating-scratch-proof",
    category: "Ceramic Coating",
    question: "Is ceramic coating scratch-proof?",
    answer:
      "No. Ceramic coating adds a layer of chemical and environmental resistance, but it is not scratch-proof and does not replace paint protection film. Normal care is still required to avoid marring the surface.",
  },
  {
    id: "crystal-serum-light-vs-ultra",
    category: "Ceramic Coating",
    question:
      "What is the difference between Crystal Serum Light and Crystal Serum Ultra?",
    answer:
      "Both are professional Gtechniq ceramic coating systems installed by accredited applicators. Crystal Serum Light is featured in our Essential Protection package with a 5-year Gtechniq warranty, while Crystal Serum Ultra is featured in our Ultimate Protection package with a warranty of up to 9 years. Your installer can talk through which suits your vehicle and budget.",
  },
  {
    id: "coat-new-vehicle",
    category: "Ceramic Coating",
    question: "Can you coat a brand-new vehicle?",
    answer:
      "Yes. New vehicles still benefit from paint decontamination and, in many cases, light correction before coating, since factory paint can carry swirl marks or contaminants from transport and delivery.",
  },
  {
    id: "wheel-glass-coating",
    category: "Ceramic Coating",
    question: "Do you offer wheel and glass coating?",
    answer:
      "Yes. Wheel coating and glass coating are included in both our Essential and Ultimate packages, and can also be discussed as part of a custom quote.",
  },
  {
    id: "paint-correction-included",
    category: "Paint Correction",
    question: "Is paint correction included?",
    answer:
      "Paint correction is included in both the Essential Protection and Ultimate Protection packages. The extent of correction required depends on your paint's condition and is confirmed during your vehicle assessment.",
  },
  {
    id: "what-does-correction-fix",
    category: "Paint Correction",
    question: "What does paint correction address?",
    answer:
      "Paint correction is a machine polishing process used to reduce common imperfections such as swirl marks, light scratches, water spots, oxidation and paint haze before a ceramic coating is applied.",
  },
  {
    id: "warranty-cover",
    category: "Warranties",
    question: "What does the warranty cover?",
    answer:
      "Our packages include a manufacturer-backed Gtechniq warranty — 5 years on Essential Protection and up to 9 years on Ultimate Protection. Warranty terms and conditions are confirmed at the time of installation and depend on the specific Gtechniq product applied.",
  },
  {
    id: "how-long-does-coating-last",
    category: "Warranties",
    question: "How long does ceramic coating last?",
    answer:
      "Longevity depends on the product installed, your vehicle's environment and how it's maintained. Each package carries its own manufacturer-backed Gtechniq warranty term, which your installer will confirm for your vehicle.",
  },
  {
    id: "maintain-coating",
    category: "Maintenance",
    question: "How should I maintain my coating?",
    answer:
      "A coated vehicle is easier to maintain, but still requires regular washing with pH-neutral products and correct technique. We provide aftercare guidance at handover so you know how to look after your coating long-term.",
  },
  {
    id: "how-long-does-application-take",
    category: "Booking",
    question: "How long does ceramic coating take?",
    answer:
      "Turnaround depends on your vehicle's condition and the package selected, since preparation and correction time varies. We'll confirm an estimated timeframe once we've assessed your vehicle.",
  },
  {
    id: "how-to-get-a-quote",
    category: "Booking",
    question: "How do I get a quote?",
    answer:
      "Use the Get My Free Quote button anywhere on the site to tell us about your vehicle. We'll review your enquiry and follow up with package guidance and next steps.",
  },
];

export const faqCategories: FaqCategory[] = [
  "Ceramic Coating",
  "Paint Correction",
  "Warranties",
  "Maintenance",
  "Booking",
];

/** Curated subset shown in the homepage FAQ accordion, in display order. */
export const homepageFaqIds = [
  "what-is-ceramic-coating",
  "how-long-does-coating-last",
  "is-ceramic-coating-scratch-proof",
  "crystal-serum-light-vs-ultra",
  "paint-correction-included",
  "warranty-cover",
  "maintain-coating",
];
