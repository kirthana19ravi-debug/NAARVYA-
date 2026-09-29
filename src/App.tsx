import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { ProfileSetup } from './components/ProfileSetup';
import { MyJourney } from './components/MyJourney';
import { TransferableSkills } from './components/TransferableSkills';
import { SkillGapAnalysis } from './components/SkillGapAnalysis';
import { LearningRoadmap } from './components/LearningRoadmap';
import { Opportunities } from './components/Opportunities';
import { ResumeBuilder } from './components/ResumeBuilder';
import { InterviewPrep } from './components/InterviewPrep';
import { NairaAssistant } from './components/NairaAssistant';
import { Footer } from './components/Footer';

import { UserProfile, TransferableSkill, SkillGap, RoadmapWeek, Opportunity } from './types';
import { DEMO_PROFILES, REALISTIC_OPPORTUNITIES } from './data/mockData';
import { 
  getTransferableSkillsForProfile, 
  getSkillGapsForProfile, 
  getRoadmapForProfile,
  calculateCareerReadiness 
} from './services/aiEngine';
import { Bot, Sparkles } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currentProfile, setCurrentProfile] = useState<UserProfile>(DEMO_PROFILES.ananya);
  const [transferableSkills, setTransferableSkills] = useState<TransferableSkill[]>(
    getTransferableSkillsForProfile(DEMO_PROFILES.ananya)
  );
  const [skillGaps, setSkillGaps] = useState<SkillGap[]>(
    getSkillGapsForProfile(DEMO_PROFILES.ananya)
  );
  const [roadmap, setRoadmap] = useState<RoadmapWeek[]>(
    getRoadmapForProfile(DEMO_PROFILES.ananya)
  );
  const [opportunities, setOpportunities] = useState<Opportunity[]>(REALISTIC_OPPORTUNITIES);
  const [isNairaOpen, setIsNairaOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // When current profile changes, sync skills, gaps and roadmap
  useEffect(() => {
    setTransferableSkills(getTransferableSkillsForProfile(currentProfile));
    setSkillGaps(getSkillGapsForProfile(currentProfile));
    setRoadmap(getRoadmapForProfile(currentProfile));
  }, [currentProfile.id, currentProfile.targetRole]);

  const handleTryDemo = (profileKey: string = 'ananya') => {
    if (DEMO_PROFILES[profileKey]) {
      setCurrentProfile({ ...DEMO_PROFILES[profileKey] });
      setActiveTab('journey');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStartJourney = () => {
    setActiveTab('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateTab = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f8] text-slate-800 antialiased font-sans">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigateTab}
        currentProfile={currentProfile}
        setProfile={setCurrentProfile}
        openNairaChat={() => setIsNairaOpen(true)}
        openAuthModal={() => setIsAuthModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'home' && (
          <LandingPage
            onStartJourney={handleStartJourney}
            onTryDemo={handleTryDemo}
            onNavigateTab={handleNavigateTab}
            currentProfile={currentProfile}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileSetup
            initialProfile={currentProfile}
            onSaveProfile={(updatedProfile) => {
              setCurrentProfile(updatedProfile);
            }}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {activeTab === 'journey' && (
          <MyJourney
            profile={currentProfile}
            transferableSkills={transferableSkills}
            skillGaps={skillGaps}
            roadmap={roadmap}
            opportunities={opportunities}
            onNavigateTab={handleNavigateTab}
            openNairaChat={() => setIsNairaOpen(true)}
          />
        )}

        {activeTab === 'skills' && (
          <TransferableSkills
            skills={transferableSkills}
            profile={currentProfile}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {activeTab === 'skillgaps' && (
          <SkillGapAnalysis
            skillGaps={skillGaps}
            setSkillGaps={setSkillGaps}
            profile={currentProfile}
            setProfile={setCurrentProfile}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {activeTab === 'learn' && (
          <LearningRoadmap
            roadmap={roadmap}
            profile={currentProfile}
            setProfile={setCurrentProfile}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {activeTab === 'opportunities' && (
          <Opportunities
            opportunities={opportunities}
            profile={currentProfile}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {activeTab === 'resume' && (
          <ResumeBuilder
            profile={currentProfile}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {activeTab === 'interview' && (
          <InterviewPrep
            profile={currentProfile}
            onNavigateTab={handleNavigateTab}
          />
        )}
      </main>

      {/* Floating Naira AI Summoner Button (when chat is closed) */}
      {!isNairaOpen && (
        <button
          onClick={() => setIsNairaOpen(true)}
          className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-gradient-to-r from-brand-600 via-rose-600 to-plum-600 text-white font-bold text-xs shadow-xl shadow-brand-500/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 border-2 border-white/40"
          title="Open Naira AI Career Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 animate-bounce" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-white" />
          </div>
          <span className="font-heading tracking-wide">Ask Naira AI</span>
        </button>
      )}

      {/* Slide-out Naira AI Career Assistant Drawer */}
      <NairaAssistant
        isOpen={isNairaOpen}
        onClose={() => setIsNairaOpen(false)}
        profile={currentProfile}
        onNavigateTab={handleNavigateTab}
      />

      {/* Global Footer */}
      <Footer onNavigateTab={handleNavigateTab} />
    </div>
  );
}

export default App;
