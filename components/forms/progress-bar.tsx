import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export function ProgressBar({ step, total }: { step: number; total: number }) {
  const percent = ((step + 1) / total) * 100;

  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
        <span>
          {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-bg-card">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </div>
    </div>
  );
}
