"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import AppLaunchModal from "./AppLaunchModal";

interface FoodItem {
  name: string;
  image: string;
}

interface TimePeriod {
  id: string;
  label: string;
  startHour: number;
  endHour: number;
  items: FoodItem[];
}

const timePeriods: TimePeriod[] = [
  {
    id: "breakfast",
    label: "Nashta Ready",
    startHour: 6,
    endHour: 11,
    items: [
      { name: "Kachori", image: "/images/food-samosa.png" },
      { name: "Jalebi", image: "/images/food-special.png" },
      { name: "Parathas", image: "/images/food-cholebhature.png" },
      { name: "Poha", image: "/images/food-chaat.png" },
    ],
  },
  {
    id: "lunch",
    label: "Lunch Time",
    startHour: 11,
    endHour: 16,
    items: [
      { name: "Thali", image: "/images/food-thali.png" },
      { name: "Biryani", image: "/images/food-biryani.png" },
      { name: "Chole Bhature", image: "/images/food-cholebhature.png" },
      { name: "Dal Rice", image: "/images/food-paneer.png" },
    ],
  },
  {
    id: "snacks",
    label: "Shaam ke Snacks",
    startHour: 16,
    endHour: 20,
    items: [
      { name: "Chaap", image: "/images/food-kebab.png" },
      { name: "Momos", image: "/images/food-momos.png" },
      { name: "Tikki", image: "/images/food-chaat.png" },
      { name: "Samosa", image: "/images/food-samosa.png" },
    ],
  },
  {
    id: "dinner",
    label: "Family Dinner",
    startHour: 20,
    endHour: 6,
    items: [
      { name: "Paneer", image: "/images/food-paneer.png" },
      { name: "Butter Chicken", image: "/images/food-butterchicken.png" },
      { name: "Special Thali", image: "/images/food-thali.png" },
      { name: "Biryani", image: "/images/food-biryani.png" },
    ],
  },
];

function getCurrentPeriodIndex(): number {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 11) return 0;
  if (hour >= 11 && hour < 16) return 1;
  if (hour >= 16 && hour < 20) return 2;
  return 3;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function TimeFoodCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const idx = getCurrentPeriodIndex();
    setCurrentIndex(idx);
    setActiveIndex(idx);
  }, []);

  const activePeriod = timePeriods[activeIndex];
  const isCurrentlyActive = activeIndex === currentIndex;

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main">
              Abhi kya khaoge?
            </h2>
            <p className="text-sm sm:text-base text-text-muted mt-3 max-w-md mx-auto">
              Time ke hisaab se best picks — jo abhi chalega woh dikha rahe hain
            </p>
          </motion.div>

          {/* Time Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6"
          >
            {timePeriods.map((period, index) => (
              <button
                key={period.id}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeIndex === index
                    ? "bg-green-dark text-white shadow-md"
                    : "bg-green-pale text-text-muted hover:bg-green-light"
                }`}
              >
                {period.label}
              </button>
            ))}
          </motion.div>

          {/* Available Badge */}
          <div className="flex justify-center mb-10 md:mb-12">
            {isCurrentlyActive && (
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-pale text-green-dark text-xs font-semibold rounded-full border border-green-light">
                <span className="w-1.5 h-1.5 bg-green-mid rounded-full animate-pulse" />
                Abhi Available
              </span>
            )}
          </div>

          {/* Food Cards */}
          <motion.div
            key={activePeriod.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 md:pb-0 md:overflow-visible md:grid md:grid-cols-4 scrollbar-hide"
          >
            {activePeriod.items.map((item) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                onClick={() => setIsModalOpen(true)}
                className="flex-shrink-0 w-[160px] sm:w-auto bg-background rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center"
              >
                <div className="relative w-[100px] h-[100px] mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-text-main">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AppLaunchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
