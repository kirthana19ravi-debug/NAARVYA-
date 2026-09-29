import { UserProfile, TransferableSkill, SkillGap, RoadmapWeek, Opportunity, InterviewQuestion, PeerCourseTransfer, RewardPerk } from '../types';

export const DEMO_PROFILES: Record<string, UserProfile> = {
  ananya: {
    id: 'demo-ananya',
    name: 'Ananya Sharma',
    age: 32,
    qualification: 'B.Tech in Computer Science & Information Technology',
    location: 'Bengaluru, India (Open to Remote / Hybrid)',
    previousRole: 'Senior Quality Analyst & Project Coordinator',
    previousIndustry: 'Enterprise SaaS & FinTech',
    yearsOfExperience: 5,
    previousSkills: [
      'Agile/Scrum Methodologies',
      'Test Case Design & QA Automation',
      'Stakeholder Management',
      'JIRA / Confluence',
      'Cross-Functional Team Coordination',
      'SQL & Database Queries',
      'Requirements Gathering'
    ],
    previousProjects: 'Led release quality management for an enterprise payments portal handling 2M+ monthly transactions. Coordinated sprints across 14 engineers and product managers.',
    breakDurationYears: 4,
    breakReason: 'Maternity / Childcare',
    breakDescription: 'Stepped back to raise twins while maintaining technical curiosity through self-paced learning in data analytics and product management fundamentals.',
    targetRole: 'Product & Business Analyst',
    targetIndustry: 'Digital Products & FinTech / EdTech',
    targetJobDescription: 'Seeking Business Analyst or Associate PM roles in FinTech/SaaS. Requires bridging requirements gathering, Power BI dashboard design, stakeholder mediation, user story writing, and agile sprint cadence with flexible/hybrid work mode.',
    preferredWorkMode: 'Hybrid',
    preferredLocation: 'Bengaluru / Remote',
    resumeFileName: 'Ananya_Sharma_Resume.pdf',
    careerReadinessScore: 78,
    completedRoadmapWeeks: [1, 2],
    authMethod: 'google',
    emailOrPhone: 'ananya.sharma@gmail.com',
    streakDays: 6,
    rewardPoints: 680,
    transferredCoursesCount: 2,
  },

  priya: {
    id: 'demo-priya',
    name: 'Priya Patel',
    age: 34,
    qualification: 'B.E. in Electronics & Communication',
    location: 'Pune / Mumbai (Remote Preferred)',
    previousRole: 'Frontend Web Developer',
    previousIndustry: 'E-commerce & Web Solutions',
    yearsOfExperience: 4,
    previousSkills: [
      'JavaScript (ES6+)',
      'HTML5 & CSS3',
      'Responsive Web Design',
      'Git Version Control',
      'UI/UX Prototyping',
      'REST API Integration',
      'Team Mentorship'
    ],
    previousProjects: 'Engineered high-converting checkout flows and product catalog UI for a top fashion retail portal; reduced cart abandonment by 18%.',
    breakDurationYears: 5,
    breakReason: 'Elder Caregiving',
    breakDescription: 'Managed critical palliative care for an elderly parent while undertaking modular frontend refreshers in modern React 18 and TypeScript.',
    targetRole: 'Full Stack React & Cloud Engineer',
    targetIndustry: 'Technology & Cloud Platforms',
    targetJobDescription: 'Seeking React 19 Frontend or Full Stack Cloud positions. Looking for modern state management, TypeScript, REST/GraphQL APIs, Next.js server components, and remote-first work environment.',
    preferredWorkMode: 'Remote',
    preferredLocation: 'Pune / Remote',
    resumeFileName: 'Priya_Patel_Tech_Resume.pdf',
    careerReadinessScore: 72,
    completedRoadmapWeeks: [1],
    authMethod: 'email',
    emailOrPhone: 'priya.dev@outlook.com',
    streakDays: 4,
    rewardPoints: 420,
    transferredCoursesCount: 1,
  },

  sunita: {
    id: 'demo-sunita',
    name: 'Sunita Rao',
    age: 36,
    qualification: 'MBA in Human Resources Management',
    location: 'Hyderabad, India',
    previousRole: 'HR Generalist & Talent Acquisition Specialist',
    previousIndustry: 'IT Services & Consulting',
    yearsOfExperience: 6,
    previousSkills: [
      'Talent Sourcing & Interviewing',
      'Employee Onboarding & Retention',
      'Performance Appraisal Systems',
      'HR Policies & Compliance',
      'Conflict Resolution',
      'Vendor Management',
      'Excel Data Reporting'
    ],
    previousProjects: 'Spearheaded annual campus recruitment drives hiring 350+ engineers; designed employee wellness and diversity retention programs.',
    breakDurationYears: 3,
    breakReason: 'Personal Health & Recovery',
    breakDescription: 'Took deliberate time to prioritize full recovery from a chronic spinal condition while upgrading data storytelling and HR metrics capability.',
    targetRole: 'People Analytics & Talent Operations Lead',
    targetIndustry: 'Fast-Growing Tech & Global Capability Centers (GCCs)',
    targetJobDescription: 'Seeking People Analytics & Strategic Talent Operations roles. Looking for Tableau/Power BI workforce dashboards, employee attrition forecasting, and executive data presentation.',
    preferredWorkMode: 'Hybrid',
    preferredLocation: 'Hyderabad',
    resumeFileName: 'Sunita_Rao_HR_Resume.docx',
    careerReadinessScore: 82,
    completedRoadmapWeeks: [1, 2, 3],
    authMethod: 'phone',
    emailOrPhone: '+91 98765 43210',
    streakDays: 8,
    rewardPoints: 950,
    transferredCoursesCount: 3,
  }
};

