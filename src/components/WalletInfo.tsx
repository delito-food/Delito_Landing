"use client";

import React, { useEffect, useState } from 'react';
import { getApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { Wallet, Clock, ChevronDown } from 'lucide-react';

interface WalletInfoProps {
  referralCode: string;
  refreshTrigger: number;
}

interface Transaction {
  id: string;
  coins: number;
  expiresAt: string;
  type: string;
}

export default function WalletInfo({ referralCode, refreshTrigger }: WalletInfoProps) {
  const [totalCoins, setTotalCoins] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!referralCode) return;

    async function fetchWallet() {
      try {
        const functions = getFunctions(getApp());
        const getWalletInfo = httpsCallable(functions, 'getWalletInfoByReferral');
        const result: any = await getWalletInfo({ referralCode });
        
        if (result.data.success) {
          setTotalCoins(result.data.totalCoins);
          setTransactions(result.data.transactions);
        }
      } catch (error) {
        console.error("Error fetching wallet info:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWallet();
  }, [referralCode, refreshTrigger]);

  if (loading) {
    return (
      <div className="absolute top-4 right-4 animate-pulse bg-green-100 w-32 h-12 border-2 border-green-800"></div>
    );
  }

  const hasExpiring = transactions.length > 0;

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white border-4 border-green-800 shadow-[4px_4px_0px_0px_rgba(22,101,52,1)] px-4 py-2 flex items-center gap-3 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(22,101,52,1)] active:translate-y-0 active:shadow-none transition-all"
        >
          <Wallet className="w-5 h-5 text-green-700" />
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold text-green-700 uppercase tracking-widest leading-none">Wallet</span>
            <span className="text-lg font-black text-green-900 leading-none">{totalCoins} <span className="text-sm">COINS</span></span>
          </div>
          {hasExpiring && <ChevronDown className={`w-4 h-4 text-green-900 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
        </button>

        {isOpen && hasExpiring && (
          <div className="absolute top-full right-0 mt-4 w-64 bg-white border-4 border-green-800 shadow-[8px_8px_0px_0px_rgba(22,101,52,1)] p-4 flex flex-col gap-3">
            <h4 className="text-sm font-black text-green-900 uppercase tracking-widest border-b-2 border-green-800 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-700" />
              Expiring Soon
            </h4>
            
            <div className="max-h-48 overflow-y-auto flex flex-col gap-2">
              {transactions.slice(0, 5).map((tx) => {
                const expiresDate = new Date(tx.expiresAt);
                const daysLeft = Math.ceil((expiresDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                return (
                  <div key={tx.id} className="bg-green-50 border-2 border-green-800 p-2 flex justify-between items-center">
                    <span className="font-black text-green-700">{tx.coins} COINS</span>
                    <span className="text-xs font-bold text-green-900 uppercase">in {daysLeft} day{daysLeft !== 1 ? 's' : ''}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
