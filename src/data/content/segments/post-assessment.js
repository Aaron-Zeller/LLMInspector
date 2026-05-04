import { POST_ASSESSMENT_SECTIONS } from '../assessment-logic.js';

export const postAssessmentSegments = {
  'post-header': {
    type: 'pageHeader',
    eyebrow: 'Section 10 · Post Assessment',
    title: 'Post assessment',
    description:
      'The post assessment mirrors the pre assessment so the comparison remains clean and interpretable.',
  },
  'post-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'This section uses the same structure as the pre assessment. The goal is not variety here, but a stable before-and-after comparison.',
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
      'Please rate the experience before submitting. These responses are stored anonymously alongside the pre and post assessment results.',
  },
  'post-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-platform-choice',
    nextPageId: 'experience-feedback',
    nextLabel: 'Go to Feedback →',
  },
};
