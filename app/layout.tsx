import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rgcm.org"),

  title: {
    default: "Reconcilers Grace Covenant Ministries",
    template: "%s | RGCM",
  },

  description:
    "Reconciling Lives Through the Grace of Christ.",

  keywords: [
    "RGCM",
    "Church",
    "Christian",
    "Bible",
    "Grace",
    "Jesus Christ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-white text-gray-900 antialiased">

        <Navbar />

        <main>{children}</main>

      </body>
    </html>
  );
}