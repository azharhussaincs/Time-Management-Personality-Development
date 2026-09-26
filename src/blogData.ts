export interface PillarInfo {
  id: string;
  name: string;
  paragraph: number;
  color: string;
  borderColor: string;
  textColor: string;
  bgLight: string;
  description: string;
  practicalTip: string;
}

export const PILLARS: PillarInfo[] = [
  {
    id: 'discipline',
    name: 'Discipline',
    paragraph: 1,
    color: '#0284c7', // Sky
    borderColor: 'border-sky-500',
    textColor: 'text-sky-700 dark:text-sky-400',
    bgLight: 'bg-sky-50 dark:bg-sky-950/40',
    description: 'Translates volatile motivation into non-negotiable daily execution.',
    practicalTip: 'Follow the 2-Minute Rule to initiate tasks before friction builds.'
  },
  {
    id: 'productivity',
    name: 'Productivity',
    paragraph: 1,
    color: '#0d9488', // Teal
    borderColor: 'border-teal-500',
    textColor: 'text-teal-700 dark:text-teal-400',
    bgLight: 'bg-teal-50 dark:bg-teal-950/40',
    description: 'Eliminates frantic multitasking in favor of deep, high-leverage output.',
    practicalTip: 'Block 90-minute distraction-free deep work sprints each morning.'
  },
  {
    id: 'stress-management',
    name: 'Stress Management',
    paragraph: 2,
    color: '#7c3aed', // Violet
    borderColor: 'border-violet-500',
    textColor: 'text-violet-700 dark:text-violet-400',
    bgLight: 'bg-violet-50 dark:bg-violet-950/40',
    description: 'Replaces eleventh-hour panic with proactive scheduling and calm composure.',
    practicalTip: 'Build a 24-hour buffer before any deadline to avoid midnight emergencies.'
  },
  {
    id: 'confidence',
    name: 'Confidence',
    paragraph: 2,
    color: '#d97706', // Amber
    borderColor: 'border-amber-500',
    textColor: 'text-amber-700 dark:text-amber-400',
    bgLight: 'bg-amber-50 dark:bg-amber-950/40',
    description: 'Built on the private evidence of keeping promises to yourself.',
    practicalTip: 'Track daily completed commitments to reinforce genuine self-trust.'
  },
  {
    id: 'goal-achievement',
    name: 'Goal Achievement',
    paragraph: 3,
    color: '#2563eb', // Blue
    borderColor: 'border-blue-500',
    textColor: 'text-blue-700 dark:text-blue-400',
    bgLight: 'bg-blue-50 dark:bg-blue-950/40',
    description: 'Translates abstract aspirations into scheduled, bite-sized milestones.',
    practicalTip: 'Deconstruct semester or quarterly targets into 3 daily priority actions.'
  },
  {
    id: 'work-life-balance',
    name: 'Work-Life Balance',
    paragraph: 3,
    color: '#16a34a', // Emerald
    borderColor: 'border-emerald-500',
    textColor: 'text-emerald-700 dark:text-emerald-400',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/40',
    description: 'Guards mental recovery and relationships through strict shutdown rituals.',
    practicalTip: 'Establish a hard evening cutoff time to disconnect and recharge completely.'
  },
  {
    id: 'personal-growth',
    name: 'Personal Growth',
    paragraph: 4,
    color: '#e11d48', // Rose
    borderColor: 'border-rose-500',
    textColor: 'text-rose-700 dark:text-rose-400',
    bgLight: 'bg-rose-50 dark:bg-rose-950/40',
    description: 'The cumulative compounding of reliable habits into mature character.',
    practicalTip: 'Conduct a 5-minute evening debrief: what worked, what slipped, and why.'
  }
];

export interface BlogPostData {
  title: string;
  subtitle: string;
  versionLabel: string;
  paragraphs: {
    id: number;
    title: string;
    theme: string;
    lines: {
      number: number;
      text: string;
      pillars?: string[];
      notes?: string;
    }[];
  }[];
}

