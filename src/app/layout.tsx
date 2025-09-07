import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const dmSans = localFont({
  src: "./fonts/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-DMSans",
});

const dmSansItalic = localFont({
  src: "./fonts/DMSans-Italic-VariableFont_opsz,wght.ttf",
  variable: "--font-DMSansItalic",
});

export const metadata: Metadata = {
  title: "Bento Grid",
  description: "Frontend Mentor: Bento Grid challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSansItalic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
