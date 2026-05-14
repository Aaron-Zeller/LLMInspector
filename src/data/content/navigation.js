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
    id: 'project-about',
    label: 'About',
    segmentIds: [
      'project-about-header',
      'project-about-intro',
      'project-about-about',
      'project-about-tool',
      'project-about-resources',
    ],
  },
  {
    id: 'project-faq',
    label: 'FAQ',
    segmentIds: ['project-faq-header', 'project-faq'],
  },
  {
    id: 'project-walkthrough',
    label: 'Walkthrough',
    segmentIds: ['project-walkthrough-header', 'project-walkthrough'],
  },
  {
    id: 'project-lesson-plan',
    label: 'Lesson Plan',
    segmentIds: ['project-lesson-plan-header', 'project-lesson-plan'],
  },
  {
    id: 'project-worksheets',
    label: 'Worksheets',
    segmentIds: ['project-worksheets-header', 'project-worksheets'],
  },
  {
    id: 'project-facilitation-guide',
    label: 'Facilitation Guide',
    segmentIds: ['project-facilitation-guide-header', 'project-facilitation-guide'],
  },
  {
    id: 'project-setup',
    label: 'Setup Instructions',
    segmentIds: ['project-setup-header', 'project-setup'],
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
    segmentIds: ['thanks-header', 'thanks-intro', 'thanks-callout', 'thanks-footer'],
  },
];
