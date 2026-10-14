import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

type LegalPageLayoutProps = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, intro, children }: LegalPageLayoutProps) {
  const t = useTranslations('legal');

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-[clamp(48px,8vw,96px)] sm:px-8">
      <Link
        href="/"
        className="focus-ring mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted no-underline transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-4 rtl:-scale-x-100" aria-hidden />
        {t('back')}
      </Link>
      <h1 className="m-0 text-[clamp(32px,4.4vw,52px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink rtl:leading-[1.3]">
        {title}
      </h1>
      <p className="mb-0 mt-5 text-[17px] leading-[1.6] text-muted-2">{intro}</p>
      <div className="mt-12 space-y-9">{children}</div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line pt-6">
      <h2 className="m-0 text-xl font-medium tracking-[-0.01em] text-ink">{title}</h2>
      <div className="mt-3 whitespace-pre-line text-[16px] leading-[1.7] text-muted">
        {children}
      </div>
    </section>
  );
}
