import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Building, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Filter, 
  HeartHandshake, 
  X, 
  Send, 
  Calendar, 
  Award,
  ChevronRight
} from 'lucide-react';
import { Opportunity, UserProfile, WorkMode, OpportunityType } from '../types';
import { filterOpportunities } from '../services/aiEngine';

interface OpportunitiesProps {
  opportunities: Opportunity[];
  profile: UserProfile;
  onNavigateTab: (tab: string) => void;
}

export const Opportunities: React.FC<OpportunitiesProps> = ({
  opportunities,
  profile,
  onNavigateTab,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWorkMode, setSelectedWorkMode] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [returnshipOnly, setReturnshipOnly] = useState<boolean>(true);
  
  // Apply Modal state
  const [applyingOpportunity, setApplyingOpportunity] = useState<Opportunity | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [customCoverNote, setCustomCoverNote] = useState('');

  const filtered = filterOpportunities(opportunities, {
    search: searchTerm,
    workMode: selectedWorkMode,
    type: selectedType,
    returnshipOnly: returnshipOnly,
  });

  const handleOpenApplyModal = (opp: Opportunity) => {
    setApplyingOpportunity(opp);
    setAppliedSuccess(false);
    // Generate AI-tailored cover pitch
    setCustomCoverNote(
      `Dear ${opp.company} Hiring Team,\n\nI am writing to express my strong enthusiasm for the ${opp.title} program. Having previously served as ${profile.previousRole} for ${profile.yearsOfExperience} years in ${profile.previousIndustry}, and following a fulfilling ${profile.breakDurationYears}-year career pause for ${profile.breakReason}, I have proactively modernized my skill set in ${opp.matchedSkills.slice(0, 3).join(', ')}.\n\nYour dedicated return-to-work culture resonates deeply with me. I look forward to contributing my proven stakeholder management and analytical discipline to your high-performing team.\n\nWarm regards,\n${profile.name}`
    );
  };

  const handleConfirmApply = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setApplyingOpportunity(null);
      setAppliedSuccess(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-50 via-white to-rose-50 p-6 sm:p-8 rounded-3xl border border-emerald-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              Return-Friendly Curated Ecosystem
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Matched Returnships & Opportunities
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Every company featured here actively values career pauses. These programs offer mentorship, transition ramps, flexible schedules, and high full-time conversion rates.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl border border-emerald-200 shadow-xs">
            <HeartHandshake className="w-5 h-5 text-brand-600 shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-slate-900 block">Returnship Guarantee:</span>
              <span className="text-slate-500">Zero ATS gap penalties</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-6 pt-6 border-t border-emerald-100/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Keyword Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by title, company, skill..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none bg-white"
            />
          </div>

          {/* Work Mode Filter */}
          <div>
            <select
              value={selectedWorkMode}
              onChange={e => setSelectedWorkMode(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none bg-white font-medium text-slate-700"
            >
              <option value="All">All Work Modes</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Flexible Hours">Flexible Hours</option>
              <option value="On-site">On-site</option>
            </select>
          </div>

          {/* Opportunity Type */}
          <div>
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none bg-white font-medium text-slate-700"
            >
              <option value="All">All Opportunity Types</option>
              <option value="Returnship">Returnships Only</option>
              <option value="Internship">Internships</option>
              <option value="Full-Time">Full-Time (Gap Friendly)</option>
            </select>
          </div>

          {/* Returnship Priority Toggle */}
          <div className="flex items-center">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-brand-700 bg-rose-50 px-3 py-2 rounded-xl border border-rose-200 w-full hover:bg-rose-100 transition-colors">
              <input
                type="checkbox"
                checked={returnshipOnly}
                onChange={e => setReturnshipOnly(e.target.checked)}
                className="w-4 h-4 accent-brand-600 rounded cursor-pointer"
              />
              <span>Prioritize Returnships</span>
            </label>
          </div>

        </div>
      </div>

      {/* Opportunities List */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
            <p className="text-slate-500 text-sm font-medium">No opportunities matched your exact filter criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedWorkMode('All'); setSelectedType('All'); setReturnshipOnly(false); }}
              className="px-4 py-2 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filtered.map((opp) => (
            <div
              key={opp.id}
              className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-brand-300 shadow-xs hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                
                {/* Company & Role Header */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {opp.supportProgramName && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-100 text-brand-700 border border-rose-200">
                        ⭐ {opp.supportProgramName}
                      </span>
                    )}
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-plum-800">
                      {opp.type}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {opp.workMode}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    {opp.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-500 flex-wrap">
                    <span className="font-bold text-brand-700">{opp.company}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {opp.location}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {opp.experienceRequired}
                    </span>
                  </div>
                </div>

                {/* Match Percentage & Compensation */}
                <div className="flex items-center lg:flex-col lg:items-end justify-between gap-3 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-2xl font-black font-heading text-emerald-700">
                        {opp.matchPercentage}%
                      </div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                        Profile Match
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-slate-900 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 text-right">
                    {opp.stipendOrSalary}
                  </div>
                </div>

              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {opp.description}
              </p>

              {/* Matched Skills vs Skills To Learn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1.5">
                    ✓ Skills you already have:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {opp.matchedSkills.map((sk, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-white text-emerald-900 rounded text-[11px] font-medium border border-emerald-200">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-50/50 p-3 rounded-2xl border border-purple-100">
                  <span className="text-[10px] font-bold text-plum-800 uppercase tracking-wider block mb-1.5">
                    💡 Skills provided in program onboarding:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {opp.skillsToLearn.map((sk, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-white text-plum-900 rounded text-[11px] font-medium border border-purple-200">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits Pills & Apply Action */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {opp.benefits.map((b, i) => (
                    <span key={i} className="text-[10px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200">
                      • {b}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleOpenApplyModal(opp)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-plum-600 hover:from-brand-700 hover:to-plum-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>1-Click Apply with NAARVYA</span>
                </button>
              </div>

            </div>
          ))
        )}
      </div>

      {/* 1-Click Apply AI Modal */}
      {applyingOpportunity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-rose-100 space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-brand-700 uppercase tracking-wider">
                  AI-Powered Fast Application
                </span>
                <h3 className="text-lg font-bold font-heading text-slate-900">
                  Apply to {applyingOpportunity.title}
                </h3>
                <p className="text-xs text-slate-500">{applyingOpportunity.company}</p>
              </div>
              <button
                onClick={() => setApplyingOpportunity(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {appliedSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 font-heading">
                  Application Submitted Successfully!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your NAARVYA profile and tailored career-break letter have been forwarded to the {applyingOpportunity.company} returnship recruitment team.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConfirmApply} className="space-y-4">
                <div className="bg-rose-50 p-3 rounded-2xl border border-rose-200 text-xs space-y-1">
                  <span className="font-bold text-brand-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    NAARVYA AI Generated Elevator Pitch:
                  </span>
                  <p className="text-slate-600 text-[11px]">
                    Highlights your transferable QA/analyst skills and proudly frames your career break.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Tailored Cover Pitch:
                  </label>
                  <textarea
                    rows={6}
                    value={customCoverNote}
                    onChange={e => setCustomCoverNote(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none font-mono"
                  />
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                  <span className="text-slate-600">
                    Attached: <strong className="text-slate-800">{profile.resumeFileName || 'NAARVYA_Verified_Profile.pdf'}</strong>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    ATS 94% Match
                  </span>
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setApplyingOpportunity(null)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-plum-600 hover:from-brand-700 hover:to-plum-700 text-white font-bold text-xs shadow-md flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Application</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
