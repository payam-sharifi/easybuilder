"use client";

import { useLanguage } from "@/components/site/providers/language-provider";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { PILLARS } from "@/lib/home-content";
import { cn } from "@/lib/cn";

export function Pillars() {
  const { t, href } = useLanguage();

  return (
    <section id="pillars" className="relative bg-bg py-[clamp(56px,8vw,96px)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead badge={PILLARS.badge} title={PILLARS.title} sub={PILLARS.subtitle} />
        <div className="mx-auto mt-12 grid max-w-[1080px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.id} delay={i * 0.08} className="pc-wrap">
                <div className="pc-bg" aria-hidden />
                <a
                  href={href(card.href)}
                  className={cn(
                    "pc-card focus-ring flex h-full flex-col rounded-[22px] border border-line-2 bg-card p-6 no-underline sm:p-8",
                  )}
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-surface-2 text-ink">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mb-0 mt-5 text-[22px] font-medium leading-tight tracking-[-0.02em] text-ink">
                    {t(card.title)}
                  </h3>
                  <p className="mb-0 mt-2 text-[16px] leading-[1.6] text-muted">{t(card.text)}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
