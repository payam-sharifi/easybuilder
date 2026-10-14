"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { FEATURES, FEATURES_COPY, type FeatureId } from "@/lib/content";
import { cn } from "@/lib/cn";

const bar = "h-2 rounded-full bg-mock";

function VisualAi() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 px-6" dir="ltr">
      <div className="w-fit max-w-[88%] rounded-xl border border-line-2 bg-card px-3 py-2 font-mono text-[11.5px] text-muted">
        Write a hero headline for a bakery
      </div>
      <div className="space-y-2 rounded-xl bg-surface-2 p-3.5">
        <p className="m-0 text-[15px] font-medium leading-tight text-ink">
          Fresh bread, baked before sunrise
          <span className="ms-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-caret bg-ink" />
        </p>
        <div className={cn(bar, "w-full")} />
        <div className={cn(bar, "w-4/5")} />
      </div>
    </div>
  );
}

function VisualSeo() {
  return (
    <div className="flex h-full items-center gap-5 px-6" dir="ltr">
      <div className="relative grid size-[104px] shrink-0 place-items-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" aria-hidden>
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--mock)" strokeWidth="8" />
          <motion.circle
            cx="50" cy="50" r="42" fill="none" stroke="var(--ink)" strokeWidth="8" strokeLinecap="round"
            strokeDasharray="264"
            initial={{ strokeDashoffset: 264 }}
            whileInView={{ strokeDashoffset: 264 * 0.01 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <span className="text-[30px] font-medium tracking-tight text-ink">99</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 text-[12px]">
        {["LCP 0.9s", "CLS 0.00", "INP 48ms"].map((m) => (
          <span key={m} className="flex items-center gap-2 rounded-lg border border-line bg-card px-2.5 py-1.5 font-mono text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

function VisualI18n() {
  return (
    <div className="grid h-full grid-cols-2 gap-3 px-6 py-6" dir="ltr">
      {[
        { code: "DE", dir: "ltr" as const, align: "items-start" },
        { code: "EN", dir: "ltr" as const, align: "items-start" },
      ].map((p) => (
        <div key={p.code} className={cn("flex flex-col justify-center gap-2 rounded-xl border border-line-2 bg-card p-3", p.align)}>
          <span className="rounded-md bg-ink px-1.5 py-0.5 font-mono text-[10px] font-semibold text-on-ink">{p.code}</span>
          <div className={cn(bar, "w-4/5")} /><div className={cn(bar, "w-full")} /><div className={cn(bar, "w-3/5")} />
          <div className="mt-1 h-5 w-12 rounded-md bg-mock-2" />
        </div>
      ))}
    </div>
  );
}

function VisualGeo() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 px-6" dir="ltr">
      <div className="ms-auto w-fit max-w-[90%] rounded-xl rounded-ee-sm bg-ink px-3 py-2 text-[12px] text-on-ink">
        Best AI website builder for small business?
      </div>
      <div className="w-fit max-w-[94%] rounded-xl rounded-es-sm border border-line-2 bg-card px-3 py-2.5 text-[12px] leading-snug text-muted">
        <span className="font-semibold text-ink">easyWebBuilder</span> — fast, SEO-ready, no code.
        <span className="mt-2 flex gap-1.5">
          {["llms.txt", "schema.org"].map((c) => (
            <span key={c} className="inline-flex items-center gap-1 rounded-md bg-surface-2 px-1.5 py-0.5 font-mono text-[10px]"><Check className="size-2.5" aria-hidden />{c}</span>
          ))}
        </span>
      </div>
    </div>
  );
}

const VISUALS: Record<FeatureId, () => ReactNode> = {
  ai: VisualAi,
  seo: VisualSeo,
  i18n: VisualI18n,
  geo: VisualGeo,
};
const SPANS = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-3", "lg:col-span-3"];

export function Features() {
  const { t } = useLanguage();
  return (
    <section id="features" className="asphalt band relative py-[clamp(72px,10vw,130px)] text-ink">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead badge={FEATURES_COPY.badge} title={FEATURES_COPY.title} sub={FEATURES_COPY.subtitle} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {FEATURES.map((f, i) => {
            const Visual = VISUALS[f.id];
            return (
              <Reveal key={f.id} delay={(i % 3) * 0.08} className={cn("pc-wrap", SPANS[i])}>
                <div className="pc-bg" aria-hidden />
                <article className="pc-card flex flex-col overflow-hidden rounded-[22px] border border-line-2 bg-card">
                  <div className="h-[190px] border-b border-line bg-surface-2/60">
                    <Visual />
                  </div>
                  <div className="p-6">
                    <h3 className="m-0 text-[22px] font-medium leading-tight tracking-[-0.02em] text-ink">{t(f.title)}</h3>
                    <p className="mb-0 mt-2.5 text-[15px] leading-[1.6] text-muted">{t(f.text)}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
