import { makeQuestion, makeScenario } from './shared.js';

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

export const ASSESSMENT_ITEM_ORDER = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'd1', 'q7', 'd2', 'q8', 'sim1', 'sim2', 'q9'];

export const TOTAL_ITEM_COUNT = ASSESSMENT_ITEM_ORDER.length;
