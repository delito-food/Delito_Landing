"use client";

import React, { useEffect, useState } from 'react';
import { Share2, Users, Gift } from 'lucide-react';

interface ReferralTrackerProps {
  referralCode: string;
  extraSpinsEarned: number;
  totalReferrals: number;
}

export default function ReferralTracker({ referralCode, extraSpinsEarned, totalReferrals }: ReferralTrackerProps) {
  const shareText = `Hey! Join Delito and we both get a FREE spin on the reward wheel! Click here: https://www.delitofoods.com/invite?ref=${referralCode}`;
  
  const handleShare = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full mx-auto bg-white border-4 border-green-800 p-6 text-green-900 font-sans shadow-[8px_8px_0px_0px_rgba(22,101,52,1)]">
      <h3 className="text-2xl font-black mb-4 flex items-center gap-2 uppercase tracking-tight">
        <Users className="w-8 h-8 text-green-700" />
        Refer Friends, Get Spins!
      </h3>
      
      <p className="text-sm text-green-700 font-bold mb-6 uppercase">
        When your friend joins Delito and spins the wheel, you'll instantly earn an extra spin!
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 border-2 border-green-800 p-4 text-center">
          <div className="text-4xl font-black text-green-800">{totalReferrals}</div>
          <div className="text-xs uppercase font-bold tracking-wider mt-1 text-green-700">Friends Joined</div>
        </div>
        <div className="bg-green-50 border-2 border-green-800 p-4 text-center">
          <div className="text-4xl font-black text-green-600">{extraSpinsEarned}</div>
          <div className="text-xs uppercase font-bold tracking-wider mt-1 text-green-700">Extra Spins</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-white p-3 flex justify-between items-center border-2 border-green-800">
          <span className="text-xs text-green-700 font-bold uppercase tracking-wider">Your Code</span>
          <span className="font-mono font-black tracking-widest text-xl">{referralCode}</span>
        </div>
        
        <button
          onClick={handleShare}
          className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] transition-colors font-black flex items-center justify-center gap-2 uppercase tracking-widest text-white border-4 border-green-900 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)] active:translate-y-1 active:shadow-none"
        >
          <Share2 className="w-5 h-5" />
          Share on WhatsApp
        </button>
      </div>
    </div>
  );
}