export const TRANSFERABLE_SKILLS_DATA: Record<string, TransferableSkill[]> = {
  ananya: [
    {
      id: 'ts-1',
      name: 'Structured Problem Solving & QA Mindset',
      category: 'Analytical & Problem Solving',
      relevancePercentage: 96,
      confidenceScore: 92,
      explanation: 'Root cause analysis in software quality directly maps to identifying user friction points and defining precise business requirements.',
      pastApplication: 'Investigated complex production edge-cases in financial transactions with 99.8% resolution rate.',
      targetRoleValue: 'Translates to bulletproof User Stories and acceptance criteria as a Business Analyst.'
    },
    {
      id: 'ts-2',
      name: 'Cross-Functional Stakeholder Alignment',
      category: 'Stakeholder & Communication',
      relevancePercentage: 94,
      confidenceScore: 88,
      explanation: 'Bridging engineering, design, and operations during product releases is the exact core competency required of a Product/Business Analyst.',
      pastApplication: 'Facilitated sprint planning and triage sessions between offshore development and onshore client stakeholders.',
      targetRoleValue: 'Drives agreement across conflicting team priorities and ensures roadmap delivery.'
    },
    {
      id: 'ts-3',
      name: 'Parenting & Multi-Stream Time Orchestration',
      category: 'Strategic & Leadership',
      relevancePercentage: 90,
      confidenceScore: 95,
      explanation: 'Managing multiple dependents with tight schedules hones extreme prioritization, calm crisis de-escalation, and high emotional intelligence.',
      pastApplication: 'Coordinated multi-year family care, budget optimization, and self-upskilling routines simultaneously.',
      targetRoleValue: 'Proven resilience and steady composure under aggressive deadline pressures.'
    },
    {
      id: 'ts-4',
      name: 'Data Extraction & SQL Logic',
      category: 'Domain & Technical',
      relevancePercentage: 86,
      confidenceScore: 80,
      explanation: 'Previous database querying for defect validation gives a strong head-start over non-technical business analysts.',
      pastApplication: 'Wrote complex SQL joins to verify backend ledger balances against UI displays.',
      targetRoleValue: 'Enables independent querying of customer metrics without waiting for data engineering teams.'
    },
    {
      id: 'ts-5',
      name: 'Documentation & Workflow Mapping',
      category: 'Execution & Operations',
      relevancePercentage: 89,
      confidenceScore: 90,
      explanation: 'Creating comprehensive test strategies parallels writing detailed Business Requirement Documents (BRDs) and Process Flow diagrams.',
      pastApplication: 'Authored 40+ end-to-end user workflows for payment gateway integrations.',
      targetRoleValue: 'Speeds up engineering onboarding and clarifies edge cases before coding begins.'
    }
  ],
  priya: [
    {
      id: 'ts-p1',
      name: 'Core JavaScript & Algorithmic Thinking',
      category: 'Domain & Technical',
      relevancePercentage: 95,
      confidenceScore: 88,
      explanation: 'Deep foundational knowledge of the JS event loop, async programming, and DOM rendering never expires.',
      pastApplication: 'Built custom cart calculation scripts and asynchronous UI widgets for 100k+ daily visitors.',
      targetRoleValue: 'Accelerates mastery of modern React 19, TypeScript, and server components.'
    },
    {
      id: 'ts-p2',
      name: 'Caregiver Empathy & High-Context Listening',
      category: 'Stakeholder & Communication',
      relevancePercentage: 92,
      confidenceScore: 94,
      explanation: 'Long-term caregiving develops deep patience, active observation, and proactive intuition of unexpressed needs.',
      pastApplication: 'Managed healthcare navigation, emotional grounding, and emergency protocols under acute pressure.',
      targetRoleValue: 'Exceptional UX sensibility, accessibility advocacy, and collaborative team culture.'
    },
    {
      id: 'ts-p3',
      name: 'Version Control & Clean Modular Codebase',
      category: 'Execution & Operations',
      relevancePercentage: 88,
      confidenceScore: 85,
      explanation: 'Disciplined Git branch management, code review etiquette, and component architecture carry over seamlessly.',
      pastApplication: 'Maintained production Git repositories with standard branching workflows.',
      targetRoleValue: 'Smooth onboarding into modern CI/CD pipelines and team-based pull request cycles.'
    }
  ],
  sunita: [
    {
      id: 'ts-s1',
      name: 'Human Psychology & Organizational Dynamics',
      category: 'Stakeholder & Communication',
      relevancePercentage: 95,
      confidenceScore: 94,
      explanation: 'Deep understanding of employee motivations, burnout triggers, and retention metrics powers high-impact HR analytics.',
      pastApplication: 'Conducted 500+ candidate evaluations and 200+ employee retention interviews.',
      targetRoleValue: 'Transforms raw turnover numbers into empathetic, actionable organizational interventions.'
    },
    {
      id: 'ts-s2',
      name: 'Data Integrity & Ethical Confidentiality',
      category: 'Execution & Operations',
      relevancePercentage: 92,
      confidenceScore: 96,
      explanation: 'Strict adherence to employee privacy, compensation confidentiality, and labor regulations.',
      pastApplication: 'Administered payroll and performance reviews for 450+ employees without data leaks.',
      targetRoleValue: 'Crucial for People Analytics where handling sensitive DEI and salary data demands flawless ethics.'
    }
  ]
};

