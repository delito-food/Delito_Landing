import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificateVerify from "@/components/CertificateVerify";

export const metadata: Metadata = {
  title: "Certificate Verification | Delito",
  description: "View and verify the authenticity of this Delito-issued certificate.",
  robots: { index: false, follow: false },
};

export default async function CertificateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-[#f8fdf8] py-16 px-4 sm:px-6 lg:px-8">
        <CertificateVerify initialId={decodeURIComponent(id)} />
      </main>
      <Footer />
    </>
  );
}
