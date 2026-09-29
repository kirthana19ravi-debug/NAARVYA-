import React, { useState } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  UserCheck, 
  Bot, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  Layers, 
  Compass, 
  Activity, 
  CheckCircle2,
  ChevronDown,
  Flame,
  Share2,
  Gift,
  User,
  LogIn
} from 'lucide-react';
import { UserProfile } from '../types';
import { DEMO_PROFILES } from '../data/mockData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentProfile: UserProfile;
  setProfile: (profile: UserProfile) => void;
  openNairaChat: () => void;
  openAuthModal: () => void;
  nairaUnread?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentProfile,
  setProfile,
  openNairaChat,
  openAuthModal,
  nairaUnread = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoDropdownOpen, setDemoDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'profile', label: 'Profile Builder', icon: User },
    { id: 'journey', label: 'My Journey', icon: Activity },
    { id: 'skills', label: 'Skills', icon: Layers },
    { id: 'skillgaps', label: 'Skill Gaps', icon: CheckCircle2 },
    { id: 'learn', label: 'Learn', icon: GraduationCap },
    { id: 'transfer', label: 'Transfer to Women', icon: Share2 },
    { id: 'rewards', label: 'Streak & Rewards', icon: Flame },
    { id: 'opportunities', label: 'Opportunities', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'interview', label: 'Interview Prep', icon: UserCheck },
  ];

  const handleSelectDemo = (key: string) => {
    if (DEMO_PROFILES[key]) {
      setProfile({ ...DEMO_PROFILES[key] });
      setDemoDropdownOpen(false);
      setActiveTab('journey');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Tagline */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-rose-500 to-plum-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-2xl tracking-tight bg-gradient-to-r from-brand-700 via-brand-600 to-plum-700 bg-clip-text text-transparent">
                  NAARVYA
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-rose-50 text-brand-700 border border-rose-200">
                  AI Re-entry
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block font-medium">
                Her next chapter starts here.
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden 2xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-rose-50 text-brand-700 font-bold shadow-xs border border-rose-200/80'
                      : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-600' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            
            {/* Streak & Points Pill */}
            <button
              onClick={() => setActiveTab('rewards')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold transition-colors"
              title="View Streak & Rewards"
            >
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{currentProfile.streakDays || 5}d</span>
              <span className="text-amber-400">•</span>
              <span className="text-[11px] text-amber-800 font-semibold">{currentProfile.rewardPoints || 680} pts</span>
            </button>

            {/* Login / Auth Button */}
            <button
              onClick={openAuthModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-brand-700 hover:bg-rose-50 border border-slate-200 transition-colors"
              title="Sign in using Google, Email or Phone"
            >
              <LogIn className="w-3.5 h-3.5 text-brand-600" />
              <span>Sign In</span>
            </button>

            {/* Demo Profile Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDemoDropdownOpen(!demoDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold bg-gradient-to-r from-rose-50 to-purple-50 text-brand-700 border border-rose-200 rounded-lg hover:border-brand-400 transition-all shadow-xs"
                title="Switch demo profile for demonstration"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="hidden md:inline font-medium text-slate-500">Demo:</span>
                <span className="font-bold truncate max-w-[80px]">{currentProfile.name.split(' ')[0]}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {demoDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-rose-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Select Demo Profile (NAARVYA Hackathon)
                  </div>
                  
                  <button
                    onClick={() => handleSelectDemo('ananya')}
                    className={`w-full text-left px-3 py-2 text-xs flex flex-col hover:bg-rose-50/70 transition-colors ${currentProfile.id === 'demo-ananya' ? 'bg-rose-50/90 font-semibold' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Ananya Sharma (Age 32, 4y gap)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 text-brand-700">Maternity</span>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5">QA Lead ➔ Product Analyst</span>
                  </button>

                  <button
                    onClick={() => handleSelectDemo('priya')}
                    className={`w-full text-left px-3 py-2 text-xs flex flex-col hover:bg-rose-50/70 transition-colors ${currentProfile.id === 'demo-priya' ? 'bg-rose-50/90 font-semibold' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Priya Patel (Age 34, 5y gap)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-100 text-plum-700">Caregiving</span>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5">Web Dev ➔ React & Cloud Engineer</span>
                  </button>

                  <button
                    onClick={() => handleSelectDemo('sunita')}
                    className={`w-full text-left px-3 py-2 text-xs flex flex-col hover:bg-rose-50/70 transition-colors ${currentProfile.id === 'demo-sunita' ? 'bg-rose-50/90 font-semibold' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Sunita Rao (Age 36, 3y gap)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-100 text-teal-800">Health</span>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5">HR Generalist ➔ People Analytics Lead</span>
                  </button>

                  <div className="border-t border-slate-100 mt-1 pt-1 px-3 py-1">
                    <button
                      onClick={() => {
                        setDemoDropdownOpen(false);
                        setActiveTab('profile');
                      }}
                      className="w-full text-center py-1 text-xs text-brand-600 hover:text-brand-800 font-semibold"
                    >
                      + Create Custom Profile
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Naira AI Assistant Trigger */}
            <button
              onClick={openNairaChat}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-brand-600 to-plum-600 text-white text-xs font-semibold shadow-xs hover:shadow-md hover:from-brand-700 hover:to-plum-700 transition-all active:scale-95"
            >
              <Bot className="w-4 h-4" />
              <span className="font-bold hidden sm:inline">Ask Naira AI</span>
              {nairaUnread && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 border-2 border-white rounded-full"></span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="2xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="2xl:hidden border-t border-rose-100 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-rose-50 text-brand-700 font-bold border border-rose-200'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-600' : 'text-slate-400'}`} />
                {item.label}
              </button>
            );
          })}
          
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                openAuthModal();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-brand-600 font-bold px-2 py-1"
            >
              Sign In (Google / Email / Phone)
            </button>
            <div className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              Streak: {currentProfile.streakDays}d • {currentProfile.rewardPoints} pts
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