export const VERSION_1: BlogPostData = {
  title: "Mastering Your Hours: Why Time Management Shapes Who You Become",
  subtitle: "Initial Draft — Exploring the link between scheduled habits and student/professional character.",
  versionLabel: "Version 1 (Initial Draft)",
  paragraphs: [
    {
      id: 1,
      title: "Paragraph 1: Laying the Groundwork of Discipline and Productivity",
      theme: "Discipline & Productivity",
      lines: [
        { number: 1, text: "Many people view time management as a simple calendar habit.", pillars: [] },
        { number: 2, text: "In reality, it is the foundation of personal discipline.", pillars: ["discipline"] },
        { number: 3, text: "Every time you choose your schedule, you train your mind.", pillars: ["discipline"] },
        { number: 4, text: "A student who wakes early to review notes builds self-control.", pillars: ["discipline"] },
        { number: 5, text: "A young analyst who ignores phone notifications protects focus.", pillars: ["discipline", "productivity"] },
        { number: 6, text: "This daily consistency eliminates chaotic distractions.", pillars: ["productivity"] },
        { number: 7, text: "As a result, your overall productivity multiplies naturally.", pillars: ["productivity"] },
        { number: 8, text: "You finish assignments faster without rushed mistakes.", pillars: ["productivity"] },
        { number: 9, text: "Punctuality and diligence slowly become your natural traits.", pillars: ["discipline"] },
        { number: 10, text: "You become someone who keeps promises made to yourself.", pillars: ["discipline"] },
        { number: 11, text: "True character begins with how you spend your morning hours.", pillars: ["discipline"] },
        { number: 12, text: "When you master your clock, you master your impulses.", pillars: ["discipline"] }
      ]
    },
    {
      id: 2,
      title: "Paragraph 2: Inner Stability, Stress Control, and Natural Confidence",
      theme: "Stress Management & Confidence",
      lines: [
        { number: 13, text: "Effective time control transforms your inner mental state.", pillars: ["stress-management"] },
        { number: 14, text: "Chronic lateness feeds persistent anxiety and self-doubt.", pillars: ["stress-management", "confidence"] },
        { number: 15, text: "Rushing to finish projects at midnight damages mental peace.", pillars: ["stress-management"] },
        { number: 16, text: "Proactive scheduling replaces crisis mode with calm composure.", pillars: ["stress-management"] },
        { number: 17, text: "For example, preparing an exam review a week early removes panic.", pillars: ["stress-management"] },
        { number: 18, text: "Meeting deadlines ahead of time builds steady confidence.", pillars: ["confidence"] },
        { number: 19, text: "You speak up in team meetings because you are fully prepared.", pillars: ["confidence"] },
        { number: 20, text: "Better stress management makes you patient with other people.", pillars: ["stress-management"] },
        { number: 21, text: "You stop feeling overwhelmed by everyday academic and office tasks.", pillars: ["stress-management"] },
        { number: 22, text: "A calm, collected demeanor earns respect from peers and managers.", pillars: ["confidence"] },
        { number: 23, text: "Emotional stability is one of the greatest marks of maturity.", pillars: ["confidence"] },
        { number: 24, text: "Inner composure reflects a well-organized daily routine.", pillars: ["stress-management"] }
      ]
    },
    {
      id: 3,
      title: "Paragraph 3: Practical Goal Achievement and Balanced Living",
      theme: "Goal Achievement & Work-Life Balance",
      lines: [
        { number: 25, text: "Clear time allocation drives concrete goal achievement.", pillars: ["goal-achievement"] },
        { number: 26, text: "Big dreams fail when they remain vague wishes without deadlines.", pillars: ["goal-achievement"] },
        { number: 27, text: "Breaking ambitious targets into daily time blocks creates momentum.", pillars: ["goal-achievement"] },
        { number: 28, text: "For instance, dedicating thirty minutes every evening teaches a new skill.", pillars: ["goal-achievement"] },
        { number: 29, text: "In three months, that small window produces measurable results.", pillars: ["goal-achievement"] },
        { number: 30, text: "Structured schedules also protect healthy work-life balance.", pillars: ["work-life-balance"] },
        { number: 31, text: "You learn to close your books or shut down work at six.", pillars: ["work-life-balance"] },
        { number: 32, text: "Guilt-free evenings allow true physical and mental recovery.", pillars: ["work-life-balance"] },
        { number: 33, text: "You have time for family dinners, friends, and regular exercise.", pillars: ["work-life-balance"] },
        { number: 34, text: "You avoid the common burnout that traps many young professionals.", pillars: ["work-life-balance"] },
        { number: 35, text: "Balance proves that success does not require constant suffering.", pillars: ["work-life-balance"] },
        { number: 36, text: "A well-rounded life enriches your social identity and vitality.", pillars: ["work-life-balance"] }
      ]
    },
    {
      id: 4,
      title: "Paragraph 4: Culmination in Lifelong Character and Personal Growth",
      theme: "Personal Growth & Strong Call to Action",
      lines: [
        { number: 37, text: "Ultimately, time management is the driving engine of personal growth.", pillars: ["personal-growth"] },
        { number: 38, text: "It transforms a disorganized person into a dependable leader.", pillars: ["personal-growth"] },
        { number: 39, text: "The habits you practice today determine the reputation you carry tomorrow.", pillars: ["personal-growth"] },
        { number: 40, text: "When you respect your own minutes, other people respect your word.", pillars: ["personal-growth"] },
        { number: 41, text: "You cultivate resilience by honoring your daily commitments.", pillars: ["personal-growth"] },
        { number: 42, text: "Every organized day adds another layer of self-respect.", pillars: ["personal-growth"] },
        { number: 43, text: "Do not wait for ideal circumstances to organize your calendar.", pillars: ["personal-growth"] },
        { number: 44, text: "Start with a clear plan for your morning tomorrow.", pillars: ["personal-growth"] },
        { number: 45, text: "Take control of your daily hours with quiet determination.", pillars: ["personal-growth"] },
        { number: 46, text: "Shape your habits before poor habits shape your future.", pillars: ["personal-growth"] },
        { number: 47, text: "Time is not just a resource you measure on a watch.", pillars: ["personal-growth"] },
        { number: 48, text: "Time is the canvas on which your personality is forged.", pillars: ["personal-growth"] }
      ]
    }
  ]
};

