
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TimeFoodCategories from "@/components/TimeFoodCategories";
import FeaturedFoods from "@/components/FeaturedFoods";
import PricingSection from "@/components/PricingSection";
import PromotionsDelivery from "@/components/PromotionsDelivery";
import PartnersBar from "@/components/PartnersBar";
import DiscoverFlavors from "@/components/DiscoverFlavors";
import CTASection from "@/components/CTASection";
import DelitoApps from "@/components/DelitoApps";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionImage from "@/components/SectionImage";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Delito! Get the best street food and restaurant dishes delivered hot and fresh in Hathras. Order online now for fast delivery.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      <TimeFoodCategories />
      <FeaturedFoods />
      <DiscoverFlavors />
      <PricingSection />
      <PromotionsDelivery />
      <PartnersBar />
      <SectionImage />
      <DelitoApps />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

