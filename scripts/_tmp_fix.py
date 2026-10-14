#!/usr/bin/env python3
"""Restore the requested German homepage copy. Not part of the app."""
import json
import subprocess
from pathlib import Path

ROOT = Path("/Users/negin-payam/Desktop/EasyWebbuilder/easybuilder")

def must_replace(text: str, old: str, new: str, label: str) -> str:
    if old not in text:
        if new in text:
            print("already", label)
            return text
        raise SystemExit(f"MISSING {label}: {old[:120]!r}")
    return text.replace(old, new, 1)

# --- content.ts ---
p = ROOT / "lib/content.ts"
t = p.read_text()

block_start = t.find("/** Public site origin.")
block_end = t.find("export const BRAND = {")
if "TODO: confirm – 24 Stunden or wenige Tage" in t:
    print("constants already patched")
elif block_start < 0 or block_end < 0:
    raise SystemExit("constant block markers missing")
else:
    t = t[:block_start] + '''/** Public site origin. Also used as Next.js metadataBase. */
export const SITE_URL = "https://easywebbuilder.de";

/**
 * TODO: confirm this mailbox. A draft used info@easywebbuilder.de and
 * datenschutz@easywebbuilder.de — those are not published until confirmed.
 */
export const CONTACT_EMAIL = "hallo@easywebbuilder.de";

/**
 * TODO: hosting provider name and site.
 * Servers are in Germany. A draft named “eigener Server” and a planned move
 * to Hetzner — not published until confirmed.
 */
export const HOSTING_PROVIDER = "Server in Deutschland";

/** TODO: confirm – 24 Stunden or wenige Tage. Single go-live duration for the whole page. */
export const DELIVERY_TIME: L = de("TODO: confirm – 24 Stunden or wenige Tage");

/** TODO: confirm how many hours until a person in Hamburg replies. */
export const HUMAN_RESPONSE: L = de("innerhalb von TODO Stunden");

/** TODO: confirm – business prices are shown excluding VAT. Do not claim § 19 UStG. */
export const VAT_NOTE: L = de("zzgl. MwSt.");

/** Marketing names both channels. A public wa.me link is only rendered when NEXT_PUBLIC_WHATSAPP_NUMBER is set. */
export const WHATSAPP_LIVE = true;

/** TODO: only keep the “Ja” card if prior publish confirmation is implemented. */
export const CHANGE_APPROVAL_IMPLEMENTED = false;

/** TODO: only keep the “Zurück” card if version rollback is implemented. */
export const CHANGE_ROLLBACK_IMPLEMENTED = false;

''' + t[block_end:]

