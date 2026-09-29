import React from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  TrendingUp, 
  Check, 
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SkillGap, UserProfile } from '../types';

interface SkillGapAnalysisProps {
  skillGaps: SkillGap[];
  setSkillGaps: React.Dispatch<React.SetStateAction<SkillGap[]>>;
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  onNavigateTab: (tab: string) => void;
}

export const SkillGapAnalysis: React.FC<SkillGapAnalysisProps> = ({
  skillGaps,
  setSkillGaps,
  profile,
  setProfile,
  onNavigateTab,
}) => {
  const totalHoursToBridge = skillGaps
    .filter(g => g.status !== 'Bridged')
    .reduce((acc, curr) => acc + curr.estimatedHoursToBridge, 0);

  const bridgedCount = skillGaps.filter(g => g.status === 'Bridged').length;
  const inProgressCount = skillGaps.filter(g => g.status === 'In Progress').length;

  const handleToggleStatus = (gapId: string) => {
    setSkillGaps(prev => {
      const updated = prev.map(g => {
        if (g.id === gapId) {
          const nextStatus: SkillGap['status'] =
            g.status === 'Not Started'
              ? 'In Progress'
              : g.status === 'In Progress'
              ? 'Bridged'
              : 'Not Started';

          if (nextStatus === 'Bridged') {
            // Trigger celebration confetti
            try {
              confetti({
                particleCount: 60,
                spread: 70,
                origin: { y: 0.6 }
              });
            } catch (err) {}
          }
          return { ...g, status: nextStatus };
        }
        return g;
      });

      // Recalculate and update profile readiness score
      const newBridged = updated.filter(g => g.status === 'Bridged').length;
      const boost = Math.min(98, 70 + newBridged * 5);
      setProfile(p => ({ ...p, careerReadinessScore: boost }));

      return updated;
    });
  };

  const getSeverityBadge = (severity: SkillGap['gapSeverity']) => {
    switch (severity) {
      case 'High':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">High Priority</span>;
      case 'Moderate':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">Moderate Gap</span>;
      case 'Low':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Light Refresh</span>;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'None': return 'text-slate-400 bg-slate-100';
      case 'Beginner': return 'text-amber-700 bg-amber-50 border border-amber-200';
      case 'Intermediate': return 'text-blue-700 bg-blue-50 border border-blue-200';
      case 'Advanced': return 'text-purple-700 bg-purple-50 border border-purple-200';
      case 'Expert': return 'text-emerald-700 bg-emerald-50 border border-emerald-200';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-50/80 via-white to-rose-50/70 p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
              Target Role Benchmarking
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Skill Gap Analysis
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Comparing your current skillset against active 2026 hiring criteria for <span className="font-bold text-slate-800">{profile.targetRole}</span>. You don't need to re-learn everything — only close these targeted gaps.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-white p-3 rounded-2xl border border-amber-200 shadow-xs text-center min-w-[100px]">
              <div className="text-xl font-black font-heading text-amber-700">~{totalHoursToBridge} hrs</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Est. Bridge Time</div>
            </div>
            <div className="bg-white p-3 rounded-2xl border border-emerald-200 shadow-xs text-center min-w-[100px]">
              <div className="text-xl font-black font-heading text-emerald-700">{bridgedCount} / {skillGaps.length}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Gaps Bridged</div>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="mt-6 pt-4 border-t border-amber-100/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="w-full sm:w-2/3 bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${(bridgedCount / (skillGaps.length || 1)) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold text-slate-600 shrink-0">
            {Math.round((bridgedCount / (skillGaps.length || 1)) * 100)}% Skill Gap Closure
          </span>
        </div>
      </div>

      {/* Skill Gaps Comparison Grid */}
      <div className="space-y-4">
        {skillGaps.map((gap) => {
          const isBridged = gap.status === 'Bridged';
          const isInProgress = gap.status === 'In Progress';

          return (
            <div
              key={gap.id}
              className={`p-6 rounded-3xl border transition-all duration-200 bg-white ${
                isBridged 
                  ? 'border-emerald-300 bg-emerald-50/20' 
                  : isInProgress
                  ? 'border-amber-300 bg-amber-50/10'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Left: Skill Details */}
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {getSeverityBadge(gap.gapSeverity)}
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {gap.category}
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {gap.estimatedHoursToBridge} hours to master
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold font-heading ${isBridged ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                    {gap.skillName}
                  </h3>

                  {/* Level Comparison: Current vs Target */}
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs text-slate-500 font-medium">Your current level:</span>
                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${getLevelColor(gap.currentLevel)}`}>
                      {gap.currentLevel}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs text-slate-500 font-medium">Target role requires:</span>
                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${getLevelColor(gap.requiredLevel)}`}>
                      {gap.requiredLevel}
                    </span>
                  </div>

                  {/* Recommended Resource */}
                  <div className="pt-2 text-xs text-slate-700 flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Recommended Bridge:</strong> {gap.recommendedResource}
                    </span>
                  </div>
                </div>

                {/* Right: Status Action Controller */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Status:
                    </span>
                    <button
                      onClick={() => handleToggleStatus(gap.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-xs ${
                        isBridged
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : isInProgress
                          ? 'bg-amber-500 text-white hover:bg-amber-600'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                      title="Click to toggle status (Not Started -> In Progress -> Bridged)"
                    >
                      {isBridged ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Bridged (Complete)</span>
                        </>
                      ) : isInProgress ? (
                        <>
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>In Progress</span>
                        </>
                      ) : (
                        <span>Mark as In Progress</span>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => onNavigateTab('learn')}
                    className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-1"
                  >
                    <span>View in 8-Week Roadmap</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Action Footer */}
      <div className="bg-slate-900 text-white p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-base font-heading">
            Ready to tackle these skills step by step?
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Your personalized 8-week learning plan integrates these gaps into bite-sized weekly milestones.
          </p>
        </div>
        <button
          onClick={() => onNavigateTab('learn')}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-plum-600 hover:from-brand-700 hover:to-plum-700 font-bold text-xs shadow-md transition-all whitespace-nowrap"
        >
          Open 8-Week Learning Roadmap
        </button>
      </div>

    </div>
  );
};
