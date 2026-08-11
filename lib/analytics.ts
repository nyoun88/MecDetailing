/**
 * Conversion tracking scaffolding.
 *
 * These functions are the single integration point for analytics. They
 * currently no-op unless NEXT_PUBLIC_ANALYTICS_ENABLED is set, and log to the
 * console in development so the funnel can be verified before a real
 * provider (GA4, Meta Pixel, etc.) is wired in.
 *
 * To connect a provider: fill in `dispatch()` with calls to the provider's
 * SDK (e.g. `window.gtag(...)`). Never hardcode API keys here — read them
 * from NEXT_PUBLIC_* environment variables set in `.env.local`.
 */

export type AnalyticsEvent =
  | "quote_started"
  | "quote_step_completed"
  | "quote_submitted"
  | "package_viewed"
  | "phone_clicked"
  | "cta_clicked";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

const ANALYTICS_ENABLED = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";

function dispatch(event: AnalyticsEvent, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") return;

  // Example provider wiring (left commented until credentials exist):
  // window.gtag?.("event", event, payload);
  // window.fbq?.("trackCustom", event, payload);

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, payload ?? {});
  }
}

export function trackEvent(event: AnalyticsEvent, payload?: AnalyticsPayload) {
  if (!ANALYTICS_ENABLED && process.env.NODE_ENV !== "development") return;
  dispatch(event, payload);
}

export const track = {
  quoteStarted: (source?: string) => trackEvent("quote_started", { source }),
  quoteStepCompleted: (step: number, label: string) =>
    trackEvent("quote_step_completed", { step, label }),
  quoteSubmitted: (packageId?: string) =>
    trackEvent("quote_submitted", { packageId }),
  packageViewed: (packageId: string) =>
    trackEvent("package_viewed", { packageId }),
  phoneClicked: () => trackEvent("phone_clicked"),
  ctaClicked: (label: string, location: string) =>
    trackEvent("cta_clicked", { label, location }),
};
