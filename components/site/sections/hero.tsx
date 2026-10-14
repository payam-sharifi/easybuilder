"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/site/providers/language-provider";
import { LinkButton } from "@/components/site/ui/button";
import { ChatTryLinks } from "@/components/site/ui/chat-try-links";
import { ThemeToggle } from "@/components/site/ui/theme-toggle";
import { HERO } from "@/lib/content";

export function Hero() {
  const { t, href } = useLanguage();

  return (
    <section id="top" className="relative z-0 overflow-x-clip pb-16 pt-10 sm:pt-14">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="flex flex-col items-start text-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ThemeToggle />
            </motion.div>

            <h1 className="mt-8 max-w-[18ch] text-[clamp(36px,5.4vw,68px)] font-medium leading-[1.05] tracking-[-0.045em] text-ink rtl:max-w-[14ch] rtl:leading-[1.25]">
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {t(HERO.title)}
                </motion.span>
              </span>
            </h1>

            <ul className="m-0 mt-8 flex w-full max-w-[540px] list-none flex-col gap-3.5 p-0">
              {HERO.points.map((point, i) => {
                const Icon = point.icon;
                return (
                  <motion.li
                    key={point.text.de}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.38 + i * 0.1 }}
                    className="flex items-start gap-3.5"
                  >
                    <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-on-ink">
                      <Icon className="size-[18px]" aria-hidden />
                    </span>
                    <p className="mb-0 mt-1.5 text-[17px] font-medium leading-[1.45] tracking-[-0.02em] text-ink sm:text-[18px]">
                      {t(point.text)}
                    </p>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
              className="mt-8 flex w-full flex-col items-start gap-5"
            >
              <ChatTryLinks />
              <LinkButton href={href("#contact")} variant="outline" size="lg">
                {t(HERO.primaryCta)}
              </LinkButton>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-5 text-sm text-muted-2"
            >
              {t(HERO.trust)}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
          >
            <div
              className="absolute -inset-6 -z-10 rounded-[40px] opacity-70 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgb(14 61 49 / 0.22), transparent)" }}
              aria-hidden
            />
            <div className="overflow-hidden rounded-[28px] border border-line-2 bg-[#f4efe6] shadow-[var(--shadow-pop)]">
              <Image
                src="/hero/owner.jpg"
                alt={t(HERO.imageAlt)}
                width={1152}
                height={864}
                priority
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
