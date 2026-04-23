"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Rangeela Darbar", text: "Rangeela Darbar" },
  { name: "pizza bazar", text: "pizza bazar" },
  { name: "Spicy food", text: "Spicy food" },
  { name: "Hathras Chaat Bhandar", text: "Hathras Chaat Bhandar" },
  { name: "Radhe Kitchen", text: "Radhe Kitchen" },
];

export default function PartnersBar() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
            Serving With Love
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center lg:justify-between gap-8 md:gap-12"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="grayscale-hover flex items-center gap-2 cursor-pointer"
            >
              <span className="text-xl sm:text-2xl font-extrabold text-gray-800 tracking-tight">
                {partner.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
