import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const dmSans = localFont({
  src: "./fonts/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-DMSans",
});

export const dmSansItalic = localFont({
  src: "./fonts/DMSans-Italic-VariableFont_opsz,wght.ttf",
  variable: "--font-DMSansItalic",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSansItalic.variable}`}>
      <title>Bento Grid</title>
      <body>{children}</body>
    </html>
  );
}
