"use client";

import React, { useEffect, useState } from 'react';
import { Trophy, Medal, Award, Crown } from 'lucide-react';
import { getApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

interface LeaderboardEntry {
  userId: string;
  name: string;
  score: number;
}

interface DailyLeaderboardProps {
  referralCode?: string;
}

export default function DailyLeaderboard({ referralCode }: DailyLeaderboardProps) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [myRank, setMyRank] = useState<number | null>(null);
  const [myScore, setMyScore] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const functions = getFunctions(getApp());
        const getLeaderboard = httpsCallable(functions, 'getDailyLeaderboard');
        const result: any = await getLeaderboard({ referralCode });
        
        if (result.data.success) {
          setLeaderboard(result.data.leaderboard);
          if (result.data.myRank !== undefined) setMyRank(result.data.myRank);
          if (result.data.myScore !== undefined) setMyScore(result.data.myScore);
        }
      } catch (error) {
        console.error("Failed to fetch leaderboard", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="w-full mx-auto p-6 flex justify-center text-green-900">
        <div className="animate-pulse flex space-x-4 w-full">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-4 bg-green-200 w-1/2"></div>
            <div className="space-y-3">
              <div className="h-10 bg-green-100"></div>
              <div className="h-10 bg-green-100"></div>
              <div className="h-10 bg-green-100"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto bg-white text-green-900 font-sans">
      <div className="flex items-center justify-between mb-6 border-b-2 border-green-800 pb-2">
        <h3 className="text-xl font-black flex items-center gap-2 uppercase tracking-widest">
          <Crown className="w-6 h-6 text-green-700" />
          Top Spinners
        </h3>
        <span className="text-xs bg-green-100 text-green-800 font-bold px-2 py-1 uppercase border border-green-800">Resets Midnight</span>
      </div>
      
      {myRank !== null && (
        <div className="mb-6 p-4 bg-green-600 text-white font-bold border-4 border-green-900 flex justify-between items-center uppercase">
          <span>Your Position: #{myRank}</span>
          <span>Score: {myScore} coins</span>
        </div>
      )}

      <div className="space-y-3">
        {leaderboard.length === 0 ? (
          <div className="text-center py-8 text-green-500 font-bold uppercase">
            No spins today yet. Be the first!
          </div>
        ) : (
          leaderboard.map((entry, idx) => (
            <div 
              key={entry.userId} 
              className={`flex items-center justify-between p-3 border-2 ${
                idx === 0 ? 'bg-yellow-100 border-yellow-500' :
                idx === 1 ? 'bg-slate-100 border-slate-400' :
                idx === 2 ? 'bg-amber-100 border-amber-600' :
                'bg-green-50 border-green-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-white border-2 border-current font-black">
                  {idx === 0 ? <Trophy className="w-4 h-4 text-yellow-600" /> :
                   idx === 1 ? <Medal className="w-4 h-4 text-slate-500" /> :
                   idx === 2 ? <Award className="w-4 h-4 text-amber-700" /> :
                   <span className="text-sm text-green-800">{idx + 1}</span>}
                </div>
                <div className="font-bold truncate max-w-[150px] uppercase">
                  {entry.name}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="font-black text-green-700">{entry.score} coins</div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-6 pt-4 border-t-4 border-green-800 text-xs text-green-900 font-bold space-y-2 uppercase tracking-wide">
        <div className="flex justify-between"><span>1st Place</span> <span className="bg-yellow-200 px-2 py-1 border border-yellow-500">₹200 Free Meal</span></div>
        <div className="flex justify-between"><span>2nd Place</span> <span className="bg-slate-200 px-2 py-1 border border-slate-500">₹100 Free Meal</span></div>
        <div className="flex justify-between"><span>3rd Place</span> <span className="bg-amber-200 px-2 py-1 border border-amber-600">1000 Extra Coins</span></div>
      </div>
    </div>
  );
}
