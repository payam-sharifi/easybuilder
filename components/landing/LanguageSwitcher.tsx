'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className="inline-flex items-center rounded-full border border-brand/15 bg-white/80 p-0.5 text-sm font-medium"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((code) => {
        const active = locale === code;
        return (
          <Link
            key={code}
            href={pathname}
            locale={code}
            className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition ${
              active
                ? 'bg-brand-dark text-white'
                : 'text-muted hover:text-ink'
            }`}
            aria-current={active ? 'true' : undefined}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
