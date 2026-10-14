"use client";

import Image from "next/image";
import { useLanguage } from "@/components/site/providers/language-provider";
import { cn } from "@/lib/cn";
import { BRAND, BRAND_LOGO } from "@/lib/content";

/** The easyWebBuilder speech-bubble mark. */
export function LogoMark({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={BRAND_LOGO}
      alt=""
      width={38}
      height={38}
      priority={priority}
      className={cn("size-7 shrink-0 object-contain min-[360px]:size-8 min-[400px]:size-[38px]", className)}
      unoptimized
    />
  );
}

export function Logo({ className }: { className?: string }) {
  const { homeHref } = useLanguage();
  return (
    <a
      href={homeHref("#top")}
      aria-label={`${BRAND.name} — home`}
      dir="ltr"
      className={cn("focus-ring flex items-center gap-2 text-inherit min-[400px]:gap-2.5 no-underline", className)}
    >
      <LogoMark priority />
      <span className="font-display text-[15px] font-bold min-[360px]:text-[16px] min-[400px]:text-[19px] tracking-[-0.02em]">{BRAND.name}</span>
    </a>
  );
}
