import { PRE_ASSESSMENT_SECTIONS } from '../assessment-logic.js';

export const preAssessmentSegments = {
  'pre-header': {
    type: 'pageHeader',
    eyebrow: 'Section 1 · Pre Assessment',
    title: 'Pre Assessment',
    description:
      'Before the teaching content begins, this assessment captures your starting knowledge and confidence. It takes roughly 8–10 minutes.',
  },
  'pre-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'This is a diagnostic, not a test. Your answers are stored anonymously and compared with your post-assessment responses to measure what changed.',
      'Work through each part at your own pace. Answers are saved as you go — you can navigate between parts without losing progress.',
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
    nextLabel: 'Submit & Begin Teaching Content →',
    caption: 'Your pre-assessment answers are submitted anonymously when you continue.',
  },
};
