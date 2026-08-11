/**
 * Core business information. Only supplied facts live here — no invented
 * phone numbers, emails, addresses or social accounts. Placeholders are
 * clearly marked so they're easy to find and replace.
 */

export const business = {
  name: "MEC Detailing Australia",
  shortName: "MEC Detailing",
  siteUrl: "https://www.mecdetailing.com.au",
  location: {
    city: "Brisbane",
    state: "Queensland",
    country: "Australia",
    display: "Brisbane, Queensland",
  },
  // Placeholder contact details — replace with the real values when supplied.
  contact: {
    phone: "",
    phoneHref: "", // e.g. "tel:+61400000000" once a real number is supplied
    email: "",
    emailHref: "", // e.g. "mailto:hello@mecdetailing.com.au" once supplied
  },
  social: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },
  accreditation: "Gtechniq Accredited Installer",
  primaryCta: "Get My Free Quote",
  secondaryCta: "View Ceramic Packages",
} as const;
