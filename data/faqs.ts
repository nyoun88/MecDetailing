export type FaqCategory =
  | "Ceramic Coating"
  | "New Car Protection"
  | "Detailing"
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
      "Both are professional Gtechniq ceramic coatings installed by accredited applicators. Crystal Serum Light carries a 5-year Gtechniq warranty, while Crystal Serum Ultra carries a warranty of up to 9 years, with exceptional gloss and advanced hydrophobic performance. Your installer can talk through which suits your vehicle and budget.",
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
      "Yes. Wheel Protection ($400) and G1 ClearVision Smart Glass ($399) are both available as optional extras alongside either ceramic coating.",
  },
  {
    id: "exo5-topcoat",
    category: "Ceramic Coating",
    question: "Can I add the EXO 5 topcoat?",
    answer:
      "Yes. Gtechniq EXO 5 is available as an optional extra applied over Crystal Serum Ultra, designed to enhance water repellency and surface performance.",
  },
  {
    id: "ncp-what-is-new-car-protection",
    category: "New Car Protection",
    question: "What is New Car Protection?",
    answer:
      "New Car Protection is our bundled package for new vehicles — combining ceramic coating with wheel, glass and interior protection, plus professional preparation, all under one package price. It's a separate offering from our standalone ceramic coatings.",
  },
  {
    id: "ncp-whats-included",
    category: "New Car Protection",
    question: "What's included in a New Car Protection package?",
    answer:
      "Every package bundles a Gtechniq ceramic coating with wheel coating, G1 ClearVision Smart Glass, interior protection, and professional preparation — wash, clay decontamination and a machine polish — all under one package price.",
  },
  {
    id: "ncp-bundle-value",
    category: "New Car Protection",
    question: "Is New Car Protection better value than booking services individually?",
    answer:
      "Yes. Each package bundles a standalone ceramic coating with wheel, glass and interior protection at a lower combined price than booking each service separately — see the New Car Protection page for the exact saving on each package.",
  },
  {
    id: "ncp-exo5",
    category: "New Car Protection",
    question: "What does Ultimate Shield's EXO 5 topcoat do?",
    answer:
      "EXO 5 is a hydrophobic topcoat applied over Crystal Serum Ultra, designed to enhance water repellency and surface performance — included as standard in Ultimate Shield Protection, our top New Car Protection package.",
  },
  {
    id: "ncp-how-to-quote",
    category: "New Car Protection",
    question: "How do I get a New Car Protection quote?",
    answer:
      "New Car Protection has its own quote form, separate from our general quote form, so you're only asked about the Signature, Platinum and Ultimate Shield packages. Use the Get A Quote button on the New Car Protection page to get started.",
  },
  {
    id: "det-how-long",
    category: "Detailing",
    question: "How long does a detail take?",
    answer:
      "Turnaround depends on your vehicle's size, condition and the service booked. We'll confirm an estimated timeframe once we've assessed your vehicle at the time of quoting.",
  },
  {
    id: "det-which-package",
    category: "Detailing",
    question: "Which detailing package is right for my vehicle?",
    answer:
      "It depends on what your vehicle needs — a light refresh (Mini Detail), a cabin clean (Interior Detail), a complete reset (Full Detail), or paint correction for swirl marks and dull finish. Tell us about your vehicle when you request a quote and we'll recommend the right service.",
  },
  {
    id: "det-mobile",
    category: "Detailing",
    question: "Do you offer mobile detailing?",
    answer:
      "MEC Detailing operates from our Kedron studio, where every vehicle is detailed in a controlled environment with the right tools and products on hand. Get in touch with your vehicle and location and we can confirm the best option for you.",
  },
  {
    id: "det-scratches",
    category: "Detailing",
    question: "Can you remove scratches?",
    answer:
      "Paint correction addresses light, surface-level scratches that catch and scatter light. Deeper scratches may need additional correction time, or may not be fully removable — we'll assess your paint and let you know what's achievable before starting.",
  },
  {
    id: "det-vs-correction",
    category: "Detailing",
    question: "What's the difference between detailing and paint correction?",
    answer:
      "Detailing cleans and restores your vehicle's interior and exterior — wash, decontamination and interior care. Paint correction is a separate, more involved process using machine polishing to reduce swirl marks, light scratches and oxidation from the clear coat itself.",
  },
  {
    id: "det-add-ceramic",
    category: "Detailing",
    question: "Can I add ceramic coating after a detail?",
    answer:
      "Yes. A Full Detail or paint correction is a great foundation before ceramic coating, since properly prepared paint gets the best result from the coating. Explore our ceramic coating options and let us know if you'd like to add it to your booking.",
  },
  {
    id: "paint-correction-included",
    category: "Paint Correction",
    question: "Is paint correction included?",
    answer:
      "Both coatings include a wash, clay decontamination and a 1-hour machine buff before coating — enough to address light imperfections in most cases. More extensive multi-stage correction can be quoted separately once your paint has been assessed.",
  },
  {
    id: "what-does-correction-fix",
    category: "Paint Correction",
    question: "What does the included buff address?",
    answer:
      "The included 1-hour machine buff is a light polishing pass that helps reduce minor imperfections such as light swirl marks and haze. Deeper defects like heavier scratches, oxidation or water spot etching may need additional correction time, quoted separately.",
  },
  {
    id: "warranty-cover",
    category: "Warranties",
    question: "What does the warranty cover?",
    answer:
      "Each ceramic coating includes a manufacturer-backed Gtechniq warranty — 5 years on Crystal Serum Light and up to 9 years on Crystal Serum Ultra. Warranty terms and conditions are confirmed at the time of installation and depend on the specific Gtechniq product applied.",
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
  "New Car Protection",
  "Detailing",
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
