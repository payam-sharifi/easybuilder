import {
  Bot,
  Building2,
  CalendarCheck,
  Camera,
  Clock,
  Gauge,
  Globe,
  Languages,
  Link2,
  MessageCircle,
  Palette,
  PhoneCall,
  Rocket,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Tag,
  UserPlus,
  Wand2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { getSignupUrl } from "./chat-links";
import type { L, LList } from "./i18n";

/* ------------------------------------------------------------------ */
/*  Brand                                                              */
/* ------------------------------------------------------------------ */
export const BRAND = {
  name: "easyWebBuilder",
  email: "hallo@easyweb.builder",
};

/** Brand logo (speech bubble) used in the header, footer, preloader and chat demo. */
export const BRAND_LOGO = "/logo.png";

/** Where "Sign up" buttons lead (falls back to the account / login page). */
export const SIGNUP_URL = getSignupUrl();

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */
export const NAV_LINKS: { id: string; href: string; label: L }[] = [
  { id: "showcase", href: "#showcase", label: { de: "Referenzen", en: "Showcases", fa: "نمونه‌کارها", ar: "نماذج الأعمال" } },
  { id: "templates", href: "#templates", label: { de: "Branchen", en: "Industries", fa: "صنعت‌ها", ar: "القطاعات" } },
  { id: "solutions", href: "#solutions", label: { de: "Lösungen", en: "Solutions", fa: "راهکارها", ar: "الحلول" } },
  { id: "how", href: "#how", label: { de: "So funktioniert’s", en: "How It Works", fa: "روند کار", ar: "كيف يعمل" } },
  { id: "faq", href: "#faq", label: { de: "FAQ", en: "FAQ", fa: "سوالات متداول", ar: "الأسئلة الشائعة" } },
];

export const NAV_CTA: L = {
  de: "Kostenlose Beratung",
  en: "Free Consultation",
  fa: "مشاوره رایگان",
  ar: "استشارة مجانية",
};

/* ------------------------------------------------------------------ */
/*  Chrome (theme / language / preloader labels)                       */
/* ------------------------------------------------------------------ */
export const UI = {
  login: { de: "Login", en: "Log in", fa: "ورود", ar: "تسجيل الدخول" } satisfies L,
  menu: { de: "Menü", en: "Menu", fa: "منو", ar: "القائمة" } satisfies L,
  close: { de: "Schließen", en: "Close", fa: "بستن", ar: "إغلاق" } satisfies L,
  light: { de: "Hell", en: "Light", fa: "روشن", ar: "فاتح" } satisfies L,
  dark: { de: "Dunkel", en: "Dark", fa: "تیره", ar: "داكن" } satisfies L,
  theme: { de: "Design", en: "Theme", fa: "پوسته", ar: "المظهر" } satisfies L,
  language: { de: "Sprache", en: "Language", fa: "زبان", ar: "اللغة" } satisfies L,
  backToTop: { de: "Nach oben", en: "Back to top", fa: "بازگشت به بالا", ar: "العودة للأعلى" } satisfies L,
  loading: { de: "Lädt", en: "Loading", fa: "در حال بارگذاری", ar: "جارٍ التحميل" } satisfies L,
  skip: { de: "Zum Inhalt springen", en: "Skip to content", fa: "پرش به محتوا", ar: "انتقل إلى المحتوى" } satisfies L,
  prev: { de: "Zurück", en: "Previous", fa: "قبلی", ar: "السابق" } satisfies L,
  play: { de: "Video abspielen", en: "Play video", fa: "پخش ویدیو", ar: "تشغيل الفيديو" } satisfies L,
  pause: { de: "Video pausieren", en: "Pause video", fa: "توقف ویدیو", ar: "إيقاف الفيديو مؤقتًا" } satisfies L,
  next: { de: "Weiter", en: "Next", fa: "بعدی", ar: "التالي" } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
export const HERO = {
  title: [
    {
      de: "Websites für jedes Business",
      en: "Websites for every business",
      fa: "وب‌سایت حرفه‌ای برای هر کسب‌وکار",
      ar: "مواقع احترافية لكل نشاط تجاري",
    },
    {
      de: "vom Einzelbetrieb bis zum Konzern",
      en: "from small to enterprises",
      fa: "از کسب‌وکار کوچک تا شرکت بزرگ",
      ar: "من الأنشطة الصغيرة إلى الشركات الكبرى",
    },
  ] satisfies L[],
  subtitle: {
    de: "easyWebBuilder baut Websites für Unternehmen jeder Größe. Kleine Betriebe starten mit unserem Chat-Paket und ändern Preise, Leistungen und Texte per WhatsApp oder Telegram – größere Projekte setzt unser Team individuell um.",
    en: "easyWebBuilder builds websites for businesses of every size. Small businesses start with our chat package and change prices, services and copy via WhatsApp or Telegram — larger projects are built individually by our team.",
    fa: "easyWebBuilder برای کسب‌وکارها در هر اندازه وب‌سایت می‌سازد. کسب‌وکارهای کوچک با بسته‌ی چت شروع می‌کنند و قیمت، خدمات و متن‌ها را با واتس‌اپ یا تلگرام تغییر می‌دهند؛ پروژه‌های بزرگ‌تر را تیم ما به‌صورت اختصاصی اجرا می‌کند.",
    ar: "تبني easyWebBuilder مواقع للأعمال بمختلف أحجامها. تبدأ الأنشطة الصغيرة مع باقة الدردشة وتغيّر الأسعار والخدمات والنصوص عبر واتساب أو تيليجرام — أما المشاريع الأكبر فينفّذها فريقنا بشكل مخصّص.",
  } satisfies L,
  primaryCta: {
    de: "Kostenlose Beratung anfragen",
    en: "Request a free consultation",
    fa: "درخواست مشاوره رایگان",
    ar: "اطلب استشارة مجانية",
  } satisfies L,
  secondaryCta: {
    de: "Jetzt registrieren",
    en: "Sign up now",
    fa: "همین حالا ثبت‌نام کنید",
    ar: "سجّل الآن",
  } satisfies L,
};

export const TRUST_ITEMS: {
  value?: number;
  suffix?: string;
  text?: L;
  title: L;
}[] = [
  { value: 100, suffix: "%", title: { de: "Responsive", en: "Responsive", fa: "کاملاً ریسپانسیو", ar: "متجاوب بالكامل" } },
  {
    text: { de: "SEO + KI", en: "SEO + AI", fa: "سئو + AI", ar: "SEO + AI" },
    title: { de: "Integrierte SEO & KI-Texte", en: "Built-in SEO & AI content", fa: "سئو و محتوای هوشمند داخلی", ar: "SEO ومحتوى ذكي مدمج" },
  },
  {
    text: { de: "0", en: "0", fa: "۰", ar: "0" },
    title: { de: "Zeilen Code nötig", en: "Lines of code needed", fa: "خط کد؛ بدون نیاز به کدنویسی", ar: "سطر برمجي مطلوب" },
  },
  {
    value: 99,
    suffix: "+",
    title: { de: "Google-PageSpeed-Score", en: "Google PageSpeed score", fa: "امتیاز PageSpeed گوگل", ar: "درجة Google PageSpeed" },
  },
];

/* ------------------------------------------------------------------ */
/*  Manifesto (sticky word-by-word reveal)                             */
/* ------------------------------------------------------------------ */
export const MANIFESTO = {
  badge: { de: "Warum easyWebBuilder", en: "Why easyWebBuilder", fa: "چرا easyWebBuilder", ar: "لماذا easyWebBuilder" } satisfies L,
  text: {
    de: "Eine Website ist nie fertig: Preise ändern sich, Leistungen kommen dazu. Bei den meisten Anbietern bedeutet jede Kleinigkeit Agentur, Wartezeit und Rechnung. Wir bauen Websites für jedes Business – und für kleine Änderungen genügt bei uns sogar eine Nachricht.",
    en: "A website is never truly “finished”; prices change, and new services are added. With most service providers, even minor changes require contacting the agency, waiting, and dealing with invoices. We build websites for all types of businesses, and with us, making small updates is as simple as sending a message.",
    fa: "وب‌سایت هیچ‌وقت تمام نمی‌شود: قیمت‌ها عوض می‌شوند و خدمات تازه اضافه می‌شود. در بیشتر جاها هر تغییر کوچک یعنی آژانس، انتظار و صورتحساب. ما برای هر نوع کسب‌وکاری وب‌سایت می‌سازیم؛ و برای تغییرهای کوچک پیش ما حتی یک پیام کافی است.",
    ar: "الموقع لا يكتمل أبدًا: الأسعار تتغير وتُضاف خدمات جديدة. وعند معظم المزوّدين يعني كل تعديل بسيط وكالة وانتظارًا وفاتورة. نبني مواقع لكل أنواع الأعمال — وللتعديلات الصغيرة تكفي عندنا رسالة واحدة.",
  } satisfies L,
  /** Number of trailing words highlighted with the ink "plate". */
  plateWords: { de: 2, en: 3, fa: 3, ar: 3 },
};

/* ------------------------------------------------------------------ */
/*  Showcase                                                           */
/* ------------------------------------------------------------------ */
export type ShowcaseCategory = "all" | "store" | "corporate" | "booking" | "portfolio";
export type SiteKey = "hengameh" | "nilou" | "arman" | "zist" | "raha";
export type ShowcaseId = SiteKey | "termin";

export const SHOWCASE_TABS: { id: ShowcaseCategory; label: L }[] = [
  { id: "all", label: { de: "Alle", en: "All", fa: "همه", ar: "الكل" } },
  { id: "store", label: { de: "Online-Shop", en: "Online Store", fa: "فروشگاه", ar: "متجر إلكتروني" } },
  { id: "corporate", label: { de: "Unternehmen", en: "Corporate", fa: "شرکتی", ar: "شركات" } },
  { id: "booking", label: { de: "Buchung", en: "Booking", fa: "رزرو آنلاین", ar: "حجوزات" } },
  { id: "portfolio", label: { de: "Portfolio", en: "Portfolio", fa: "نمونه‌کار", ar: "معرض أعمال" } },
];

export type ShowcaseItem = {
  id: ShowcaseId;
  category: Exclude<ShowcaseCategory, "all">;
  /** Coloured drop-shadow behind the browser window. */
  glow: string;
  name: L;
  kind: L;
  url: string;
  /** Link for the CTA; defaults to the contact form. */
  href?: string;
  /** Real client project (shown as a live screenshot). */
  live?: boolean;
  /** Screen recording shown instead of a scrolling site. */
  video?: { src: string; poster: string; label: string };
  tags: string[];
  why: L;
  cta: L;
};

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "hengameh",
    category: "booking",
    glow: "rgb(160 110 90 / 0.3)",
    live: true,
    href: "https://hengameh-luxe-beauty.de/",
    name: { de: "Hengameh Luxe Beauty", en: "Hengameh Luxe Beauty", fa: "هنگامه لوکس بیوتی", ar: "هنغامه لوكس بيوتي" },
    kind: {
      de: "Beautysalon in Köln – Live-Projekt",
      en: "Beauty salon in Cologne — live project",
      fa: "سالن زیبایی در کلن — پروژه‌ی واقعی",
      ar: "صالون تجميل في كولن — مشروع حقيقي",
    },
    url: "hengameh-luxe-beauty.de",
    tags: ["#Live_Project", "#Booking", "#Fast_Load"],
    why: {
      de: "Öffnungszeiten, Adresse und Telefonnummer stehen direkt im Hero, die Behandlungen sind nach Kategorien mit Dauer und Preis gegliedert – Besucher finden alles ohne Suchen und reservieren sofort.",
      en: "Opening hours, address and phone sit right in the hero, and treatments are grouped by category with duration and price — visitors find everything at a glance and book straight away.",
      fa: "ساعت کاری، آدرس و شماره تماس همان بالای صفحه است و خدمات بر اساس دسته، با مدت و قیمت مرتب شده‌اند؛ بازدیدکننده همه‌چیز را یک‌جا می‌بیند و فوراً رزرو می‌کند.",
      ar: "تظهر ساعات العمل والعنوان ورقم الهاتف مباشرة في الواجهة الرئيسية، وتُصنَّف الخدمات حسب الفئة مع المدة والسعر — فيجد الزائر كل شيء بنظرة واحدة ويحجز فورًا.",
    },
    cta: { de: "Website live ansehen", en: "Visit live website", fa: "مشاهده سایت زنده", ar: "زيارة الموقع المباشر" },
  },
  {
    id: "termin",
    category: "booking",
    glow: "rgb(201 160 90 / 0.3)",
    video: {
      src: "/showcase/termin-panel.mp4",
      poster: "/showcase/termin-panel-poster.jpg",
      label: "Terminpanel · Hengameh",
    },
    name: { de: " Terminpanel", en: " Booking Panel", fa: "پنل نوبت‌دهی ", ar: "لوحة حجز المواعيد" },
    kind: {
      de: "Terminverwaltung mit KI-Chat-Assistent",
      en: "Appointment management with an AI chat assistant",
      fa: "مدیریت نوبت با دستیار چت هوشمند",
      ar: "إدارة المواعيد مع مساعد دردشة ذكي",
    },
    url: "",
    tags: ["#Admin_Panel", "#AI_Assistant", "#Booking"],
    why: {
      de: "Termine entstehen auf zwei Wegen: per Kalender-Formular mit Kundensuche und Leistungsauswahl – oder im Chat. Der Assistent fragt Kunde, Leistung und Zeit ab und bucht nach Ihrer Bestätigung direkt in den Kalender. Termine lassen sich per Drag & Drop verschieben, Kunden erhalten automatisch eine SMS-Erinnerung, und das Panel gibt es auch als mobile App.",
      en: "Appointments are created two ways: via the calendar form with customer search and service picker — or in chat. The assistant asks for customer, service and time, then books straight into the calendar once you confirm. Appointments can be rescheduled with drag & drop, customers get an automatic SMS reminder, and the panel is also available as a mobile app.",
      fa: "نوبت به دو روش ثبت می‌شود: با فرم تقویم (جستجوی مشتری و انتخاب خدمت) یا در چت. دستیار مشتری، خدمت و زمان را می‌پرسد و بعد از تأیید شما مستقیم در تقویم ثبت می‌کند. نوبت‌ها با درگ اند دراپ جابه‌جا می‌شوند، یادآوری با پیامک (SMS) برای مشتری ارسال می‌شود و پنل اپلیکیشن موبایل هم دارد.",
      ar: "تُنشأ المواعيد بطريقتين: عبر نموذج التقويم مع البحث عن العميل واختيار الخدمة — أو عبر الدردشة. يسأل المساعد عن العميل والخدمة والوقت، ثم يحجز مباشرة في التقويم بعد تأكيدك. ويمكن نقل المواعيد بالسحب والإفلات، ويتلقى العملاء تذكيرًا تلقائيًا عبر الرسائل القصيرة (SMS)، كما تتوفر اللوحة أيضًا كتطبيق للجوال.",
    },
    cta: { de: "Ähnliches Panel anfragen", en: "Request a similar panel", fa: "درخواست پنل مشابه", ar: "اطلب لوحة مماثلة" },
  },
  {
    id: "nilou",
    category: "store",
    glow: "rgb(224 140 70 / 0.28)",
    name: { de: "Nilou Boutique", en: "Nilou Boutique", fa: "بوتیک نیلو", ar: "بوتيك نيلو" },
    kind: {
      de: "Online-Shop für Handwerkskeramik",
      en: "Handmade ceramics store",
      fa: "فروشگاه اینترنتی سفال دست‌ساز",
      ar: "متجر إلكتروني للخزف المصنوع يدويًا",
    },
    url: "nilou.easywebbuilder.de",
    tags: ["#E_Commerce", "#AI_Powered", "#Fast_Load"],
    why: {
      de: "Ein mitlaufender Mini-Warenkorb und ein Ein-Seiten-Checkout halten Käufer in Bewegung – weniger Klicks zwischen „In den Warenkorb“ und „Bezahlt“.",
      en: "A sticky mini-cart and one-page checkout keep buyers moving — fewer clicks between “Add to cart” and “Paid”.",
      fa: "سبد خرید شناور و تسویه‌حساب تک‌صفحه‌ای، فاصله‌ی «افزودن به سبد» تا «پرداخت» را کوتاه می‌کند.",
      ar: "سلة مصغّرة ثابتة وصفحة دفع واحدة تُبقيان المشتري في حركة — نقرات أقل بين «أضف إلى السلة» و«تم الدفع».",
    },
    cta: { de: "Live-Demo ansehen", en: "View live demo", fa: "مشاهده دموی زنده", ar: "شاهد العرض المباشر" },
  },
  {
    id: "arman",
    category: "corporate",
    glow: "rgb(27 77 255 / 0.28)",
    name: { de: "Arman Group", en: "Arman Group", fa: "گروه آرمان", ar: "مجموعة أرمان" },
    kind: { de: "Unternehmenswebsite", en: "Corporate website", fa: "وب‌سایت شرکتی", ar: "موقع شركة" },
    url: "arman-group.easywebbuilder.de",
    tags: ["#AI_Powered", "#Multilingual", "#Fast_Load"],
    why: {
      de: "Vertrauenssignale direkt im ersten Blick – Kundenlogos, Kennzahlen und eine klare Aktion: „Angebot anfragen“.",
      en: "Trust signals above the fold — client logos, numbers and one clear “Request a quote” action.",
      fa: "نشانه‌های اعتماد در همان نگاه اول: لوگوی مشتریان، آمار و یک دکمه‌ی روشن «درخواست قیمت».",
      ar: "إشارات الثقة من النظرة الأولى — شعارات العملاء والأرقام وإجراء واحد واضح: «اطلب عرض سعر».",
    },
    cta: { de: "Vorlage verwenden", en: "Use this template", fa: "استفاده از قالب", ar: "استخدم هذا القالب" },
  },
  {
    id: "zist",
    category: "booking",
    glow: "rgb(31 107 82 / 0.28)",
    name: { de: "Zist Klinik", en: "Zist Clinic", fa: "کلینیک زیست", ar: "عيادة زيست" },
    kind: { de: "Landingpage mit Terminbuchung", en: "Booking landing page", fa: "لندینگ رزرو نوبت", ar: "صفحة هبوط لحجز المواعيد" },
    url: "zist-clinic.easywebbuilder.de",
    tags: ["#Booking", "#AI_Powered", "#Fast_Load"],
    why: {
      de: "Das Buchungs-Widget sitzt im Hero – Besucher wählen einen Termin ohne Scrollen und ohne Registrierung.",
      en: "The booking widget lives in the hero, so visitors can pick a slot without scrolling or signing up.",
      fa: "ویجت رزرو در همان بالای صفحه است؛ بازدیدکننده بدون اسکرول و ثبت‌نام زمان خود را انتخاب می‌کند.",
      ar: "أداة الحجز في الواجهة الرئيسية، فيختار الزائر موعدًا دون تمرير أو تسجيل.",
    },
    cta: { de: "Live-Demo ansehen", en: "View live demo", fa: "مشاهده دموی زنده", ar: "شاهد العرض المباشر" },
  },
  {
    id: "raha",
    category: "portfolio",
    glow: "rgb(255 61 119 / 0.28)",
    name: { de: "Studio Raha", en: "Studio Raha", fa: "استودیو رها", ar: "استوديو رها" },
    kind: { de: "Kreatives Portfolio", en: "Creative portfolio", fa: "پورتفولیو خلاقانه", ar: "معرض أعمال إبداعي" },
    url: "studio-raha.easywebbuilder.de",
    tags: ["#Portfolio", "#SEO_Ready", "#Fast_Load"],
    why: {
      de: "Ein Masonry-Raster mit Lazy-Loading zeigt Ihre besten Arbeiten zuerst und erreicht trotzdem 95+ bei der Geschwindigkeit.",
      en: "A masonry grid with lazy-loaded media shows your best work first and still scores 95+ on speed.",
      fa: "گرید آجری با بارگذاری تنبل، بهترین کارها را اول نشان می‌دهد و همچنان امتیاز سرعت بالای ۹۵ دارد.",
      ar: "شبكة متدرّجة (Masonry) مع تحميل كسول للوسائط تعرض أفضل أعمالك أولًا وتحقق مع ذلك 95+ في السرعة.",
    },
    cta: { de: "Vorlage verwenden", en: "Use this template", fa: "استفاده از قالب", ar: "استخدم هذا القالب" },
  },
];

