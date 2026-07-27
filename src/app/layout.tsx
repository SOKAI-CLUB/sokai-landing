import type { Metadata } from "next";
import { getSiteMetadata } from "@/lib/site-metadata";
import ClientBody from "./ClientBody";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071008",
};

export const metadata: Metadata = getSiteMetadata("en");

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
    "Football training app with movement analysis, progress tracking, rankings and challenges.",
  installUrl: "https://linktr.ee/sokai_club",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
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
