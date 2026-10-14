"use client";

import { useLanguage } from "@/components/site/providers/language-provider";
import { TelegramIcon, WhatsAppIcon } from "@/components/site/ui/social-icons";
import { getTelegramUrl, getWhatsAppUrl } from "@/lib/chat-links";
import { HERO } from "@/lib/content";
import { cn } from "@/lib/cn";

export function ChatTryLinks({ className }: { className?: string }) {
  const { t } = useLanguage();
  const prefill = t(HERO.tryPrefill);
  const telegramUrl = getTelegramUrl();
  const whatsappUrl = getWhatsAppUrl(prefill);

  return (
    <div className={cn("flex flex-col items-start gap-3", className)}>
      <p className="m-0 text-sm font-semibold text-ink">{t(HERO.tryLabel)}</p>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex h-[52px] items-center gap-2.5 rounded-[14px] bg-[#229ED9] px-5 text-[15px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
        >
          <TelegramIcon className="size-5" />
          {t(HERO.telegramCta)}
        </a>
        <a
          href={whatsappUrl ?? "#chat"}
          {...(whatsappUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="focus-ring inline-flex h-[52px] items-center gap-2.5 rounded-[14px] bg-[#25D366] px-5 text-[15px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="size-5" />
          {t(HERO.whatsappCta)}
        </a>
      </div>
    </div>
  );
}
