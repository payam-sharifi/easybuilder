function digitsOnly(value: string): string {
  return value.replace(/[^\d]/g, '');
}

export function getWhatsAppUrl(prefill?: string): string {
  const number = digitsOnly(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '491701234567'
  );
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
