import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BrandLogo } from '@/components/BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';

export async function LandingHeader() {
  const t = await getTranslations();

  return (
    <header className="sticky top-0 z-40 border-b border-brand/10 bg-white/55 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-ink">
          <BrandLogo size={40} withWordmark priority />
          <span className="hidden border-s border-brand/20 ps-3 text-xs leading-tight text-muted lg:block">
            {t('hero.badge')}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          <Link href="/#how" className="hover:text-ink">
            {t('nav.how')}
          </Link>
          <Link href="/#pricing" className="hover:text-ink">
            {t('nav.pricing')}
          </Link>
          <Link href="/#audience" className="hover:text-ink">
            {t('nav.audience')}
          </Link>
          <a href="/login" className="hover:text-ink">
            {t('nav.login')}
          </a>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
