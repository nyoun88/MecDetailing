import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function SelectableCard({
  label,
  description,
  selected,
  onClick,
  multi = false,
}: {
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      role={multi ? "checkbox" : "radio"}
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        "flex w-full items-start justify-between gap-4 rounded-[10px] border px-5 py-4 text-left transition-all duration-200 hover:-translate-y-0.5",
        selected
          ? "border-accent bg-bg-card"
          : "border-border bg-bg-card hover:border-border-strong",
      )}
    >
      <span>
        <span className="block text-base font-semibold text-ink">{label}</span>
        {description && (
          <span className="mt-1 block text-sm text-ink-muted">{description}</span>
        )}
      </span>
      <span
        aria-hidden
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center border text-bg transition-colors",
          multi ? "rounded-[4px]" : "rounded-full",
          selected ? "border-accent bg-accent" : "border-border-strong bg-transparent",
        )}
      >
        {selected && <Check className="size-3.5" strokeWidth={3} />}
      </span>
    </button>
  );
}
