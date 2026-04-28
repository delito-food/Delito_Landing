import type { Metadata } from "next";
import LegalPageTemplate from "@/components/LegalPageTemplate";
import { deliveryDocs } from "@/lib/legalData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delivery Partner Privacy Policy & Terms | Delito",
  description: "Privacy Policy and Terms & Conditions for the Delito Delivery Partner App.",
};

export default function DeliveryLegalPage() {
  return (
    <>
      <Navbar />
      <LegalPageTemplate
        appName="Delivery Partner App"
        appIcon="/deliveryman_logo.jpeg"
        appColor="#1976D2"
        docs={deliveryDocs}
      />
      <Footer />
    </>
  );
}

