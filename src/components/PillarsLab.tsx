import React, { useState } from 'react';
import { PILLARS, PillarInfo } from '../blogData';
import { CheckSquare, Clock, ShieldCheck, Award, Target, BatteryCharging, TrendingUp, Check, Plus, Trash2 } from 'lucide-react';

export const PillarsLab: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('discipline');

  // Interactive micro-states for each pillar
  const [habits, setHabits] = useState([
    { id: 1, text: 'Review lecture/meeting notes 15 mins before start', done: true, pillar: 'discipline' },
    { id: 2, text: 'Mute notifications during morning deep work block', done: true, pillar: 'productivity' },
    { id: 3, text: 'Submit assignment / weekly report 24h ahead of deadline', done: false, pillar: 'stress-management' },
    { id: 4, text: 'Deliver prepared remark in team check-in without rushing', done: false, pillar: 'confidence' },
    { id: 5, text: 'Dedicate 30 mins to learning a high-value skill tonight', done: true, pillar: 'goal-achievement' },
    { id: 6, text: 'Hard shutdown at 6:00 PM without opening work inbox', done: false, pillar: 'work-life-balance' },
    { id: 7, text: '5-minute evening debrief: write tomorrow’s top 3 priorities', done: false, pillar: 'personal-growth' }
  ]);

  const [newHabitText, setNewHabitText] = useState('');

  const activePillar = PILLARS.find(p => p.id === selectedPillarId) || PILLARS[0];

  const toggleHabit = (id: number) => {
    setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done } : h));
  };

  const handleAddHabit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabitText.trim()) return;
    setHabits([
      ...habits,
      {
        id: Date.now(),
        text: newHabitText.trim(),
        done: false,
        pillar: selectedPillarId
      }
    ]);
    setNewHabitText('');
  };

  const deleteHabit = (id: number) => {
    setHabits(habits.filter(h => h.id !== id));
  };

  const completedCount = habits.filter(h => h.done).length;
  const progressPercent = Math.round((completedCount / habits.length) * 100);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      {/* Intro Banner */}
      <div className="mb-8 p-6 bg-[#f7f2ea] border border-[#e5dcce] rounded-xl">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-800 font-semibold mb-2">
          <Target className="w-4 h-4 text-indigo-700" />
          <span>Interactive Student &amp; Professional Toolkit</span>
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#1c1917] mb-2">
          The 7-Pillars Action Lab
        </h2>
        <p className="text-sm text-[#57534e] leading-relaxed">
          The blog post argues that time management is character in motion. Practice the 7 fundamental habits mentioned in the essay to transform theoretical time management into daily personal discipline.
        </p>

        {/* Overall Progress Meter */}
        <div className="mt-5 pt-4 border-t border-[#e8dfd1]">
          <div className="flex items-center justify-between text-xs font-mono text-[#57534e] mb-1.5">
            <span>Character Habit Execution</span>
            <span className="font-bold text-[#1c1917]">{completedCount} of {habits.length} Completed ({progressPercent}%)</span>
          </div>
          <div className="w-full h-2 bg-[#ebdccb] rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-700 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Pillar Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {PILLARS.map((p) => {
          const isSelected = p.id === selectedPillarId;
          const pillarHabits = habits.filter(h => h.pillar === p.id);
          const pillarCompleted = pillarHabits.filter(h => h.done).length;

          return (
            <button
              key={p.id}
              onClick={() => setSelectedPillarId(p.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer border ${
                isSelected
                  ? 'bg-[#1c1917] text-white border-[#1c1917] shadow-xs'
                  : 'bg-white text-[#44403c] border-[#dfd7c9] hover:bg-[#ede5d8]'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: p.color }}
              />
              <span>{p.name}</span>
              {pillarHabits.length > 0 && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                }`}>
                  {pillarCompleted}/{pillarHabits.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Pillar Card */}
      <div className="bg-[#fffdfa] border border-[#e4ded3] rounded-xl p-6 shadow-xs mb-8">
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#ece6d9] mb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-1">
              Core Personality Dimension · Featured in Paragraph {activePillar.paragraph}
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1c1917]">
              {activePillar.name}
            </h3>
            <p className="text-sm text-[#57534e] mt-1 font-sans">
              {activePillar.description}
            </p>
          </div>
          <span
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0 font-serif"
            style={{ backgroundColor: activePillar.color }}
          >
            P{activePillar.paragraph}
          </span>
        </div>

        {/* Practical Takeaway Tip */}
        <div className="p-4 bg-[#f8f5ed] border border-[#ebdccb] rounded-lg mb-6">
          <div className="text-xs font-mono font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>Essay Action Protocol:</span>
          </div>
          <p className="text-xs sm:text-sm text-[#44403c] font-medium font-sans">
            {activePillar.practicalTip}
          </p>
        </div>

        {/* Habit Checklist for this pillar */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-3">
            Active Commitments for {activePillar.name}:
          </h4>
          <div className="space-y-2 mb-4">
            {habits
              .filter(h => h.pillar === activePillar.id)
              .map((habit) => (
                <div
                  key={habit.id}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all text-xs sm:text-sm ${
                    habit.done
                      ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                      : 'bg-[#faf8f5] border-[#e7e1d5] text-[#292524] hover:bg-[#f4efe5]'
                  }`}
                >
                  <label className="flex items-center gap-3 cursor-pointer flex-1 select-none">
                    <input
                      type="checkbox"
                      checked={habit.done}
                      onChange={() => toggleHabit(habit.id)}
                      className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-500 cursor-pointer"
                    />
                    <span className={habit.done ? 'line-through text-stone-500' : 'font-medium'}>
                      {habit.text}
                    </span>
                  </label>
                  <button
                    onClick={() => deleteHabit(habit.id)}
                    className="text-stone-400 hover:text-rose-600 p-1 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
          </div>

          {/* Add Custom Commitment Form */}
          <form onSubmit={handleAddHabit} className="flex gap-2">
            <input
              type="text"
              value={newHabitText}
              onChange={(e) => setNewHabitText(e.target.value)}
              placeholder={`Add a daily personal commitment for ${activePillar.name}...`}
              className="flex-1 px-3 py-2 text-xs sm:text-sm rounded border border-[#d8d0c3] bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/30"
            />
            <button
              type="submit"
              className="px-3.5 py-2 bg-[#1c1917] text-white text-xs font-medium rounded hover:bg-[#292524] flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
