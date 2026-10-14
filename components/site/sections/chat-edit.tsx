"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, MessageCircle, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { LinkButton } from "@/components/site/ui/button";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionBadge } from "@/components/site/ui/section-badge";
import { TelegramIcon } from "@/components/site/ui/social-icons";
import { getTelegramUrl, getWhatsAppUrl } from "@/lib/chat-links";
import { BRAND_LOGO, CHAT_EDIT } from "@/lib/content";
import { cn } from "@/lib/cn";

/** Steps of the demo conversation: 1 = first message … 4 = headline confirmed. */
const STEP_AT_MS = [500, 1700, 3200, 4400];

function PhoneDemo() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStep(4);
      return;
    }
    const timers = STEP_AT_MS.map((ms, i) => window.setTimeout(() => setStep(i + 1), ms));
    return () => timers.forEach(window.clearTimeout);
  }, [inView, reduce]);

  const d = CHAT_EDIT.demo;
  const bubble = (shown: boolean) => ({
    initial: false as const,
    animate: { opacity: shown ? 1 : 0, y: shown ? 0 : 10, scale: shown ? 1 : 0.97 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[340px]">
      <div
        className="absolute -inset-6 -z-10 rounded-[60px] opacity-70 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgb(37 211 102 / 0.22), transparent)" }}
        aria-hidden
      />
      <div className="overflow-hidden rounded-[38px] border-[7px] border-ink bg-card shadow-[var(--shadow-pop)]">
        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
          <Image src={BRAND_LOGO} alt="easyWebBuilder" width={36} height={36} className="size-9 object-contain" unoptimized />
          <div className="leading-tight">
            <p className="m-0 text-sm font-semibold text-ink">{d.agent}</p>
            <p className="m-0 flex items-center gap-1.5 text-xs text-muted-2">
              <span className="size-1.5 rounded-full bg-[#25D366]" aria-hidden />
              {t(d.status)}
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-2.5 bg-surface-2/60 px-3.5 py-4 text-[13px] leading-snug">
          <motion.p {...bubble(step >= 1)} className="m-0 max-w-[85%] self-end rounded-2xl rounded-ee-md bg-ink px-3 py-2 text-on-ink">
            {t(d.you1)}
          </motion.p>
          <motion.p {...bubble(step >= 2)} className="m-0 max-w-[85%] self-start rounded-2xl rounded-es-md border border-line-2 bg-card px-3 py-2 text-ink">
            {t(d.bot1)}
          </motion.p>
          <motion.p {...bubble(step >= 3)} className="m-0 max-w-[85%] self-end rounded-2xl rounded-ee-md bg-ink px-3 py-2 text-on-ink">
            {t(d.you2)}
          </motion.p>
          <motion.p {...bubble(step >= 4)} className="m-0 max-w-[85%] self-start rounded-2xl rounded-es-md border border-line-2 bg-card px-3 py-2 text-ink">
            {t(d.bot2)}
          </motion.p>

          {/* Live preview of the website that changes with every message */}
          <div className="mt-1 rounded-2xl border border-line-2 bg-card p-3">
            <p className="m-0 mb-2 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wide text-muted-2">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[#25D366]" />
              </span>
              {t(d.preview)}
            </p>
            <div className="relative min-h-[22px]">
              <p className="m-0 text-[15px] font-semibold leading-tight text-ink">{t(d.headline)}</p>
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-line pt-2.5">
              <span className="text-[13px] text-muted">{t(d.service)}</span>
              <span dir="ltr" className="flex items-baseline gap-1.5">
                {step >= 2 ? (
                  <>
                    <s className="text-xs text-faint">{t(d.oldPrice)}</s>
                    <motion.b
                      initial={reduce ? false : { scale: 1.25 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 14 }}
                      className="rounded-md bg-[#25D366]/15 px-1.5 py-0.5 text-[14px] font-bold text-ink"
                    >
                      {t(d.newPrice)}
                    </motion.b>
                  </>
                ) : (
                  <b className="text-[14px] font-bold text-ink">{t(d.oldPrice)}</b>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 border-t border-line bg-surface px-3 py-2.5">
          <span className="flex-1 rounded-full border border-line-2 bg-card px-3.5 py-2 text-xs text-faint">{t(d.placeholder)}</span>
          <span className="grid size-8 place-items-center rounded-full bg-ink text-on-ink">
            <Send className="size-3.5 rtl:-scale-x-100" aria-hidden />
          </span>
        </div>
      </div>
    </div>
  );
}

/** Opens the easyWebBuilder bot in the given messenger. */
function ChannelPill({
  children,
  href,
  label,
  className,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cn(
        "focus-ring inline-flex items-center gap-2 rounded-full border border-line-2 bg-card px-3.5 py-1.5 text-sm font-semibold text-ink no-underline transition-colors hover:border-ink",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function ChatEdit() {
  const { t } = useLanguage();
  return (
    <section id="chat" className="relative overflow-hidden bg-bg py-[clamp(72px,10vw,130px)]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div>
          <Reveal>
            <SectionBadge className="mb-[22px]">{t(CHAT_EDIT.badge)}</SectionBadge>
            <h2 className="m-0 text-balance text-[clamp(32px,4.2vw,58px)] font-medium leading-[1.05] tracking-[-0.03em] text-ink rtl:leading-[1.3]">
              {t(CHAT_EDIT.title)}
            </h2>
            <p className="mb-0 mt-5 max-w-[540px] text-[17px] leading-[1.6] text-muted-2">{t(CHAT_EDIT.subtitle)}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <ChannelPill href={getWhatsAppUrl(t(CHAT_EDIT.whatsappPrefill))} label={t(CHAT_EDIT.whatsapp)}>
                <MessageCircle className="size-[18px] text-[#25D366]" aria-hidden />
                WhatsApp
              </ChannelPill>
              <ChannelPill href={getTelegramUrl()} label={t(CHAT_EDIT.telegram)}>
                <TelegramIcon className="size-[18px] text-[#229ED9]" />
                Telegram
              </ChannelPill>
            </div>
          </Reveal>

          <ul className="m-0 mt-10 grid list-none gap-x-8 gap-y-7 p-0 sm:grid-cols-2">
            {CHAT_EDIT.benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <li key={i}>
                  <Reveal delay={0.06 * i}>
                  <span className="grid size-10 place-items-center rounded-xl border border-line-2 bg-card text-ink">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mb-0 mt-3.5 text-[17px] font-semibold leading-snug tracking-[-0.01em] text-ink">{t(b.title)}</h3>
                  <p className="mb-0 mt-1.5 text-[15px] leading-[1.6] text-muted">{t(b.text)}</p>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal className="mt-10">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <LinkButton href="#try" arrow size="lg">
                {t(CHAT_EDIT.cta)}
              </LinkButton>
              <a href="#contact" className="focus-ring text-[15px] font-medium text-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-ink">
                {t(CHAT_EDIT.more)}
              </a>
            </div>
            <p className="mb-0 mt-5 flex items-start gap-2 text-sm text-muted-2">
              <Check className="mt-0.5 size-4 shrink-0 text-ink" aria-hidden />
              {t(CHAT_EDIT.note)}
            </p>
          </Reveal>
        </div>

        <Reveal y={40}>
          <PhoneDemo />
        </Reveal>
      </div>
    </section>
  );
}
