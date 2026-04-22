"use client";

import { useState } from "react";
import Link from "next/link";

const LOGO_SRC = "/logoFutureMadeAI-removebg-preview.png";

/**
 * Max height per breakpoint matches `SiteHeader` min-height − vertical padding (`py-1`),
 * so the bar does not grow when the logo is enlarged.
 */
export function Logo() {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <Link
        href="/"
        className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent sm:text-base"
      >
        Futuremade
      </Link>
    );
  }

  return (
    <Link href="/" className="flex shrink-0 items-center transition-opacity hover:opacity-90">
      {/* eslint-disable-next-line @next/next/no-img-element -- intentional: graceful missing-file fallback */}
      <img
        src={LOGO_SRC}
        alt="Futuremade"
        width={400}
        height={110}
        className="h-16 w-auto max-w-[min(92vw,22rem)] object-contain object-left sm:h-[4.25rem] sm:max-w-[min(92vw,26rem)] md:h-[4.75rem] md:max-w-[min(92vw,30rem)] lg:h-24 lg:max-w-[36rem]"
        onError={() => setUseFallback(true)}
      />
    </Link>
  );
}
