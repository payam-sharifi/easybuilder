import { getTranslations } from 'next-intl/server';
import { Globe } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export async function LandingHeader() {
  const t = await getTranslations();

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#f6f1e8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-stone-900">
          <Globe className="h-7 w-7 text-emerald-800" aria-hidden />
          <span className="text-lg font-semibold tracking-tight">easyWebBuilder</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
          <Link href="/#how" className="hover:text-stone-900">
            {t('nav.how')}
          </Link>
          <Link href="/#audience" className="hover:text-stone-900">
            {t('nav.audience')}
          </Link>
          <a href="/login" className="hover:text-stone-900">
            {t('nav.login')}
          </a>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