replacements = [
(
'de("Ihre Website per Chat ändern – ohne Agentur, ohne Tickets.")',
'de("Ihre Website per WhatsApp ändern – ohne Agentur, ohne Tickets.")',
"h1",
),
(
"Wir bauen Ihre Website in Hamburg – in 1–2 Tagen online. Danach ändern Sie Preise, Texte, Bilder und Öffnungszeiten mit einer Nachricht per Telegram. WhatsApp folgt bald. Gehostet in Deutschland.",
"Wir bauen Ihre Website in Hamburg. Danach ändern Sie Preise, Texte, Bilder und Öffnungszeiten mit einer einfachen Nachricht – per WhatsApp oder Telegram. Gehostet in Deutschland.",
"subline",
),
(
'{ id: "datenschutz", href: "#datenschutz", label: de("Datenschutz") }',
'{ id: "datenschutz", href: "#datenschutz", label: de("Datenschutz & Sicherheit") }',
"nav",
),
(
'de: "Vergessen Sie komplizierte Dashboards und Agentur-Tickets. Schreiben Sie Ihrer Website auf Telegram – wie einem Mitarbeiter. Der Agent setzt es um. WhatsApp folgt bald.",',
'de: "Vergessen Sie komplizierte Dashboards und Agentur-Tickets. Schreiben Sie Ihrer Website per WhatsApp oder Telegram – wie einem Mitarbeiter. Der Agent setzt es um.",',
"chat subtitle",
),
(
'de: "Ich setze den Preis auf 89 €. Zur Veröffentlichung bitte „Ja“ – rückgängig mit „Zurück“.",',
'de: "Ich setze den Preis auf 89 €.",',
"demo bot1",
),
(
'''    you2: {
      de: "Ja",
      en: "Yes",
      fa: "بله",
      ar: "نعم",
    } satisfies L,''',
'''    you2: {
      de: "Passt.",
      en: "TODO translate",
      fa: "TODO translate",
      ar: "TODO translate",
    } satisfies L,''',
"demo you2",
),
(
'de("Einmalige Erstellung durch unser Team ab 299 €")',
'de(`Einmalige Erstellung durch unser Team ab 299 €. ${VAT_NOTE.de}`)',
"299 vat",
),
(
'"Änderungen per Telegram – einfach per Code verbinden. WhatsApp folgt bald"',
'"Änderungen per WhatsApp oder Telegram – einfach per Code verbinden"',
"feature channel",
),
(
'"Preise, Leistungen, Texte und Bilder per Nachricht ändern – nach Ihrer Bestätigung mit „Ja“"',
'"Preise, Leistungen, Texte und Bilder per Nachricht ändern"',
"feature ja",
),
(
'"Öffnungszeiten, Adresse & Kontakt immer aktuell. Mit „Zurück“ rückgängig machen"',
'"Öffnungszeiten, Adresse & Kontakt immer aktuell"',
"feature undo",
),
(
'de: "Schicken Sie den Code an den easyWebBuilder-Bot auf Telegram – damit ist Ihr Chat mit Ihrem Konto verknüpft. WhatsApp folgt bald.",',
'de: "Schicken Sie den Code an den easyWebBuilder-Bot per WhatsApp oder Telegram – damit ist Ihr Chat mit Ihrem Konto verknüpft.",',
"how connect",
),
(
"`Wir bauen Ihre Website in Hamburg. Lieferzeit: ${DELIVERY_TIME.de}. Danach pflegen Sie Preise, Texte, Bilder und Öffnungszeiten selbst per Telegram. WhatsApp folgt bald.`",
"`Wir bauen Ihre Website in Hamburg. Lieferzeit: ${DELIVERY_TIME.de}. Danach pflegen Sie Preise, Texte, Bilder und Öffnungszeiten selbst per WhatsApp oder Telegram.`",
"how subtitle",
),
(
'''  intro: de(
    "Ihre Website liegt auf unserem Server in Deutschland. Chat-Nachrichten laufen über Telegram und zur Verarbeitung über Sprachmodell-Anbieter – auch außerhalb der EU. Änderungen per Chat sind bequem, aber nicht unkontrolliert.",
  ),''',
'''  intro: de(
    "Ihre Website und Ihre Daten liegen auf Servern in Deutschland. Änderungen per Chat sind bequem – aber nie unkontrolliert.",
  ),''',
"privacy intro",
),
(
'''      text: de(
        `${HOSTING_PROVIDER}. „Gehostet in Deutschland“ bezieht sich auf diesen eigenen Server, nicht auf Telegram oder die Sprachmodell-Anbieter.`,
      ),''',
'''      // TODO: Anbieter/Standort eintragen (HOSTING_PROVIDER).
      text: de("Unsere Server stehen in Deutschland."),''',
"hosting card",
),
(
'''      title: de("Transparente Datenverarbeitung"),
      text: de(
        `Ihre Chat-Nachrichten werden verarbeitet, um Ihre Änderungen umzusetzen und unseren Agenten zu verbessern. Speicherdauer: ${CHAT_RETENTION.de}. Sie können die Löschung jederzeit per E-Mail an ${PRIVACY_EMAIL} verlangen.`,
      ),''',
'''      // TODO: confirm AI provider does not train on chat content.
      title: de("Datensparsamkeit"),
      text: de(
        "Wir speichern nur, was für Ihre Website und Ihre Änderungen nötig ist. Kein Verkauf, keine Weitergabe zu Werbezwecken.",
      ),''',
"datensparsamkeit",
),
(
'''  note: de(
    `Hinweis: Derzeit ist nur Telegram verbunden. Telegram ist ein Dienst Dritter; Nachrichten sind dort standardmäßig nicht Ende-zu-Ende verschlüsselt. Unser Agent „${AGENT_NAME}“ läuft auf unserem Server in Deutschland und nutzt ${LLM_ROUTER.name} (${LLM_ROUTER.country}) als Router zu Sprachmodell-Anbietern, die Nachrichten in unserem Auftrag verarbeiten (${LLM_ROUTER.modelProviders}; AVV und Drittland-Übermittlungsgrundlage: ${LLM_ROUTER.transferMechanism}). WhatsApp ist noch nicht live.`,
  ),''',
'''  note: de(
    "Hinweis: WhatsApp und Telegram sind Dienste Dritter. Bitte senden Sie über den Chat keine sensiblen personenbezogenen Daten Ihrer Kunden.",
  ),''',
"honesty note",
),
(
'de: "Das Chat-Paket ist für kleine Unternehmen, die eine schlanke Präsentationsseite wollen und sie per Telegram selbst pflegen (WhatsApp folgt bald). Brauchen Sie eine professionelle, individuell gestaltete Website mit mehr Funktionen, setzt unser Team Ihr Projekt komplett um – nach einem kostenlosen Beratungsgespräch.",',
'de: "Das Chat-Paket ist für kleine Unternehmen, die eine schlanke Präsentationsseite wollen und sie per WhatsApp oder Telegram selbst pflegen. Brauchen Sie eine professionelle, individuell gestaltete Website mit mehr Funktionen, setzt unser Team Ihr Projekt komplett um – nach einem kostenlosen Beratungsgespräch.",',
"faq package",
),
(
'''    a: de(
      "Ihre eigene Domain registrieren Sie selbst – wir beraten Sie dabei. Die erste Version läuft auf einer Subdomain von easywebbuilder.de.",
    ),''',
'''    // TODO: confirm whether an existing domain can be taken over.
    a: de("Ob und wie eine bestehende Domain übernommen wird, klären wir im Beratungsgespräch."),''',
"faq domain",
),
(
'''    a: de(
      `Lieferzeit: ${DELIVERY_TIME.de}. Danach ändern Sie die Website per Telegram. WhatsApp folgt bald.`,
    ),''',
'''    a: de(`Lieferzeit: ${DELIVERY_TIME.de}.`),''',
"faq delivery",
),
(
'''    a: de(
      `Ihre Website wird auf unserem eigenen Server in Deutschland gehostet (${HOSTING_PROVIDER}). Chat-Nachrichten laufen über Telegram (Dienst Dritter) und zur Verarbeitung über ${LLM_ROUTER.name} (${LLM_ROUTER.country}) an Sprachmodell-Anbieter – auch außerhalb der EU. Wir behaupten nicht, dass Nachrichten Deutschland nicht verlassen. Details stehen in der Datenschutzerklärung.`,
    ),''',
'''    // TODO: hosting provider name. Chat also passes through WhatsApp (Meta) and Telegram.
    a: de(
      "Die Website liegt auf Servern in Deutschland. Chat-Nachrichten laufen zusätzlich über WhatsApp (Meta) bzw. Telegram; deren Datenverarbeitung liegt außerhalb unseres Einflusses. Details stehen in der Datenschutzerklärung.",
    ),''',
"faq storage",
),
(
'''    a: de(
      "Wichtige Änderungen gehen erst nach Ihrer Bestätigung mit „Ja“ live. Mit „Zurück“ machen Sie die letzte Änderung rückgängig. Wenn etwas trotzdem nicht stimmt, hilft ein Mensch aus Hamburg.",
    ),''',
'''    // TODO: only describe version history / „Zurück“ if implemented (CHANGE_ROLLBACK_IMPLEMENTED).
    a: de(
      "Schreiben Sie uns. Ein Mensch aus Hamburg sieht sich die Änderung an. Einen Versionsverlauf bieten wir derzeit nicht an.",
    ),''',
"faq mistake",
),
(
'''    // TODO: Kündigungsfrist 1 Monat – final wording from the contract terms
    a: de("Die Vertragsbedingungen nennen wir Ihnen im Beratungsgespräch."),''',
'''    // TODO: confirm contract terms (monthly cancellable?).
    a: de("Die Vertragsbedingungen, auch zur Kündigung, nennen wir Ihnen im Beratungsgespräch."),''',
"faq cancel",
),
(
'''  tagline: de(
    "Websites für lokale Betriebe in Hamburg. Danach ändern Sie Inhalte per Telegram. WhatsApp folgt bald. Gehostet in Deutschland.",
  ),''',
'''  tagline: de(
    "Websites für lokale Betriebe in Hamburg. Danach ändern Sie Inhalte per WhatsApp oder Telegram. Gehostet in Deutschland.",
  ),''',
"footer",
),
(
'export type SiteKey = "hengameh";',
'export type SiteKey = "hengameh" | "nilou" | "arman" | "zist" | "raha";',
"sitekey",
),
(
'''  subtitle: de(
    "Hengameh Luxe Beauty und Terminpanel sind Live-Projekte – so sehen fertige Seiten und das Buchungspanel in der Praxis aus.",
  ),''',
'''  subtitle: de(
    "Hengameh Luxe Beauty und Terminpanel sind Live-Projekte. Die übrigen Ansichten sind Beispiele und keine Kundenprojekte.",
  ),''',
"showcase sub",
),
]

