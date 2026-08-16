"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";
import { newCarPackageOptions, type NewCarQuoteFormData } from "@/data/new-car-quote";
import { findOption } from "@/data/quote";

function useSummaryRows(data: NewCarQuoteFormData) {
  const vehicle = [data.vehicleYear, data.vehicleMake, data.vehicleModel]
    .filter(Boolean)
    .join(" ");

  const pkg = findOption(newCarPackageOptions, data.packageId)?.label;

  return [
    { label: "Vehicle", value: vehicle },
    { label: "Package", value: pkg },
  ].filter((row) => row.value);
}

function SummaryRows({ data }: { data: NewCarQuoteFormData }) {
  const rows = useSummaryRows(data);

  if (rows.length === 0) {
    return (
      <p className="text-sm leading-relaxed text-ink-muted">
        Your selections will appear here as you go.
      </p>
    );
  }

  return (
    <dl className="space-y-4">
      {rows.map((row) => (
        <div key={row.label} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
            {row.label}
          </dt>
          <dd className="mt-1 text-sm text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Sticky right-hand panel — desktop only. */
export function NewCarVehicleSummaryPanel({ data }: { data: NewCarQuoteFormData }) {
  return (
    <aside className="hidden md:sticky md:top-28 md:block md:self-start">
      <div className="overflow-hidden rounded-[3px] border border-border">
        <Photo image={images.quoteSidebar} className="aspect-[4/3] w-full rounded-none border-0" sizes="(min-width: 768px) 33vw, 100vw" />
        <div className="bg-bg-card p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Your Selection
          </p>
          <div className="mt-5">
            <SummaryRows data={data} />
          </div>
        </div>
      </div>
    </aside>
  );
}

/** Collapsible summary strip — mobile only. */
export function NewCarVehicleSummaryMobile({ data }: { data: NewCarQuoteFormData }) {
  const [open, setOpen] = useState(false);
  const rows = useSummaryRows(data);

  return (
    <div className="mb-8 rounded-[3px] border border-border bg-bg-card md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Your Selection {rows.length > 0 && `(${rows.length})`}
        </span>
        <ChevronDown
          aria-hidden
          className={cn("size-4 text-ink-muted transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="border-t border-border px-5 py-5">
          <SummaryRows data={data} />
        </div>
      )}
    </div>
  );
}
