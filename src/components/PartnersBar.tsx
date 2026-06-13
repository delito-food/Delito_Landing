"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Bajrang King & Vadapav", text: "Bajrang King & Vadapav" },
  { name: "Yummies Family Restaurent", text: "Yummies Family Restaurent" },
  { name: "Spicy food", text: "Spicy food" },
  { name: "Hathras Chaat Bhandar", text: "Hathras Chaat Bhandar" },
  { name: "Radhe Kitchen", text: "Radhe Kitchen" },
];

export default function PartnersBar() {
  // Double the array for seamless infinite scroll
  const scrollItems = [...partners, ...partners];

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white to-green-pale/30 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-green-mid uppercase mb-3 block">
            Our Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main">
            Serving With <span className="text-orange-500">Love</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-muted max-w-xl mx-auto">
            Partnering with the finest local restaurants and street vendors to bring the authentic taste of your city to your doorstep.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-nowrap items-center gap-6 sm:gap-10 md:gap-16 w-max px-4 sm:px-8"
        >
          {scrollItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-6 sm:gap-10 md:gap-16"
            >
              <div className="bg-white border border-gray-100 shadow-sm px-6 py-4 rounded-2xl flex items-center gap-3 hover:shadow-md hover:border-green-200 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-yellow-light flex items-center justify-center text-yellow-dark">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-bold text-gray-800 whitespace-nowrap">
                  {partner.text}
                </span>
              </div>
              
              {/* Separator dot */}
              <div className="w-2 h-2 rounded-full bg-green-200" />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient fades for edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