export const SKILL_GAPS_DATA: Record<string, SkillGap[]> = {
  ananya: [
    {
      id: 'sg-1',
      skillName: 'Power BI & Advanced Data Visualizations',
      category: 'Tool & Framework',
      currentLevel: 'Beginner',
      requiredLevel: 'Advanced',
      gapSeverity: 'High',
      estimatedHoursToBridge: 24,
      recommendedResource: 'Microsoft Power BI Data Analyst (PL-300) Course + 2 Portfolio Dashboards',
      status: 'In Progress'
    },
    {
      id: 'sg-2',
      skillName: 'Product Analytics Tools (Mixpanel / Amplitude)',
      category: 'Tool & Framework',
      currentLevel: 'None',
      requiredLevel: 'Intermediate',
      gapSeverity: 'Moderate',
      estimatedHoursToBridge: 14,
      recommendedResource: 'Amplitude Academy Product Analytics Certification & Funnel Simulation',
      status: 'Not Started'
    },
    {
      id: 'sg-3',
      skillName: 'Modern Product Discovery & User Journey Mapping',
      category: 'Technical',
      currentLevel: 'Beginner',
      requiredLevel: 'Advanced',
      gapSeverity: 'Moderate',
      estimatedHoursToBridge: 18,
      recommendedResource: 'Continuous Discovery Habits by Teresa Torres + Figma Journey Canvas',
      status: 'In Progress'
    },
    {
      id: 'sg-4',
      skillName: 'A/B Testing & Hypothesis Validation Metrics',
      category: 'Technical',
      currentLevel: 'Beginner',
      requiredLevel: 'Intermediate',
      gapSeverity: 'Low',
      estimatedHoursToBridge: 10,
      recommendedResource: 'Reforge Experimentation Essentials & Statistical Significance Primer',
      status: 'Bridged'
    },
    {
      id: 'sg-5',
      skillName: 'AI-Assisted Business Analysis (Prompt Engineering & Copilot)',
      category: 'Industry Standard',
      currentLevel: 'None',
      requiredLevel: 'Intermediate',
      gapSeverity: 'Low',
      estimatedHoursToBridge: 8,
      recommendedResource: 'AI for Product Managers: Automating PRDs, User Stories, and Synthesis',
      status: 'Not Started'
    }
  ],
  priya: [
    {
      id: 'sg-p1',
      skillName: 'Modern React 19 & Next.js App Router',
      category: 'Technical',
      currentLevel: 'Beginner',
      requiredLevel: 'Advanced',
      gapSeverity: 'High',
      estimatedHoursToBridge: 28,
      recommendedResource: 'Next.js 15 Full Stack Masterclass + Server Components Blueprint',
      status: 'In Progress'
    },
    {
      id: 'sg-p2',
      skillName: 'TypeScript in Modern Enterprise Frameworks',
      category: 'Technical',
      currentLevel: 'Beginner',
      requiredLevel: 'Advanced',
      gapSeverity: 'High',
      estimatedHoursToBridge: 20,
      recommendedResource: 'Total TypeScript Core Essentials by Matt Pocock',
      status: 'Not Started'
    },
    {
      id: 'sg-p3',
      skillName: 'Cloud Deployments & Serverless (AWS / Vercel)',
      category: 'Industry Standard',
      currentLevel: 'None',
      requiredLevel: 'Intermediate',
      gapSeverity: 'Moderate',
      estimatedHoursToBridge: 16,
      recommendedResource: 'AWS Certified Cloud Practitioner + CI/CD GitHub Actions Lab',
      status: 'Not Started'
    }
  ],
  sunita: [
    {
      id: 'sg-s1',
      skillName: 'Tableau for People Analytics & Attrition Modeling',
      category: 'Tool & Framework',
      currentLevel: 'Beginner',
      requiredLevel: 'Advanced',
      gapSeverity: 'High',
      estimatedHoursToBridge: 22,
      recommendedResource: 'Tableau Desktop Specialist for HR Metrics & Headcount Forecasting',
      status: 'In Progress'
    },
    {
      id: 'sg-s2',
      skillName: 'Python for HR Data Cleaning (Pandas)',
      category: 'Technical',
      currentLevel: 'None',
      requiredLevel: 'Intermediate',
      gapSeverity: 'Moderate',
      estimatedHoursToBridge: 26,
      recommendedResource: 'Python for People Analytics: Automating Survey & Retention Analysis',
      status: 'Not Started'
    }
  ]
};

