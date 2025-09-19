import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BackgroundDecor from "@/components/BackgroundDecor";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedalibouzir.com"),
  title: {
    default: "Mohamed Ali Bouzir · Data Product Engineer",
    template: "%s · Mohamed Ali Bouzir",
  },
  description:
    "Data product engineer turning machine learning, analytics, and software craft into measurable business wins.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Mohamed Ali Bouzir · Data Product Engineer",
    description:
      "Explore ML platforms, research prototypes, and full-stack launches with production-grade rigor.",
    url: "/",
    siteName: "Mohamed Ali Bouzir Portfolio",
    images: [
      {
        url: "/images/Dali.jpeg",
        width: 1200,
        height: 1200,
        alt: "Portrait of Mohamed Ali Bouzir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ali Bouzir · Data Product Engineer",
    description:
      "Explore ML platforms, research prototypes, and full-stack launches with production-grade rigor.",
    images: ["/images/Dali.jpeg"],
    creator: "@medalibouzir1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        <BackgroundDecor />
        {children}
      </body>
    </html>
  );
}
