"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocaleContext } from "@/context/locale-context";
import { inquiryEn } from "@/i18n/inquiry-en";
import { inquiryBg } from "@/i18n/inquiry-bg";
import { InquiryForm } from "./inquiry-form";

export function InquiryShell() {
  const { locale } = useLocaleContext();
  const inq = locale === "bg" ? inquiryBg : inquiryEn;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-3xl items-center px-4 sm:h-16 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            {inq.back}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{inq.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{inq.lead}</p>

        <InquiryForm />
      </main>
    </div>
  );
}
