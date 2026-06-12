import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nqothaka Group Real Estate",
  description:
    "Premium residential, commercial, and investment properties from Nqothaka Group Real Estate.",
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
