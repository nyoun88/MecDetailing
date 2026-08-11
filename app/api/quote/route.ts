import { NextResponse } from "next/server";
import type { QuoteFormData } from "@/data/quote";

/**
 * Quote submission endpoint.
 *
 * This currently validates the payload and returns success without
 * persisting or emailing anything — there is no CRM/email provider
 * configured yet. Wire a provider here (e.g. Resend, a CRM webhook, a
 * database insert) using credentials from environment variables before
 * relying on this in production. Keep the response contract
 * (`{ ok: boolean }`) stable so the client doesn't need to change.
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

  // TODO: forward `body` to a CRM / email provider once one is configured.
  // if (process.env.QUOTE_WEBHOOK_URL) { ... }

  return NextResponse.json({ ok: true });
}
