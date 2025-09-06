import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundDecor from "@/components/BackgroundDecor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Ali Bouzir — Portfolio",
  description:
    "Data-Oriented Software Engineer portfolio: Data Science & AI, ML Research, Development, and MLOps.",
  metadataBase: new URL("https://example.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Mohamed Ali Bouzir — Portfolio",
    description:
      "Explore projects across Data Science, ML Research, Software Development, and MLOps.",
    url: "/",
    siteName: "Portfolio — Mohamed Ali",
    images: [
      { url: "/next.svg", width: 1200, height: 630, alt: "Portfolio Cover" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ali Bouzir — Portfolio",
    description:
      "Explore projects across Data Science, ML Research, Software Development, and MLOps.",
    images: ["/next.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        <BackgroundDecor />
        {children}
      </body>
    </html>
  );
}
