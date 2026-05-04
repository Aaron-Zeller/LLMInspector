import { POST_ASSESSMENT_SECTIONS } from '../assessment-logic.js';

export const postAssessmentSegments = {
  'post-header': {
    type: 'pageHeader',
    eyebrow: 'Section 10 · Post Assessment',
    title: 'Post Assessment',
    description:
      'Now that you have worked through all the teaching content, this assessment measures what has changed. It mirrors the structure of the pre-assessment and adds three applied tasks.',
  },
  'post-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'This assessment has five parts. The first two mirror the pre-assessment so your before-and-after scores can be compared directly. The next two parts ask you to apply what you have learned to realistic tasks. The final part repeats the confidence self-assessment.',
      'Your answers are saved as you go. When you have completed all five parts, use the footer below to continue to the feedback page.',
    ],
  },
  'post-questions': {
    type: 'assessmentSections',
    stage: 'post',
    sections: POST_ASSESSMENT_SECTIONS,
  },
  'post-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-platform-choice',
    nextPageId: 'experience-feedback',
    nextLabel: 'Go to Feedback →',
    caption: 'Post-assessment answers are submitted when you complete the feedback step.',
  },
};
