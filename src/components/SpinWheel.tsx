"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const SEGMENTS = [
  { name: "Small Win", coins: 25, color: "#166534", textColor: "#ffffff" },
  { name: "Lucky", coins: 50, color: "#22c55e", textColor: "#ffffff" },
  { name: "Nice!", coins: 75, color: "#86efac", textColor: "#064e3b" },
  { name: "Big Win", coins: 100, color: "#dcfce7", textColor: "#064e3b" },
  { name: "Super Win", coins: 150, color: "#166534", textColor: "#ffffff" },
  { name: "Mega Win", coins: 250, color: "#22c55e", textColor: "#ffffff" },
  { name: "Jackpot", coins: 500, color: "#86efac", textColor: "#064e3b" },
  { name: "BIG JACKPOT", coins: 1000, color: "#dcfce7", textColor: "#064e3b" },
];

interface SpinWheelProps {
  onSpinResult: (reward: any) => void;
  playSpinFn: () => Promise<any>;
  disabled: boolean;
}

export default function SpinWheel({ onSpinResult, playSpinFn, disabled }: SpinWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = async () => {
    if (disabled || isSpinning) return;
    setIsSpinning(true);

    try {
      // 1. Call backend to get the result before starting the animation
      const result = await playSpinFn();
      // Assume result contains the index of the segment it should land on
      const targetIndex = result.index; 

      // 2. Calculate rotation
      const spins = 5; // number of full rotations
      const segmentAngle = 360 / SEGMENTS.length;
      
      // We want to subtract the targetIndex * segmentAngle so that the correct segment is at the top (0 degrees).
      // We also offset by half the segment angle because our segments start from 0deg.
      const offsetToCenter = segmentAngle / 2;
      const randomOffset = Math.floor(Math.random() * (segmentAngle - 10)) - (segmentAngle / 2 - 5);
      
      const targetRotation = rotation + (360 * spins) - (targetIndex * segmentAngle) - offsetToCenter + randomOffset - (rotation % 360);

      setRotation(targetRotation);

      // Wait for animation to finish (duration is 5s)
      setTimeout(() => {
        setIsSpinning(false);
        onSpinResult(result);
      }, 5000);

    } catch (error: any) {
      console.error(error);
      setIsSpinning(false);
      alert(error.message || "Failed to spin. Please try again or check if you have spins available.");
    }
  };

  return (
    <div className="relative flex flex-col items-center py-8">
      {/* Pointer */}
      <div className="absolute top-4 z-10 w-8 h-8 bg-green-900 transform rotate-45 border-4 border-white shadow-[0px_8px_0px_0px_rgba(22,101,52,1)]" />
      
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full p-2 bg-green-800 shadow-[0px_16px_0px_0px_rgba(20,83,45,1)]">
        <motion.div 
          className="w-full h-full rounded-full relative overflow-hidden border-4 border-green-900 bg-white"
          animate={{ rotate: rotation }}
          transition={{ duration: 5, ease: [0.15, 0.85, 0.35, 1] }} // smooth deceleration
        >
          {SEGMENTS.map((segment, idx) => {
            const angle = 360 / SEGMENTS.length;
            const rotationAngle = idx * angle;
            // CSS conic-gradient is cleaner for pie charts than CSS transforms
            return null; // see conic-gradient implementation below
          })}
          
          <div 
            className="absolute inset-0"
            style={{
              background: `conic-gradient(
                ${SEGMENTS[0].color} 0deg 45deg,
                ${SEGMENTS[1].color} 45deg 90deg,
                ${SEGMENTS[2].color} 90deg 135deg,
                ${SEGMENTS[3].color} 135deg 180deg,
                ${SEGMENTS[4].color} 180deg 225deg,
                ${SEGMENTS[5].color} 225deg 270deg,
                ${SEGMENTS[6].color} 270deg 315deg,
                ${SEGMENTS[7].color} 315deg 360deg
              )`
            }}
          />

          {/* Text Labels and separators */}
          {SEGMENTS.map((segment, idx) => {
            const angle = 360 / SEGMENTS.length;
            const textRotation = idx * angle + (angle / 2);
            
            return (
              <React.Fragment key={`segment-${idx}`}>
                {/* Separator line */}
                <div 
                  className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-white/50 origin-bottom"
                  style={{ transform: `rotate(${idx * angle}deg)` }}
                />
                
                {/* Text Label */}
                <div
                  className="absolute top-0 left-1/2 w-12 h-1/2 -ml-6 origin-bottom flex items-start justify-center pt-8 md:pt-12 z-10 font-black text-sm md:text-xl"
                  style={{ transform: `rotate(${textRotation}deg)`, color: segment.textColor }}
                >
                  <div className="flex flex-col items-center">
                    <span>{segment.coins}</span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          
          {/* Center Decor */}
          <div className="absolute top-1/2 left-1/2 -ml-8 -mt-8 w-16 h-16 bg-white rounded-full z-20 shadow-[0px_4px_0px_0px_rgba(22,101,52,1)] flex items-center justify-center border-4 border-green-900">
            <div className="w-8 h-8 bg-green-600 rounded-full" />
          </div>
        </motion.div>
      </div>

      <button
        onClick={handleSpin}
        disabled={disabled || isSpinning}
        className="mt-12 px-12 py-4 bg-green-600 border-4 border-green-900 text-white text-xl font-black rounded-none shadow-[8px_8px_0px_0px_rgba(22,101,52,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(22,101,52,1)] active:translate-y-1 active:shadow-[4px_4px_0px_0px_rgba(22,101,52,1)] transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2 uppercase tracking-widest"
      >
        {isSpinning ? <Loader2 className="w-6 h-6 animate-spin" /> : "SPIN NOW"}
      </button>
    </div>
  );
}
