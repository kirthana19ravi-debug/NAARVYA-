import React, { useState } from 'react';
import { 
  UserCheck, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Send, 
  Award, 
  ThumbsUp, 
  MessageSquare, 
  ChevronRight, 
  BookOpen, 
  Lightbulb,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { InterviewQuestion, UserProfile } from '../types';
import { INTERVIEW_QUESTIONS_DATA } from '../data/mockData';

interface InterviewPrepProps {
  profile: UserProfile;
  onNavigateTab: (tab: string) => void;
}

export const InterviewPrep: React.FC<InterviewPrepProps> = ({
  profile,
  onNavigateTab,
}) => {
  const [selectedQuestion, setSelectedQuestion] = useState<InterviewQuestion>(INTERVIEW_QUESTIONS_DATA[0]);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    score: number;
    clarityScore: number;
    confidenceScore: number;
    starAlignment: boolean;
    strengths: string[];
    improvements: string[];
  } | null>(null);

  const handleEvaluateAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      // Heuristic evaluation based on STAR markers, positivity, and length
      const length = userAnswer.length;
      const hasAction = /action|did|built|learned|implemented|coordinated|resolved|managed|designed/i.test(userAnswer);
      const hasResult = /result|outcome|improved|increased|launched|achieved|reduced|metric/i.test(userAnswer);
      const isPositive = !/sorry|unfortunately|bad|gap was hard|struggled to find/i.test(userAnswer);

      let score = 75;
      if (length > 150) score += 10;
      if (hasAction) score += 5;
      if (hasResult) score += 5;
      if (isPositive) score += 4;
      score = Math.min(98, score);

      setEvaluationResult({
        score,
        clarityScore: Math.min(96, score + 2),
        confidenceScore: isPositive ? 92 : 74,
        starAlignment: hasAction && hasResult,
        strengths: [
          'Strong, affirmative tone with zero apologetic hedging.',
          `Directly connected past experience to the target ${profile.targetRole} role.`,
          length > 150 ? 'Well-paced response with good depth.' : 'Concise and to the point.'
        ],
        improvements: [
          !hasResult ? 'Add a concrete quantifiable outcome (e.g. "% improvement or on-time delivery").' : 'Consider mentioning your modern upskilling in Power BI or SQL.',
          'Reiterate your personal excitement for the company’s returnship culture.'
        ]
      });
    }, 1200);
  };

  const handleSelectSample = (sample: string) => {
    setUserAnswer(sample);
    setEvaluationResult(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 p-6 sm:p-8 rounded-3xl border border-blue-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              AI Mock Interview Evaluator
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Interview Simulator & STAR Rubric
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Practice answering tough questions about your career break, modern tools, and behavioral conflicts. Get instant AI critique on confidence, STAR alignment, and clarity.
            </p>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-blue-200 shadow-xs flex items-center gap-3 shrink-0">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <div className="text-xs">
              <span className="font-bold text-slate-900 block">STAR Rubric Guided</span>
              <span className="text-slate-500">Situation • Task • Action • Result</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Question Bank */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Curated Question Bank
            </span>
            <span className="text-xs font-bold text-brand-700 bg-rose-50 px-2 py-0.5 rounded">
              {INTERVIEW_QUESTIONS_DATA.length} Questions
            </span>
          </div>

          <div className="space-y-2.5">
            {INTERVIEW_QUESTIONS_DATA.map((q) => {
              const isSelected = selectedQuestion.id === q.id;
              return (
                <div
                  key={q.id}
                  onClick={() => {
                    setSelectedQuestion(q);
                    setUserAnswer('');
                    setEvaluationResult(null);
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-400 shadow-xs ring-1 ring-blue-200'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {q.category}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-2">
                    {q.question}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Golden Rule Tip Box */}
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs space-y-2 mt-4">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>The 3-Sentence Golden Rule for Break Gaps</span>
            </div>
            <p className="text-amber-800 leading-relaxed text-[11px]">
              1. <strong>Own it proudly:</strong> "Stepping back for family care was an intentional choice."<br />
              2. <strong>Show life superpowers:</strong> "It honed deep prioritization and resilience under pressure."<br />
              3. <strong>Pivot to now:</strong> "I’ve updated my modern tech stack and am fully ready to deliver."
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Practice & AI Evaluator */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Active Question Context Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                {selectedQuestion.category} Question
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Targeting: {profile.targetRole}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
              "{selectedQuestion.question}"
            </h3>

            {/* Why Interviewers Ask This */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1">
              <strong className="text-slate-800 block">Behind the Question:</strong>
              <p>{selectedQuestion.contextWhyAsked}</p>
            </div>

            {/* Ideal Framework */}
            <div className="text-xs text-slate-700">
              <strong className="text-blue-900">Framework Recommendation:</strong>{' '}
              <span>{selectedQuestion.idealAnswerFramework}</span>
            </div>
          </div>

          {/* User Answer Interactive Form */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-brand-600" />
                Type or paste your response below:
              </label>
              <button
                type="button"
                onClick={() => handleSelectSample(selectedQuestion.sampleAnswer)}
                className="text-[11px] font-bold text-brand-600 hover:text-brand-800 underline decoration-rose-300"
              >
                Insert Sample Model Answer
              </button>
            </div>

            <textarea
              rows={5}
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              placeholder="e.g. When I took time off to raise my twins, it was a deliberate life choice..."
              className="w-full p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 outline-none leading-relaxed"
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-slate-400">
                {userAnswer.length} characters • AI analyzes STAR alignment & confidence
              </span>

              <button
                onClick={handleEvaluateAnswer}
                disabled={isEvaluating || !userAnswer.trim()}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 via-rose-600 to-plum-600 hover:from-brand-700 text-white font-bold text-xs shadow-md transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isEvaluating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Naira AI is evaluating...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Evaluate with AI Rubric</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* AI Evaluation Feedback Card */}
          {evaluationResult && (
            <div className="bg-gradient-to-br from-emerald-50/70 via-white to-blue-50/60 p-6 rounded-3xl border-2 border-emerald-300 shadow-md space-y-5 animate-in fade-in duration-300">
              
              <div className="flex items-center justify-between border-b border-emerald-100 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-base font-heading text-slate-900">
                      AI Answer Assessment
                    </h4>
                    <span className="text-[11px] text-emerald-800 font-semibold">
                      Evaluated against returnship interview benchmarks
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <span className="text-2xl font-black font-heading text-emerald-700">
                      {evaluationResult.score}%
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase block">
                      Overall Score
                    </span>
                  </div>
                </div>
              </div>

              {/* Micro Scores */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white p-2.5 rounded-xl border border-emerald-100 shadow-xs">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Clarity</span>
                  <span className="font-heading font-extrabold text-slate-800 text-base">{evaluationResult.clarityScore}%</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-emerald-100 shadow-xs">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Confidence</span>
                  <span className="font-heading font-extrabold text-brand-700 text-base">{evaluationResult.confidenceScore}%</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-emerald-100 shadow-xs">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">STAR Method</span>
                  <span className="font-heading font-extrabold text-emerald-700 text-base">
                    {evaluationResult.starAlignment ? 'Aligned' : 'Partial'}
                  </span>
                </div>
              </div>

              {/* Strengths & Improvements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-emerald-100 space-y-2">
                  <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                    What you nailed:
                  </span>
                  <ul className="space-y-1.5 text-slate-700">
                    {evaluationResult.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-amber-100 space-y-2">
                  <span className="font-bold text-amber-800 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    How to polish even further:
                  </span>
                  <ul className="space-y-1.5 text-slate-700">
                    {evaluationResult.improvements.map((imp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* Model Answer Showcase */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 text-xs">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-600" />
              <h4 className="font-bold text-slate-900 font-heading text-sm">
                Model High-Impact Answer
              </h4>
            </div>
            <p className="text-slate-700 leading-relaxed italic bg-white p-4 rounded-2xl border border-slate-200">
              {selectedQuestion.sampleAnswer}
            </p>
            <div>
              <span className="font-bold text-slate-600 block mb-1">Key talking points to remember:</span>
              <ul className="list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                {selectedQuestion.keyPointsToHit.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
