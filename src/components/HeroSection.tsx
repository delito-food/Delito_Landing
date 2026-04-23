"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PlayStoreBadge from "./PlayStoreBadge";
import AppLaunchModal from "./AppLaunchModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative hero-gradient hero-pattern overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-end"
      >
        {/* Decorative radial glows */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-yellow/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-yellow/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-0 pt-8 sm:pt-12 lg:pt-0">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-4 items-end">
            {/* Left Column – Copy */}
            <div className="relative z-10 space-y-5 sm:space-y-6 lg:space-y-8 pb-8 sm:pb-16 lg:pb-28">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full"
              >
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest text-yellow uppercase">
                  Where every bite feels like home.
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight"
              >
                Street ka{" "}
                <span className="text-yellow">Swaad.</span>
                <br />
                Restaurant&nbsp;ki{" "}
                <span className="relative inline-block">
                  <span className="text-yellow">Shaan.</span>
                  <svg
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4"
                      stroke="#F5C518"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg text-white/70 max-w-md leading-relaxed"
              >
                Start your day with perfect local flavors—from your favorite
                street vendors to top restaurants.
              </motion.p>

              {/* Play Store Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <PlayStoreBadge height={56} onClick={() => setIsModalOpen(true)} />
              </motion.div>

              {/* Mobile-only: Quick stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex items-center gap-6 sm:gap-8 lg:hidden pt-2"
              >
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-yellow">1000+</p>
                  <p className="text-[10px] sm:text-xs text-white/50 font-medium">Happy Customers</p>
                </div>
                <div className="w-px h-8 bg-white/15" />
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-yellow">10+</p>
                  <p className="text-[10px] sm:text-xs text-white/50 font-medium">Restaurants</p>
                </div>
                <div className="w-px h-8 bg-white/15" />
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-yellow">🌱</p>
                  <p className="text-[10px] sm:text-xs text-white/50 font-medium">Eco Friendly</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column – Delito Man anchored to bottom */}
            <div className="relative flex justify-center lg:justify-end items-end">
              {/* Main Delito Man Image – feet at very bottom */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative z-10 mb-0"
              >
                <Image
                  src="/images/delitoman.png"
                  alt="Delito delivery mascot"
                  width={860}
                  height={860}
                  className="w-[260px] sm:w-[340px] md:w-[400px] lg:w-[680px] xl:w-[860px] h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating "Today's Special" Card – hidden on small mobile */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="hidden sm:block absolute bottom-16 -right-4 sm:right-0 lg:-right-8 z-20 animate-float-slow"
              >
                <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 flex items-center gap-3 max-w-[240px] sm:max-w-[260px]">
                  <Image
                    src="/images/food-special.png"
                    alt="Today's special"
                    width={70}
                    height={70}
                    className="w-12 sm:w-14 h-12 sm:h-14 lg:w-[70px] lg:h-[70px] rounded-xl object-cover"
                  />
                  <div>
                    <span className="text-[10px] font-semibold text-yellow-dark bg-yellow-light px-2 py-0.5 rounded-full">
                      Today&apos;s Special
                    </span>
                    <p className="text-sm font-bold text-text-main mt-1">
                      Delicious Food
                    </p>
                    <span className="text-xs font-semibold text-green-mid">
                      Only ₹149
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Eco Card – hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="hidden lg:block absolute top-4 -left-2 z-20"
              >
                <div className="bg-yellow-light border border-yellow/30 rounded-2xl shadow-lg px-4 py-3 max-w-[200px] animate-float-slow">
                  <p className="text-xs sm:text-sm font-semibold text-text-main leading-snug">
                    Plant a tree with every order
                  </p>
                </div>
              </motion.div>

              {/* Decorative blob behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom wave shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-[5]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px]"
          >
            <path
              d="M0,40 C200,100 400,0 600,50 C800,100 1000,10 1200,60 L1200,120 L0,120 Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* App Launch Modal */}
      <AppLaunchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
