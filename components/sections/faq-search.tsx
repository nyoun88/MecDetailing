"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/ui/reveal";
import { faqCategories, faqs, type FaqCategory } from "@/data/faqs";

const categoryCta: Partial<Record<FaqCategory, { label: string; href: string }>> = {
  "Ceramic Coating": { label: "View Ceramic Packages", href: "/packages" },
  Booking: { label: "Get My Free Quote", href: "/quote" },
};

export function FaqSearch() {
  const [query, setQuery] = useState("");

  const grouped = useMemo(() => {
    const term = query.trim().toLowerCase();
    const filtered = term
      ? faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(term) ||
            faq.answer.toLowerCase().includes(term),
        )
      : faqs;

    return faqCategories
      .map((category) => ({
        category,
        items: filtered.filter((faq) => faq.category === category),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <div>
      <Reveal className="max-w-lg">
        <label htmlFor="faq-search" className="sr-only">
          Search frequently asked questions
        </label>
        <div className="relative">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-muted"
          />
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a question…"
            className="w-full rounded-[3px] border border-border bg-bg-card py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent"
          />
        </div>
      </Reveal>

      <div className="mt-16 space-y-16">
        {grouped.length === 0 && (
          <p className="text-sm text-ink-muted">
            No questions match &ldquo;{query}&rdquo;. Try a different search,
            or get in touch directly.
          </p>
        )}

        {grouped.map((group) => (
          <Reveal key={group.category} className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              {group.category}
            </h2>
            <Accordion
              size="lg"
              className="mt-4 border-t border-border"
              items={group.items.map((faq) => ({
                id: faq.id,
                title: faq.question,
                content: faq.answer,
              }))}
            />
            {categoryCta[group.category] && (
              <div className="mt-8">
                <ArrowLink href={categoryCta[group.category]!.href}>
                  {categoryCta[group.category]!.label}
                </ArrowLink>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
