import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificateVerify from "@/components/CertificateVerify";

export const metadata: Metadata = {
  title: "Verify Certificate | Delito",
  description:
    "Verify the authenticity of a certificate issued by Delito. Enter your Certificate ID to view and download the legitimate document.",
  robots: { index: false, follow: false },
};

export default function CertificatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-[#f8fdf8] py-16 px-4 sm:px-6 lg:px-8">
        <CertificateVerify />
      </main>
      <Footer />
    </>
  );
}
