import { newCarPackages } from "@/data/new-car-protection";
import { formatCurrency } from "@/lib/utils";
import type { SelectableOption } from "@/data/quote";

/**
 * Data for the dedicated New Car Protection quote form
 * (/new-car-protection/quote) — a separate funnel from the general /quote
 * one. The general funnel's Protection step lists the ceramic-only
 * packages from data/packages.ts (Crystal Serum Light/Ultra), which don't
 * match the bundled Signature/Platinum/Ultimate Shield packages sold on
 * /new-car-protection, so visitors coming from that page get their own
 * shorter, correctly-scoped form instead. Submissions still land in the
 * same inbox — see app/api/new-car-quote/route.ts.
 */

export const newCarPackageOptions: SelectableOption[] = [
  ...newCarPackages.map((pkg) => ({
    id: pkg.id,
    label: pkg.nameLines.join(" "),
    description: `From ${formatCurrency(pkg.priceFrom)} — ${pkg.warrantyLabel}.`,
  })),
  {
    id: "recommend-for-me",
    label: "Not Sure",
    description: "We'll recommend the right package based on your vehicle.",
  },
];

export interface NewCarQuoteFormData {
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  packageId: string;
  firstName: string;
  phone: string;
  email: string;
  notes: string;
  agreedToContact: boolean;
}

export const emptyNewCarQuoteForm: NewCarQuoteFormData = {
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  packageId: "",
  firstName: "",
  phone: "",
  email: "",
  notes: "",
  agreedToContact: false,
};

export const newCarQuoteSteps = ["Vehicle", "Package", "Contact"] as const;
