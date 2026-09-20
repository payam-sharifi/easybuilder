import { getTranslations } from 'next-intl/server';
import { Globe } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export async function LandingFooter() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-stone-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center gap-2 text-white">
            <Globe className="h-5 w-5 text-emerald-400" aria-hidden />
            <span className="font-semibold">easyWebBuilder</span>
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
      <div className="border-t border-stone-800 py-6 text-center text-xs">
        {t('footer.copyright', { year })}
      </div>
    </footer>
  );
}
