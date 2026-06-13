"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppLaunchModal from "./AppLaunchModal";

const apps = [
  {
    name: "Delito",
    tagline: "For Customers",
    description:
      "Order your favourite street food & restaurant meals — delivered fast to your doorstep!",
    icon: "/delito_logo.jpeg",
    comingSoon: true,
    gradient: "from-orange-50 via-red-50 to-orange-100",
    border: "border-orange-200/60",
  },
  {
    name: "Delito Vendor",
    tagline: "For Restaurants",
    description:
      "Manage your restaurant, menu & orders — all in one powerful dashboard.",
    icon: "/vendor_logo.jpeg",
    comingSoon: false,
    gradient: "from-amber-50 via-yellow-50 to-amber-100",
    border: "border-amber-200/60",
  },
  {
    name: "Delito Delivery",
    tagline: "For Delivery Partners",
    description:
      "Earn on your schedule — pick up & deliver orders across the city.",
    icon: "/deliveryman_logo.jpeg",
    comingSoon: false,
    gradient: "from-emerald-50 via-green-50 to-emerald-100",
    border: "border-emerald-200/60",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function DelitoApps() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="our-apps" className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 sm:mb-16"
          >
            {/* Delito brand name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-main tracking-tight leading-none">
              Delito
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mt-4 mb-3">
              <span className="block w-12 h-[2px] bg-gradient-to-r from-transparent to-yellow" />
              <span className="block w-2 h-2 rounded-full bg-yellow" />
              <span className="block w-12 h-[2px] bg-gradient-to-l from-transparent to-yellow" />
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg font-semibold tracking-[0.18em] uppercase text-text-muted leading-snug">
              Street ka Swaad.
              <br className="sm:hidden" />{" "}
              Restaurant ki Shaan.
            </p>
          </motion.div>

          {/* ── App Cards Grid ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {apps.map((app) => (
              <motion.div
                key={app.name}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`relative group rounded-3xl bg-gradient-to-b ${app.gradient} border ${app.border} p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-400`}
              >
                {/* Coming-soon ribbon */}
                {app.comingSoon && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md animate-pulse">
                    Coming Soon
                  </div>
                )}

                {/* App icon */}
                <div
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-[1.4rem] overflow-hidden shadow-lg ring-4 ring-white/70 mb-5 ${
                    app.comingSoon ? "opacity-90 grayscale-[20%]" : ""
                  }`}
                >
                  <Image
                    src={app.icon}
                    alt={`${app.name} app icon`}
                    fill
                    sizes="96px"
                    className="object-contain p-1 bg-white"
                  />
                </div>

                {/* App name */}
                <h3 className="text-lg sm:text-xl font-bold text-text-main mb-1">
                  {app.name}
                </h3>

                {/* Tagline pill */}
                <span className="text-[11px] font-semibold text-text-muted/70 tracking-wide uppercase mb-3">
                  {app.tagline}
                </span>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-[260px]">
                  {app.description}
                </p>

                {/* CTA */}
                <div className="mt-auto">
                  {app.comingSoon ? (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500">
                      <svg
                        className="w-4 h-4 animate-spin-slow"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Launching Soon
                    </span>
                  ) : (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-green-mid hover:text-green-dark transition-colors duration-200 group/link cursor-pointer"
                    >
                      <span>Check it out</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Launch Modal */}
      <AppLaunchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
