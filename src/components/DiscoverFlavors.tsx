"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppLaunchModal from "./AppLaunchModal";

const dishes = [
  {
    image: "/images/food-kebab.png",
    category: "Mid Night Drip",
    title: "Istanbul • Doner Kebab",
    desc: "Perfect for slow evenings and deep thoughts.",
    price: "₹250.00",
    originalPrice: "₹320",
  },
  {
    image: "/images/food-pasta.png",
    category: "Sunny Beans",
    title: "Pasta • Perfection Foods",
    desc: "Bright, vibrant, and ideal for your morning ritual.",
    price: "₹199.00",
    originalPrice: "₹315",
  },
  {
    image: "/images/food-thali.png",
    category: "Velvet Blend",
    title: "Bella • Indian Thali",
    desc: "Balanced and smooth — a daily favorite.",
    price: "₹154.00",
    originalPrice: "₹243",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DiscoverFlavors() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main leading-tight max-w-lg">
                Discover Flavours, Delivered. Order Your Feast!
              </h2>
            </div>
            <div className="space-y-4 max-w-sm">
              <p className="text-sm text-text-muted leading-relaxed">
                Exploring diverse flavors and cuisines, enticing visitors to embark
                on a culinary adventure through food delivery.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                id="discover-order-now"
                className="px-8 py-3 bg-yellow text-green-dark font-bold text-sm rounded-full hover:bg-yellow-dark transition-all duration-300 shadow-md cursor-pointer"
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {dishes.map((dish) => (
              <motion.div
                key={dish.title}
                variants={cardVariants}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  {/* Category Pill */}
                  <span className="inline-block px-3 py-1 bg-yellow-light text-yellow-dark text-xs font-semibold rounded-full">
                    {dish.category}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-text-main">
                    {dish.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {dish.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-lg sm:text-xl font-extrabold text-text-main">
                      {dish.price}
                    </span>
                    <span className="text-sm text-text-muted line-through">
                      {dish.originalPrice}
                    </span>
                  </div>
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
