import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        tone === "accent"
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-border-strong text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
