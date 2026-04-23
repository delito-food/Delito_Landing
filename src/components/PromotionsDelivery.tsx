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
                  Bringing Flavor to Your Doorstep
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
                    Save big with Delito&apos;s exclusive promotions! Discover discounts,
                    special offers, and meal bundles tailored just for you. Keep an
                    eye on our promotions section to enjoy
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
                    Stay in the loop with real-time order tracking. Receive updates
                    on your order&apos;s preparation, dispatch, and estimated delivery
                    time. Our notifications keep you informed, so you know exactly
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
              {/* Sandwich Image */}
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/sandwich.png"
                  alt="Delicious loaded sub sandwich"
                  width={600}
                  height={360}
                  className="w-full h-[200px] sm:h-[280px] md:h-[320px] object-cover"
                />
              </div>

              {/* Countries + CTA */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-text-main">
                  Countries where we deliver
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Save time with delivery or order ahead and skip the fees with
                  pickup. You can schedule orders for later, too.
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
