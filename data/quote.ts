import { packages } from "@/data/packages";
import { formatCurrency } from "@/lib/utils";

export interface SelectableOption {
  id: string;
  label: string;
  description?: string;
}

export const serviceOptions: SelectableOption[] = [
  { id: "ceramic-coating", label: "Ceramic Coating" },
  { id: "paint-correction", label: "Paint Correction" },
  { id: "wheel-protection", label: "Wheel Protection" },
  { id: "glass-protection", label: "Glass Protection" },
  { id: "interior-protection", label: "Interior Protection" },
];

export const conditionOptions: SelectableOption[] = [
  { id: "brand-new", label: "Brand New" },
  { id: "excellent", label: "Excellent" },
  { id: "good", label: "Good" },
  { id: "fair", label: "Fair" },
  { id: "needs-attention", label: "Needs Attention" },
  { id: "not-sure", label: "Not Sure" },
];

export const protectionOptions: SelectableOption[] = [
  ...packages.map((pkg) => ({
    id: pkg.id,
    label: pkg.label,
    description: `From ${formatCurrency(pkg.priceFrom)} — ${pkg.product}, ${pkg.warranty.replace("Gtechniq Warranty", "warranty").toLowerCase()}.`,
  })),
  {
    id: "recommend-for-me",
    label: "Not Sure",
    description: "We'll recommend the right option based on your vehicle.",
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

export function findOption(options: SelectableOption[], id: string) {
  return options.find((option) => option.id === id);
}
