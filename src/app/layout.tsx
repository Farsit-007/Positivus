import type { Metadata } from "next";
import {  Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/Providers/Providers";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Positivus",
  description: "A creative modern landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} font-spaceGrotesk antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
