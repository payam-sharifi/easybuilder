"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { ChannelBadges } from "@/components/site/ui/channel-badges";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionBadge } from "@/components/site/ui/section-badge";
import { CHAT_EDIT, BRAND_LOGO } from "@/lib/content";
import { CHAT_FLOW } from "@/lib/home-content";
import { pad2 } from "@/lib/i18n";
import { cn } from "@/lib/cn";

/** 1 message → 2 preview → 3 confirm → 4 review → 5 live */
const STEP_AT_MS = [400, 1600, 2800, 4000, 5400];

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
      setStep(5);
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
        style={{ background: "radial-gradient(closest-side, rgb(34 158 217 / 0.22), transparent)" }}
        aria-hidden
      />
      <div className="overflow-hidden rounded-[38px] border-[7px] border-ink bg-card shadow-[var(--shadow-pop)]">
        <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
          <Image src={BRAND_LOGO} alt="easyWebBuilder" width={36} height={36} className="size-9 object-contain" unoptimized />
          <div className="leading-tight">
            <p className="m-0 text-sm font-semibold text-ink">{d.agent}</p>
            <p className="m-0 flex items-center gap-1.5 text-xs text-muted-2">
              <span className="size-1.5 rounded-full bg-[#229ED9]" aria-hidden />
              {t(d.status)}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 bg-surface-2/60 px-3.5 py-4 text-[13px] leading-snug">
          <motion.p {...bubble(step >= 1)} className="m-0 max-w-[85%] self-end rounded-2xl rounded-ee-md bg-ink px-3 py-2 text-on-ink">
            {t(d.you1)}
          </motion.p>
          <motion.p {...bubble(step >= 2)} className="m-0 max-w-[85%] self-start rounded-2xl rounded-es-md border border-line-2 bg-card px-3 py-2 text-ink">
            {t(d.bot1)}
          </motion.p>

          <div className="mt-1 rounded-2xl border border-line-2 bg-card p-3">
            <p className="m-0 mb-2 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wide text-muted-2">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#229ED9] opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[#229ED9]" />
              </span>
              {t(d.preview)}
            </p>
            <div className="relative min-h-[22px]">
              <motion.p
                initial={false}
                animate={{ opacity: step >= 2 ? 1 : 0.4, y: 0 }}
                className="m-0 text-[15px] font-semibold leading-tight text-ink"
              >
                {t(d.headline)}
              </motion.p>
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
                      className="rounded-md bg-[#229ED9]/15 px-1.5 py-0.5 text-[14px] font-bold text-ink"
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

          <motion.p {...bubble(step >= 3)} className="m-0 max-w-[85%] self-end rounded-2xl rounded-ee-md bg-ink px-3 py-2 text-on-ink">
            {t(d.you2)}
          </motion.p>
          <motion.p {...bubble(step >= 4)} className="m-0 max-w-[85%] self-start rounded-2xl rounded-es-md border border-line-2 bg-card px-3 py-2 text-ink">
            {t(d.bot2)}
          </motion.p>
          <motion.p {...bubble(step >= 5)} className="m-0 max-w-[85%] self-start rounded-2xl rounded-es-md border border-line-2 bg-card px-3 py-2 text-ink">
            {t(d.bot3)}
          </motion.p>
        </div>

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

export function ChatEdit() {
  const { t, lang } = useLanguage();

  return (
    <section id="chat" className="relative overflow-hidden bg-bg py-[clamp(72px,10vw,130px)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <SectionBadge className="mb-[22px]">{t(CHAT_FLOW.badge)}</SectionBadge>
          <h2 className="m-0 max-w-[820px] text-balance text-[clamp(32px,4.2vw,58px)] font-medium leading-[1.05] tracking-[-0.03em] text-ink rtl:leading-[1.3]">
            {t(CHAT_FLOW.title)}
          </h2>
          <p className="mb-0 mt-5 max-w-[640px] text-[17px] leading-[1.6] text-muted-2">{t(CHAT_FLOW.intro)}</p>
        </Reveal>

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
          <ol className="m-0 flex list-none flex-col gap-8 p-0">
            {CHAT_FLOW.steps.map((s, i) => (
              <li key={i} className="proc-step">
                <Reveal delay={i * 0.06}>
                  <div className="flex gap-4">
                    <span className="proc-num font-display shrink-0 text-[clamp(36px,4vw,52px)] font-extrabold leading-none tracking-[-0.05em] text-ink">
                      {pad2(i + 1, lang)}
                    </span>
                    <div className="min-w-0 pt-1">
                      <h3 className="m-0 text-[18px] font-semibold leading-snug tracking-[-0.01em] text-ink">
                        {t(s.title)}
                      </h3>
                      <p className="mb-0 mt-1.5 text-[15px] leading-[1.6] text-muted">{t(s.text)}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal y={40}>
            <PhoneDemo />
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="grid gap-3 sm:grid-cols-2">
            <p className="m-0 rounded-[18px] border border-dashed border-line-2 bg-surface px-5 py-4 text-[15px] leading-snug text-muted">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-faint">
                {t(CHAT_FLOW.compareAgency.label)}
              </span>
              <span className="mt-1 block text-ink">{t(CHAT_FLOW.compareAgency.text)}</span>
            </p>
            <p className="m-0 rounded-[18px] border border-ink bg-card px-5 py-4 text-[15px] leading-snug text-ink">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-muted-2">
                {t(CHAT_FLOW.compareUs.label)}
              </span>
              <span className="mt-1 block font-semibold">{t(CHAT_FLOW.compareUs.text)}</span>
            </p>
          </div>
          <ChannelBadges className="mt-6" />
          <p className={cn("mb-0 mt-4 text-sm text-muted-2")}>{t(CHAT_FLOW.note)}</p>
        </Reveal>
      </div>
    </section>
  );
}
