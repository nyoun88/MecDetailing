import { TextField } from "@/components/forms/text-field";
import type { QuoteFormData } from "@/data/quote";
import type { QuoteErrors } from "@/lib/validate-quote";

export function StepVehicle({
  data,
  errors,
  onChange,
}: {
  data: QuoteFormData;
  errors: QuoteErrors;
  onChange: (patch: Partial<QuoteFormData>) => void;
}) {
  return (
    <div className="grid gap-5">
      <TextField
        label="Vehicle Make"
        id="vehicleMake"
        placeholder="Toyota"
        value={data.vehicleMake}
        error={errors.vehicleMake}
        onChange={(e) => onChange({ vehicleMake: e.target.value })}
        autoComplete="off"
      />
      <TextField
        label="Vehicle Model"
        id="vehicleModel"
        placeholder="LandCruiser"
        value={data.vehicleModel}
        error={errors.vehicleModel}
        onChange={(e) => onChange({ vehicleModel: e.target.value })}
        autoComplete="off"
      />
      <TextField
        label="Vehicle Year"
        id="vehicleYear"
        placeholder="2026"
        inputMode="numeric"
        value={data.vehicleYear}
        error={errors.vehicleYear}
        onChange={(e) => onChange({ vehicleYear: e.target.value.replace(/[^0-9]/g, "") })}
        maxLength={4}
        autoComplete="off"
      />
    </div>
  );
}
