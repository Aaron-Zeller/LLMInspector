import { POST_ASSESSMENT_SECTIONS } from '../assessment-logic.js';

export const postAssessmentSegments = {
  'post-header': {
    type: 'pageHeader',
    eyebrow: 'Section 10 · Post Assessment',
    title: 'Post assessment',
    description:
      'The post assessment is a direct copy of the pre assessment so later comparison remains clean and intentional.',
  },
  'post-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'This section mirrors the pre assessment as requested. The point is not a new structure here, but a stable before-and-after comparison.',
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
      'Please rate the experience before submitting. These responses are stored anonymously alongside the pre and post assessment outcomes.',
  },
  'post-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-platform-choice',
    nextPageId: 'experience-feedback',
    caption: 'Section 10 of 12',
    nextLabel: 'Go to Feedback →',
  },
};
