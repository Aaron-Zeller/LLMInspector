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
    label: 'Risk Scenarios',
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
      'main-sensitive-outcomes',
      'main-sensitive-legal',
      'main-sensitive-lab',
      'main-sensitive-footer',
    ],
  },
  {
    id: 'main-prompt-injection',
    label: 'Prompt Injection',
    segmentIds: [
      'main-prompt-header',
      'main-prompt-outcomes',
      'main-prompt-intro',
      'main-prompt-demo',
      'main-prompt-footer',
    ],
  },
  {
    id: 'main-misinformation',
    label: 'Misinformation',
    segmentIds: [
      'main-misinformation-header',
      'main-misinformation-outcomes',
      'main-misinformation-hallucinations',
      'main-misinformation-verify',
      'main-misinformation-spot',
      'main-misinformation-footer',
    ],
  },
  {
    id: 'main-output-handling',
    label: 'Output Handling',
    segmentIds: [
      'main-output-header',
      'main-output-outcomes',
      'main-output-workflows',
      'main-output-approve-escalate',
      'main-output-footer',
    ],
  },
  {
    id: 'main-excessive-agency',
    label: 'Human Oversight',
    segmentIds: [
      'main-agency-header',
      'main-agency-outcomes',
      'main-agency-intro',
      'main-agency-lab',
      'main-agency-footer',
    ],
  },
  {
    id: 'main-platform-choice',
    label: 'Platform Choice',
    segmentIds: [
      'main-platform-header',
      'main-platform-outcomes',
      'main-platform-intro',
      'main-platform-cloud',
      'main-platform-close',
      'main-platform-footer',
    ],
  },
  {
    id: 'post-assessment',
    label: 'Post Assessment',
    segmentIds: ['post-header', 'post-questions', 'post-footer'],
  },
  {
    id: 'experience-feedback',
    label: 'Feedback',
    segmentIds: ['feedback-header', 'feedback-questions', 'feedback-footer'],
  },
  {
    id: 'thank-you',
    label: 'Thank You',
    segmentIds: ['thank-you-header', 'thank-you-message'],
  },
];
