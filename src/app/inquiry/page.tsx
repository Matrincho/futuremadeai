import type { Metadata } from "next";
import { InquiryShell } from "./inquiry-shell";

export const metadata: Metadata = {
  title: "Inquiry",
  description: "Tell us about your project and we will follow up.",
};

export default function InquiryPage() {
  return <InquiryShell />;
}
