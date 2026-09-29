export type WorkMode = 'Remote' | 'Hybrid' | 'On-site' | 'Flexible Hours';

export type OpportunityType = 'Returnship' | 'Internship' | 'Full-Time' | 'Contract';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  qualification: string;
  location: string;
  previousRole: string;
  previousIndustry: string;
  yearsOfExperience: number;
  previousSkills: string[];
  previousProjects: string;
  breakDurationYears: number;
  breakReason: 'Maternity / Childcare' | 'Elder Caregiving' | 'Family Relocation' | 'Personal Health & Recovery' | 'Higher Education & Upskilling' | 'Personal Sabbatical';
  breakDescription?: string;
  targetRole: string;
  targetIndustry: string;
  targetJobDescription: string; // The JD or skills requirements they are looking for
  preferredWorkMode: WorkMode;
  preferredLocation: string;
  resumeFileName?: string;
  careerReadinessScore: number;
  completedRoadmapWeeks: number[];
  authMethod?: 'google' | 'email' | 'phone';
  emailOrPhone?: string;
  streakDays: number;
  rewardPoints: number;
  transferredCoursesCount: number;
}

export interface TransferableSkill {
  id: string;
  name: string;
  category: 'Strategic & Leadership' | 'Execution & Operations' | 'Analytical & Problem Solving' | 'Stakeholder & Communication' | 'Domain & Technical';
  relevancePercentage: number;
  confidenceScore: number; // 0 to 100
  explanation: string;
  pastApplication: string;
  targetRoleValue: string;
}

export interface SkillGap {
  id: string;
  skillName: string;
  category: 'Technical' | 'Tool & Framework' | 'Industry Standard' | 'Domain Knowledge';
  currentLevel: 'None' | 'Beginner' | 'Intermediate' | 'Advanced';
  requiredLevel: 'Intermediate' | 'Advanced' | 'Expert';
  gapSeverity: 'Low' | 'Moderate' | 'High';
  estimatedHoursToBridge: number;
  recommendedResource: string;
  status: 'Not Started' | 'In Progress' | 'Bridged';
}

export interface RoadmapWeek {
  weekNumber: number;
  title: string;
  focusArea: string;
  description: string;
  skillsCovered: string[];
  hoursEstimated: number;
  milestoneProject: string;
  resources: {
    title: string;
    type: 'Course' | 'Project' | 'Reading' | 'Certification';
    provider: string;
    url: string;
    isFree: boolean;
  }[];
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  workMode: WorkMode;
  type: OpportunityType;
  experienceRequired: string;
  stipendOrSalary: string;
  returnshipFriendly: boolean;
  matchPercentage: number;
  matchedSkills: string[];
  skillsToLearn: string[];
  description: string;
  benefits: string[];
  deadline: string;
  supportProgramName?: string;
}

export interface InterviewQuestion {
  id: string;
  category: 'Career Break' | 'Technical' | 'Behavioral (STAR)' | 'Situational' | 'Leadership';
  question: string;
  contextWhyAsked: string;
  idealAnswerFramework: string;
  sampleAnswer: string;
  keyPointsToHit: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'naira';
  text: string;
  timestamp: string;
  actionLinks?: { label: string; tab: string }[];
}

export interface PeerCourseTransfer {
  id: string;
  courseTitle: string;
  topic: string;
  sharedByName: string;
  sharedByRole: string;
  learnerRecipientName?: string;
  notesSummary: string;
  cheatsheetTips: string[];
  resourceLink?: string;
  sisterhoodLikes: number;
  badgeAwarded: string;
  timestamp: string;
}

export interface RewardPerk {
  id: string;
  title: string;
  costPoints: number;
  category: 'Mentorship' | 'Certification' | 'Recruiter Boost' | 'Community Badge';
  description: string;
  isUnlocked: boolean;
  iconName: string;
}