for old, new, label in replacements:
    t = must_replace(t, old, new, label)

if 'id: "nilou"' not in t:
    anchor = '''    cta: { de: "Ähnliches Panel anfragen", en: "Request a similar panel", fa: "درخواست پنل مشابه", ar: "اطلب لوحة مماثلة" },
  },
];'''
    demos = r'''    cta: { de: "Ähnliches Panel anfragen", en: "Request a similar panel", fa: "درخواست پنل مشابه", ar: "اطلب لوحة مماثلة" },
  },
  {
    id: "nilou",
    category: "store",
    glow: "rgb(224 140 70 / 0.28)",
    name: { de: "Nilou Boutique", en: "Nilou Boutique", fa: "بوتیک نیلو", ar: "بوتيك نيلو" },
    kind: de("Online-Shop für Handwerkskeramik – Beispiel/Demo"),
    url: "nilou.easywebbuilder.de",
    tags: ["#E_Commerce", "#AI_Powered", "#Fast_Load"],
    why: de("Ein mitlaufender Mini-Warenkorb und ein Ein-Seiten-Checkout halten Käufer in Bewegung – weniger Klicks zwischen „In den Warenkorb“ und „Bezahlt“."),
    cta: de("Beispiel ansehen"),
  },
  {
    id: "arman",
    category: "corporate",
    glow: "rgb(27 77 255 / 0.28)",
    name: { de: "Arman Group", en: "Arman Group", fa: "گروه آرمان", ar: "مجموعة أرمان" },
    kind: de("Unternehmenswebsite – Beispiel/Demo"),
    url: "arman-group.easywebbuilder.de",
    tags: ["#AI_Powered", "#Multilingual", "#Fast_Load"],
    why: de("Vertrauenssignale direkt im ersten Blick – Kundenlogos, Kennzahlen und eine klare Aktion: „Angebot anfragen“."),
    cta: de("Beispiel ansehen"),
  },
  {
    id: "zist",
    category: "booking",
    glow: "rgb(31 107 82 / 0.28)",
    name: { de: "Zist Klinik", en: "Zist Clinic", fa: "کلینیک زیست", ar: "عيادة زيست" },
    kind: de("Landingpage mit Terminbuchung – Beispiel/Demo"),
    url: "zist-clinic.easywebbuilder.de",
    tags: ["#Booking", "#AI_Powered", "#Fast_Load"],
    why: de("Das Buchungs-Widget sitzt im Hero – Besucher wählen einen Termin ohne Scrollen und ohne Registrierung."),
    cta: de("Beispiel ansehen"),
  },
  {
    id: "raha",
    category: "portfolio",
    glow: "rgb(255 61 119 / 0.28)",
    name: { de: "Studio Raha", en: "Studio Raha", fa: "استودیو رها", ar: "استوديو رها" },
    kind: de("Kreatives Portfolio – Beispiel/Demo"),
    url: "studio-raha.easywebbuilder.de",
    tags: ["#Portfolio", "#SEO_Ready", "#Fast_Load"],
    why: de("Ein Raster zeigt die Arbeiten, die Sie nach vorn stellen wollen."),
    cta: de("Beispiel ansehen"),
  },
];'''
    t = must_replace(t, anchor, demos, "showcase demos")

