import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | Delito",
  description:
    "Find answers to common questions about ordering, delivery, payments, refunds, vendor onboarding, and delivery partner operations on Delito.",
};

const faqCategories = [
  {
    category: "Account & Registration",
    icon: "👤",
    appIcon: "/delito_logo.jpeg",
    audience: "Customers",
    questions: [
      {
        q: "How do I create an account on Delito?",
        a: "Download the Delito app from the Google Play Store or Apple App Store. Open the app, tap 'Sign Up', and register using your mobile number or email address. Verify your number via OTP and complete your profile to start ordering.",
      },
      {
        q: "Can I use Delito without creating an account?",
        a: "No. A registered account is required to place orders, track deliveries, and access all platform features. Registration is free and takes less than two minutes.",
      },
      {
        q: "I forgot my password. How do I reset it?",
        a: "On the login screen, tap 'Forgot Password'. Enter your registered mobile number or email address, and you will receive an OTP or reset link. Follow the instructions to set a new password. For further assistance, contact support@delito.com.",
      },
      {
        q: "Can I have more than one Delito account?",
        a: "No. Each user is permitted only one account. Creating multiple accounts to misuse promotional offers or referral benefits is a violation of our Terms and Conditions and may result in the suspension of all associated accounts.",
      },
      {
        q: "How do I update my phone number or email address?",
        a: "Go to the app's Profile section, tap 'Edit Profile', and update your contact details. A verification OTP will be sent to confirm the change. For changes that cannot be made through the app, contact support@delito.com.",
      },
    ],
  },
  {
    category: "Ordering",
    icon: "🛒",
    appIcon: "/delito_logo.jpeg",
    audience: "Customers",
    questions: [
      {
        q: "How do I place an order on Delito?",
        a: "Open the app, enter your delivery address, browse available restaurants in your area, select items from the menu, add them to your cart, review your order, choose a payment method, and confirm. You will receive an order confirmation notification immediately after.",
      },
      {
        q: "Can I schedule an order for later?",
        a: "Yes, Delito supports scheduled orders in select areas. On the checkout screen, look for the 'Schedule Delivery' option and choose your preferred date and time slot. Availability depends on your delivery location and restaurant operating hours.",
      },
      {
        q: "Can I add special instructions for my order?",
        a: "Yes. On the cart or item selection screen, you will find an 'Add Instructions' field where you can specify dietary preferences, spice levels, allergen concerns, or any other special requests. Note that restaurants will make best efforts to accommodate requests but cannot guarantee all modifications.",
      },
      {
        q: "What happens if a restaurant is closed or an item is unavailable?",
        a: "If a restaurant is closed, it will not appear in your browsing results or will be marked as unavailable. If an item becomes unavailable after your order is placed, the restaurant or Delito will cancel the affected item and notify you. You will receive a full refund for cancelled items within 5–7 business days.",
      },
      {
        q: "Can I order from multiple restaurants in one order?",
        a: "Currently, each order on Delito is fulfilled by a single restaurant. To order from multiple restaurants, you will need to place separate orders.",
      },
    ],
  },
  {
    category: "Delivery",
    icon: "🏍️",
    appIcon: "/delito_logo.jpeg",
    audience: "Customers",
    questions: [
      {
        q: "How do I track my order in real time?",
        a: "After placing your order, tap 'Track Order' on the order confirmation screen or in 'My Orders'. You will see a live map showing the delivery partner's location as they pick up and deliver your order.",
      },
      {
        q: "What is the estimated delivery time?",
        a: "Estimated delivery times are displayed before you place your order and depend on the restaurant's preparation time, your distance from the restaurant, and current demand levels. These are estimates and may vary due to traffic, weather, or high order volumes.",
      },
      {
        q: "My order is late. What should I do?",
        a: "If your order is significantly delayed beyond the estimated time, please check the live tracking screen first. If the delivery partner appears stuck or the order has been delayed for over 30 minutes beyond the estimate, contact our support team through the app's Help section or at support@delito.com.",
      },
      {
        q: "What if no one is available to receive my order?",
        a: "Our delivery partner will attempt to contact you via the app's in-built calling feature. If you are unreachable after two attempts, the order may be left at the delivery location at your risk, or marked as undeliverable. Delito is not responsible for losses arising from your unavailability to receive the order.",
      },
      {
        q: "Does Delito deliver to my area?",
        a: "Delivery availability depends on your location. Enter your address in the app to check if Delito currently operates in your area. We are continuously expanding our delivery network across new cities and localities.",
      },
    ],
  },
  {
    category: "Payments & Refunds",
    icon: "💳",
    appIcon: "/delito_logo.jpeg",
    audience: "Customers",
    questions: [
      {
        q: "What payment methods does Delito accept?",
        a: "Delito accepts UPI (Google Pay, PhonePe, Paytm, BHIM, etc.), credit cards, debit cards, net banking, popular digital wallets, Delito Credits, and Cash on Delivery (COD) at select locations.",
      },
      {
        q: "Is it safe to save my card details on Delito?",
        a: "Yes. Delito does not store your complete card details on its servers. Card information is tokenized and processed through PCI-DSS compliant third-party payment gateways, ensuring your financial data is secure.",
      },
      {
        q: "I was charged but my order was not placed. What should I do?",
        a: "This can occur due to a network interruption during payment. Please wait up to 10 minutes as some transactions take time to reflect. If the order does not appear in 'My Orders' and the amount has been deducted, contact support@delito.com with your payment reference number. A full refund will be processed within 3–5 business days.",
      },
      {
        q: "How do I request a refund?",
        a: "Go to 'My Orders', select the relevant order, tap 'Report an Issue', choose the issue type, and submit with a description and photo evidence if applicable. Our team will review and respond within 24–48 hours. Approved refunds are processed within 5–7 business days.",
      },
      {
        q: "What are Delito Credits and how do I use them?",
        a: "Delito Credits are platform wallet credits that can be used to pay for future orders. They may be issued as part of refunds, promotional campaigns, or referral bonuses. Credits are applied automatically at checkout. They are non-transferable, cannot be cashed out, and carry an expiry date as specified at the time of issuance.",
      },
    ],
  },
  {
    category: "Promotions & Offers",
    icon: "🎁",
    appIcon: "/delito_logo.jpeg",
    audience: "Customers",
    questions: [
      {
        q: "How do I apply a discount coupon?",
        a: "At the checkout screen, tap 'Apply Coupon', enter your coupon code, and tap 'Apply'. If the code is valid and conditions are met (minimum order value, applicable restaurant, etc.), the discount will be applied to your order total.",
      },
      {
        q: "Why is my coupon not working?",
        a: "Coupons may not work if: they have expired, the minimum order value has not been met, the coupon is not applicable to the selected restaurant, it has already been used (single-use coupons), or it is restricted to first-time users. Check the offer terms carefully or contact support for assistance.",
      },
      {
        q: "Can I combine multiple coupons on one order?",
        a: "No. Only one coupon or promotional offer can be applied per order, unless the offer explicitly states that it can be combined with other discounts.",
      },
    ],
  },
  {
    category: "Vendor / Restaurant Partners",
    icon: "🍽️",
    appIcon: "/vendor_logo.jpeg",
    audience: "Vendors",
    questions: [
      {
        q: "How do I register my restaurant on Delito?",
        a: "Visit vendor.delito.com or contact our Vendor Onboarding team at vendors@delito.com. You will need to provide your restaurant details, FSSAI license, GST registration number, bank account details, and identity proof. Our team will review your application and activate your account within 3–5 business days.",
      },
      {
        q: "What documents are required for vendor onboarding?",
        a: "The following documents are required: valid FSSAI license, GST registration certificate (GSTIN), PAN card of the business or proprietor, bank account details (cancelled cheque or bank statement), identity proof of the authorized representative, and current photographs of the restaurant premises and kitchen.",
      },
      {
        q: "Can I list multiple branches of my restaurant on Delito?",
        a: "Yes. Each branch can be registered as a separate entity on the Platform under the same vendor account, provided each branch holds valid FSSAI and GST registrations applicable to its location.",
      },
      {
        q: "How do I add or update menu items?",
        a: "Log in to your Vendor Dashboard at vendor.delito.com, navigate to the 'Menu' section, and add, edit, or remove items as needed. Menu updates are reflected on the app within 30 to 60 minutes of saving.",
      },
      {
        q: "How do I mark items as out of stock temporarily?",
        a: "In the Vendor Dashboard, navigate to the specific item and toggle its availability to 'Unavailable'. Customers will not be able to order the item while it is marked unavailable. Remember to re-enable items once they are back in stock.",
      },
      {
        q: "What should I do if I cannot fulfill an accepted order?",
        a: "If you are unable to fulfill an accepted order, cancel it immediately through the Vendor Dashboard and provide a reason. Notify Delito support at vendors@delito.com. Repeated post-acceptance cancellations will be monitored and may attract penalties under Delito's Partner Policy.",
      },
      {
        q: "When and how will I receive my earnings?",
        a: "Delito processes vendor settlements on a weekly basis. Payments are transferred to your registered bank account after deducting applicable commissions, chargebacks, and any outstanding amounts. Detailed settlement statements are available through the Vendor Dashboard.",
      },
      {
        q: "A chargeback has been deducted from my settlement. How do I dispute it?",
        a: "If you disagree with a chargeback deduction, raise a dispute ticket within 7 days of receiving your settlement statement by emailing vendors@delito.com with the order reference number and your explanation. Our team will review the matter and respond within 10 business days.",
      },
    ],
  },
  {
    category: "Delivery Partners",
    icon: "🚴",
    appIcon: "/deliveryman_logo.jpeg",
    audience: "Delivery Partners",
    questions: [
      {
        q: "How do I register as a Delivery Partner with Delito?",
        a: "Download the Delito Delivery Partner app, tap 'Register', and complete the onboarding form. Submit your documents (Aadhaar/PAN, driving license, RC, vehicle insurance, PUC certificate, and bank account details). Our team will verify your documents and activate your account within 2–5 business days.",
      },
      {
        q: "How are my earnings calculated?",
        a: "Your earnings per delivery include a base delivery fee, a variable component based on distance, and any applicable surge pricing during peak demand hours. Incentives and performance bonuses are added on top of your base earnings. The complete earning structure is available within the Delivery Partner app.",
      },
      {
        q: "When will I receive my earnings?",
        a: "Earnings are settled to your registered bank account on a weekly basis, typically every Monday for the previous week's deliveries. You can view your earnings history and upcoming settlement amounts in the Earnings section of the app.",
      },
      {
        q: "A deduction was made from my earnings. Why?",
        a: "Deductions may occur for unreturned COD amounts, penalties for verified misconduct, chargebacks for confirmed non-delivery, or equipment recovery charges. A detailed breakdown is provided in your settlement statement. If you believe a deduction is incorrect, contact riders@delito.com within 7 days.",
      },
      {
        q: "How do I handle Cash on Delivery (COD) orders?",
        a: "For COD orders, collect the exact order amount displayed in the app from the customer upon delivery. Record the collection in the app. Remit all COD amounts to Delito through the designated process in the app within the stipulated time. Do not retain COD amounts beyond the remittance deadline.",
      },
      {
        q: "What if the customer is not available to receive the order?",
        a: "Attempt to contact the customer twice through the in-app calling feature. If there is no response, contact Delito support through the app for instructions. Do not leave the order unattended without explicit confirmation from the customer or Delito support.",
      },
      {
        q: "Is my location tracked when I am not on duty?",
        a: "No. Delito only tracks your GPS location when you are logged into the Delivery Partner app and have marked yourself as 'Available' or are on an active delivery. Location tracking is completely paused when you go 'Offline' within the app.",
      },
      {
        q: "My account has been suspended. What should I do?",
        a: "If your account is suspended, you will receive a notification with the reason. Contact our Rider Support team at riders@delito.com with your registered mobile number and account details. Our team will review the matter and communicate the outcome within 5 business days.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fdf8]">
        {/* Hero */}
        <section className="bg-green-dark text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6">
              <HelpCircle className="w-4 h-4 text-yellow" />
              <span>Help Center</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-yellow">Questions</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers. Browse by category below or reach out to our support team.
            </p>
            <p className="text-white/50 text-xs mt-3">Effective Date: April 26, 2026 · Applies to: Customers, Vendors &amp; Delivery Partners</p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0 shadow-sm border border-gray-100">
                  <Image src={cat.appIcon} alt={cat.category} fill className="object-contain p-0.5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{cat.category}</h2>
              </div>
              <p className="text-xs text-gray-400 mb-4 ml-9">For: {cat.audience}</p>
              <div className="space-y-3">
                {cat.questions.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-medium text-gray-800 hover:text-green-dark transition-colors">
                      {item.q}
                      <ChevronDown className="w-4 h-4 shrink-0 text-gray-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Contact CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-green-dark rounded-3xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
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

