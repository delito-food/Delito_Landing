"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tag, Truck } from "lucide-react";
import AppLaunchModal from "./AppLaunchModal";

export default function PromotionsDelivery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-yellow-dark uppercase">
                  Promotions and Discounts
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main leading-tight">
                  Aapke Mohalle ka Swaad, Aapke Darwaze Tak
                </h2>
              </div>

              {/* Two Info Columns */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Promotions */}
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-green-pale rounded-2xl flex items-center justify-center">
                    <Tag className="w-5 h-5 text-green-mid" />
                  </div>
                  <h3 className="text-base font-bold text-text-main">
                    Promotions and Discounts
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Delito pe milega har hafte naya offer! Meal combos, festival
                    discounts, aur pehle order pe special deals — bus app kholo
                    aur save karo.
                  </p>
                </div>

                {/* Order for Delivery */}
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-yellow-light rounded-2xl flex items-center justify-center">
                    <Truck className="w-5 h-5 text-yellow-dark" />
                  </div>
                  <h3 className="text-base font-bold text-text-main">
                    Order for delivery or pickup
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Order karo aur live dekhte raho — kitchen se nikla, rider ke
                    paas pahuncha, aur ab tumhare ghar aa raha hai. Sab kuch live!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Vada Pav Image */}
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/food-vadapav.png"
                  alt="Mumbai-style Vada Pav"
                  width={600}
                  height={360}
                  className="w-full h-[200px] sm:h-[280px] md:h-[320px] object-cover"
                />
              </div>

              {/* Countries + CTA */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-text-main">
                  Hathras ke har kone mein delivery
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Chahe Station Road ho ya Verma Colony, Sadabad ho ya Mursan —
                  hum har jagah deliver karte hain. Jaldi order karo!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  id="promo-order-now"
                  className="px-8 py-3 bg-yellow text-green-dark font-bold text-sm rounded-full hover:bg-yellow-dark transition-all duration-300 shadow-md cursor-pointer"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Launch Modal */}
      <AppLaunchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
