export interface Benefit {
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    title: "Hydrophobic Protection",
    description:
      "Water and contamination are less likely to cling to the coated surface.",
  },
  {
    title: "UV Resistance",
    description:
      "Helps protect your paint from prolonged environmental exposure.",
  },
  {
    title: "Chemical Resistance",
    description:
      "Provides an additional layer of defence against everyday contaminants.",
  },
  {
    title: "Easier Maintenance",
    description: "A properly coated vehicle is easier to wash and maintain.",
  },
];

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
