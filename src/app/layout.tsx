import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import Nav from "@/components/Nav";
import { SITE } from "@/config/site";
import { THEME_STORAGE_KEY } from "@/config/theme";

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

export const metadata: Metadata = {
  // @improvement: base metadata derived from SITE config
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.tagline,
  keywords: [
    SITE.name,
    SITE.title,
    "Machine Learning",
    "MLOps",
    "Data Platform Engineering",
    "AI Product Delivery",
    "LLM Applications",
  ],
  category: "technology",
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.tagline,
    locale: "en_US",
    images: [
      {
        url: new URL(SITE.ogImage, SITE.url).toString(),
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE.twitter,
    site: SITE.twitter,
    title: SITE.title,
    description: SITE.tagline,
    images: [new URL(SITE.ogImage, SITE.url).toString()],
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
  var root = document.documentElement;
  var storageKey = "${THEME_STORAGE_KEY}";
  var theme = "dark";

  try {
    var stored = window.localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") {
      theme = stored;
    }
  } catch {}

  if (!theme) theme = "dark";

  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
})();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${bodyFont.variable} ${displayFont.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/og.jpg" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <SmoothScrollProvider />
          <Nav />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
