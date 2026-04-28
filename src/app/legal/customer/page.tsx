import type { Metadata } from "next";
import LegalPageTemplate from "@/components/LegalPageTemplate";
import { customerDocs } from "@/lib/legalData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Customer Privacy Policy & Terms | Delito",
  description: "Privacy Policy and Terms & Conditions for the Delito Customer App.",
};

export default function CustomerLegalPage() {
  return (
    <>
      <Navbar />
      <LegalPageTemplate
        appName="Customer App"
        appIcon="/delito_logo.jpeg"
        appColor="#25671E"
        docs={customerDocs}
      />
      <Footer />
    </>
  );
}

