import type { Metadata } from "next";
import ClientBody from "./ClientBody";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071008",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sokai.club"),
  title: "SOKAI — L'app d'entraînement football à la maison",
  description:
    "Progresse au football en 20 minutes par jour avec un ballon et ton téléphone. SOKAI est disponible sur iOS et Android, avec des offres dédiées aux clubs.",
  keywords: [
    "entraînement football maison",
    "application football",
    "exercices football",
    "entraînement individuel football",
    "application coach football",
    "suivi joueurs club",
  ],
  authors: [{ name: "SOKAI GROUP" }],
  creator: "SOKAI GROUP",
  publisher: "SOKAI GROUP",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: "SOKAI — 20 minutes. Un ballon. Ton téléphone.",
    description:
      "L'app d'entraînement football à la maison pour les joueurs, avec un espace de suivi pensé pour les clubs.",
    siteName: "SOKAI",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "SOKAI — 20 minutes, un ballon, ton téléphone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOKAI — L'entraînement football devient un jeu",
    description:
      "Entraîne-toi 20 minutes par jour à la maison. Disponible sur iOS et Android.",
    images: ["/og.png"],
  },
  category: "sports",
  icons: {
    icon: [{ url: "/sokaiclub.png", type: "image/png" }],
    apple: [{ url: "/sokaiclub.png", type: "image/png" }],
    shortcut: "/sokaiclub.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SOKAI GROUP",
  url: "https://sokai.club",
  logo: "https://sokai.club/sokaiclub.png",
  email: "contact@sokai.club",
  sameAs: [
    "https://www.linkedin.com/company/sokai-club/",
    "https://www.youtube.com/@Sokai_club",
    "https://x.com/Sokai_Fc",
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "SOKAI",
  applicationCategory: "SportsApplication",
  operatingSystem: "iOS, Android",
  description:
    "Application d'entraînement football avec analyse des mouvements, progression, classements et défis.",
  installUrl: "https://linktr.ee/sokai_club",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="SOKAI" />
        <meta name="application-name" content="SOKAI" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
