import type { Metadata, Viewport } from 'next';
import { Cairo, Geist_Mono, Inter, Montserrat, Vazirmatn } from 'next/font/google';
import { DEFAULT_THEME, THEME_STORAGE_KEY } from '@/lib/theme';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const vazir = Vazirmatn({
  variable: '--font-vazir',
  subsets: ['arabic', 'latin'],
  display: 'swap',
});

/** Display face for headlines (German / English). */
const display = Montserrat({
  variable: '--font-display',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

/** Display face for headlines (Persian / Arabic). */
const displayAr = Cairo({
  variable: '--font-display-ar',
  subsets: ['arabic', 'latin'],
  display: 'swap',
});

const mono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'easyWebBuilder',
  description:
    'Professional websites for every business — built by our team in a few days and updated by chat via WhatsApp and Telegram.',
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png' }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#06130f' },
  ],
};

/**
 * Runs synchronously before first paint so the saved theme and the page language / direction
 * are applied without a flash. Only the marketing site (`/de`, `/en`, `/fa`, `/ar`) is themed;
 * login and dashboard always stay light.
 */
const bootScript = `(function(){try{var d=document.documentElement;var l=location.pathname.split('/')[1];var rtl={de:0,en:0,fa:1,ar:1};if(!Object.prototype.hasOwnProperty.call(rtl,l))return;var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)})||${JSON.stringify(DEFAULT_THEME)};d.setAttribute('data-theme',t==='dark'?'dark':'light');d.lang=l;d.dir=rtl[l]?'rtl':'ltr'}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      dir="ltr"
      suppressHydrationWarning
      className={`${inter.variable} ${vazir.variable} ${display.variable} ${displayAr.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
