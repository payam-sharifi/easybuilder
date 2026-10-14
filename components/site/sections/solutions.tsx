"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { LinkButton } from "@/components/site/ui/button";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { SOLUTIONS, SOLUTIONS_COPY, type Solution } from "@/lib/content";
import { formatNumber } from "@/lib/i18n";
import { cn } from "@/lib/cn";

type Shape = "hero" | "lines" | "cards" | "gallery" | "form" | "seo" | "footer" | "chat";

/** Wireframe block shown for each numbered feature row. */
const SHAPES: Record<Solution["id"], Shape[]> = {
  small: ["hero", "chat", "lines", "seo", "form", "footer"],
  custom: ["gallery", "form", "chat", "cards", "seo", "footer"],
};

const GROW: Record<Shape, number> = { hero: 3, lines: 2, cards: 2.4, gallery: 2.4, form: 2.4, seo: 1.6, footer: 1.4, chat: 1.8 };

const dot = "rounded-full bg-mock";

function Wire({ shape }: { shape: Shape }) {
  switch (shape) {
    case "hero":
      return (
        <div className="flex h-full items-center gap-2 p-1.5">
          <div className="flex flex-1 flex-col gap-1"><i className={cn(dot, "h-1.5 w-4/5")} /><i className={cn(dot, "h-1.5 w-3/5")} /><i className="mt-0.5 h-2.5 w-8 rounded-sm bg-mock-2" /></div>
          <i className="h-full w-[38%] rounded bg-mock" />
        </div>
      );
    case "lines":
      return <div className="flex h-full flex-col justify-center gap-1 p-1.5"><i className={cn(dot, "h-1 w-full")} /><i className={cn(dot, "h-1 w-11/12")} /><i className={cn(dot, "h-1 w-2/3")} /></div>;
    case "cards":
      return <div className="grid h-full grid-cols-3 gap-1.5 p-1.5">{[0, 1, 2].map((i) => <i key={i} className="rounded bg-mock" />)}</div>;
    case "gallery":
      return <div className="grid h-full grid-cols-4 gap-1 p-1.5">{[0, 1, 2, 3].map((i) => <i key={i} className="rounded-sm bg-mock" />)}</div>;
    case "form":
      return <div className="flex h-full flex-col justify-center gap-1 p-1.5"><i className="h-2 rounded-sm border border-mock-2" /><i className="h-2 rounded-sm border border-mock-2" /><i className="h-2 w-10 rounded-sm bg-mock-2" /></div>;
    case "seo":
      return <div className="flex h-full items-center gap-1.5 p-1.5"><i className="size-2.5 rounded-full border-[1.5px] border-mock-2" /><i className={cn(dot, "h-1 flex-1")} /><i className="h-2 w-6 rounded-sm bg-mock-2" /></div>;
    case "footer":
      return <div className="flex h-full items-center justify-between gap-2 p-1.5"><i className={cn(dot, "h-1 w-1/4")} /><i className={cn(dot, "h-1 w-1/5")} /><i className={cn(dot, "h-1 w-1/6")} /></div>;
    case "chat":
      return <div className="flex h-full items-center justify-end gap-1.5 p-1.5"><i className={cn(dot, "h-1.5 w-1/3")} /><i className="size-3.5 rounded-full bg-mock-2" /></div>;
  }
}

