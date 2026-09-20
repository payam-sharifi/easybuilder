import { MessageCircle, Send } from 'lucide-react';

type ChatCtaProps = {
  whatsappUrl: string;
  telegramUrl: string;
  whatsappLabel: string;
  telegramLabel: string;
  size?: 'md' | 'lg';
};

export function ChatCta({
  whatsappUrl,
  telegramUrl,
  whatsappLabel,
  telegramLabel,
  size = 'lg',
}: ChatCtaProps) {
  const padding = size === 'lg' ? 'px-5 py-3 text-base' : 'px-4 py-2.5 text-sm';

  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white shadow-sm transition hover:bg-[#1ebe5b] ${padding}`}
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        {whatsappLabel}
      </a>
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#2AABEE] font-semibold text-white shadow-sm transition hover:bg-[#229ed9] ${padding}`}
      >
        <Send className="h-5 w-5" aria-hidden />
        {telegramLabel}
      </a>
    </div>
  );
}
