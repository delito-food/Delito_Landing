"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Sparkles } from "lucide-react";

interface AppLaunchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const apps = [
  {
    name: "Delito App",
    desc: "Order food from your favourite restaurants & street vendors",
    icon: "/delito_logo.jpeg",
    tag: "For Customers",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    name: "Vendor App",
    desc: "Manage your restaurant, menu & orders all in one place",
    icon: "/vendor_logo.jpeg",
    tag: "For Restaurants",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Delivery App",
    desc: "Earn on your schedule delivering orders across the city",
    icon: "/deliveryman_logo.jpeg",
    tag: "For Delivery Partners",
    tagColor: "bg-blue-100 text-blue-700",
  },
];

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
            <div className="relative hero-gradient hero-pattern px-6 pt-8 pb-10 text-center overflow-hidden">
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

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-yellow animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-yellow uppercase">
                    Coming Soon
                  </span>
                  <Sparkles className="w-5 h-5 text-yellow animate-pulse" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Apps Launching Soon!
                </h3>
                <p className="text-white/70 text-sm mt-2">
                  Three apps. One platform. Built for everyone.
                </p>
              </motion.div>
            </div>

            {/* App Cards */}
            <div className="px-5 py-6 space-y-3">
              {apps.map((app, i) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100"
                >
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-white">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <p className="text-sm font-bold text-gray-900">{app.name}</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${app.tagColor}`}>
                        {app.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-snug">{app.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 pb-6 text-center space-y-3">
              <p className="text-xs text-gray-400">
                Available soon on Google Play Store 🚀
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-0.5 bg-green-200 rounded-full" />
                <span className="text-[10px] font-semibold text-gray-400 tracking-wider uppercase">
                  Delito • Street ka Swaad
                </span>
                <div className="w-8 h-0.5 bg-green-200 rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
