/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ReaderView } from './components/ReaderView';
import { ComparisonView } from './components/ComparisonView';
import { AuditView } from './components/AuditView';
import { PillarsLab } from './components/PillarsLab';
import { VERSION_1, VERSION_2, PILLARS } from './blogData';
import { CheckCircle2, Bookmark, ArrowUpRight, BookOpen, Clock, Heart, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'v2' | 'compare' | 'v1' | 'audit' | 'lab'>('v2');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);

  // Audio Speech Synthesis
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported on this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const currentData = activeTab === 'v1' ? VERSION_1 : VERSION_2;
      const fullText = `${currentData.title}. ` + currentData.paragraphs
        .map(p => p.lines.map(l => l.text).join(' '))
        .join('. ');

      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleGlobalCopy = () => {
    const data = activeTab === 'v1' ? VERSION_1 : VERSION_2;
    let text = `# ${data.title}\n\n`;
    data.paragraphs.forEach(p => {
      text += p.lines.map(l => l.text).join(' ') + '\n\n';
    });
    navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1917] flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Header with Navigation and Audio Controls */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isPlayingAudio={isPlayingAudio}
        toggleAudio={toggleAudio}
        copied={copied}
        onCopy={handleGlobalCopy}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'v2' && <ReaderView data={VERSION_2} isVersion2={true} />}
        {activeTab === 'compare' && <ComparisonView />}
        {activeTab === 'audit' && <AuditView />}
        {activeTab === 'v1' && <ReaderView data={VERSION_1} isVersion2={false} />}
        {activeTab === 'lab' && <PillarsLab />}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e8e2d5] bg-[#f5efe6] py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif font-bold text-base text-[#1c1917]">
              Time Management &amp; Personality Development
            </div>
            <p className="text-xs text-[#78716c] mt-1 font-sans">
              Crafted for students, early-career researchers, and ambitious young professionals.
            </p>
          </div>

          {/* Verification Badge Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#57534e]">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded border border-[#ded5c7]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>4 Paragraphs</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded border border-[#ded5c7]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>48 Total Lines (~50)</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded border border-[#ded5c7]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>7 Core Growth Pillars</span>
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-[#ebe3d5] text-center text-[11px] font-mono text-[#8c827a]">
          Editorial Suite · Version 1 Draft &amp; Version 2 Polished Edition with Systematic Peer Review
        </div>
      </footer>
    </div>
  );
}
