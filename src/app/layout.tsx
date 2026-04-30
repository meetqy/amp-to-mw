import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title:
    "Amps to Watts Calculator (AC & DC) – Convert Current to Power Instantly",
  description:
    "Free online Amps to Watts calculator. Convert amps to watts for DC, single-phase, and three-phase AC circuits. Supports voltage and power factor inputs with instant results.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${geist.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
