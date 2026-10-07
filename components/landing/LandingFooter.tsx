import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BrandLogo } from '@/components/BrandLogo';

export async function LandingFooter() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand/20 bg-brand-dark text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-3 text-white">
            <BrandLogo
              size={40}
              withWordmark
              wordmarkClassName="font-semibold"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed">{t('footer.tagline')}</p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">{t('footer.product')}</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#how" className="hover:text-white">
                {t('nav.how')}
              </Link>
            </li>
            <li>
              <a href="/login" className="hover:text-white">
                {t('footer.login')}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">{t('footer.legal')}</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/impressum" className="hover:text-white">
                {t('footer.impressum')}
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-white">
                {t('footer.privacy')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs">
        {t('footer.copyright', { year })}
      </div>
    </footer>
  );
}
