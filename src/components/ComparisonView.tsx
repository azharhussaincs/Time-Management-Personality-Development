import React, { useState } from 'react';
import { VERSION_1, VERSION_2, PILLARS } from '../blogData';
import { ArrowRight, CheckCircle2, SplitSquareVertical, Sparkles, BookOpen } from 'lucide-react';

export const ComparisonView: React.FC = () => {
  const [selectedParagraph, setSelectedParagraph] = useState<number | 'all'>('all');

  const filteredV1Paras = selectedParagraph === 'all'
    ? VERSION_1.paragraphs
    : VERSION_1.paragraphs.filter(p => p.id === selectedParagraph);

  const filteredV2Paras = selectedParagraph === 'all'
    ? VERSION_2.paragraphs
    : VERSION_2.paragraphs.filter(p => p.id === selectedParagraph);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      {/* Intro Banner */}
      <div className="mb-6 p-4 bg-[#f8f4ec] border border-[#e5dcce] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#78716c] mb-1">
            <SplitSquareVertical className="w-3.5 h-3.5 text-amber-700" />
            <span>Iterative Drafting &amp; Editorial Refinement</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-[#1c1917]">
            Side-by-Side: Version 1 (Draft) vs. Version 2 (Polished)
          </h2>
          <p className="text-xs sm:text-sm text-[#57534e] mt-0.5">
            Compare every single line to see how clarity was sharpened, repetitive syntax eliminated, and concrete examples enriched.
          </p>
        </div>

        {/* Paragraph Filter Tabs */}
        <div className="flex items-center gap-1 bg-[#ede6da] p-1 rounded-lg self-start md:self-auto font-mono text-xs">
          <button
            onClick={() => setSelectedParagraph('all')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              selectedParagraph === 'all'
                ? 'bg-white text-[#1c1917] font-semibold shadow-2xs'
                : 'text-[#57534e] hover:text-[#1c1917]'
            }`}
          >
            All 4
          </button>
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => setSelectedParagraph(num)}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                selectedParagraph === num
                  ? 'bg-white text-[#1c1917] font-semibold shadow-2xs'
                  : 'text-[#57534e] hover:text-[#1c1917]'
              }`}
            >
              P{num}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="space-y-8">
        {filteredV1Paras.map((v1Para, idx) => {
          const v2Para = filteredV2Paras[idx];
          if (!v2Para) return null;

          return (
            <div
              key={v1Para.id}
              className="bg-[#fffdfa] border border-[#e4ded3] rounded-xl shadow-xs overflow-hidden"
            >
              {/* Paragraph Header */}
              <div className="bg-[#f5efe6] px-4 py-3 border-b border-[#e5dcd0] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#1c1917] text-white rounded">
                    Paragraph {v1Para.id} of 4
                  </span>
                  <span className="font-serif font-bold text-sm text-[#292524]">
                    {v2Para.theme}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#78716c]">
                  Lines {v1Para.lines[0].number.toString().padStart(2, '0')}–{v1Para.lines[v1Para.lines.length - 1].number.toString().padStart(2, '0')} (12 lines each)
                </div>
              </div>

              {/* Side-by-Side Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#ece5d8]">
                {/* Version 1 Column */}
                <div className="p-4 sm:p-5 bg-[#faf8f5]">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#ece4d6]">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#78716c]">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>VERSION 1 (Initial Draft)</span>
                    </div>
                    <span className="text-[11px] font-mono text-stone-500">Unpolished Draft</span>
                  </div>

                  <div className="space-y-2.5">
                    {v1Para.lines.map((line, lIdx) => (
                      <div
                        key={line.number}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-serif text-[#44403c] leading-relaxed p-1.5 rounded hover:bg-[#f0e9dc]/60"
                      >
                        <span className="font-mono text-[11px] text-[#a8a29e] shrink-0 w-5 pt-0.5 text-right select-none">
                          {line.number}
                        </span>
                        <div className="flex-1">
                          <p>{line.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Version 2 Column */}
                <div className="p-4 sm:p-5 bg-[#fffdf9]">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#ebdcc8]">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-900">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>VERSION 2 (Polished &amp; Improved)</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                      Refined &amp; Elevated
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {v2Para.lines.map((line, lIdx) => {
                      const v1Line = v1Para.lines[lIdx];
                      const isEnhanced = v1Line && v1Line.text !== line.text;

                      return (
                        <div
                          key={line.number}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm font-serif leading-relaxed p-1.5 rounded transition-colors ${
                            isEnhanced
                              ? 'bg-amber-50/80 border-l-2 border-amber-500 text-[#1c1917]'
                              : 'text-[#292524] hover:bg-[#f5efe6]'
                          }`}
                        >
                          <span className="font-mono text-[11px] text-amber-800/70 font-semibold shrink-0 w-5 pt-0.5 text-right select-none">
                            {line.number}
                          </span>
                          <div className="flex-1">
                            <p className="font-medium">{line.text}</p>
                          </div>
                          {line.pillars && line.pillars.length > 0 && (
                            <span className="text-[10px] font-mono text-[#857b74] shrink-0 hidden sm:inline pt-0.5">
                              {line.pillars[0]}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
