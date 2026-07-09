"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

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

  useEffect(() => {
    const idx = getCurrentPeriodIndex();
    setCurrentIndex(idx);
  }, []);

  const activePeriod = timePeriods[currentIndex];

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

          {/* Time Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-10 md:mb-14"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-text-muted/60 uppercase tracking-[0.2em] text-center filter grayscale">
              {activePeriod.label}
            </h3>
          </motion.div>

          {/* Food Items (No Card UI) */}
          <motion.div
            key={activePeriod.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-6 sm:gap-10 md:gap-12 overflow-x-auto pb-4 md:pb-0 md:overflow-visible justify-start md:justify-center scrollbar-hide"
          >
            {activePeriod.items.map((item) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.platoos.customer", "_blank")}
                className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer group"
              >
                <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] mb-4 md:mb-6 rounded-full overflow-hidden shadow-none group-hover:opacity-90 transition-opacity duration-300">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-main tracking-wide">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
    </>
  );
}
