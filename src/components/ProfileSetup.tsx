import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  UploadCloud, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Briefcase, 
  User, 
  Clock, 
  Target, 
  MapPin, 
  FileText,
  Calendar,
  Layers
} from 'lucide-react';
import { UserProfile, WorkMode } from '../types';
import { DEMO_PROFILES } from '../data/mockData';

interface ProfileSetupProps {
  initialProfile: UserProfile;
  onSaveProfile: (profile: UserProfile) => void;
  onNavigateTab: (tab: string) => void;
}

export const ProfileSetup: React.FC<ProfileSetupProps> = ({
  initialProfile,
  onSaveProfile,
  onNavigateTab,
}) => {
  const [formData, setFormData] = useState<UserProfile>(initialProfile);
  const [skillInput, setSkillInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const breakReasons: UserProfile['breakReason'][] = [
    'Maternity / Childcare',
    'Elder Caregiving',
    'Family Relocation',
    'Personal Health & Recovery',
    'Higher Education & Upskilling',
    'Personal Sabbatical'
  ];

  const workModes: WorkMode[] = ['Remote', 'Hybrid', 'Flexible Hours', 'On-site'];

  const handleAddSkill = (e: React.KeyboardEvent | React.MouseEvent) => {
    if ('key' in e && e.key !== 'Enter') return;
    e.preventDefault();
    if (skillInput.trim() && !formData.previousSkills.includes(skillInput.trim())) {
      setFormData({
        ...formData,
        previousSkills: [...formData.previousSkills, skillInput.trim()]
      });
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      previousSkills: formData.previousSkills.filter(s => s !== skillToRemove)
    });
  };

  const handlePrefillDemo = (key: string) => {
    if (DEMO_PROFILES[key]) {
      setFormData({ ...DEMO_PROFILES[key] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
      onSaveProfile(formData);
      onNavigateTab('journey');
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-50 via-white to-purple-50 p-6 sm:p-8 rounded-3xl border border-rose-200 shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-brand-700 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-brand-600 text-brand-600" />
              NAARVYA AI Profile Builder
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Build Your Career Re-entry Profile
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Provide your background, career break context, and target job descriptions. Our AI will analyze skill gaps, generate your course roadmap, and unlock matched returnships.
            </p>
          </div>

          {/* Quick Demo Pre-fill */}
          <div className="bg-white p-3 rounded-2xl border border-rose-200 shadow-xs shrink-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              1-Click Demo Prefill:
            </span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => handlePrefillDemo('ananya')}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-rose-50 hover:bg-rose-100 text-brand-700 transition-colors"
              >
                Ananya (BA)
              </button>
              <button
                type="button"
                onClick={() => handlePrefillDemo('priya')}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-purple-50 hover:bg-purple-100 text-plum-700 transition-colors"
              >
                Priya (Dev)
              </button>
              <button
                type="button"
                onClick={() => handlePrefillDemo('sunita')}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 transition-colors"
              >
                Sunita (HR)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Single-View Streamlined Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        
        {/* Section 1: Basic Identity & Age */}
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 font-heading">
              <User className="w-4 h-4 text-brand-600" />
              1. Basic Identity & Location
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ananya Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Age (Years) *</label>
              <input
                type="number"
                min="18"
                max="75"
                required
                value={formData.age || 32}
                onChange={e => setFormData({ ...formData, age: parseInt(e.target.value) || 30 })}
                placeholder="e.g. 32"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Highest Qualification *</label>
              <input
                type="text"
                required
                value={formData.qualification}
                onChange={e => setFormData({ ...formData, qualification: e.target.value })}
                placeholder="e.g. B.Tech in Computer Science / MBA"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Current City / Location *</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={e => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Bengaluru, India (Open to Remote)"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Career Break / Gap Year */}
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 font-heading">
              <Clock className="w-4 h-4 text-rose-600" />
              2. Career Break / Gap Year Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Gap Duration (Years) *</label>
              <input
                type="number"
                min="0.5"
                step="0.5"
                max="25"
                required
                value={formData.breakDurationYears}
                onChange={e => setFormData({ ...formData, breakDurationYears: parseFloat(e.target.value) || 1 })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Primary Reason / Chapter *</label>
              <select
                value={formData.breakReason}
                onChange={e => setFormData({ ...formData, breakReason: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none bg-white font-medium text-slate-800"
              >
                {breakReasons.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Personal Reflection / Activities During Break (Optional)
            </label>
            <input
              type="text"
              value={formData.breakDescription}
              onChange={e => setFormData({ ...formData, breakDescription: e.target.value })}
              placeholder="e.g. Stepped back to raise children, managed family health, completed self-paced courses..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
        </div>

        {/* Section 3: Previous Work Experience & Skills */}
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 font-heading">
              <Briefcase className="w-4 h-4 text-plum-600" />
              3. Previous Work Experience & Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Previous Role / Title *</label>
              <input
                type="text"
                required
                value={formData.previousRole}
                onChange={e => setFormData({ ...formData, previousRole: e.target.value })}
                placeholder="e.g. Senior QA Analyst & Project Coordinator"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Years of Experience *</label>
              <input
                type="number"
                min="0"
                max="35"
                required
                value={formData.yearsOfExperience}
                onChange={e => setFormData({ ...formData, yearsOfExperience: parseInt(e.target.value) || 0 })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Previous Industry *</label>
            <input
              type="text"
              required
              value={formData.previousIndustry}
              onChange={e => setFormData({ ...formData, previousIndustry: e.target.value })}
              placeholder="e.g. Enterprise SaaS & FinTech / E-commerce / Healthcare"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          {/* Previous Skills Tags */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Previous Skills (Type and press Enter or click Add)
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={skillInput}
                onChange={e => setSkillInput(e.target.value)}
                onKeyDown={handleAddSkill}
                placeholder="e.g. Agile/Scrum, SQL, Stakeholder Management, Test Automation"
                className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-brand-500"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {formData.previousSkills.map(sk => (
                <span
                  key={sk}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-50 text-brand-700 text-xs font-medium border border-rose-200"
                >
                  {sk}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(sk)}
                    className="text-brand-500 hover:text-brand-800 ml-0.5"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Target Job Descriptions & Roles Desired */}
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 font-heading">
              <Target className="w-4 h-4 text-emerald-600" />
              4. Target Role & Job Descriptions You Are Looking For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Target Role / Desired Job Title *</label>
              <input
                type="text"
                required
                value={formData.targetRole}
                onChange={e => setFormData({ ...formData, targetRole: e.target.value })}
                placeholder="e.g. Product / Business Analyst"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Preferred Work Mode *</label>
              <select
                value={formData.preferredWorkMode}
                onChange={e => setFormData({ ...formData, preferredWorkMode: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none bg-white font-medium text-slate-800"
              >
                {workModes.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Paste or Describe the Job Descriptions You Are Looking For *
            </label>
            <textarea
              rows={4}
              required
              value={formData.targetJobDescription}
              onChange={e => setFormData({ ...formData, targetJobDescription: e.target.value })}
              placeholder="e.g. Looking for roles requiring user requirements gathering, Power BI or Tableau reporting, sprint planning, cross-functional engineering coordination, and flexible/remote work options..."
              className="w-full p-3.5 rounded-2xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none leading-relaxed"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              NAARVYA AI compares your previous skills against this exact job description to generate your course recommendations and matched opportunities!
            </p>
          </div>
        </div>

        {/* Submit & AI Analysis Trigger */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>AI analyzes your gap & target JD in real time</span>
          </div>

          <button
            type="submit"
            disabled={isAnalyzing}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-rose-600 to-plum-600 hover:from-brand-700 hover:to-plum-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <span>NAARVYA AI is analyzing your profile...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Analyze with AI & View Course & Job Suggestions</span>
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
};
