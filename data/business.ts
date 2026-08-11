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
    phone: "TBC — add phone number",
    phoneHref: "tel:", // leave empty until a real number is supplied
    email: "TBC — add email address",
    emailHref: "mailto:",
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