if "WhatsApp folgt bald" in t or "LLM_ROUTER" in t or "AGENT_NAME" in t or "PRIVACY_EMAIL" in t or "CHAT_RETENTION" in t or "OPERATOR" in t:
    raise SystemExit("content.ts still references removed or forbidden phrases")

p.write_text(t)
print("content.ts ok")

# --- hero buttons: only the two CTAs ---
hero = ROOT / "components/site/sections/hero.tsx"
ht = hero.read_text()
ht = ht.replace('import { TelegramIcon } from "@/components/site/ui/social-icons";\n', "")
ht = ht.replace('import { getTelegramUrl } from "@/lib/chat-links";\n', "")
old_btns = '''            <LinkButton href="#contact" arrow size="lg">
              {t(HERO.primaryCta)}
            </LinkButton>
            <LinkButton
              href={getTelegramUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <TelegramIcon className="size-[18px] text-[#229ED9]" />
              {t(HERO.telegramCta)}
            </LinkButton>
            <span className="inline-flex h-[52px] items-center rounded-full border border-dashed border-line-2 bg-surface px-3.5 text-sm font-semibold text-muted-2">
              {t(HERO.whatsappSoon)}
            </span>
            <LinkButton href="#chat" variant="outline" size="lg">
              {t(HERO.secondaryCta)}
            </LinkButton>'''
new_btns = '''            <LinkButton href="#contact" arrow size="lg">
              {t(HERO.primaryCta)}
            </LinkButton>
            <LinkButton href="#chat" variant="outline" size="lg">
              {t(HERO.secondaryCta)}
            </LinkButton>'''
ht = must_replace(ht, old_btns, new_btns, "hero buttons")
hero.write_text(ht)
print("hero ok")

