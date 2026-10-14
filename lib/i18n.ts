export type Lang = "de" | "en" | "fa" | "ar";

export const LANGS: Lang[] = ["de", "en", "fa", "ar"];

/** A localized string (one entry per language). */
export type L = Record<Lang, string>;
/** A localized list of strings. */
export type LList = Record<Lang, string[]>;

/** Placeholder for locales that are not translated yet. Never use for German. */
export const TODO_TRANSLATE = "TODO translate";

/** German-first copy. EN / FA / AR stay as TODO until a translator fills them in. */
export function de(text: string): L {
  return { de: text, en: TODO_TRANSLATE, fa: TODO_TRANSLATE, ar: TODO_TRANSLATE };
}

export function deList(items: string[]): LList {
  const todo = items.map(() => TODO_TRANSLATE);
  return { de: items, en: todo, fa: todo, ar: todo };
}

export const DEFAULT_LANG: Lang = "de";
export const LANG_STORAGE_KEY = "ewb-lang";

export const isLang = (v: unknown): v is Lang => v === "de" || v === "en" || v === "fa" || v === "ar";

export const dirOf = (lang: Lang) => (lang === "fa" || lang === "ar" ? "rtl" : "ltr");

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
/** Converts latin digits to Persian digits. */
export const toFaDigits = (value: string | number) =>
  String(value).replace(/\d/g, (d) => FA_DIGITS[Number(d)]);

export const formatNumber = (value: number, lang: Lang) =>
  lang === "fa" ? toFaDigits(value) : String(value);

/** Zero-pads a counter ("1" → "01"), using the right zero for the language. */
export const pad2 = (value: number, lang: Lang) =>
  formatNumber(value, lang).padStart(2, lang === "fa" ? "۰" : "0");
