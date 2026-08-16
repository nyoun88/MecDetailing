import { SelectableCard } from "@/components/forms/selectable-card";
import { newCarPackageOptions, type NewCarQuoteFormData } from "@/data/new-car-quote";
import type { NewCarQuoteErrors } from "@/lib/validate-new-car-quote";

export function StepNewCarPackage({
  data,
  errors,
  onChange,
}: {
  data: NewCarQuoteFormData;
  errors: NewCarQuoteErrors;
  onChange: (patch: Partial<NewCarQuoteFormData>) => void;
}) {
  return (
    <div>
      <div className="grid gap-3" role="radiogroup" aria-label="New car protection package">
        {newCarPackageOptions.map((option) => (
          <SelectableCard
            key={option.id}
            label={option.label}
            description={option.description}
            selected={data.packageId === option.id}
            onClick={() => onChange({ packageId: option.id })}
          />
        ))}
      </div>
      {errors.packageId && <p className="mt-3 text-xs text-red-400">{errors.packageId}</p>}
      {data.packageId === "recommend-for-me" && (
        <p className="mt-5 text-sm text-ink-muted">
          No problem. We&rsquo;ll recommend the right package based on your
          vehicle.
        </p>
      )}
    </div>
  );
}
