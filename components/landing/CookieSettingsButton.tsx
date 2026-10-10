'use client';

import { openCookieSettings } from '@/lib/consent';

export function CookieSettingsButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="cursor-pointer text-left hover:text-white"
    >
      {children}
    </button>
  );
}