# --- chat links: no fake WhatsApp number ---
links = ROOT / "lib/chat-links.ts"
lt = links.read_text()
lt = must_replace(
    lt,
    "/** WhatsApp is not live. Do not render a wa.me link until this is true. */\nexport const WHATSAPP_LIVE = false;\n\nexport function getWhatsAppUrl(prefill?: string): string {\n  const number = digitsOnly(\n    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '491701234567'\n  );",
    """/** TODO: set NEXT_PUBLIC_WHATSAPP_NUMBER before rendering a wa.me link. */
export function getWhatsAppUrl(prefill?: string): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!raw) return null;
  const number = digitsOnly(raw);""",
    "whatsapp url",
)
links.write_text(lt)
print("chat-links ok")

# --- chat section shows both channels, link only with a real number ---
chat = ROOT / "components/site/sections/chat-edit.tsx"
ct = chat.read_text()
if "const whatsappUrl" in ct and "WHATSAPP_LIVE" not in ct:
    print("chat-edit already patched")
    ct = None
if ct is not None:
    ct = ct.replace(
    'import { BRAND_LOGO, CHAT_EDIT, HERO, SIGNUP_URL, WHATSAPP_LIVE } from "@/lib/content";',
    'import { BRAND_LOGO, CHAT_EDIT, SIGNUP_URL } from "@/lib/content";',
)
if ct is not None and "const whatsappUrl" not in ct:
    ct = ct.replace(
        "export function ChatEdit() {\n  const { t } = useLanguage();\n  return (",
        "export function ChatEdit() {\n  const { t } = useLanguage();\n  const whatsappUrl = getWhatsAppUrl(t(CHAT_EDIT.whatsappPrefill));\n  return (",
    )
if ct is None:
    old_pills_start = 0
else:
    old_pills_start = ct.find('<div className="mt-6 flex flex-wrap items-center gap-2.5">')
old_pills_end = ct.find("</div>", old_pills_start)
if ct is not None and old_pills_start < 0:
    raise SystemExit("chat pills missing")
# replace through the closing div of that flex container (first </div> may be inside). Use a unique end.
end_marker = "          </Reveal>"
end_at = ct.find(end_marker, old_pills_start) if ct is not None else 0
if ct is not None and end_at < 0:
    raise SystemExit("chat reveal end missing")
new_pills = '''<div className="mt-6 flex flex-wrap items-center gap-2.5">
              <ChannelPill href={getTelegramUrl()} label={t(CHAT_EDIT.telegram)}>
                <TelegramIcon className="size-[18px] text-[#229ED9]" />
                Telegram
              </ChannelPill>
              {whatsappUrl ? (
                <ChannelPill href={whatsappUrl} label={t(CHAT_EDIT.whatsapp)}>
                  <MessageCircle className="size-[18px] text-[#25D366]" aria-hidden />
                  WhatsApp
                </ChannelPill>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-surface px-3.5 py-1.5 text-sm font-semibold text-ink">
                  <MessageCircle className="size-[18px] text-[#25D366]" aria-hidden />
                  WhatsApp
                </span>
              )}
            </div>
          '''
if ct is not None:
    ct = ct[:old_pills_start] + new_pills + ct[end_at:]
    chat.write_text(ct)
    print("chat-edit ok")

