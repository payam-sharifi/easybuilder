"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { SAMPLE_REVIEW_QR_SRC, VISIBILITY } from "@/lib/home-content";

export function Visibility() {
  const { t } = useLanguage();

  return (
    <section id="sichtbarkeit" className="relative bg-bg py-[clamp(72px,10vw,130px)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead badge={VISIBILITY.badge} title={VISIBILITY.title} sub={VISIBILITY.subtitle} />

        <ul className="m-0 mt-12 grid list-none gap-3 p-0 sm:grid-cols-2">
          {VISIBILITY.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i}>
                <Reveal delay={(i % 2) * 0.05}>
                  <div className="flex h-full items-start gap-3.5 rounded-[18px] border border-line-2 bg-card p-4 sm:p-5">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-ink text-on-ink">
                      <Check className="size-4" strokeWidth={3} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <Icon className="mb-2 size-4 text-muted" aria-hidden />
                      <p className="m-0 text-[15px] leading-[1.55] text-ink">{t(item.text)}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-10">
          <article className="grid items-center gap-8 rounded-[22px] border border-line-2 bg-card p-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:p-8">
            <div className="relative mx-auto w-[168px] shrink-0">
              <span className="absolute -top-2 end-0 rounded-full bg-ink px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-on-ink">
                {t(VISIBILITY.qr.sampleLabel)}
              </span>
              <div className="rounded-2xl border border-line-2 bg-white p-3">
                {/* eslint-disable-next-line @next/next/no-img-element -- self-hosted SVG generated at build time */}
                <img
                  src={SAMPLE_REVIEW_QR_SRC}
                  alt={t(VISIBILITY.qr.alt)}
                  width={144}
                  height={144}
                  className="block size-36"
                />
              </div>
            </div>
            <div>
              <h3 className="m-0 text-[22px] font-medium leading-tight tracking-[-0.02em] text-ink">
                {t(VISIBILITY.qr.title)}
              </h3>
              <p className="mb-0 mt-3 max-w-[560px] text-[15px] leading-[1.65] text-muted">{t(VISIBILITY.qr.text)}</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