export const LEARNING_ROADMAP_DATA: Record<string, RoadmapWeek[]> = {
  ananya: [
    {
      weekNumber: 1,
      title: 'Mindset Re-entry & Business Analysis Modernization',
      focusArea: 'Foundations & Agile 2.0',
      description: 'Reignite professional momentum, understand modern product development lifecycles, and refresh Agile/Scrum ceremonies.',
      skillsCovered: ['Agile 2.0', 'Modern User Stories', 'JIRA Product Discovery', 'Confidence Reset'],
      hoursEstimated: 8,
      milestoneProject: 'Draft a comprehensive BRD & User Story breakdown for an automated FinTech onboarding feature.',
      resources: [
        { title: 'Modern Business Analysis Foundations', type: 'Course', provider: 'Coursera (Google)', url: '#', isFree: true },
        { title: 'Career Re-entry Confidence Toolkit', type: 'Reading', provider: 'NAARIVA Empower Library', url: '#', isFree: true }
      ]
    },
    {
      weekNumber: 2,
      title: 'Advanced SQL for Product Decisions',
      focusArea: 'Data Extraction & Aggregation',
      description: 'Progress from basic queries to multi-table joins, window functions, cohort retention queries, and data integrity.',
      skillsCovered: ['Window Functions', 'Cohort Analysis', 'Subqueries & CTEs', 'PostgreSQL'],
      hoursEstimated: 10,
      milestoneProject: 'Write a SQL script tracking 30-day user churn and average order value across demographics.',
      resources: [
        { title: 'Advanced SQL for Data Analysts', type: 'Course', provider: 'Khan Academy / DataCamp', url: '#', isFree: true },
        { title: 'Interactive SQL LeetCode & Mode Practice', type: 'Project', provider: 'Mode Analytics', url: '#', isFree: true }
      ]
    },
    {
      weekNumber: 3,
      title: 'Power BI Mastery & Executive Dashboards',
      focusArea: 'Business Intelligence & Visualization',
      description: 'Build interactive dashboards from scratch: data modeling, DAX calculated measures, and user-centric drilldowns.',
      skillsCovered: ['Power BI', 'DAX Formulas', 'Data Modeling', 'Visual Storytelling'],
      hoursEstimated: 12,
      milestoneProject: 'Create a live Sales & Product Executive Performance dashboard with interactive KPI filters.',
      resources: [
        { title: 'Microsoft Power BI Desktop from Scratch', type: 'Course', provider: 'Microsoft Learn', url: '#', isFree: true },
        { title: 'Download Sample E-Commerce Datasets', type: 'Project', provider: 'Kaggle', url: '#', isFree: true }
      ]
    },
    {
      weekNumber: 4,
      title: 'Product Discovery & Metric Frameworks',
      focusArea: 'Product Thinking',
      description: 'Master the North Star Metric framework, HEART framework, user funnel friction audits, and qualitative discovery.',
      skillsCovered: ['North Star Metric', 'HEART Framework', 'Figma Flow Diagrams', 'User Interviews'],
      hoursEstimated: 10,
      milestoneProject: 'Map out the complete end-to-end onboarding dropoff funnel for a SaaS subscription app.',
      resources: [
        { title: 'Product Metrics That Matter', type: 'Course', provider: 'Amplitude Academy', url: '#', isFree: true },
        { title: 'Customer Journey Mapping Guide', type: 'Reading', provider: 'Nielsen Norman Group', url: '#', isFree: true }
      ]
    },
    {
      weekNumber: 5,
      title: 'A/B Testing, Experimentation & Hypothesis Design',
      focusArea: 'Product Validation',
      description: 'Learn statistical significance, sample size calculation, variant testing, and how to write data-backed hypothesis memos.',
      skillsCovered: ['A/B Testing', 'Hypothesis Framework', 'Statistical Confidence', 'Risk Mitigation'],
      hoursEstimated: 8,
      milestoneProject: 'Design a full A/B testing experiment document for a mobile checkout redesign.',
      resources: [
        { title: 'Experimentation & A/B Testing 101', type: 'Course', provider: 'Udemy / Coursera', url: '#', isFree: false },
        { title: 'Experimentation Calculator & Templates', type: 'Project', provider: 'Optimizely Free Tools', url: '#', isFree: true }
      ]
    },
    {
      weekNumber: 6,
      title: 'AI Productivity for Business Analysts',
      focusArea: 'AI-Assisted Workflows',
      description: 'Use generative AI and prompt workflows to accelerate PRD drafting, SQL query generation, synthesis of user transcripts, and market research.',
      skillsCovered: ['Prompt Engineering', 'PRD Automation', 'LLM Query Assist', 'Copilot in Excel'],
      hoursEstimated: 8,
      milestoneProject: 'Synthesize 10 customer interview transcripts into actionable feature requests using AI analysis.',
      resources: [
        { title: 'Generative AI for Product & Tech Professionals', type: 'Course', provider: 'DeepLearning.AI', url: '#', isFree: true }
      ]
    },
    {
      weekNumber: 7,
      title: 'Capstone Project: End-to-End Product Audit & Case Study',
      focusArea: 'Portfolio Building',
      description: 'Synthesize all skills into a presentation-ready case study hosted on GitHub / Notion to showcase directly to hiring managers.',
      skillsCovered: ['Portfolio Presentation', 'Case Study Storytelling', 'Notion Showcase'],
      hoursEstimated: 14,
      milestoneProject: 'Publish complete "FinTech Product Retention Audit & BI Dashboard" case study.',
      resources: [
        { title: 'How to Build a Winning BA/PM Portfolio After a Break', type: 'Reading', provider: 'NAARIVA Mentor Hub', url: '#', isFree: true }
      ]
    },
    {
      weekNumber: 8,
      title: 'Returnship Applications & Mock Interview Sprints',
      focusArea: 'Interview Readiness & Re-entry',
      description: 'Finalize your return-friendly resume, prepare STAR behavioral responses for your career break, and participate in mock interviews.',
      skillsCovered: ['STAR Method', 'Career Break Narrative', 'Salary Negotiation', 'Offer Evaluation'],
      hoursEstimated: 8,
      milestoneProject: 'Complete 3 AI mock interview recordings and submit 5 tailored returnship applications.',
      resources: [
        { title: 'NAARIVA Mock Interview Room', type: 'Project', provider: 'NAARIVA Platform', url: '#', isFree: true },
        { title: 'Return-to-Work Confidence Webinar', type: 'Course', provider: 'NAARIVA Community', url: '#', isFree: true }
      ]
    }
  ]
};