export type SiteItem = ShowcaseItem & { id: SiteKey };
/** Items that are rendered as scrolling site previews (hero carousel). */
export const SITE_ITEMS = SHOWCASE_ITEMS.filter((s): s is SiteItem => !s.video);

export const SHOWCASE_COPY = {
  badge: { de: "Referenzen", en: "Showcases", fa: "نمونه‌کارها", ar: "نماذج الأعمال" } satisfies L,
  title: {
    de: "Echte Websites. In Tagen gebaut.",
    en: "Real websites. Built in days.",
    fa: "وب‌سایت‌های واقعی؛ ساخته‌شده در چند روز",
    ar: "مواقع حقيقية. بُنيت في أيام.",
  } satisfies L,
  subtitle: {
    de: "Beispielseiten, die mit easyWebBuilder entstanden sind – und warum jedes Layout Besucher zu Kunden macht.",
    en: "Sample sites made with easyWebBuilder — and why each layout turns visitors into customers.",
    fa: "نمونه‌سایت‌های ساخته‌شده با easyWebBuilder و دلیل اینکه هر چیدمان بازدیدکننده را به مشتری تبدیل می‌کند.",
    ar: "مواقع نموذجية أُنشئت بواسطة easyWebBuilder — وسبب تحويل كل تصميم للزوّار إلى عملاء.",
  } satisfies L,
  why: {
    de: "Warum dieses Layout konvertiert",
    en: "Why this layout converts",
    fa: "چرا این چیدمان فروش می‌آورد",
    ar: "لماذا يحقق هذا التصميم التحويلات",
  } satisfies L,
  templatesBadge: { de: "Branchen", en: "Industries", fa: "صنعت‌ها", ar: "القطاعات" } satisfies L,
  templatesTitle: {
    de: "Für diese Branchen bauen wir Websites",
    en: "We build websites for these businesses",
    fa: "برای این کسب‌وکارها وب‌سایت می‌سازیم",
    ar: "نبني مواقع لهذه الأنشطة",
  } satisfies L,
  empty: {
    de: "In dieser Kategorie gibt es noch keine Beispiele.",
    en: "No sites in this category yet.",
    fa: "هنوز نمونه‌ای در این دسته نیست.",
    ar: "لا توجد مواقع في هذه الفئة بعد.",
  } satisfies L,
};

