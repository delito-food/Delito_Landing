
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Delito's mission to deliver authentic local flavors, our commitment to eco-friendly packaging, and our strict hygiene standards.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

