"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { TelegramIcon } from "@/components/site/ui/social-icons";
import { getTelegramUrl, getWhatsAppUrl } from "@/lib/chat-links";
import { CHAT_FLOW } from "@/lib/home-content";
import { cn } from "@/lib/cn";

/** Telegram is live (link). WhatsApp is coming soon (no link). */
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
      {whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-line-2 bg-card px-3.5 py-1.5 text-sm font-semibold text-ink no-underline transition-colors hover:border-ink"
        >
          <MessageCircle className="size-[18px] text-[#25D366]" aria-hidden />
          {t(CHAT_FLOW.whatsappBadge)}
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line-2 bg-surface px-3.5 py-1.5 text-sm font-semibold text-muted-2">
          <MessageCircle className="size-[18px] text-[#25D366]" aria-hidden />
          {t(CHAT_FLOW.whatsappBadge)}
        </span>
      )}
    </div>
  );
}
