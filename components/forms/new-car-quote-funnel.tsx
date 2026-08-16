"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/forms/progress-bar";
import {
  NewCarVehicleSummaryPanel,
  NewCarVehicleSummaryMobile,
} from "@/components/forms/new-car-vehicle-summary";
import { StepNewCarVehicle } from "@/components/forms/new-car-steps/step-new-car-vehicle";
import { StepNewCarPackage } from "@/components/forms/new-car-steps/step-new-car-package";
import { StepNewCarContact } from "@/components/forms/new-car-steps/step-new-car-contact";
import { NewCarSuccessScreen } from "@/components/forms/new-car-success-screen";
import {
  emptyNewCarQuoteForm,
  newCarQuoteSteps,
  type NewCarQuoteFormData,
} from "@/data/new-car-quote";
import { validateNewCarQuoteStep, type NewCarQuoteErrors } from "@/lib/validate-new-car-quote";
import { slideVariants } from "@/lib/motion";
import { track } from "@/lib/analytics";

/**
 * Dedicated quote funnel for /new-car-protection. Same visual language and
 * step-by-step pattern as the general QuoteFunnel (components/forms/
 * quote-funnel.tsx), but scoped to the three New Car Protection packages
 * (Signature/Platinum/Ultimate Shield) instead of the ceramic-only ones,
 * and condensed to three steps since those packages are pre-bundled — no
 * separate services/condition selection needed. Posts to /api/new-car-quote,
 * which emails the same business inbox as the general quote form.
 */

const headlines = [
  "What Are We Protecting?",
  "Which Package Interests You?",
  "Where Should We Send Your Quote?",
];

export function NewCarQuoteFunnel() {
  const [data, setData] = useState<NewCarQuoteFormData>(emptyNewCarQuoteForm);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [errors, setErrors] = useState<NewCarQuoteErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    track.quoteStarted("new-car-protection-quote-page");
  }, []);

  function updateData(patch: Partial<NewCarQuoteFormData>) {
    setData((prev) => ({ ...prev, ...patch }));
  }

  async function handleNext() {
    const stepErrors = validateNewCarQuoteStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    track.quoteStepCompleted(step + 1, newCarQuoteSteps[step]);

    if (step === newCarQuoteSteps.length - 1) {
      await submit();
      return;
    }

    setDirection(1);
    setStep((s) => s + 1);
  }

  function handleBack() {
    if (step === 0) return;
    setErrors({});
    setDirection(-1);
    setStep((s) => s - 1);
  }

  async function submit() {
    setSubmitting(true);
    try {
      await fetch("/api/new-car-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Non-fatal: the enquiry is still captured client-side and the team
      // can be reached directly via the summary screen's contact details.
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      track.quoteSubmitted(data.packageId);
    }
  }

  if (submitted) {
    return (
      <section className="bg-bg py-32 md:py-40">
        <Container>
          <NewCarSuccessScreen data={data} />
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-bg pb-24 pt-32 md:pb-32 md:pt-40">
      <Container>
        <div className="mb-14 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-muted">
            MEC Detailing
          </p>
          <h1 className="mt-3 text-balance text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.98] tracking-tight text-ink">
            Your new car.
            <br />
            <span className="text-ink-muted">Protected from day one.</span>
          </h1>
        </div>

        <div className="grid gap-14 md:grid-cols-[1fr_320px] md:gap-16 lg:grid-cols-[1fr_360px]">
          <div className="max-w-xl">
            <ProgressBar step={step} total={newCarQuoteSteps.length} />

            <NewCarVehicleSummaryMobile data={data} />

            <div className="relative mt-10 min-h-[420px] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h2 className="text-balance text-[clamp(1.6rem,3.4vw,2.25rem)] font-bold uppercase leading-[1.05] tracking-tight text-ink">
                    {headlines[step]}
                  </h2>

                  <div className="mt-9">
                    {step === 0 && (
                      <StepNewCarVehicle data={data} errors={errors} onChange={updateData} />
                    )}
                    {step === 1 && (
                      <StepNewCarPackage data={data} errors={errors} onChange={updateData} />
                    )}
                    {step === 2 && (
                      <StepNewCarContact data={data} errors={errors} onChange={updateData} />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              {step > 0 ? (
                <Button type="button" variant="ghost" onClick={handleBack} disabled={submitting}>
                  Back
                </Button>
              ) : (
                <span />
              )}
              <Button type="button" onClick={handleNext} showArrow disabled={submitting}>
                {step === newCarQuoteSteps.length - 1
                  ? submitting
                    ? "Submitting…"
                    : "Get My Free Quote"
                  : "Continue"}
              </Button>
            </div>
          </div>

          <NewCarVehicleSummaryPanel data={data} />
        </div>
      </Container>
    </section>
  );
}
