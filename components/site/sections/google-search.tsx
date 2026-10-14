"use client";

import { useLanguage } from "@/components/site/providers/language-provider";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { GOOGLE_SEARCH } from "@/lib/home-content";

export function GoogleSearch() {
  const { t } = useLanguage();

  return (
    <section id="suche" className="relative bg-bg py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead
          badge={GOOGLE_SEARCH.badge}
          title={GOOGLE_SEARCH.title}
          sub={GOOGLE_SEARCH.intro}
          subClassName="max-w-[640px]"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {GOOGLE_SEARCH.steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.id} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-[22px] border border-line-2 bg-card p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-surface-2 text-ink">
                    <Icon className="size-[22px]" aria-hidden />
                  </span>
                  <h3 className="mb-0 mt-4 text-[18px] font-medium leading-snug tracking-[-0.02em] text-ink">
                    {t(step.title)}
                  </h3>
                  <p className="mb-0 mt-2 text-[15px] leading-[1.6] text-muted">{t(step.text)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-8 max-w-[760px]">
          <p className="m-0 rounded-[18px] border border-line-2 bg-surface px-5 py-4 text-center text-[15px] leading-[1.65] text-ink">
            {t(GOOGLE_SEARCH.note)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
