import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: "Property for Sale in Johannesburg | Nqothaka Group Real Estate",
    template: "%s",
  },
  description: seoConfig.defaultDescription,
  openGraph: {
    siteName: seoConfig.siteName,
    title: "Property for Sale in Johannesburg | Nqothaka Group Real Estate",
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    type: "website",
    images: [
      {
        url: seoConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Modern Johannesburg property interior from Nqothaka Group Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property for Sale in Johannesburg | Nqothaka Group Real Estate",
    description: seoConfig.defaultDescription,
    images: [seoConfig.socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
