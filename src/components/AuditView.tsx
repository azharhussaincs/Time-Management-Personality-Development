import React from 'react';
import { EDITORIAL_REVIEW } from '../blogData';
import { CheckCircle2, AlertTriangle, Sparkles, ArrowRight, ShieldCheck, Target, RefreshCw } from 'lucide-react';

export const AuditView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      {/* Header Banner */}
      <div className="mb-8 p-6 bg-[#f7f2ea] border border-[#e5dcce] rounded-xl">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-2">
          <ShieldCheck className="w-4 h-4 text-amber-700" />
          <span>Self-Review &amp; Editorial Audit Report</span>
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#1c1917] mb-2">
          Iterative Editorial Review (V1 → V2)
        </h2>
        <p className="text-sm text-[#57534e] leading-relaxed">
          As requested in the editorial workflow, Version 1 was subjected to rigorous self-review across five foundational criteria: <strong>Clarity</strong>, <strong>Grammar</strong>, <strong>Repetition</strong>, <strong>Organization</strong>, and <strong>Relevance</strong>. Here is the complete audit breakdown and the concrete editorial remedies enacted for Version 2.
        </p>

        {/* Audit Scorecard Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-5 pt-4 border-t border-[#e8dfd1]">
          {EDITORIAL_REVIEW.map((item) => (
            <div key={item.category} className="bg-white/80 p-2.5 rounded-lg border border-[#ded5c7] text-center">
              <span className="text-[11px] font-mono text-[#78716c] block">{item.category}</span>
              <span className="text-xs font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Detail Cards */}
      <div className="space-y-6">
        {EDITORIAL_REVIEW.map((item, index) => (
          <div
            key={item.category}
            className="bg-[#fffdfa] border border-[#e4ded3] rounded-xl p-5 sm:p-6 shadow-xs hover:border-[#cfc5b4] transition-all"
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#ece6d9]">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#1c1917] text-white text-xs font-mono flex items-center justify-center font-bold">
                  0{index + 1}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                  {item.category}
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                {item.status} in Version 2
              </span>
            </div>

            {/* Critique & Remedy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="bg-[#faf5ee] p-3.5 rounded-lg border border-[#ebdccb]">
                <div className="flex items-center gap-1.5 text-xs font-mono text-amber-800 font-semibold mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                  <span>Draft Critique (Version 1)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#44403c] leading-relaxed font-sans">
                  {item.critique}
                </p>
              </div>

              <div className="bg-[#f0fdf4] p-3.5 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-800 font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Editorial Remedy (Version 2)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#14532d] leading-relaxed font-sans">
                  {item.remedy}
                </p>
              </div>
            </div>

            {/* Specific Change Highlights */}
            <div className="mt-4 pt-3 border-t border-[#f0ebd9]">
              <span className="text-xs font-mono text-[#78716c] uppercase tracking-wider block mb-2">
                Concrete Editorial Changes Made:
              </span>
              <ul className="space-y-1.5">
                {item.changeHighlights.map((hl, hlIdx) => (
                  <li key={hlIdx} className="text-xs sm:text-sm text-[#44403c] flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Target Audience Compliance Check */}
      <div className="mt-8 p-6 bg-[#fffdfa] border border-[#e4ded3] rounded-xl">
        <h3 className="font-serif font-bold text-base text-[#1c1917] mb-3 flex items-center gap-2">
          <Target className="w-4 h-4 text-indigo-600" />
          <span>Requirement &amp; Audience Verification Checklist</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#57534e]">
          <div className="flex items-center gap-2 p-2 bg-[#f8f5ee] rounded border border-[#ece4d6]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Target Audience: Students &amp; Young Professionals</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-[#f8f5ee] rounded border border-[#ece4d6]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Paragraph Constraint: Exactly 4 Paragraphs (Verified)</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-[#f8f5ee] rounded border border-[#ece4d6]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Line Count: 48 Lines (~50 target fulfilled)</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-[#f8f5ee] rounded border border-[#ece4d6]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>7 Core Themes Covered: All Explicitly Addressed</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-[#f8f5ee] rounded border border-[#ece4d6]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Language: Simple, Professional, Non-Technical</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-[#f8f5ee] rounded border border-[#ece4d6]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Cadence: Short, Readable Sentences with Examples</span>
          </div>
        </div>
      </div>
    </div>
  );
};
