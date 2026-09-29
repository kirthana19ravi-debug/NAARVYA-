import { UserProfile, TransferableSkill, SkillGap, RoadmapWeek, Opportunity } from '../types';
import { TRANSFERABLE_SKILLS_DATA, SKILL_GAPS_DATA, LEARNING_ROADMAP_DATA, REALISTIC_OPPORTUNITIES, CAREER_BREAK_REPHRASER_TEMPLATES } from '../data/mockData';

export interface ReadinessBreakdown {
  overallScore: number;
  transferableSkillsScore: number;
  technicalRelevanceScore: number;
  roadmapProgressScore: number;
  marketReadinessScore: number;
  readinessLabel: 'Foundation Phase' | 'Accelerating' | 'Interview Ready' | 'High-Impact Ready';
  insights: string[];
}

export function calculateCareerReadiness(profile: UserProfile, skillGaps: SkillGap[]): ReadinessBreakdown {
  const totalGaps = skillGaps.length || 1;
  const bridgedCount = skillGaps.filter(g => g.status === 'Bridged').length;
  const inProgressCount = skillGaps.filter(g => g.status === 'In Progress').length;
  
  // Gap progress calculation
  const gapProgress = Math.round(((bridgedCount * 1.0 + inProgressCount * 0.5) / totalGaps) * 100);

  // Roadmap progress
  const completedWeeks = profile.completedRoadmapWeeks.length;
  const totalWeeks = 8;
  const roadmapProgress = Math.round((completedWeeks / totalWeeks) * 100);

  // Experience baseline
  const expBaseline = Math.min(profile.yearsOfExperience * 12, 85);

  // Transferable skills baseline
  const transferableScore = 88;

  // Weighted overall score
  const overall = Math.min(
    98,
    Math.round(
      (transferableScore * 0.3) +
      (gapProgress * 0.35) +
      (roadmapProgress * 0.2) +
      (expBaseline * 0.15)
    )
  );

  let readinessLabel: ReadinessBreakdown['readinessLabel'] = 'Accelerating';
  if (overall < 50) readinessLabel = 'Foundation Phase';
  else if (overall < 75) readinessLabel = 'Accelerating';
  else if (overall < 88) readinessLabel = 'Interview Ready';
  else readinessLabel = 'High-Impact Ready';

  const insights = [
    `Strong transferable foundation from ${profile.previousRole} (${profile.yearsOfExperience} yrs exp).`,
    `${bridgedCount} of ${totalGaps} target skill gaps successfully bridged for ${profile.targetRole}.`,
    `Week ${completedWeeks + 1} of your personalized roadmap is ready to unlock.`,
    `Currently matched with ${REALISTIC_OPPORTUNITIES.filter(o => o.matchPercentage >= 85).length} top-tier returnships.`
  ];

  return {
    overallScore: Math.max(overall, profile.careerReadinessScore || 70),
    transferableSkillsScore: transferableScore,
    technicalRelevanceScore: Math.min(100, Math.max(55, gapProgress + 30)),
    roadmapProgressScore: roadmapProgress,
    marketReadinessScore: Math.min(95, 60 + completedWeeks * 4),
    readinessLabel,
    insights
  };
}

export function getTransferableSkillsForProfile(profile: UserProfile): TransferableSkill[] {
  if (profile.id === 'demo-ananya' || profile.name.toLowerCase().includes('ananya')) {
    return TRANSFERABLE_SKILLS_DATA.ananya;
  }
  if (profile.id === 'demo-priya' || profile.name.toLowerCase().includes('priya')) {
    return TRANSFERABLE_SKILLS_DATA.priya;
  }
  if (profile.id === 'demo-sunita' || profile.name.toLowerCase().includes('sunita')) {
    return TRANSFERABLE_SKILLS_DATA.sunita;
  }

  // Generate intelligent dynamic skills for any custom user
  return [
    {
      id: 'custom-ts-1',
      name: 'High-Resilience Project & Crisis De-escalation',
      category: 'Strategic & Leadership',
      relevancePercentage: 94,
      confidenceScore: 90,
      explanation: `Navigating a ${profile.breakDurationYears}-year break due to ${profile.breakReason} demands exceptional resourcefulness, emotional composure, and time discipline.`,
      pastApplication: `Coordinated complex personal and family operational workflows over ${profile.breakDurationYears} years.`,
      targetRoleValue: `Demonstrates calm stability under tight deadlines in ${profile.targetRole} positions.`
    },
    {
      id: 'custom-ts-2',
      name: 'Stakeholder Empathy & Multi-Perspective Communication',
      category: 'Stakeholder & Communication',
      relevancePercentage: 92,
      confidenceScore: 88,
      explanation: `Decades of research show women returning from career breaks exhibit top 5% emotional intelligence and situational diplomacy.`,
      pastApplication: `Aligned cross-functional expectations in previous ${profile.previousRole} roles.`,
      targetRoleValue: `Drives seamless collaboration across engineering, product, and leadership.`
    },
    {
      id: 'custom-ts-3',
      name: 'Domain Foundation in ' + profile.previousIndustry,
      category: 'Domain & Technical',
      relevancePercentage: 86,
      confidenceScore: 84,
      explanation: `Core industry paradigms, business models, and operational vocabulary persist regardless of temporal gaps.`,
      pastApplication: `${profile.yearsOfExperience} years of production experience in ${profile.previousIndustry}.`,
      targetRoleValue: `Immediate understanding of business pain points without lengthy ramp-up.`
    },
    {
      id: 'custom-ts-4',
      name: 'Systematic Organization & Workflow Optimization',
      category: 'Execution & Operations',
      relevancePercentage: 89,
      confidenceScore: 86,
      explanation: `Balancing multifaceted priorities builds elite organizational muscle.`,
      pastApplication: profile.previousProjects || 'Led multi-stakeholder delivery milestones.',
      targetRoleValue: `Produces structured, dependable execution in any high-velocity environment.`
    }
  ];
}

