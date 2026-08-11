import { cn } from "@/lib/utils";

/**
 * Small uppercase technical label, optionally paired with an index number
 * ("01 / CERAMIC PROTECTION"). Used throughout in place of icons or badges
 * to introduce a section.
 */
export function Eyebrow({
  children,
  index,
  className,
  tone = "muted",
}: {
  children: React.ReactNode;
  index?: string;
  className?: string;
  tone?: "muted" | "ink";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em]",
        tone === "muted" ? "text-ink-muted" : "text-ink",
        className,
      )}
    >
      {index && <span className="font-mono text-accent">{index}</span>}
      {index && <span className="text-border-strong">/</span>}
      {children}
    </p>
  );
}
