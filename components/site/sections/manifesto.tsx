"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { SectionBadge } from "@/components/site/ui/section-badge";
import { MANIFESTO } from "@/lib/content";

function Word({
  children,
  progress,
  range,
  plate,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  plate: boolean;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  const plateOpacity = useTransform(progress, [range[0], range[1] + 0.02], [0, 1]);
  const plateScale = useTransform(progress, [range[0], range[1] + 0.02], [0.6, 1]);

  if (!plate) {
    return <motion.span style={{ opacity }}>{children}</motion.span>;
  }
  return (
    <motion.span style={{ opacity }} className="relative isolate mx-[0.04em] inline-block px-[0.28em] text-on-ink">
      <motion.span
        aria-hidden
        style={{ opacity: plateOpacity, scale: plateScale }}
        className="absolute inset-x-0 inset-y-[0.04em] -z-10 rounded-[0.2em] bg-ink"
      />
      {children}
    </motion.span>
  );
}

/** Asphalt band with a pinned paragraph whose words light up as you scroll. */
export function Manifesto() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const words = t(MANIFESTO.text).split(/\s+/);
  const plateFrom = words.length - MANIFESTO.plateWords[lang];
  const span = 0.8; // portion of the scroll used for the reveal

  return (
    <section ref={ref} className="asphalt band relative h-[240vh] text-ink" aria-label={t(MANIFESTO.badge)}>
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
          <SectionBadge className="mb-8">{t(MANIFESTO.badge)}</SectionBadge>
          <p className="font-display m-0 text-[clamp(24px,3.7vw,52px)] font-medium leading-[1.22] tracking-[-0.03em] rtl:leading-[1.6]">
            {words.map((w, i) => {
              const start = (i / words.length) * span;
              const end = start + span / words.length * 2.2;
              return (
                <span key={`${lang}-${i}`}>
                  <Word progress={scrollYProgress} range={[start, Math.min(end, 1)]} plate={i >= plateFrom}>
                    {w}
                  </Word>{" "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
