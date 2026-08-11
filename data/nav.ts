export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Ceramic Packages", href: "/packages" },
  { label: "Why MEC", href: "/why-mec" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Ceramic Packages", href: "/packages" },
  { label: "Why MEC", href: "/why-mec" },
  { label: "FAQ", href: "/faq" },
  { label: "Get a Free Quote", href: "/quote" },
];

export const footerServices: NavLink[] = [
  { label: "Ceramic Coating", href: "/packages" },
  { label: "Paint Correction", href: "/packages" },
  { label: "Wheel Coating", href: "/packages" },
  { label: "Glass Coating", href: "/packages" },
  { label: "Interior Protection", href: "/packages" },
  { label: "Vehicle Detailing", href: "/packages" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];
