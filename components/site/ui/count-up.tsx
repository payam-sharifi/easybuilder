"use client";

import { animate, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { formatNumber } from "@/lib/i18n";

/** Counts from 0 to `to` the first time it scrolls into view. */
export function CountUp({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const { lang } = useLanguage();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [n, setN] = useState(0);

  useMotionValueEvent(mv, "change", (v) => setN(Math.round(v)));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, mv, to, duration]);

  return (
    <span ref={ref} dir="ltr" className="inline-block tabular-nums">
      {formatNumber(n, lang)}
      {suffix}
    </span>
  );
}