export function getSkillGapsForProfile(profile: UserProfile): SkillGap[] {
  if (profile.id === 'demo-ananya' || profile.name.toLowerCase().includes('ananya')) {
    return SKILL_GAPS_DATA.ananya;
  }
  if (profile.id === 'demo-priya' || profile.name.toLowerCase().includes('priya')) {
    return SKILL_GAPS_DATA.priya;
  }
  if (profile.id === 'demo-sunita' || profile.name.toLowerCase().includes('sunita')) {
    return SKILL_GAPS_DATA.sunita;
  }

  // Custom generated gaps
  return [
    {
      id: 'cg-1',
      skillName: `Modern Tooling & Frameworks for ${profile.targetRole}`,
      category: 'Tool & Framework',
      currentLevel: 'Beginner',
      requiredLevel: 'Advanced',
      gapSeverity: 'High',
      estimatedHoursToBridge: 24,
      recommendedResource: `Industry Standard Masterclass & Hands-on Portfolio Sandbox for ${profile.targetRole}`,
      status: 'In Progress'
    },
    {
      id: 'cg-2',
      skillName: 'Cloud & AI-Assisted Workflows',
      category: 'Industry Standard',
      currentLevel: 'Beginner',
      requiredLevel: 'Intermediate',
      gapSeverity: 'Moderate',
      estimatedHoursToBridge: 14,
      recommendedResource: 'Copilot & Cloud Foundations Certification',
      status: 'Not Started'
    },
    {
      id: 'cg-3',
      skillName: 'Agile & Collaborative Remote Work Tools',
      category: 'Technical',
      currentLevel: 'Intermediate',
      requiredLevel: 'Advanced',
      gapSeverity: 'Low',
      estimatedHoursToBridge: 8,
      recommendedResource: 'Async Communication, Notion & Jira Best Practices for Distributed Teams',
      status: 'Bridged'
    }
  ];
}

export function getRoadmapForProfile(profile: UserProfile): RoadmapWeek[] {
  if (profile.id === 'demo-ananya' || profile.name.toLowerCase().includes('ananya')) {
    return LEARNING_ROADMAP_DATA.ananya;
  }
  // Otherwise adapt weeks
  return LEARNING_ROADMAP_DATA.ananya.map(week => ({
    ...week,
    title: week.title.replace('Business Analysis', profile.targetRole).replace('FinTech', profile.targetIndustry),
    milestoneProject: week.milestoneProject.replace('Business Analyst', profile.targetRole)
  }));
}

export function filterOpportunities(
  opportunities: Opportunity[],
  filters: {
    search?: string;
    workMode?: string;
    type?: string;
    returnshipOnly?: boolean;
  }
): Opportunity[] {
  return opportunities.filter(opp => {
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const match =
        opp.title.toLowerCase().includes(q) ||
        opp.company.toLowerCase().includes(q) ||
        opp.matchedSkills.some(s => s.toLowerCase().includes(q));
      if (!match) return false;
    }
    if (filters.workMode && filters.workMode !== 'All' && opp.workMode !== filters.workMode) {
      return false;
    }
    if (filters.type && filters.type !== 'All' && opp.type !== filters.type) {
      return false;
    }
    if (filters.returnshipOnly && !opp.returnshipFriendly) {
      return false;
    }
    return true;
  });
}

