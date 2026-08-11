export interface Benefit {
  index: string;
  title: string;
  description: string;
  image: "benefitGloss" | "benefitHydrophobic" | "benefitMaintenance" | "benefitProtection";
}

/** Homepage "WHAT YOU'LL NOTICE" horizontal-scroll section. */
export const benefits: Benefit[] = [
  {
    index: "01",
    title: "Deeper Gloss",
    description:
      "A levelled, decontaminated surface reflects light differently. The gloss reads deeper because the paint underneath it is properly prepared.",
    image: "benefitGloss",
  },
  {
    index: "02",
    title: "Hydrophobic Performance",
    description:
      "Water and contamination are less likely to cling to a coated surface — it beads and sheets off rather than sitting on the paint.",
    image: "benefitHydrophobic",
  },
  {
    index: "03",
    title: "Easier Maintenance",
    description:
      "A properly coated vehicle releases dirt more readily during a wash, reducing the contact time and effort each maintenance wash takes.",
    image: "benefitMaintenance",
  },
  {
    index: "04",
    title: "Long-Term Protection",
    description:
      "Each package carries a manufacturer-backed Gtechniq warranty term, giving you a documented standard the coating is expected to meet.",
    image: "benefitProtection",
  },
];

/** Retained for the /why-mec page's editorial sections. */
export interface DifferencePoint {
  index: string;
  title: string;
  description: string;
}

export const differencePoints: DifferencePoint[] = [
  {
    index: "01",
    title: "Accredited Installers",
    description: "Professional Gtechniq accreditation.",
  },
  {
    index: "02",
    title: "Preparation First",
    description: "Coating performance starts with proper preparation.",
  },
  {
    index: "03",
    title: "Premium Products",
    description: "Professional Gtechniq ceramic coating systems.",
  },
  {
    index: "04",
    title: "Long-Term Protection",
    description: "Protection packages designed for long-term ownership.",
  },
];
