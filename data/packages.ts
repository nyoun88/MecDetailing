/**
 * The two standalone Gtechniq ceramic coatings MEC installs — the core
 * product of /packages. Deliberately NOT called "packages" anywhere
 * customer-facing (see AGENTS notes on /packages repositioning): these are
 * presented as the coating itself, with wheel/glass/interior/trim
 * protection offered separately as optional extras (data/ceramic-page.ts),
 * not bundled in. Complete bundled protection lives on
 * /new-car-protection instead — a deliberately separate offering.
 *
 * This file is also the source of truth for the homepage's package teaser
 * (components/sections/packages-section.tsx) and the quote funnel's
 * protection step (data/quote.ts) — renaming/restructuring fields here
 * flows through to both automatically.
 */
export interface CeramicPackage {
  id: string;
  index: string;
  /** Compact handle used in the card's index tag and the quote form. */
  label: string;
  nameLines: [string, string];
  /** Shown prominently under the name, e.g. "5-Year Ceramic Coating". */
  subtitle: string;
  /** Pill text shown on the card, e.g. "Recommended". Omit for no pill. */
  badge?: string;
  /** Headline "From $X" figure. */
  priceFrom: number;
  warranty: string;
  featured: boolean;
  inclusions: string[];
  description: string;
  image: "essentialProtection" | "ultimateProtection";
}

export const packages: CeramicPackage[] = [
  {
    id: "crystal-serum-light",
    index: "01",
    label: "Crystal Serum Light",
    nameLines: ["Crystal Serum", "Light"],
    subtitle: "5-Year Ceramic Coating",
    priceFrom: 1199,
    warranty: "5-Year Gtechniq Warranty",
    featured: false,
    description:
      "Gtechniq Crystal Serum Light — an advanced ceramic coating for owners who want genuine long-term paint protection, enhanced gloss and easier maintenance.",
    inclusions: [
      "5-Year Protection",
      "Enhanced Gloss",
      "Hydrophobic Surface",
      "Easier Maintenance",
      "Chemical Resistance",
      "Professional Preparation And Application",
    ],
    image: "essentialProtection",
  },
  {
    id: "crystal-serum-ultra",
    index: "02",
    label: "Crystal Serum Ultra",
    nameLines: ["Crystal Serum", "Ultra"],
    subtitle: "9-Year Ceramic Coating",
    badge: "Recommended",
    priceFrom: 1499,
    warranty: "Up to 9-Year Gtechniq Warranty",
    featured: true,
    description:
      "Gtechniq Crystal Serum Ultra — our flagship standalone ceramic coating, for owners who want the highest level of gloss, hydrophobic performance and chemical resistance MEC installs.",
    inclusions: [
      "9-Year Protection",
      "Exceptional Gloss",
      "Advanced Hydrophobic Performance",
      "Easier Maintenance",
      "Excellent Chemical Resistance",
      "Professional Preparation And Application",
    ],
    image: "ultimateProtection",
  },
];
