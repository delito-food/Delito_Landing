"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";

const featuredFoods = [
  {
    title: "Paneer Butter Masala",
    image: "/images/food-paneer.png",
    bg: "bg-green-pale",
  },
  {
    title: "Steamed Momos Plate",
    image: "/images/food-momos.png",
    bg: "bg-yellow-light",
  },
  {
    title: "Green House Full Pizza",
    image: "/images/food-biryani.png",
    bg: "bg-[#E8F5E9]",
  },
  {
    title: "Lemon & Ricotta Ravioli",
    image: "/images/food-pasta.png",
    bg: "bg-[#F3E5F5]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturedFoods() {
  return (
    <section id="menu" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end gap-4 sm:gap-6 md:gap-12 mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main leading-tight md:max-w-md">
            Featured Foods and Popular Dishes this week
          </h2>
          <p className="text-sm sm:text-base text-text-muted max-w-md leading-relaxed">
            From gourmet meals to comfort food, choose exactly what you&apos;re
            craving. Get live updates on the status of your order from kitchen to
            doorstep. Enjoy your delicious meal delivered fresh and hot right to
            your doorstep.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {featuredFoods.map((food) => (
            <motion.div
              key={food.title}
              variants={cardVariants}
              className={`group relative ${food.bg} rounded-2xl sm:rounded-3xl p-4 sm:p-5 pb-5 sm:pb-6 overflow-hidden min-h-[200px] sm:min-h-[260px] md:min-h-[280px] flex flex-col justify-between cursor-pointer transition-shadow duration-300 hover:shadow-xl`}
            >
              {/* Title */}
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-text-main leading-snug max-w-[100px] sm:max-w-[140px]">
                {food.title}
              </h3>

              {/* Food Image – bottom right */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute bottom-0 right-0 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px]"
              >
                <Image
                  src={food.image}
                  alt={food.title}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-full translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"
                />
              </motion.div>

              {/* Plus Button – bottom left */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-text-main text-white rounded-full flex items-center justify-center self-start shadow-lg z-10 cursor-pointer"
                aria-label={`Add ${food.title}`}
              >
                <Plus size={14} strokeWidth={3} className="sm:hidden" />
                <Plus size={18} strokeWidth={3} className="hidden sm:block" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
