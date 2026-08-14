"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/forms/progress-bar";
import { VehicleSummaryPanel, VehicleSummaryMobile } from "@/components/forms/vehicle-summary";
import { StepVehicle } from "@/components/forms/steps/step-vehicle";
import { StepServices } from "@/components/forms/steps/step-services";
import { StepCondition } from "@/components/forms/steps/step-condition";
import { StepProtection } from "@/components/forms/steps/step-protection";
import { StepContact } from "@/components/forms/steps/step-contact";
import { SuccessScreen } from "@/components/forms/success-screen";
import { emptyQuoteForm, quoteSteps, type QuoteFormData } from "@/data/quote";
import { validateStep, type QuoteErrors } from "@/lib/validate-quote";
import { slideVariants } from "@/lib/motion";
import { track } from "@/lib/analytics";

const headlines = [
  "What Are We Protecting?",
  "What Are You Looking For?",
  "Tell Us About The Paint",
  "Which Level Of Protection?",
  "Where Should We Send Your Quote?",
];

export function QuoteFunnel() {
  const [data, setData] = useState<QuoteFormData>(emptyQuoteForm);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    track.quoteStarted("quote-page");
  }, []);

  function updateData(patch: Partial<QuoteFormData>) {
    setData((prev) => ({ ...prev, ...patch }));
  }

  async function handleNext() {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    track.quoteStepCompleted(step + 1, quoteSteps[step]);

    if (step === quoteSteps.length - 1) {
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
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      // TEMP DEBUG — surfaces the Resend rejection reason directly in the
      // browser so it doesn't need to be dug out of Vercel logs. Remove
      // this block (and the matching debugError in app/api/quote/route.ts)
      // once quote emails are confirmed delivering.
      const json: { debugError?: unknown } | null = await res.json().catch(() => null);
      if (json?.debugError) {
        alert("Quote email debug error:\n" + JSON.stringify(json.debugError, null, 2));
      }
    } catch {
      // Non-fatal: the enquiry is still captured client-side and the team
      // can be reached directly via the summary screen's contact details.
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      track.quoteSubmitted(data.protection);
    }
  }

  if (submitted) {
    return (
      <section className="bg-bg py-32 md:py-40">
        <Container>
          <SuccessScreen data={data} />
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
            Your vehicle.
            <br />
            <span className="text-ink-muted">Your protection.</span>
          </h1>
        </div>

        <div className="grid gap-14 md:grid-cols-[1fr_320px] md:gap-16 lg:grid-cols-[1fr_360px]">
          <div className="max-w-xl">
            <ProgressBar step={step} total={quoteSteps.length} />

            <VehicleSummaryMobile data={data} />

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
                    {step === 0 && <StepVehicle data={data} errors={errors} onChange={updateData} />}
                    {step === 1 && <StepServices data={data} errors={errors} onChange={updateData} />}
                    {step === 2 && <StepCondition data={data} errors={errors} onChange={updateData} />}
                    {step === 3 && <StepProtection data={data} errors={errors} onChange={updateData} />}
                    {step === 4 && <StepContact data={data} errors={errors} onChange={updateData} />}
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
                {step === quoteSteps.length - 1
                  ? submitting
                    ? "Submitting…"
                    : "Get My Free Quote"
                  : "Continue"}
              </Button>
            </div>
          </div>

          <VehicleSummaryPanel data={data} />
        </div>
      </Container>
    </section>
  );
}
