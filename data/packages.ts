export interface CeramicPackage {
  id: string;
  index: string;
  label: string;
  badge: string;
  name: string;
  nameLines: [string, string];
  priceFrom: number;
  product: string;
  warranty: string;
  featured: boolean;
  inclusions: string[];
  recommendedFor: string;
  description: string;
  image: "essentialProtection" | "ultimateProtection";
}

export const packages: CeramicPackage[] = [
  {
    id: "essential-protection",
    index: "01",
    label: "Essential",
    badge: "Essential",
    name: "Essential Protection",
    nameLines: ["Essential", "Protection"],
    priceFrom: 975,
    product: "Crystal Serum Light",
    warranty: "5-Year Gtechniq Warranty",
    featured: false,
    description:
      "A durable, professionally installed ceramic system for owners who want genuine long-term protection without the ultimate coating tier.",
    inclusions: [
      "5-Year Gtechniq Warranty",
      "Paint Correction",
      "Wheel Coating",
      "Glass Coating",
      "Professional Installation",
    ],
    recommendedFor: "Daily drivers and owners after dependable, long-term protection.",
    image: "essentialProtection",
  },
  {
    id: "ultimate-protection",
    index: "02",
    label: "Ultimate",
    badge: "Most Popular",
    name: "Ultimate Protection",
    nameLines: ["Ultimate", "Protection"],
    priceFrom: 1595,
    product: "Crystal Serum Ultra",
    warranty: "Up to 9-Year Gtechniq Warranty",
    featured: true,
    description:
      "Our complete Gtechniq ceramic system — the highest level of protection we install, covering paint, wheels, glass and interior.",
    inclusions: [
      "Up to 9-Year Gtechniq Warranty",
      "Paint Correction",
      "Wheel Coating",
      "Glass Coating",
      "Interior Protection",
      "Professional Installation",
    ],
    recommendedFor: "Owners who want the highest level of protection MEC installs.",
    image: "ultimateProtection",
  },
];

export interface OptionalUpgrade {
  id: string;
  name: string;
  description: string;
}

export const optionalUpgrades: OptionalUpgrade[] = [
  {
    id: "exo-v5",
    name: "ExoV5",
    description:
      "An additional topcoat layer that can be applied over a ceramic system for extra gloss and slickness.",
  },
  {
    id: "interior-protection",
    name: "Interior Protection",
    description:
      "Protective coatings applied to interior surfaces to help resist everyday wear, spills and UV exposure.",
  },
  {
    id: "wheel-protection",
    name: "Wheel Protection",
    description:
      "Dedicated ceramic coating for wheel faces, helping reduce brake dust build-up and easing maintenance.",
  },
  {
    id: "glass-protection",
    name: "Glass Protection",
    description:
      "A hydrophobic ceramic layer for glass surfaces to improve visibility in wet conditions and simplify cleaning.",
  },
];

export interface ComparisonRow {
  feature: string;
  essential: string;
  ultimate: string;
}

export const comparisonTable: ComparisonRow[] = [
  { feature: "Paint Coating", essential: "Crystal Serum Light", ultimate: "Crystal Serum Ultra" },
  { feature: "Warranty", essential: "5 Years", ultimate: "Up to 9 Years" },
  { feature: "Paint Correction", essential: "Included", ultimate: "Included" },
  { feature: "Wheel Protection", essential: "Included", ultimate: "Included" },
  { feature: "Glass Protection", essential: "Included", ultimate: "Included" },
  { feature: "Interior Protection", essential: "Optional Upgrade", ultimate: "Included" },
  {
    feature: "Recommended For",
    essential: "Daily drivers seeking dependable protection",
    ultimate: "Owners wanting MEC's highest level of protection",
  },
];
