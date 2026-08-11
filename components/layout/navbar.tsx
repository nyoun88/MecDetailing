"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/data/nav";
import { business } from "@/data/business";
import { track } from "@/lib/analytics";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) closeButtonRef.current?.focus();
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // Close the mobile menu when the route changes. Adjusting state during
  // render (rather than in an effect) avoids an extra commit/cascading
  // render — this is React's documented pattern for resetting state in
  // response to a prop/derived value changing.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  const solid = !isHome || scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300 ease-out",
        solid
          ? "border-b border-border bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between md:h-24">
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-[0.18em] text-ink"
        >
          MEC <span className="text-ink-muted">Detailing</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide text-ink-muted transition-colors hover:text-ink",
                pathname === link.href && "text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href="/quote"
            size="md"
            onClick={() => track.ctaClicked(business.primaryCta, "navbar")}
          >
            Get A Free Quote
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className="flex size-10 items-center justify-center text-ink md:hidden"
        >
          <Menu aria-hidden className="size-6" />
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-[60] bg-bg md:hidden"
          >
            <Container className="flex h-20 items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.18em] text-ink"
              >
                MEC <span className="text-ink-muted">Detailing</span>
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex size-10 items-center justify-center text-ink"
              >
                <X aria-hidden className="size-6" />
              </button>
            </Container>

            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE, delay: 0.05 }}
              className="flex flex-col gap-2 px-6 pt-8"
            >
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-border py-4 text-2xl font-semibold text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-8">
                <Button
                  href="/quote"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    track.ctaClicked(business.primaryCta, "mobile-menu");
                    setMobileOpen(false);
                  }}
                >
                  Get A Free Quote
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
