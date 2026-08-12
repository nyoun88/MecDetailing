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
  { value: "25+", label: "Years Of Experience" },
  { value: "1,000s", label: "Ceramic Coatings Applied" },
  { value: "5,000+", label: "Vehicles Detailed" },
];
