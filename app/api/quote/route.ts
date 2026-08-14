import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { QuoteFormData } from "@/data/quote";
import { buildQuoteEmail } from "@/lib/quote-email";
import { business } from "@/data/business";

/**
 * Quote submission endpoint. Validates the payload, then forwards it as an
 * email to the business inbox via Resend. Requires RESEND_API_KEY (and,
 * once a sending domain is verified, QUOTE_FROM_EMAIL) as environment
 * variables — see README for setup. The submission still succeeds for the
 * customer even if the email fails to send, since a delivery hiccup
 * shouldn't surface as a broken form; the failure is logged server-side
 * instead so it's visible in deployment logs.
 */
export async function POST(request: Request) {
  let body: Partial<QuoteFormData>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!body.firstName || !body.email || !body.phone) {
    return NextResponse.json(
      { ok: false, error: "Missing required contact details." },
      { status: 422 },
    );
  }

  const data: QuoteFormData = {
    vehicleMake: body.vehicleMake ?? "",
    vehicleModel: body.vehicleModel ?? "",
    vehicleYear: body.vehicleYear ?? "",
    services: body.services ?? [],
    condition: body.condition ?? "",
    protection: body.protection ?? "",
    firstName: body.firstName,
    phone: body.phone,
    email: body.email,
    notes: body.notes ?? "",
    agreedToContact: body.agreedToContact ?? false,
  };

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { subject, text, html } = buildQuoteEmail(data);

      // resend.emails.send() does NOT throw on API-level rejections (bad
      // "from" address, permission issues, etc.) — it resolves with
      // { error } instead, so that has to be checked explicitly or a
      // rejected send silently looks like a success.
      const { error } = await resend.emails.send({
        from: process.env.QUOTE_FROM_EMAIL ?? "MEC Detailing Website <onboarding@resend.dev>",
        to: business.contact.email,
        replyTo: data.email,
        subject,
        text,
        html,
      });

      if (error) {
        console.error("Resend rejected the quote enquiry email:", error);
        // TEMP DEBUG — remove this return once quote emails are confirmed
        // delivering; see note in quote-funnel.tsx.
        return NextResponse.json({ ok: true, debugError: error });
      }
    } catch (error) {
      console.error("Failed to send quote enquiry email:", error);
      // TEMP DEBUG — remove this return once quote emails are confirmed
      // delivering; see note in quote-funnel.tsx.
      return NextResponse.json({
        ok: true,
        debugError: error instanceof Error ? error.message : String(error),
      });
    }
  } else {
    console.warn(
      "RESEND_API_KEY is not set — quote enquiry received but not emailed:",
      data,
    );
  }

  return NextResponse.json({ ok: true });
}
