import type { QuoteFormData } from "@/data/quote";
import { serviceOptions, conditionOptions, protectionOptions, findOption } from "@/data/quote";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Builds the subject line and HTML/text bodies for a quote enquiry notification. */
export function buildQuoteEmail(data: QuoteFormData) {
  const vehicle = [data.vehicleYear, data.vehicleMake, data.vehicleModel]
    .filter(Boolean)
    .join(" ") || "Not provided";

  const services =
    data.services
      .map((id) => findOption(serviceOptions, id)?.label)
      .filter(Boolean)
      .join(", ") || "Not provided";

  const condition = findOption(conditionOptions, data.condition)?.label ?? "Not provided";
  const protection = findOption(protectionOptions, data.protection)?.label ?? "Not provided";

  const rows: [string, string][] = [
    ["Name", data.firstName || "Not provided"],
    ["Phone", data.phone || "Not provided"],
    ["Email", data.email || "Not provided"],
    ["Vehicle", vehicle],
    ["Services", services],
    ["Condition", condition],
    ["Protection Interest", protection],
    ["Notes", data.notes || "—"],
  ];

  const subject = `New Quote Enquiry — ${data.firstName || "Website"}${vehicle !== "Not provided" ? ` (${vehicle})` : ""}`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const html = `
    <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #111;">
      <h2 style="margin: 0 0 4px; font-size: 20px;">New Quote Enquiry</h2>
      <p style="margin: 0 0 24px; color: #666; font-size: 13px;">Submitted via the MEC Detailing website quote form.</p>
      <table style="width: 100%; border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px 8px 0; border-bottom: 1px solid #eee; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: #888; white-space: nowrap; vertical-align: top;">${escapeHtml(label)}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #111;">${escapeHtml(value).replace(/\n/g, "<br />")}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;

  return { subject, text, html };
}
