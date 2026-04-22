import type { Locale, MarketingCopy } from "./types";
import { en } from "./en";
import { bg } from "./bg";

export type { Locale, MarketingCopy } from "./types";

export const marketing: Record<Locale, MarketingCopy> = {
  en,
  bg,
};
