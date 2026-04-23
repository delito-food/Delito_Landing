import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedFoods from "@/components/FeaturedFoods";
import PromotionsDelivery from "@/components/PromotionsDelivery";
import PartnersBar from "@/components/PartnersBar";
import DiscoverFlavors from "@/components/DiscoverFlavors";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      <FeaturedFoods />
      <PromotionsDelivery />
      <PartnersBar />
      <DiscoverFlavors />
      <CTASection />
      <Footer />
    </main>
  );
}
