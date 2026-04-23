import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delito — Street ka Swaad. Restaurant ki Shaan.",
  description:
    "Delito brings you the best local flavors — from your favorite street vendors to top restaurants. Order food delivery online with Delito.",
  keywords: [
    "food delivery",
    "Delito",
    "street food",
    "restaurant delivery",
    "online food order",
  ],
  openGraph: {
    title: "Delito — Street ka Swaad. Restaurant ki Shaan.",
    description:
      "Start your day with perfect local flavors—from your favorite street vendors to top restaurants.",
    type: "website",
  },
  icons: {
    icon: "/images/delito_favico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-poppins">{children}</body>
    </html>
  );
}
