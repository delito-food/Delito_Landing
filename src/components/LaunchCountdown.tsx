
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CountdownOverlay({ isOpen, onClose }: OverlayProps) {
  const timeLeft = useCountdown("2026-07-26T00:00:00");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
        >
          <div className="relative w-full max-w-5xl h-[70vh] bg-white flex flex-col items-center justify-center p-6 sm:p-12 border-8 border-yellow">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-black hover:text-gray-500 transition-colors"
            >
              <X size={40} />
            </button>

            {/* Delito Icon */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 mb-8">
              <Image
                src="/delito_logo.jpeg"
                alt="Delito App Icon"
                width={112}
                height={112}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-text-main text-center uppercase tracking-tight leading-tight sm:leading-none mb-12">
              <span className="text-green-dark underline decoration-yellow decoration-8 underline-offset-4">DELITO</span>: Where Cravings <br className="hidden sm:block" /> Meet Their <span className="bg-yellow text-green-dark px-3 inline-block">KILLER</span>.
            </h1>

            {/* Countdown */}
            <div className="flex gap-4 sm:gap-10 md:gap-16">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <span className="text-4xl sm:text-6xl md:text-8xl font-black text-text-main tabular-nums tracking-tighter">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-text-muted uppercase tracking-widest mt-2 sm:mt-4">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="absolute bottom-6 sm:bottom-10 text-text-muted/50 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm">
              Launching 26 July in Hathras
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CountdownNavbar() {
  const timeLeft = useCountdown("2026-07-26T00:00:00");

  return (
    <div className="flex items-center gap-1.5 sm:gap-3 ml-auto mr-3 lg:mr-0 border border-yellow/20 px-2 py-1 sm:px-4 sm:py-1.5 bg-yellow/5">
      <div className="hidden md:flex flex-col items-end mr-2">
         <span className="text-yellow text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-none">Hathras Launch</span>
         <span className="text-white text-[10px] sm:text-xs font-semibold leading-none mt-1">July 26, 2026</span>
      </div>
      
      {[
        { label: "d", value: timeLeft.days },
        { label: "h", value: timeLeft.hours },
        { label: "m", value: timeLeft.minutes },
        { label: "s", value: timeLeft.seconds },
      ].map((item, i) => (
        <div key={item.label} className="flex items-baseline gap-0.5">
          <span className="text-white font-bold text-sm sm:text-base tabular-nums">
            {item.value.toString().padStart(2, "0")}
          </span>
          <span className="text-yellow text-[10px] sm:text-xs font-medium">{item.label}</span>
          {i < 3 && <span className="text-white/20 mx-0.5 sm:mx-1">:</span>}
        </div>
      ))}
    </div>
  );
}