export const REALISTIC_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Associate Product / Business Analyst - Leap Returnship',
    company: 'Microsoft',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    location: 'Bengaluru / Hyderabad (Hybrid - 2 days office)',
    workMode: 'Hybrid',
    type: 'Returnship',
    experienceRequired: '2+ years prior experience with 1+ year career break',
    stipendOrSalary: '₹85,000 / month stipend + Full-Time Conversion Opportunity',
    returnshipFriendly: true,
    matchPercentage: 94,
    matchedSkills: ['Agile/Scrum', 'SQL & Database Queries', 'Requirements Gathering', 'Cross-Functional Coordination'],
    skillsToLearn: ['Power BI', 'Azure DevOps'],
    description: 'The Microsoft Leap Program is an immersive 16-week re-entry apprenticeship designed exclusively for non-traditional candidates and professionals returning from career breaks. Combines 4 weeks classroom training with 12 weeks hands-on enterprise product engineering.',
    benefits: ['Dedicated 1-on-1 Executive Mentorship', 'Flexible Core Hours', 'Comprehensive Health Coverage for Family', 'Cohort Peer Circle of Returning Women'],
    deadline: 'Rolling Admission - Next Cohort Starts Next Month',
    supportProgramName: 'Microsoft Leap Returnship'
  },
  {
    id: 'opp-2',
    title: 'Business Systems Analyst - Amplify Returners Track',
    company: 'Amazon Web Services (AWS)',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    location: 'Bengaluru / Remote Eligible',
    workMode: 'Remote',
    type: 'Returnship',
    experienceRequired: '3+ years prior experience, career gap welcomed',
    stipendOrSalary: '₹95,000 / month stipend + high PPO rate (88%)',
    returnshipFriendly: true,
    matchPercentage: 91,
    matchedSkills: ['Stakeholder Management', 'Test Case Design & QA', 'JIRA / Confluence', 'Agile/Scrum'],
    skillsToLearn: ['AWS Cloud Fundamentals', 'Tableau / QuickSight'],
    description: 'Amazon Amplify is an intentional initiative to welcome women engineers and business analysts back to technology. Receive structured onboarding, buddy pairing, and a supportive manager who respects your parenting/caregiving balance.',
    benefits: ['100% Remote or Hybrid Choice', 'Subsidized Childcare Assistance', 'Upskilling Budget (₹75k)', 'Extended Onboarding Ramp-up (60 days)'],
    deadline: 'Applications Open Now',
    supportProgramName: 'Amazon Amplify Women'
  },
  {
    id: 'opp-3',
    title: 'Product Operations Analyst - Second Career (SCIP)',
    company: 'Tata Consultancy Services (TCS)',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg',
    location: 'Mumbai / Pune / Bengaluru',
    workMode: 'Hybrid',
    type: 'Returnship',
    experienceRequired: 'Open to women with 2-10 years previous exp',
    stipendOrSalary: '₹75,000 / month + permanent absorption',
    returnshipFriendly: true,
    matchPercentage: 89,
    matchedSkills: ['Process Documentation', 'Agile Sprints', 'SQL Queries', 'Stakeholder Management'],
    skillsToLearn: ['SAP / Enterprise ERP Flow', 'Advanced Excel Modeling'],
    description: 'TCS SCIP (Second Career Inspiring Possibilities) is one of India\'s longest-running and most successful corporate returnship programs, having integrated over 4,000+ women back into mainstream leadership roles.',
    benefits: ['Family Health Insurance', 'Creche Facilities on Campus', 'Flexi-working Hours Policy', 'Custom Technical Refreshers'],
    deadline: 'Open Year-Round',
    supportProgramName: 'TCS SCIP Second Career'
  },
  {
    id: 'opp-4',
    title: 'Junior Product Manager - Again Returnees Fellowship',
    company: 'Intuit',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Intuit_Logo.svg',
    location: 'Bengaluru',
    workMode: 'Hybrid',
    type: 'Returnship',
    experienceRequired: '3+ years previous experience with 2+ year gap',
    stipendOrSalary: '₹1,00,000 / month stipend + bonus',
    returnshipFriendly: true,
    matchPercentage: 88,
    matchedSkills: ['Requirements Gathering', 'User Empathy', 'Agile/Scrum', 'Problem Solving'],
    skillsToLearn: ['Product Discovery', 'Amplitude Metrics'],
    description: 'Intuit Again provides a pathway for female technologists to return to the commercial workforce. The 6-month program includes direct coaching, technical refreshers, and real responsibility on flagship products like QuickBooks and TurboTax.',
    benefits: ['Dedicated Returnship Manager', 'Zero Negative Bias in Compensation', 'Wellness & Mental Health Days', 'Comprehensive Medical'],
    deadline: 'Closing in 2 Weeks',
    supportProgramName: 'Intuit Again'
  },
  {
    id: 'opp-5',
    title: 'Data & Business Intelligence Analyst',
    company: 'Deloitte',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
    location: 'Hyderabad / Gurgaon',
    workMode: 'Hybrid',
    type: 'Full-Time',
    experienceRequired: '3-6 years (Career breaks recognized as life experience)',
    stipendOrSalary: '₹14,00,000 - ₹18,00,000 / annum',
    returnshipFriendly: true,
    matchPercentage: 86,
    matchedSkills: ['SQL Database Queries', 'Cross-Functional Coordination', 'Structured Problem Solving'],
    skillsToLearn: ['Power BI DAX', 'Alteryx'],
    description: 'Deloitte Encore initiative values the multifaceted maturity, resilience, and problem-solving perspectives that professionals bring back from career breaks. Join our Consulting Data Practice.',
    benefits: ['Deloitte Encore Transition Mentors', 'Hybrid Flexibility', 'Parental Transition Leave Policy', 'Certification Sponsorship'],
    deadline: 'Rolling Admission',
    supportProgramName: 'Deloitte Encore'
  },
  {
    id: 'opp-6',
    title: 'Full Stack Frontend Developer (React / TypeScript)',
    company: 'Thoughtworks',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Thoughtworks_Logo.png',
    location: 'Pune / Remote',
    workMode: 'Remote',
    type: 'Full-Time',
    experienceRequired: '3+ years prior development',
    stipendOrSalary: '₹15,00,000 - ₹20,00,000 / annum',
    returnshipFriendly: true,
    matchPercentage: 83,
    matchedSkills: ['JavaScript ES6+', 'HTML5 & CSS3', 'Git', 'Clean Code'],
    skillsToLearn: ['React 19', 'Next.js App Router', 'Tailwind CSS'],
    description: 'Thoughtworks Vapasi program enables experienced women developers on career break to re-skill in modern web technologies and join as senior consultants.',
    benefits: ['Remote First Culture', 'Pair Programming Onboarding', 'Inclusive Maternity & Caregiver Policies'],
    deadline: 'Open Now',
    supportProgramName: 'Thoughtworks Vapasi'
  },
  {
    id: 'opp-7',
    title: 'People Analytics Specialist',
    company: 'Goldman Sachs',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg',
    location: 'Bengaluru',
    workMode: 'Hybrid',
    type: 'Returnship',
    experienceRequired: '3-7 years background with min 2 years pause',
    stipendOrSalary: '₹1,10,000 / month + Permanent Placement Track',
    returnshipFriendly: true,
    matchPercentage: 92,
    matchedSkills: ['HR Operations', 'Confidential Data Handling', 'Reporting', 'Stakeholder Management'],
    skillsToLearn: ['Tableau', 'Workday Analytics'],
    description: 'Goldman Sachs Returnship is a global pioneer launched in 2008. Designed to help professionals re-enter the workforce after taking time off for caregiving or other life commitments.',
    benefits: ['Global Cohort Network', 'Executive Sponsorship', 'Unmatched Healthcare Benefits', 'Subsidized Childcare'],
    deadline: 'Cohorts begin biannually',
    supportProgramName: 'Goldman Sachs Returnship'
  },
  {
    id: 'opp-8',
    title: 'Agile Product Delivery Intern / Returner',
    company: 'Target Accelerate',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg',
    location: 'Bengaluru (Remote Available)',
    workMode: 'Flexible Hours',
    type: 'Internship',
    experienceRequired: 'Any background with tech curiosity',
    stipendOrSalary: '₹60,000 / month',
    returnshipFriendly: true,
    matchPercentage: 87,
    matchedSkills: ['Agile/Scrum', 'Documentation', 'Coordination', 'Communication'],
    skillsToLearn: ['Jira Automation', 'Confluence Spaces'],
    description: 'A 12-week flexible hours paid internship tailored for women looking to step back into corporate workflows at a gentle, sustainable pace.',
    benefits: ['25 Hours / Week Flex Track', 'Paid Learning Time', 'Direct Manager Check-ins'],
    deadline: 'Open Now'
  }
];

