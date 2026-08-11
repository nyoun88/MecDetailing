import { SelectableCard } from "@/components/forms/selectable-card";
import { protectionOptions, type QuoteFormData } from "@/data/quote";
import type { QuoteErrors } from "@/lib/validate-quote";

export function StepProtection({
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
      <div className="grid gap-3" role="radiogroup" aria-label="Protection package">
        {protectionOptions.map((option) => (
          <SelectableCard
            key={option.id}
            label={option.label}
            description={option.description}
            selected={data.protection === option.id}
            onClick={() => onChange({ protection: option.id })}
          />
        ))}
      </div>
      {errors.protection && <p className="mt-3 text-xs text-red-400">{errors.protection}</p>}
      {data.protection === "recommend-for-me" && (
        <p className="mt-5 text-sm text-ink-muted">
          No problem. We&rsquo;ll recommend the right option based on your
          vehicle.
        </p>
      )}
    </div>
  );
}
