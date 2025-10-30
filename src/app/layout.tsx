import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://dali-eight.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BOUZIR Mohamed Ali — AI, Data Science & Back-End Engineer",
    template: "%s | BOUZIR Mohamed Ali",
  },
  description: "AI, Data Science & Back-End—shipping scalable, data-driven products end-to-end.",
  keywords: [
    "BOUZIR Mohamed Ali",
    "Data-Oriented Computer Engineer",
    "Machine Learning",
    "Data Science",
    "Backend Engineering",
    "MLOps",
    "Full-Stack Web",
  ],
  category: "technology",
  authors: [{ name: "BOUZIR Mohamed Ali", url: siteUrl }],
  creator: "BOUZIR Mohamed Ali",
  publisher: "BOUZIR Mohamed Ali",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "BOUZIR Mohamed Ali Portfolio",
    title: "BOUZIR Mohamed Ali — AI, Data Science & Back-End Engineer",
    description: "AI, Data Science & Back-End—shipping scalable, data-driven products end-to-end.",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/images/Dali.jpeg`,
        width: 1200,
        height: 1200,
        alt: "Portrait of Mohamed Ali Bouzir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@medalibouzir1",
    site: "@medalibouzir1",
    title: "BOUZIR Mohamed Ali — AI, Data Science & Back-End Engineer",
    description: "AI, Data Science & Back-End—shipping scalable, data-driven products end-to-end.",
    images: [`${siteUrl}/images/Dali.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      notranslate: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c12" },
  ],
};

const themeInitScript = `
(function () {
  const storageKey = "dali-theme";
  const root = document.documentElement;
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  let theme = "light";
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") {
      theme = stored;
    } else {
      theme = getSystemTheme();
    }
  } catch {
    theme = getSystemTheme();
  }

  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-[rgb(var(--bg))] text-[rgb(var(--text))] antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
