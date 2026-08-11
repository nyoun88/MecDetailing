/**
 * Editable credibility statistics. Kept intentionally imprecise per the
 * supplied business information — do not tighten these into exact figures
 * that were never provided.
 */
export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "5+", label: "Years Of Experience" },
  { value: "100s", label: "Ceramic Coatings Applied" },
  { value: "1,000s", label: "Vehicles Detailed" },
];
