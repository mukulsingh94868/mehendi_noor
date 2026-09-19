import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://mehndinoor.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mehndi Noor | Elegant Mehndi Artistry",
  description:
    "Elegant bridal, Arabic, Rajasthani and customized mehndi artistry for weddings and celebrations.",
  keywords: [
    "mehndi artist",
    "bridal mehndi",
    "henna artist",
    "Arabic mehndi",
    "Rajasthani mehndi",
    "wedding mehndi",
    "mehndi designs",
  ],
  authors: [{ name: "Mehndi Noor" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mehndi Noor | Elegant Mehndi Artistry",
    description:
      "Elegant bridal, Arabic, Rajasthani and customized mehndi artistry for weddings and celebrations.",
    siteName: "Mehndi Noor",
    images: [
      {
        url: "/images/hero-main.svg",
        width: 1200,
        height: 1500,
        alt: "Elegant mehndi artistry by Mehndi Noor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehndi Noor | Elegant Mehndi Artistry",
    description:
      "Elegant bridal, Arabic, Rajasthani and customized mehndi artistry for weddings and celebrations.",
    images: ["/images/hero-main.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#344C3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
