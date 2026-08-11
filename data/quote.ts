export interface SelectableOption {
  id: string;
  label: string;
  description?: string;
}

export const serviceOptions: SelectableOption[] = [
  { id: "ceramic-coating", label: "Ceramic Coating" },
  { id: "paint-correction", label: "Paint Correction" },
  { id: "wheels", label: "Wheels" },
  { id: "glass", label: "Glass" },
  { id: "interior", label: "Interior" },
];

export const conditionOptions: SelectableOption[] = [
  { id: "brand-new", label: "Brand New" },
  { id: "excellent", label: "Excellent" },
  { id: "good", label: "Good" },
  { id: "fair", label: "Fair" },
  { id: "needs-attention", label: "Needs Attention" },
];

export const protectionOptions: SelectableOption[] = [
  {
    id: "essential-protection",
    label: "Essential Protection",
    description: "From $975 — Gtechniq Crystal Serum Light, 5-year warranty.",
  },
  {
    id: "ultimate-protection",
    label: "Ultimate Protection",
    description: "From $1,595 — Gtechniq Crystal Serum Ultra, up to 9-year warranty.",
  },
  {
    id: "recommend-for-me",
    label: "Not Sure — Recommend For Me",
    description: "We'll suggest the right package once we've reviewed your vehicle.",
  },
];

export interface QuoteFormData {
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  services: string[];
  condition: string;
  protection: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  notes: string;
  agreedToContact: boolean;
}

export const emptyQuoteForm: QuoteFormData = {
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  services: [],
  condition: "",
  protection: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  notes: "",
  agreedToContact: false,
};

export const quoteSteps = [
  "Vehicle",
  "Services",
  "Condition",
  "Protection",
  "Contact",
] as const;
