import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

/**
 * "01 ━━━ 02 ━━━ 03" segmented indicator: numbered steps joined by lines
 * that fill in as the user progresses, rather than a single bare bar.
 */
export function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: total }).map((_, i) => {
        const isComplete = i < step;
        const isActive = i === step;
        return (
          <div key={i} className="flex items-center">
            <span
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-colors duration-300",
                isActive || isComplete
                  ? "border-accent text-accent"
                  : "border-border-strong text-ink-muted",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < total - 1 && (
              <span className="mx-1.5 h-px w-6 overflow-hidden bg-border sm:w-10">
                <motion.span
                  className="block h-full bg-accent"
                  initial={false}
                  animate={{ width: isComplete ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