export const INTERVIEW_QUESTIONS_DATA: InterviewQuestion[] = [
  {
    id: 'iq-1',
    category: 'Career Break',
    question: 'How do you explain your 4-year career break, and what gives you the confidence to return now?',
    contextWhyAsked: 'Interviewers want to see that you are comfortable and proud of your journey, have planned your re-entry intentionally, and possess genuine excitement to contribute.',
    idealAnswerFramework: '3-Part Bridge Formula: 1. Own the break positively and briefly (1 sentence) -> 2. Highlight proactive growth & transferable skills during that period -> 3. Re-affirm your present commitment, fresh technical skills, and excitement for this target role.',
    sampleAnswer: '"When I had my twins four years ago, stepping back to care for my family was a deliberate and fulfilling choice. While parenting gave me unprecedented levels of prioritization, crisis de-escalation, and budget discipline, I made sure my analytical mind stayed sharp. Over the past 8 months, I intentionally modernized my tech stack with Power BI, advanced SQL, and agile product analytics through the NAARIVA program. My family support structure is fully stabilized, and I bring both my 5 years of seasoned QA/systems experience and a refreshed, highly motivated perspective to hit the ground running."',
    keyPointsToHit: [
      'Speak with pride and zero apologetic hesitation',
      'Mention that home/family support systems are in place',
      'Cite specific modern tools recently updated',
      'Connect past rigor with current readiness'
    ]
  },
  {
    id: 'iq-2',
    category: 'Behavioral (STAR)',
    question: 'Tell me about a time you had to align multiple stakeholders who had conflicting requirements.',
    contextWhyAsked: 'Evaluates your diplomatic communication, structured listening, and ability to steer projects toward business outcomes without alienating teams.',
    idealAnswerFramework: 'STAR: Situation (the clash), Task (your goal), Action (how you facilitated consensus with data and empathy), Result (measurable outcome).',
    sampleAnswer: '"In my previous role at FinTech SaaS, our marketing team needed a rapid one-click checkout flow for an upcoming festival launch, while the compliance and risk team insisted on three separate KYC authentication steps. As the project coordinator, I scheduled a joint workshop rather than exchanging back-and-forth emails. I mapped the user drop-off risks alongside regulatory penalties, and proposed a phased fallback verification where lightweight KYC occurred up-front and deeper verification triggered asynchronously post-purchase. Both teams agreed to this compromise, and we launched on schedule with a 24% uplift in conversions and zero compliance violations."',
    keyPointsToHit: [
      'Show that you bring people together around shared data',
      'Demonstrate trade-off balancing',
      'Highlight concrete quantifiable metrics'
    ]
  },
  {
    id: 'iq-3',
    category: 'Technical',
    question: 'How do you translate an ambiguous business problem into actionable technical requirements?',
    contextWhyAsked: 'Crucial for Business Analysts and Product roles to see your analytical decomposition method.',
    idealAnswerFramework: 'Deconstruct: Clarify root goal -> Identify user persona & pain points -> Define success metrics -> Write clear acceptance criteria and edge cases.',
    sampleAnswer: '"I begin by peeling back the request to the fundamental "Why." When stakeholders say "we need a dashboard," I ask what decision they are trying to make at 9 AM on Monday that they cannot make today. Once the core decision metric is isolated, I define the user journey, map the data inputs needed, and craft clear user stories with Given-When-Then acceptance criteria, specifically accounting for error states and edge cases before engineering estimates are locked."',
    keyPointsToHit: [
      'Focus on business outcome before tool selection',
      'Mention Given-When-Then / Gherkin format',
      'Emphasize edge-case anticipation'
    ]
  },
  {
    id: 'iq-4',
    category: 'Career Break',
    question: 'Technology and tools have evolved in the last few years. How do you plan to catch up with our team\'s modern stack?',
    contextWhyAsked: 'Testing for learning agility, curiosity, and whether you are proactive about self-upskilling.',
    idealAnswerFramework: 'Demonstrate active learning velocity: highlight what you have already bridged, how you learn new frameworks, and your proven track record of adapting to new stacks.',
    sampleAnswer: '"The fundamental principles of clean architecture, relational logic, and user empathy never change, but tooling certainly accelerates. Over the past few months, I\'ve already bridged modern Power BI, DAX formulas, and generative AI productivity tools. What 5 years in engineering taught me is that learning is continuous: I am comfortable reading documentation, building sandbox prototypes, and asking smart questions early in my onboarding ramp."',
    keyPointsToHit: [
      'Acknowledge that tools change, but core thinking endures',
      'Give concrete examples of recently learned tools',
      'Express genuine enthusiasm for mentorship and pairing'
    ]
  }
];

