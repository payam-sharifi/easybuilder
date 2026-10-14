"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { BrowserFrame, SiteScreen, VideoScreen } from "@/components/site/sites/site-view";
import { LinkButton } from "@/components/site/ui/button";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import {
  SHOWCASE_COPY,
  SHOWCASE_PUBLIC,
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

export function Showcase() {
  const items = SHOWCASE_PUBLIC;

  return (
    <section id="showcase" className="relative bg-bg py-[clamp(72px,10vw,130px)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead badge={SHOWCASE_COPY.badge} title={SHOWCASE_COPY.title} sub={SHOWCASE_COPY.subtitle} />

        <div className="mt-[clamp(48px,7vw,96px)] flex flex-col gap-[clamp(64px,9vw,128px)]">
          {items.map((item, i) => (
            <Row key={item.id} item={item} index={i} total={items.length} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
