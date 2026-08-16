"use client";

import { useId, useState } from "react";
import { Upload, X } from "lucide-react";
import { TextField, TextAreaField } from "@/components/forms/text-field";
import type { NewCarQuoteFormData } from "@/data/new-car-quote";
import type { NewCarQuoteErrors } from "@/lib/validate-new-car-quote";
import { cn } from "@/lib/utils";

export function StepNewCarContact({
  data,
  errors,
  onChange,
}: {
  data: NewCarQuoteFormData;
  errors: NewCarQuoteErrors;
  onChange: (patch: Partial<NewCarQuoteFormData>) => void;
}) {
  const [photos, setPhotos] = useState<File[]>([]);
  const fileInputId = useId();
  const checkboxId = useId();

  function handleFiles(files: FileList | null) {
    if (!files) return;
    setPhotos((prev) => [...prev, ...Array.from(files)]);
  }

  return (
    <div className="grid gap-5">
      <TextField
        label="First Name"
        id="firstName"
        value={data.firstName}
        error={errors.firstName}
        onChange={(e) => onChange({ firstName: e.target.value })}
        autoComplete="given-name"
      />
      <TextField
        label="Phone"
        id="phone"
        type="tel"
        value={data.phone}
        error={errors.phone}
        onChange={(e) => onChange({ phone: e.target.value })}
        autoComplete="tel"
      />
      <TextField
        label="Email"
        id="email"
        type="email"
        value={data.email}
        error={errors.email}
        onChange={(e) => onChange({ email: e.target.value })}
        autoComplete="email"
      />

      <div>
        <label
          htmlFor={fileInputId}
          className="block text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted"
        >
          Vehicle Photos (Optional)
        </label>
        <label
          htmlFor={fileInputId}
          className="mt-2 flex cursor-pointer items-center justify-center gap-3 rounded-[3px] border border-dashed border-border-strong bg-bg-card px-4 py-6 text-sm text-ink-muted transition-colors hover:border-accent hover:text-ink"
        >
          <Upload aria-hidden className="size-4" />
          {photos.length > 0 ? `${photos.length} photo(s) selected` : "Click to upload photos"}
        </label>
        <input
          id={fileInputId}
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={(e) => handleFiles(e.target.files)}
        />
        {photos.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {photos.map((file, i) => (
              <li
                key={`${file.name}-${i}`}
                className="flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-ink-muted"
              >
                {file.name}
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => setPhotos((prev) => prev.filter((_, idx) => idx !== i))}
                >
                  <X className="size-3.5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <TextAreaField
        label="Anything Else We Should Know?"
        id="notes"
        rows={3}
        value={data.notes}
        onChange={(e) => onChange({ notes: e.target.value })}
      />

      <label htmlFor={checkboxId} className="flex cursor-pointer items-start gap-3">
        <input
          id={checkboxId}
          type="checkbox"
          checked={data.agreedToContact}
          onChange={(e) => onChange({ agreedToContact: e.target.checked })}
          className={cn(
            "mt-0.5 size-5 shrink-0 rounded-[4px] border bg-bg-card accent-[var(--color-accent)]",
            errors.agreedToContact ? "border-red-400/60" : "border-border-strong",
          )}
        />
        <span className="text-sm text-ink-muted">
          I agree to be contacted regarding my enquiry.
        </span>
      </label>
      {errors.agreedToContact && (
        <p className="-mt-3 text-xs text-red-400">{errors.agreedToContact}</p>
      )}
    </div>
  );
}
