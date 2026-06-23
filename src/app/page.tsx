import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedFoods from "@/components/FeaturedFoods";
import PricingSection from "@/components/PricingSection";
import PromotionsDelivery from "@/components/PromotionsDelivery";
import PartnersBar from "@/components/PartnersBar";
import DiscoverFlavors from "@/components/DiscoverFlavors";
import CTASection from "@/components/CTASection";
import DelitoApps from "@/components/DelitoApps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      <FeaturedFoods />
      <PricingSection />
      <PromotionsDelivery />
      <PartnersBar />
      <DiscoverFlavors />
      <CTASection />
      <DelitoApps />
      <Footer />
    </main>
  );
}

