"use client";

import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/site/providers/language-provider";
import { SectionBadge } from "@/components/site/ui/section-badge";
import { PAGE_CHROME } from "@/lib/home-content";
import type { L } from "@/lib/i18n";

export function PageHero({
  badge,
  title,
  subtitle,
}: {
  badge: L;
  title: L;
  subtitle: L;
}) {
  const { t } = useLanguage();

  return (
    <header className="relative overflow-x-clip pb-6 pt-10 sm:pt-14">
      <div className="mx-auto max-w-[860px] px-5 sm:px-8">
        <Link
          href="/"
          className="focus-ring mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted no-underline transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-4 rtl:-scale-x-100" aria-hidden />
          {t(PAGE_CHROME.back)}
        </Link>
        <SectionBadge className="mb-[22px]">{t(badge)}</SectionBadge>
        <h1 className="m-0 text-balance text-[clamp(32px,4.6vw,58px)] font-medium leading-[1.08] tracking-[-0.03em] text-ink rtl:leading-[1.3]">
          {t(title)}
        </h1>
        <p className="mb-0 mt-5 max-w-[640px] text-[17px] leading-[1.65] text-muted-2">{t(subtitle)}</p>
      </div>
    </header>
  );
}
