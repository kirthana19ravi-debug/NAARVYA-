import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Heart, 
  X,
  Play
} from 'lucide-react';
import { UserProfile } from '../types';
import { DEMO_PROFILES } from '../data/mockData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userCreds: { method: 'google' | 'email' | 'phone'; identifier: string; isNewUser: boolean }) => void;
  onSelectDemoProfile: (key: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  onSelectDemoProfile,
}) => {
  const [authMethod, setAuthMethod] = useState<'google' | 'email' | 'phone'>('google');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        method: 'google',
        identifier: 'priya.sharma@gmail.com',
        isNewUser: true
      });
    }, 600);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        method: 'email',
        identifier: emailInput,
        isNewUser: true
      });
    }, 600);
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
    }, 500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        method: 'phone',
        identifier: `+91 ${phoneInput}`,
        isNewUser: true
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-rose-100 overflow-hidden relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-tr from-brand-600 via-rose-600 to-plum-700 p-6 sm:p-8 text-white text-center relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-3 border border-white/20 shadow-md">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-black font-heading tracking-tight">
            Welcome to NAARVYA
          </h2>
          <p className="text-xs text-rose-100 mt-1 font-light">
            “Her next chapter starts here.”
          </p>
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-[11px] font-medium">
            <Heart className="w-3 h-3 text-rose-200 fill-rose-200" />
            <span>Empowering 120,000+ Women Returning to Work</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Method Selector Tabs */}
          <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
            <button
              type="button"
              onClick={() => { setAuthMethod('google'); setOtpSent(false); }}
              className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                authMethod === 'google' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              <span>Google</span>
            </button>
            <button
              type="button"
              onClick={() => { setAuthMethod('email'); setOtpSent(false); }}
              className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                authMethod === 'email' ? 'bg-white text-brand-700 shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </button>
            <button
              type="button"
              onClick={() => setAuthMethod('phone')}
              className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                authMethod === 'phone' ? 'bg-white text-plum-700 shadow-xs' : 'hover:text-slate-900'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Phone</span>
            </button>
          </div>

          {/* Google Auth Tab */}
          {authMethod === 'google' && (
            <div className="space-y-4 text-center">
              <p className="text-xs text-slate-500">
                Sign in with your Google account to automatically secure your progress and roadmap.
              </p>

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-3 shadow-xs transition-all active:scale-[0.99]"
              >
                {/* Google G Logo */}
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.04h3.87c2.26-2.09 3.67-5.17 3.67-9.14z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.04c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.13C3.27 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.27 14.25c-.25-.72-.38-1.49-.38-2.25s.13-1.53.38-2.25V6.62H1.26C.46 8.23 0 10.06 0 12s.46 3.77 1.26 5.38l4.01-3.13z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.64 1.26 6.62l4.01 3.13c.95-2.85 3.6-4.96 6.73-4.96z"
                  />
                </svg>
                <span>{isLoading ? 'Signing in with Google...' : 'Continue with Google'}</span>
              </button>
            </div>
          )}

          {/* Email Auth Tab */}
          {authMethod === 'email' && (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                    placeholder="e.g. yourname@domain.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-plum-600 hover:from-brand-700 hover:to-plum-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{isLoading ? 'Verifying...' : 'Sign In / Register with Email'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Phone Auth Tab */}
          {authMethod === 'phone' && (
            <div className="space-y-4">
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone Number</label>
                    <div className="flex gap-2">
                      <span className="px-3 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600">
                        +91 (IND)
                      </span>
                      <input
                        type="tel"
                        required
                        value={phoneInput}
                        onChange={e => setPhoneInput(e.target.value)}
                        placeholder="98765 43210"
                        className="flex-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-xl bg-plum-600 hover:bg-plum-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    {isLoading ? 'Sending SMS OTP...' : 'Send Verification OTP'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="text-center">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      ✓ OTP sent to +91 {phoneInput}
                    </span>
                    <p className="text-[11px] text-slate-400 mt-2">
                      Enter the 4-digit code (Use demo code: 1 2 3 4)
                    </p>
                  </div>

                  <div className="flex justify-center gap-3">
                    {[0, 1, 2, 3].map((idx) => (
                      <input
                        key={idx}
                        type="text"
                        maxLength={1}
                        value={otpCode[idx]}
                        onChange={e => {
                          const val = e.target.value;
                          const nextOtp = [...otpCode];
                          nextOtp[idx] = val;
                          setOtpCode(nextOtp);
                          if (val && e.target.nextElementSibling) {
                            (e.target.nextElementSibling as HTMLInputElement).focus();
                          }
                        }}
                        className="w-12 h-12 text-center text-lg font-bold rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none"
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-plum-600 hover:from-brand-700 hover:to-plum-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    {isLoading ? 'Verifying OTP...' : 'Verify OTP & Build Profile'}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Quick Demo Access Divider */}
          <div className="pt-4 border-t border-slate-100 text-center space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              — Or Instant Hackathon Demo —
            </span>
            <div className="flex justify-center gap-2">
              <button
                type="button"
                onClick={() => {
                  onSelectDemoProfile('ananya');
                  onClose();
                }}
                className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-brand-700 font-bold text-xs border border-rose-200 transition-colors flex items-center gap-1"
              >
                <Play className="w-3 h-3 fill-brand-600 text-brand-600" />
                <span>Demo: Ananya (BA)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectDemoProfile('priya');
                  onClose();
                }}
                className="px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-plum-700 font-bold text-xs border border-purple-200 transition-colors"
              >
                <span>Demo: Priya (Dev)</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
