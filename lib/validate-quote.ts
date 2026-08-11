import type { QuoteFormData } from "@/data/quote";

export type QuoteErrors = Partial<Record<keyof QuoteFormData, string>>;

const currentYear = new Date().getFullYear();

export function validateStep(step: number, data: QuoteFormData): QuoteErrors {
  const errors: QuoteErrors = {};

  if (step === 0) {
    if (!data.vehicleMake.trim()) errors.vehicleMake = "Enter your vehicle's make.";
    if (!data.vehicleModel.trim()) errors.vehicleModel = "Enter your vehicle's model.";
    const year = Number(data.vehicleYear);
    if (!data.vehicleYear.trim()) {
      errors.vehicleYear = "Enter your vehicle's year.";
    } else if (!Number.isInteger(year) || year < 1980 || year > currentYear + 1) {
      errors.vehicleYear = `Enter a year between 1980 and ${currentYear + 1}.`;
    }
  }

  if (step === 1) {
    if (data.services.length === 0) {
      errors.services = "Select at least one thing you'd like protected.";
    }
  }

  if (step === 2) {
    if (!data.condition) errors.condition = "Choose the option closest to your vehicle.";
  }

  if (step === 3) {
    if (!data.protection) errors.protection = "Select a protection option.";
  }

  if (step === 4) {
    if (!data.firstName.trim()) errors.firstName = "Enter your first name.";
    if (!data.lastName.trim()) errors.lastName = "Enter your last name.";
    if (!data.phone.trim()) {
      errors.phone = "Enter a phone number.";
    } else if (!/^[0-9+()\s-]{6,}$/.test(data.phone.trim())) {
      errors.phone = "Enter a valid phone number.";
    }
    if (!data.email.trim()) {
      errors.email = "Enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = "Enter a valid email address.";
    }
    if (!data.agreedToContact) {
      errors.agreedToContact = "Please confirm you're happy to be contacted.";
    }
  }

  return errors;
}

export function isStepValid(step: number, data: QuoteFormData): boolean {
  return Object.keys(validateStep(step, data)).length === 0;
}
