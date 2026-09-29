import React, { useState } from 'react';
import { 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  HelpCircle, 
  Plus, 
  ArrowRight,
  Filter,
  ShieldCheck
} from 'lucide-react';
import { TransferableSkill, UserProfile } from '../types';

interface TransferableSkillsProps {
  skills: TransferableSkill[];
  profile: UserProfile;
  onNavigateTab: (tab: string) => void;
}

export const TransferableSkills: React.FC<TransferableSkillsProps> = ({
  skills,
  profile,
  onNavigateTab,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>(skills[0]?.id || null);

  const categories = ['All', 'Strategic & Leadership', 'Execution & Operations', 'Analytical & Problem Solving', 'Stakeholder & Communication', 'Domain & Technical'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-50 via-white to-purple-50 p-6 sm:p-8 rounded-3xl border border-rose-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-brand-700 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-brand-600 text-brand-600" />
              AI Superpower Identification
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Your Transferable Skills
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              We disassembled your <span className="font-bold text-slate-800">{profile.previousRole}</span> tenure and your <span className="font-bold text-brand-700">{profile.breakDurationYears}-year career pause</span>. Here is the concrete proof that your foundation is exceptionally strong for <span className="font-bold text-plum-700">{profile.targetRole}</span>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigateTab('skillgaps')}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-all"
            >
              <span>View Skill Gaps Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mt-6 pt-6 border-t border-rose-100 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-rose-50/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Transferable Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSkills.map((skill) => {
          const isExpanded = expandedSkillId === skill.id;
          return (
            <div
              key={skill.id}
              className={`bg-white rounded-3xl border transition-all duration-200 overflow-hidden ${
                isExpanded 
                  ? 'border-brand-400 shadow-md ring-1 ring-brand-200' 
                  : 'border-slate-200 hover:border-brand-200 shadow-xs'
              }`}
            >
              {/* Card Header */}
              <div 
                onClick={() => setExpandedSkillId(isExpanded ? null : skill.id)}
                className="p-6 cursor-pointer flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-50 text-plum-700 border border-purple-100">
                      {skill.category}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Confidence: {skill.confidenceScore}%
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {skill.explanation}
                  </p>
                </div>

                {/* Relevance Percentage Badge */}
                <div className="text-center shrink-0 bg-rose-50 p-3 rounded-2xl border border-rose-100 min-w-[70px]">
                  <div className="text-xl font-black font-heading text-brand-700">
                    {skill.relevancePercentage}%
                  </div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    Relevance
                  </div>
                </div>
              </div>

              {/* Progress bar visual */}
              <div className="w-full bg-slate-100 h-1.5">
                <div 
                  className="bg-gradient-to-r from-brand-500 to-plum-600 h-full rounded-r-full transition-all"
                  style={{ width: `${skill.relevancePercentage}%` }}
                />
              </div>

              {/* Detailed Breakdown (Expanded) */}
              {isExpanded && (
                <div className="p-6 bg-slate-50/60 border-t border-slate-100 space-y-4 animate-in fade-in duration-200 text-xs">
                  
                  {/* Past vs Target Role Translation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-3.5 rounded-2xl border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Where you honed this:
                      </span>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {skill.pastApplication}
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-2xl border border-rose-200 bg-rose-50/20">
                      <span className="text-[10px] font-bold text-brand-700 uppercase tracking-wider block mb-1">
                        Why hiring managers want it for {profile.targetRole}:
                      </span>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {skill.targetRoleValue}
                      </p>
                    </div>
                  </div>

                  {/* Interview phrasing advice */}
                  <div className="bg-purple-50/60 p-3.5 rounded-2xl border border-purple-100 text-slate-700">
                    <span className="font-bold text-plum-900 block mb-0.5">
                      💡 How to state this in an interview:
                    </span>
                    <span className="italic text-slate-600">
                      "My background in {profile.previousRole} coupled with my life pause gave me deep discipline in {skill.name.toLowerCase()}, which allows me to deliver immediate value as a {profile.targetRole}."
                    </span>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Empowering Affirmation Callout */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 p-6 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-emerald-950 font-heading">
              Transferable skills never expire with time
            </h4>
            <p className="text-xs text-emerald-800 mt-0.5">
              While software versions update, problem-solving, emotional intelligence, and stakeholder mediation remain rare, highly-compensated assets.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigateTab('resume')}
          className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 whitespace-nowrap"
        >
          Add to My Resume
        </button>
      </div>

    </div>
  );
};
