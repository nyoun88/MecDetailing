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
        "flex w-full items-center justify-between gap-4 rounded-[3px] border px-6 py-5 text-left transition-all duration-200 hover:-translate-y-0.5",
        selected
          ? "border-accent bg-bg-card"
          : "border-border bg-bg-card hover:border-border-strong",
      )}
    >
      <span>
        <span className="block text-lg font-semibold text-ink md:text-xl">{label}</span>
        {description && (
          <span className="mt-1 block text-sm text-ink-muted">{description}</span>
        )}
      </span>
      <span
        aria-hidden
        className={cn(
          "flex size-6 shrink-0 items-center justify-center border text-bg transition-colors",
          multi ? "rounded-[3px]" : "rounded-full",
          selected ? "border-accent bg-accent" : "border-border-strong bg-transparent",
        )}
      >
        {selected && <Check className="size-4" strokeWidth={3} />}
      </span>
    </button>
  );
}
