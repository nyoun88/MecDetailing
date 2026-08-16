import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { NewCarQuoteFormData } from "@/data/new-car-quote";
import { buildNewCarQuoteEmail } from "@/lib/new-car-quote-email";
import { business } from "@/data/business";

/**
 * New Car Protection quote submission endpoint — the counterpart to
 * /api/quote for the dedicated /new-car-protection/quote form. Same
 * validation/Resend/error-handling shape as app/api/quote/route.ts,
 * emailing the same business inbox (business.contact.email), just built
 * from the New Car Protection form's fields (package instead of
 * services/condition/protection).
 */
export async function POST(request: Request) {
  let body: Partial<NewCarQuoteFormData>;

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

  const data: NewCarQuoteFormData = {
    vehicleMake: body.vehicleMake ?? "",
    vehicleModel: body.vehicleModel ?? "",
    vehicleYear: body.vehicleYear ?? "",
    packageId: body.packageId ?? "",
    firstName: body.firstName,
    phone: body.phone,
    email: body.email,
    notes: body.notes ?? "",
    agreedToContact: body.agreedToContact ?? false,
  };

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { subject, text, html } = buildNewCarQuoteEmail(data);

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
        console.error("Resend rejected the New Car Protection quote enquiry email:", error);
      }
    } catch (error) {
      console.error("Failed to send New Car Protection quote enquiry email:", error);
    }
  } else {
    console.warn(
      "RESEND_API_KEY is not set — New Car Protection quote enquiry received but not emailed:",
      data,
    );
  }

  return NextResponse.json({ ok: true });
}