export const TEMPLATE_CHIPS: { icon: LucideIcon; label: L }[] = [
  { icon: Store, label: { de: "Modeshop", en: "Fashion Store", fa: "فروشگاه مد", ar: "متجر أزياء" } },
  { icon: Building2, label: { de: "Anwaltskanzlei", en: "Law Firm", fa: "دفتر حقوقی", ar: "مكتب محاماة" } },
  { icon: CalendarCheck, label: { de: "Zahnarztpraxis", en: "Dental Clinic", fa: "کلینیک دندان‌پزشکی", ar: "عيادة أسنان" } },
  { icon: Camera, label: { de: "Fotograf:in", en: "Photographer", fa: "عکاس", ar: "مصوّر" } },
  { icon: ShoppingBag, label: { de: "Handwerks-Shop", en: "Handmade Shop", fa: "فروشگاه صنایع‌دستی", ar: "متجر حرف يدوية" } },
  { icon: Palette, label: { de: "Designagentur", en: "Design Agency", fa: "آژانس طراحی", ar: "وكالة تصميم" } },
  { icon: Rocket, label: { de: "SaaS-Landingpage", en: "SaaS Landing", fa: "لندینگ ساس", ar: "صفحة هبوط SaaS" } },
  { icon: Globe, label: { de: "Reisebüro", en: "Travel Agency", fa: "آژانس مسافرتی", ar: "وكالة سفر" } },
  { icon: Bot, label: { de: "KI-Startup", en: "AI Startup", fa: "استارتاپ هوش مصنوعی", ar: "شركة ناشئة في الذكاء الاصطناعي" } },
  { icon: Wand2, label: { de: "Beautysalon", en: "Beauty Salon", fa: "سالن زیبایی", ar: "صالون تجميل" } },
];

/* ------------------------------------------------------------------ */
/*  Chat editing (the competitive edge)                                */
/* ------------------------------------------------------------------ */
export const CHAT_EDIT = {
  badge: {
    de: "Änderungen per Chat",
    en: "Edit by chat",
    fa: "ویرایش با چت",
    ar: "التعديل بالدردشة",
  } satisfies L,
  title: {
    de: "Neuer Preis? Neuer Titel? Eine Nachricht genügt.",
    en: "New price? New headline? One message is all it takes.",
    fa: "قیمت جدید؟ تیتر جدید؟ یک پیام کافی است.",
    ar: "سعر جديد؟ عنوان جديد؟ رسالة واحدة تكفي.",
  } satisfies L,
  subtitle: {
    de: "Vergessen Sie komplizierte Dashboards und Agentur-Tickets. Schreiben Sie Ihrer Website auf WhatsApp oder Telegram – wie einem Mitarbeiter. Der Agent setzt es um.",
    en: "Forget complicated dashboards and agency tickets. Message your website on WhatsApp or Telegram — like you would a team member. The agent makes it happen.",
    fa: "فراموش کنید داشبوردهای پیچیده و تیکت آژانس. در واتس‌اپ یا تلگرام به وب‌سایتتان پیام بدهید، مثل یک همکار. بقیه‌اش با دستیار هوشمند.",
    ar: "انسَ لوحات التحكم المعقدة وتذاكر الوكالات. راسل موقعك على واتساب أو تيليجرام كما تراسل أحد موظفيك. والمساعد الذكي ينفّذ.",
  } satisfies L,
  benefits: [
    { icon: MessageCircle, title: { de: "Einfach wie Chatten", en: "As easy as chatting", fa: "به سادگی چت کردن", ar: "بسيط كالدردشة" } satisfies L, text: { de: "Nach der kurzen Registrierung ändern Sie alles per Nachricht – ohne Dashboard, ohne Einarbeitung.", en: "After a quick sign-up you change everything by message — no dashboard, no learning curve.", fa: "بعد از یک ثبت‌نام کوتاه، همه‌چیز را با پیام تغییر می‌دهید؛ بدون داشبورد و بدون یادگیری.", ar: "بعد تسجيل سريع تغيّر كل شيء برسالة — بلا لوحة تحكم وبلا منحنى تعلّم." } satisfies L },
    { icon: Tag, title: { de: "Preise & Leistungen, wann Sie wollen", en: "Prices & services, whenever you want", fa: "قیمت و خدمات، هر وقت خواستید", ar: "الأسعار والخدمات متى شئت" } satisfies L, text: { de: "Neuer Preis, neue Leistung, geänderte Öffnungszeiten oder ein frischer Titel – abschicken, fertig.", en: "A new price, a new service, different opening hours or a fresh headline — send it and you’re done.", fa: "قیمت جدید، خدمت تازه، ساعت کاری متفاوت یا یک تیتر نو؛ بفرستید و تمام.", ar: "سعر جديد أو خدمة جديدة أو ساعات عمل مختلفة أو عنوان جديد — أرسل الرسالة وانتهى الأمر." } satisfies L },
    { icon: Smartphone, title: { de: "Direkt vom Handy", en: "Straight from your phone", fa: "مستقیم از موبایل", ar: "مباشرة من هاتفك" } satisfies L, text: { de: "Aus der Werkstatt, aus der Küche, vom Sofa – dort, wo Sie ohnehin täglich chatten.", en: "From the workshop, the kitchen or the sofa — right where you already chat every day.", fa: "از کارگاه، آشپزخانه یا روی مبل؛ همان‌جایی که هر روز چت می‌کنید.", ar: "من الورشة أو المطبخ أو الأريكة — في المكان الذي تدردش فيه كل يوم أصلًا." } satisfies L },
    { icon: Clock, title: { de: "Ohne Wartezeit auf die Agentur", en: "No waiting on an agency", fa: "بدون انتظار برای آژانس", ar: "دون انتظار الوكالة" } satisfies L, text: { de: "Keine Tickets, keine Rückfragen-Schleifen, kein Warten auf den nächsten Termin.", en: "No tickets, no back-and-forth, no waiting for the next available slot.", fa: "بدون تیکت، بدون رفت‌وبرگشت‌های بی‌پایان، بدون انتظار برای نوبت بعدی.", ar: "لا تذاكر ولا مراسلات متكررة ولا انتظار للموعد التالي." } satisfies L },
  ] as { icon: LucideIcon; title: L; text: L }[],
  note: {
    de: "Ideal für Präsentationsseiten kleiner Unternehmen – Beauty- und Laserstudios, Restaurants, Dienstleister, Baufirmen und alle, die eine überzeugende Visitenkarte im Netz brauchen.",
    en: "Ideal for small-business presentation sites — beauty and laser salons, restaurants, service companies, construction firms, and anyone who needs a professional online presence.",
    fa: "مناسب سایت‌های معرفی کسب‌وکارهای کوچک — سالن‌های زیبایی و لیزر، رستوران‌ها، شرکت‌های خدماتی، ساختمانی و هر کسی که به یک سایت معرفی نیاز دارد.",
    ar: "مثالي لمواقع التعريف بالأعمال الصغيرة — صالونات التجميل والليزر، المطاعم، شركات الخدمات والبناء، وكل من يحتاج إلى موقع تعريفي.",
  } satisfies L,
  cta: {
    de: "Jetzt registrieren",
    en: "Sign up now",
    fa: "همین حالا ثبت‌نام کنید",
    ar: "سجّل الآن",
  } satisfies L,
  /** Pre-filled WhatsApp message for visitors who already have their personal code. */
  whatsappPrefill: {
    de: "Hallo, hier ist mein easyWebBuilder-Code: ",
    en: "Hello, here is my easyWebBuilder code: ",
    fa: "سلام، این کد easyWebBuilder من است: ",
    ar: "مرحبًا، هذا رمز easyWebBuilder الخاص بي: ",
  } satisfies L,
  whatsapp: {
    de: "Bot auf WhatsApp öffnen",
    en: "Open bot on WhatsApp",
    fa: "باز کردن ربات در واتس‌اپ",
    ar: "افتح البوت على واتساب",
  } satisfies L,
  telegram: {
    de: "Bot auf Telegram öffnen",
    en: "Open bot on Telegram",
    fa: "باز کردن ربات در تلگرام",
    ar: "افتح البوت على تيليجرام",
  } satisfies L,
  more: {
    de: "Mehr als eine Präsentationsseite? Beratung anfragen",
    en: "Need more than a presentation site? Ask for a consultation",
    fa: "بیشتر از یک سایت معرفی می‌خواهید؟ مشاوره بگیرید",
    ar: "تحتاج أكثر من موقع تعريفي؟ اطلب استشارة",
  } satisfies L,
  /** Example conversation shown in the phone mock-up. */
  demo: {
    agent: "easyWebBuilder",
    status: {
      de: "Online",
      en: "Online",
      fa: "آنلاین",
      ar: "متصل",
    } satisfies L,
    you1: {
      de: "Balayage kostet ab heute 89 € statt 99 €",
      en: "Balayage is now €89 instead of €99",
      fa: "قیمت بالیاژ از امروز ۸۹ یورو شد، نه ۹۹",
      ar: "سعر البالياج أصبح 89 € بدل 99 €",
    } satisfies L,
    bot1: {
      de: "Erledigt ✓ Der Preis ist aktualisiert.",
      en: "Done ✓ The price is updated.",
      fa: "انجام شد ✓ قیمت به‌روز شد.",
      ar: "تم ✓ جرى تحديث السعر.",
    } satisfies L,
    you2: {
      de: "Neuer Titel: Jetzt auch samstags geöffnet",
      en: "New headline: Now open on Saturdays too",
      fa: "تیتر جدید: از این پس شنبه‌ها هم باز هستیم",
      ar: "عنوان جديد: نفتح الآن أيام السبت أيضًا",
    } satisfies L,
    bot2: {
      de: "Titel geändert ✓ Ihre Website ist live.",
      en: "Headline changed ✓ Your website is live.",
      fa: "تیتر تغییر کرد ✓ وب‌سایت شما آنلاین است.",
      ar: "تم تغيير العنوان ✓ موقعك مباشر الآن.",
    } satisfies L,
    preview: {
      de: "Live-Vorschau",
      en: "Live preview",
      fa: "پیش‌نمایش زنده",
      ar: "معاينة مباشرة",
    } satisfies L,
    headline: {
      de: "Jetzt auch samstags geöffnet",
      en: "Now open on Saturdays too",
      fa: "از این پس شنبه‌ها هم باز هستیم",
      ar: "نفتح الآن أيام السبت أيضًا",
    } satisfies L,
    service: {
      de: "Balayage",
      en: "Balayage",
      fa: "بالیاژ",
      ar: "بالياج",
    } satisfies L,
    oldPrice: {
      de: "99 €",
      en: "€99",
      fa: "۹۹ €",
      ar: "99 €",
    } satisfies L,
    newPrice: {
      de: "89 €",
      en: "€89",
      fa: "۸۹ €",
      ar: "89 €",
    } satisfies L,
    placeholder: {
      de: "Nachricht schreiben",
      en: "Type a message",
      fa: "پیام بنویسید",
      ar: "اكتب رسالة",
    } satisfies L,
  },
};

