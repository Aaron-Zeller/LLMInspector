export const mainPartSegments = {
  'main-header': {
    type: 'pageHeader',
    eyebrow: 'Section 3 · Core Scenarios',
    title: 'How the core scenarios work',
    description:
      'The next five sections move from input risk to output risk and platform choice. In each one, you first decide what rule a manager should set, then test that judgement in practice.',
  },
  'main-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'You do not need to understand every internal mechanism of a large language model in order to manage its use well. What matters here is not model theory, but practical judgement: what your teams may give the system, what they may trust from it, and where human responsibility must stay visible.',
      'Each scenario in this course is built around a management decision. You first identify the boundary, review gate, or platform rule that should exist. Then you apply that judgement in a short interactive exercise that shows what happens if the rule is weak, missing, or well designed.',
    ],
  },
  'main-domains': {
    type: 'domainGrid',
    title: 'How the core scenarios are organised',
    description:
      'The scenario sequence first separates input and output risk, then works through the major issues one by one before closing with platform choice.',
  },
  'main-footer': {
    type: 'navigationFooter',
    previousPageId: 'pre-assessment',
    nextPageId: 'main-sensitive-disclosure',
    nextLabel: 'Go to Sensitive Information Disclosure →',
  },
};
