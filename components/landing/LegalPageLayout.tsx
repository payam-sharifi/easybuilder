import { Link } from '@/i18n/navigation';
import { ArrowLeft } from 'lucide-react';

type LegalPageLayoutProps = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, intro, children }: LegalPageLayoutProps) {
  return (
    <div className="bg-[#f6f1e8] text-stone-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          easyWebBuilder
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 text-stone-600">{intro}</p>
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
      <div className="mt-2 whitespace-pre-line text-stone-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
