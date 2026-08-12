export interface CeramicPackage {
  id: string;
  index: string;
  label: string;
  badge: string;
  name: string;
  nameLines: [string, string];
  /** Headline "From $X" figure. */
  priceFrom: number;
  product: string;
  warranty: string;
  featured: boolean;
  inclusions: string[];
  recommendedFor: string;
  description: string;
  image: "essentialProtection" | "ultimateProtection";
}

const baseInclusions = (warranty: string) => [
  warranty,
  "Wash & Clay Decontamination",
  "1-Hour Machine Buff",
  "Professional Installation",
];

export const packages: CeramicPackage[] = [
  {
    id: "essential-protection",
    index: "01",
    label: "Essential",
    badge: "Essential",
    name: "Essential Protection",
    nameLines: ["Essential", "Protection"],
    priceFrom: 1199,
    product: "Crystal Serum Light",
    warranty: "5-Year Gtechniq Warranty",
    featured: false,
    description:
      "A durable, professionally installed ceramic system for owners who want genuine long-term protection without the ultimate coating tier.",
    inclusions: baseInclusions("5-Year Gtechniq Warranty"),
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
    priceFrom: 1499,
    product: "Crystal Serum Ultra",
    warranty: "Up to 9-Year Gtechniq Warranty",
    featured: true,
    description:
      "Our complete Gtechniq ceramic system — the highest level of protection we install.",
    inclusions: baseInclusions("Up to 9-Year Gtechniq Warranty"),
    recommendedFor: "Owners who want the highest level of protection MEC installs.",
    image: "ultimateProtection",
  },
];

export interface OptionalUpgrade {
  id: string;
  name: string;
  description: string;
  /** Flat price, or a range where it varies by coating size/tier. */
  priceLabel: string;
}

/**
 * Real priced add-ons. Glass protection was in an earlier draft of this
 * list but has no confirmed current price — removed rather than guessed.
 * Re-add it here (with a price) if/when that's confirmed.
 */
export const optionalUpgrades: OptionalUpgrade[] = [
  {
    id: "exo-v5",
    name: "ExoV5 Topcoat",
    description:
      "An additional topcoat layer applied over a ceramic system for extra gloss and slickness.",
    priceLabel: "+$300–$400",
  },
  {
    id: "interior-protection",
    name: "Smart Fabric / Leather & Vinyl",
    description:
      "Protective coating applied to interior fabric, leather and vinyl surfaces to help resist everyday wear, spills and UV exposure.",
    priceLabel: "$300",
  },
  {
    id: "wheel-kit",
    name: "Wheel Kit",
    description:
      "Dedicated ceramic coating for wheel faces, helping reduce brake dust build-up and easing maintenance.",
    priceLabel: "$400",
  },
];

export interface ComparisonRow {
  feature: string;
  essential: string;
  ultimate: string;
}

export const comparisonTable: ComparisonRow[] = [
  { feature: "Ceramic Coating", essential: "Crystal Serum Light", ultimate: "Crystal Serum Ultra" },
  { feature: "Warranty", essential: "5 Years", ultimate: "Up to 9 Years" },
  { feature: "Wash & Clay Decontamination", essential: "Included", ultimate: "Included" },
  { feature: "1-Hour Machine Buff", essential: "Included", ultimate: "Included" },
  { feature: "ExoV5 Topcoat", essential: "Optional (+$300–$400)", ultimate: "Optional (+$400)" },
  { feature: "Wheel Kit", essential: "Optional (+$400)", ultimate: "Optional (+$400)" },
  { feature: "Smart Fabric / Leather & Vinyl", essential: "Optional (+$300)", ultimate: "Optional (+$300)" },
  {
    feature: "Recommended For",
    essential: "Daily drivers seeking dependable protection",
    ultimate: "Owners wanting MEC's highest level of protection",
  },
];
