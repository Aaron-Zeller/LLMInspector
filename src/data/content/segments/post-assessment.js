import { POST_ASSESSMENT_SECTIONS } from '../assessment-logic.js';

export const postAssessmentSegments = {
  'post-header': {
    type: 'pageHeader',
    eyebrow: 'Section 10 · Post Assessment',
    title: 'Post Assessment',
    description:
      'Now that you have worked through the teaching content, this assessment captures what has changed. It follows the same five-part structure as the pre-assessment.',
  },
  'post-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'Your answers are saved as you go. Once all five parts are complete, submit the assessment to reveal the solutions, then continue to the feedback page.',
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
    action: 'submitPostAssessment',
    nextPageId: 'experience-feedback',
    nextLabel: 'Submit & Reveal Solutions',
    submittedLabel: 'Go to Feedback →',
  },
};
