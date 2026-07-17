
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.delitofoods.com"),
  title: {
    default: "Delito Foods � Best Food Delivery in Hathras",
    template: "%s | Delito Foods",
  },
  description:
    "Delito Foods (delitofoods) brings you the best local flavors � from your favorite street vendors to top restaurants in Hathras. Order online now with Delito.",
  keywords: [
    "delito",
    "delitofoods",
    "delito foods",
    "delito app",
    "food delivery Hathras",
    "online food order",
    "restaurant delivery",
    "street food online",
  ],
  authors: [{ name: "Delito Foods" }],
  creator: "Delito Foods",
  publisher: "Delito Foods",
  openGraph: {
    title: "Delito Foods � Street ka Swaad. Restaurant ki Shaan.",
    description:
      "Start your day with perfect local flavors�from your favorite street vendors to top restaurants.",
    url: "https://www.delitofoods.com",
    siteName: "Delito Foods",
    images: [
      {
        url: "/images/delito.png",
        width: 800,
        height: 600,
        alt: "Delito Foods - Hathras ka apna food delivery app",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delito Foods � Food Delivery App",
    description:
      "Start your day with perfect local flavors�from your favorite street vendors to top restaurants.",
    images: ["/images/delito.png"],
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
  icons: {
    icon: "/images/delito_favico.png",
    apple: "/images/delito_favico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Delito Foods",
    "alternateName": ["Delito", "delitofoods"],
    "url": "https://www.delitofoods.com",
    "logo": "https://www.delitofoods.com/images/delito.png",
    "description": "Delito Foods is the premier food delivery service in Hathras, connecting customers with the best street vendors and restaurants.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hathras",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-poppins">{children}</body>
    </html>
  );
}

