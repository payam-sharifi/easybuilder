"use client";

import { useLanguage } from "@/components/site/providers/language-provider";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { MAPS } from "@/lib/home-content";
import { cn } from "@/lib/cn";

/** Theme-aware mini-map: search bar, pins, three labeled ranking factors. */
function MiniMap({ query, label }: { query: string; label: string }) {
  return (
    <svg
      viewBox="0 0 640 320"
      role="img"
      aria-label={label}
      className="h-auto w-full overflow-visible"
    >
      <rect x="0" y="0" width="640" height="320" rx="22" fill="var(--surface)" stroke="var(--line-2)" />
      {/* streets */}
      <path d="M0 118 H640" stroke="var(--line)" strokeWidth="10" />
      <path d="M0 210 H640" stroke="var(--line)" strokeWidth="8" />
      <path d="M160 0 V320" stroke="var(--line)" strokeWidth="8" />
      <path d="M410 0 V320" stroke="var(--line)" strokeWidth="12" />
      <path d="M540 0 V320" stroke="var(--line)" strokeWidth="6" />
      {/* blocks */}
      <rect x="28" y="28" width="110" height="70" rx="8" fill="var(--card)" />
      <rect x="186" y="28" width="190" height="70" rx="8" fill="var(--card)" />
      <rect x="438" y="28" width="80" height="70" rx="8" fill="var(--card)" />
      <rect x="28" y="140" width="110" height="50" rx="8" fill="var(--card)" />
      <rect x="186" y="140" width="190" height="50" rx="8" fill="var(--card)" />
      <rect x="438" y="140" width="170" height="50" rx="8" fill="var(--card)" />
      <rect x="28" y="232" width="110" height="60" rx="8" fill="var(--card)" />
      <rect x="186" y="232" width="190" height="60" rx="8" fill="var(--card)" />
      {/* search bar */}
      <rect x="36" y="18" width="280" height="40" rx="20" fill="var(--bg)" stroke="var(--line-2)" />
      <circle cx="58" cy="38" r="7" fill="none" stroke="var(--ink)" strokeWidth="2" />
      <line x1="63" y1="44" x2="70" y2="51" stroke="var(--ink)" strokeWidth="2" />
      <text x="82" y="43" fill="var(--ink)" fontSize="14" fontFamily="var(--ewb-body), system-ui, sans-serif">
        {query}
      </text>
      {/* pins: searcher + businesses */}
      <Pin x={320} y={168} accent />
      <Pin x={250} y={250} />
      <Pin x={470} y={120} />
      <Pin x={120} y={200} />
    </svg>
  );
}

function Pin({ x, y, accent }: { x: number; y: number; accent?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="14" rx="10" ry="4" fill="var(--ink)" opacity="0.18" />
      <path
        d="M0 -22c-9 0-16 7-16 16 0 12 16 26 16 26s16-14 16-26c0-9-7-16-16-16z"
        fill={accent ? "var(--accent)" : "var(--ink)"}
      />
      <circle cx="0" cy="-6" r="5" fill="var(--bg)" />
    </g>
  );
}

export function GoogleMaps() {
  const { t } = useLanguage();

  return (
    <section id="google" className="relative bg-bg py-[clamp(72px,10vw,130px)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead badge={MAPS.badge} title={MAPS.title} sub={MAPS.intro} subClassName="max-w-[640px]" />

        <Reveal className="mx-auto mt-12 max-w-[760px]">
          <MiniMap query={t(MAPS.searchQuery)} label={t(MAPS.mapLabel)} />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {MAPS.factors.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.id} delay={i * 0.06}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-[22px] border bg-card p-6",
                    f.help ? "border-line-2" : "border-dashed border-line-2 bg-surface",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-surface-2 text-ink">
                      <Icon className="size-[22px]" aria-hidden />
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.04em]",
                        f.help ? "bg-ink text-on-ink" : "border border-line-2 text-muted-2",
                      )}
                    >
                      {t(f.mark)}
                    </span>
                  </div>
                  <h3 className="mb-0 mt-4 text-[18px] font-medium leading-snug tracking-[-0.02em] text-ink">
                    {t(f.title)}
                  </h3>
                  <p className="mb-0 mt-2 text-[15px] leading-[1.6] text-muted">{t(f.text)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-8 max-w-[760px]">
          <p className="m-0 rounded-[18px] border border-line-2 bg-surface px-5 py-4 text-center text-[15px] leading-[1.65] text-ink">
            {t(MAPS.callout)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
