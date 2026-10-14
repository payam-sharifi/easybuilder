"use client";

import { useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { HOW_COPY, STEPS } from "@/lib/content";
import { pad2 } from "@/lib/i18n";

export function HowItWorks() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="how" className="asphalt band relative py-[clamp(72px,10vw,130px)] text-ink">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead badge={HOW_COPY.badge} title={HOW_COPY.title} sub={HOW_COPY.subtitle} />

        <ol ref={ref} className="m-0 mt-16 grid list-none gap-12 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <li key={i} className="proc-step">
              <Reveal delay={i * 0.1}>
                <div
                  className="proc-line"
                  style={{ "--fill": inView ? 1 : 0, "--fill-delay": `${0.2 + i * 0.35}s` } as CSSProperties}
                />
                <span className="proc-num font-display mt-7 block text-[clamp(64px,7vw,104px)] font-extrabold leading-[0.9] tracking-[-0.05em] text-ink">
                  {pad2(i + 1, lang)}
                </span>
                <h3 className="mb-0 mt-6 text-[22px] font-medium leading-tight tracking-[-0.02em]">{t(s.title)}</h3>
                <p className="mb-0 mt-3 text-[15px] leading-[1.65] text-muted">{t(s.text)}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
