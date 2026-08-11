import { cn } from "@/lib/utils";

export function TextField({
  label,
  id,
  error,
  className,
  ...props
}: {
  label: string;
  id: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-[3px] border bg-bg-card px-5 py-4 text-lg text-ink placeholder:text-ink-muted/50 transition-colors focus-visible:outline-2 focus-visible:outline-accent md:text-xl",
          error ? "border-red-400/60" : "border-border focus:border-border-strong",
        )}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextAreaField({
  label,
  id,
  error,
  className,
  ...props
}: {
  label: string;
  id: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full rounded-[3px] border border-border bg-bg-card px-4 py-3.5 text-base text-ink placeholder:text-ink-muted/60 transition-colors focus-visible:outline-2 focus-visible:outline-accent",
          error && "border-red-400/60",
        )}
        {...props}
      />
    </div>
  );
}
