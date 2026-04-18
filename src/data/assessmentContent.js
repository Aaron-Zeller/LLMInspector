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
  { label: 'Core lenses', value: '2' },
  { label: 'Major sections', value: '6' },
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
    id: 'platform-choice',
    overviewLabel: 'Lens 2',
    overviewIcon: '🧭',
    accent: 'privacy',
    label: 'Platform Choice',
    overviewDescription:
      'How ChatGPT, Claude, Gemini, and local or internal deployments should be compared before a team trusts them with work.',
  },
  {
    id: 'output-assurance',
    overviewLabel: 'Lens 3',
    overviewIcon: '⚠️',
    accent: 'delegation',
    label: 'Output Assurance',
    overviewDescription:
      'How teams verify AI outputs, bound consequences, and decide who remains responsible when the model is wrong.',
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
    label: 'Main Part',
    segmentIds: [
      'main-header',
      'main-intro',
      'main-terms',
      'main-case-studies',
      'main-input-consequences',
      'main-platforms',
      'main-simulation',
      'main-output-assurance',
      'main-output-consequences',
      'main-conclusion',
      'main-footer',
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
      'The main teaching section now follows the distinction between what goes into the model, how platforms differ, and how outputs should be evaluated.',
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
    caption: 'Section 2 of 6',
  },
  'main-header': {
    type: 'pageHeader',
    eyebrow: 'Section 3 · Main Part',
    title: 'Input Governance and Output Assurance',
    description:
      'The main part now follows your meeting notes: misconceptions first, then input-side risks, platform choices, supervision ideas, and finally output-side verification and responsibility.',
  },
  'main-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'A useful distinction from the meeting is that one half of the problem is what an employee gives to an LLM, and the other half is what the LLM gives back. “Privacy” and “security” point in that direction, but they can be made more specific.',
      'One option for the site language is to call the input side Input Governance and the output side Output Assurance. That makes the distinction less abstract and more actionable for learners.',
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
          'What kinds of internal data can be entered into an LLM, how much of it should be shared, and what contractual or organisational safeguards need to exist first.',
        bullets: [
          'What happens with uploaded or pasted data',
          'How internal documents should be reduced before prompting',
          'When local or internal tools are preferable to cloud tools',
        ],
      },
      {
        eyebrow: 'Output from the model',
        title: 'Output Assurance',
        body:
          'How employees evaluate AI outputs, detect hallucinations, verify code or recommendations, and decide where human supervision must remain.',
        bullets: [
          'Verification of answers, code, and recommendations',
          'Bounding consequences of inaction or blind trust',
          'Clarifying who remains responsible when the output is wrong',
        ],
      },
    ],
  },
  'main-case-studies': {
    type: 'contentCards',
    eyebrow: 'Start Here',
    title: 'Begin with misconceptions and concrete leakage stories',
    description:
      'The meeting notes suggest starting with case studies so the abstract rules feel real before the framework is introduced.',
    cards: [
      {
        eyebrow: 'Case Study',
        title: 'Internal data pasted into a public chatbot',
        body:
          'An employee pastes product requirements, client information, or board material into a cloud LLM to save time. The task is completed, but the organisation has now lost control over where that content may be stored or processed.',
        bullets: [
          'Why this feels harmless in the moment',
          'Which misconception is driving the behaviour',
          'What should have happened before the prompt was sent',
        ],
      },
      {
        eyebrow: 'Case Study',
        title: 'Prompt injection or hidden instructions in retrieved content',
        body:
          'A user or connected document manipulates the model into revealing information, ignoring rules, or taking unsafe actions. The learner needs to see that access controls and prompt design do not eliminate this risk entirely.',
        bullets: [
          'How other people can influence a model through inputs',
          'Why “the model will follow our instructions” is not enough',
          'What supervision and containment look like in practice',
        ],
      },
    ],
  },
  'main-input-consequences': {
    type: 'contentCards',
    eyebrow: 'Input Side',
    title: 'Input to the model: what can be uploaded, and what can go wrong',
    description:
      'This section can explicitly connect data handling choices to both legal and practical consequences.',
    cards: [
      {
        eyebrow: 'Legal',
        title: 'Consequences of unsafe input',
        body:
          'The legal story is not just “privacy matters.” It is about lawful processing, contractual obligations, sector rules, and the practical meaning of frameworks such as the EU AI Act and data protection law.',
        bullets: [
          'Which kinds of internal data are especially sensitive',
          'How to explain lawful basis and organisational responsibility',
          'Why data handling decisions should not be delegated casually to employees under time pressure',
        ],
      },
      {
        eyebrow: 'Practical',
        title: 'Commercial and operational leakage',
        body:
          'Even when the legal framing is not the first thing a learner cares about, the practical consequences are immediate: leaked product design, exposed strategy, broken confidentiality, and loss of trust.',
        bullets: [
          'Leaking product design before patents',
          'Revealing customer or employee information',
          'Sharing internal planning documents with the wrong system',
        ],
      },
      {
        eyebrow: 'Guidance',
        title: 'Teach employees how to input internal data',
        body:
          'The content should not only forbid behaviour. It should show how to still complete the task with reduced inputs, abstraction, aggregation, or approved internal tools.',
        bullets: [
          'Minimise and transform data before prompting',
          'Use internal or approved enterprise instances where possible',
          'Escalate when the task cannot be completed safely',
        ],
      },
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
  'main-simulation': {
    type: 'contentCards',
    eyebrow: 'Teaching Format',
    title: 'Simulation and supervision ideas from the meeting',
    description:
      'The interactive pieces can be built around an employee still needing to finish the task, not just around catching them doing something wrong.',
    cards: [
      {
        eyebrow: 'Simulation',
        title: 'Employee interaction with an LLM',
        body:
          'Present the learner with input documents, a task description, a chatbot, and several prompts or upload choices. Each decision leads to the next prompt and a running measure of where leakage happened.',
        bullets: [
          'Which documents get uploaded',
          'What prompt gets sent',
          'How much data was leaked by the end of the scenario',
        ],
      },
      {
        eyebrow: 'Supervision',
        title: 'Manager reviews a chain of employee actions',
        body:
          'A second mode can ask a manager to inspect an employee workflow and identify the moment where the process became unsafe, while still keeping the task objective in view.',
        bullets: [
          'Spot the first meaningful mistake',
          'Explain what corrective intervention looks like',
          'Balance productivity with safe process',
        ],
      },
      {
        eyebrow: 'Constraint',
        title: 'Human in the loop',
        body:
          'The challenge is not to block all AI use. It is to preserve supervision while allowing the employee to actually complete the work.',
      },
    ],
  },
  'main-output-assurance': {
    type: 'contentCards',
    eyebrow: 'Output Side',
    title: 'Security as output verification, not just system hardening',
    description:
      'The second half of the content can pivot to the outputs: hallucinations, insecure code, bad recommendations, and what happens when nobody checks them.',
    cards: [
      {
        eyebrow: 'Risk',
        title: 'LLM hallucinations and false confidence',
        body:
          'The learner should understand what can go wrong when an answer looks polished, sourced, or technical but is still fabricated or unsupported.',
        bullets: [
          'Incorrect business recommendations',
          'Invented citations and statistics',
          'Code that appears plausible but does not work',
        ],
      },
      {
        eyebrow: 'Practice',
        title: 'Bounding the consequences of AI output',
        body:
          'Teach the idea of limiting blast radius: sandboxing code, checking claims before publication, and requiring review before high-consequence actions go live.',
        bullets: [
          'Human review before deployment',
          'Verification against trusted sources',
          'Clear escalation when uncertainty remains',
        ],
      },
      {
        eyebrow: 'Responsibility',
        title: 'Who is accountable if the output is wrong?',
        body:
          'This is where legal and organisational responsibility become concrete. The model may produce the output, but people still decide to rely on it or ignore warning signs.',
        bullets: [
          'Human in the loop',
          'Consequences of inaction',
          'Why using AI output does not transfer responsibility away from the team',
        ],
      },
    ],
  },
  'main-output-consequences': {
    type: 'contentCards',
    eyebrow: 'Consequences',
    title: 'Practical and legal consequences of unsafe output use',
    description:
      'The meeting notes point to both compliance questions and concrete engineering consequences.',
    cards: [
      {
        eyebrow: 'Legal',
        title: 'Responsibility and liability',
        body:
          'The content can ask which employee, manager, or organisation remains responsible when AI-generated content is wrong and someone still acts on it.',
      },
      {
        eyebrow: 'Practical',
        title: 'Quality, reliability, and engineering risk',
        body:
          'Unchecked AI output can mean bad code quality in the repository, code that does not run, security vulnerabilities, and broken internal tools.',
      },
      {
        eyebrow: 'Assessment Link',
        title: 'Why the multiple-choice quiz still matters',
        body:
          'The quiz then becomes a compact way to test whether the learner can recognise risk on both the input side and the output side after seeing the richer examples.',
      },
    ],
  },
  'main-conclusion': {
    type: 'moduleIntro',
    paragraphs: [
      'The conclusion can reinforce one central message: responsible LLM use is not about banning tools. It is about governing inputs, choosing the right platform, and verifying outputs before consequences spread.',
      'That sets up the post assessment naturally, because the learner has now moved through the exact concepts the second assessment is meant to test.',
    ],
  },
  'main-footer': {
    type: 'navigationFooter',
    previousPageId: 'pre-assessment',
    nextPageId: 'post-assessment',
    caption: 'Section 3 of 6',
    nextLabel: 'Go to Post Assessment →',
  },
  'post-header': {
    type: 'pageHeader',
    eyebrow: 'Section 4 · Post Assessment',
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
    previousPageId: 'main-part',
    nextPageId: 'experience-feedback',
    caption: 'Section 4 of 6',
    nextLabel: 'Go to Feedback →',
  },
  'feedback-header': {
    type: 'pageHeader',
    eyebrow: 'Section 5 · Experience Feedback',
    title: 'Overall qualitative feedback',
    description:
      'After the post assessment, learners can now complete the Likert-scale feedback as a separate final step.',
  },
  'feedback-footer': {
    type: 'navigationFooter',
    previousPageId: 'post-assessment',
    action: 'submitPostFlow',
    caption: 'Section 5 of 6',
    nextLabel: 'Submit Assessment and Feedback',
  },
  'thanks-header': {
    type: 'pageHeader',
    eyebrow: 'Section 6 · Completion',
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
    caption: 'Section 6 of 6',
    nextLabel: 'Return to Overview',
  },
};

export const TOTAL_ITEM_COUNT = PRE_ASSESSMENT_ITEM_IDS.length + POST_ASSESSMENT_ITEM_IDS.length;