export const CAREER_BREAK_REPHRASER_TEMPLATES = {
  maternity: {
    label: 'Maternity / Childcare',
    resumeSnippet: 'Career Sabbatical — Family Care & Continuous Upskilling (2020 – 2024)\n• Managed high-stakes family transition and child development while maintaining technical currency through self-paced courses in Power BI, SQL, and Agile Product Management.\n• Developed advanced competencies in multi-stakeholder scheduling, high-pressure conflict resolution, and resource optimization.',
    linkedInAbout: 'After a fulfilling dedicated career pause to raise my children, I am returning to the technology landscape with renewed energy and sharpened analytical capabilities. During this chapter, I modernized my skill set with Power BI, advanced business analytics, and product discovery frameworks. Ready to bring 5+ years of software quality and coordination experience to forward-thinking product teams.',
    interviewPitch: 'Stepping back to raise my family was an intentional, grounding chapter. It gave me extraordinary resilience, patience, and the ability to ruthlessly prioritize what matters. Throughout this time, I maintained active technical learning, and with my family routine now well established, I am thrilled to channel my full focus back into driving product impact.'
  },
  caregiving: {
    label: 'Elder Caregiving',
    resumeSnippet: 'Professional Sabbatical — Healthcare Management & Technical Modernization (2019 – 2024)\n• Successfully directed complex healthcare logistics, specialist coordination, and emergency protocols for dependent family members.\n• Leveraged downtime to complete comprehensive coursework in Modern React 19, TypeScript, and Cloud Architecture.',
    linkedInAbout: 'Experienced technologist returning to active software engineering after dedicated caregiving for an elderly parent. This journey honed deep empathy, active listening, and calm problem-solving in high-stress environments — virtues that make me a more empathetic developer and team collaborator.',
    interviewPitch: 'I stepped away to provide primary palliative care for an elderly parent. It was a profound period that reinforced my resilience and clarity of purpose. Concurrently, I invested over 300 hours into refreshing my modern full-stack skills, and I am excited to apply that discipline to your engineering team.'
  },
  health: {
    label: 'Personal Health & Recovery',
    resumeSnippet: 'Dedicated Health Sabbatical & Professional Development (2021 – 2024)\n• Took deliberate, proactive leave to achieve full physical recovery while engaging in modular certification in People Analytics and Data Storytelling.\n• Maintained 100% adherence to recovery milestones and returned at peak physical and cognitive energy.',
    linkedInAbout: 'Having made a complete, triumphant recovery from a health challenge, I am back with enhanced determination and deep domain focus. My break allowed me to step back, evaluate industry shifts, and upskill in advanced HR analytics tools to deliver strategic talent value.',
    interviewPitch: 'I made the disciplined decision to take a medical leave to resolve a health matter permanently. Today, I am completely recovered, in peak health, and equipped with fresh certifications in People Analytics that I cannot wait to put to work.'
  },
  relocation: {
    label: 'Family Relocation',
    resumeSnippet: 'Transition & Relocation Sabbatical (2022 – 2024)\n• Orchestrated international/inter-state household transition and community assimilation while undertaking professional skill modernization.\n• Expanded global network and completed cross-cultural leadership coursework.',
    linkedInAbout: 'Following an inter-regional relocation, I took time to establish our household roots and deepen my strategic tech capabilities. Now fully settled and eagerly looking for my next challenge in a dynamic hybrid or remote team.',
    interviewPitch: 'Our family relocation required dedicated operational leadership to settle across cities. With everything running smoothly, I am ready and energized to bring my seasoned experience to your organization.'
  }
};

