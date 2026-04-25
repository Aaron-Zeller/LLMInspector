const makeQuestion = (config) => ({
  type: 'question',
  ...config,
});

const makeScenario = (config) => ({
  type: 'scenario',
  ...config,
});

export const DOMAIN_ORDER = [
  'criticalEvaluation',
  'dataPrivacy',
  'appropriateDelegation',
];

export const DOMAIN_DEFINITIONS = {
  criticalEvaluation: {
    id: 'criticalEvaluation',
    label: 'Critical Evaluation',
    overviewLabel: 'Domain 1',
    overviewIcon: '🔍',
    overviewDescription:
      'Recognising hallucinations, verifying outputs, and challenging overconfident AI responses.',
    accent: 'critical',
    resultStrong:
      'Strong ability to detect and challenge unreliable AI output before it becomes business input.',
    resultNeedsWork:
      'Further practice with independent verification would make this domain more dependable in live work.',
    recommendationGood:
      'You consistently treated AI output as material to review instead of material to trust.',
    recommendationFocus:
      'Check every statistic, citation, and calculation against a primary or independent source before reuse.',
  },
  dataPrivacy: {
    id: 'dataPrivacy',
    label: 'Data Privacy',
    overviewLabel: 'Domain 2',
    overviewIcon: '🔒',
    overviewDescription:
      'Identifying sensitive data, applying data minimisation, and understanding GDPR obligations.',
    accent: 'privacy',
    resultStrong:
      'Good judgement around sensitive data, minimisation, and the difference between approved and public tools.',
    resultNeedsWork:
      'This area would benefit from more disciplined handling of personal data before AI tools are involved.',
    recommendationGood:
      'You applied privacy-preserving instincts even when time pressure was part of the scenario.',
    recommendationFocus:
      'Reduce data before prompting, verify contractual safeguards, and avoid assuming tooling will anonymise for you.',
  },
  appropriateDelegation: {
    id: 'appropriateDelegation',
    label: 'Appropriate Delegation',
    overviewLabel: 'Domain 3',
    overviewIcon: '⚖️',
    overviewDescription:
      'Knowing when AI can support work and when expert human judgement has to stay in the loop.',
    accent: 'delegation',
    resultStrong:
      'Clear judgement about where accountability stays human, especially in consequential decisions.',
    resultNeedsWork:
      'More practice is needed in separating useful AI support from decisions that require human ownership.',
    recommendationGood:
      'You kept AI in a supporting role where professional accountability remained with the team.',
    recommendationFocus:
      'Map high-consequence decisions in your role and treat AI as support, not final authority, in those moments.',
  },
};

export const OVERVIEW_STATS = [
  { label: 'Estimated time', value: '25 min' },
  { label: 'Core lenses', value: '3' },
  { label: 'Major sections', value: '12' },
];

export const OVERVIEW_DOMAINS = [
  {
    id: 'input-governance',
    overviewLabel: 'Lens 1',
    overviewIcon: '🛡️',
    accent: 'critical',
    label: 'Input Governance',
    overviewDescription:
      'What employees upload, paste, or connect to an LLM, and how that data can leak or create legal exposure.',
  },
  {
    id: 'output-assurance',
    overviewLabel: 'Lens 2',
    overviewIcon: '⚠️',
    accent: 'delegation',
    label: 'Output Assurance',
    overviewDescription:
      'How teams verify AI outputs, bound consequences, and decide who remains responsible when the model is wrong.',
  },
  {
    id: 'platform-choice',
    overviewLabel: 'Lens 3',
    overviewIcon: '🧭',
    accent: 'privacy',
    label: 'Platform Choice',
    overviewDescription:
      'How ChatGPT, Claude, Gemini, and local or internal deployments should be compared before a team trusts them with work.',
  },
];

