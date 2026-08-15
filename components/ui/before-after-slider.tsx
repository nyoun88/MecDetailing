"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import type { ImageSlot } from "@/data/images";

export function BeforeAfterSlider({
  before,
  after,
  className,
}: {
  before: ImageSlot;
  after: ImageSlot;
  className?: string;
}) {
  const [value, setValue] = useState(50);

  return (
    <div className={className}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-border select-none md:aspect-[16/10]">
        <div className="absolute inset-0">
          <Photo image={after} className="h-full w-full rounded-none border-0" label="After — placeholder" />
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Photo image={before} className="h-full w-full rounded-none border-0" label="Before — placeholder" />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-ink/80"
          style={{ left: `${value}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/60 bg-bg/90 shadow-lg">
            <MoveHorizontal aria-hidden className="size-4 text-ink" />
          </div>
        </div>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-border-strong bg-bg/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-border-strong bg-bg/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
          After
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Drag to compare before and after paint correction"
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>
    </div>
  );
}
