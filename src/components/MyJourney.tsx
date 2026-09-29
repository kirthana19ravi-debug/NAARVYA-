import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Activity, 
  Layers, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Compass, 
  Bot, 
  ShieldCheck, 
  Award,
  ChevronRight,
  Clock,
  CheckCheck
} from 'lucide-react';
import { UserProfile, TransferableSkill, SkillGap, RoadmapWeek, Opportunity } from '../types';
import { calculateCareerReadiness } from '../services/aiEngine';

interface MyJourneyProps {
  profile: UserProfile;
  transferableSkills: TransferableSkill[];
  skillGaps: SkillGap[];
  roadmap: RoadmapWeek[];
  opportunities: Opportunity[];
  onNavigateTab: (tab: string) => void;
  openNairaChat: () => void;
}

export const MyJourney: React.FC<MyJourneyProps> = ({
  profile,
  transferableSkills,
  skillGaps,
  roadmap,
  opportunities,
  onNavigateTab,
  openNairaChat,
}) => {
  const readiness = calculateCareerReadiness(profile, skillGaps);
  const completedWeeksCount = profile.completedRoadmapWeeks.length;
  const bridgedGapsCount = skillGaps.filter(g => g.status === 'Bridged').length;
  const inProgressGapsCount = skillGaps.filter(g => g.status === 'In Progress').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Welcome Banner with Career Readiness Indicator */}
      <div className="bg-gradient-to-r from-rose-500 via-brand-600 to-plum-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Glow circles */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-1/3 -top-10 w-48 h-48 bg-rose-400/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Welcome Text */}
          <div className="lg:col-span-2 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Personalized Career Re-entry Dashboard</span>
              <span>•</span>
              <span className="text-rose-100">{profile.breakDurationYears}-Year Career Pause ({profile.breakReason})</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-heading tracking-tight">
              Welcome back, {profile.name}!
            </h1>
            
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              Transitioning from <span className="font-semibold text-white">{profile.previousRole}</span> into <span className="font-bold text-white underline decoration-rose-300 decoration-2">{profile.targetRole}</span>. 
              Your past experience gives you a massive head-start.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                onClick={() => onNavigateTab('learn')}
                className="px-5 py-2.5 bg-white text-brand-700 rounded-xl font-bold text-xs shadow-sm hover:bg-rose-50 transition-all flex items-center gap-1.5"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Continue Week {completedWeeksCount + 1} Roadmap</span>
              </button>

              <button
                onClick={openNairaChat}
                className="px-5 py-2.5 bg-white/15 hover:bg-white/25 border border-white/25 rounded-xl font-bold text-xs text-white backdrop-blur-md transition-all flex items-center gap-1.5"
              >
                <Bot className="w-4 h-4" />
                <span>Ask Naira AI</span>
              </button>
            </div>
          </div>

          {/* Visual Career Readiness Prototype Gauge */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col items-center justify-center text-center">
            <span className="text-xs uppercase tracking-wider font-semibold text-rose-200 mb-2">
              Career Readiness Index
            </span>
            
            <div className="relative w-32 h-32 flex items-center justify-center my-1">
              {/* Circular SVG Gauge */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#34d399"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * readiness.overallScore) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black font-heading text-white">{readiness.overallScore}%</span>
                <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                  {readiness.readinessLabel}
                </span>
              </div>
            </div>

            {/* Micro indicators */}
            <div className="w-full grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/15 text-[11px] text-left">
              <div>
                <span className="text-rose-200 block text-[10px]">Transferable:</span>
                <span className="font-bold text-white">{readiness.transferableSkillsScore}%</span>
              </div>
              <div>
                <span className="text-rose-200 block text-[10px]">Gaps Bridged:</span>
                <span className="font-bold text-emerald-300">{bridgedGapsCount} / {skillGaps.length}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CORE KEY FEATURE: Career Break ➔ Skill Bridge Pipeline */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-rose-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-100 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 bg-rose-50 px-2.5 py-1 rounded-md">
              <Activity className="w-3.5 h-3.5 text-brand-600" />
              Live Career Transition Pipeline
            </div>
            <h2 className="text-2xl font-extrabold font-heading text-slate-900 mt-1">
              Career Break ➔ Skill Bridge
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Click any node below to inspect details or take immediate action.
          </p>
        </div>

        {/* 5-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          
          {/* Node 1: Previous Experience */}
          <div 
            onClick={() => onNavigateTab('profile')}
            className="group cursor-pointer bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">Step 1</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Previous Experience</h3>
              <p className="text-sm font-bold text-slate-900 line-clamp-2">{profile.previousRole}</p>
              <p className="text-xs text-brand-700 font-semibold mt-1">{profile.yearsOfExperience} yrs in {profile.previousIndustry}</p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-200/60 text-[11px] text-slate-400">
              Verified Experience Base
            </div>
          </div>

          {/* Node 2: Transferable Skills */}
          <div 
            onClick={() => onNavigateTab('skills')}
            className="group cursor-pointer bg-rose-50/60 hover:bg-rose-50 p-4 rounded-2xl border border-rose-200 hover:border-brand-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-brand-700">Step 2</span>
                <ChevronRight className="w-3.5 h-3.5 text-brand-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">Transferable Skills</h3>
              <p className="text-sm font-bold text-slate-900">{transferableSkills.length} Core Superpowers</p>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-brand-700 font-semibold">
                <span>Avg {Math.round(transferableSkills.reduce((a, b) => a + b.relevancePercentage, 0) / transferableSkills.length)}% Relevance</span>
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-rose-200/60 text-[11px] text-brand-600 font-semibold flex items-center gap-1">
              <CheckCheck className="w-3.5 h-3.5" />
              Explore Superpowers
            </div>
          </div>

          {/* Node 3: Skill Gaps */}
          <div 
            onClick={() => onNavigateTab('skillgaps')}
            className="group cursor-pointer bg-amber-50/60 hover:bg-amber-50 p-4 rounded-2xl border border-amber-200 hover:border-amber-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Step 3</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Target Skill Gaps</h3>
              <p className="text-sm font-bold text-slate-900">{skillGaps.length} Target Gaps Identified</p>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-amber-800 font-semibold">
                <span>{bridgedGapsCount} Bridged • {inProgressGapsCount} Active</span>
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-amber-200/60 text-[11px] text-amber-700 font-semibold">
              Manage Skill Gaps
            </div>
          </div>

          {/* Node 4: Targeted Learning */}
          <div 
            onClick={() => onNavigateTab('learn')}
            className="group cursor-pointer bg-purple-50/60 hover:bg-purple-50 p-4 rounded-2xl border border-purple-200 hover:border-plum-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-plum-700">Step 4</span>
                <ChevronRight className="w-3.5 h-3.5 text-plum-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xs font-bold text-plum-600 uppercase tracking-wider mb-1">8-Week Roadmap</h3>
              <p className="text-sm font-bold text-slate-900">Week {completedWeeksCount + 1} of 8 In Progress</p>
              <div className="w-full bg-purple-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div 
                  className="bg-plum-600 h-full rounded-full transition-all"
                  style={{ width: `${(completedWeeksCount / 8) * 100}%` }}
                />
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-purple-200/60 text-[11px] text-plum-700 font-semibold">
              {Math.round((completedWeeksCount / 8) * 100)}% Completed
            </div>
          </div>

          {/* Node 5: Opportunities */}
          <div 
            onClick={() => onNavigateTab('opportunities')}
            className="group cursor-pointer bg-emerald-50/60 hover:bg-emerald-50 p-4 rounded-2xl border border-emerald-200 hover:border-emerald-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Step 5</span>
                <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Return-Friendly Roles</h3>
              <p className="text-sm font-bold text-slate-900">{opportunities.length} Matched Roles</p>
              <div className="mt-1 text-xs text-emerald-800 font-semibold">
                Top match: {Math.max(...opportunities.map(o => o.matchPercentage))}% Match
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-emerald-200/60 text-[11px] text-emerald-700 font-semibold">
              Explore Returnships
            </div>
          </div>

        </div>
      </div>

      {/* Two Column Section: Quick Actions & Top Matches */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Top 3 Transferable Skills Quick View */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold font-heading text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-600" />
              Your Top Transferable Skills
            </h3>
            <button
              onClick={() => onNavigateTab('skills')}
              className="text-xs font-semibold text-brand-600 hover:text-brand-800"
            >
              View All ({transferableSkills.length})
            </button>
          </div>

          <div className="space-y-3">
            {transferableSkills.slice(0, 3).map((skill) => (
              <div key={skill.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-800">{skill.name}</span>
                  <span className="text-[11px] font-extrabold text-brand-700 px-2 py-0.5 rounded-full bg-rose-100">
                    {skill.relevancePercentage}% Match
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 line-clamp-2">
                  {skill.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column: Current Learning Priority */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold font-heading text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-plum-600" />
              Current Learning Milestone
            </h3>
            <button
              onClick={() => onNavigateTab('learn')}
              className="text-xs font-semibold text-plum-600 hover:text-plum-800"
            >
              View Full 8 Weeks
            </button>
          </div>

          {roadmap[completedWeeksCount] ? (
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-purple-100 text-plum-800">
                  Week {roadmap[completedWeeksCount].weekNumber}
                </span>
                <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {roadmap[completedWeeksCount].hoursEstimated} hrs
                </span>
              </div>

              <h4 className="font-bold text-sm text-slate-900">
                {roadmap[completedWeeksCount].title}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                {roadmap[completedWeeksCount].description}
              </p>

              <div className="pt-2 border-t border-purple-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-plum-900">
                  Milestone: {roadmap[completedWeeksCount].milestoneProject.slice(0, 40)}...
                </span>
                <button
                  onClick={() => onNavigateTab('learn')}
                  className="px-3 py-1 bg-plum-600 hover:bg-plum-700 text-white rounded-lg text-xs font-bold shadow-xs"
                >
                  Start
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-xs text-slate-500">
              Roadmap completed! Ready for interview sprints.
            </div>
          )}
        </div>

        {/* Right Column: Top Matched Returnship */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold font-heading text-slate-900 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-600" />
              Top Returnship Match
            </h3>
            <button
              onClick={() => onNavigateTab('opportunities')}
              className="text-xs font-semibold text-emerald-600 hover:text-emerald-800"
            >
              Browse All ({opportunities.length})
            </button>
          </div>

          {opportunities[0] && (
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {opportunities[0].matchPercentage}% Match
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {opportunities[0].workMode}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-sm text-slate-900">{opportunities[0].title}</h4>
                <p className="text-xs font-semibold text-brand-700 mt-0.5">{opportunities[0].company}</p>
              </div>

              <div className="text-[11px] text-slate-600 line-clamp-2">
                {opportunities[0].description}
              </div>

              <div className="pt-2 border-t border-emerald-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-900">
                  {opportunities[0].stipendOrSalary}
                </span>
                <button
                  onClick={() => onNavigateTab('opportunities')}
                  className="px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shadow-xs"
                >
                  View
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
