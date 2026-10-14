"use client";

import { useLanguage } from "@/components/site/providers/language-provider";
import type { L } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";
import { SectionBadge } from "./section-badge";

/** Centered badge + medium-weight title + muted sub, as used by every section. */
export function SectionHead({
  badge,
  title,
  sub,
  className,
  subClassName,
}: {
  badge: L;
  title: L;
  sub?: L;
  className?: string;
  subClassName?: string;
}) {
  const { t } = useLanguage();
  return (
    <Reveal className={cn("mx-auto flex max-w-[720px] flex-col items-center text-center", className)}>
      <SectionBadge className="mb-[22px]">{t(badge)}</SectionBadge>
      <h2 className="m-0 text-balance text-[clamp(30px,3.8vw,50px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
        {t(title)}
      </h2>
      {sub ? (
        <p
          className={cn(
            "mt-[18px] max-w-[480px] text-base leading-[1.55] text-muted-2",
            subClassName,
          )}
        >
          {t(sub)}
        </p>
      ) : null}
    </Reveal>
  );
}
