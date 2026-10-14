"use client";

import { useLanguage } from "@/components/site/providers/language-provider";
import { TelegramIcon, WhatsAppIcon } from "@/components/site/ui/social-icons";
import { getTelegramUrl, getWhatsAppUrl } from "@/lib/chat-links";
import { CHAT_FLOW } from "@/lib/home-content";
import { cn } from "@/lib/cn";

/** Telegram and WhatsApp open the live chat bots. */
export function ChannelBadges({ className }: { className?: string }) {
  const { t } = useLanguage();
  const telegramUrl = getTelegramUrl();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-flex items-center gap-2 rounded-full border border-line-2 bg-card px-3.5 py-1.5 text-sm font-semibold text-ink no-underline transition-colors hover:border-ink"
      >
        <TelegramIcon className="size-[18px] text-[#229ED9]" />
        {t(CHAT_FLOW.telegramBadge)}
      </a>
      <a
        href={whatsappUrl ?? "#chat"}
        {...(whatsappUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="focus-ring inline-flex items-center gap-2 rounded-full border border-line-2 bg-card px-3.5 py-1.5 text-sm font-semibold text-ink no-underline transition-colors hover:border-ink"
      >
        <WhatsAppIcon className="size-[18px] text-[#25D366]" />
        {t(CHAT_FLOW.whatsappBadge)}
      </a>
    </div>
  );
}
