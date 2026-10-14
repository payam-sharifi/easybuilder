"use client";

import { useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { JOURNEY, JOURNEY_COPY } from "@/lib/home-content";
import { pad2 } from "@/lib/i18n";

export function HowItWorks() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="how" className="asphalt band relative py-[clamp(72px,10vw,130px)] text-ink">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead badge={JOURNEY_COPY.badge} title={JOURNEY_COPY.title} sub={JOURNEY_COPY.subtitle} />

        <ol
          ref={ref}
          className="m-0 mt-16 grid list-none gap-12 p-0 sm:grid-cols-2 xl:grid-cols-5 xl:gap-6"
        >
          {JOURNEY.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={i} className="proc-step">
                <Reveal delay={i * 0.08}>
                  <div
                    className="proc-line"
                    style={{ "--fill": inView ? 1 : 0, "--fill-delay": `${0.2 + i * 0.28}s` } as CSSProperties}
                  />
                  <span className="mt-6 grid size-11 place-items-center rounded-xl border border-line-2 bg-card text-ink">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="proc-num font-display mt-5 block text-[clamp(48px,5.4vw,72px)] font-extrabold leading-[0.9] tracking-[-0.05em] text-ink">
                    {pad2(i + 1, lang)}
                  </span>
                  <h3 className="mb-0 mt-5 text-[20px] font-medium leading-tight tracking-[-0.02em]">{t(s.title)}</h3>
                  <p className="mb-0 mt-3 text-[15px] leading-[1.65] text-muted">{t(s.text)}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
