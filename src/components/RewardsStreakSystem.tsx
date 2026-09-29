import React, { useState } from 'react';
import { 
  Flame, 
  Sparkles, 
  Award, 
  Gift, 
  CheckCircle2, 
  Users, 
  FileCheck, 
  Heart, 
  Check, 
  Clock, 
  TrendingUp, 
  ShieldCheck,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserProfile, RewardPerk } from '../types';
import { REWARD_PERKS } from '../data/mockData';

interface RewardsStreakSystemProps {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  onNavigateTab: (tab: string) => void;
}

export const RewardsStreakSystem: React.FC<RewardsStreakSystemProps> = ({
  profile,
  setProfile,
  onNavigateTab,
}) => {
  const [rewards, setRewards] = useState<RewardPerk[]>(REWARD_PERKS);
  const [claimedDaily, setClaimedDaily] = useState(false);
  const [redeemedMessage, setRedeemedMessage] = useState<string | null>(null);

  const streakDays = profile.streakDays || 5;
  const currentPoints = profile.rewardPoints || 680;

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleClaimDaily = () => {
    if (claimedDaily) return;
    setClaimedDaily(true);
    setProfile(p => ({
      ...p,
      rewardPoints: p.rewardPoints + 25,
      streakDays: p.streakDays + 1
    }));

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  const handleRedeemPerk = (perk: RewardPerk) => {
    if (currentPoints < perk.costPoints) {
      alert(`You need ${perk.costPoints - currentPoints} more Spark Points to unlock "${perk.title}". Keep studying or transferring courses to earn more!`);
      return;
    }

    setProfile(p => ({
      ...p,
      rewardPoints: p.rewardPoints - perk.costPoints
    }));

    setRewards(prev =>
      prev.map(r => (r.id === perk.id ? { ...r, isUnlocked: true } : r))
    );

    setRedeemedMessage(`Congratulations! You unlocked "${perk.title}". A notification and redemption voucher has been emailed to you!`);
    
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#f59e0b', '#e11d48', '#a855f7', '#10b981']
      });
    } catch (err) {}

    setTimeout(() => {
      setRedeemedMessage(null);
    }, 4000);
  };

  const getPerkIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-5 h-5 text-plum-600" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-brand-600" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-blue-600" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />;
      default: return <Gift className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-plum-600 p-6 sm:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
              <Flame className="w-4 h-4 text-amber-300 fill-amber-300 animate-bounce" />
              <span>NAARVYA Study Streak & Re-entry Rewards</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-heading tracking-tight">
              Keep the Momentum Going, {profile.name.split(' ')[0]}!
            </h1>

            <p className="text-rose-100 text-xs sm:text-sm max-w-xl font-light">
              Every course module you complete, note you transfer to another woman, or mock interview you practice builds your streak and unlocks career perks.
            </p>
          </div>

          {/* Spark Balance & Streak Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center min-w-[120px]">
              <div className="flex items-center justify-center gap-1 text-2xl font-black font-heading text-amber-300">
                <Flame className="w-6 h-6 fill-amber-300 text-amber-300" />
                <span>{streakDays} Days</span>
              </div>
              <div className="text-[10px] uppercase font-bold text-rose-100 tracking-wider">Active Streak</div>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center min-w-[120px]">
              <div className="flex items-center justify-center gap-1 text-2xl font-black font-heading text-white">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>{currentPoints}</span>
              </div>
              <div className="text-[10px] uppercase font-bold text-rose-100 tracking-wider">Spark Points</div>
            </div>
          </div>
        </div>
      </div>

      {/* Redeemed Toast Message */}
      {redeemedMessage && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{redeemedMessage}</span>
        </div>
      )}

      {/* Streak Tracker & Daily Check-in Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-600" />
              Weekly Learning Consistency
            </h3>
            <p className="text-xs text-slate-500">
              Complete at least 15 minutes of course study or transfer 1 lesson to maintain your streak.
            </p>
          </div>

          <button
            onClick={handleClaimDaily}
            disabled={claimedDaily}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${
              claimedDaily
                ? 'bg-emerald-100 text-emerald-800 cursor-default'
                : 'bg-gradient-to-r from-amber-500 to-brand-600 text-white hover:from-amber-600 hover:to-brand-700 active:scale-95'
            }`}
          >
            {claimedDaily ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Checked In Today (+25 Pts)</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Claim Daily Check-in (+25 Pts)</span>
              </>
            )}
          </button>
        </div>

        {/* 7-Day Streak Bubbles */}
        <div className="grid grid-cols-7 gap-2 sm:gap-4 text-center">
          {daysOfWeek.map((day, idx) => {
            const isCompleted = idx < (streakDays % 7 || 5);
            const isToday = idx === 4; // Friday/current active day demo
            return (
              <div
                key={day}
                className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-between gap-2 ${
                  isCompleted
                    ? 'bg-amber-50/70 border-amber-200 text-amber-900'
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <span className="text-[11px] font-bold uppercase">{day}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    isCompleted
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {isCompleted ? <Flame className="w-4 h-4 fill-white" /> : '•'}
                </div>
                <span className="text-[10px] font-medium">
                  {isCompleted ? '+50 pts' : 'Pending'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Redeemable Rewards Shop */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <Gift className="w-5 h-5 text-plum-600" />
              Career Re-entry Reward Shop
            </h3>
            <p className="text-xs text-slate-500">
              Redeem your hard-earned Spark Points for high-impact professional perks.
            </p>
          </div>
          <span className="text-xs font-bold text-brand-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Balance: {currentPoints} Spark Points
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map(perk => {
            const canAfford = currentPoints >= perk.costPoints;
            return (
              <div
                key={perk.id}
                className={`bg-white p-6 rounded-3xl border transition-all flex flex-col justify-between space-y-4 ${
                  perk.isUnlocked
                    ? 'border-emerald-300 bg-emerald-50/10 shadow-xs'
                    : 'border-slate-200 hover:border-brand-200 shadow-xs'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {getPerkIcon(perk.iconName)}
                    </div>
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      {perk.costPoints} Points
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-slate-900">
                    {perk.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {perk.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {perk.category}
                  </span>

                  {perk.isUnlocked ? (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-xl flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Unlocked</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => handleRedeemPerk(perk)}
                      disabled={!canAfford}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                        canAfford
                          ? 'bg-gradient-to-r from-brand-600 to-plum-600 hover:from-brand-700 hover:to-plum-700 text-white'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {canAfford ? 'Redeem Perk' : `Need ${perk.costPoints - currentPoints} more`}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
