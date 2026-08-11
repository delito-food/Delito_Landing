"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Download, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function InvitePage() {
  const [refCode, setRefCode] = useState<string | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('ref');
      if (code) {
        setRefCode(code);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans text-green-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border-4 border-green-800 p-8 shadow-[16px_16px_0px_0px_rgba(22,101,52,1)] relative z-10"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="w-24 h-24 bg-yellow-400 rounded-full border-4 border-green-800 mx-auto flex items-center justify-center mb-6 shadow-inner"
          >
            <Gift className="w-12 h-12 text-green-900" />
          </motion.div>
          
          <h1 className="text-4xl font-black text-green-800 mb-4 uppercase tracking-tighter">
            You've Been Invited!
          </h1>
          <p className="text-lg text-green-700 font-bold leading-relaxed">
            Your friend invited you to Delito Foods. Join now and get a FREE spin to win coins and free meals!
          </p>
        </div>

        {refCode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-green-50 border-2 border-green-800 p-4 text-center mb-8"
          >
            <p className="text-sm font-bold uppercase text-green-800 mb-1">Referral Code Applied</p>
            <p className="text-2xl font-black tracking-widest text-green-600">{refCode}</p>
          </motion.div>
        )}

        <div className="space-y-4">
          <a 
            href="https://play.google.com/store/apps/details?id=com.platoos.customer" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 text-white font-black py-4 px-6 rounded-none hover:bg-green-700 active:bg-green-800 transition-colors uppercase tracking-widest flex items-center justify-between group"
          >
            <span className="flex items-center gap-2">
              <Download className="w-6 h-6" />
              Download App
            </span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <Link 
            href="/"
            className="w-full bg-transparent text-green-800 border-2 border-green-800 font-black py-4 px-6 rounded-none hover:bg-green-50 active:bg-green-100 transition-colors uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Explore Delito
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
