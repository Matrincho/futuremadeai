"use client";

import type { ReactNode } from "react";
import { LocaleProvider } from "@/context/locale-context";

export function Providers({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