export interface ReviewAuditItem {
  category: string;
  status: 'Needs Polish' | 'Improved' | 'Refined';
  critique: string;
  remedy: string;
  changeHighlights: string[];
}

export const EDITORIAL_REVIEW: ReviewAuditItem[] = [
  {
    category: "Clarity",
    status: "Improved",
    critique: "While the initial ideas were clear, several sentences in Version 1 sounded slightly theoretical ('time control transforms your inner mental state') rather than visceral and concrete for a 20-something reader.",
    remedy: "Ground abstract statements in immediate, sensory daily experiences—such as the quiet confidence of waking up ahead of an alarm or walking into a presentation without frantic hurriedness.",
    changeHighlights: [
      "Replaced 'time control transforms your inner mental state' with an active contrast between reactive chaos and deliberate intention.",
      "Sharpened the voice so each sentence delivers one crisp, punchy insight without trailing clauses."
    ]
  },
  {
    category: "Grammar & Rhythm",
    status: "Refined",
    critique: "Grammar was technically sound in V1, but the sentence structures were somewhat repetitive (frequent 'Subject + verb + object' cadences with multiple consecutive 'You' clauses: 'You finish...', 'You become...', 'You speak...', 'You have...').",
    remedy: "Vary syntactic cadence with balanced compound phrasing, participial openers, and parallel structure to create an engaging editorial rhythm suited for spoken reading or deep study.",
    changeHighlights: [
      "Broke up back-to-back 'You + verb' sentences to prevent reader fatigue.",
      "Enhanced active verbs (e.g. 'forges', 'anchors', 'dismantles', 'compounds') to make the prose energetic and compelling."
    ]
  },
  {
    category: "Repetition",
    status: "Refined",
    critique: "The words 'time', 'habits', 'hours', and 'organize' appeared too frequently in close proximity across paragraphs 1 and 4.",
    remedy: "Introduced precise contextual synonyms and conceptual anchors: 'deliberate intention', 'cadence', 'daily architecture', 'commitments', and 'reputation'.",
    changeHighlights: [
      "Trimmed redundant mentions of 'time' across consecutive lines.",
      "Diversified terminology: replaced generic 'organizing your calendar' with 'designing your daily rhythm'."
    ]
  },
  {
    category: "Organization & Transitions",
    status: "Improved",
    critique: "Paragraph 2 jumped directly from morning study habits into midnight stress without an explicit connective bridge explaining why internal control shapes outward demeanor.",
    remedy: "Constructed seamless thematic bridges: Paragraph 1 establishes foundational self-mastery -> Paragraph 2 examines the emotional shift from anxiety to composure -> Paragraph 3 shows external tangible execution -> Paragraph 4 unites all dimensions into character destiny.",
    changeHighlights: [
      "Integrated seamless connective tissue between personal self-discipline and workplace interpersonal confidence.",
      "Ensured logical sequence: Individual Habits -> Psychological Stability -> External Execution & Rest -> Long-term Identity."
    ]
  },
  {
    category: "Relevance & Practical Impact",
    status: "Refined",
    critique: "Target audience (students and emerging professionals) needs relatable, high-stakes scenarios: handling team check-ins, semester exam prep, avoiding 2 AM burnout, and protecting personal dignity.",
    remedy: "Infused distinct, highly relatable touchpoints: silencing app notifications during lecture, entering a client presentation unhurried, and closing work laptops without evening guilt.",
    changeHighlights: [
      "Strengthened the practical examples so students see their study sessions and young professionals see their career trajectories mirrored directly in the text.",
      "Elevated the concluding message into a powerful, memorable rallying cry for self-respect."
    ]
  }
];

