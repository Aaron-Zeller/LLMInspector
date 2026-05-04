import { PRE_ASSESSMENT_SECTIONS } from '../assessment-logic.js';

export const preAssessmentSegments = {
  'pre-header': {
    type: 'pageHeader',
    eyebrow: 'Section 1 · Pre Assessment',
    title: 'Pre assessment',
    description:
      'This assessment captures the starting point before the main learning content begins.',
  },
  'pre-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'The pre assessment is intentionally kept stable so it can serve as a clean baseline.',
      'The post assessment mirrors this section exactly, making the before-and-after comparison easier to interpret.',
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
  },
};
