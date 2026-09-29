import React, { useState } from 'react';
import { 
  FileText, 
  Sparkles, 
  Copy, 
  Check, 
  Download, 
  Printer, 
  ShieldCheck, 
  Heart, 
  Share2, 
  Briefcase, 
  TrendingUp, 
  Award,
  RefreshCw
} from 'lucide-react';
import { UserProfile } from '../types';
import { CAREER_BREAK_REPHRASER_TEMPLATES } from '../data/mockData';

interface ResumeBuilderProps {
  profile: UserProfile;
  onNavigateTab: (tab: string) => void;
}

export const ResumeBuilder: React.FC<ResumeBuilderProps> = ({
  profile,
  onNavigateTab,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedTemplateKey, setSelectedTemplateKey] = useState<'maternity' | 'caregiving' | 'health' | 'relocation'>(
    profile.breakReason.includes('Elder') 
      ? 'caregiving' 
      : profile.breakReason.includes('Health') 
      ? 'health' 
      : profile.breakReason.includes('Relocation') 
      ? 'relocation' 
      : 'maternity'
  );

  const activeTemplate = CAREER_BREAK_REPHRASER_TEMPLATES[selectedTemplateKey];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-50 via-white to-purple-50 p-6 sm:p-8 rounded-3xl border border-rose-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-brand-700 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-brand-600 text-brand-600" />
              AI Resume & Career Break Rephraser
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Resume Modernizer & Narrative Engine
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Never hide or apologize for your career break. Our AI transforms gaps into compelling narratives of resilience, upskilling, and maturity that bypass ATS filters and impress executive interviewers.
            </p>
          </div>

          {/* ATS Score Gauge */}
          <div className="bg-white p-4 rounded-2xl border border-rose-200 shadow-xs flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black font-heading text-lg">
              92%
            </div>
            <div className="text-xs">
              <span className="font-bold text-slate-900 block">ATS Return-Score</span>
              <span className="text-emerald-700 font-semibold">High Match for {profile.targetRole}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Career Break Narrative Transformer (3 Output Formats) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[10px] font-bold text-brand-700 uppercase tracking-wider bg-rose-50 px-2 py-0.5 rounded">
              Confidence Generator
            </span>
            <h2 className="text-xl font-bold font-heading text-slate-900 mt-1">
              Select Your Break Reason to Rephrase
            </h2>
          </div>

          {/* Quick Category Buttons */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'maternity', label: 'Maternity / Childcare' },
              { id: 'caregiving', label: 'Elder Caregiving' },
              { id: 'health', label: 'Health & Recovery' },
              { id: 'relocation', label: 'Relocation' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTemplateKey(t.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedTemplateKey === t.id
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Formats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Format 1: Resume Work History Entry */}
          <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-brand-800 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-brand-600" />
                  For Your Resume (Work History)
                </span>
                <button
                  onClick={() => handleCopy(activeTemplate.resumeSnippet, 'resume')}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-brand-600 hover:border-brand-300 transition-colors"
                  title="Copy snippet"
                >
                  {copiedKey === 'resume' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-xs text-slate-700 font-mono whitespace-pre-line leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
                {activeTemplate.resumeSnippet}
              </p>
            </div>

            <div className="text-[11px] text-slate-400 font-medium">
              ✓ Framed as an active period of management & upskilling
            </div>
          </div>

          {/* Format 2: LinkedIn "About" Summary */}
          <div className="bg-purple-50/40 p-5 rounded-2xl border border-purple-100 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-plum-900 flex items-center gap-1.5">
                  <Share2 className="w-4 h-4 text-plum-600" />
                  For LinkedIn "About" Summary
                </span>
                <button
                  onClick={() => handleCopy(activeTemplate.linkedInAbout, 'linkedin')}
                  className="p-1.5 rounded-lg bg-white border border-purple-200 text-slate-600 hover:text-plum-600 transition-colors"
                  title="Copy summary"
                >
                  {copiedKey === 'linkedin' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-purple-100">
                "{activeTemplate.linkedInAbout}"
              </p>
            </div>

            <div className="text-[11px] text-plum-700 font-semibold">
              ✓ Attracts returnship recruiters directly on LinkedIn
            </div>
          </div>

          {/* Format 3: 60-Second Interview Elevator Pitch */}
          <div className="bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-emerald-600" />
                  For 60-Second Interview Pitch
                </span>
                <button
                  onClick={() => handleCopy(activeTemplate.interviewPitch, 'pitch')}
                  className="p-1.5 rounded-lg bg-white border border-emerald-200 text-slate-600 hover:text-emerald-700 transition-colors"
                  title="Copy pitch"
                >
                  {copiedKey === 'pitch' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed italic bg-white p-3 rounded-xl border border-emerald-100">
                "{activeTemplate.interviewPitch}"
              </p>
            </div>

            <div className="text-[11px] text-emerald-700 font-semibold">
              ✓ 100% pride, zero apologies, clear current commitment
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Printable / Downloadable Resume Preview */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md space-y-8" id="resume-preview">
        
        {/* Action Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 print:hidden">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Live Preview
            </span>
            <h3 className="text-lg font-bold font-heading text-slate-900">
              Modern ATS-Ready Re-entry Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintResume}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* The Printable Resume Sheet */}
        <div className="max-w-3xl mx-auto space-y-6 text-slate-800 font-sans">
          
          {/* Header */}
          <div className="text-center space-y-1.5 border-b border-slate-200 pb-5">
            <h1 className="text-2xl font-black font-heading text-slate-900 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-xs font-bold text-brand-700 tracking-wide uppercase">
              {profile.targetRole} • {profile.previousRole}
            </p>
            <p className="text-[11px] text-slate-500">
              {profile.location} • {profile.preferredWorkMode} • Open to Returnship & Full-Time Tracks
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Professional Summary
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Results-oriented <strong className="text-slate-900">{profile.targetRole}</strong> with {profile.yearsOfExperience} years of seasoned experience in {profile.previousIndustry}. Following an intentional {profile.breakDurationYears}-year career pause dedicated to {profile.breakReason.toLowerCase()}, recently completed rigorous technical modernizations in modern agile analytics, data visualization, and modern cloud workflows through the NAARVYA re-entry accelerator. Combines proven high-stakes stakeholder coordination with fresh technical agility.
            </p>
          </div>

          {/* Core Transferable Skills & Tooling */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Core Competencies & Modern Tooling
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
              <div>
                <strong className="text-slate-900 block text-[11px]">Transferable Leadership:</strong>
                <span>Agile/Scrum, Stakeholder Alignment, Root Cause Analysis, Multi-Stream Scheduling, Negotiation</span>
              </div>
              <div>
                <strong className="text-slate-900 block text-[11px]">Technical & Analytical:</strong>
                <span>{profile.previousSkills.slice(0, 5).join(', ')}, Power BI, SQL Queries, JIRA</span>
              </div>
            </div>
          </div>

          {/* Experience & Career Sabbatical */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Professional Experience & Sabbatical
            </h4>

            {/* Sabbatical Entry */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                <span>Career Sabbatical — Family Leadership & Continuous Upskilling</span>
                <span className="text-slate-500 font-semibold">{new Date().getFullYear() - profile.breakDurationYears} – Present</span>
              </div>
              <p className="text-[11px] text-brand-700 font-semibold">
                Personal Leadership & NAARVYA Returnship Accelerator
              </p>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pl-1">
                <li>Successfully managed multifaceted family care logistics while completing an 8-week precision upskilling curriculum in {profile.targetRole} fundamentals.</li>
                <li>Developed high-impact analytical portfolio case studies including live executive dashboards and product requirement specifications.</li>
                <li>Strengthened core capabilities in crisis management, resource optimization, and rapid contextual learning.</li>
              </ul>
            </div>

            {/* Prior Role Entry */}
            <div className="space-y-1 pt-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                <span>{profile.previousRole}</span>
                <span className="text-slate-500 font-semibold">Prior Tenure ({profile.yearsOfExperience} yrs)</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                {profile.previousIndustry}
              </p>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pl-1">
                <li>{profile.previousProjects || 'Led multi-disciplinary releases and managed project deliverables on aggressive production timelines.'}</li>
                <li>Facilitated cross-functional alignment between engineering, product, and leadership stakeholders with a 99% on-time milestone delivery rate.</li>
                <li>Mentored junior team members and authored comprehensive technical documentation.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              Education & Certifications
            </h4>
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800">{profile.qualification}</span>
              <span className="text-slate-500">Graduated</span>
            </div>
            <p className="text-[11px] text-slate-500">
              NAARVYA Certified Career Re-entry Fellow ({profile.targetRole} Track)
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
