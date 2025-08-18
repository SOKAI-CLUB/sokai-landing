import type { Metadata } from "next";
import { Inter, Poppins, Antonio } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ["latin"],
  variable: '--font-poppins'
});
const antonio = Antonio({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-antonio'
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "SOKAI CLUB",
  description: "Transform youth football training with AI-powered analysis and blockchain-certified progress tracking. SOKAI makes quality coaching accessible anywhere with just a phone and ball.",
  keywords: [
    "AI football training",
    "youth sports technology",
    "blockchain sports",
    "football coaching app",
    "AI sports analysis",
    "youth athlete development",
    "mobile football training",
    "sports gamification",
    "proof of play",
    "football skills tracking"
  ],
  authors: [{ name: "SOKAI Technologies" }],
  creator: "SOKAI Technologies",
  publisher: "SOKAI Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sokai.ai",
    title: "SOKAI - AI-Powered Football Training for Youth Athletes",
    description: "Transform youth football training with AI-powered analysis and blockchain-certified progress tracking. Making quality coaching accessible anywhere.",
    siteName: "SOKAI",
    images: [
      {
        url: "/og-image.jpg", // TODO: Add actual OG image
        width: 1200,
        height: 630,
        alt: "SOKAI - AI-Powered Football Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOKAI CLUB",
    description: "Transform youth football training with AI-powered analysis and blockchain-certified progress tracking.",
    images: ["/og-image.jpg"], // TODO: Add actual Twitter image
    creator: "@sokai_ai",
    site: "@sokai_ai",
  },
  verification: {
    google: "your-google-verification-code", // TODO: Add actual verification codes
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/sokaiclub.png", sizes: "32x32", type: "image/png" },
      { url: "/sokaiclub.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/sokaiclub.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/sokaiclub.png",
  },
  other: {
    "msapplication-TileColor": "#0B0B0D",
    "theme-color": "#7CFF00",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SOKAI" />
        <meta name="application-name" content="SOKAI" />

        {/* Preload Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SOKAI Technologies",
              "description": "AI-powered football training platform for youth athletes",
              "url": "https://sokai.ai",
              "logo": "https://sokai.ai/logo.png",
              "sameAs": [
                "https://twitter.com/sokai_ai",
                "https://linkedin.com/company/sokai-ai",
                "https://youtube.com/@sokai-ai"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-xxx-xxx-xxxx",
                "contactType": "investor relations",
                "email": "investors@sokai.ai"
              }
            }),
          }}
        />
      </head>
      <ClientBody className={`${inter.className} ${poppins.variable} ${antonio.variable}`}>
        {children}
      </ClientBody>
    </html>
  );
}
