export interface TrustPartner {
  name: string;
  /** Optional logo path — falls back to a clean text wordmark placeholder when omitted. */
  logo?: string;
}

/**
 * Only businesses MEC has actually worked with. Do not add to this list
 * without confirmation — it appears verbatim on the public site.
 */
export const trustPartners: TrustPartner[] = [
  { name: "BYD" },
  { name: "Eagers Automotive" },
  { name: "Urban Garage" },
  { name: "Norris Motor Group" },
  { name: "Gtechniq" },
];
