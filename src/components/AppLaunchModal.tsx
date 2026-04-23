"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Bell, Sparkles } from "lucide-react";

interface AppLaunchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppLaunchModal({ isOpen, onClose }: AppLaunchModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Top Gradient Banner */}
            <div className="relative hero-gradient hero-pattern px-6 pt-8 pb-12 text-center overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-4 right-6 w-24 h-24 bg-yellow/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-2 left-8 w-20 h-20 bg-yellow/10 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/25 transition-all duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} strokeWidth={2.5} />
              </button>

              {/* Logo */}
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex justify-center mb-4"
              >
                <Image
                  src="/images/delito.png"
                  alt="Delito Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg"
                />
              </motion.div>

              {/* Sparkle Icon + Title */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-yellow animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-yellow uppercase">
                    Coming Soon
                  </span>
                  <Sparkles className="w-5 h-5 text-yellow animate-pulse" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  App Launching Soon!
                </h3>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="px-6 py-8 text-center space-y-5">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="text-sm sm:text-base text-text-muted leading-relaxed"
              >
                We&apos;re cooking up something amazing! The <strong className="text-green-mid">Delito App</strong> will soon be available on the Google Play Store. Stay tuned for the ultimate food experience.
              </motion.p>

              {/* Notification CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex flex-col items-center gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow text-green-dark font-bold text-sm rounded-full hover:bg-yellow-dark transition-all duration-300 shadow-md cursor-pointer"
                >
                  <Bell size={16} strokeWidth={2.5} />
                  Notify Me When It Launches
                </motion.button>
                <span className="text-xs text-text-muted">
                  No spam, just delicious updates 🍽️
                </span>
              </motion.div>

              {/* Bottom accent */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="w-8 h-0.5 bg-green-light rounded-full" />
                <span className="text-[10px] font-semibold text-text-muted tracking-wider uppercase">
                  Delito • Street ka Swaad
                </span>
                <div className="w-8 h-0.5 bg-green-light rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