export const PEER_COURSE_TRANSFERS: PeerCourseTransfer[] = [
  {
    id: 'pct-1',
    courseTitle: 'Power BI Data Modeling & DAX Masterclass',
    topic: 'Business Intelligence & Data Analytics',
    sharedByName: 'Ananya Sharma',
    sharedByRole: 'QA Coordinator ➔ Product Analyst',
    learnerRecipientName: 'Ritu Verma',
    notesSummary: 'Complete condensed cheat sheet covering 12 essential DAX measures (CALCULATE, FILTER, SAMEPERIODLASTYEAR) and star schema relationships, plus sample FinTech P&L template.',
    cheatsheetTips: [
      'Always separate fact tables from dimension tables before writing complex measures.',
      'Use CALCULATE with ALLSELECTED for dynamic cohort percentages.',
      'Check the NAARVYA FinTech dashboard template in the link below.'
    ],
    resourceLink: 'https://github.com/naarvya-sisterhood/powerbi-starter-kit',
    sisterhoodLikes: 42,
    badgeAwarded: 'Sisterhood Knowledge Champion',
    timestamp: '2 hours ago'
  },
  {
    id: 'pct-2',
    courseTitle: 'Modern React 19 & Server Components Blueprint',
    topic: 'Full Stack Frontend Engineering',
    sharedByName: 'Priya Patel',
    sharedByRole: 'Web Developer ➔ React Cloud Engineer',
    learnerRecipientName: 'Kavita Nair',
    notesSummary: 'Step-by-step notes bridging old React class / hook paradigms to modern React 19 Actions, useOptimistic, and Server Actions for returners who last coded in 2019.',
    cheatsheetTips: [
      'Think of Server Components as default; only add "use client" when needing onClick or useState.',
      'Use optimistic UI updates to make e-commerce carts feel instantaneous.'
    ],
    resourceLink: 'https://github.com/naarvya-sisterhood/react19-migration-guide',
    sisterhoodLikes: 58,
    badgeAwarded: 'Tech Re-entry Mentor',
    timestamp: 'Yesterday'
  },
  {
    id: 'pct-3',
    courseTitle: 'People Analytics & Employee Attrition Forecasting in Tableau',
    topic: 'Human Resources & Talent Intelligence',
    sharedByName: 'Sunita Rao',
    sharedByRole: 'HR Generalist ➔ People Analytics Lead',
    learnerRecipientName: 'Megha Sen',
    notesSummary: 'Curated dataset and calculated field formulas for calculating 90-day new hire turnover and flight-risk scores, tailored for GCC and IT services recruitment.',
    cheatsheetTips: [
      'Anonymize employee ID data before loading into shared dashboards.',
      'Build executive summary cards first — leaders want bottom-line cost per vacancy.'
    ],
    resourceLink: 'https://github.com/naarvya-sisterhood/people-analytics-formulas',
    sisterhoodLikes: 37,
    badgeAwarded: 'Leadership Pay-It-Forward',
    timestamp: '3 days ago'
  }
];

export const REWARD_PERKS: RewardPerk[] = [
  {
    id: 'rw-1',
    title: '1-on-1 Executive Re-entry Mentorship',
    costPoints: 500,
    category: 'Mentorship',
    description: 'A 45-minute private coaching session with a senior Director or VP who returned after a multi-year break at Microsoft, Google, or Amazon.',
    isUnlocked: true,
    iconName: 'Users'
  },
  {
    id: 'rw-2',
    title: 'Free Certification Sponsorship Voucher',
    costPoints: 800,
    category: 'Certification',
    description: '100% sponsored fee voucher for Microsoft PL-300, AWS Cloud Practitioner, or Tableau Desktop Specialist exam.',
    isUnlocked: false,
    iconName: 'Award'
  },
  {
    id: 'rw-3',
    title: 'Priority Recruiter Spotlight',
    costPoints: 400,
    category: 'Recruiter Boost',
    description: 'Pins your verified NAARVYA profile to the top of weekly hiring digests sent to 450+ returnship hiring managers.',
    isUnlocked: true,
    iconName: 'Sparkles'
  },
  {
    id: 'rw-4',
    title: 'Executive Resume Deep-Dive Audit',
    costPoints: 300,
    category: 'Recruiter Boost',
    description: 'Comprehensive human expert audit + ATS keyword score optimization tailored to your target job description.',
    isUnlocked: true,
    iconName: 'FileCheck'
  },
  {
    id: 'rw-5',
    title: 'Sisterhood Champion Gold Badge',
    costPoints: 600,
    category: 'Community Badge',
    description: 'Earned by transferring at least 2 completed course summaries to fellow returning women. Displays proudly on your public profile.',
    isUnlocked: false,
    iconName: 'Heart'
  }
];

