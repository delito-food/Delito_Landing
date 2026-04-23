"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppLaunchModal from "./AppLaunchModal";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact-us" className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">
            {/* Left – Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-green-pale p-8 sm:p-10 lg:p-16 flex flex-col justify-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main leading-tight">
                Hungry for Something Amazing?{" "}
                <span className="text-green-mid">
                  Get Your Favorite Meals Today!
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-text-muted leading-relaxed max-w-md">
                Transform the way you eat with our curated selection of local
                favorites and international cuisines. Real-time tracking,
                eco-friendly packaging, and doorstep delivery.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                id="cta-order-now"
                className="mt-8 px-8 py-3.5 bg-yellow text-green-dark font-bold text-sm rounded-full hover:bg-yellow-dark transition-all duration-300 shadow-md self-start cursor-pointer"
              >
                Order Now
              </motion.button>
            </motion.div>

            {/* Right – Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative bg-yellow min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] flex items-end justify-center overflow-hidden"
            >
              <Image
                src="/images/cta-person.png"
                alt="Person enjoying delicious pizza"
                fill
                className="object-cover object-top"
              />
              {/* Yellow overlay for blend */}
              <div className="absolute inset-0 bg-yellow/10 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Launch Modal */}
      <AppLaunchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
