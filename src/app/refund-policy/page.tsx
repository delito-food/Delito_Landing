import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RefreshCw, Clock, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Delito",
  description:
    "Learn about Delito's refund, cancellation, and return policy for food orders, payments, and vendor settlements.",
};

const highlights = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "5–7 Business Days",
    desc: "Standard refund processing time to your original payment method.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure Refunds",
    desc: "All refunds are processed through our secure, PCI-DSS compliant payment gateway.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Instant Delito Credits",
    desc: "Opt for Delito Credits as an instant alternative to bank refunds, valid for 90 days.",
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "Report Within 24 Hours",
    desc: "Issues like wrong or poor-quality food must be reported within 24 hours of delivery.",
  },
];

const sections = [
  {
    title: "Part A — Customer Refund Policy",
    subsections: true,
    content: [],
  },
  {
    title: "1. Eligible Refund Scenarios",
    content: [
      "Order not delivered but marked as delivered by the delivery partner",
      "Incorrect item(s) delivered — item received does not match what was ordered",
      "Missing item(s) — part of your order was not included in the delivery",
      "Food received was spoiled, tampered with, or unfit for consumption",
      "Duplicate payment charged for the same order",
      "Successful payment made but order not confirmed or processed by the system",
      "Order cancelled by the customer within the 2-minute free cancellation window after placement",
    ],
  },
  {
    title: "2. Non-Eligible Refund Scenarios",
    content: [
      "Refunds will **NOT** be issued in the following circumstances:",
      "• Customer changes their mind after the 2-minute free cancellation window has expired",
      "• Customer ordered the wrong item, quantity, or restaurant",
      "• Refund complaint raised more than 24 hours after the order was marked as delivered",
      "• Order marked as delivered with confirmed customer sign-off or OTP verification",
      "• Subjective dissatisfaction with taste, spice level, portion size, or presentation that matches the menu description",
      "• Delivery delayed due to factors beyond Delito's control, including traffic, weather, road closures, or natural disasters",
      "• Account suspended or terminated at the time of the refund request",
    ],
  },
  {
    title: "3. How to Raise a Refund Request",
    content: [
      "**Step 1:** Open the Delito app and navigate to 'My Orders'.",
      "**Step 2:** Select the relevant order and tap 'Report an Issue'.",
      "**Step 3:** Choose the appropriate issue category (Missing Item, Wrong Item, Not Delivered, etc.).",
      "**Step 4:** Provide a brief description and attach photo evidence where applicable (especially for wrong or spoiled food complaints).",
      "**Step 5:** Submit the request. You will receive an acknowledgment within **2 hours**.",
      "**Step 6:** Delito's support team will investigate and communicate the resolution within **24–48 hours**.",
      "Refund requests can also be raised by contacting our support team at **support@delito.com** or through the in-app chat.",
    ],
  },
  {
    title: "4. Refund Methods",
    content: [
      "**Original Payment Method:** Refunds for card, UPI, net banking, and wallet payments are credited back to the original payment source within **5–7 business days**.",
      "**Delito Credits:** In certain cases, Delito may offer instant Delito Credits (app wallet) as an alternative to bank refunds. Credits are valid for **90 days** from the date of issuance.",
      "**Cash on Delivery (COD):** Refunds for COD orders are issued as Delito Credits to your in-app wallet, as cash refunds cannot be processed digitally.",
      "**Duplicate Payments:** Duplicate payment refunds are processed within **3–5 business days** to the original payment source.",
    ],
  },
  {
    title: "5. Refund Investigation Process",
    content: [
      "Upon receiving a refund request, Delito will:",
      "• Review the order details, delivery logs, and GPS data",
      "• Contact the restaurant partner and/or delivery partner for their account of events",
      "• Assess any photographic or video evidence submitted by the customer",
      "• Cross-verify with payment gateway records in the case of payment disputes",
      "Delito's decision on refund eligibility, following a thorough investigation, is final. We reserve the right to deny refunds where evidence suggests misuse of the refund process.",
    ],
  },
  {
    title: "6. Refund Abuse Policy",
    content: [
      "Delito monitors refund request patterns to detect abuse. If a customer account shows an unusually high frequency of refund requests or patterns indicative of fraudulent claims, Delito reserves the right to:",
      "• Reject refund requests without investigation",
      "• Place restrictions on the customer's ability to place future orders",
      "• Permanently suspend the customer's account",
      "• Recover amounts previously refunded in cases where fraud is confirmed",
    ],
  },
  {
    title: "Part B — Vendor Refund & Chargeback Policy",
    subsections: true,
    content: [],
  },
  {
    title: "7. Customer Refunds Chargeable to Vendors",
    content: [
      "When a customer refund is approved by Delito following an investigation, the refund amount may be recovered from the vendor's settlement in the following cases:",
      "• Wrong item dispatched due to restaurant error",
      "• Item confirmed as missing at the time of packaging by restaurant staff",
      "• Food quality complaint upheld upon investigation where the issue is attributable to preparation or packaging",
      "• Order cancelled after acceptance due to stock unavailability or kitchen closure without timely notification",
      "• Post-acceptance cancellation by the restaurant without valid reason",
    ],
  },
  {
    title: "8. Chargeback Process",
    content: [
      "Chargebacks are deducted from the vendor's next applicable weekly settlement.",
      "Vendors will receive a detailed settlement statement reflecting all chargeback deductions with order references.",
      "Vendors may dispute a chargeback by raising a ticket at **vendors@delito.com** within **7 days** of receiving the settlement statement.",
      "Delito will review the dispute and provide a resolution within **10 business days**.",
    ],
  },
  {
    title: "9. Scenarios Where Vendors Are NOT Charged",
    content: [
      "• Order cancelled by the customer before restaurant preparation has commenced",
      "• Delivery failure caused solely by the delivery partner (e.g., accident, non-delivery)",
      "• Platform technical error resulting in order duplication or system failure",
      "• Force majeure events such as natural disasters, bandhs, or government-imposed curfews",
    ],
  },
  {
    title: "Part C — Delivery Partner Deduction & Recovery Policy",
    subsections: true,
    content: [],
  },
  {
    title: "10. Situations Where Deductions May Apply",
    content: [
      "Deductions from a Delivery Partner's earnings may be made in the following situations:",
      "• Failure to remit Cash on Delivery (COD) amounts — the full COD amount will be recovered from earnings",
      "• Order confirmed as delivered but GPS and customer records indicate non-delivery — subject to investigation",
      "• Damage to food or packaging caused by negligent handling during delivery",
      "• Fraudulent order completion (marking orders as delivered without actual delivery)",
      "• Outstanding amounts for Delito-issued delivery equipment not returned upon termination",
    ],
  },
  {
    title: "11. COD Non-Remittance Policy",
    content: [
      "COD amounts must be remitted as per the process specified in the Delivery Partner app.",
      "Failure to remit COD amounts within the stipulated time will result in immediate deduction from earnings and may result in account suspension.",
      "Repeated COD non-remittance will be treated as fraud and may result in **permanent account termination and legal action**.",
    ],
  },
  {
    title: "12. General Provisions",
    content: [
      "Delito reserves the right to amend this Refund Policy at any time. Users will be notified of material changes via the app or email at least **7 days** before the changes take effect.",
      "This policy is governed by the laws of India. Disputes arising from refund decisions shall be resolved as per the dispute resolution mechanism stated in the respective Terms and Conditions.",
      "Delito's decision on all refund and chargeback matters, following a fair investigation, is final and binding.",
      "**Effective Date:** April 26, 2026 · **Version 1.0**",
    ],
  },
];

