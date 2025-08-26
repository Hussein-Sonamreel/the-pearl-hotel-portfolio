// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'] 
});

// Replace your old metadata object with this one.
// This tells all browsers and devices where to find the correct icon.
export const metadata: Metadata = {
  title: "The Pearl Boutique Hotel",
  description: "Experience Tranquility, Redefined.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    // The manifest file connects to the Android icons.
    // manifest: "/site.webmanifest", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}