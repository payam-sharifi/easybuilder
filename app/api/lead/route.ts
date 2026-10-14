const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadPayload = {
  kind?: unknown;
  siteType?: unknown;
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  websiteUrl?: unknown;
  message?: unknown;
};

const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

/**
 * Lead capture endpoint.
 *
 * Validates the payload and logs it. Replace the `console.info` below with your
 * CRM / e-mail / Telegram / WhatsApp integration (e.g. Resend, HubSpot, Airtable).
 */
export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const kind = str(body.kind, 40) || "consultation";
  const lead = {
    kind,
    siteType: str(body.siteType, 40),
    name: str(body.name, 120),
    phone: str(body.phone, 40),
    email: str(body.email, 160),
    websiteUrl: str(body.websiteUrl, 300),
    message: str(body.message, 2000),
  };

  if (kind === "website-check") {
    if (!lead.websiteUrl) {
      return Response.json({ ok: false, error: "url_required" }, { status: 422 });
    }
    if (!lead.email) {
      return Response.json({ ok: false, error: "email_required" }, { status: 422 });
    }
  } else if (!lead.name) {
    return Response.json({ ok: false, error: "name_required" }, { status: 422 });
  }
  if (kind !== "website-check" && !lead.phone && !lead.email) {
    return Response.json({ ok: false, error: "contact_required" }, { status: 422 });
  }
  if (lead.email && !EMAIL_RE.test(lead.email)) {
    return Response.json({ ok: false, error: "email_invalid" }, { status: 422 });
  }

  console.info("[lead]", lead);

  return Response.json({ ok: true });
}
