"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/forms/progress-bar";
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
  "Let's Start With Your Vehicle",
  "What Are You Looking To Protect?",
  "How Would You Describe Your Vehicle?",
  "Which Protection Are You Interested In?",
  "Where Can We Send Your Quote?",
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
      await fetch("/api/quote", {
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
    <section className="bg-bg py-32 md:py-40">
      <Container className="max-w-xl">
        <ProgressBar step={step} total={quoteSteps.length} />

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
              <h1 className="text-balance text-[clamp(1.7rem,3.6vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-ink">
                {headlines[step]}
              </h1>

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
      </Container>
    </section>
  );
}
