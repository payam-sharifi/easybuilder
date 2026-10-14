"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { BrowserFrame, SiteScreen } from "@/components/site/sites/site-view";
import { LinkButton } from "@/components/site/ui/button";
import { CountUp } from "@/components/site/ui/count-up";
import { ThemeToggle } from "@/components/site/ui/theme-toggle";
import { HERO, SITE_ITEMS, TRUST_ITEMS, UI } from "@/lib/content";
import { cn } from "@/lib/cn";

const N = SITE_ITEMS.length;
const AUTOPLAY_MS = 4600;

function Carousel() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const dragStart = useRef<number | null>(null);
  const moved = useRef(false);

  // Mouse-driven tilt of the whole stage.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [4, -4]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-6, 6]), { stiffness: 80, damping: 18 });

  // Scroll parallax.
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 700], [0, -50]);

  const go = useCallback((i: number) => setIndex(((i % N) + N) % N), []);

  useEffect(() => {
    if (hovered) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % N), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [hovered, index]);

  const active = SITE_ITEMS[index];

  return (
    <div className="w-full">
      <motion.div
        style={{ y: parallax }}
        dir="ltr"
        className="relative mx-auto w-full max-w-[1180px] touch-pan-y select-none [perspective:1700px]"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
          my.set(((e.clientY - r.top) / r.height) * 2 - 1);
        }}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => {
          setHovered(false);
          mx.set(0);
          my.set(0);
          dragStart.current = null;
        }}
        onPointerDown={(e) => {
          dragStart.current = e.clientX;
          moved.current = false;
        }}
        onPointerUp={(e) => {
          if (dragStart.current === null) return;
          const dx = e.clientX - dragStart.current;
          dragStart.current = null;
          if (Math.abs(dx) > 50) {
            moved.current = true;
            go(index + (dx < 0 ? 1 : -1));
          }
        }}
      >
        <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative">
          {/* Invisible sizer that gives the stage its height */}
          <div aria-hidden className="mx-auto aspect-[16/10] w-[min(760px,80%)] max-sm:w-[86%]" />
          {SITE_ITEMS.map((item, i) => {
            const d = (((i - index + 2) % N) + N) % N - 2; // -2 … 1
            const hidden = Math.abs(d) > 1;
            return (
              <div
                key={item.id}
                className="pointer-events-none absolute inset-0 flex justify-center"
                style={{ zIndex: 10 - Math.abs(d) }}
              >
                <motion.div
                  className="pointer-events-auto h-full w-[min(760px,80%)] cursor-pointer max-sm:w-[86%]"
                  initial={false}
                  animate={{
                    x: `${d * 62}%`,
                    z: -Math.abs(d) * 220,
                    rotateY: d * -26,
                    scale: d === 0 ? 1 : 0.88,
                    opacity: hidden ? 0 : d === 0 ? 1 : 0.55,
                  }}
                  transition={{ type: "spring", stiffness: 90, damping: 20, mass: 0.9 }}
                  onClick={() => {
                    if (!moved.current && d !== 0) go(i);
                  }}
                  style={{ transformStyle: "preserve-3d", pointerEvents: hidden ? "none" : "auto" }}
                  aria-hidden={d !== 0}
                >
                  <BrowserFrame url={item.url} className="h-full">
                    <SiteScreen id={item.id} scroll={d === 0} paused={hovered} className="flex-1" />
                  </BrowserFrame>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Label pill + controls */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label={t(UI.prev)}
          onClick={() => go(index - 1)}
          className="focus-ring grid size-10 cursor-pointer place-items-center rounded-full border border-line-2 bg-card text-ink transition-colors hover:bg-surface"
        >
          <ChevronLeft className="size-[18px] rtl:rotate-180" aria-hidden />
        </button>
        <div className="flex min-w-[220px] flex-col items-center gap-2" aria-live="polite">
          <div className="flex h-10 items-center gap-2.5 rounded-full border border-line-2 bg-card px-4 text-sm">
            <span className="size-2 rounded-full bg-accent" aria-hidden />
            <span className="font-semibold text-ink">{t(active.name)}</span>
            <span className="hidden text-muted-2 sm:inline">· {t(active.kind)}</span>
          </div>
          <div className="flex gap-1.5" role="tablist">
            {SITE_ITEMS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={t(s.name)}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 cursor-pointer rounded-full border-0 p-0 transition-all duration-300",
                  i === index ? "w-6 bg-ink" : "w-1.5 bg-mock-2",
                )}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-label={t(UI.next)}
          onClick={() => go(index + 1)}
          className="focus-ring grid size-10 cursor-pointer place-items-center rounded-full border border-line-2 bg-card text-ink transition-colors hover:bg-surface"
        >
          <ChevronRight className="size-[18px] rtl:rotate-180" aria-hidden />
        </button>
      </div>
    </div>
  );
}

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

          <h1 className="mt-8 max-w-[900px] text-[clamp(32px,4.4vw,56px)] font-medium leading-[1.1] tracking-[-0.04em] text-ink rtl:text-[clamp(28px,4.2vw,48px)] rtl:leading-[1.35]">
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-[640px] text-[17px] leading-[1.65] text-muted-2"
          >
            <p className="m-0 text-pretty">{t(HERO.subtitle)}</p>
            <p className="mb-0 mt-3 text-pretty">{t(HERO.aside)}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <LinkButton href="#contact" arrow size="lg">
              {t(HERO.primaryCta)}
            </LinkButton>
            <LinkButton href="#try" variant="outline" size="lg">
              {t(HERO.secondaryCta)}
            </LinkButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 sm:mt-16"
        >
          <Carousel />
        </motion.div>

        {/* Trust bar */}
        <ul className="m-0 mt-16 grid list-none grid-cols-2 gap-y-8 border-t border-line p-0 pt-10 md:grid-cols-4">
          {TRUST_ITEMS.map((it, i) => (
            <li
              key={i}
              className={cn(
                "flex flex-col items-center gap-2 px-3 text-center md:items-start md:text-start",
                i > 0 && "md:border-s md:border-line md:ps-8",
              )}
            >
              <span className="font-display text-[clamp(32px,3.6vw,48px)] font-medium leading-none tracking-[-0.03em] text-ink">
                {it.value !== undefined ? <CountUp to={it.value} suffix={it.suffix} /> : t(it.text!)}
              </span>
              <span className="max-w-[210px] text-sm leading-snug text-muted-2">{t(it.title)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