/* ------------------------------------------------------------------ */
/*  Solutions (two target groups)                                      */
/* ------------------------------------------------------------------ */
export type Solution = {
  id: "small" | "custom";
  icon: LucideIcon;
  metaIcon: LucideIcon;
  /** Optional brand logo (public path) shown instead of the icon. */
  logo?: string;
  highlight?: boolean;
  tag: L;
  name: L;
  audience: L;
  /** Small word before the amount ("from"). */
  pricePrefix?: L;
  /** The amount itself, always rendered left-to-right. */
  price: L;
  /** Small word after the amount ("/ month"). */
  priceSuffix?: L;
  priceNote: L;
  meta: L;
  features: LList;
  cta: L;
  href: string;
};

export const SOLUTIONS: Solution[] = [
  {
    id: "small",
    icon: MessageCircle,
    logo: BRAND_LOGO,
    metaIcon: Zap,
    highlight: true,
    tag: { de: "Sofort startklar", en: "Ready to start", fa: "شروع فوری", ar: "ابدأ فورًا" },
    name: { de: "Chat-Paket", en: "Chat Package", fa: "بسته‌ی چت", ar: "باقة الدردشة" },
    audience: {
      de: "Für kleine Unternehmen & Präsentationsseiten",
      en: "For small businesses & presentation sites",
      fa: "برای کسب‌وکارهای کوچک و سایت‌های معرفی",
      ar: "للشركات الصغيرة ومواقع التعريف",
    },
    price: {
      de: "11,99 €",
      en: "€11.99",
      fa: "۱۱٫۹۹ €",
      ar: "11.99 €",
    },
    priceSuffix: {
      de: "/ Monat",
      en: "/ month",
      fa: "/ ماه",
      ar: "/ شهريًا",
    },
    priceNote: {
      de: "Einmalige Erstellung durch unser Team ab 299 €",
      en: "One-time setup by our team from €299",
      fa: "هزینه‌ی ساخت اولیه توسط تیم ما از ۲۹۹ یورو",
      ar: "رسوم إنشاء لمرة واحدة بواسطة فريقنا ابتداءً من 299 €",
    },
    meta: {
      de: "In wenigen Tagen online",
      en: "Online in a few days",
      fa: "آنلاین در چند روز",
      ar: "على الإنترنت خلال أيام",
    },
    features: {
      de: [
        "Professionelle Präsentationsseite – von unserem Team in wenigen Tagen gebaut",
        "Änderungen per WhatsApp oder Telegram – einfach per Code verbinden",
        "Preise, Leistungen & Texte per Nachricht ändern",
        "Öffnungszeiten, Adresse & Kontakt immer aktuell",
        "Kein Dashboard, kein technisches Wissen nötig",
        "24/7 Support – wir sind immer erreichbar",
      ],
      en: [
        "Professional presentation site — built by our team in a few days",
        "Changes via WhatsApp or Telegram — just connect with your code",
        "Change prices, services & copy by message",
        "Opening hours, address & contact always up to date",
        "No dashboard, no technical knowledge needed",
        "24/7 support — always reachable",
      ],
      fa: [
        "وب‌سایت معرفی حرفه‌ای؛ ساخته‌شده توسط تیم ما در چند روز",
        "تغییرات با واتس‌اپ یا تلگرام؛ فقط با یک کد وصل شوید",
        "تغییر قیمت، خدمات و متن‌ها با یک پیام",
        "ساعت کاری، آدرس و تماس همیشه به‌روز",
        "بدون داشبورد و بدون نیاز به دانش فنی",
        "پاسخ‌گویی ۲۴ ساعته، ۷ روز هفته",
      ],
      ar: [
        "موقع تعريفي احترافي — يبنيه فريقنا خلال أيام",
        "التعديلات عبر واتساب أو تيليجرام — اربط بالرمز فقط",
        "غيّر الأسعار والخدمات والنصوص برسالة",
        "ساعات العمل والعنوان والتواصل محدّثة دائمًا",
        "بلا لوحة تحكم ولا حاجة لمعرفة تقنية",
        "دعم على مدار الساعة 24/7",
      ],
    },
    cta: {
      de: "Jetzt registrieren",
      en: "Sign up now",
      fa: "همین حالا ثبت‌نام کنید",
      ar: "سجّل الآن",
    },
    href: SIGNUP_URL,
  },
  {
    id: "custom",
    icon: Building2,
    metaIcon: PhoneCall,
    tag: { de: "Mit persönlicher Beratung", en: "With personal consultation", fa: "با مشاوره‌ی شخصی", ar: "مع استشارة شخصية" },
    name: {
      de: "Professionelle Website",
      en: "Professional Website",
      fa: "وب‌سایت حرفه‌ای",
      ar: "موقع احترافي",
    },
    audience: {
      de: "Für alle, die eine professionelle Website möchten",
      en: "For anyone who wants a professional website",
      fa: "برای کسانی که وب‌سایت حرفه‌ای می‌خواهند",
      ar: "لمن يريد موقعًا احترافيًا",
    },
    pricePrefix: {
      de: "ab",
      en: "from",
      fa: "از",
      ar: "ابتداءً من",
    },
    price: {
      de: "799 €",
      en: "€799",
      fa: "۷۹۹ €",
      ar: "799 €",
    },
    priceNote: {
      de: "Preis auf Anfrage – kontaktieren Sie uns",
      en: "Price on request — get in touch",
      fa: "قیمت نهایی با تماس شما؛ با ما در تماس باشید",
      ar: "السعر عند الطلب — تواصل معنا",
    },
    meta: {
      de: "Erst Beratung, dann Angebot",
      en: "Consultation first, then a quote",
      fa: "اول مشاوره، بعد پیشنهاد",
      ar: "استشارة أولًا ثم عرض سعر",
    },
    features: {
      de: [
        "Individuelles Design – passend zu Ihrer Marke",
        "Jede Funktion, die Ihr Projekt braucht – von unserem Team umgesetzt",
        "Schnelle, SEO-fertige & responsive Website",
        "Anbindung an Ihre bestehenden Systeme",
        "Mehrsprachig – inkl. RTL (DE / EN / FA / AR)",
        "Persönlicher Ansprechpartner – 24/7 erreichbar",
      ],
      en: [
        "Individual design — tailored to your brand",
        "Every feature your project needs — built by our team",
        "Fast, SEO-ready & responsive website",
        "Integrations with your existing systems",
        "Multilingual — incl. RTL (DE / EN / FA / AR)",
        "Dedicated contact person — reachable 24/7",
      ],
      fa: [
        "طراحی اختصاصی، متناسب با برند شما",
        "هر امکانی که پروژه‌تان لازم دارد، توسط تیم ما پیاده‌سازی می‌شود",
        "وب‌سایت سریع، سئوشده و ریسپانسیو",
        "اتصال به سیستم‌های فعلی شما",
        "چندزبانه، شامل راست‌به‌چپ (DE / EN / FA / AR)",
        "مسئول ارتباط اختصاصی؛ پاسخ‌گو ۲۴ ساعته، ۷ روز هفته",
      ],
      ar: [
        "تصميم مخصّص يناسب علامتك",
        "كل ميزة يحتاجها مشروعك — ينفّذها فريقنا",
        "موقع سريع وجاهز لمحركات البحث ومتجاوب",
        "ربط مع أنظمتك الحالية",
        "متعدد اللغات — بما فيها RTL (DE / EN / FA / AR)",
        "جهة اتصال مخصّصة — متاحة 24/7",
      ],
    },
    cta: {
      de: "Kostenlose Beratung anfragen",
      en: "Request a free consultation",
      fa: "درخواست مشاوره رایگان",
      ar: "اطلب استشارة مجانية",
    },
    href: "#contact",
  },
];

