import { ASSESSMENT_ITEMS, ASSESSMENT_ITEM_ORDER } from './questions.js';

export const ASSESSMENT_SECTION_TEMPLATES = [
  {
    id: 'diagnostic',
    label: 'Part 1',
    title: 'Baseline Knowledge Check',
    description:
      'Initial multiple-choice questions on core AI concepts, privacy, and delegation.',
    introParagraphs: [],
    itemIds: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'],
  },
  {
    id: 'critical',
    label: 'Part 2',
    title: 'Identifying Unreliable AI Outputs',
    description:
      'Review the following AI-generated responses and assess their reliability. This section tests your ability to detect hallucinations, overconfidence, and unverifiable claims.',
    introParagraphs: [
      'Large language models generate responses that are statistically plausible, not necessarily factually correct. They do not look up information; they predict the most likely continuation of text. Even specific, confident-sounding figures can be entirely fabricated.',
      'A professionally AI-literate person treats all AI outputs as drafts requiring verification, not authoritative sources.',
    ],
    itemIds: ['d1', 'q7'],
  },
  {
    id: 'privacy',
    label: 'Part 3',
    title: 'Safe Data Practices with AI Tools',
    description:
      'This section examines your ability to identify sensitive data and apply appropriate handling practices before engaging an AI system.',
    introParagraphs: [
      'Under GDPR, organisations bear responsibility for all personal data processing, including via third-party AI tools. Pasting personal data into an AI system without lawful basis and a data processing agreement may constitute a reportable data breach.',
      'Personal data includes names, email addresses, salaries, performance ratings, dates of birth, and any information that can identify a living individual, directly or indirectly.',
    ],
    itemIds: ['d2', 'q8'],
  },
  {
    id: 'simulation',
    label: 'Part 4',
    title: 'Real-World Decision Making',
    description:
      'Apply everything from the previous sections to navigate a realistic business scenario. Each decision is scored.',
    introParagraphs: [],
    callout: {
      variant: 'warn',
      icon: '⚠',
      title: 'Applied Scenario',
      body:
        'This section simulates a real workplace situation under time pressure. Select the best course of action at each decision point.',
    },
    itemIds: ['sim1', 'sim2', 'q9'],
  },
];

function cloneAssessmentSet(prefix) {
  return ASSESSMENT_ITEM_ORDER.map((itemId) => {
    const template = JSON.parse(JSON.stringify(ASSESSMENT_ITEMS[itemId]));
    const cloneId = `${prefix}-${itemId}`;
    template.id = cloneId;
    ASSESSMENT_ITEMS[cloneId] = template;
    return cloneId;
  });
}

export const PRE_ASSESSMENT_ITEM_IDS = cloneAssessmentSet('pre');
export const POST_ASSESSMENT_ITEM_IDS = cloneAssessmentSet('post');

function prefixAssessmentSections(prefix) {
  return ASSESSMENT_SECTION_TEMPLATES.map((section) => ({
    ...section,
    id: `${prefix}-${section.id}`,
    itemIds: section.itemIds.map((itemId) => `${prefix}-${itemId}`),
  }));
}

export const PRE_ASSESSMENT_SECTIONS = prefixAssessmentSections('pre');
export const POST_ASSESSMENT_SECTIONS = prefixAssessmentSections('post');

export const EXPERIENCE_FEEDBACK_QUESTIONS = [
  {
    id: 'clarity',
    prompt: 'The distinction between what goes into an LLM and what comes out of it felt clear to me.',
  },
  {
    id: 'relevance',
    prompt: 'The case studies and examples felt relevant to real workplace decisions.',
  },
  {
    id: 'confidence',
    prompt: 'After this experience, I feel more confident judging when LLM use is safe and appropriate.',
  },
  {
    id: 'platforms',
    prompt: 'The comparison of different LLM platforms helped me think more critically about tool choice.',
  },
  {
    id: 'supervision',
    prompt: 'The material made it clearer when human supervision should remain in the loop.',
  },
];
