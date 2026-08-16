import { TextField } from "@/components/forms/text-field";
import type { NewCarQuoteFormData } from "@/data/new-car-quote";
import type { NewCarQuoteErrors } from "@/lib/validate-new-car-quote";

export function StepNewCarVehicle({
  data,
  errors,
  onChange,
}: {
  data: NewCarQuoteFormData;
  errors: NewCarQuoteErrors;
  onChange: (patch: Partial<NewCarQuoteFormData>) => void;
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
