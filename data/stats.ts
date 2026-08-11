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
  { value: "5+", label: "Years Experience" },
  { value: "100s", label: "Coatings Applied" },
  { value: "1,000s", label: "Vehicles Detailed" },
  { value: "100%", label: "Commitment To Quality" },
];
