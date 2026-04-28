import type { Metadata } from "next";
import LegalPageTemplate from "@/components/LegalPageTemplate";
import { vendorDocs } from "@/lib/legalData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vendor Privacy Policy & Terms | Delito",
  description: "Privacy Policy and Terms & Conditions for the Delito Vendor / Restaurant Partner App.",
};

export default function VendorLegalPage() {
  return (
    <>
      <Navbar />
      <LegalPageTemplate
        appName="Vendor / Restaurant App"
        appIcon="/vendor_logo.jpeg"
        appColor="#C49A10"
        docs={vendorDocs}
      />
      <Footer />
    </>
  );
}

