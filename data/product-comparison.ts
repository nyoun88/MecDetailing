/**
 * Technical comparison of the Gtechniq products used across MEC's ceramic
 * packages, based on Gtechniq's own published product comparison chart.
 * The "sealant" tier (C2 Liquid Crystal) is deliberately excluded — MEC
 * doesn't install it, so it has no place in a comparison of what's
 * actually on offer.
 *
 * Star ratings (1–5) are transcribed as-supplied from Gtechniq's chart,
 * not invented.
 */

export interface ComparisonProduct {
  id: string;
  name: string;
  /** Which MEC package this maps to, if any — shown as a small subtitle. */
  packageLabel?: string;
  duration: string;
}

export const comparisonProducts: ComparisonProduct[] = [
  { id: "exo", name: "ExoV5 Topcoat", duration: "18 Months Protection" },
  { id: "csl", name: "Crystal Serum Light", packageLabel: "Essential Protection", duration: "5-Year Warranty" },
  { id: "csl-exo", name: "Crystal Serum Light + ExoV5", packageLabel: "Essential + Topcoat", duration: "5-Year Warranty" },
  { id: "csu", name: "Crystal Serum Ultra", packageLabel: "Ultimate Protection", duration: "Up to 9-Year Warranty" },
  { id: "csu-exo", name: "Crystal Serum Ultra + ExoV5", packageLabel: "Ultimate + Topcoat", duration: "Up to 9-Year Warranty" },
];

export interface ComparisonMetric {
  feature: string;
  /** One score per entry in comparisonProducts, same order. */
  scores: [number, number, number, number, number];
}

export const comparisonMetrics: ComparisonMetric[] = [
  { feature: "Durability", scores: [3, 4, 4, 5, 5] },
  { feature: "Ease of Application", scores: [4, 3, 2, 1, 1] },
  { feature: "Slickness", scores: [4, 4, 5, 4, 5] },
  { feature: "Gloss", scores: [4, 4, 4, 4, 5] },
  { feature: "Wash Swirl Resistance", scores: [3, 4, 4, 5, 5] },
  { feature: "Water / Dirt Repellency", scores: [5, 2, 5, 4, 4] },
  { feature: "Chemical Resistance", scores: [4, 4, 4, 5, 5] },
  { feature: "UV Resistance", scores: [4, 4, 4, 4, 5] },
];
