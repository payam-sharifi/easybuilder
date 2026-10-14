import { de } from "./i18n";

/** Public site origin. Also used as Next.js metadataBase. */
export const SITE_URL = "https://easywebbuilder.de";

/** Marketing routes without locale prefix (`/de` is added by the language helper). */
export const PATHS = {
  googleMaps: "/google-und-maps",
  support: "/support",
  impressum: "/impressum",
  datenschutz: "/datenschutz",
} as const;

/**
 * TODO: confirm this mailbox. Published contact is currently hallo@easyweb.builder
 * (see BRAND.email). Do not publish a second address until confirmed.
 */
export const CONTACT_EMAIL = "hallo@easyweb.builder";

/**
 * Single go-live duration for the whole marketing site.
 * TODO: confirm the exact promise (e.g. 24 Stunden vs. wenige Tage).
 * Never hardcode a different number in section copy — interpolate this constant.
 */
/** Dative form so copy can say “in {DELIVERY_TIME}”. */
export const DELIVERY_TIME = de("wenigen Tagen");

/** WhatsApp chat is live. The public number still comes from NEXT_PUBLIC_WHATSAPP_NUMBER. */
export const WHATSAPP_LIVE = true;
