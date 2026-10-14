"use client";

import { MapPin, Star } from "lucide-react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { LOCAL_FIND } from "@/lib/content";

const MOCK_RESULTS = [
  { name: "Nordstadt Installationen", rating: "4.8", km: "0.8", you: true },
  { name: "Hafen Klempner", rating: "4.2", km: "1.1", you: false },
  { name: "Elbe Rohr & Bad", rating: "3.9", km: "2.4", you: false },
];

export function GoogleMaps() {
  const { t } = useLanguage();

  return (
    <section id="maps" className="asphalt band relative py-[clamp(72px,10vw,130px)] text-ink">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead
          badge={LOCAL_FIND.badge}
          title={LOCAL_FIND.title}
          sub={LOCAL_FIND.subtitle}
          subClassName="max-w-[640px]"
        />

        <Reveal className="mx-auto mt-12 max-w-[420px]">
          <div className="overflow-hidden rounded-[22px] border border-line-2 bg-card shadow-[var(--shadow-pop)]">
            <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
              <span className="grid size-8 place-items-center rounded-full bg-surface-2 text-ink">
                <MapPin className="size-4" aria-hidden />
              </span>
              <p className="m-0 text-[15px] font-semibold text-ink">{t(LOCAL_FIND.example)}</p>
            </div>
            <ol className="m-0 list-none p-0">
              {MOCK_RESULTS.map((row, i) => (
                <li
                  key={row.name}
                  className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 last:border-b-0"
                >
                  <div className="min-w-0">
                    <p className="m-0 flex items-center gap-2 text-[14px] font-medium text-ink">
                      <span className="font-mono text-[11px] text-faint">{i + 1}</span>
                      {row.name}
                      {row.you ? (
                        <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-semibold text-on-ink">
                          {t(LOCAL_FIND.you)}
                        </span>
                      ) : null}
                    </p>
                    <p className="mb-0 mt-1 flex items-center gap-2 text-[12px] text-muted-2">
                      <span className="inline-flex items-center gap-1">
                        <Star className="size-3 fill-current" aria-hidden />
                        {row.rating}
                      </span>
                      <span aria-hidden>·</span>
                      <span>{row.km} km</span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {LOCAL_FIND.factors.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <article className="h-full rounded-[22px] border border-line-2 bg-card p-6">
                  <span className="grid size-10 place-items-center rounded-xl border border-line-2 bg-surface-2 text-ink">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mb-0 mt-4 text-[20px] font-medium leading-tight tracking-[-0.02em] text-ink">
                    {t(f.title)}
                  </h3>
                  <p className="mb-0 mt-2.5 text-[15px] leading-[1.6] text-muted">{t(f.text)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-10 max-w-[720px] rounded-2xl border border-line-2 bg-surface px-5 py-4 text-center text-[14px] leading-[1.6] text-muted-2">
          {t(LOCAL_FIND.disclaimer)}
        </Reveal>
      </div>
    </section>
  );
}
