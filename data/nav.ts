export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Ceramic Coatings", href: "/ceramic-coating" },
  { label: "New Car", href: "/new-car-protection" },
  { label: "Detailing", href: "/detailing" },
  { label: "Why MEC", href: "/why-mec" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Ceramic Coatings", href: "/ceramic-coating" },
  { label: "New Car", href: "/new-car-protection" },
  { label: "Detailing", href: "/detailing" },
  { label: "Why MEC", href: "/why-mec" },
  { label: "FAQ", href: "/faq" },
  { label: "Get a Free Quote", href: "/quote" },
];

export const footerServices: NavLink[] = [
  { label: "Ceramic Coating", href: "/ceramic-coating" },
  { label: "Wheel Coating", href: "/ceramic-coating" },
  { label: "Glass Coating", href: "/ceramic-coating" },
  { label: "Paint Correction", href: "/detailing" },
  { label: "Interior Detail", href: "/detailing" },
  { label: "Full Detail", href: "/detailing" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];
