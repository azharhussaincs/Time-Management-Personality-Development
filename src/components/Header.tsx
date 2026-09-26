import React from 'react';
import { BookOpen, SplitSquareVertical, CheckCircle2, Sliders, Volume2, VolumeX, Copy, Check, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: 'v2' | 'compare' | 'v1' | 'audit' | 'lab';
  setActiveTab: (tab: 'v2' | 'compare' | 'v1' | 'audit' | 'lab') => void;
  isPlayingAudio: boolean;
  toggleAudio: () => void;
  copied: boolean;
  onCopy: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isPlayingAudio,
  toggleAudio,
  copied,
  onCopy
}) => {
  return (
    <header className="border-b border-[#e7e2d9] bg-[#fffdfa] sticky top-0 z-30 shadow-xs">
      {/* Top Editorial Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between border-b border-[#f1ece1] text-xs font-mono text-[#78716c]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          <span className="font-semibold text-[#44403c] tracking-wider uppercase">Editorial Desk</span>
          <span className="hidden sm:inline text-[#a8a29e]">|</span>
          <span className="hidden sm:inline">Personal Development &amp; Daily Habit Architecture</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline">Target: 4 Paragraphs · ~50 Lines · 7 Pillars</span>
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors text-xs font-medium cursor-pointer ${
              isPlayingAudio
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
            title={isPlayingAudio ? 'Stop reading narration' : 'Listen to article (Text-to-Speech)'}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-amber-700 animate-spin" />
                <span>Stop Audio</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-stone-600" />
                <span>Read Aloud</span>
              </>
            )}
          </button>
          <button
            onClick={onCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#292524] text-white hover:bg-[#1c1917] transition-colors text-xs font-medium cursor-pointer"
            title="Copy Final Blog Post"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Post</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Masthead Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-5 pb-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#78716c] mb-1">
              Personal Productivity &amp; Character Studies
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1917] tracking-tight">
              Time Management &amp; Personality Development
            </h1>
            <p className="text-sm text-[#57534e] mt-1 max-w-2xl font-sans">
              An iterative essay examining how managing daily hours cultivates discipline, productivity, confidence, stress control, goals, balance, and lifelong character.
            </p>
          </div>

          {/* Quick Metrics Badge strip */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#57534e]">
            <span className="px-2.5 py-1 bg-[#f5efe6] border border-[#e8dfd1] rounded text-[#44403c] font-semibold">
              4 Paragraphs
            </span>
            <span className="px-2.5 py-1 bg-[#f5efe6] border border-[#e8dfd1] rounded text-[#44403c] font-semibold">
              48 Lines (~50)
            </span>
            <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 7 Core Pillars
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2 mt-5 border-t border-[#f0ebe1] pt-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('v2')}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'v2'
                ? 'bg-[#1c1917] text-white shadow-xs font-semibold'
                : 'text-[#57534e] hover:text-[#1c1917] hover:bg-[#f3ede2]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Version 2 (Polished Post)</span>
            <span className="ml-1 text-[10px] opacity-75 font-mono">Final</span>
          </button>

          <button
            onClick={() => setActiveTab('compare')}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'compare'
                ? 'bg-[#1c1917] text-white shadow-xs font-semibold'
                : 'text-[#57534e] hover:text-[#1c1917] hover:bg-[#f3ede2]'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>Side-by-Side Comparison</span>
          </button>

          <button
            onClick={() => setActiveTab('audit')}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'audit'
                ? 'bg-[#1c1917] text-white shadow-xs font-semibold'
                : 'text-[#57534e] hover:text-[#1c1917] hover:bg-[#f3ede2]'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Editorial Review &amp; Audit</span>
          </button>

          <button
            onClick={() => setActiveTab('v1')}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'v1'
                ? 'bg-[#1c1917] text-white shadow-xs font-semibold'
                : 'text-[#57534e] hover:text-[#1c1917] hover:bg-[#f3ede2]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-stone-400" />
            <span>Version 1 (Initial Draft)</span>
          </button>

          <button
            onClick={() => setActiveTab('lab')}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'lab'
                ? 'bg-[#1c1917] text-white shadow-xs font-semibold'
                : 'text-[#57534e] hover:text-[#1c1917] hover:bg-[#f3ede2]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-indigo-500" />
            <span>7-Pillars Action Lab</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
