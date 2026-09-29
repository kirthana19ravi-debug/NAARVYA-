import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Layers, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  HeartHandshake, 
  TrendingUp, 
  Star,
  Users,
  Award,
  Zap,
  PlayCircle
} from 'lucide-react';
import { UserProfile } from '../types';
import { DEMO_PROFILES } from '../data/mockData';

interface LandingPageProps {
  onStartJourney: () => void;
  onTryDemo: (profileKey?: string) => void;
  onNavigateTab: (tab: string) => void;
  currentProfile: UserProfile;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartJourney,
  onTryDemo,
  onNavigateTab,
}) => {
  const [activePersona, setActivePersona] = useState<'qa' | 'dev' | 'hr'>('qa');

  const personaBridges = {
    qa: {
      title: 'Project Coordinator / QA Lead ➔ Product & Business Analyst',
      breakContext: '4-Year Maternity & Childcare Break',
      prevRole: 'Senior QA & Project Coordinator',
      transferable: ['Crisis De-escalation & Prioritization', 'Defect Root Cause Analysis', 'Multi-Stakeholder Alignment', 'SQL & Database Logic'],
      skillGaps: ['Power BI & DAX Dashboards', 'Amplitude Product Analytics', 'Modern User Story Mapping'],
      learning: '8-Week Precision Roadmap (Power BI + Business Storytelling + Case Study)',
      opportunities: ['Microsoft Leap Returnship (₹85k/mo)', 'Amazon Amplify Track', 'Intuit Again Associate PM']
    },
    dev: {
      title: 'Frontend Developer ➔ Full Stack React 19 & Cloud Engineer',
      breakContext: '5-Year Elder Caregiving Break',
      prevRole: 'Frontend Web Developer',
      transferable: ['Core JavaScript Algorithmic Thinking', 'Extreme Patience & UX Empathy', 'Disciplined Git Architecture'],
      skillGaps: ['React 19 Server Components', 'TypeScript Enterprise Patterns', 'AWS Serverless Deployments'],
      learning: '10-Week Modern Web Full-Stack Blueprint + Live Cloud Sandbox',
      opportunities: ['Thoughtworks Vapasi Consultant', 'Goldman Sachs Returnship', 'Accenture Re-Ignite']
    },
    hr: {
      title: 'HR Generalist ➔ People Analytics & Talent Ops Lead',
      breakContext: '3-Year Health & Recovery Sabbatical',
      prevRole: 'HR Generalist & Talent Acquisition',
      transferable: ['Employee Psychology & Retention Insights', 'Strict Ethical Data Confidentiality', 'Cross-Department Conflict Mediation'],
      skillGaps: ['Tableau Attrition Forecasting', 'Python for HR Data Cleaning', 'Workday People Analytics'],
      learning: '8-Week People Analytics Accelerator + Kaggle Employee Attrition Model',
      opportunities: ['Deloitte Encore Practice Lead', 'TCS SCIP Senior Analyst', 'Target Accelerate Fellow']
    }
  };

  const currentBridge = personaBridges[activePersona];

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 gradient-bg-hero">
        {/* Decorative background blurs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/40 via-purple-200/30 to-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Super Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-rose-200 shadow-xs text-xs font-bold text-brand-700 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 fill-brand-600" />
              <span>India's #1 AI Career Re-entry & Returnship Ecosystem</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="hidden sm:inline text-slate-600 font-medium">100% Free for Returning Women</span>
            </div>

            {/* Hero Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-slate-900 leading-[1.12]">
              Her next chapter <br />
              <span className="gradient-text-primary">starts here.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Turn your experience into your next opportunity. NAARVYA maps your life superpowers, closes your tech skill gaps, and matches you with top returnships and flexible career paths.
            </p>

            {/* Hero Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={onStartJourney}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-rose-600 to-plum-600 text-white font-bold text-base shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Start My Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onTryDemo('ananya')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-rose-50/60 text-slate-800 font-bold text-base border border-slate-200 hover:border-rose-300 shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 group"
              >
                <PlayCircle className="w-4 h-4 text-brand-600 group-hover:scale-110 transition-transform" />
                <span>Try Demo Profile</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">1-Click</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-rose-100/80 shadow-xs text-center">
                <div className="font-heading font-extrabold text-2xl text-brand-700">88%</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Returnship Conversion</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-rose-100/80 shadow-xs text-center">
                <div className="font-heading font-extrabold text-2xl text-plum-700">450+</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Return-Friendly Partners</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-rose-100/80 shadow-xs text-center">
                <div className="font-heading font-extrabold text-2xl text-emerald-700">8–12 Wks</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Avg Precision Roadmap</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-rose-100/80 shadow-xs text-center">
                <div className="font-heading font-extrabold text-2xl text-brand-600">Zero Bias</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Empowerment-First AI</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KEY FEATURE: Career Break ➔ Skill Bridge Showcase */}
      <section className="py-16 bg-white border-y border-rose-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              Core Innovation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              The Career Break ➔ Skill Bridge
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              A career break is not dead time. See how NAARVYA converts your past experience and life chapters into high-value market currency.
            </p>

            {/* Interactive Persona Toggles */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <button
                onClick={() => setActivePersona('qa')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activePersona === 'qa'
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Ananya (Maternity Break ➔ Product Analyst)
              </button>
              <button
                onClick={() => setActivePersona('dev')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activePersona === 'dev'
                    ? 'bg-plum-600 text-white shadow-md shadow-plum-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Priya (Elder Caregiving ➔ React Engineer)
              </button>
              <button
                onClick={() => setActivePersona('hr')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activePersona === 'hr'
                    ? 'bg-teal-700 text-white shadow-md shadow-teal-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Sunita (Health Recovery ➔ People Analytics)
              </button>
            </div>
          </div>

          {/* Visual Transformation Pipeline Card */}
          <div className="bg-gradient-to-br from-rose-50/50 via-white to-purple-50/40 p-6 sm:p-8 rounded-3xl border border-rose-200 shadow-lg">
            <div className="flex items-center justify-between pb-6 border-b border-rose-100 mb-6 flex-wrap gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-rose-100/70 px-2.5 py-1 rounded-md">
                  Active Bridge Simulation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mt-2">
                  {currentBridge.title}
                </h3>
              </div>
              <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-rose-200 text-slate-700 shadow-xs">
                Context: <span className="font-bold text-brand-600">{currentBridge.breakContext}</span>
              </div>
            </div>

            {/* 5-Stage Visual Flow */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Stage 1: Previous Experience */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-brand-300 transition-colors">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs mb-3">
                    01
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Previous Experience</h4>
                  <p className="text-xs text-brand-700 font-semibold mb-2">{currentBridge.prevRole}</p>
                  <p className="text-xs text-slate-500">
                    Years of hardened systems knowledge, industry terminology, and delivery standards.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                  Foundation never expires
                </div>
              </div>

              {/* Stage 2: Transferable Skills */}
              <div className="bg-white p-5 rounded-2xl border border-rose-200 shadow-xs flex flex-col justify-between hover:border-brand-300 transition-colors bg-gradient-to-b from-white to-rose-50/30">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-brand-700 font-bold flex items-center justify-center text-xs mb-3">
                    02
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Transferable Skills</h4>
                  <p className="text-xs text-slate-500 mb-3">Extracted by NAARVYA AI:</p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {currentBridge.transferable.slice(0, 3).map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium text-[11px]">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-rose-100 text-[11px] text-brand-700 font-semibold">
                  ~92% Market Relevance
                </div>
              </div>

              {/* Stage 3: Skill Gaps */}
              <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs flex flex-col justify-between hover:border-amber-300 transition-colors bg-gradient-to-b from-white to-amber-50/20">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs mb-3">
                    03
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Target Skill Gaps</h4>
                  <p className="text-xs text-slate-500 mb-3">Modernized delta:</p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {currentBridge.skillGaps.map((gap, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                        <span className="text-[11px] font-medium">{gap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-100 text-[11px] text-amber-700 font-semibold">
                  Only ~24 hrs to close
                </div>
              </div>

              {/* Stage 4: 8-12 Wk Learning */}
              <div className="bg-white p-5 rounded-2xl border border-purple-200 shadow-xs flex flex-col justify-between hover:border-purple-300 transition-colors bg-gradient-to-b from-white to-purple-50/30">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-plum-700 font-bold flex items-center justify-center text-xs mb-3">
                    04
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Targeted Learning</h4>
                  <p className="text-xs text-slate-500 mb-2">Self-paced & flexible:</p>
                  <p className="text-xs text-slate-700 leading-snug font-medium mb-3">
                    {currentBridge.learning}
                  </p>
                  <div className="bg-purple-50 p-2 rounded-lg text-[11px] text-plum-800 font-semibold">
                    Hands-on Portfolio Project included
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-purple-100 text-[11px] text-plum-700 font-semibold">
                  Zero fluff, 100% impact
                </div>
              </div>

              {/* Stage 5: Return-Friendly Opportunities */}
              <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-colors bg-gradient-to-b from-white to-emerald-50/30">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs mb-3">
                    05
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Matched Roles</h4>
                  <p className="text-xs text-slate-500 mb-2">Returnship Cohorts:</p>
                  <ul className="space-y-1 text-xs">
                    {currentBridge.opportunities.map((opp, idx) => (
                      <li key={idx} className="bg-emerald-50 text-emerald-900 px-2 py-1 rounded text-[11px] font-semibold">
                        {opp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] text-emerald-700 font-bold">
                  88%+ Conversion Rate
                </div>
              </div>
            </div>

            {/* Simulation CTA */}
            <div className="mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-rose-100">
              <span className="text-xs text-slate-600 font-medium">
                Want to see this complete journey generated with live progress tracking and mock interviews?
              </span>
              <button
                onClick={() => onTryDemo(activePersona === 'qa' ? 'ananya' : activePersona === 'dev' ? 'priya' : 'sunita')}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all"
              >
                <span>Launch this profile in NAARVYA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-700 tracking-wider uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              The Return Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-3">
              How NAARVYA Powers Your Re-entry
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              A supportive, structured four-step path designed specifically for women returning after career pauses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-brand-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-brand-600 flex items-center justify-center font-bold text-lg mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                1. Empowering Profile Setup
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Input your previous role, career break duration, and target dreams. Our system treats your pause with dignity, identifying caregiving and life management as leadership assets.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-brand-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-plum-600 flex items-center justify-center font-bold text-lg mb-5 group-hover:bg-plum-600 group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                2. AI Skills & Gap Scan
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our AI disassembles your background into transferable competencies and benchmarks you against 2026 hiring demands. See exactly what you have and the few skills to bridge.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-brand-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-lg mb-5 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                3. 8–12 Wk Precision Plan
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No 4-year degree needed. Get a curated week-by-week curriculum, free industry certifications, and a portfolio case study designed for flexible family routines.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-brand-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                4. Returnships & Re-entry
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apply directly to returnship programs at Microsoft, Amazon, TCS, Deloitte, and Goldman Sachs. Rephrase your resume with AI and practice STAR behavioral interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NAARVYA vs Traditional Portals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-700 tracking-wider uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Why We Are Different
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-3">
              Built Specifically for Returning Women
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Standard job boards reject resumes with employment gaps. NAARVYA celebrates them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional Platforms */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm">
                  ✕
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-700">Traditional Job Boards</h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>ATS algorithms automatically filter out resumes with 1+ year employment gaps.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Treat caregiving or maternity as lost productivity rather than leadership maturity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Generic 500-hour course recommendations with zero direct returnship pipelines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Leave candidates feeling anxious, underconfident, and out of touch with modern tools.</span>
                </li>
              </ul>
            </div>

            {/* NAARVYA Platform */}
            <div className="bg-gradient-to-br from-rose-50/70 via-white to-purple-50/60 p-6 sm:p-8 rounded-3xl border-2 border-brand-400 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-800">NAARVYA Platform</h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Curated network of 450+ companies with formal returnship cohorts that require a career break.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>AI translates parenting and life transitions into quantifiable transferable competencies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>High-velocity 8-week precision roadmaps focusing solely on target role gaps.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Dedicated AI career coach "Naira" available 24/7 for confidence, resume, and interview prep.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="py-20 bg-slate-50/80 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-700 tracking-wider uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Real Returnee Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-3">
              They Restarted Their Careers. You Can Too.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                  "After 5 years out of tech raising my daughters, every recruiter rejected me because of the gap. NAARVYA’s Career Break ➔ Skill Bridge helped me realize my QA background and parenting time management were perfect for a Business Analyst role. I landed the Microsoft Leap returnship in 9 weeks!"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-brand-700 font-bold flex items-center justify-center text-sm">
                  AS
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Ananya Sharma</h4>
                  <p className="text-[11px] text-slate-500">Product Analyst @ Microsoft (4y break)</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                  "Caring for an ailing parent for 4 years made me doubt whether I could code modern React again. The AI skill gap roadmap showed me I only needed to learn React Server Components and TypeScript. Naira helped me rephrase my break confidently in my interviews."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-plum-700 font-bold flex items-center justify-center text-sm">
                  PP
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Priya Patel</h4>
                  <p className="text-[11px] text-slate-500">Frontend Engineer @ Thoughtworks (5y break)</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                  "I was terrified of explaining my 3-year medical break. NAARVYA gave me the exact wording for my resume and LinkedIn. I felt respected, empowered, and ended up with two competitive hybrid offers from Deloitte and TCS!"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-sm">
                  SR
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Sunita Rao</h4>
                  <p className="text-[11px] text-slate-500">People Analytics Lead @ Deloitte (3y break)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-brand-700 via-rose-700 to-plum-800 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Your career break was a chapter, not the conclusion.
          </h2>
          <p className="text-rose-100 text-base max-w-xl mx-auto">
            Join thousands of women returning to tech and business on their own terms. Discover your roadmap in under 3 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onStartJourney}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-brand-700 font-bold text-sm shadow-lg hover:bg-rose-50 transition-all"
            >
              Start My Free Journey
            </button>
            <button
              onClick={() => onTryDemo('ananya')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Explore Demo Profile</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
