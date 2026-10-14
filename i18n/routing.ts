import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en', 'fa', 'ar'],
  defaultLocale: 'de',
  localePrefix: 'always',
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];
