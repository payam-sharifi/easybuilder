"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/site/providers/language-provider";
import { BrowserFrame, SiteScreen } from "@/components/site/sites/site-view";
import { LinkButton } from "@/components/site/ui/button";
import { ThemeToggle } from "@/components/site/ui/theme-toggle";
import { HERO, SHOWCASE_ITEMS } from "@/lib/content";

const featured = SHOWCASE_ITEMS.find((s) => s.id === "hengameh");

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative z-0 overflow-x-clip pb-16 pt-10 sm:pt-14">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ThemeToggle />
          </motion.div>

          <h1 className="mt-8 max-w-[1100px] text-[clamp(32px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.04em] text-ink rtl:text-[clamp(28px,4.6vw,60px)] rtl:leading-[1.3]">
            {HERO.title.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block text-balance"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {t(line)}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-[640px] text-pretty text-[17px] leading-[1.6] text-muted-2"
          >
            {t(HERO.subtitle)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <LinkButton href="#contact" arrow size="lg">
              {t(HERO.primaryCta)}
            </LinkButton>
            <LinkButton href="#chat" variant="outline" size="lg">
              {t(HERO.secondaryCta)}
            </LinkButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.82 }}
            className="mt-5 text-sm text-muted-2"
          >
            {t(HERO.trust)}
          </motion.p>
        </div>

        {featured ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-14 max-w-[760px] sm:mt-16"
            style={{ filter: `drop-shadow(0 36px 40px ${featured.glow})` }}
          >
            <BrowserFrame url={featured.url}>
              <SiteScreen id="hengameh" scroll className="aspect-[16/10]" />
            </BrowserFrame>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
