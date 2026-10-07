import { Link } from '@/i18n/navigation';
import { ArrowLeft } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';

type LegalPageLayoutProps = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, intro, children }: LegalPageLayoutProps) {
  return (
    <div className="text-ink">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          <BrandLogo size={28} withWordmark wordmarkClassName="text-sm font-medium" />
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 text-muted">{intro}</p>
        <div className="mt-10 space-y-8">{children}</div>
      </div>
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
    <section>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 whitespace-pre-line text-ink/80 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
