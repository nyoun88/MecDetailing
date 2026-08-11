import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  hoverLift = true,
}: {
  className?: string;
  children: React.ReactNode;
  hoverLift?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[10px] border border-border bg-bg-card p-8 transition-all duration-300 ease-out",
        hoverLift && "hover:-translate-y-1 hover:border-border-strong",
        className,
      )}
    >
      {children}
    </div>
  );
}
