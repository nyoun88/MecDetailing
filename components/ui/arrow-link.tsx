import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A plain text link with a trailing arrow that shifts on hover — the
 * "EXPLORE CERAMIC COATINGS" style secondary action, distinct from the
 * boxed <Button>. No border, no background, just typography and motion.
 */
export function ArrowLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent",
        className,
      )}
    >
      <span className="border-b border-current pb-0.5">{children}</span>
      <ArrowRight
        aria-hidden
        className="size-3.5 transition-transform duration-300 ease-out group-hover/link:translate-x-1"
      />
    </Link>
  );
}