// Generate intelligent response for Naira Chatbot
export function generateNairaResponse(query: string, profile: UserProfile): { text: string; actionLinks?: { label: string; tab: string }[] } {
  const q = query.toLowerCase();

  if (q.includes('explain') && (q.includes('break') || q.includes('gap') || q.includes('years'))) {
    return {
      text: `Explaining your career break is about **owning your narrative with pride and intentionality**. Here is how to frame your **${profile.breakDurationYears}-year ${profile.breakReason}** break:
\n\n1. **Own it in one crisp sentence:** State the reason without apologizing or over-explaining. *"Stepping back for family caregiving was a deliberate and fulfilling life decision."*
2. **Highlight the transferable superpowers:** *"During this chapter, I cultivated high-stakes crisis de-escalation, rapid prioritization, and resourcefulness."*
3. **Show technical momentum:** *"Over the last several months, I actively upgraded my skills in modern tools through structured roadmaps, and with my personal support systems completely in place, I am eager to contribute 100% to this team."*
\n\n👉 Head over to the **Resume & Career Break** tab to copy customized templates for your LinkedIn and ATS Resume!`,
      actionLinks: [{ label: 'View Career Break Templates', tab: 'resume' }, { label: 'Practice in Interview Prep', tab: 'interview' }]
    };
  }

  if (q.includes('learn') || q.includes('next') || q.includes('roadmap') || q.includes('study')) {
    const nextWeek = (profile.completedRoadmapWeeks.length || 0) + 1;
    return {
      text: `Based on your target role of **${profile.targetRole}**, your top priority right now is **Week ${nextWeek}: Power BI Mastery & Advanced Data Visualizations**!
\n\n📌 **Why this matters now:**
You already have great foundational problem-solving and domain logic. Adding interactive dashboard storytelling with Power BI bridges your highest-severity skill gap and instantly boosts your ATS resume relevance by 28%.
\n\n💡 Estimated time to bridge: **12 hours**. Would you like to view the free curated resources and milestone project?`,
      actionLinks: [{ label: 'Go to 8-Week Roadmap', tab: 'learn' }, { label: 'Check Skill Gaps', tab: 'skillgaps' }]
    };
  }

  if (q.includes('job') || q.includes('returnship') || q.includes('opportunity') || q.includes('match') || q.includes('hiring')) {
    return {
      text: `You currently match with **${REALISTIC_OPPORTUNITIES.length} return-friendly opportunities**!
\n\n🌟 **Top 3 Recommended Matches:**
1. **Microsoft Leap Returnship** (${profile.targetRole} track) — **94% Match**. Includes 1-on-1 mentorship, cohort circle, and high conversion to full-time.
2. **Amazon Amplify Women Track** — **91% Match**. Remote eligible, flexible onboarding ramp-up.
3. **TCS SCIP (Second Career)** — **89% Match**. Comprehensive family health insurance and creche facilities.
\n\nAll of these programs explicitly celebrate career breaks and do not penalize gap years!`,
      actionLinks: [{ label: 'Explore Matched Opportunities', tab: 'opportunities' }]
    };
  }

  if (q.includes('ready') || q.includes('score') || q.includes('readiness')) {
    return {
      text: `Your current **Career Readiness Index is ${profile.careerReadinessScore}% (Accelerating)**!
\n\n📊 **Here is how it breaks down:**
• **Transferable Skills:** 92% (High strength — your ${profile.yearsOfExperience} yrs in ${profile.previousIndustry} shine through).
• **Skill Gap Closure:** 70% (2 bridged, 2 in-progress).
• **Roadmap Velocity:** Week ${profile.completedRoadmapWeeks.length} of 8 completed.
\n\n🚀 **Next Quick Win:** Complete Week 3's milestone dashboard to push your readiness score over 85% and unlock direct recruiter referrals!`,
      actionLinks: [{ label: 'View My Journey Pipeline', tab: 'journey' }, { label: 'Continue Roadmap', tab: 'learn' }]
    };
  }

  if (q.includes('negotiate') || q.includes('hybrid') || q.includes('remote') || q.includes('flexible')) {
    return {
      text: `Negotiating flexible or hybrid hours as a returner is all about **proposing an outcome-driven structure rather than asking for a favor**:
\n\n🔑 **3 Winning Negotiation Tactics:**
1. **Highlight your proven output:** *"In my previous roles, I delivered complex deliverables across time zones autonomously."*
2. **Propose a 90-day trial agreement:** *"I propose a core working hours model (e.g. 10 AM – 4 PM IST) with async wrap-up, and let's review together after 90 days."*
3. **Target Returnship Programs first:** Companies like Amazon Amplify, Intuit Again, and Target Accelerate built their programs around flexible arrangements!`,
      actionLinks: [{ label: 'View Flexible Roles', tab: 'opportunities' }]
    };
  }

  // Default empathetic response
  return {
    text: `Hello ${profile.name.split(' ')[0]}! I'm **Naira**, your dedicated AI Career Re-entry Coach at NAARIVA. 
\n\nI'm here to guide every step of your transition into **${profile.targetRole}**. You can ask me anything, such as:
• *"How do I explain my ${profile.breakDurationYears}-year break without feeling nervous?"*
• *"What should I learn this week?"*
• *"Which returnships offer remote or flexible hours?"*
• *"Can you help me polish my resume bullet points?"*
\n\nWhat is top of mind for you today?`,
    actionLinks: [
      { label: 'Map My Transferable Skills', tab: 'skills' },
      { label: 'Check 8-Week Roadmap', tab: 'learn' },
      { label: 'View Returnships', tab: 'opportunities' }
    ]
  };
}
