"use client";

import { useLocaleContext } from "@/context/locale-context";

type Props = {
  className?: string;
  compact?: boolean;
};

export function LanguageToggle({ className = "", compact = false }: Props) {
  const { locale, setLocale, t } = useLocaleContext();

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-border bg-surface p-1 ${compact ? "" : "min-h-11"} ${className}`}
      role="group"
      aria-label={t.footer.langLabel}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded-md font-medium transition-colors ${
          compact ? "px-2 py-1 text-xs" : "px-2.5 py-1.5 text-xs sm:text-sm"
        } ${locale === "en" ? "bg-accent text-white" : "text-muted hover:text-foreground"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("bg")}
        className={`rounded-md font-medium transition-colors ${
          compact ? "px-2 py-1 text-xs" : "px-2.5 py-1.5 text-xs sm:text-sm"
        } ${locale === "bg" ? "bg-accent text-white" : "text-muted hover:text-foreground"}`}
      >
        BG
      </button>
    </div>
  );
}
