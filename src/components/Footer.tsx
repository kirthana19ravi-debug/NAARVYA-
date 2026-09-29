import React from 'react';
import { Sparkles, Heart, ShieldCheck, Mail, Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-plum-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                NAARIVA
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Her next chapter starts here. Empathetic, AI-driven career re-entry empowering women returning from career breaks to bridge skills and land top returnships.
            </p>
            <div className="flex items-center gap-2 text-xs text-rose-300 font-semibold">
              <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
              <span>Built with dignity & pride for returning women</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform Features</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateTab('journey')} className="hover:text-white transition-colors">
                  My Journey & Readiness Score
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('skills')} className="hover:text-white transition-colors">
                  Transferable Skills Extractor
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('skillgaps')} className="hover:text-white transition-colors">
                  Skill Gap Benchmarking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('learn')} className="hover:text-white transition-colors">
                  8-Week Learning Roadmap
                </button>
              </li>
            </ul>
          </div>

          {/* Returnship Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Partner Returnships</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Microsoft Leap Program</li>
              <li>Amazon Amplify Women</li>
              <li>TCS SCIP (Second Career)</li>
              <li>Intuit Again Fellowship</li>
              <li>Deloitte Encore Initiative</li>
              <li>Goldman Sachs Returnship</li>
            </ul>
          </div>

          {/* The NAARIVA Returner Pledge */}
          <div className="space-y-3 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>The NAARIVA Pledge</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We advocate with hiring managers and corporate leaders that life leadership, caregiving, and maternity pauses cultivate rare resilience, loyalty, and problem-solving power.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NAARIVA. All rights reserved. Her next chapter starts here.</p>
          <div className="flex items-center gap-6">
            <span>Privacy & Respect</span>
            <span>Return-to-Work Standards</span>
            <span>Community Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
