"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Coins, Sparkles, X, Trophy } from 'lucide-react';
import SpinWheel from '@/components/SpinWheel';
import ReferralTracker from '@/components/ReferralTracker';
import DailyLeaderboard from '@/components/DailyLeaderboard';
import WalletInfo from '@/components/WalletInfo';
import { getApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import '@/lib/firebase'; 

export default function SpinTheWheelPage() {
  const [user, setUser] = useState<{ name: string; referralCode: string } | null>(null);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [name, setName] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const [winMessage, setWinMessage] = useState<string | null>(null);
  const [spinError, setSpinError] = useState<string | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlName = params.get('name');
      const urlRefCode = params.get('refCode');
      if (urlName && urlRefCode) {
        setUser({ name: urlName, referralCode: urlRefCode });
      }
    }
  }, []);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && referralCode.trim()) {
      setUser({ name: name.trim(), referralCode: referralCode.trim() });
    }
  };

  const playSpinFn = async () => {
    if (!user) throw new Error("Not logged in");
    const functions = getFunctions(getApp());
    const playSpinWheel = httpsCallable(functions, 'playSpinWheel');
    
    // Call cloud function
    const result: any = await playSpinWheel({ referralCode: user.referralCode, fullName: user.name });
    
    if (result.data.success) {
      return result.data.reward; // { index, name, coins, etc }
    } else {
      throw new Error("Failed to spin");
    }
  };

  const handleSpinResult = (reward: any) => {
    setWinMessage(`You won ${reward.coins} coins! (${reward.name})`);
    setRefreshTrigger(prev => prev + 1);
    // Clear message after 5 seconds
    setTimeout(() => setWinMessage(null), 5000);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans text-green-900">
        <div className="w-full max-w-md bg-white border-4 border-green-800 p-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-black text-green-800 mb-2 uppercase tracking-tighter">
              SPIN & WIN!
            </h1>
            <p className="text-green-700 font-bold">Enter your details to claim your free daily spin</p>
          </div>
          
          <form onSubmit={handleJoin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-green-900 mb-2 uppercase">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white border-2 border-green-800 rounded-none px-4 py-3 text-green-900 focus:outline-none focus:border-green-500 focus:ring-0 transition-colors placeholder-green-300 font-bold"
                placeholder="ENTER YOUR NAME"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-green-900 mb-2 uppercase">Your Referral Code</label>
              <input 
                type="text" 
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                required
                className="w-full bg-white border-2 border-green-800 rounded-none px-4 py-3 text-green-900 focus:outline-none focus:border-green-500 focus:ring-0 transition-colors placeholder-green-300 font-bold"
                placeholder="E.G. AB12CD (FROM PROFILE)"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-green-600 text-white font-black py-4 rounded-none hover:bg-green-700 active:bg-green-800 transition-colors uppercase tracking-widest text-lg"
            >
              Let's Go!
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-green-900 pt-24 pb-12 font-sans relative">
      <WalletInfo referralCode={user.referralCode} refreshTrigger={refreshTrigger} />
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-green-800 uppercase">
            Spin The Wheel
          </h1>
          <p className="text-lg md:text-xl text-green-700 font-bold uppercase tracking-widest">
            Welcome, {user.name}! Spin daily for free meals and coins.
          </p>
          <button 
            onClick={() => setIsLeaderboardOpen(true)}
            className="mt-6 bg-green-800 text-white font-bold py-3 px-8 uppercase tracking-widest hover:bg-green-700 transition-colors border-2 border-green-900 flex items-center justify-center gap-2 mx-auto"
          >
            <Trophy className="w-5 h-5" />
            View Leaderboard
          </button>
        </div>

        {/* Win Message Toast */}
        <AnimatePresence>
          {winMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-8 py-4 font-black flex items-center gap-3 border-4 border-green-900 uppercase tracking-wider"
            >
              <Coins className="w-6 h-6 animate-none" />
              <span className="text-lg">{winMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto mt-8">
          {/* Main Game Area */}
          <div className="lg:col-span-8 flex flex-col items-center justify-center">
            <SpinWheel 
              onSpinResult={handleSpinResult} 
              playSpinFn={playSpinFn} 
              disabled={false} 
            />
          </div>

          {/* Sidebar: Referral */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <ReferralTracker 
              referralCode={user.referralCode}
              extraSpinsEarned={0} 
              totalReferrals={0}   
            />
          </div>
        </div>
      </div>
      
      {/* Leaderboard Modal */}
      <AnimatePresence>
        {isLeaderboardOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-green-900/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-white border-4 border-green-800 shadow-[16px_16px_0px_0px_rgba(22,101,52,1)] flex flex-col max-h-[85vh] overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b-4 border-green-800 bg-green-50">
                <h2 className="text-3xl font-black text-green-900 uppercase flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-green-700" />
                  Daily Leaderboard
                </h2>
                <button 
                  onClick={() => setIsLeaderboardOpen(false)}
                  className="p-2 hover:bg-green-200 transition-colors border-2 border-transparent hover:border-green-800 text-green-900"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto">
                <DailyLeaderboard referralCode={user.referralCode} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
