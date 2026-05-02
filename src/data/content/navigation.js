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
      'main-sensitive-legal',
      'main-sensitive-practical',
      'main-sensitive-guidance',
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
      'main-prompt-demo',
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