# --- demo sites restored and translated ---
sites = subprocess.check_output(
    ["git", "show", "HEAD:components/site/sites/sites.tsx"], cwd=ROOT, text=True
)
site_repls = [
('export type SiteId = "hengameh" | "nilou" | "arman" | "zist" | "raha";',
 'export type SiteId = "hengameh" | "nilou" | "arman" | "zist" | "raha";'),
("{ n: \"Sand Vase\", p: \"$48\"", "{ n: \"Sandvase\", p: \"48 €\""),
("{ n: \"Olive Bowl\", p: \"$32\"", "{ n: \"Olivenschale\", p: \"32 €\""),
("{ n: \"Terra Cup Set\", p: \"$56\"", "{ n: \"Tassen-Set\", p: \"56 €\""),
("{ n: \"Linen Plate\", p: \"$28\"", "{ n: \"Leinenteller\", p: \"28 €\""),
("<span>Shop</span>", "<span>Shop</span>"),
("<span>Collections</span>", "<span>Kollektionen</span>"),
("<span>Story</span>", "<span>Geschichte</span>"),
("Cart · 2", "Warenkorb · 2"),
("New · Spring ’26", "Neu · Frühjahr ’26"),
("""            Handmade
            <br />
            ceramics, <span className="text-[#c0652d]">delivered</span> to your
            door""",
"""            Handgemachte
            <br />
            Keramik, <span className="text-[#c0652d]">geliefert</span> bis vor die
            Tür"""),
("""            Small-batch pieces shaped by hand in Isfahan and shipped worldwide
            in 3 days.""",
"            Kleine Serien, von Hand geformt und in 3 Tagen geliefert."),
("Shop now", "Jetzt einkaufen"),
("Our story", "Unsere Geschichte"),
(">pieces", ">Stück"),
(">reviews", ">Bewertungen"),
("Free shipping over $60", "Versandkostenfrei ab 60 €"),
('{["Vases", "Bowls", "Cups", "Plates", "Gift sets", "Sale"].map((c) => (',
 '{["Vasen", "Schalen", "Tassen", "Teller", "Geschenksets", "Sale"].map((c) => ('),
("Bestsellers this month", "Bestseller diesen Monat"),
("Join the Clay Club", "Zum Ton-Club"),
("10% off your first order and early access to every drop.",
 "10 % auf die erste Bestellung und früher Zugriff auf neue Serien."),
("            Join\n", "            Mitmachen\n"),
("<span>Services</span>", "<span>Leistungen</span>"),
("<span>Industries</span>", "<span>Branchen</span>"),
("<span>About</span>", "<span>Über uns</span>"),
("<span>Careers</span>", "<span>Karriere</span>"),
("Request a quote", "Angebot anfragen"),
("Logistics & supply chain · Since 2004", "Logistik & Lieferkette · seit 2004"),
("Engineering the next decade of logistics", "Logistik für das nächste Jahrzehnt"),
("""            One partner for freight, warehousing and last-mile delivery — across
          40 countries.""",
"            Ein Partner für Fracht, Lager und Zustellung – ein Beispiel, keine Kundenangabe."),
("Get a quote", "Angebot holen"),
("Our services", "Unsere Leistungen"),
('["40+", "countries"]', '["40+", "Länder"]'),
('["1.2M", "shipments / yr"]', '["1,2 Mio.", "Sendungen / Jahr"]'),
('["99.2%", "on-time rate"]', '["99,2 %", "pünktlich"]'),
('["18 yrs", "of experience"]', '["18 Jahre", "Erfahrung"]'),
("What we do", "Was wir tun"),
('"Freight forwarding"', '"Spedition"'),
('"Smart warehousing"', '"Lager"'),
('"Last-mile delivery"', '"Zustellung"'),
("Ready to move faster?", "Bereit für den nächsten Schritt?"),
("Talk to us", "Sprechen Sie mit uns"),
("<span>Doctors</span>", "<span>Ärztinnen</span>"),
("<span>Programs</span>", "<span>Programme</span>"),
("<span>Prices</span>", "<span>Preise</span>"),
("<span>Contacts</span>", "<span>Kontakt</span>"),
("Book online", "Online buchen"),
("Appointments open today", "Heute Termine frei"),
("Doctors who", "Ärztinnen, die Sie"),
("understand you", "verstehen"),
("""            Check-ups, specialists and diagnostics in one calm place — book in
            30 seconds, no phone calls.""",
"            Vorsorge, Fachärzte und Diagnostik an einem Ort – ein Beispiel."),
("Pick a time", "Zeit wählen"),
('{["Mon 8", "Tue 9", "Wed 10", "Thu 11", "Fri 12"].map((d, i) => (',
 '{["Mo 8", "Di 9", "Mi 10", "Do 11", "Fr 12"].map((d, i) => ('),
("Confirm booking", "Termin bestätigen"),
("★ 4.9 · 2,300 reviews", "★ 4,9 · 2.300 Bewertungen"),
("Our specialists", "Unsere Fachärzte"),
('{["Cardiology", "Therapy", "Neurology", "Pediatrics"].map((s, i) => (',
 '{["Kardiologie", "Therapie", "Neurologie", "Pädiatrie"].map((s, i) => ('),
("Next slot · tomorrow", "Nächster Termin · morgen"),
("Check-up programs", "Vorsorgeprogramme"),
('"Basic · 12 tests"', '"Basis · 12 Werte"'),
('"Extended · 28 tests"', '"Erweitert · 28 Werte"'),
('"Executive · 46 tests"', '"Umfassend · 46 Werte"'),
("${[59, 119, 249][i]}", "{[59, 119, 249][i]} €"),
("<span>Work</span>", "<span>Arbeiten</span>"),
("<span>Studio</span>", "<span>Studio</span>"),
("Let’s talk", "Sprechen wir"),
("Brand & motion · Tehran / Berlin", "Marke & Motion · Beispiel"),
("We make", "Wir bringen"),
("Selected work 2022 — 2026", "Ausgewählte Arbeiten 2022 — 2026"),
("Project 0", "Projekt 0"),
("Small studio. Big ideas. Zero templates.", "Kleines Studio. Große Ideen. Ein Beispiel."),
("Start a project", "Projekt starten"),
]
for old, new in site_repls:
    if old not in sites and old != new:
        raise SystemExit(f"sites missing: {old[:80]!r}")
    sites = sites.replace(old, new, 1)
