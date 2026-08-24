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
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  /** For external links — e.g. target="_blank" to leave the site in a new tab. */
  target?: string;
  rel?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
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
