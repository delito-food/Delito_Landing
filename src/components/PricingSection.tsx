"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import AppLaunchModal from "./AppLaunchModal";

const comparisons = [
  { item: "Chicken Biryani", others: 350, delito: 228 },
  { item: "Paneer Butter Masala", others: 280, delito: 182 },
  { item: "Chole Bhature", others: 180, delito: 117 },
  { item: "Masala Dosa", others: 150, delito: 98 },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-br from-green-dark via-[#163B2B] to-[#0F2D1F]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-mid/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ── Left: Copy + Price Table ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow/15 border border-yellow/25 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow" />
                </span>
                <span className="text-xs font-bold tracking-widest text-yellow uppercase">
                  Save up to 35%
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.1] tracking-tight">
                  Same food.{" "}
                  <br className="hidden sm:block" />
                  Same restaurant.{" "}
                  <br />
                  <span className="text-yellow">Lower price.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/60 max-w-lg leading-relaxed">
                  Why pay more for the exact same meal? Delito cuts the middleman
                  markup — you get <strong className="text-white/80">35% lower prices</strong> on
                  every order compared to other apps. No compromise on quality.
                </p>
              </div>

              {/* Price Comparison Table */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="grid grid-cols-3 px-5 py-3 bg-white/[0.04] border-b border-white/10 text-xs font-bold uppercase tracking-wider">
                  <span className="text-white/40">Dish</span>
                  <span className="text-white/40 text-center">Others</span>
                  <span className="text-yellow text-center">Delito</span>
                </div>

                {/* Rows */}
                {comparisons.map((row) => {
                  const saved = Math.round(
                    ((row.others - row.delito) / row.others) * 100
                  );
                  return (
                    <motion.div
                      key={row.item}
                      variants={rowVariants}
                      className="grid grid-cols-3 px-5 py-3.5 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.03] transition-colors"
                    >
                      <span className="text-sm font-semibold text-white/80">
                        {row.item}
                      </span>
                      <span className="text-sm text-white/40 line-through text-center">
                        ₹{row.others}
                      </span>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-bold text-yellow">
                          ₹{row.delito}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/15 px-1.5 py-0.5 rounded-full">
                          -{saved}%
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-yellow text-green-dark font-bold text-sm rounded-full hover:bg-yellow-dark transition-all duration-300 shadow-lg shadow-yellow/20 cursor-pointer"
              >
                Start Saving Now
              </motion.button>
            </motion.div>

            {/* ── Right: Visual ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex items-center justify-center min-h-[340px] sm:min-h-[400px]"
            >
              {/* Big 35% circle with Delito logo */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative"
              >
                <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-br from-yellow/20 via-yellow/10 to-transparent border-2 border-yellow/20 flex flex-col items-center justify-center">
                  {/* Delito Logo */}
                  <Image
                    src="/images/delito.png"
                    alt="Delito"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3"
                  />
                  <div className="text-5xl sm:text-6xl md:text-7xl font-black text-yellow leading-none">
                    35<span className="text-3xl sm:text-4xl md:text-5xl">%</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white/50 uppercase tracking-[0.2em] mt-1">
                    Sasta
                  </div>
                </div>

                {/* Subtle outer ring */}
                <div className="absolute -inset-3 rounded-full border border-yellow/8" />
              </motion.div>

              {/* Receipt-style floating card — top right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute top-0 -right-2 sm:right-4 bg-white rounded-xl shadow-lg p-3 max-w-[160px] animate-float-slow"
              >
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">Your savings</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black text-green-mid">₹122</span>
                  <span className="text-[10px] text-gray-400">saved today</span>
                </div>
                <div className="mt-1.5 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-gradient-to-r from-green-mid to-yellow rounded-full" />
                </div>
              </motion.div>

              {/* Delito app icon card — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute bottom-2 -left-2 sm:left-4 bg-white rounded-xl shadow-lg p-3 animate-float"
              >
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/delito_logo.jpeg"
                    alt="Delito App"
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-lg object-contain"
                  />
                  <div>
                    <p className="text-xs font-bold text-gray-900">Delito App</p>
                    <p className="text-[10px] text-gray-500">Sab sasta milega!</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <AppLaunchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
