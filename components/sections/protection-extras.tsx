"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { protectionExtras } from "@/data/ceramic-page";
import { cn, formatCurrency } from "@/lib/utils";

/**
 * Optional protection extras, presented as selectable add-ons rather than
 * another set of packages. Selection is local UI state only — it doesn't
 * feed into the quote funnel's own form state (that would mean sharing
 * state across a route boundary, a bigger change than this section
 * warrants) — so the running total is clearly scoped as "extras total",
 * never implied to be a full vehicle quote. The ceramic coating stays the
 * primary purchase either way; nothing here is required.
 */
export function ProtectionExtras() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((s) => s !== id) : [...current, id],
    );
  }

  const selectedExtras = protectionExtras.filter((extra) => selected.includes(extra.id));
  const total = selectedExtras.reduce((sum, extra) => sum + extra.price, 0);

  return (
    <section id="extras" className="scroll-mt-24 bg-bg-secondary py-24 md:py-32">
      <Container>
        <SectionHeading
          size="md"
          heading="Complete Your Protection"
          body="Your ceramic coating protects the paint. Add targeted protection to protect the rest of your vehicle."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {protectionExtras.map((extra, i) => {
            const isSelected = selected.includes(extra.id);
            return (
              <Reveal key={extra.id} delay={i * 0.06}>
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={isSelected}
                  onClick={() => toggle(extra.id)}
                  className={cn(
                    "flex w-full flex-col items-start gap-4 rounded-[3px] border bg-bg-card p-6 text-left transition-all duration-200 hover:-translate-y-0.5",
                    isSelected ? "border-accent" : "border-border hover:border-border-strong",
                  )}
                >
                  <div className="flex w-full items-start justify-between gap-4">
                    <div>
                      <p className="text-base font-bold uppercase tracking-tight text-ink">
                        {extra.name}
                      </p>
                      <p className="mt-1 font-mono text-sm text-accent">
                        {formatCurrency(extra.price)}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className={cn(
                        "flex size-6 shrink-0 items-center justify-center rounded-[3px] border text-bg transition-colors",
                        isSelected ? "border-accent bg-accent" : "border-border-strong bg-transparent",
                      )}
                    >
                      {isSelected && <Check className="size-4" strokeWidth={3} />}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-ink-muted">{extra.description}</p>

                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.1em]",
                      isSelected ? "text-accent" : "text-ink-muted",
                    )}
                  >
                    {isSelected ? `✓ ${extra.shortLabel} Added` : extra.ctaLabel}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 rounded-[3px] border border-border bg-bg-card p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
                Selected Protection
              </p>
              <p className="mt-2 text-base text-ink">
                {selectedExtras.length > 0
                  ? selectedExtras.map((extra) => extra.shortLabel).join(", ")
                  : "None selected yet"}
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
                Estimated Extras Total
              </p>
              <p className="mt-2 text-2xl font-bold text-ink">{formatCurrency(total)}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-sm text-ink-muted">
              Optional — your ceramic coating is the primary purchase. Let us
              know which extras you&rsquo;d like as part of your quote.
            </p>
            <Button href="/quote" showArrow className="shrink-0">
              Get Your Quote
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
