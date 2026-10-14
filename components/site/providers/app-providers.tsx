"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { CookieConsent } from "@/components/site/sections/cookie-consent";
import type { Lang } from "@/lib/i18n";
import { LanguageProvider } from "./language-provider";
import { ThemeProvider } from "./theme-provider";

export function AppProviders({ locale, children }: { locale: Lang; children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider locale={locale}>
        {/* Respect the visitor's reduced-motion preference everywhere. */}
        <MotionConfig reducedMotion="user">
          {children}
          <CookieConsent />
        </MotionConfig>
      </LanguageProvider>
    </ThemeProvider>
  );
}
