import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
  title: "Dev Code",
};

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className="bg-gray-900">{children}</body>
    </html>
  );
}
