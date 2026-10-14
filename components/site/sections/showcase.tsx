"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { BrowserFrame, SiteScreen, VideoScreen } from "@/components/site/sites/site-view";
import { LinkButton } from "@/components/site/ui/button";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionBadge } from "@/components/site/ui/section-badge";
import { SectionHead } from "@/components/site/ui/section-head";
import {
  SHOWCASE_COPY,
  SHOWCASE_ITEMS,
  SHOWCASE_TABS,
  TEMPLATE_CHIPS,
  type ShowcaseCategory,
  type ShowcaseItem,
  type SiteKey,
} from "@/lib/content";
import { pad2 } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function Row({ item, index, total, flip }: { item: ShowcaseItem; index: number; total: number; flip: boolean }) {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [36, -36]);
  const pad = (n: number) => pad2(n, lang);

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:gap-16",
        flip ? "lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]" : "lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]",
      )}
    >
      <Reveal className={cn("order-2", flip ? "lg:order-2" : "lg:order-none")}>
        <div className="flex items-center gap-3">
          <p className="m-0 font-mono text-[13px] tracking-normal text-faint" dir="ltr">
            {pad(index + 1)} / {pad(total)}
          </p>
          {item.live ? (
            <span className="flex items-center gap-1.5 rounded-full border border-line-2 px-2.5 py-0.5 text-xs font-semibold text-ink">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              Live
            </span>
          ) : null}
        </div>
        <h3 className="mb-0 mt-3 text-[clamp(30px,3.4vw,46px)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
          {t(item.name)}
        </h3>
        <p className="mb-0 mt-2 text-base text-muted-2">{t(item.kind)}</p>

        <ul className="m-0 mt-5 flex list-none flex-wrap gap-x-4 gap-y-1.5 p-0 font-mono text-[13px] text-muted" dir="ltr">
          {item.tags.map((tag) => (
            <li key={tag}>
              <span className="text-accent">#</span>
              {tag.slice(1)}
            </li>
          ))}
        </ul>

        <div className="why-wrap max-w-[460px]">
          <div className="why-bg" aria-hidden />
          <div className="why-card">
            <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.06em] text-ink">{t(SHOWCASE_COPY.why)}</p>
            <p className="mb-0 mt-2 text-[15px] leading-[1.6] text-muted">{t(item.why)}</p>
          </div>
        </div>

        <LinkButton
          href={item.href ?? "#contact"}
          {...(item.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          size="md"
          className="mt-8 gap-2"
        >
          {t(item.cta)}
          <ArrowUpRight className="size-[17px] rtl:-scale-x-100" strokeWidth={2.4} aria-hidden />
        </LinkButton>
      </Reveal>

      <motion.div
        style={{ y, filter: `drop-shadow(0 36px 40px ${item.glow})` }}
        className={cn("order-1", flip ? "lg:order-1" : "lg:order-none")}
      >
        <Reveal y={40}>
          <BrowserFrame url={item.video ? item.video.label : item.url}>
            {item.video ? (
              <VideoScreen src={item.video.src} poster={item.video.poster} />
            ) : (
              <SiteScreen id={item.id as SiteKey} scroll className="aspect-[4/3]" />
            )}
          </BrowserFrame>
        </Reveal>
      </motion.div>
    </div>
  );
}

function Marquee({ reverse = false }: { reverse?: boolean }) {
  const { t } = useLanguage();
  const chips = [...TEMPLATE_CHIPS, ...TEMPLATE_CHIPS];
  return (
    <div className="mask-fade-x overflow-hidden py-2">
      <div
        className={cn("marquee-track flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]", reverse && "[animation-direction:reverse]")}
      >
        {chips.map(({ icon: Icon, label }, i) => (
          <span
            key={i}
            aria-hidden={i >= TEMPLATE_CHIPS.length}
            className="flex h-12 shrink-0 items-center gap-2.5 rounded-full border border-line-2 bg-card px-5 text-[15px] font-medium text-ink transition-colors hover:bg-surface"
          >
            <Icon className="size-[17px] text-muted" aria-hidden />
            {t(label)}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Showcase() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<ShowcaseCategory>("all");
  const items = tab === "all" ? SHOWCASE_ITEMS : SHOWCASE_ITEMS.filter((s) => s.category === tab);

  return (
    <>
      <section id="showcase" className="relative bg-bg py-[clamp(72px,10vw,130px)]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <SectionHead badge={SHOWCASE_COPY.badge} title={SHOWCASE_COPY.title} sub={SHOWCASE_COPY.subtitle} />

          <Reveal delay={0.1} className="mt-10 flex justify-center">
            <div
              role="tablist"
              aria-label={t(SHOWCASE_COPY.badge)}
              className="scrollbar-none flex max-w-full gap-1 overflow-x-auto rounded-full border border-line-2 bg-surface p-1"
            >
              {SHOWCASE_TABS.map((tb) => {
                const active = tab === tb.id;
                return (
                  <button
                    key={tb.id}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    onClick={() => setTab(tb.id)}
                    className={cn(
                      "focus-ring relative shrink-0 cursor-pointer whitespace-nowrap rounded-full border-0 bg-transparent px-[18px] py-2.5 text-sm font-semibold transition-colors duration-300",
                      active ? "text-on-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {active ? (
                      <motion.span
                        layoutId="showcase-thumb"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      />
                    ) : null}
                    <span className="relative">{t(tb.label)}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-[clamp(48px,7vw,96px)] flex flex-col gap-[clamp(64px,9vw,128px)]"
            >
              {items.map((item, i) => (
                <Row key={item.id} item={item} index={i} total={items.length} flip={i % 2 === 1} />
              ))}
              {items.length === 0 ? <p className="text-center text-muted">{t(SHOWCASE_COPY.empty)}</p> : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section id="templates" className="relative overflow-hidden bg-bg pb-[clamp(72px,10vw,130px)]">
        <Reveal className="mx-auto flex max-w-[720px] flex-col items-center px-5 text-center">
          <SectionBadge className="mb-[22px]">{t(SHOWCASE_COPY.templatesBadge)}</SectionBadge>
          <h2 className="m-0 text-balance text-[clamp(26px,3.2vw,42px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
            {t(SHOWCASE_COPY.templatesTitle)}
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-col gap-3">
          <Marquee />
          <Marquee reverse />
        </div>
      </section>
    </>
  );
}
