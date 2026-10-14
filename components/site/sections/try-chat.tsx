"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { LinkButton } from "@/components/site/ui/button";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionBadge } from "@/components/site/ui/section-badge";
import { TelegramIcon } from "@/components/site/ui/social-icons";
import { getTelegramUrl, getWhatsAppUrl } from "@/lib/chat-links";
import { TRY_CHAT } from "@/lib/content";

export function TryChat() {
  const { t } = useLanguage();
  return (
    <section id="try" className="relative bg-bg pb-[clamp(72px,10vw,130px)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-[720px] rounded-[28px] border border-line-2 bg-card px-6 py-12 text-center sm:px-12 sm:py-14">
          <SectionBadge className="mb-[22px]">{t(TRY_CHAT.badge)}</SectionBadge>
          <h2 className="m-0 text-balance text-[clamp(28px,3.6vw,46px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink rtl:leading-[1.35]">
            {t(TRY_CHAT.title)}
          </h2>
          <p className="mx-auto mb-0 mt-5 max-w-[520px] text-[17px] leading-[1.6] text-muted-2">
            {t(TRY_CHAT.subtitle)}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <LinkButton
              href={getTelegramUrl()}
              arrow
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2">
                <TelegramIcon className="size-[18px]" />
                {t(TRY_CHAT.cta)}
              </span>
            </LinkButton>
            <a
              href={getWhatsAppUrl(t(TRY_CHAT.prefill))}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 text-[15px] font-medium text-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-ink"
            >
              <MessageCircle className="size-4 text-[#25D366]" aria-hidden />
              {t(TRY_CHAT.whatsapp)}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