if "$" in sites.split("function Nilou")[1] if "function Nilou" in sites else "":
    pass
(ROOT / "components/site/sites/sites.tsx").write_text(sites)
print("sites ok")

# --- locale JSON: do not publish unconfirmed identity ---
de_path = ROOT / "messages/de.json"
de = json.loads(de_path.read_text())
de["meta"]["title"] = "Website per WhatsApp ändern | Webdesign Hamburg"
de["meta"]["description"] = (
    "Website per WhatsApp ändern: Wir bauen Ihre Website in Hamburg. "
    "Danach ändern Sie Preise, Texte, Bilder und Öffnungszeiten per WhatsApp oder Telegram. "
    "Webdesign Hamburg, gehostet in Deutschland."
)
imp = de["impressum"]
imp["nameValue"] = "TODO: vollständiger Name des Anbieters"
imp["legalFormValue"] = "TODO: Rechtsform"
imp["addressValue"] = "TODO: Straße und Hausnummer\nTODO: Postleitzahl Hamburg\nDeutschland"
imp["emailValue"] = "hallo@easywebbuilder.de\nTODO: bestätigen, dass dies die richtige Adresse ist"
imp["phoneValue"] = "TODO: Telefonnummer"
imp["register"] = "Registereintrag, falls vorhanden"
imp["registerValue"] = "TODO: Registergericht und Registernummer. Falls kein Eintrag besteht, diese Angabe entfernen."
imp["vatValue"] = "TODO: USt-IdNr. gemäß § 27a UStG, falls vorhanden. Preise auf der Website: zzgl. MwSt. (TODO: bestätigen)."
imp["responsibleValue"] = "TODO: Name und ladungsfähige Anschrift"
ds = de["datenschutz"]
ds["controllerDraftText"] = (
    "TODO: Name und Rechtsform\nTODO: ladungsfähige Anschrift in Hamburg\n"
    "E-Mail: hallo@easywebbuilder.de (TODO: Adresse bestätigen)"
)
ds["hostingText"] = (
    "Die Website wird auf Servern in Deutschland betrieben.\nTODO: Name und Standort des Hosting-Anbieters."
)
ds["processorsText"] = (
    "Empfänger, soweit bekannt:\n"
    "• Hosting-Anbieter: TODO Name. Die Server stehen in Deutschland.\n"
    "• WhatsApp (Meta) und Telegram, wenn der Chat genutzt wird. Deren Verarbeitung liegt außerhalb unseres Einflusses.\n"
    "• Sprachmodell-Anbieter: TODO Name, Sitz, Vertrag zur Auftragsverarbeitung, und falls außerhalb der EU: Drittlandübermittlung und Standardvertragsklauseln."
)
ds["transferText"] = (
    "TODO: ob Chat- oder Modell-Verarbeitung die EU verlässt. Falls ja: Land, Empfänger und Übermittlungsgrundlage (zum Beispiel Standardvertragsklauseln). Das wird hier nicht als bestehend dargestellt."
)
ds["accountText"] = (
    "Das Kundenportal kann eine Anmeldung über WhatsApp oder Telegram anbieten.\n"
    "TODO: Standort der Anwendungs-API und die Speicherdauer der Kontodaten. Die Website-Server stehen in Deutschland; der Standort der API ist damit nicht automatisch gleich."
)
ds["chatTitle"] = "Chat über WhatsApp und Telegram"
ds["chatText"] = (
    "Wenn Sie den Agenten per WhatsApp oder Telegram nutzen, verarbeiten Meta (WhatsApp) bzw. Telegram die Nachrichten als eigene Dienste. "
    "Diese Verarbeitung liegt außerhalb unseres Einflusses und kann eine Übermittlung in Drittländer einschließen. "
    "Bitte senden Sie darüber keine sensiblen personenbezogenen Daten Ihrer Kunden.\n"
    "TODO: ob mit Meta oder Telegram ein Vertrag zur Auftragsverarbeitung oder Standardvertragsklauseln bestehen. Das sagen wir nicht zu."
)
ds["aiTitle"] = "KI-Dienst als Auftragsverarbeiter"
ds["aiText"] = (
    "Änderungen können über einen Sprachmodell-Dienst verarbeitet werden.\n"
    "TODO: Name des Anbieters, Sitz und Land, Vertrag zur Auftragsverarbeitung, und falls der Anbieter außerhalb der EU sitzt: Drittlandübermittlung und Standardvertragsklauseln. "
    "TODO: bestätigen, dass der Anbieter Chat-Inhalte nicht zum Training verwendet."
)
ds["legalBasisText"] = (
    "Art. 6 Abs. 1 lit. b DSGVO: Vertrag und vorvertragliche Anfrage (Kontakt, Konto, Betrieb Ihrer Website, Chat-Änderungen).\n"
    "Art. 6 Abs. 1 lit. a DSGVO: Einwilligung im Kontaktformular. Sie ist nicht vorausgewählt und nicht mit Werbung verbunden.\n"
    "Art. 6 Abs. 1 lit. f DSGVO: berechtigtes Interesse an einem sicheren technischen Betrieb, soweit Server-Logfiles anfallen.\n"
    "TODO: die Interessenabwägung dokumentieren. TODO: ob Chat-Inhalte gespeichert werden und ob ein Sprachmodell sie zum Training nutzt. TODO: rechtliche Prüfung."
)
ds["retentionDraftText"] = (
    "TODO: Speicherdauer je Vorgang festlegen (Kontaktformular, Konto, Server-Logfiles, Chat)."
)
ds["rightsDraftText"] = (
    "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. "
    "Eine erteilte Einwilligung können Sie mit Wirkung für die Zukunft widerrufen. Außerdem haben Sie ein Beschwerderecht bei einer Aufsichtsbehörde.\n"
    "TODO: E-Mail-Adresse, an die Löschverlangen gehen (vorgesehen: hallo@easywebbuilder.de, noch bestätigen)."
)
ds["dpoText"] = (
    "TODO: E-Mail für Datenschutzanfragen bestätigen (vorgesehen: hallo@easywebbuilder.de).\n"
    "Ein Datenschutzbeauftragter ist hier nicht benannt, weil nicht feststeht, ob einer bestellt ist."
)
de_path.write_text(json.dumps(de, ensure_ascii=False, indent=2) + "\n")

