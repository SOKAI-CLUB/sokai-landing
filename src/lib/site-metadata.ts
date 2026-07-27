import type { Metadata } from "next";
import type { Locale } from "@/components/LandingExperience";

const localized = {
  fr: {
    title: "SOKAI — L'app d'entraînement football à la maison",
    description:
      "Progresse au football en 20 minutes par jour avec un ballon et ton téléphone. SOKAI est disponible sur iOS et Android, avec des offres dédiées aux clubs.",
    ogTitle: "SOKAI — 20 minutes. Un ballon. Ton téléphone.",
    ogDescription:
      "L'app d'entraînement football à la maison pour les joueurs, avec un espace de suivi pensé pour les clubs.",
    twitterTitle: "SOKAI — L'entraînement football devient un jeu",
    twitterDescription:
      "Entraîne-toi 20 minutes par jour à la maison. Disponible sur iOS et Android.",
    image: "/og.png",
    imageAlt: "SOKAI — 20 minutes, un ballon, ton téléphone",
  },
  en: {
    title: "SOKAI — Football training at home",
    description:
      "Improve your football skills in 20 minutes a day with a ball and your phone. SOKAI is available on iOS and Android, with dedicated plans for clubs.",
    ogTitle: "SOKAI — 20 minutes. One ball. Your phone.",
    ogDescription:
      "The football training app for players at home, with a dedicated tracking dashboard for clubs.",
    twitterTitle: "SOKAI — Football training becomes a game",
    twitterDescription:
      "Train for 20 minutes a day at home. Available on iOS and Android.",
    image: "/og-en.png",
    imageAlt: "SOKAI — 20 minutes, one ball, your phone",
  },
} as const;

export function getSiteMetadata(locale: Locale): Metadata {
  const copy = localized[locale];

  return {
    metadataBase: new URL("https://sokai.club"),
    title: copy.title,
    description: copy.description,
    keywords:
      locale === "fr"
        ? [
            "entraînement football maison",
            "application football",
            "exercices football",
            "entraînement individuel football",
            "application coach football",
            "suivi joueurs club",
          ]
        : [
            "football training at home",
            "football training app",
            "football drills",
            "individual football training",
            "football coaching app",
            "club player tracking",
          ],
    authors: [{ name: "SOKAI GROUP" }],
    creator: "SOKAI GROUP",
    publisher: "SOKAI GROUP",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "fr-FR": "/fr",
        en: "/en",
        "x-default": "/",
      },
    },
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
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"],
      url: `/${locale}`,
      title: copy.ogTitle,
      description: copy.ogDescription,
      siteName: "SOKAI",
      images: [
        {
          url: copy.image,
          width: 1730,
          height: 909,
          alt: copy.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.twitterTitle,
      description: copy.twitterDescription,
      images: [copy.image],
    },
    category: "sports",
    icons: {
      icon: [{ url: "/sokaiclub.png", type: "image/png" }],
      apple: [{ url: "/sokaiclub.png", type: "image/png" }],
      shortcut: "/sokaiclub.png",
    },
  };
}
