import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Send, 
  BookOpen, 
  Award, 
  ThumbsUp, 
  ExternalLink, 
  Share2, 
  CheckCircle2, 
  UserCheck, 
  MessageSquare,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PeerCourseTransfer, UserProfile, RoadmapWeek } from '../types';
import { PEER_COURSE_TRANSFERS } from '../data/mockData';

interface PeerKnowledgeTransferProps {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  roadmap: RoadmapWeek[];
}

export const PeerKnowledgeTransfer: React.FC<PeerKnowledgeTransferProps> = ({
  profile,
  setProfile,
  roadmap,
}) => {
  const [transfers, setTransfers] = useState<PeerCourseTransfer[]>(PEER_COURSE_TRANSFERS);
  const [showShareForm, setShowShareForm] = useState(false);
  const [courseTitleInput, setCourseTitleInput] = useState(
    roadmap[0]?.title || 'Power BI & Advanced Data Visualizations'
  );
  const [recipientNameInput, setRecipientNameInput] = useState('');
  const [notesSummaryInput, setNotesSummaryInput] = useState('');
  const [tip1Input, setTip1Input] = useState('');
  const [tip2Input, setTip2Input] = useState('');
  const [resourceLinkInput, setResourceLinkInput] = useState('');
  const [transferSuccess, setTransferSuccess] = useState(false);

  const handleShareCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseTitleInput || !notesSummaryInput) return;

    const newTransfer: PeerCourseTransfer = {
      id: `pct-${Date.now()}`,
      courseTitle: courseTitleInput,
      topic: profile.targetRole,
      sharedByName: profile.name,
      sharedByRole: `${profile.previousRole} ➔ ${profile.targetRole}`,
      learnerRecipientName: recipientNameInput.trim() || 'NAARVYA Sisterhood Community',
      notesSummary: notesSummaryInput,
      cheatsheetTips: [
        tip1Input || 'Focus on foundational concepts before advanced tool features.',
        tip2Input || 'Build a small hands-on proof-of-concept project.'
      ],
      resourceLink: resourceLinkInput || 'https://naarvya.community/notes',
      sisterhoodLikes: 1,
      badgeAwarded: 'Sisterhood Knowledge Champion',
      timestamp: 'Just now'
    };

    setTransfers(prev => [newTransfer, ...prev]);

    // Reward user with Spark points and increment streak / counter
    setProfile(p => ({
      ...p,
      rewardPoints: p.rewardPoints + 100,
      transferredCoursesCount: (p.transferredCoursesCount || 0) + 1,
      streakDays: p.streakDays + 1
    }));

    setTransferSuccess(true);
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setTimeout(() => {
      setShowShareForm(false);
      setTransferSuccess(false);
      setNotesSummaryInput('');
      setTip1Input('');
      setTip2Input('');
      setResourceLinkInput('');
      setRecipientNameInput('');
    }, 1800);
  };

  const handleLike = (id: string) => {
    setTransfers(prev =>
      prev.map(t => (t.id === id ? { ...t, sisterhoodLikes: t.sisterhoodLikes + 1 } : t))
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-50 via-white to-purple-50 p-6 sm:p-8 rounded-3xl border border-rose-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-brand-700 text-xs font-bold mb-2">
              <Heart className="w-3.5 h-3.5 fill-brand-600 text-brand-600" />
              Sisterhood Pay-It-Forward & Course Transfer
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Transfer Learned Courses to Other Women
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              When you learn a course on NAARVYA, your knowledge multiplies. Share condensed notes, cheat sheets, and practical tips with fellow returning women. Earn <strong className="text-brand-700">+100 Spark Points</strong> and Sisterhood badges!
            </p>
          </div>

          <button
            onClick={() => setShowShareForm(!showShareForm)}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-brand-600 via-rose-600 to-plum-600 hover:from-brand-700 hover:to-plum-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 shrink-0"
          >
            <Share2 className="w-4 h-4" />
            <span>{showShareForm ? 'Close Form' : 'Transfer a Course Notes'}</span>
          </button>
        </div>
      </div>

      {/* Share / Transfer Modal Form */}
      {showShareForm && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-brand-300 shadow-lg space-y-5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-600" />
              Transfer Knowledge & Help Another Woman Return
            </h3>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              +100 Spark Points & +1 Streak
            </span>
          </div>

          {transferSuccess ? (
            <div className="py-8 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900">
                Knowledge Successfully Transferred!
              </h4>
              <p className="text-xs text-slate-600">
                Your course notes have been added to the NAARVYA Sisterhood Hub. 100 Spark Points have been credited to your account!
              </p>
            </div>
          ) : (
            <form onSubmit={handleShareCourse} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Course / Topic You Have Completed *
                  </label>
                  <input
                    type="text"
                    required
                    value={courseTitleInput}
                    onChange={e => setCourseTitleInput(e.target.value)}
                    placeholder="e.g. Power BI & DAX Dashboards"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Transfer Specifically To (Optional Peer Name or Leave for Community)
                  </label>
                  <input
                    type="text"
                    value={recipientNameInput}
                    onChange={e => setRecipientNameInput(e.target.value)}
                    placeholder="e.g. Megha Sen (or leave blank for open community)"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Key Concept Summary / Takeaway *
                </label>
                <textarea
                  rows={3}
                  required
                  value={notesSummaryInput}
                  onChange={e => setNotesSummaryInput(e.target.value)}
                  placeholder="Explain what was most impactful in this course, what formulas/tools mattered, and how to practice..."
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pro-tip 1 for a returning woman studying this
                  </label>
                  <input
                    type="text"
                    value={tip1Input}
                    onChange={e => setTip1Input(e.target.value)}
                    placeholder="e.g. Focus on DAX CALCULATE before learning complex visual formatting"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pro-tip 2 (Interview or portfolio advice)
                  </label>
                  <input
                    type="text"
                    value={tip2Input}
                    onChange={e => setTip2Input(e.target.value)}
                    placeholder="e.g. Host your dashboard on NovyPro or GitHub to show recruiters"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Resource or GitHub / Notion Link (Optional)
                </label>
                <input
                  type="url"
                  value={resourceLinkInput}
                  onChange={e => setResourceLinkInput(e.target.value)}
                  placeholder="https://github.com/your-username/my-project"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowShareForm(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publish Knowledge Transfer (+100 Points)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Community Knowledge Shares Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-plum-600" />
            Sisterhood Knowledge Hub ({transfers.length} Shared Summaries)
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Learn from women who recently completed these modules
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transfers.map(item => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-brand-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-50 text-plum-700 border border-purple-100">
                    {item.topic}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">{item.timestamp}</span>
                </div>

                <h4 className="font-bold text-sm font-heading text-slate-900 mb-1">
                  {item.courseTitle}
                </h4>

                <div className="text-[11px] text-slate-500 mb-3 flex items-center gap-1.5">
                  <span className="font-bold text-brand-700">{item.sharedByName}</span>
                  <span>➔</span>
                  <span className="font-medium text-slate-600">{item.learnerRecipientName || 'Sisterhood'}</span>
                </div>

                {/* Notes Summary */}
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-3">
                  "{item.notesSummary}"
                </p>

                {/* Practical Tips */}
                <div className="space-y-1.5 text-xs text-slate-600">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Cheatsheet Tips:
                  </span>
                  {item.cheatsheetTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                      <span className="text-brand-600 font-bold">•</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleLike(item.id)}
                  className="flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-xl transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                  <span>{item.sisterhoodLikes} Endorsements</span>
                </button>

                {item.resourceLink && (
                  <a
                    href={item.resourceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-slate-400 hover:text-brand-600 transition-colors"
                    title="View shared resource"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
