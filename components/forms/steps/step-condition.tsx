import { SelectableCard } from "@/components/forms/selectable-card";
import { conditionOptions, type QuoteFormData } from "@/data/quote";
import type { QuoteErrors } from "@/lib/validate-quote";

export function StepCondition({
  data,
  errors,
  onChange,
}: {
  data: QuoteFormData;
  errors: QuoteErrors;
  onChange: (patch: Partial<QuoteFormData>) => void;
}) {
  return (
    <div>
      <div className="grid gap-3" role="radiogroup" aria-label="Vehicle condition">
        {conditionOptions.map((option) => (
          <SelectableCard
            key={option.id}
            label={option.label}
            selected={data.condition === option.id}
            onClick={() => onChange({ condition: option.id })}
          />
        ))}
      </div>
      {errors.condition && <p className="mt-3 text-xs text-red-400">{errors.condition}</p>}
      <p className="mt-5 text-sm text-ink-muted">
        Not sure? That&rsquo;s completely fine — we&rsquo;ll assess it for you.
      </p>
    </div>
  );
}