function renderLine(line: string) {
  const parts = line.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-gray-900">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fdf8]">
        {/* Hero */}
        <section className="bg-green-dark text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6">
              <RefreshCw className="w-4 h-4 text-yellow" />
              <span>Refund &amp; Cancellation</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Refund &amp; Cancellation{" "}
              <span className="text-yellow">Policy</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              We want every order to be perfect. If something goes wrong, here&apos;s exactly how we make it right.
            </p>
            <p className="text-white/50 text-xs mt-3">Effective Date: April 26, 2026 · Version 1.0</p>
          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2"
              >
                <div className="text-green-dark">{h.icon}</div>
                <p className="font-semibold text-sm text-gray-900">{h.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Policy Sections */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
          {sections.map((sec) =>
            (sec as { subsections?: boolean }).subsections ? (
              <div key={sec.title} className="pt-4">
                <h2 className="text-lg font-bold text-green-dark border-b border-green-dark/20 pb-2">
                  {sec.title}
                </h2>
              </div>
            ) : (
              <div
                key={sec.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8"
              >
                <h2 className="text-base md:text-lg font-bold text-gray-900 mb-4">
                  {sec.title}
                </h2>
                <ul className="space-y-2">
                  {sec.content.map((line, idx) => (
                    <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                      {renderLine(line)}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </section>

        {/* Contact CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-green-dark rounded-3xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Need help with a refund?</h3>
            <p className="text-white/70 mb-2 text-sm">
              Our support team is available Monday–Sunday, 8:00 AM – 11:00 PM IST.
            </p>
            <p className="text-white/50 text-xs mb-5">
              Vendors: vendors@delito.com · Delivery Partners: riders@delito.com
            </p>
            <a
              href="mailto:support@delito.com"
              className="inline-block bg-yellow text-green-dark font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
