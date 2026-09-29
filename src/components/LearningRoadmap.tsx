import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Circle, 
  Clock, 
  ExternalLink, 
  Award, 
  FolderGit2, 
  BookOpen, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp,
  Flame,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RoadmapWeek, UserProfile } from '../types';

interface LearningRoadmapProps {
  roadmap: RoadmapWeek[];
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  onNavigateTab: (tab: string) => void;
}

export const LearningRoadmap: React.FC<LearningRoadmapProps> = ({
  roadmap,
  profile,
  setProfile,
  onNavigateTab,
}) => {
  const [activeWeek, setActiveWeek] = useState<number>(
    profile.completedRoadmapWeeks.length + 1 <= roadmap.length 
      ? profile.completedRoadmapWeeks.length + 1 
      : 1
  );

  const completedWeeks = profile.completedRoadmapWeeks || [];
  const progressPercentage = Math.round((completedWeeks.length / (roadmap.length || 1)) * 100);

  const handleToggleWeekCompletion = (weekNumber: number) => {
    setProfile(prev => {
      const isCompleted = prev.completedRoadmapWeeks.includes(weekNumber);
      let updatedWeeks: number[];

      if (isCompleted) {
        updatedWeeks = prev.completedRoadmapWeeks.filter(w => w !== weekNumber);
      } else {
        updatedWeeks = [...prev.completedRoadmapWeeks, weekNumber].sort((a, b) => a - b);
        // Confetti burst for milestone achievement!
        try {
          confetti({
            particleCount: 80,
            spread: 90,
            origin: { y: 0.55 },
            colors: ['#e11d48', '#a855f7', '#10b981', '#f59e0b']
          });
        } catch (e) {}
      }

      // Boost readiness score proportionally
      const newReadiness = Math.min(98, 70 + updatedWeeks.length * 4);
      return {
        ...prev,
        completedRoadmapWeeks: updatedWeeks,
        careerReadinessScore: newReadiness
      };
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-rose-50 p-6 sm:p-8 rounded-3xl border border-purple-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-plum-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-plum-600 text-plum-600" />
              Tailored 8-Week Curriculum
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Personalized Learning Roadmap
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Designed around your target role of <span className="font-bold text-slate-800">{profile.targetRole}</span>. Formatted for flexible schedules (8–12 hrs/week) with zero fluff, top industry credentials, and portfolio projects.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-white p-3 rounded-2xl border border-purple-200 shadow-xs text-center min-w-[110px]">
              <div className="text-xl font-black font-heading text-plum-700 flex items-center justify-center gap-1">
                <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>{completedWeeks.length} / {roadmap.length}</span>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Weeks Completed</div>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-emerald-200 shadow-xs text-center min-w-[110px]">
              <div className="text-xl font-black font-heading text-emerald-700">{progressPercentage}%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Roadmap Progress</div>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-6 pt-6 border-t border-purple-100 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span>Overall Re-entry Curriculum Velocity</span>
            <span className="text-plum-700 font-bold">{progressPercentage}% Complete</span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-plum-600 via-rose-500 to-emerald-500 h-full rounded-full transition-all duration-700"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Week-by-Week Accordion Cards */}
      <div className="space-y-4">
        {roadmap.map((week) => {
          const isCompleted = completedWeeks.includes(week.weekNumber);
          const isOpen = activeWeek === week.weekNumber;

          return (
            <div
              key={week.weekNumber}
              className={`bg-white rounded-3xl border transition-all duration-200 overflow-hidden ${
                isCompleted
                  ? 'border-emerald-200 bg-emerald-50/10'
                  : isOpen
                  ? 'border-plum-400 shadow-md ring-1 ring-purple-100'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Week Header Row */}
              <div 
                className="p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                onClick={() => setActiveWeek(isOpen ? 0 : week.weekNumber)}
              >
                <div className="flex items-center gap-4 flex-1">
                  
                  {/* Completion Checkbox */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleWeekCompletion(week.weekNumber);
                    }}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                      isCompleted 
                        ? 'bg-emerald-600 text-white shadow-xs' 
                        : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                    }`}
                    title={isCompleted ? 'Mark incomplete' : 'Mark week completed'}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                  </button>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-100 text-plum-800">
                        Week {week.weekNumber}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Focus: <strong className="text-slate-700">{week.focusArea}</strong>
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {week.hoursEstimated} hours
                      </span>
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold font-heading ${isCompleted ? 'text-slate-600 line-through' : 'text-slate-900'}`}>
                      {week.title}
                    </h3>
                  </div>

                </div>

                {/* Right chevron */}
                <div className="flex items-center gap-3 shrink-0">
                  {isCompleted && (
                    <span className="hidden sm:inline text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                      Done
                    </span>
                  )}
                  {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>

              {/* Expanded Week Details */}
              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-5 text-xs animate-in fade-in duration-200">
                  
                  {/* Overview description */}
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    {week.description}
                  </p>

                  {/* Skills Covered Tags */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Core Skills Upgraded:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {week.skillsCovered.map((skill, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Milestone Portfolio Deliverable */}
                  <div className="bg-gradient-to-r from-purple-50 to-rose-50 p-4 rounded-2xl border border-purple-100 space-y-1">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-plum-700" />
                      <span className="text-xs font-bold text-plum-900 uppercase tracking-wider">
                        Milestone Portfolio Deliverable:
                      </span>
                    </div>
                    <p className="text-xs text-slate-800 font-medium pl-6">
                      {week.milestoneProject}
                    </p>
                  </div>

                  {/* Curated Resources */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Curated Learning Resources & Labs:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {week.resources.map((res, i) => (
                        <div key={i} className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 transition-colors">
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <BookOpen className="w-4 h-4 text-brand-600 shrink-0" />
                            <div className="truncate">
                              <span className="font-bold text-slate-800 truncate block text-xs">
                                {res.title}
                              </span>
                              <span className="text-[10px] text-slate-500 font-medium">
                                {res.provider} • {res.type}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {res.isFree && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                100% Free
                              </span>
                            )}
                            <a
                              href={res.url}
                              onClick={(e) => { e.preventDefault(); alert(`Opening course resource: ${res.title}`); }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-white"
                              title="Open resource"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-slate-500 text-[11px]">
                      Finished studying this module and built the milestone project?
                    </span>
                    <button
                      type="button"
                      onClick={() => handleToggleWeekCompletion(week.weekNumber)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                        isCompleted
                          ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      {isCompleted ? 'Mark as Incomplete' : 'Complete Week ' + week.weekNumber}
                    </button>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Graduation / Re-entry Readiness Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-brand-950 p-6 sm:p-8 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <h3 className="text-xl font-bold font-heading">
            Looking to accelerate your returnship timeline?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            You don't need to finish all 8 weeks before applying! Returnships at Microsoft, Amazon, and TCS accept candidates currently enrolled in active upskilling.
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('opportunities')}
          className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-all shrink-0 flex items-center gap-2"
        >
          <span>Explore Open Returnships</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
