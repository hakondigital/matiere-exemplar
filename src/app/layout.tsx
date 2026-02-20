import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matiere.com.au"),
  title: "Matiere | Precision Carpentry & Handyman — Balgowlah, Sydney",
  description:
    "High-quality carpentry and handyman services in Balgowlah, Northern Beaches, and greater Sydney. Custom cabinetry, renovations, decking, and repairs by Sebastien — blending European craftsmanship with Australian practicality.",
  keywords: [
    "carpenter Balgowlah",
    "Northern Beaches carpentry",
    "Sydney handyman",
    "custom cabinetry Sydney",
    "carpenter Northern Beaches",
    "Matiere carpentry",
    "Balgowlah handyman",
    "renovation carpentry Sydney",
    "timber decking Northern Beaches",
  ],
  authors: [{ name: "Matiere" }],
  openGraph: {
    title: "Matiere | Precision Carpentry & Handyman — Balgowlah, Sydney",
    description:
      "High-quality carpentry and handyman services in Balgowlah, Northern Beaches, and greater Sydney. Custom cabinetry, renovations, decking, and repairs.",
    url: "https://matiere.com.au",
    siteName: "Matiere",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matiere — Precision Carpentry & Handyman, Balgowlah Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matiere | Precision Carpentry & Handyman — Balgowlah, Sydney",
    description:
      "High-quality carpentry and handyman services in Balgowlah, Northern Beaches, and greater Sydney.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSerif.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