export const ASSESSMENT_ITEMS = {
  q1: makeQuestion({
    id: 'q1',
    prompt:
      'A colleague uses an AI assistant to draft a market analysis report with specific statistics and citations. What should they do before presenting it?',
    meta: 'Question 1 of 6',
    badge: 'Awareness',
    badgeTone: 'neutral',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'verify',
    feedback: {
      correct:
        'AI tools can fabricate citations and statistics. Verification against primary sources is still required before professional use.',
      incorrect:
        'Plausible numbers and polished citations do not make an output trustworthy. The safe step is to verify against the original sources.',
    },
    options: [
      { id: 'present', label: 'Present it directly. AI tools are trained on reliable data sources.' },
      {
        id: 'verify',
        label: 'Verify all statistics and citations against original sources before presenting.',
      },
      { id: 'disclaimer', label: 'Add a disclaimer that AI was used, then present without further checks.' },
      { id: 'double-check', label: 'Ask the AI to double-check its own output for accuracy.' },
    ],
  }),
  q2: makeQuestion({
    id: 'q2',
    prompt: 'Which of the following best describes an AI hallucination?',
    meta: 'Question 2 of 6',
    badge: 'Awareness',
    badgeTone: 'neutral',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'fabricated',
    feedback: {
      correct:
        'That is the core risk: plausible-sounding output that is false, fabricated, or unsupported.',
      incorrect:
        'A hallucination is not a crash or a refusal. It is confident output that sounds usable but is not grounded in fact.',
    },
    options: [
      { id: 'crash', label: 'When an AI system crashes or becomes unresponsive.' },
      { id: 'creative', label: 'When an AI gives a creative but unexpected answer.' },
      {
        id: 'fabricated',
        label:
          'When an AI generates plausible-sounding but factually incorrect or fabricated information.',
      },
      { id: 'refusal', label: 'When an AI refuses to answer a question for safety reasons.' },
    ],
  }),
  q3: makeQuestion({
    id: 'q3',
    prompt:
      'Under GDPR, what is the primary risk of pasting a spreadsheet containing employee names, salaries, and dates of birth into a public AI chatbot?',
    meta: 'Question 3 of 6',
    badge: 'Privacy',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 9,
    correctOptionId: 'violation',
    feedback: {
      correct:
        'The organisation remains responsible for lawful processing. Public chat tools rarely come with the safeguards needed for this kind of data.',
      incorrect:
        'The legal and operational risk sits with the organisation using the tool. Sensitive employee data cannot be treated casually because an AI system is convenient.',
    },
    options: [
      { id: 'no-risk', label: 'No risk. AI chatbots are bound by data protection law in the same way as internal systems.' },
      {
        id: 'violation',
        label:
          'The personal data may be stored, processed, or used for model training without lawful basis, creating a potential GDPR violation.',
      },
      { id: 'only-names', label: 'Minimal risk. Only names are protected under GDPR, not salary data.' },
      { id: 'provider', label: 'Risk exists, but it is the AI provider’s responsibility, not the user’s.' },
    ],
  }),
  q4: makeQuestion({
    id: 'q4',
    prompt:
      'An AI assistant states, “Our competitor’s Q3 revenue was €4.2 billion, a 12% decline.” No source is cited. How should you treat this?',
    meta: 'Question 4 of 6',
    badge: 'Critical Thinking',
    badgeTone: 'critical',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'verify-disclosures',
    feedback: {
      correct:
        'Without a source, it remains unverified. Financial claims should be checked against official disclosures before they move into decision-making.',
      incorrect:
        'Specific figures are exactly where AI output can look confident while being wrong. Plausibility is not enough.',
    },
    options: [
      { id: 'accept', label: 'Accept it. AI tools have access to current financial data.' },
      { id: 'plausible', label: 'Accept it if the figure seems plausible given your industry knowledge.' },
      {
        id: 'verify-disclosures',
        label: 'Treat it as unverified and confirm against official financial disclosures before using it.',
      },
      { id: 'ask-source', label: 'Ask the AI for a source. If it provides one, the information is reliable.' },
    ],
  }),
  q5: makeQuestion({
    id: 'q5',
    prompt:
      'Which of the following tasks is least appropriate to delegate entirely to an AI assistant without human review?',
    meta: 'Question 5 of 6',
    badge: 'Delegation',
    badgeTone: 'delegation',
    domainKey: 'appropriateDelegation',
    points: 7,
    correctOptionId: 'performance-review',
    feedback: {
      correct:
        'Performance review outcomes carry significant consequences and accountability. That type of decision should not be delegated away.',
      incorrect:
        'High-consequence people decisions require meaningful human judgement. AI can assist, but it should not own the call.',
    },
    options: [
      { id: 'agenda', label: 'Drafting a first version of an internal meeting agenda.' },
      { id: 'summary', label: 'Summarising a lengthy internal policy document.' },
      { id: 'performance-review', label: 'Making a final decision on a candidate’s performance review outcome.' },
      { id: 'discovery', label: 'Generating a list of questions for a client discovery call.' },
    ],
  }),
  q6: makeQuestion({
    id: 'q6',
    prompt:
      'Your organisation uses an enterprise AI tool with a data processing agreement. A colleague wants to use a free public AI tool for the same task because it is faster. What is the key concern?',
    meta: 'Question 6 of 6',
    badge: 'Privacy',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 8,
    correctOptionId: 'contractual-risk',
    feedback: {
      correct:
        'The agreement and infrastructure matter. Switching to a public tool can remove the safeguards the organisation relies on.',
      incorrect:
        'The concern is not simply accuracy or speed. It is whether the chosen tool is approved to process the organisation’s data at all.',
    },
    options: [
      { id: 'accuracy', label: 'Free tools are always less accurate than enterprise tools.' },
      {
        id: 'contractual-risk',
        label:
          'The free public tool likely lacks the contractual data protection safeguards provided by the enterprise agreement, creating compliance and security risk.',
      },
      { id: 'no-concern', label: 'There is no concern if the task does not involve customer data.' },
      { id: 'speed', label: 'Speed should take priority over compliance for non-critical tasks.' },
    ],
  }),
  q7: makeQuestion({
    id: 'q7',
    prompt:
      'An AI calculates the mean of a dataset and presents a result. Which is the most rigorous verification approach?',
    meta: 'Exercise 2.2',
    badge: 'Critical Thinking',
    badgeTone: 'critical',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'independent-check',
    feedback: {
      correct:
        'Independent verification is the reliable check. Re-asking the same AI is still asking the same source.',
      incorrect:
        'A second AI answer or a “seems reasonable” check is weaker than verifying the arithmetic independently.',
    },
    options: [
      { id: 'ask-again', label: 'Ask the AI to recalculate and compare the two answers.' },
      {
        id: 'independent-check',
        label: 'Independently verify using a spreadsheet formula or calculator applied to the raw data.',
      },
      { id: 'accept', label: 'Accept the result. AI arithmetic is generally reliable.' },
      { id: 'colleague', label: 'Ask a colleague whether the figure seems reasonable.' },
    ],
  }),
  q8: makeQuestion({
    id: 'q8',
    prompt:
      'Which represents the most privacy-preserving approach when using AI to analyse client feedback?',
    meta: 'Exercise 3.2',
    badge: 'Privacy',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 9,
    correctOptionId: 'pseudonymise',
    feedback: {
      correct:
        'Removing or pseudonymising identifying information keeps the analysis focused while shrinking the privacy exposure.',
      incorrect:
        'The safest default is to strip or replace identifiers before the data reaches the AI system at all.',
    },
    options: [
      { id: 'raw-feedback', label: 'Share raw feedback with client names. The AI needs context to give useful analysis.' },
      {
        id: 'pseudonymise',
        label: 'Remove or pseudonymise identifying information from the feedback before sharing it with the AI tool.',
      },
      { id: 'consent-only', label: 'Share only feedback from clients who have given explicit consent for AI processing.' },
      { id: 'tool-anonymises', label: 'Rely on the AI tool’s built-in anonymisation feature, which strips names before processing.' },
    ],
  }),
  q9: makeQuestion({
    id: 'q9',
    prompt:
      'The board report requires a section on recommended strategic direction for Luxe AG. Should you use AI to generate this recommendation?',
    meta: 'Decision Point 3',
    badge: 'Delegation',
    badgeTone: 'delegation',
    domainKey: 'appropriateDelegation',
    points: 7,
    correctOptionId: 'partial-support',
    feedback: {
      correct:
        'AI can support the analysis, but the final recommendation still belongs to the accountable human decision-maker.',
      incorrect:
        'Board-level strategic direction is not the kind of judgement call that should be handed over unchanged to a model.',
    },
    options: [
      { id: 'fully-generate', label: 'Yes. AI can synthesise industry trends and generate sound strategic recommendations without further review.' },
      { id: 'unmodified', label: 'Yes. Draft the AI recommendation and present it unmodified to save time.' },
      {
        id: 'partial-support',
        label:
          'Partially. AI can support analysis and structure supporting evidence, but the final recommendation must reflect expert human judgement and professional accountability.',
      },
      { id: 'never', label: 'No. AI should never be used in any part of a board-level document.' },
    ],
  }),
  d1: makeScenario({
    id: 'd1',
    scenarioTitle: 'Exercise 2.1 — Spot the Hallucination',
    scenarioSubtitle: 'Review this AI-generated research summary and assess it critically.',
    icon: '🔍',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'risk',
    feedback: {
      correct:
        'The right reaction is caution. Specific names, dates, percentages, and programme amounts all need source confirmation before use.',
      incorrect:
        'Specificity is not evidence. The safe reading is that every named claim remains unverified until checked against the source.',
    },
    blocks: [
      {
        type: 'transcript',
        title: 'AI assistant',
        messages: [
          {
            role: 'user',
            speaker: 'You',
            label: 'User',
            content:
              'What did the European Commission’s report on AI adoption in SMEs find in March 2024?',
          },
          {
            role: 'assistant',
            speaker: 'AI',
            label: 'AI Assistant',
            content:
              'The European Commission’s March 2024 SME AI Adoption Report found that 67% of European SMEs had integrated at least one AI tool into their operations, up from 41% in 2022. The report, authored by Commissioner Helena Varga, recommended a €2.1 billion investment programme to support AI upskilling across the bloc.',
          },
        ],
      },
    ],
    decisionLabel: 'What is the most accurate assessment of this AI response?',
    options: [
      { id: 'reliable', title: 'Reliable', description: 'Statistics and citations are specific and plausible, so the answer is usable directly.' },
      { id: 'partial', title: 'Partially reliable', description: 'The statistics seem accurate, but the commissioner’s name should be verified.' },
      {
        id: 'risk',
        title: 'Hallucination risk',
        description:
          'No such report has been verified. Every specific claim requires confirmation from the original source before professional use.',
      },
      { id: 'formatting', title: 'Formatting issue only', description: 'The content is likely correct, but the AI should have cited a URL.' },
    ],
  }),
  d2: makeScenario({
    id: 'd2',
    scenarioTitle: 'Exercise 3.1 — The Payroll Summary',
    scenarioSubtitle:
      'Your manager needs a Q3 payroll expenditure summary by department. You have the file below and access to an AI assistant.',
    icon: '📊',
    domainKey: 'dataPrivacy',
    points: 9,
    correctOptionId: 'aggregated-data',
    feedback: {
      correct:
        'That keeps the useful analysis while reducing the privacy exposure. Data minimisation is the right move here.',
      incorrect:
        'The task is to share less, not merely to share faster. Sensitive rows should not be copied into a prompt when aggregates will do.',
    },
    blocks: [
      {
        type: 'note',
        emphasis: 'Your task',
        content:
          'Produce a summary of total payroll spend by department for Q3. Your manager needs it within the hour.',
      },
      {
        type: 'table',
        title: 'employees_q3.xlsx — 200 rows',
        columns: ['Full Name', 'Department', 'Salary (CHF)', 'Performance Band', 'Date of Birth'],
        rows: [
          ['Anna Müller', 'Finance', '112,000', 'B+', '1984-03-12'],
          ['James Okafor', 'Engineering', '134,500', 'A', '1991-07-28'],
          ['+ 198 more rows…', '', '', '', ''],
        ],
        piiColumns: [0, 2, 4],
        note: 'Columns in red contain personal data under GDPR Article 4(1).',
      },
    ],
    decisionLabel: 'What is the most appropriate approach?',
    options: [
      { id: 'full-file', title: 'A — Paste the full file', description: 'Copy the entire spreadsheet into the AI prompt for a quick summary.' },
      {
        id: 'aggregated-data',
        title: 'B — Share only aggregated data',
        description: 'Compute department totals first, then share only those figures with the AI.',
      },
      { id: 'remove-names', title: 'C — Remove names only', description: 'Delete the full-name column, then paste the remaining data including salaries and birth dates.' },
      { id: 'generate-script', title: 'D — Ask AI to generate the script', description: 'Describe the task verbally and ask the AI to write code to process the file locally.' },
    ],
  }),
  sim1: makeScenario({
    id: 'sim1',
    scenarioTitle: 'Scenario — The Board Report',
    scenarioSubtitle: 'You are a senior manager at a consulting firm. A board presentation is due in 90 minutes.',
    icon: '💼',
    domainKey: 'appropriateDelegation',
    points: 8,
    correctOptionId: 'specific-kpis',
    feedback: {
      correct:
        'This keeps AI support narrow and proportionate. Even approved tools should only receive the minimum data needed for the task.',
      incorrect:
        'A data processing agreement does not remove the need for minimisation, and it certainly does not justify invented figures.',
    },
    blocks: [
      {
        type: 'note',
        content:
          'Your firm is preparing a board-level report on the financial health of Luxe AG. You have access to Luxe AG’s confidential internal financial model, a dataset of client contacts, and an enterprise AI tool with a data processing agreement in place.\n\nDecision Point 1: You need to summarise key financial indicators. How do you proceed?',
      },
    ],
    decisionLabel: 'Select your approach:',
    options: [
      { id: 'full-model', title: 'Option A', description: 'Paste the full confidential financial model into the enterprise AI tool for a quick summary.' },
      {
        id: 'specific-kpis',
        title: 'Option B',
        description: 'Extract only the specific KPIs needed and share those with the enterprise AI for formatting help.',
      },
      { id: 'public-tool', title: 'Option C', description: 'Use a free public AI tool because it is faster and the enterprise tool is slow today.' },
      { id: 'estimated-figures', title: 'Option D', description: 'Ask the AI to generate estimated financial figures based on Luxe AG’s industry benchmarks.' },
    ],
  }),
  sim2: makeScenario({
    id: 'sim2',
    scenarioTitle: 'Decision Point 2 — Reviewing the AI Output',
    scenarioSubtitle: 'The AI produces the following financial summary for your board report.',
    icon: '📈',
    domainKey: 'appropriateDelegation',
    points: 8,
    correctOptionId: 'correct-source',
    feedback: {
      correct:
        'Verified source data is authoritative. Once you know the AI output is wrong, the professional obligation is to correct it.',
      incorrect:
        'Re-prompting or footnoting does not solve the problem. Known-bad numbers should not move forward.',
    },
    blocks: [
      {
        type: 'transcript',
        title: 'Enterprise AI assistant',
        messages: [
          {
            role: 'assistant',
            speaker: 'AI',
            label: 'AI Summary',
            content:
              'Luxe AG Financial Summary — Q3 2024\n\nRevenue: €18.4M (up 8.2% YoY)\nEBITDA Margin: 22.1%\nNet Debt / EBITDA: 1.4x\nFree Cash Flow: €2.1M\n\nLuxe AG demonstrates robust financial health and appears well-positioned for strategic acquisition activity in 2025.',
          },
        ],
      },
      {
        type: 'note',
        content:
          'You notice the revenue figure should be €16.8M based on the source data you provided. How do you proceed?',
      },
    ],
    decisionLabel: 'Select your response:',
    options: [
      { id: 'trust-ai', title: 'Trust the AI', description: 'The AI may have more recent data, so use the €18.4M figure in the report.' },
      {
        id: 'correct-source',
        title: 'Correct and proceed',
        description:
          'The AI produced an incorrect figure. Correct it from the source document before presenting.',
      },
      { id: 'footnote', title: 'Include a footnote', description: 'Note the discrepancy and let the board decide which figure to use.' },
      { id: 're-prompt', title: 'Re-prompt the AI', description: 'Ask the AI to recalculate. If it gives the same answer twice, it is likely correct.' },
    ],
  }),
};