# other locales: do not keep the unconfirmed identity strings
identity_keys = {
    "impressum": ["nameValue", "legalFormValue", "addressValue", "emailValue", "registerValue", "vatValue", "responsibleValue"],
    "datenschutz": ["controllerDraftText", "hostingText", "processorsText", "transferText", "accountText", "chatTitle", "chatText", "aiTitle", "aiText", "legalBasisText", "retentionDraftText", "rightsDraftText", "dpoText"],
}
for loc in ("en", "fa", "ar"):
    path = ROOT / "messages" / f"{loc}.json"
    data = json.loads(path.read_text())
    data.setdefault("meta", {})
    data["meta"]["title"] = "TODO translate"
    data["meta"]["description"] = "TODO translate"
    for section, keys in identity_keys.items():
        data.setdefault(section, {})
        for key in keys:
            data[section][key] = "TODO translate"
    # fill any new de keys
    def merge(src, dst):
        for k, v in src.items():
            if isinstance(v, dict):
                dst.setdefault(k, {})
                merge(v, dst[k])
            elif k not in dst:
                dst[k] = "TODO translate"
    merge(de, data)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
print("messages ok")

layout = ROOT / "app/[locale]/layout.tsx"
ltxt = layout.read_text()
ltxt = must_replace(
    ltxt,
    "['Website per Chat ändern', 'Webdesign Hamburg', 'easyWebBuilder', 'Telegram Website', 'Website per Telegram ändern']",
    "['Website per WhatsApp ändern', 'Webdesign Hamburg', 'easyWebBuilder', 'WhatsApp Website', 'Website per Telegram ändern']",
    "keywords",
)
if "TODO: street" not in ltxt:
    ltxt = ltxt.replace(
        "    address: {\n      '@type': 'PostalAddress',\n      addressLocality: 'Hamburg',\n      addressCountry: 'DE',\n    },",
        "    // TODO: street and postal code. Do not invent a street address.\n    address: {\n      '@type': 'PostalAddress',\n      addressLocality: 'Hamburg',\n      addressCountry: 'DE',\n    },",
    )
layout.write_text(ltxt)
print("layout ok")

env = ROOT / ".env.example"
env.write_text(
    """NEXT_PUBLIC_API_URL=http://localhost:3000
# TODO: confirm the real WhatsApp number before a public wa.me link is shown.
# NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_TELEGRAM_BOT=easywebbuilder_bot
NEXT_PUBLIC_SIGNUP_URL=/login
# No analytics script is loaded. A self-hosted tool would be a later decision.
# NEXT_PUBLIC_UMAMI_SCRIPT_URL=
# NEXT_PUBLIC_UMAMI_WEBSITE_ID=
"""
)
print("done")
