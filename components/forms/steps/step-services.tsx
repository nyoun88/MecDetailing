import { SelectableCard } from "@/components/forms/selectable-card";
import { serviceOptions, type QuoteFormData } from "@/data/quote";
import type { QuoteErrors } from "@/lib/validate-quote";

export function StepServices({
  data,
  errors,
  onChange,
}: {
  data: QuoteFormData;
  errors: QuoteErrors;
  onChange: (patch: Partial<QuoteFormData>) => void;
}) {
  function toggle(id: string) {
    const services = data.services.includes(id)
      ? data.services.filter((s) => s !== id)
      : [...data.services, id];
    onChange({ services });
  }

  return (
    <div>
      <div className="grid gap-3" role="group" aria-label="Services to protect">
        {serviceOptions.map((option) => (
          <SelectableCard
            key={option.id}
            multi
            label={option.label}
            selected={data.services.includes(option.id)}
            onClick={() => toggle(option.id)}
          />
        ))}
      </div>
      {errors.services && <p className="mt-3 text-xs text-red-400">{errors.services}</p>}
    </div>
  );
}
