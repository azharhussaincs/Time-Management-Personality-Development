import React, { useState } from 'react';
import { BlogPostData, PILLARS, PillarInfo } from '../blogData';
import { ListOrdered, Highlighter, Check, Copy, Bookmark, Lightbulb, Clock } from 'lucide-react';

interface ReaderViewProps {
  data: BlogPostData;
  isVersion2?: boolean;
}

export const ReaderView: React.FC<ReaderViewProps> = ({ data, isVersion2 = true }) => {
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [activePillarFilter, setActivePillarFilter] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState(false);

  // Calculate statistics
  const totalLines = data.paragraphs.reduce((acc, p) => acc + p.lines.length, 0);
  const totalWords = data.paragraphs.reduce((acc, p) => {
    return acc + p.lines.reduce((lAcc, l) => lAcc + l.text.split(/\s+/).length, 0);
  }, 0);

  const handleCopyFormatted = () => {
    let output = `# ${data.title}\n\n`;
    data.paragraphs.forEach((p, pIndex) => {
      const pText = p.lines.map(l => l.text).join(' ');
      output += `${pText}\n\n`;
    });
    navigator.clipboard.writeText(output.trim());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleCopyLines = () => {
    let output = `${data.title}\n\n`;
    data.paragraphs.forEach((p, pIndex) => {
      output += `[Paragraph ${p.id} - ${p.theme}]\n`;
      p.lines.forEach(l => {
        output += `${l.number.toString().padStart(2, '0')}: ${l.text}\n`;
      });
      output += '\n';
    });
    navigator.clipboard.writeText(output.trim());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      {/* Article Status & Version Badge */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#ece6d9]">
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-0.5 text-xs font-mono font-medium rounded ${
            isVersion2 
              ? 'bg-amber-100 text-amber-900 border border-amber-300' 
              : 'bg-stone-100 text-stone-700 border border-stone-200'
          }`}>
            {data.versionLabel}
          </span>
          <span className="text-xs text-[#78716c] font-mono">
            {totalLines} Lines · 4 Paragraphs · {totalWords} Words · ~2.5 min read
          </span>
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowLineNumbers(!showLineNumbers)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
              showLineNumbers
                ? 'bg-[#1c1917] text-white border-[#1c1917]'
                : 'bg-white text-[#57534e] border-[#d6cfc4] hover:bg-[#f5efe6]'
            }`}
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Line Numbers: {showLineNumbers ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={handleCopyFormatted}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border border-[#d6cfc4] bg-white text-[#57534e] hover:bg-[#f5efe6] transition-colors cursor-pointer"
            title="Copy as standard paragraphs"
          >
            {copiedText ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Prose</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 7-Pillars Quick Filter / Highlighter Bar */}
      <div className="mb-8 p-3.5 bg-[#f7f2ea] border border-[#e6ded0] rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#57534e]">
            <Highlighter className="w-3.5 h-3.5 text-amber-600" />
            <span>7 Core Themes Highlighter:</span>
          </div>
          {activePillarFilter && (
            <button
              onClick={() => setActivePillarFilter(null)}
              className="text-xs text-amber-800 hover:underline font-mono cursor-pointer"
            >
              Clear Filter
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {PILLARS.map((pillar) => {
            const isSelected = activePillarFilter === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarFilter(isSelected ? null : pillar.id)}
                className={`text-xs px-2.5 py-1 rounded transition-all flex items-center gap-1.5 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1c1917] text-white border-[#1c1917] shadow-xs'
                    : 'bg-white text-[#44403c] border-[#dfd7c9] hover:bg-[#ede5d8]'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: pillar.color }}
                />
                <span className="font-medium">{pillar.name}</span>
                <span className="text-[10px] text-[#78716c] font-mono">P{pillar.paragraph}</span>
              </button>
            );
          })}
        </div>
        {activePillarFilter && (
          <div className="mt-2 text-xs text-[#57534e] pt-2 border-t border-[#ebd8c4] flex items-center gap-2">
            <Bookmark className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>
              Showing sentences advancing: <strong>{PILLARS.find(p => p.id === activePillarFilter)?.name}</strong> — {PILLARS.find(p => p.id === activePillarFilter)?.description}
            </span>
          </div>
        )}
      </div>

      {/* Main Editorial Article Container */}
      <article className="bg-[#fffdf9] p-6 sm:p-10 md:p-12 rounded-xl border border-[#e4ded3] shadow-xs">
        {/* Article Header */}
        <header className="mb-10 text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#857b74] mb-3">
            Essay · Personal Development &amp; Daily Habits
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1c1917] leading-tight mb-4">
            {data.title}
          </h1>
          <p className="text-base text-[#57534e] italic font-serif leading-relaxed">
            {data.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#857b74] mt-6 pt-4 border-t border-[#f0ebd9]">
            <span>Audience: Students &amp; Young Professionals</span>
            <span>·</span>
            <span>Target: Exactly 4 Paragraphs</span>
            <span>·</span>
            <span>Length: 48 Lines</span>
          </div>
        </header>

        {/* 4 Paragraphs Content */}
        <div className="space-y-10">
          {data.paragraphs.map((paragraph) => (
            <section
              key={paragraph.id}
              className="relative p-4 sm:p-6 bg-[#faf7f2]/60 rounded-lg border border-[#ede7dc] transition-all hover:bg-[#faf7f2]"
            >
              {/* Paragraph Metadata Tag */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#e9e1d3] text-xs font-mono text-[#78716c]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#292524] uppercase">Paragraph {paragraph.id} of 4</span>
                  <span>·</span>
                  <span className="text-[#57534e] font-medium">{paragraph.theme}</span>
                </div>
                <span>12 Lines</span>
              </div>

              {/* Lines in Paragraph */}
              <div className="space-y-2">
                {paragraph.lines.map((line) => {
                  const hasActivePillar = activePillarFilter
                    ? line.pillars?.includes(activePillarFilter)
                    : false;

                  const isDimmed = activePillarFilter && !hasActivePillar;

                  return (
                    <div
                      key={line.number}
                      className={`flex items-start gap-3 py-1 px-2 rounded transition-all text-[15px] sm:text-[16px] leading-relaxed font-serif ${
                        hasActivePillar
                          ? 'bg-amber-100/70 border-l-4 border-amber-600 text-[#1c1917] pl-3 font-medium'
                          : isDimmed
                          ? 'opacity-35 text-[#78716c]'
                          : 'text-[#292524] hover:bg-[#f3ede1]/60'
                      }`}
                    >
                      {showLineNumbers && (
                        <span className="font-mono text-xs text-[#a8a29e] select-none pt-1 shrink-0 w-6 text-right">
                          {line.number.toString().padStart(2, '0')}
                        </span>
                      )}

                      <p className="flex-1">
                        {line.text}
                      </p>

                      {/* Micro Pillar Badges */}
                      {line.pillars && line.pillars.length > 0 && !isDimmed && (
                        <div className="hidden sm:flex items-center gap-1 shrink-0 pt-1">
                          {line.pillars.map((pid) => {
                            const pData = PILLARS.find(p => p.id === pid);
                            if (!pData) return null;
                            return (
                              <span
                                key={pid}
                                className="text-[10px] px-1.5 py-0.5 rounded font-mono font-medium border"
                                style={{
                                  backgroundColor: `${pData.color}15`,
                                  borderColor: `${pData.color}40`,
                                  color: pData.color
                                }}
                                title={`Pillar: ${pData.name}`}
                              >
                                {pData.name}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Article Summary Box */}
        <div className="mt-12 p-6 rounded-lg bg-[#f4ece1] border border-[#e2d6c3] text-[#44403c]">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-bold text-base text-[#1c1917] mb-1">
                Core Editorial Takeaway for Emerging Leaders &amp; Students
              </h3>
              <p className="text-sm text-[#57534e] font-sans leading-relaxed">
                Time management is rarely about squeezing more busywork into twenty-four hours. It is an intentional moral architecture that shifts you from reactive defensiveness into proactive leadership. By systematically conquering procrastination, keeping appointments with yourself, and disconnecting at night, your external punctuality blooms into authentic internal peace and self-assurance.
              </p>
            </div>
          </div>
        </div>

        {/* Copy Line-Numbered Format Option */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleCopyLines}
            className="text-xs font-mono text-[#57534e] hover:text-[#1c1917] flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy with Line Numbers (Lines 01–48)</span>
          </button>
        </div>
      </article>
    </div>
  );
};
