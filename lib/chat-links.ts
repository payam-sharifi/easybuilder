import { WHATSAPP_LIVE } from './constants';

function digitsOnly(value: string): string {
  return value.replace(/[^\d]/g, '');
}

/**
 * WhatsApp is not live. Returns null unless WHATSAPP_LIVE is true and a real
 * number is set. Never fall back to a placeholder number.
 */
export function getWhatsAppUrl(prefill?: string): string | null {
  if (!WHATSAPP_LIVE) return null;
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!raw) return null;
  const number = digitsOnly(raw);
  if (!number) return null;
  const url = new URL(`https://wa.me/${number}`);
  if (prefill) {
    url.searchParams.set('text', prefill);
  }
  return url.toString();
}

export function getTelegramUrl(): string {
  const bot = (process.env.NEXT_PUBLIC_TELEGRAM_BOT || 'easywebbuilder_bot').replace(
    /^@/,
    ''
  );
  return `https://t.me/${bot}`;
}

/** Where "Register" buttons lead. Falls back to the existing login page. */
export function getSignupUrl(): string {
  return process.env.NEXT_PUBLIC_SIGNUP_URL || '/login';
}