function SolutionCard({ solution, index }: { solution: Solution; index: number }) {
  const { t, tl, lang } = useLanguage();
  const [hl, setHl] = useState<number | null>(null);
  const feats = tl(solution.features);
  const shapes = SHAPES[solution.id];
  const Icon = solution.icon;
  const MetaIcon = solution.metaIcon;

  return (
    <Reveal delay={index * 0.09} className="pc-wrap">
      <div className="pc-bg" aria-hidden />
      <article
        className={cn(
          "pc-card relative flex flex-col rounded-[22px] border bg-card p-6 sm:p-7",
          solution.highlight ? "border-ink" : "border-line-2",
        )}
        onMouseLeave={() => setHl(null)}
      >
        <span
          className={cn(
            "absolute -top-3 start-6 rounded-full px-3 py-1 text-xs font-semibold",
            solution.highlight ? "bg-ink text-on-ink" : "border border-line-2 bg-card text-ink",
          )}
        >
          {t(solution.tag)}
        </span>

        <div className="flex items-start gap-3.5">
          {solution.logo ? (
            <Image src={solution.logo} alt="" width={44} height={44} className="size-11 shrink-0 object-contain" unoptimized />
          ) : (
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-ink">
              <Icon className="size-[22px]" aria-hidden />
            </span>
          )}
          <div>
            <h3 className="m-0 text-[22px] font-medium leading-tight tracking-[-0.02em] text-ink">{t(solution.name)}</h3>
            <p className="mb-0 mt-1 text-sm text-muted-2">{t(solution.audience)}</p>
          </div>
        </div>

        {/* Wireframe schema, linked to the feature rows below */}
        <div className="mt-6 flex h-[176px] flex-col gap-1.5 rounded-2xl border border-line bg-surface p-2" aria-hidden>
          {shapes.slice(0, feats.length).map((s, i) => (
            <div
              key={i}
              className={cn("pc-feat-block min-h-0 overflow-hidden rounded-lg bg-card", hl === i && "is-hl")}
              style={{ flexGrow: GROW[s], flexBasis: 0 }}
            >
              <Wire shape={s} />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="m-0 flex items-baseline gap-1.5">
            {solution.pricePrefix ? <span className="text-base text-muted-2">{t(solution.pricePrefix)}</span> : null}
            <span dir="ltr" className="font-display text-[clamp(34px,3.4vw,46px)] font-extrabold leading-none tracking-[-0.04em] text-ink">{t(solution.price)}</span>
            {solution.priceSuffix ? <span className="text-base text-muted-2">{t(solution.priceSuffix)}</span> : null}
          </p>
          <p className="mb-0 mt-2 text-[13px] leading-snug text-muted-2">{t(solution.priceNote)}</p>
        </div>

        <p className="mb-0 mt-5 flex items-center gap-2 text-sm font-medium text-ink">
          <MetaIcon className="size-4 text-muted" aria-hidden />
          {t(solution.meta)}
        </p>

        <ul className="m-0 mt-4 flex list-none flex-col gap-0.5 p-0">
          {feats.map((f, i) => (
            <li
              key={f}
              onMouseEnter={() => setHl(i)}
              onFocus={() => setHl(i)}
              tabIndex={0}
              className={cn(
                "pc-feat-row flex cursor-default items-center gap-3 rounded-lg py-[7px] text-sm text-muted outline-none transition-colors",
                hl === i && "is-hl text-ink",
              )}
            >
              <span className="pc-num grid size-[22px] shrink-0 place-items-center rounded-full text-[11px] font-semibold tabular-nums">
                {formatNumber(i + 1, lang)}
              </span>
              <span className="pc-txt">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <LinkButton
            href={solution.href}
            arrow
            size="md"
            variant={solution.highlight ? "ink" : "outline"}
            className="w-full"
          >
            {t(solution.cta)}
          </LinkButton>
        </div>
      </article>
    </Reveal>
  );
}

export function Solutions() {
  const { t } = useLanguage();
  return (
    <section id="solutions" className="relative bg-bg py-[clamp(72px,10vw,130px)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead badge={SOLUTIONS_COPY.badge} title={SOLUTIONS_COPY.title} sub={SOLUTIONS_COPY.subtitle} />
        <div className="mx-auto mt-16 grid max-w-[900px] grid-cols-[minmax(0,1fr)] items-stretch gap-6 md:grid-cols-2">
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={s.id} solution={s} index={i} />
          ))}
        </div>
        <Reveal className="mx-auto mt-10 flex max-w-[620px] items-center justify-center gap-2.5 rounded-full border border-line-2 bg-surface px-5 py-3 text-center text-sm text-muted">
          <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden />
          {t(SOLUTIONS_COPY.note)}
        </Reveal>
      </div>
    </section>
  );
}
