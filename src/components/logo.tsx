"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";

const LOGO_SRC = "/Untitled_design-removebg-preview.png";

/** % clipped from the right when collapsed — between ~71 (word peeks) and ~80 (mark clipped); ~76 is the sweet spot. */
const CLIP_RIGHT_COLLAPSED_PCT = 76;

/**
 * Max height per breakpoint matches `SiteHeader` min-height − vertical padding (`py-1`),
 * so the bar does not grow when the logo is enlarged.
 */
export function Logo() {
  const reduceMotion = useReducedMotion();
  const [useFallback, setUseFallback] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      setCompact((was) => {
        // Wide band avoids rubber-band / micro-scroll toggling (felt like “fade, pause, fade”).
        if (was && y < 36) return false;
        if (!was && y > 96) return true;
        return was;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduceMotion]);

  if (useFallback) {
    return (
      <Link
        href="/"
        className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent sm:text-base"
      >
        FutureMadeAI
      </Link>
    );
  }

  const collapse = !reduceMotion && compact;

  const clipRight = collapse ? CLIP_RIGHT_COLLAPSED_PCT : 0;
  const clipPath = `inset(0 ${clipRight}% 0 0)`;

  return (
    <Link href="/" className="flex shrink-0 items-center transition-opacity hover:opacity-90">
      {/* Only animate clip-path; mixing min()/vw max-width transitions caused stutter and mid-word “stops”. */}
      <span className="block max-w-[min(92vw,36rem)] leading-none">
        {/* eslint-disable-next-line @next/next/no-img-element -- intentional: graceful missing-file fallback */}
        <img
          src={LOGO_SRC}
          alt="FutureMadeAI"
          width={400}
          height={110}
          style={{
            clipPath,
            WebkitClipPath: clipPath,
          }}
          className={`block h-16 w-auto max-w-full object-contain object-left sm:h-[4.25rem] md:h-[4.75rem] lg:h-24 ${
            reduceMotion
              ? ""
              : "transition-[clip-path,-webkit-clip-path] duration-[1400ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
          }`}
          onError={() => setUseFallback(true)}
        />
      </span>
    </Link>
  );
}