export const VERSION_2: BlogPostData = {
  title: "The Architecture of Character: Why Time Management Defines Who You Become",
  subtitle: "Final Polished Edition — A definitive guide for students and young professionals on shaping discipline, composure, and personal growth through daily stewardship.",
  versionLabel: "Version 2 (Polished & Improved)",
  paragraphs: [
    {
      id: 1,
      title: "Paragraph 1: The Forge of Discipline and Focused Productivity",
      theme: "Discipline & Productivity",
      lines: [
        { number: 1, text: "Most people regard time management as nothing more than a mechanical calendar routine.", pillars: [] },
        { number: 2, text: "In truth, deliberate scheduling serves as the primary forge of personal discipline.", pillars: ["discipline"] },
        { number: 3, text: "Every morning you choose focused action over passive drift, you strengthen mental endurance.", pillars: ["discipline"] },
        { number: 4, text: "Consider the college student who reviews difficult lecture slides before campus wakes up.", pillars: ["discipline"] },
        { number: 5, text: "Picture the young developer who silences notifications to protect deep project focus.", pillars: ["discipline", "productivity"] },
        { number: 6, text: "These conscious decisions build an invisible shield against reactive distraction.", pillars: ["productivity"] },
        { number: 7, text: "Uninterrupted attention naturally multiplies daily productivity without frantic exertion.", pillars: ["productivity"] },
        { number: 8, text: "Complex tasks finish smoothly because energy is channeled rather than scattered.", pillars: ["productivity"] },
        { number: 9, text: "Reliability and promptness cease to be forced chores and become your second nature.", pillars: ["discipline"] },
        { number: 10, text: "By honoring small self-made appointments, you cultivate unshakeable self-trust.", pillars: ["discipline"] },
        { number: 11, text: "Real strength of character is never accidental; it begins with how you spend sunrise.", pillars: ["discipline"] },
        { number: 12, text: "When you govern your clock with intention, you conquer your weakest impulses.", pillars: ["discipline"] }
      ]
    },
    {
      id: 2,
      title: "Paragraph 2: From Procrastination Panic to Unshakable Confidence",
      theme: "Stress Management & Confidence",
      lines: [
        { number: 13, text: "Mastering your daily rhythm fundamentally rewires your emotional equilibrium.", pillars: ["stress-management"] },
        { number: 14, text: "Chronic procrastination is not a harmless delay; it poisons the mind with shame.", pillars: ["stress-management", "confidence"] },
        { number: 15, text: "Scrambling through midnight revisions guarantees exhaustion, errors, and self-doubt.", pillars: ["stress-management"] },
        { number: 16, text: "Thoughtful preparation swiftly replaces that perpetual emergency mode with poise.", pillars: ["stress-management"] },
        { number: 17, text: "Drafting an assignment four days early immediately dismantles paralyzing exam dread.", pillars: ["stress-management"] },
        { number: 18, text: "Delivering polished work ahead of schedule establishes an authentic foundation of confidence.", pillars: ["confidence"] },
        { number: 19, text: "You speak decisively in team meetings because your insights are thoroughly prepared.", pillars: ["confidence"] },
        { number: 20, text: "Relieved of constant anxiety, you interact with colleagues with warmth and patience.", pillars: ["stress-management"] },
        { number: 21, text: "Deadlines no longer feel like threatening predators, but like manageable milestones.", pillars: ["stress-management"] },
        { number: 22, text: "A steady, unflappable presence commands instinctive respect from peers and leaders.", pillars: ["confidence"] },
        { number: 23, text: "True psychological maturity is best revealed by remaining calm under heavy pressure.", pillars: ["confidence"] },
        { number: 24, text: "That quiet composure is always the visible dividend of an organized life.", pillars: ["stress-management"] }
      ]
    },
    {
      id: 3,
      title: "Paragraph 3: Systematic Goal Achievement and Guilt-Free Balance",
      theme: "Goal Achievement & Work-Life Balance",
      lines: [
        { number: 25, text: "Strategic time allocation transforms fragile ambitions into inevitable reality.", pillars: ["goal-achievement"] },
        { number: 26, text: "Vague dreams perish quickly unless they are tied to explicit calendar blocks.", pillars: ["goal-achievement"] },
        { number: 27, text: "Dissecting massive career milestones into bite-sized daily intervals generates unstoppable momentum.", pillars: ["goal-achievement"] },
        { number: 28, text: "For example, dedicating forty-five undisturbed minutes each night masters a foreign language.", pillars: ["goal-achievement"] },
        { number: 29, text: "Within a few short months, that quiet compound interest yields undeniable mastery.", pillars: ["goal-achievement"] },
        { number: 30, text: "Equally crucial, an intentional schedule establishes rigid guardrails for work-life balance.", pillars: ["work-life-balance"] },
        { number: 31, text: "You learn to shut your laptop at six o'clock with complete professional peace.", pillars: ["work-life-balance"] },
        { number: 32, text: "Evenings become restorative sanctuaries for physical wellness, friendships, and genuine reflection.", pillars: ["work-life-balance"] },
        { number: 33, text: "You participate fully in family dinners without checking inbox pings under the table.", pillars: ["work-life-balance"] },
        { number: 34, text: "This disciplined boundary completely immunizes you against the modern curse of burnout.", pillars: ["work-life-balance"] },
        { number: 35, text: "Lasting triumph does not require martyrdom; it thrives on sustainable, joyful rhythms.", pillars: ["work-life-balance"] },
        { number: 36, text: "A balanced life preserves the curiosity and enthusiasm that keep your spirit alive.", pillars: ["work-life-balance"] }
      ]
    },
    {
      id: 4,
      title: "Paragraph 4: The Pinnacle of Character and Lifelong Personal Growth",
      theme: "Personal Growth & Lasting Transformation",
      lines: [
        { number: 37, text: "At its deepest level, time stewardship is the ultimate catalyst for human growth.", pillars: ["personal-growth"] },
        { number: 38, text: "It steadily evolves an unfocused beginner into an authentic, dependable leader.", pillars: ["personal-growth"] },
        { number: 39, text: "The daily standard you enforce in private dictates the reputation you carry publicly.", pillars: ["personal-growth"] },
        { number: 40, text: "When you treat your own commitments as sacred, others instantly honor your word.", pillars: ["personal-growth"] },
        { number: 41, text: "Resilience is not a genetic gift, but a muscle conditioned by continuous follow-through.", pillars: ["personal-growth"] },
        { number: 42, text: "Every day executed with clarity adds an enduring brick to your self-respect.", pillars: ["personal-growth"] },
        { number: 43, text: "Do not wait for some imaginary season of leisure before ordering your world.", pillars: ["personal-growth"] },
        { number: 44, text: "Begin this evening by outlining your three non-negotiable priorities for tomorrow.", pillars: ["personal-growth"] },
        { number: 45, text: "Seize command of your fleeting hours with calm, unwavering resolve.", pillars: ["personal-growth"] },
        { number: 46, text: "Shape your habits with deliberate purpose before chaotic habits define your destiny.", pillars: ["personal-growth"] },
        { number: 47, text: "Your calendar is far more than a timeline of pending obligations.", pillars: ["personal-growth"] },
        { number: 48, text: "It is the sacred blueprint of the human being you are actively choosing to become.", pillars: ["personal-growth"] }
      ]
    }
  ]
};
