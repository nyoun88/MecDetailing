"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";
import { newCarPackageOptions, type NewCarQuoteFormData } from "@/data/new-car-quote";
import { findOption } from "@/data/quote";
import { business } from "@/data/business";

export function NewCarSuccessScreen({ data }: { data: NewCarQuoteFormData }) {
  const packageLabel = findOption(newCarPackageOptions, data.packageId)?.label;

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex size-16 items-center justify-center rounded-full border border-accent/50 bg-accent/10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.3 }}
        >
          <Check aria-hidden className="size-7 text-accent" strokeWidth={2.5} />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
        className="mt-8 text-balance text-[clamp(2.25rem,6vw,4rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink"
      >
        Your enquiry is in.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.22 }}
        className="mt-5 text-base leading-relaxed text-ink-muted"
      >
        Thank you for your enquiry, we know your time is valuable. A team
        member will be in contact with you in the next 24hrs or if you need
        to speak to someone directly please call Angelo on{" "}
        {business.contact.phoneHref ? (
          <a
            href={business.contact.phoneHref}
            className="text-ink underline-offset-4 hover:underline"
          >
            {business.contact.phone}
          </a>
        ) : (
          business.contact.phone
        )}
        .
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
        className="mt-10 w-full rounded-[3px] border border-border bg-bg-card p-6 text-left"
      >
        <SummaryRow
          label="Vehicle"
          value={[data.vehicleYear, data.vehicleMake, data.vehicleModel].filter(Boolean).join(" ")}
        />
        <SummaryRow label="Package" value={packageLabel ?? "—"} last />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.38 }}
        className="mt-10 flex flex-col items-center gap-6"
      >
        <Button href="/" size="lg">
          Back To MEC Detailing
        </Button>
      </motion.div>
    </div>
  );
}

function SummaryRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-4 py-3 ${last ? "" : "border-b border-border"}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
        {label}
      </span>
      <span className="text-right text-sm font-medium text-ink">{value}</span>
    </div>
  );
}
