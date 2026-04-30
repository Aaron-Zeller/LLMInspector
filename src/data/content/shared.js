export const makeQuestion = (config) => ({
  type: 'question',
  ...config,
});

export const makeScenario = (config) => ({
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
