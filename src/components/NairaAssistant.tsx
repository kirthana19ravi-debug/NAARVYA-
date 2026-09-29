import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  X, 
  User, 
  ArrowRight, 
  MessageSquare, 
  RefreshCw, 
  Heart,
  ChevronDown
} from 'lucide-react';
import { ChatMessage, UserProfile } from '../types';
import { generateNairaResponse } from '../services/aiEngine';

interface NairaAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onNavigateTab: (tab: string) => void;
}

export const NairaAssistant: React.FC<NairaAssistantProps> = ({
  isOpen,
  onClose,
  profile,
  onNavigateTab,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'naira',
      text: `Hello ${profile.name.split(' ')[0]}! I'm **Naira**, your dedicated AI Career Re-entry Coach at NAARIVA. 🌸\n\nI’m here to support your transition from **${profile.previousRole}** into **${profile.targetRole}**. Whether you want to polish how you explain your **${profile.breakDurationYears}-year break (${profile.breakReason})**, check your next learning milestone, or prep for returnships, ask me anything!`,
      timestamp: 'Just now',
      actionLinks: [
        { label: 'How do I explain my break?', tab: 'resume' },
        { label: 'What should I learn next?', tab: 'learn' },
        { label: 'View Matched Returnships', tab: 'opportunities' }
      ]
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "How do I explain my career break in an interview?",
    "What should I learn next for my target role?",
    "What jobs match my skills?",
    "Am I ready to apply right now?",
    "How do I negotiate flexible or hybrid hours?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const q = textToSend || inputQuery;
    if (!q.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: q,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply = generateNairaResponse(q, profile);
      const nairaMsg: ChatMessage = {
        id: `naira-${Date.now()}`,
        sender: 'naira',
        text: botReply.text,
        timestamp: 'Just now',
        actionLinks: botReply.actionLinks
      };
      setMessages(prev => [...prev, nairaMsg]);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] bg-white shadow-2xl border-l border-rose-100 flex flex-col animate-in slide-in-from-right duration-200">
      
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-brand-600 via-rose-600 to-plum-700 text-white flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
            <Bot className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading font-bold text-base">Naira AI</h3>
              <span className="text-[10px] font-semibold bg-emerald-400/20 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-400/30">
                Online
              </span>
            </div>
            <p className="text-[11px] text-rose-100 font-light">
              Career Re-entry Coach • Always Supportive
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          title="Close coach"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Profile Context Pill */}
      <div className="bg-rose-50/70 border-b border-rose-100 px-4 py-2 flex items-center justify-between text-[11px] text-slate-600">
        <span>Context: <strong className="text-slate-800">{profile.name}</strong></span>
        <span className="text-brand-700 font-semibold">{profile.targetRole}</span>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/40">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1.5`}
            >
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 px-1">
                {isUser ? <span>You</span> : <span>Naira AI</span>}
                <span>• {msg.timestamp}</span>
              </div>

              <div
                className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  isUser
                    ? 'bg-brand-600 text-white rounded-tr-xs shadow-xs'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs shadow-xs space-y-2'
                }`}
              >
                <div className="whitespace-pre-line">
                  {msg.text}
                </div>

                {/* Bot Action Links */}
                {msg.actionLinks && msg.actionLinks.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {msg.actionLinks.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateTab(link.tab);
                          onClose();
                        }}
                        className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-brand-700 font-semibold text-[11px] border border-rose-200 transition-colors flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 italic py-1">
            <div className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
            <span>Naira is thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div className="p-3 bg-white border-t border-slate-100 overflow-x-auto pb-2">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
          Suggested Questions:
        </span>
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
          {suggestedQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(q)}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-brand-700 text-[11px] font-medium whitespace-nowrap border border-slate-200 transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Message Input Footer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={e => setInputQuery(e.target.value)}
          placeholder="Ask Naira anything about your career break..."
          className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
        />
        <button
          type="submit"
          disabled={!inputQuery.trim()}
          className="p-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-xs disabled:opacity-40 transition-all"
          title="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