const ASSESSMENT_ITEM_ORDER = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'd1', 'q7', 'd2', 'q8', 'sim1', 'sim2', 'q9'];

const ASSESSMENT_SECTION_TEMPLATES = [
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

export const PAGE_SEQUENCE = [
  {
    id: 'overview',
    label: 'Overview',
    segmentIds: ['overview-intro', 'overview-domains', 'overview-callout'],
  },
  {
    id: 'pre-assessment',
    label: 'Pre Assessment',
    segmentIds: ['pre-header', 'pre-intro', 'pre-questions', 'pre-footer'],
  },
  {
    id: 'main-part',
    label: 'Lens Split',
    segmentIds: ['main-header', 'main-intro', 'main-terms', 'main-problem-map', 'main-footer'],
  },
  {
    id: 'main-sensitive-disclosure',
    label: 'Sensitive Data',
    segmentIds: [
      'main-sensitive-header',
      'main-sensitive-intro',
      'main-sensitive-input-types',
      'main-sensitive-risks',
      'main-sensitive-lab',
      'main-sensitive-footer',
    ],
  },
  {
    id: 'main-prompt-injection',
    label: 'Prompt Injection',
    segmentIds: [
      'main-prompt-header',
      'main-prompt-intro',
      'main-prompt-risks',
      'main-prompt-footer',
    ],
  },
  {
    id: 'main-misinformation',
    label: 'Misinformation',
    segmentIds: [
      'main-misinformation-header',
      'main-misinformation-intro',
      'main-misinformation-risks',
      'main-misinformation-spot',
      'main-misinformation-verify',
      'main-misinformation-footer',
    ],
  },
  {
    id: 'main-output-handling',
    label: 'Output Handling',
    segmentIds: [
      'main-output-header',
      'main-output-intro',
      'main-output-risks',
      'main-output-approve-escalate',
      'main-output-system-tuning',
      'main-output-footer',
    ],
  },
  {
    id: 'main-excessive-agency',
    label: 'Oversight',
    segmentIds: [
      'main-agency-header',
      'main-agency-intro',
      'main-agency-risks',
      'main-agency-footer',
    ],
  },
  {
    id: 'main-platform-choice',
    label: 'Platforms',
    segmentIds: [
      'main-platform-header',
      'main-platform-intro',
      'main-platforms',
      'main-conclusion',
      'main-platform-footer',
    ],
  },
  {
    id: 'post-assessment',
    label: 'Post Assessment',
    segmentIds: ['post-header', 'post-intro', 'post-questions', 'post-footer'],
  },
  {
    id: 'experience-feedback',
    label: 'Feedback',
    segmentIds: ['feedback-header', 'post-feedback', 'feedback-footer'],
  },
  {
    id: 'thank-you',
    label: 'Thank You',
    segmentIds: ['thanks-header', 'thanks-intro', 'thanks-callout', 'thanks-footer'],
  },
];

export const NAV_SECTIONS = [
  {
    id: 'overview',
    label: 'Overview',
    pageIds: ['overview'],
  },
  {
    id: 'pre-assessment',
    label: 'Pre Assessment',
    pageIds: ['pre-assessment'],
  },
  {
    id: 'main-part',
    label: 'Main Part',
    pageIds: [
      'main-part',
      'main-sensitive-disclosure',
      'main-prompt-injection',
      'main-misinformation',
      'main-output-handling',
      'main-excessive-agency',
      'main-platform-choice',
    ],
  },
  {
    id: 'post-assessment',
    label: 'Post Assessment',
    pageIds: ['post-assessment'],
  },
  {
    id: 'experience-feedback',
    label: 'Feedback',
    pageIds: ['experience-feedback'],
  },
  {
    id: 'thank-you',
    label: 'Thank You',
    pageIds: ['thank-you'],
  },
];

export const SEGMENTS = {
  'overview-intro': {
    type: 'overviewIntro',
    eyebrow: 'ETH Zurich · AI Literacy Initiative',
    title: 'How AI-literate is your organisation?',
    description:
      'A structured learning experience on what employees put into LLMs, what models give back, and where responsibility stays human.',
    helper:
      'The flow moves from overview to pre assessment, into the teaching content, through the post assessment, and ends with a short feedback step.',
    actionLabel: 'Begin assessment',
    nextPageId: 'pre-assessment',
  },
  'overview-domains': {
    type: 'domainGrid',
    title: 'How the website is organised',
    description:
      'The main teaching section first separates input and output risk, then walks through the major problems one by one before ending with platform choice.',
  },
  'overview-callout': {
    type: 'callout',
    variant: 'info',
    icon: 'ℹ',
    title: 'Confidential assessment',
    body:
      'Throughout the experience, “privacy” is treated as input risk and “security” as output risk. On the site, those are framed more clearly as Input Governance and Output Assurance.',
  },
  'pre-header': {
    type: 'pageHeader',
    eyebrow: 'Section 1 · Pre Assessment',
    title: 'Pre assessment',
    description:
      'This is the current assessment in its existing form. For now it stays intact and serves as the baseline before the main teaching content.',
  },
  'pre-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'The pre assessment is intentionally unchanged for now. It captures the learner’s starting point before they move through the revised content structure.',
      'The post assessment will mirror this section exactly so later comparisons stay straightforward.',
    ],
  },
  'pre-questions': {
    type: 'assessmentSections',
    stage: 'pre',
    sections: PRE_ASSESSMENT_SECTIONS,
  },
  'pre-footer': {
    type: 'navigationFooter',
    previousPageId: 'overview',
    action: 'submitPreAssessment',
    nextPageId: 'main-part',
    caption: 'Section 2 of 12',
  },
  'main-header': {
    type: 'pageHeader',
    eyebrow: 'Section 3 · Main Part',
    title: 'Input Governance and Output Assurance',
    description:
      'This first lesson page defines the two core lenses for the rest of the learning experience and names the main problems that sit under each one.',
  },
  'main-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'A useful distinction from the meeting is that one half of the problem is what an employee gives to an LLM, and the other half is what the LLM gives back. “Privacy” and “security” point in that direction, but they can be made more specific.',
      'On this site, the input side is framed as Input Governance and the output side is framed as Output Assurance. That makes the distinction less abstract and gives learners a stable lens for the pages that follow.',
    ],
  },
  'main-terms': {
    type: 'contentCards',
    eyebrow: 'Framing',
    title: 'A clearer distinction than privacy vs security',
    description:
      'These labels line up more directly with the behaviour you want employees to learn.',
    cards: [
      {
        eyebrow: 'Input to the model',
        title: 'Input Governance',
        body:
          'What kinds of internal data can be entered into an LLM, how much of it should be shared, and how untrusted documents, websites, or retrieved content can manipulate the model before work is completed.',
        bullets: [
          'Sensitive information disclosure through uploads, prompts, and copied internal material',
          'Prompt injection through external documents, retrieved content, and hidden instructions',
          'Wrong platform choice before the organisation has decided where data should go',
        ],
      },
      {
        eyebrow: 'Output from the model',
        title: 'Output Assurance',
        body:
          'How employees evaluate AI outputs, detect hallucinations, verify code or recommendations, and decide when a model should not be allowed to act without approval.',
        bullets: [
          'Misinformation, hallucinations, and false confidence',
          'Improper output handling when unchecked answers are passed downstream',
          'Excessive agency when systems act without sufficient human oversight',
        ],
      },
    ],
  },
  'main-problem-map': {
    type: 'contentCards',
    eyebrow: 'Problem Map',
    title: 'The main problems that follow from each lens',
    description:
      'The next lesson pages unpack each of these problems in turn, starting with input-side risks and then moving to output-side judgement and oversight.',
    cards: [
      {
        eyebrow: 'Input Governance',
        title: 'Sensitive Information Disclosure',
        body:
          'Employees often start by pasting data into an LLM to get the task done quickly. The core question is what should never go in, what can be reduced, and what legal or commercial harm follows when that judgement fails.',
        bullets: [
          'Personal data, product designs, board material, and client information',
          'Data minimisation and lawful processing',
          'Practical leakage before anybody realises what happened',
        ],
      },
      {
        eyebrow: 'Input Governance',
        title: 'Prompt Injection',
        body:
          'Inputs are not neutral. A document, webpage, or retrieved chunk of text can contain instructions that manipulate the model and change its behaviour in ways the user did not intend.',
        bullets: [
          'Hidden instructions in uploaded or retrieved content',
          'Why system prompts do not fully solve the problem',
          'Why untrusted content must be handled as untrusted',
        ],
      },
      {
        eyebrow: 'Output Assurance',
        title: 'Misinformation and Hallucinations',
        body:
          'On the output side, the first problem is false confidence. A model can produce polished claims, code, figures, and recommendations that look usable but are unsupported or wrong.',
        bullets: [
          'Invented citations and statistics',
          'Misleading expertise and overconfident tone',
          'Bad code or insecure code that appears plausible',
        ],
      },
      {
        eyebrow: 'Output Assurance',
        title: 'Improper Output Handling and Excessive Agency',
        body:
          'The output problem is not only that the model can be wrong. It is also what happens when people or systems pass that output forward without validation, approval, or clear ownership.',
        bullets: [
          'Unchecked outputs moving into reports, decisions, or systems',
          'Automation without meaningful approval points',
          'Confusion about who remains responsible when the model is wrong',
        ],
      },
    ],
  },
  'main-footer': {
    type: 'navigationFooter',
    previousPageId: 'pre-assessment',
    nextPageId: 'main-sensitive-disclosure',
    caption: 'Section 3 of 12',
    nextLabel: 'Go to Sensitive Information Disclosure →',
  },
  'main-sensitive-header': {
    type: 'pageHeader',
    eyebrow: 'Section 4 · Sensitive Information Disclosure',
    title: 'What enters an LLM — and how it leaks out',
    description:
      'Sensitive data reaches AI tools through multiple input channels. This section explains the difference between an AI data breach and an AI data leak, maps what employees actually send to LLMs, and shows how leakage occurs — often without any malicious actor involved.',
  },
  'main-sensitive-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'An AI data breach involves a malicious actor extracting information from a system. An AI data leak is different: it is involuntary. Confidential data enters an AI tool through a user prompt — a pasted email, an uploaded spreadsheet, a typed financial figure — and the employee often does not realise the exposure until it is too late. Most workplace incidents are leaks, not breaches.',
      'The platform tier compounds the risk. Content sent through a personal account receives weaker protection than content sent through an enterprise agreement. On the standard ChatGPT tier, conversations are stored by default, metadata is logged, and deletion is opt-in rather than automatic. Many employees cannot tell which tier they are using, or what that means for the data they are sharing.',
    ],
  },
  'main-sensitive-input-types': {
    type: 'contentCards',
    eyebrow: 'Input Channels',
    title: 'What employees send to an LLM',
    description:
      'AI tools accept input through several channels. Each creates a different exposure surface — and not all employees recognise which channel they are using or what it costs.',
    cards: [
      {
        eyebrow: 'Direct input',
        title: 'Text prompts and pasted content',
        body:
          'Employees type queries, instructions, and questions directly into chat interfaces. They also paste content — meeting notes, emails, code snippets, client communications — often without removing names, figures, or internal references first. This is the most common leakage pathway.',
        bullets: [
          'Names, job titles, and salary figures pasted from HR documents',
          'Financial projections and board materials copied from internal dashboards',
          'Client names and deal terms taken directly from CRM notes or emails',
        ],
      },
      {
        eyebrow: 'Indirect input',
        title: 'File uploads',
        body:
          'Most major LLM platforms accept file uploads. A PDF, spreadsheet, or image may contain structured personal data, embedded metadata, version history, or internal comments that the employee did not intend to share alongside the document.',
        bullets: [
          'Spreadsheets with employee records, salary bands, or financial models',
          'PDFs with tracked changes, internal author metadata, or revision history',
          'Screenshots of internal systems, dashboards, or confidential slides',
        ],
      },
      {
        eyebrow: 'Extended access',
        title: 'Connected integrations and plugins',
        body:
          'Enterprise AI tools increasingly connect to calendars, email, CRM systems, and file stores. Once connected, the model can read and act on data across those systems — often more broadly than the employee expects when they first enable the integration.',
        bullets: [
          'Calendar and email content surfaced automatically in conversation context',
          'CRM and project records retrieved through plugin or tool-use access',
          'Downstream system actions triggered by the model on behalf of the user',
        ],
      },
      {
        eyebrow: 'Platform tier',
        title: 'Personal account vs enterprise agreement',
        body:
          'ChatGPT\'s standard tier stores conversation content by default, logs metadata, and makes deletion opt-in rather than automatic. Enterprise agreements typically include data processing agreements, opt-out from model training, and admin controls. The same prompt carries different risk depending on which tier handles it.',
        bullets: [
          'Standard accounts: content stored by default, metadata logged, deletion is opt-in',
          'Enterprise accounts: DPA in place, training opt-out available, admin controls active',
          'Employees often cannot tell which tier they are using during a given session',
        ],
      },
    ],
  },
  'main-sensitive-risks': {
    type: 'contentCards',
    eyebrow: 'Leakage Mechanisms',
    title: 'Four ways sensitive data leaks through AI tools',
    description:
      'Research from Cyberhaven documents four distinct leakage pathways. Employees who understand each mechanism can make better decisions before they input data — rather than discovering the exposure after the fact.',
    cards: [
      {
        eyebrow: 'Pathway 1',
        title: 'Training data leakage',
        body:
          'When AI models are trained on datasets that include sensitive content, they can later reproduce that material verbatim. A model trained on medical records or proprietary documents may surface patient data or confidential text when users query related topics — even long after the original training run.',
        bullets: [
          'Model reproduces verbatim content from training corpora in later responses',
          'Sensitive records surface through queries on related topics',
          'The organisation has no visibility into what the model has retained',
        ],
      },
      {
        eyebrow: 'Pathway 2',
        title: 'Inference-time leakage',
        body:
          'Inference-time leakage occurs when a model reveals sensitive information in response to crafted queries, without any attack on training data. Attackers can use prompt injection techniques to extract system prompts containing proprietary business logic, internal instructions, or confidential configuration.',
        bullets: [
          'Crafted queries coax the model into revealing its system prompt contents',
          'Prompt injection in uploaded documents redirects model behaviour',
          'System prompts frequently contain proprietary logic or internal policy details',
        ],
      },
      {
        eyebrow: 'Pathway 3',
        title: 'RAG leakage',
        body:
          'Retrieval-augmented generation (RAG) systems fetch relevant documents to provide context. If those documents contain passwords, high-level system information, or internal architecture details, that information can enter the model\'s response window and be surfaced to a user who was not authorised to see it.',
        bullets: [
          'Fetched documents contain credentials, passwords, or access tokens',
          'System architecture or network topology included in retrieved context',
          'User receives information from documents they were not authorised to access',
        ],
      },
      {
        eyebrow: 'Prevention',
        title: 'Data classification, DLP, and platform governance',
        body:
          'Effective prevention combines three layers: classify data before it reaches any AI tool, apply data loss prevention controls to block sensitive data at the edge, and match the right platform tier to the task. Profiling AI services before use — understanding what each one stores, shares, and retains — is a prerequisite, not an afterthought.',
        bullets: [
          'Classify data sensitivity before prompting: reduce, transform, or withhold as needed',
          'Use DLP controls to intercept sensitive data before it reaches AI endpoints',
          'Match platform tier to task: enterprise agreements for anything internal or regulated',
        ],
      },
    ],
  },
  'main-sensitive-lab': {
    type: 'governanceLab',
    eyebrow: 'Interactive Lab',
    title: 'The Governance Lab: Input & Output Assurance',
    description:
      'Experience the full LLM task pipeline. Choose which documents to upload, how to phrase your prompt, and how to handle the output. Find the balance: too open leaks data, too restricted makes the task impossible.',
  },
  'main-sensitive-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-part',
    nextPageId: 'main-prompt-injection',
    caption: 'Section 4 of 12',
    nextLabel: 'Go to Prompt Injection →',
  },
  'main-prompt-header': {
    type: 'pageHeader',
    eyebrow: 'Section 5 · Prompt Injection',
    title: 'Why untrusted content can steer the model',
    description:
      'After learners understand unsafe data entry, the next step is seeing that inputs can also manipulate the model itself through hidden or indirect instructions.',
  },
  'main-prompt-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'Prompt injection is important here because it shows that the problem is not only what an employee types. A file, webpage, retrieval result, or embedded instruction can alter the behaviour of the model in unintended ways.',
      'This makes the issue more subtle: even a well-meaning employee can expose the system to risk if they treat external content as trustworthy just because it looks normal.',
    ],
  },
  'main-prompt-risks': {
    type: 'contentCards',
    eyebrow: 'Input Side',
    title: 'How prompt injection changes behaviour and access',
    description:
      'This page should help learners see that prompt injection is not a niche technical trick. It is a practical trust-boundary problem whenever models ingest external content.',
    cards: [
      {
        eyebrow: 'Mechanism',
        title: 'Indirect instructions hidden in content',
        body:
          'A retrieved webpage, uploaded PDF, or internal document can contain instructions that the model follows even though the human reader does not notice them. The employee thinks they are summarising content, but the model is also obeying it.',
        bullets: [
          'Hidden instructions in websites or files',
          'Retrieved content that alters the model’s behaviour',
          'Prompt design that is overruled by untrusted content',
        ],
      },
      {
        eyebrow: 'Consequence',
        title: 'What can go wrong',
        body:
          'Once the model is influenced, it may reveal information, ignore guardrails, produce biased or manipulated answers, or trigger downstream actions that should never have happened automatically.',
        bullets: [
          'Disclosure of sensitive information',
          'Manipulated summaries or recommendations',
          'Unsafe actions in connected systems',
        ],
      },
      {
        eyebrow: 'Response',
        title: 'What supervision looks like here',
        body:
          'The practical lesson is to treat external content as untrusted, separate it clearly, limit what the model can do with it, and avoid assuming that a system prompt will reliably override malicious instructions.',
        bullets: [
          'Separate trusted and untrusted content',
          'Limit tool access and downstream actions',
          'Require review for high-risk operations',
        ],
      },
    ],
  },
  'main-prompt-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-sensitive-disclosure',
    nextPageId: 'main-misinformation',
    caption: 'Section 5 of 12',
    nextLabel: 'Go to Misinformation →',
  },
  'main-misinformation-header': {
    type: 'pageHeader',
    eyebrow: 'Section 6 · Misinformation and Hallucinations',
    title: 'When confident output is still wrong',
    description:
      'This is the first output-side page. It focuses on false facts, unsupported claims, and plausible but unsafe code or recommendations.',
  },
  'main-misinformation-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'A major output-side risk is that the model sounds more certain than it deserves to. Learners need to recognise that polished language, structured reasoning, and specific figures do not guarantee correctness.',
      'This is where many workplace failures begin: the output looks complete enough to use, so nobody stops to verify it before it enters a report, decision, or repository.',
    ],
  },
  'main-misinformation-risks': {
    type: 'contentCards',
    eyebrow: 'Output Side',
    title: 'Hallucinations, false confidence, and unsupported claims',
    description:
      'The emphasis here is on recognising unreliable output before it becomes business input.',
    cards: [
      {
        eyebrow: 'Risk',
        title: 'False facts and invented support',
        body:
          'The model can produce incorrect statistics, fabricated citations, or unsupported statements while sounding authoritative. That makes misinformation dangerous precisely because it often looks credible.',
        bullets: [
          'Incorrect business recommendations',
          'Invented citations and statistics',
          'Misrepresentation of expertise or certainty',
        ],
      },
      {
        eyebrow: 'Engineering',
        title: 'Unsafe or misleading code output',
        body:
          'For technical work, misinformation also appears as plausible code that does not run, uses insecure patterns, or recommends libraries and dependencies that should not be trusted without review.',
        bullets: [
          'Bad code quality in the repository',
          'Security vulnerabilities from unchecked snippets',
          'False confidence because the code “looks right”',
        ],
      },
      {
        eyebrow: 'Practice',
        title: 'What responsible verification looks like',
        body:
          'The didactic goal is to teach cross-checking, source verification, and explicit doubt when the output matters. A trustworthy workflow never treats the model as its own validator.',
        bullets: [
          'Verify against trusted sources',
          'Check critical numbers independently',
          'Treat AI output as draft material, not finished truth',
        ],
      },
    ],
  },
  'main-misinformation-spot': {
    type: 'spotHallucination',
    eyebrow: 'Interactive Exercise',
    title: 'Spot the Hallucination',
    description:
      'Read the AI-generated market analysis below. Click on every phrase you think is unreliable, fabricated, or overconfident. You can select as many phrases as you like, then submit your assessment.',
    transcriptTitle: 'AI Assistant',
    context:
      'Summarise the latest AI adoption trends in Switzerland for a board briefing. Include relevant statistics and market projections.',
    transcriptLabel: 'AI Summary',
    spans: [
      { id: 'sp1', text: 'According to the ', safe: true },
      {
        id: 'sp2',
        text: "World Innovation Institute's Q2 2024 report",
        safe: false,
        type: 'invented-citation',
        explanation:
          'No such institute or report can be verified. This is a fabricated citation — a named, specific-sounding source that does not exist. Models frequently invent plausible-sounding organisations to add credibility to their output.',
      },
      { id: 'sp3', text: ', Swiss SMEs have increased AI tool adoption by ', safe: true },
      {
        id: 'sp4',
        text: '34% year-over-year',
        safe: false,
        type: 'fabricated-stat',
        explanation:
          'This statistic is unsourced and unverifiable. Specific percentage figures are one of the most common hallucination types — they look precise and authoritative, but are generated without any underlying data.',
      },
      { id: 'sp5', text: '. The report, authored by ', safe: true },
      {
        id: 'sp6',
        text: 'Dr. Miriam Hartley',
        safe: false,
        type: 'invented-person',
        explanation:
          'This name cannot be verified as the author of any such report. AI tools frequently generate plausible-sounding names attached to fabricated publications to lend the appearance of authority.',
      },
      {
        id: 'sp7',
        text: ", specifically highlights Zurich's financial sector as the fastest-growing adopter, with a ",
        safe: true,
      },
      {
        id: 'sp8',
        text: '52% uptake rate',
        safe: false,
        type: 'fabricated-stat',
        explanation:
          'Another unsourced sector-level figure. Adoption statistics of this specificity require verification from official industry surveys or government data. No such survey for the Zurich financial sector has been published.',
      },
      { id: 'sp9', text: '. ChatGPT currently holds ', safe: true },
      {
        id: 'sp10',
        text: 'approximately 78% of the enterprise LLM market in Switzerland',
        safe: false,
        type: 'fabricated-stat',
        explanation:
          'Country-specific AI market share figures at this level of precision are not publicly available from any credible source. The specificity makes the claim look authoritative while having no verifiable basis.',
      },
      { id: 'sp11', text: '. Based on these trends, the Swiss AI market is projected to reach ', safe: true },
      {
        id: 'sp12',
        text: 'CHF 8.2 billion by 2026',
        safe: false,
        type: 'fabricated-stat',
        explanation:
          'A market projection without a source or methodology. The specific figure lends false precision to an unsupported claim. Available third-party forecasts for the Swiss AI market show significantly lower numbers.',
      },
      { id: 'sp13', text: ', representing an ', safe: true },
      {
        id: 'sp14',
        text: 'exceptional investment opportunity',
        safe: false,
        type: 'overconfidence',
        explanation:
          'This is an opinion presented as a conclusion. The model has no basis for making investment judgements, yet the confident framing is designed to close the paragraph persuasively. Overconfident evaluative language like this is a reliable warning sign.',
      },
      { id: 'sp15', text: ' for forward-thinking organisations.', safe: true },
    ],
  },
  'main-misinformation-verify': {
    type: 'sourceVerification',
    eyebrow: 'Verification Simulation',
    title: 'Source Verification Simulation',
    description:
      'The claims below come from the analysis above. For each one, decide how you would verify it before using it in a professional document. Select one approach per claim, then submit to see what happens.',
    claims: [
      {
        id: 'cv1',
        text: '"Swiss SMEs have increased AI tool adoption by 34% year-over-year" (World Innovation Institute, Q2 2024)',
        options: [
          {
            id: 'google',
            label: 'Search online',
            icon: '🔍',
            outcome: {
              result: 'dead-link',
              label: 'Dead End',
              tone: 'warn',
              message:
                'No results for the "World Innovation Institute Q2 2024" report. Multiple searches return no relevant results. The report cannot be located — the source appears to be fabricated.',
            },
          },
          {
            id: 'internal',
            label: 'Check internal data',
            icon: '📂',
            outcome: {
              result: 'contradiction',
              label: 'Contradiction Found',
              tone: 'danger',
              message:
                'Your own internal SME survey data from the same period shows a 12% adoption increase — significantly lower than the AI figure. The claim cannot be reconciled with your own data and the original source cannot be located.',
            },
          },
          {
            id: 'ignore',
            label: 'Use it as-is',
            icon: '→',
            outcome: {
              result: 'risk',
              label: 'Risk Accepted',
              tone: 'danger',
              message:
                'The unverified statistic enters the board briefing. When a board member asks for the original report in a follow-up, it cannot be provided. The credibility of the whole analysis is now in question.',
            },
          },
        ],
        bestOptionId: 'google',
        explanation:
          'Searching for the source first costs seconds and immediately exposes the fabrication. A failed search is itself useful information — it tells you the claim is unverifiable before it enters any professional document.',
      },
      {
        id: 'cv2',
        text: '"ChatGPT holds approximately 78% of the enterprise LLM market in Switzerland"',
        options: [
          {
            id: 'google',
            label: 'Search online',
            icon: '🔍',
            outcome: {
              result: 'partial',
              label: 'Partial Result',
              tone: 'warn',
              message:
                'Global AI tool usage data exists, but Switzerland-specific enterprise market share figures at this precision are not published by any credible source. The 78% figure remains unverifiable even after an extensive search.',
            },
          },
          {
            id: 'internal',
            label: 'Check internal data',
            icon: '📂',
            outcome: {
              result: 'validated',
              label: 'Best Approach Here',
              tone: 'success',
              message:
                'Your IT procurement records show the organisation actively uses three different LLM platforms. The claim of near-total single-vendor dominance does not match operational reality, and no external source supports the figure either.',
            },
          },
          {
            id: 'ignore',
            label: 'Use it as-is',
            icon: '→',
            outcome: {
              result: 'risk',
              label: 'Risk Accepted',
              tone: 'danger',
              message:
                'A board member with vendor relationships questions the figure mid-presentation. No source can be provided and the slide is withdrawn from the deck — in front of the full board.',
            },
          },
        ],
        bestOptionId: 'internal',
        explanation:
          'Internal procurement data is a concrete secondary check that does not depend on finding a public source. Combining it with an online search (which shows no credible source) gives a reliable, multi-angle picture.',
      },
      {
        id: 'cv3',
        text: '"The Swiss AI market is projected to reach CHF 8.2 billion by 2026"',
        options: [
          {
            id: 'google',
            label: 'Search online',
            icon: '🔍',
            outcome: {
              result: 'contradiction',
              label: 'Contradiction Found',
              tone: 'warn',
              message:
                'A credible market research firm publishes a Swiss digital economy forecast, but their 2026 projection for AI-related services is CHF 3.1 billion — significantly lower than the AI figure. The discrepancy must be flagged before use.',
            },
          },
          {
            id: 'internal',
            label: 'Check internal data',
            icon: '📂',
            outcome: {
              result: 'not-applicable',
              label: 'Not Applicable',
              tone: 'warn',
              message:
                'Internal data does not cover macro market projections. This approach does not help here — an external market research source is the right check for country-level forecasts.',
            },
          },
          {
            id: 'ignore',
            label: 'Use it as-is',
            icon: '→',
            outcome: {
              result: 'risk',
              label: 'Risk Accepted',
              tone: 'danger',
              message:
                'The figure enters board materials unchecked. A finance director later locates a credible source showing a significantly lower number. The report is revised after distribution and the discrepancy requires explanation.',
            },
          },
        ],
        bestOptionId: 'google',
        explanation:
          'For macro market projections, a credible external source is the right check. Even finding a different number is valuable — it shows the AI figure is inflated or unsupported and gives you something real to use instead.',
      },
    ],
  },
  'main-misinformation-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-prompt-injection',
    nextPageId: 'main-output-handling',
    caption: 'Section 6 of 12',
    nextLabel: 'Go to Improper Output Handling →',
  },
  'main-output-header': {
    type: 'pageHeader',
    eyebrow: 'Section 7 · Improper Output Handling',
    title: 'The risk grows when unchecked output moves downstream',
    description:
      'This page shifts from “the model was wrong” to “the system or user passed the wrong output forward without validation, sanitisation, or review.”',
  },
  'main-output-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'Improper output handling matters because a bad model answer becomes more dangerous when it is inserted into a report, workflow, codebase, or automated system without checks.',
      'That means the learning focus here is procedural: what should happen between generation and use, and where validation or review routines should interrupt the flow.',
    ],
  },
  'main-output-risks': {
    type: 'contentCards',
    eyebrow: 'Output Side',
    title: 'What happens when output is passed on too quickly',
    description:
      'This page connects verification to concrete organisational controls and downstream consequences.',
    cards: [
      {
        eyebrow: 'Mechanism',
        title: 'Unchecked outputs enter real workflows',
        body:
          'An answer can be copied into a board report, pasted into a client message, committed into a repository, or sent into another system before anyone has validated it. At that point the damage is no longer just theoretical.',
        bullets: [
          'Outputs moving into decision-making without review',
          'Code or text passed to downstream systems',
          'Automation chains built on unvalidated output',
        ],
      },
      {
        eyebrow: 'Consequence',
        title: 'Practical and legal consequences',
        body:
          'The consequences range from quality problems and security flaws to liability and compliance issues. Once the output has moved forward, accountability is still human even if the initial text came from a model.',
        bullets: [
          'Broken tools, insecure code, and operational mistakes',
          'Misleading reports or recommendations',
          'Liability when people act on bad output',
        ],
      },
      {
        eyebrow: 'Control',
        title: 'Bounding consequences before release',
        body:
          'Good practice means validating output formats, checking critical content before reuse, and limiting blast radius when a model participates in a high-consequence process.',
        bullets: [
          'Human review before deployment or publication',
          'Validation against expected structure or source data',
          'Escalation when certainty is not high enough',
        ],
      },
    ],
  },
  'main-output-approve-escalate': {
    type: 'approveOrEscalate',
    eyebrow: 'Decision Simulator',
    title: 'Approve or Escalate?',
    description:
      'Seven workplace scenarios. An AI output is already in front of you — choose how to respond. Sometimes the right call is to approve immediately. Sometimes it is to review. Sometimes it is to escalate. A risk meter tracks the cumulative cost of your choices.',
    scenarios: [
      {
        id: 'aoe-s1',
        title: 'Weekly Internal Briefing',
        urgency: 'Routine · End of day deadline',
        context:
          'Your AI assistant has prepared the weekly internal performance summary for leadership. It aggregates sales figures from the internal BI dashboard. There is no client data, no recommendations, and no sensitive personal information.',
        aiOutputTitle: 'AI Draft — Internal Briefing',
        aiOutput:
          'Week 42 Performance Summary\n\nRevenue: €1.24M (↑ 3.1% vs. prior week)\nTop region: DACH (+8.2%)\nOpen pipeline: 47 deals, total value €3.8M\nNotable: Enterprise segment exceeded target for third consecutive week.\n\nFull breakdown attached.',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Send to leadership as-is',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Correct call',
              title: 'Efficient and appropriate',
              body:
                'This is exactly what AI-assisted automation is designed for: routine, internal, low-sensitivity information distribution. The data came from a controlled internal source and contains no personal data or external-facing content. Approving immediately is the right move.',
              lesson:
                'Not every AI output needs a review gate. Applying uniform caution to routine internal tasks creates friction without protecting anything. The skill is recognising when oversight adds value — and when it just adds delay.',
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review Before Sending',
            sublabel: 'Check figures manually',
            riskDelta: 5,
            consequence: {
              tone: 'warn',
              verdict: 'Overcautious',
              title: 'No issues found — but time was spent',
              body:
                'You reviewed the summary, confirmed all figures matched the BI dashboard, and sent it 22 minutes later than the deadline. No issues were found. The report was accurate.',
              lesson:
                'Reviewing low-risk internal reports is not wrong, but it can become a habit that crowds out oversight on tasks that actually need it. Calibrate your review effort to the actual risk level of the output.',
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Route to department head',
            riskDelta: 8,
            consequence: {
              tone: 'warn',
              verdict: 'Unnecessary escalation',
              title: 'Overhead without benefit',
              body:
                'The department head reviewed and approved the summary without changes. This added 90 minutes of delay to a routine weekly report and consumed a senior resource for a task that required no senior judgement.',
              lesson:
                'Escalation is a resource. Escalating low-risk, high-routine tasks dilutes the attention available for decisions that genuinely require senior oversight. Reserve escalation for situations where the stakes or the ambiguity justify it.',
            },
          },
        ],
      },
      {
        id: 'aoe-s2',
        title: 'Customer Courtesy Credit',
        urgency: 'Customer waiting · 1 day unresolved',
        context:
          'A customer contacted support after experiencing a 4-hour service outage. Your AI case system has assessed the complaint and recommends a €75 courtesy credit. Policy permits AI-assisted credits up to €200 without approval. The AI has correctly identified the outage in the system log.',
        aiOutputTitle: 'AI Case Decision',
        aiOutput:
          'Complaint Assessment: VALID\nService disruption confirmed: 4h 12m on Oct 14\nRecommended resolution: Courtesy credit — €75.00\nPolicy check: Within automated approval ceiling (€200 max)\nStatus: Awaiting operator confirmation.',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Confirm the credit',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Correct call',
              title: 'Policy used as intended',
              body:
                'The AI correctly identified a valid complaint and proposed a resolution within the approved ceiling. You confirmed it promptly. The customer received the credit within the hour and the case closed cleanly.',
              lesson:
                'Threshold controls and policy ceilings exist precisely so that routine, validated decisions can proceed without bottlenecks. Trusting the process here is the correct behaviour — the human role was to confirm, not re-investigate.',
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review the Case',
            sublabel: 'Verify the outage log',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Cautious but fine',
              title: 'Verified and approved',
              body:
                'You checked the system log directly, confirmed the 4-hour outage, and approved the credit. This added 8 minutes and confirmed what the AI had already found correctly.',
              lesson:
                'Reviewing a within-policy recommendation you are unsure about is a reasonable choice. Just be aware of the cost: if every within-ceiling decision gets individually reviewed, the automation ceiling loses its purpose.',
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Send to manager for sign-off',
            riskDelta: 5,
            consequence: {
              tone: 'warn',
              verdict: 'Unnecessary overhead',
              title: 'Manager approved without changes',
              body:
                'Your manager reviewed the case and approved the €75 credit. The process added 3 hours to the resolution time. No issues were identified. The manager noted that within-ceiling decisions do not require escalation.',
              lesson:
                'Escalating decisions that fall within the approved automation ceiling signals either a lack of trust in the policy or uncertainty about your own authority. Both can be addressed by clarifying what the policy boundary actually means.',
            },
          },
        ],
      },
      {
        id: 'aoe-s3',
        title: 'Marketing Email with Placeholder Error',
        urgency: 'Campaign launches in 2 hours',
        context:
          'Your AI content system has drafted a re-engagement email campaign for 450 lapsed customers. You are the campaign manager. The email is scheduled to send automatically in 2 hours unless you intervene.',
        aiOutputTitle: 'AI Draft — Re-engagement Email',
        aiOutput:
          'Subject: We miss you, [CUSTOMER NAME]\n\nHi [CUSTOMER NAME],\n\nIt\'s been a while since we\'ve seen you, and we\'d love to welcome you back.\n\nAs a valued customer, we\'re offering you an exclusive 20% discount on your next order — valid until October 31.\n\nClick below to claim your offer.\n\nWarm regards,\nThe Team',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Let it send as scheduled',
            riskDelta: 28,
            consequence: {
              tone: 'danger',
              verdict: 'Output error undetected',
              title: '450 customers received a broken email',
              body:
                "The email went out with '[CUSTOMER NAME]' unreplaced in both the subject line and body. 450 customers received it. Within 2 hours, 23 complaints arrived and 11 customers unsubscribed. The campaign had to be recalled and a correction sent.",
              lesson:
                "AI output errors are not always semantic — sometimes they are literal, like an unfilled template variable. A single human review of the final output before a bulk send is a minimal safeguard with outsized value. The AI did not fail at content; it failed at a step the pipeline should have enforced.",
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review Before Send',
            sublabel: 'Read the draft carefully',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Error caught in time',
              title: 'Campaign corrected before launch',
              body:
                'Reading the first few lines of the draft revealed the unfilled placeholder immediately. You corrected the template variable, re-ran the personalisation step, and the campaign launched on time with clean output.',
              lesson:
                "Bulk outbound communications are a high-consequence category: an error reaches hundreds of customers simultaneously and cannot be unsent. A review step before any mass send — even when the content looks routine — is proportionate and necessary.",
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Flag to marketing lead',
            riskDelta: 8,
            consequence: {
              tone: 'warn',
              verdict: 'Error caught — but slowly',
              title: 'Campaign delayed by 3 hours',
              body:
                'The marketing lead eventually identified the placeholder error, but the review took 3 hours and the campaign missed its optimal send window. The error was caught before it reached customers.',
              lesson:
                'Escalating to a manager for a content review task adds overhead that was not necessary here — the issue was findable with a direct read. Marketing content errors are within the campaign manager\'s authority to catch and fix. The right call was a direct review, not a handoff.',
            },
          },
        ],
      },
      {
        id: 'aoe-s4',
        title: 'Scheduled Maintenance Notification',
        urgency: 'Routine · Maintenance window in 48 hours',
        context:
          'Your AI operations assistant has drafted a maintenance window notification for internal staff. The outage is a planned 3-hour infrastructure update confirmed by the ops team. The notification is internal-only, contains no sensitive data, and follows the standard format.',
        aiOutputTitle: 'AI Draft — Internal Maintenance Notice',
        aiOutput:
          'PLANNED MAINTENANCE NOTICE\n\nDate: Saturday, October 26 | 02:00–05:00 CET\nImpacted systems: Customer portal, internal CRM\nAction required: Save all work before 01:45 CET\n\nFor urgent issues during the window, contact ops-on-call@company.com\n\nThis notice has been generated and verified against the confirmed maintenance schedule.',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Send to all staff',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Correct call',
              title: 'Routine communication handled efficiently',
              body:
                'The notification was accurate, internally sourced, and non-sensitive. Staff received advance notice with clear instructions. No issues arose.',
              lesson:
                'Standardised internal operational communications are an ideal use case for AI-assisted automation. When the content is verified against a system of record and the audience is internal, routine approval is appropriate.',
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review the Draft',
            sublabel: 'Cross-check the schedule',
            riskDelta: 3,
            consequence: {
              tone: 'warn',
              verdict: 'Correct but cautious',
              title: 'No changes needed — 15 minutes spent',
              body:
                'You cross-referenced the maintenance window against the ops calendar. Everything matched. The notification went out unchanged.',
              lesson:
                "Cross-checking a maintenance notice against a source you trust is a reasonable instinct, but for routine operational communications the overhead may not be justified. If you find yourself reviewing this type of output every time, consider whether the review adds real value or just adds friction.",
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Get ops lead sign-off',
            riskDelta: 5,
            consequence: {
              tone: 'warn',
              verdict: 'Unnecessary escalation',
              title: 'Ops lead approved without changes — 40 minutes added',
              body:
                'The ops lead confirmed the maintenance window matched the schedule and approved the notification unchanged. The delay reduced the lead time staff had to prepare.',
              lesson:
                'Operational notifications generated from a verified source and addressed to internal staff do not require management escalation. Routing routine approvals through a senior resource increases process latency without improving outcomes.',
            },
          },
        ],
      },
      {
        id: 'aoe-s5',
        title: 'Client Portfolio Email with Account Data',
        urgency: 'Time-sensitive · 30 min to meeting',
        context:
          'An AI assistant has drafted an email to a wealth management client summarising their Q3 portfolio performance. You are the relationship manager and must send it before the client meeting. The draft is ready to go.',
        aiOutputTitle: 'AI Draft — Client Email',
        aiOutput:
          'Dear Mr. Hartmann,\n\nYour portfolio (Account #CH-20044-88) recorded a value of €127,450 at Q3 close, representing an 8.3% decline.\n\nBased on current volatility projections, we recommend reducing your equity exposure from 65% to 45% effective next week.\n\nBest regards,\nWealth Management Team',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Send as drafted',
            riskDelta: 30,
            consequence: {
              tone: 'danger',
              verdict: 'Compliance failure',
              title: 'Sensitive data sent without review',
              body:
                "The email included the client's full account number and exact portfolio value — both classified as sensitive personal data under GDPR and the firm's data processing agreement. Once sent, this cannot be recalled. The client's data left a controlled channel without compliance review.",
              lesson:
                'AI drafts for external communications must always be checked for sensitive data fields before sending. Account numbers and precise financial figures require specific handling under most data processing agreements. The time pressure was real — but it does not remove the obligation.',
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review and Edit',
            sublabel: 'Revise before sending',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Risk identified and removed',
              title: 'Email corrected and sent on time',
              body:
                'You caught the raw account number and replaced it with the approved masked format. You also removed the specific percentage recommendation — a field that triggers investment advice regulations — and substituted a general reference. The email went out 12 minutes later and passed compliance review.',
              lesson:
                'A structured review checklist for AI-drafted client communications (sensitive data fields, regulated language, investment recommendation triggers) takes less than two minutes and prevents reportable data incidents. This was the right call.',
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Flag for compliance review',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Risk contained via proper channel',
              title: 'Compliance team reformatted and sent',
              body:
                'The compliance team reformatted the email using an approved template that avoids raw account references and specific portfolio values. The client received a policy-compliant communication. The meeting proceeded without incident.',
              lesson:
                "Client-facing communications involving account data and financial recommendations benefit from compliance review. Escalating when you are unsure is a legitimate and responsible choice — the cost here was a few minutes, not a reportable data incident.",
            },
          },
        ],
      },
      {
        id: 'aoe-s6',
        title: 'Out-of-Policy Refund',
        urgency: 'Customer waiting · 3 days unresolved',
        context:
          'Your AI customer service system has reviewed a refund request and determined the customer qualifies. Policy permits AI-assisted approvals up to €500 without manager sign-off. This refund is €2,400.',
        aiOutputTitle: 'AI Recommendation',
        aiOutput:
          'Refund Decision: APPROVED\nAmount: €2,400.00\nReason: Customer complaint validated. Service failure confirmed.\nStatus: Queued for processing — awaiting operator confirmation.',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Confirm immediately',
            riskDelta: 35,
            consequence: {
              tone: 'danger',
              verdict: 'Policy bypassed',
              title: 'Threshold control circumvented',
              body:
                "The €2,400 refund processed without required manager sign-off. The finance audit flagged the exception: this amount is 4.8× the approved AI-decision ceiling. The transaction appears in the compliance log as an unauthorised exception and sits with you personally.",
              lesson:
                'Threshold controls exist precisely for this situation. An AI recommendation is not an authorisation. The €500 ceiling ensures consequential financial decisions stay with a human approver regardless of how confident the AI output appears.',
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review and Approve',
            sublabel: 'Verify the case, then confirm',
            riskDelta: 20,
            consequence: {
              tone: 'warn',
              verdict: 'Delegation limit exceeded',
              title: 'Approved — but outside your authority',
              body:
                "You confirmed the service failure was genuine and approved the refund under your own authority. The AI's assessment was correct — but the approval still exceeded your delegation limit. Accountability sits with you personally, and the exception was logged.",
              lesson:
                "Verifying that the AI was right does not change the approval authority rules. When an amount exceeds the AI approval ceiling, escalation is the required path regardless of confidence in the outcome. The investigation was useful; the approval was not yours to make.",
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Route to manager sign-off',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Controls maintained',
              title: 'Escalation followed the correct path',
              body:
                "The manager reviewed the case, confirmed the refund was legitimate, and approved it with a documented exception. The customer received the refund within 2 hours. The process remained auditable and compliant.",
              lesson:
                "Escalation is not a delay — it is a control. The customer's wait extended by 2 hours, but the organisation's financial controls stayed intact and the exception was properly documented. The AI did its job; so did you.",
            },
          },
        ],
      },
      {
        id: 'aoe-s7',
        title: 'Flagged Wire Transfer',
        urgency: 'Critical · Completes automatically in 12 minutes',
        context:
          'Your AI risk system has flagged an outbound wire transfer as unusual but did not block it. The system is configured to flag and continue unless a human intervenes. You are the only operator online.',
        aiOutputTitle: 'Risk System Alert',
        aiOutput:
          'TRANSACTION FLAGGED — AUTO-PROCEEDING\nAmount: €15,000 | Destination: New account (created 6 days ago)\nPattern: Unusual for account history | Confidence: 61% anomalous\nStatus: Proceeding in 12 minutes unless manually blocked.',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Allow Transfer',
            sublabel: 'Let it proceed as flagged',
            riskDelta: 40,
            consequence: {
              tone: 'danger',
              verdict: 'Oversight failure',
              title: 'Fraudulent transfer completed',
              body:
                "The €15,000 transfer completed. Three days later it was confirmed as a fraudulent instruction — the account was created by a social engineering attacker. The AI flagged it correctly at 61% confidence. No human intervened.",
              lesson:
                "A 61% anomaly flag on a large transfer to a 6-day-old account is not a green light. It is a request for human judgement. 'Auto-proceeding' means the system defaulted because no oversight was present — not that it determined the transaction was safe.",
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Investigate',
            sublabel: 'Hold and review the case',
            riskDelta: 10,
            consequence: {
              tone: 'warn',
              verdict: 'Good outcome — slower path',
              title: 'Transfer paused — investigation opened',
              body:
                'You placed a manual hold and reviewed the account. A 6-day-old destination with no prior activity raised concerns. You escalated to the fraud team who confirmed the issue within 40 minutes and blocked the transfer permanently.',
              lesson:
                'Investigating the flag was the right instinct and led to the correct outcome. For transfers of this value to brand-new accounts, direct escalation to the fraud team is faster and more appropriate than an individual operator investigation. Time was the critical variable.',
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Block and Escalate',
            sublabel: 'Stop transfer, alert fraud team',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Threat neutralised',
              title: 'Best response to a live risk signal',
              body:
                "You blocked the transfer immediately and alerted the fraud team. They confirmed the account as fraudulent within 20 minutes and opened a case. The customer was protected and the attacker's method was logged for pattern analysis.",
              lesson:
                'When a risk system flags a large transfer to a brand-new account, the correct response is immediate escalation to the specialist team — not individual investigation. Your role in this moment is to stop the clock, not solve the case.',
            },
          },
        ],
      },
    ],
  },
  'main-output-system-tuning': {
    type: 'systemTuning',
    eyebrow: 'System Tuning Game',
    title: 'Too Much Power',
    description:
      'Adjust two controls — Automation Level and External Access — and watch how efficiency, risk, oversight, and failure probability shift in real time. When ready, simulate a working day and watch the incident feed stream live. Then see what would have happened under three different configurations.',
  },
  'main-output-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-misinformation',
    nextPageId: 'main-excessive-agency',
    caption: 'Section 7 of 12',
    nextLabel: 'Go to Human Oversight →',
  },
  'main-agency-header': {
    type: 'pageHeader',
    eyebrow: 'Section 8 · Excessive Agency and Human Oversight',
    title: 'When the model should not act on its own',
    description:
      'This final output-side page focuses on responsibility, approvals, and the limits of automation when the consequences are meaningful.',
  },
  'main-agency-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'The core question here is not whether the model can assist. It is whether the model is being allowed to act, decide, or trigger consequences without sufficient human approval.',
      'This page should leave learners with a strong sense that high-impact actions still need a clearly accountable human in the loop.',
    ],
  },
  'main-agency-risks': {
    type: 'contentCards',
    eyebrow: 'Oversight',
    title: 'Agency, approvals, and accountability',
    description:
      'This page ties the output-side risks back to supervision, workflow design, and professional responsibility.',
    cards: [
      {
        eyebrow: 'Risk',
        title: 'Excessive agency in connected systems',
        body:
          'Once an LLM can call functions, draft external communications, approve actions, or influence a consequential workflow, the risk is no longer just “bad advice.” It becomes unauthorised or poorly supervised action.',
        bullets: [
          'Functions or tools triggered too freely',
          'Approvals skipped because the model seems helpful',
          'High-impact operations without enough human review',
        ],
      },
      {
        eyebrow: 'Supervision',
        title: 'Human approval as a real control',
        body:
          'Human-in-the-loop should be treated as an operational safeguard, not as a slogan. Approval points need to exist where the cost of being wrong is significant.',
        bullets: [
          'User approval for privileged operations',
          'Explicit review steps before publication or execution',
          'Clear separation between AI support and human decision',
        ],
      },
      {
        eyebrow: 'Responsibility',
        title: 'Who remains accountable',
        body:
          'The page should end with the principle that using AI output or automation does not transfer accountability away from the employee, manager, or organisation that chose to rely on it.',
        bullets: [
          'Responsibility stays with the team using the system',
          'Inaction is also a decision when warning signs exist',
          'Good governance means designing approvals in advance',
        ],
      },
    ],
  },
  'main-agency-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-output-handling',
    nextPageId: 'main-platform-choice',
    caption: 'Section 8 of 12',
    nextLabel: 'Go to Platform Choice →',
  },
  'main-platform-header': {
    type: 'pageHeader',
    eyebrow: 'Section 9 · Platform Choice',
    title: 'Different tools create different governance choices',
    description:
      'This final main-part page compares major LLM platforms only after learners understand why platform differences matter in the first place.',
  },
  'main-platform-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'Platform choice comes at the end on purpose. Once learners understand the input and output risks, they are better positioned to compare tools without treating the section like a product ranking.',
      'The goal is to ask the right governance questions about ChatGPT, Claude, Gemini, and local or internal deployments rather than memorising unstable feature claims.',
    ],
  },
  'main-platforms': {
    type: 'contentCards',
    eyebrow: 'Platform Choice',
    title: 'Compare major LLM platforms without turning the section into a product ad',
    description:
      'Rather than hard-coding fast-changing platform claims, this section can teach learners which questions to ask when comparing ChatGPT, Claude, Gemini, and local or internal deployments.',
    cards: [
      {
        eyebrow: 'Cloud Platform',
        title: 'ChatGPT, Claude, and Gemini',
        body:
          'These tools can be compared through governance questions: where data goes, what admin controls exist, what retention choices are available, and what kinds of integrations or document access they allow.',
        bullets: [
          'What happens to prompts, files, and chats',
          'What organisational controls are available',
          'How enterprise versions differ from public consumer use',
        ],
      },
      {
        eyebrow: 'Private Deployment',
        title: 'Local or internal LLM instances',
        body:
          'Local or internally hosted LLMs shift the trade-offs. They may reduce cloud exposure, but they do not remove the need for supervision, quality checks, or internal access controls.',
        bullets: [
          'Benefits of not uploading data to a public cloud service',
          'Operational cost and maintenance burden',
          'Why “local” does not automatically mean “safe” or “reliable”',
        ],
      },
    ],
  },
  'main-conclusion': {
    type: 'moduleIntro',
    paragraphs: [
      'The conclusion can reinforce one central message: responsible LLM use is not about banning tools. It is about governing inputs, verifying outputs, and choosing tools with a clear understanding of where the data and decision risk sit.',
      'That sets up the post assessment naturally, because the learner has now moved through the exact concepts the second assessment is meant to test.',
    ],
  },
  'main-platform-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-excessive-agency',
    nextPageId: 'post-assessment',
    caption: 'Section 9 of 12',
    nextLabel: 'Go to Post Assessment →',
  },
  'post-header': {
    type: 'pageHeader',
    eyebrow: 'Section 10 · Post Assessment',
    title: 'Post assessment',
    description:
      'The post assessment is a direct copy of the pre assessment so later comparison remains clean and intentional.',
  },
  'post-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'This section mirrors the pre assessment as requested. The point is not a new structure here, but a stable before-and-after comparison.',
    ],
  },
  'post-questions': {
    type: 'assessmentSections',
    stage: 'post',
    sections: POST_ASSESSMENT_SECTIONS,
  },
  'post-feedback': {
    type: 'likertFeedback',
    eyebrow: 'Experience Feedback',
    title: 'Feedback on the overall experience',
    description:
      'Please rate the experience before submitting. These responses are stored anonymously alongside the pre and post assessment outcomes.',
  },
  'post-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-platform-choice',
    nextPageId: 'experience-feedback',
    caption: 'Section 10 of 12',
    nextLabel: 'Go to Feedback →',
  },
  'feedback-header': {
    type: 'pageHeader',
    eyebrow: 'Section 11 · Experience Feedback',
    title: 'Overall qualitative feedback',
    description:
      'After the post assessment, learners can now complete the Likert-scale feedback as a separate final step.',
  },
  'feedback-footer': {
    type: 'navigationFooter',
    previousPageId: 'post-assessment',
    action: 'submitPostFlow',
    caption: 'Section 11 of 12',
    nextLabel: 'Submit Assessment and Feedback',
  },
  'thanks-header': {
    type: 'pageHeader',
    eyebrow: 'Section 12 · Completion',
    title: 'Thank you',
    description:
      'Your post assessment and qualitative feedback have been submitted. Thank you for taking part in the experience.',
  },
  'thanks-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'This final page closes the flow with a clear endpoint instead of leaving the learner on the form itself.',
      'Your responses were stored in anonymised form and can now be used for before-and-after comparison and experience evaluation.',
    ],
  },
  'thanks-callout': {
    type: 'callout',
    variant: 'info',
    icon: '✓',
    title: 'Submission complete',
    body:
      'You can return to the overview to start a fresh session, or simply leave the page. The learning flow is complete.',
  },
  'thanks-footer': {
    type: 'navigationFooter',
    previousPageId: 'experience-feedback',
    action: 'resetAssessment',
    caption: 'Section 12 of 12',
    nextLabel: 'Return to Overview',
  },
};

export const TOTAL_ITEM_COUNT = PRE_ASSESSMENT_ITEM_IDS.length + POST_ASSESSMENT_ITEM_IDS.length;