export const SOLUTIONS_COPY = {
  badge: {
    de: "Lösungen",
    en: "Solutions",
    fa: "راهکارها",
    ar: "الحلول",
  } satisfies L,
  title: {
    de: "Die passende Lösung für Ihr Unternehmen",
    en: "The right solution for your business",
    fa: "راهکار مناسب کسب‌وکار شما",
    ar: "الحل المناسب لنشاطك",
  } satisfies L,
  subtitle: {
    de: "Ob kleines Unternehmen oder wachsender Konzern: Wir starten dort, wo Sie stehen – ohne Overhead und ohne Fachchinesisch.",
    en: "Whether you run a small business or a growing company: we start where you are — no overhead, no jargon.",
    fa: "چه کسب‌وکار کوچک باشید چه شرکتی در حال رشد: از همان‌جا که هستید شروع می‌کنیم؛ بدون پیچیدگی و بدون اصطلاحات سخت.",
    ar: "سواء كنت تدير نشاطًا صغيرًا أو شركة متنامية: نبدأ من حيث أنت — بلا تعقيد وبلا مصطلحات صعبة.",
  } satisfies L,
  note: {
    de: "Unsicher, was zu Ihnen passt? Wir sagen es Ihnen ehrlich – im kostenlosen 15-Minuten-Gespräch.",
    en: "Not sure which fits? We’ll tell you honestly — in a free 15-minute call.",
    fa: "مطمئن نیستید کدام برای شما مناسب است؟ صادقانه می‌گوییم؛ در یک تماس رایگان ۱۵ دقیقه‌ای.",
    ar: "لست متأكدًا أيهما يناسبك؟ سنخبرك بصراحة — في مكالمة مجانية مدتها 15 دقيقة.",
  } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  How it works                                                       */
/* ------------------------------------------------------------------ */
export const STEPS: { icon: LucideIcon; title: L; text: L }[] = [
  {
    icon: UserPlus,
    title: {
      de: "Jetzt registrieren",
      en: "Sign up",
      fa: "ثبت‌نام کنید",
      ar: "سجّل حسابك",
    },
    text: {
      de: "Legen Sie Ihr Konto an. Danach erhalten Sie Ihren persönlichen Code.",
      en: "Create your account. You then receive your personal code.",
      fa: "حساب کاربری بسازید. بعد از آن یک کد اختصاصی برای شما صادر می‌شود.",
      ar: "أنشئ حسابك. بعدها تحصل على رمزك الشخصي.",
    },
  },
  {
    icon: Wand2,
    title: {
      de: "Wir bauen Ihre Website",
      en: "We build your website",
      fa: "ما وب‌سایتتان را می‌سازیم",
      ar: "نبني موقعك",
    },
    text: {
      de: "Unser Team gestaltet und baut Ihre Seite in wenigen Tagen – Sie müssen nicht wochenlang warten.",
      en: "Our team designs and builds your site within a few days — no waiting for weeks.",
      fa: "تیم ما وب‌سایت شما را در چند روز طراحی و اجرا می‌کند؛ نیازی به هفته‌ها انتظار نیست.",
      ar: "يصمّم فريقنا موقعك وينفّذه خلال أيام قليلة — دون انتظار أسابيع.",
    },
  },
  {
    icon: Link2,
    title: {
      de: "Mit dem Bot verbinden",
      en: "Connect with the bot",
      fa: "به ربات وصل شوید",
      ar: "اتصل بالبوت",
    },
    text: {
      de: "Schicken Sie den Code an den easyWebBuilder-Bot auf Telegram oder WhatsApp – damit ist Ihr Chat mit Ihrem Konto verknüpft.",
      en: "Send the code to the easyWebBuilder bot on Telegram or WhatsApp — that links your chat to your account.",
      fa: "کد را در تلگرام یا واتس‌اپ برای ربات easyWebBuilder بفرستید؛ همین چت شما را به حسابتان وصل می‌کند.",
      ar: "أرسل الرمز إلى بوت easyWebBuilder على تيليجرام أو واتساب — فيرتبط حسابك بدردشتك.",
    },
  },
  {
    icon: MessageCircle,
    title: {
      de: "Jederzeit per Nachricht ändern",
      en: "Change anything, anytime",
      fa: "هر زمان با یک پیام تغییر دهید",
      ar: "عدّل ما تشاء متى شئت",
    },
    text: {
      de: "Neuer Preis, neuer Titel, andere Öffnungszeiten? Eine kurze Nachricht genügt – wann immer Sie möchten.",
      en: "New price, new headline, different opening hours? A short message is all it takes — whenever you like.",
      fa: "قیمت جدید، تیتر جدید یا ساعت کاری متفاوت؟ یک پیام کوتاه کافی است؛ هر وقت خواستید.",
      ar: "سعر جديد أو عنوان جديد أو ساعات عمل مختلفة؟ تكفي رسالة قصيرة — متى أردت.",
    },
  },
];

export const HOW_COPY = {
  badge: {
    de: "So funktioniert’s",
    en: "How It Works",
    fa: "روند کار",
    ar: "كيف يعمل",
  } satisfies L,
  title: {
    de: "In wenigen Tagen online – danach per Chat aktuell",
    en: "Live in days, updated by chat",
    fa: "در چند روز آنلاین، با چت همیشه به‌روز",
    ar: "على الإنترنت خلال أيام، ومحدَّث بالدردشة",
  } satisfies L,
  subtitle: {
    de: "Wir bauen Ihre Website in wenigen Tagen – ohne wochenlange Wartezeit. Danach pflegen Sie sie selbst per WhatsApp oder Telegram.",
    en: "We build your website in a few days — no weeks of waiting. After that you keep it up to date yourself via WhatsApp or Telegram.",
    fa: "وب‌سایت شما را در چند روز می‌سازیم، بدون هفته‌ها انتظار. بعد از آن خودتان با واتس‌اپ یا تلگرام آن را به‌روز نگه می‌دارید.",
    ar: "نبني موقعك خلال أيام قليلة دون انتظار أسابيع. وبعدها تحدّثه بنفسك عبر واتساب أو تيليجرام.",
  } satisfies L,
  step: {
    de: "Schritt",
    en: "Step",
    fa: "مرحله",
    ar: "الخطوة",
  } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  Features                                                           */
/* ------------------------------------------------------------------ */
export type FeatureId = "ai" | "seo" | "i18n" | "geo";

export const FEATURES: {
  id: FeatureId;
  icon: LucideIcon;
  title: L;
  text: L;
}[] = [
  {
    id: "ai",
    icon: Sparkles,
    title: { de: "KI-Content-Generator", en: "AI Content Generator", fa: "تولیدکننده‌ی محتوای هوشمند", ar: "مولّد المحتوى بالذكاء الاصطناعي" },
    text: {
      de: "Headlines, Produkttexte und Blog-Entwürfe in Ihrer Markenstimme – auf Deutsch, Englisch, Persisch oder Arabisch.",
      en: "Headlines, product copy and blog drafts written in your brand voice — in German, English, Persian or Arabic.",
      fa: "تیتر، متن محصول و پیش‌نویس مقاله با لحن برند شما، به آلمانی، انگلیسی، فارسی یا عربی.",
      ar: "عناوين ونصوص منتجات ومسودات مقالات بنبرة علامتك — بالألمانية أو الإنجليزية أو الفارسية أو العربية.",
    },
  },
  {
    id: "seo",
    icon: Gauge,
    title: { de: "Blitzschnelle SEO-Optimierung", en: "Lightning SEO Optimization", fa: "بهینه‌سازی سئوی لحظه‌ای", ar: "تحسين SEO فائق السرعة" },
    text: {
      de: "Sauberes Markup, automatische Sitemaps, Schema, Bildkomprimierung und optimierte Core Web Vitals – direkt ab Werk.",
      en: "Clean markup, auto sitemaps, schema, image compression and Core Web Vitals tuned out of the box.",
      fa: "کد تمیز، نقشه‌ی سایت خودکار، اسکیما، فشرده‌سازی تصویر و Core Web Vitals بهینه از همان ابتدا.",
      ar: "كود نظيف وخرائط موقع تلقائية وSchema وضغط للصور وCore Web Vitals مضبوطة من البداية.",
    },
  },
  {
    id: "i18n",
    icon: Languages,
    title: { de: "Mehrsprachigkeit", en: "Multilingual Support", fa: "پشتیبانی چندزبانه", ar: "دعم متعدد اللغات" },
    text: {
      de: "Echte RTL- und LTR-Layouts. Starten Sie auf Deutsch, Englisch, Persisch, Arabisch und mehr – mit KI-Übersetzung per Klick.",
      en: "True RTL & LTR layouts. Launch in German, English, Persian, Arabic and more with one-click AI translation.",
      fa: "چیدمان واقعی راست‌به‌چپ و چپ‌به‌راست. با ترجمه‌ی یک‌کلیکی، به آلمانی، انگلیسی، فارسی، عربی و بیشتر منتشر کنید.",
      ar: "تخطيطات حقيقية من اليمين إلى اليسار ومن اليسار إلى اليمين. أطلق موقعك بالألمانية والإنجليزية والفارسية والعربية وغيرها بترجمة بالذكاء الاصطناعي بنقرة واحدة.",
    },
  },
  {
    id: "geo",
    icon: Search,
    title: {
      de: "Bereit für ChatGPT & KI-Suche",
      en: "ChatGPT & AI Search Ready",
      fa: "آماده‌ی ChatGPT و جستجوی هوشمند",
      ar: "جاهز لـ ChatGPT والبحث بالذكاء الاصطناعي",
    },
    text: {
      de: "Strukturierte Daten und llms.txt helfen KI-Assistenten, Ihr Unternehmen zu verstehen und zu empfehlen.",
      en: "Structured data and llms.txt help AI assistants understand and recommend your business.",
      fa: "داده‌ی ساختاریافته و llms.txt کمک می‌کند دستیارهای هوشمند کسب‌وکار شما را بفهمند و معرفی کنند.",
      ar: "تساعد البيانات المنظمة وملف llms.txt مساعدي الذكاء الاصطناعي على فهم نشاطك والتوصية به.",
    },
  },
];

export const FEATURES_COPY = {
  badge: { de: "Plattform-Funktionen", en: "Platform Features", fa: "امکانات پلتفرم", ar: "مميزات المنصة" } satisfies L,
  title: {
    de: "Alles, was Sie online zum Erfolg brauchen",
    en: "Everything you need to win online",
    fa: "هر چه برای موفقیت آنلاین لازم دارید",
    ar: "كل ما تحتاجه للنجاح على الإنترنت",
  } satisfies L,
  subtitle: {
    de: "Eine Plattform für Design, Inhalte, SEO und Wachstum – vom ersten Klick an KI-gestützt.",
    en: "One platform for design, content, SEO and growth — powered by AI from the first click.",
    fa: "یک پلتفرم برای طراحی، محتوا، سئو و رشد؛ با هوش مصنوعی از همان کلیک اول.",
    ar: "منصة واحدة للتصميم والمحتوى وSEO والنمو — مدعومة بالذكاء الاصطناعي منذ أول نقرة.",
  } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */
export const FAQS: { q: L; a: L }[] = [
  {
    q: {
      de: "Was ist der Unterschied zwischen dem Chat-Paket und einer individuellen Website?",
      en: "What’s the difference between the Chat Package and a professional custom website?",
      fa: "تفاوت بسته‌ی چت با وب‌سایت حرفه‌ای اختصاصی چیست؟",
      ar: "ما الفرق بين باقة الدردشة والموقع المخصّص؟",
    },
    a: {
      de: "Das Chat-Paket ist für kleine Unternehmen, die eine schlanke Präsentationsseite wollen und sie per WhatsApp oder Telegram selbst pflegen. Brauchen Sie eine professionelle, individuell gestaltete Website mit mehr Funktionen, setzt unser Team Ihr Projekt komplett um – nach einem kostenlosen Beratungsgespräch.",
      en: "The Chat Package is for small businesses that want a lean presentation site they maintain themselves via WhatsApp or Telegram. If you need a professional, individually designed website with more functionality, our team builds your project end to end — after a free consultation.",
      fa: "بسته‌ی چت برای کسب‌وکارهای کوچک است که یک وب‌سایت معرفی ساده می‌خواهند و خودشان با واتس‌اپ یا تلگرام آن را به‌روز می‌کنند. اگر وب‌سایت حرفه‌ای و اختصاصی با امکانات بیشتر می‌خواهید، تیم ما بعد از یک مشاوره‌ی رایگان پروژه‌تان را از ابتدا تا انتها اجرا می‌کند.",
      ar: "باقة الدردشة مخصّصة للأعمال الصغيرة التي تريد موقعًا تعريفيًا بسيطًا تديره بنفسها عبر واتساب أو تيليجرام. وإن كنت تريد موقعًا احترافيًا مصمَّمًا خصيصًا بإمكانات أكبر، فينفّذ فريقنا مشروعك من الألف إلى الياء بعد استشارة مجانية.",
    },
  },
  {
    q: {
      de: "Kann ich meine bestehende Domain übernehmen?",
      en: "Can I transfer my existing domain?",
      fa: "آیا می‌توانم دامنه‌ی فعلی‌ام را منتقل کنم؟",
      ar: "هل يمكنني نقل نطاقي الحالي؟",
    },
    a: {
      de: "Ja. Sie können Ihre Domain beim bisherigen Anbieter lassen und nur die DNS-Einträge auf uns zeigen lassen oder sie vollständig umziehen. Die technischen Schritte übernehmen wir – ohne Ausfallzeit beim Wechsel.",
      en: "Yes. Keep your domain where it is and simply point the DNS to us, or transfer it fully. We handle the technical steps and guarantee zero downtime during the switch.",
      fa: "بله. می‌توانید دامنه را همان‌جا نگه دارید و فقط DNS را به ما وصل کنید یا آن را کامل منتقل کنید. مراحل فنی با ما است و جابه‌جایی بدون وقفه انجام می‌شود.",
      ar: "نعم. يمكنك إبقاء نطاقك لدى مزوّده الحالي وتوجيه سجلات DNS إلينا فقط، أو نقله بالكامل. نتولى الخطوات التقنية دون أي توقف أثناء الانتقال.",
    },
  },
  {
    q: {
      de: "Wie lange dauert es, bis meine Website online ist?",
      en: "How long until my website is online?",
      fa: "چقدر طول می‌کشد تا وب‌سایتم آنلاین شود؟",
      ar: "كم يستغرق حتى يصبح موقعي مباشرًا؟",
    },
    a: {
      de: "Nur wenige Tage – nicht Wochen. Unser Team baut Ihre erste Website für Sie. Danach ist easyWebBuilder Ihr Draht zu uns: Änderungen und Support laufen bequem per WhatsApp oder Telegram.",
      en: "Just a few days — not weeks. Our team builds your first website for you. After that, easyWebBuilder is your line to us: changes and support run conveniently via WhatsApp or Telegram.",
      fa: "فقط چند روز، نه چند هفته. تیم ما وب‌سایت اولیه‌ی شما را می‌سازد. بعد از آن easyWebBuilder راه ارتباطی شما با ماست: تغییرات و پشتیبانی راحت با واتس‌اپ یا تلگرام انجام می‌شود.",
      ar: "أيام قليلة فقط، لا أسابيع. يبني فريقنا موقعك الأول لك. وبعدها يصبح easyWebBuilder قناة تواصلك معنا: التعديلات والدعم عبر واتساب أو تيليجرام بكل سهولة.",
    },
  },
  {
    q: {
      de: "Wie ändere ich meine Website per Chat?",
      en: "How do I change my website via chat?",
      fa: "چطور وب‌سایتم را با چت تغییر بدهم؟",
      ar: "كيف أغيّر موقعي عبر الدردشة؟",
    },
    a: {
      de: "Schreiben Sie, wie Sie einer Mitarbeiterin schreiben würden – etwa „Haarschnitt kostet jetzt 45 €“ oder „Neuer Titel: Frische Brötchen ab 6 Uhr“. Der Agent setzt die Änderung um und bestätigt sie. Ohne Dashboard.",
      en: "Write like you would to a colleague — e.g. “Haircuts are now €45” or “New headline: Fresh rolls from 6 am”. The agent applies the change and confirms it. No dashboard needed.",
      fa: "همان‌طور بنویسید که به یک همکار می‌نویسید؛ مثلاً «قیمت اصلاح مو الان ۴۵ یورو است» یا «تیتر جدید: نان تازه از ساعت ۶ صبح». دستیار تغییر را اعمال و تأیید می‌کند. بدون نیاز به داشبورد.",
      ar: "اكتب كما تكتب لزميل — مثلًا «قصّة الشعر الآن بـ 45 €» أو «عنوان جديد: خبز طازج من السادسة صباحًا». ينفّذ المساعد التعديل ويؤكده. بلا حاجة إلى لوحة تحكم.",
    },
  },
  {
    q: {
      de: "Funktioniert meine Website auch gut auf dem Smartphone?",
      en: "Will my website work well on mobile?",
      fa: "آیا سایت من روی موبایل خوب نمایش داده می‌شود؟",
      ar: "هل سيعمل موقعي جيدًا على الجوال؟",
    },
    a: {
      de: "Selbstverständlich. Alle Vorlagen sind mobile-first entwickelt und auf echten Geräten getestet – Layout, Menüs und Checkout fühlen sich auf Smartphone und Tablet nativ an.",
      en: "Absolutely. Every template is designed mobile-first and tested on real devices, so layouts, menus and checkout flows feel native on phones and tablets.",
      fa: "قطعاً. همه‌ی قالب‌ها موبایل‌محور طراحی و روی دستگاه‌های واقعی تست شده‌اند؛ چیدمان، منو و فرایند خرید روی موبایل و تبلت کاملاً روان است.",
      ar: "بالتأكيد. صُمّمت كل القوالب بمبدأ الجوال أولًا واختُبرت على أجهزة حقيقية، فتبدو التخطيطات والقوائم ومسار الدفع طبيعية على الهواتف واللوحيات.",
    },
  },
  {
    q: {
      de: "Wie schnell wird meine Website sein?",
      en: "How fast will my website be?",
      fa: "سرعت سایت من چقدر خواهد بود؟",
      ar: "ما مدى سرعة موقعي؟",
    },
    a: {
      de: "Die Websites werden über ein globales CDN mit optimierten Bildern, minimalem JavaScript und modernem Caching ausgeliefert. Die meisten unserer Seiten erreichen 95–100 Punkte bei Google PageSpeed.",
      en: "Sites are served from a global CDN with optimized images, minimal JavaScript and modern caching. Most of our sites score 95–100 on Google PageSpeed.",
      fa: "سایت‌ها از طریق CDN جهانی، با تصاویر بهینه، حداقل جاوااسکریپت و کش مدرن ارائه می‌شوند. بیشتر سایت‌های ما امتیاز ۹۵ تا ۱۰۰ در PageSpeed گوگل می‌گیرند.",
      ar: "تُقدَّم المواقع عبر شبكة CDN عالمية مع صور محسّنة وحد أدنى من JavaScript وتخزين مؤقت حديث. تحصل معظم مواقعنا على 95–100 في Google PageSpeed.",
    },
  },
  {
    q: {
      de: "Was passiert nach dem Launch? Gibt es Support?",
      en: "What happens after launch? Do you offer support?",
      fa: "بعد از راه‌اندازی چه می‌شود؟ پشتیبانی دارید؟",
      ar: "ماذا يحدث بعد الإطلاق؟ هل تقدمون دعمًا؟",
    },
    a: {
      de: "Ja. Sie erhalten persönlichen Support per Chat oder WhatsApp – rund um die Uhr (24/7). Beim Chat-Paket genügt eine Nachricht an den Agenten; bei individuellen Lösungen gibt es einen festen Ansprechpartner, priorisierte Antworten und regelmäßige Health-Checks.",
      en: "Yes. You get human support via chat or WhatsApp, 24/7. With the Chat Package a message to the agent is all it takes; custom solutions come with a dedicated contact person, priority response and regular health checks.",
      fa: "بله. پشتیبانی انسانی از طریق چت یا واتس‌اپ دارید، ۲۴ ساعته و ۷ روز هفته. در بسته‌ی چت یک پیام به دستیار کافی است؛ راهکارهای اختصاصی یک مسئول ارتباط ثابت، پاسخ‌گویی اولویت‌دار و بررسی‌های دوره‌ای دارند.",
      ar: "نعم. تحصل على دعم بشري عبر الدردشة أو واتساب على مدار الساعة 24/7. مع باقة الدردشة تكفي رسالة إلى المساعد؛ أما الحلول المخصّصة فتتضمن جهة اتصال ثابتة واستجابة ذات أولوية وفحوصات دورية.",
    },
  },
];

export const FAQ_COPY = {
  badge: { de: "FAQ", en: "FAQ", fa: "سوالات متداول", ar: "الأسئلة الشائعة" } satisfies L,
  title: {
    de: "Fragen? Wir haben die Antworten.",
    en: "Questions? We’ve got answers.",
    fa: "سوالی دارید؟ پاسخش اینجاست",
    ar: "لديك أسئلة؟ لدينا الإجابات.",
  } satisfies L,
  subtitle: {
    de: "Nicht fündig geworden? Fragen Sie uns einfach über das Formular unten.",
    en: "Can’t find what you’re looking for? Ask us anything in the form below.",
    fa: "پاسخ سوالتان را پیدا نکردید؟ از فرم پایین از ما بپرسید.",
    ar: "لم تجد ما تبحث عنه؟ اسألنا عن أي شيء عبر النموذج أدناه.",
  } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  Lead form                                                          */
/* ------------------------------------------------------------------ */
export const SITE_TYPES: { id: string; label: L }[] = [
  { id: "landing", label: { de: "Landingpage", en: "Landing Page", fa: "لندینگ پیج", ar: "صفحة هبوط" } },
  { id: "corporate", label: { de: "Unternehmenswebsite", en: "Corporate Site", fa: "سایت شرکتی", ar: "موقع شركة" } },
  { id: "store", label: { de: "Online-Shop", en: "Online Store", fa: "فروشگاه اینترنتی", ar: "متجر إلكتروني" } },
  { id: "booking", label: { de: "Buchungsseite", en: "Booking Website", fa: "سایت رزرو", ar: "موقع حجوزات" } },
  { id: "portfolio", label: { de: "Portfolio", en: "Portfolio", fa: "نمونه‌کار", ar: "معرض أعمال" } },
  { id: "unsure", label: { de: "Noch unsicher", en: "Not sure yet", fa: "هنوز مطمئن نیستم", ar: "لست متأكدًا بعد" } },
];

export const LEAD_COPY = {
  badge: { de: "Kostenlose Beratung", en: "Free Consultation", fa: "مشاوره رایگان", ar: "استشارة مجانية" } satisfies L,
  title: {
    de: "Lassen Sie uns Ihre Website bauen – kostenlose Beratung",
    en: "Let’s build your website — free consultation",
    fa: "وب‌سایت‌تان را با هم بسازیم؛ مشاوره‌ی رایگان",
    ar: "لنبنِ موقعك معًا — استشارة مجانية",
  } satisfies L,
  subtitle: {
    de: "Erzählen Sie uns von Ihrem Projekt. Innerhalb von 24 Stunden erhalten Sie einen maßgeschneiderten Plan und ein klares Angebot.",
    en: "Tell us about your project. We’ll reply within 24 hours with a tailored plan and a clear quote.",
    fa: "درباره‌ی پروژه‌تان بگویید. ظرف ۲۴ ساعت با یک برنامه‌ی اختصاصی و قیمت شفاف پاسخ می‌دهیم.",
    ar: "أخبرنا عن مشروعك. سنردّ خلال 24 ساعة بخطة مخصّصة وعرض سعر واضح.",
  } satisfies L,
  perks: {
    de: ["Kostenloses 15-Minuten-Strategiegespräch", "Individueller Plan & Angebot", "Völlig unverbindlich"],
    en: ["Free 15-minute strategy call", "Tailored plan & quote", "No commitment"],
    fa: ["تماس استراتژی ۱۵ دقیقه‌ای رایگان", "پیشنهاد و قیمت اختصاصی", "بدون هیچ تعهدی"],
    ar: ["مكالمة استراتيجية مجانية مدتها 15 دقيقة", "خطة وعرض سعر مخصّصان", "بلا أي التزام"],
  } satisfies LList,
  question: {
    de: "Welche Art von Website brauchen Sie?",
    en: "What type of website do you need?",
    fa: "چه نوع وب‌سایتی نیاز دارید؟",
    ar: "ما نوع الموقع الذي تحتاجه؟",
  } satisfies L,
  name: { de: "Vollständiger Name", en: "Full name", fa: "نام و نام خانوادگی", ar: "الاسم الكامل" } satisfies L,
  namePh: { de: "z. B. Anna Schmidt", en: "e.g. Sara Ahmadi", fa: "مثلاً سارا احمدی", ar: "مثال: سارة أحمد" } satisfies L,
  phone: { de: "Telefon / WhatsApp", en: "Phone / WhatsApp", fa: "شماره تماس / واتس‌اپ", ar: "الهاتف / واتساب" } satisfies L,
  phonePh: { de: "+49 170 0000000", en: "+49 170 0000000", fa: "۰۹۱۲ ۰۰۰ ۰۰۰۰", ar: "+49 170 0000000" } satisfies L,
  email: { de: "E-Mail", en: "Email", fa: "ایمیل", ar: "البريد الإلكتروني" } satisfies L,
  emailPh: { de: "sie@firma.de", en: "you@company.com", fa: "you@company.com", ar: "you@company.com" } satisfies L,
  message: {
    de: "Erzählen Sie uns von Ihrem Projekt (optional)",
    en: "Tell us about your project (optional)",
    fa: "درباره‌ی پروژه‌تان بنویسید (اختیاری)",
    ar: "حدّثنا عن مشروعك (اختياري)",
  } satisfies L,
  messagePh: {
    de: "Was macht Ihr Unternehmen? Wer sind Ihre Kunden?",
    en: "What does your business do? Who are your customers?",
    fa: "کسب‌وکارتان چه می‌کند؟ مشتریانتان چه کسانی هستند؟",
    ar: "ما هو نشاط عملك؟ ومن هم عملاؤك؟",
  } satisfies L,
  submit: {
    de: "Kostenlose Beratung anfordern",
    en: "Get My Free Consultation",
    fa: "دریافت مشاوره‌ی رایگان",
    ar: "احصل على استشارتي المجانية",
  } satisfies L,
  sending: { de: "Wird gesendet …", en: "Sending…", fa: "در حال ارسال…", ar: "جارٍ الإرسال…" } satisfies L,
  privacy: {
    de: "Ich stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu. Wir respektieren Ihre Privatsphäre – kein Spam, versprochen.",
    en: "I agree to my details being used to contact me. We respect your privacy. No spam, ever.",
    fa: "با استفاده از اطلاعاتم برای تماس موافقم. به حریم خصوصی شما احترام می‌گذاریم و هرگز اسپم نمی‌فرستیم.",
    ar: "أوافق على استخدام بياناتي للتواصل معي. نحترم خصوصيتك ولا نرسل رسائل مزعجة أبدًا.",
  } satisfies L,
  successTitle: {
    de: "Vielen Dank – wir kümmern uns darum!",
    en: "Thank you — we’re on it!",
    fa: "ممنون، درخواستتان ثبت شد!",
    ar: "شكرًا لك — نحن على الأمر!",
  } satisfies L,
  successText: {
    de: "Unser Team meldet sich innerhalb von 24 Stunden bei Ihnen.",
    en: "Our team will reach out within 24 hours.",
    fa: "تیم ما ظرف ۲۴ ساعت با شما تماس می‌گیرد.",
    ar: "سيتواصل معك فريقنا خلال 24 ساعة.",
  } satisfies L,
  another: {
    de: "Weitere Anfrage senden",
    en: "Send another request",
    fa: "ارسال درخواست جدید",
    ar: "إرسال طلب آخر",
  } satisfies L,
  errors: {
    name: {
      de: "Bitte geben Sie Ihren Namen ein.",
      en: "Please enter your name.",
      fa: "لطفاً نام خود را وارد کنید.",
      ar: "يرجى إدخال اسمك.",
    } satisfies L,
    contact: {
      de: "Geben Sie eine Telefonnummer oder E-Mail an, damit wir Sie erreichen.",
      en: "Add a phone number or an email so we can reach you.",
      fa: "برای ارتباط، شماره تماس یا ایمیل وارد کنید.",
      ar: "أضف رقم هاتف أو بريدًا إلكترونيًا لنتمكن من التواصل معك.",
    } satisfies L,
    email: {
      de: "Diese E-Mail-Adresse scheint nicht zu stimmen.",
      en: "This email doesn’t look right.",
      fa: "فرمت ایمیل درست نیست.",
      ar: "يبدو أن هذا البريد الإلكتروني غير صحيح.",
    } satisfies L,
    server: {
      de: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
      en: "Something went wrong. Please try again.",
      fa: "مشکلی پیش آمد. لطفاً دوباره تلاش کنید.",
      ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    } satisfies L,
  },
};

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
export const FOOTER = {
  tagline: {
    de: "Websites für jedes Business – per Chat gepflegt oder als individuelle Lösung gebaut.",
    en: "Websites for every business — maintained by chat or built as a fully custom solution.",
    fa: "وب‌سایت برای هر کسب‌وکار؛ با مدیریت از طریق چت یا به‌صورت راهکار کاملاً اختصاصی.",
    ar: "مواقع لكل نشاط تجاري — تُدار بالدردشة أو تُبنى كحل مخصّص بالكامل.",
  } satisfies L,
  columns: [
    {
      title: { de: "Produkt", en: "Product", fa: "محصول", ar: "المنتج" } satisfies L,
      links: [
        { label: { de: "Referenzen", en: "Showcases", fa: "نمونه‌کارها", ar: "نماذج الأعمال" } satisfies L, href: "#showcase" },
        { label: { de: "Branchen", en: "Industries", fa: "صنعت‌ها", ar: "القطاعات" } satisfies L, href: "#templates" },
        { label: { de: "Lösungen", en: "Solutions", fa: "راهکارها", ar: "الحلول" } satisfies L, href: "#solutions" },
      ],
    },
    {
      title: { de: "Unternehmen", en: "Company", fa: "شرکت", ar: "الشركة" } satisfies L,
      links: [
        { label: { de: "So funktioniert’s", en: "How It Works", fa: "روند کار", ar: "كيف يعمل" } satisfies L, href: "#how" },
        { label: { de: "FAQ", en: "FAQ", fa: "سوالات متداول", ar: "الأسئلة الشائعة" } satisfies L, href: "#faq" },
        { label: { de: "Kontakt", en: "Contact", fa: "تماس با ما", ar: "اتصل بنا" } satisfies L, href: "#contact" },
        { label: { de: "Login", en: "Log in", fa: "ورود", ar: "تسجيل الدخول" } satisfies L, href: "/login" },
      ],
    },
    {
      title: { de: "Rechtliches", en: "Legal", fa: "قوانین", ar: "قانوني" } satisfies L,
      links: [
        { label: { de: "Impressum", en: "Legal Notice", fa: "اطلاعات قانونی", ar: "البيانات القانونية" } satisfies L, href: "/impressum" },
        { label: { de: "Datenschutz", en: "Privacy Policy", fa: "حریم خصوصی", ar: "سياسة الخصوصية" } satisfies L, href: "/datenschutz" },
      ],
    },
  ],
  copyright: {
    de: "© 2026 easyWebBuilder. Alle Rechte vorbehalten.",
    en: "© 2026 easyWebBuilder. All rights reserved.",
    fa: "© ۱۴۰۵ easyWebBuilder. تمامی حقوق محفوظ است.",
    ar: "© 2026 easyWebBuilder. جميع الحقوق محفوظة.",
  } satisfies L,
  madeWith: {
    de: "Mit Sorgfalt für wachsende Unternehmen gemacht.",
    en: "Crafted with care for growing businesses.",
    fa: "ساخته‌شده با دقت برای کسب‌وکارهای در حال رشد.",
    ar: "صُنع بعناية للشركات المتنامية.",
  } satisfies L,
};

export const SOCIALS = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com" },
  { id: "telegram", label: "Telegram", href: "https://t.me" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { id: "x", label: "X", href: "https://x.com" },
  { id: "github", label: "GitHub", href: "https://github.com" },
] as const;

/* ------------------------------------------------------------------ */
/*  Cookie consent                                                     */
/* ------------------------------------------------------------------ */
/** Privacy policy path (without locale prefix). */
export const PRIVACY_PATH = "/datenschutz";

export const COOKIE_COPY = {
  title: {
    de: "Cookies bei easyWebBuilder",
    en: "Cookies on easyWebBuilder",
    fa: "کوکی‌ها در easyWebBuilder",
    ar: "ملفات تعريف الارتباط في easyWebBuilder",
  } satisfies L,
  text: {
    de: "Essenzielle Cookies sorgen dafür, dass die Seite funktioniert, und sind immer aktiv. Mit Ihrer Einwilligung aktivieren wir zusätzlich Analyse-Cookies (Besucherstatistik) und Marketing-Cookies (Werbewirksamkeit).",
    en: "Essential cookies keep the site working and are always on. With your consent we will also enable analytics cookies (visit statistics) and marketing cookies (ad effectiveness).",
    fa: "کوکی‌های ضروری برای کار کردن سایت لازم‌اند و همیشه فعال هستند. با رضایت شما، کوکی‌های تحلیلی (آمار بازدید) و کوکی‌های بازاریابی (اثربخشی تبلیغات) را نیز فعال می‌کنیم.",
    ar: "ملفات تعريف الارتباط الأساسية تُبقي الموقع يعمل وهي مفعّلة دائمًا. بموافقتك سنفعّل أيضًا ملفات التحليلات (إحصاءات الزيارات) وملفات التسويق (فعالية الإعلانات).",
  } satisfies L,
  details: { de: "Details:", en: "Details:", fa: "جزئیات:", ar: "التفاصيل:" } satisfies L,
  privacy: {
    de: "Datenschutzerklärung",
    en: "Privacy Policy",
    fa: "سیاست حریم خصوصی",
    ar: "سياسة الخصوصية",
  } satisfies L,
  acceptAll: { de: "Alle akzeptieren", en: "Accept all", fa: "پذیرش همه", ar: "قبول الكل" } satisfies L,
  essentialOnly: { de: "Nur essenzielle", en: "Essential only", fa: "فقط ضروری", ar: "الأساسية فقط" } satisfies L,
  settings: { de: "Einstellungen", en: "Settings", fa: "تنظیمات", ar: "الإعدادات" } satisfies L,
  footerLink: {
    de: "Cookie-Einstellungen",
    en: "Cookie settings",
    fa: "تنظیمات کوکی",
    ar: "إعدادات ملفات تعريف الارتباط",
  } satisfies L,
  dialogTitle: {
    de: "Cookie-Einstellungen",
    en: "Cookie settings",
    fa: "تنظیمات کوکی",
    ar: "إعدادات ملفات تعريف الارتباط",
  } satisfies L,
  dialogText: {
    de: "Wählen Sie, welche Cookies wir verwenden dürfen. Ihre Auswahl können Sie jederzeit ändern.",
    en: "Choose which cookies we may use. You can change your choice at any time.",
    fa: "انتخاب کنید از کدام کوکی‌ها می‌توانیم استفاده کنیم. هر زمان می‌توانید انتخاب خود را تغییر دهید.",
    ar: "اختر ملفات تعريف الارتباط التي يمكننا استخدامها. يمكنك تغيير اختيارك في أي وقت.",
  } satisfies L,
  save: { de: "Auswahl speichern", en: "Save selection", fa: "ذخیره انتخاب", ar: "حفظ الاختيار" } satisfies L,
  close: { de: "Schließen", en: "Close", fa: "بستن", ar: "إغلاق" } satisfies L,
  alwaysOn: { de: "Immer aktiv", en: "Always on", fa: "همیشه فعال", ar: "مفعّلة دائمًا" } satisfies L,
  categories: {
    essential: {
      title: { de: "Essenziell", en: "Essential", fa: "ضروری", ar: "أساسية" } satisfies L,
      text: {
        de: "Notwendig für den Betrieb der Seite, z. B. Sprache, Design und Ihre Cookie-Auswahl.",
        en: "Required for the site to work, e.g. language, theme and your cookie choice.",
        fa: "برای کار کردن سایت لازم است؛ مثلاً زبان، پوسته و انتخاب کوکی شما.",
        ar: "ضرورية لعمل الموقع، مثل اللغة والمظهر واختيارك لملفات تعريف الارتباط.",
      } satisfies L,
    },
    analytics: {
      title: { de: "Analyse", en: "Analytics", fa: "تحلیلی", ar: "التحليلات" } satisfies L,
      text: {
        de: "Hilft uns zu verstehen, wie die Seite genutzt wird (Besucherstatistik).",
        en: "Helps us understand how the site is used (visit statistics).",
        fa: "به ما کمک می‌کند بفهمیم سایت چگونه استفاده می‌شود (آمار بازدید).",
        ar: "تساعدنا على فهم كيفية استخدام الموقع (إحصاءات الزيارات).",
      } satisfies L,
    },
    marketing: {
      title: { de: "Marketing", en: "Marketing", fa: "بازاریابی", ar: "التسويق" } satisfies L,
      text: {
        de: "Misst die Wirksamkeit unserer Werbung.",
        en: "Measures how effective our advertising is.",
        fa: "اثربخشی تبلیغات ما را اندازه‌گیری می‌کند.",
        ar: "تقيس مدى فعالية إعلاناتنا.",
      } satisfies L,
    },
  },
};
