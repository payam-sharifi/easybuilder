"use client";

import { Check, X } from "lucide-react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { HONESTY } from "@/lib/home-content";

export function Honesty() {
  const { t } = useLanguage();

  return (
    <section id="ehrlich" className="relative bg-bg py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead badge={HONESTY.badge} title={HONESTY.title} />
        <div className="mx-auto mt-12 grid max-w-[960px] gap-5 md:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-[22px] border border-line-2 bg-card p-6 sm:p-8">
              <h3 className="m-0 text-[18px] font-semibold tracking-[-0.02em] text-ink">{t(HONESTY.canTitle)}</h3>
              <ul className="m-0 mt-5 flex list-none flex-col gap-3.5 p-0">
                {HONESTY.can.map((item) => (
                  <li key={item.de} className="flex gap-3 text-[15px] leading-[1.55] text-ink">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink text-on-ink">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    {t(item)}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col rounded-[22px] border border-dashed border-line-2 bg-surface p-6 sm:p-8">
              <h3 className="m-0 text-[18px] font-semibold tracking-[-0.02em] text-ink">{t(HONESTY.cannotTitle)}</h3>
              <ul className="m-0 mt-5 flex list-none flex-col gap-3.5 p-0">
                {HONESTY.cannot.map((item) => (
                  <li key={item.de} className="flex gap-3 text-[15px] leading-[1.55] text-muted">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-line-2 text-muted">
                      <X className="size-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    {t(item)}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
