import { Shield, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Legal — Privacy Policy & Terms | Delito",
  description:
    "Read the Privacy Policy and Terms & Conditions for Delito Customer, Vendor, and Delivery Partner apps.",
};

const apps = [
  {
    slug: "customer",
    name: "Customer App",
    icon: "/delito_logo.jpeg",
    color: "#25671E",
    description:
      "Privacy policy and terms for customers who order food through the Delito app.",
    tags: ["Order Policy", "Refunds", "Data Privacy"],
  },
  {
    slug: "vendor",
    name: "Vendor / Restaurant App",
    icon: "/vendor_logo.jpeg",
    color: "#C49A10",
    description:
      "Legal documentation for restaurant partners and cloud kitchens listing on Delito.",
    tags: ["Onboarding", "Settlements", "FSSAI Compliance"],
  },
  {
    slug: "delivery",
    name: "Delivery Partner App",
    icon: "/deliveryman_logo.jpeg",
    color: "#1976D2",
    description:
      "Terms and privacy policy for delivery executives and riders on the Delito platform.",
    tags: ["Earnings", "COD Policy", "Safety"],
  },
];

export default function LegalHubPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fdf8]">
        {/* Hero */}
        <section className="bg-green-dark text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6">
              <Shield className="w-4 h-4 text-yellow" />
              <span>Legal Documentation</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Privacy Policy &{" "}
              <span className="text-yellow">Terms of Service</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              Delito operates three apps — Customer, Vendor, and Delivery Partner. Each has its own dedicated privacy
              policy and terms. Select your app below.
            </p>
          </div>
        </section>

        {/* App Cards */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {apps.map((app) => (
              <div
                key={app.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
              >
                {/* Card Header */}
                <div
                  className="p-6 pb-4"
                  style={{ background: `linear-gradient(135deg, ${app.color}11 0%, transparent 100%)` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl overflow-hidden mb-4 shadow-sm"
                    style={{ border: `2px solid ${app.color}30` }}
                  >
                    <Image
                      src={app.icon}
                      alt={app.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-text-main">{app.name}</h2>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed">{app.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ backgroundColor: app.color + "18", color: app.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="border-t border-gray-100 divide-y divide-gray-50 mt-auto">
                  <Link
                    href={`/legal/${app.slug}?tab=privacy`}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-green-pale/50 transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-text-main">
                      <Shield className="w-4 h-4 text-green-mid" />
                      Privacy Policy
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-mid transition-colors" />
                  </Link>
                  <Link
                    href={`/legal/${app.slug}?tab=terms`}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-green-pale/50 transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-text-main">
                      <FileText className="w-4 h-4 text-green-mid" />
                      Terms & Conditions
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-mid transition-colors" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Info box */}
          <div className="mt-10 p-6 bg-white border border-gray-100 rounded-2xl">
            <h3 className="font-bold text-text-main mb-2">About These Policies</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              All Delito legal documents are effective from <strong>April 26, 2026</strong> (Version 1.0). Delito is
              operated by <strong>Deepanshu Verma</strong>, a sole proprietor registered at Gali No-01 Verma Colony,
              Hathras, Uttar Pradesh – 204101, India. For questions or grievances, contact{" "}
              <a href="mailto:grievance@delito.in" className="text-green-mid font-medium hover:underline">
                grievance@delito.in
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

