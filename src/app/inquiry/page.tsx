import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { InquiryForm } from "./inquiry-form";

export const metadata: Metadata = {
  title: "Inquiry",
  description: "Tell us about your project and we will follow up.",
};

export default function InquiryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-3xl items-center px-4 sm:h-16 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Project inquiry
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Frontend-only for now: submit shows a confirmation on this page. Wire
          your API or form provider when you are ready.
        </p>

        <InquiryForm />
      </main>
    </div>
  );
}
