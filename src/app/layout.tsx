import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Futuremade AI",
    template: "%s · Futuremade AI",
  },
  description:
    "AI systems and automation for teams that outgrow manual workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body
        className={`${inter.className} min-h-full flex flex-col font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
