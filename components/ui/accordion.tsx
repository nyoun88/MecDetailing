"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

export interface AccordionItemData {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export function Accordion({
  items,
  className,
  defaultOpenId,
  size = "default",
}: {
  items: AccordionItemData[];
  className?: string;
  defaultOpenId?: string;
  size?: "default" | "lg";
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className={cn("divide-y divide-border", className)}>
      {items.map((item, i) => (
        <AccordionRow
          key={item.id}
          index={i}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
          size={size}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  index,
  isOpen,
  onToggle,
  size,
}: {
  item: AccordionItemData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  size: "default" | "lg";
}) {
  const panelId = useId();

  return (
    <div className="py-1">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={cn(
            "flex w-full items-center gap-5 py-5 text-left font-semibold text-ink transition-colors hover:text-accent",
            size === "lg" ? "gap-6 py-7 text-xl md:text-2xl" : "text-base md:text-lg",
          )}
        >
          {size === "lg" && (
            <span className="font-mono text-sm font-normal text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span className="flex-1">{item.title}</span>
          <ChevronDown
            aria-hidden
            className={cn(
              "size-5 shrink-0 text-ink-muted transition-transform duration-300",
              isOpen && "rotate-180 text-accent",
            )}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-10 text-sm leading-relaxed text-ink-muted md:text-base">
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
