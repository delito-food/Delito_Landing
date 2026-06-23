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
              className="relative flex items-center justify-center"
            >
              {/* Big 35% circle */}
              <div className="relative">
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
                  className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-br from-yellow/20 to-yellow/5 border border-yellow/20 flex items-center justify-center relative"
                >
                  <div className="text-center">
                    <div className="text-6xl sm:text-7xl md:text-8xl font-black text-yellow leading-none">
                      35<span className="text-4xl sm:text-5xl md:text-6xl">%</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white/60 uppercase tracking-widest mt-1">
                      Cheaper
                    </div>
                  </div>

                  {/* Orbiting rings */}
                  <div className="absolute inset-0 rounded-full border border-yellow/10 animate-pulse" />
                  <div className="absolute -inset-4 rounded-full border border-dashed border-yellow/10" />
                  <div className="absolute -inset-8 rounded-full border border-yellow/5" />
                </motion.div>

                {/* Floating badge top-right */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -top-4 -right-4 sm:right-0 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-float-slow"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-emerald-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">
                        No Hidden Fees
                      </p>
                      <p className="text-[10px] text-gray-500">
                        Transparent pricing
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge bottom-left */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 sm:left-0 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-float"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-yellow-light rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-yellow-dark"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">
                        Same Quality
                      </p>
                      <p className="text-[10px] text-gray-500">
                        Directly from restaurants
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Food comparison image below */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-0 right-0 hidden lg:block"
              >
                <Image
                  src="/images/price-compare.png"
                  alt="Price comparison visual"
                  width={200}
                  height={200}
                  className="w-44 h-44 object-contain opacity-80 rounded-2xl"
                />
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
