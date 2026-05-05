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
    label: 'Core Scenarios',
    pageIds: [
      'main-sensitive-disclosure',
      'main-prompt-injection',
      'main-misinformation',
      'main-output-handling',
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
    segmentIds: ['overview-intro'],
  },
  {
    id: 'pre-assessment',
    label: 'Pre Assessment',
    segmentIds: ['pre-header', 'pre-intro', 'pre-questions', 'pre-footer'],
  },
  {
    id: 'main-part',
    label: 'Lens Split',
    segmentIds: ['main-header', 'main-intro', 'main-domains', 'main-footer'],
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
      'main-prompt-mechanism',
      'main-prompt-risks',
      'main-prompt-supervision',
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
    label: 'Excessive Agency and Human Oversight',
    segmentIds: [
      'main-output-header',
      'main-output-outcomes',
      'main-output-workflows',
      'main-output-bridge',
      'main-agency-intro',
      'main-output-approve-escalate',
      'main-output-footer',
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
    segmentIds: ['thank-you-header', 'thank-you-message'],
  },
];
