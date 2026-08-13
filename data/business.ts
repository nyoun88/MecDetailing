/**
 * Core business information. Only supplied facts live here — no invented
 * phone numbers, emails, addresses or social accounts. Placeholders are
 * clearly marked so they're easy to find and replace.
 */

export const business = {
  name: "MEC Detailing Australia",
  shortName: "MEC Detailing",
  siteUrl: "https://mecdetailingaust.com.au",
  location: {
    city: "Brisbane",
    state: "Queensland",
    country: "Australia",
    display: "Brisbane, Queensland",
  },
  address: {
    unit: "5",
    street: "77 Araluen Street",
    suburb: "Kedron",
    state: "QLD",
    postcode: "4031",
    country: "Australia",
    /** "5/77 Araluen Street" — Australian unit/street-number convention. */
    display: "5/77 Araluen Street, Kedron QLD 4031",
  },
  contact: {
    phone: "0409 390 929",
    phoneHref: "tel:+61409390929",
    email: "angelo@mecdetailingaust.com.au",
    emailHref: "mailto:angelo@mecdetailingaust.com.au",
  },
  // No Instagram/Facebook/TikTok accounts exist yet, so the footer icon
  // row is removed rather than linking "#" to nowhere (see
  // components/layout/footer.tsx). Fill in real URLs here and re-add the
  // <SocialLink> row + icons once accounts exist.
  social: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },
  accreditation: "Gtechniq Accredited Installer",
  /** Confirmed by the supplied logo artwork ("Since 2020"). */
  foundedYear: 2020,
  primaryCta: "Get My Free Quote",
  secondaryCta: "View Ceramic Packages",
  /** Understated technical specifications shown at the base of the hero. */
  heroSpecs: ["Gtechniq Accredited", "Up To 9 Year Warranty", "Brisbane, QLD"],
} as const;
