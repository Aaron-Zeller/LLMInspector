import { PRE_ASSESSMENT_SECTIONS } from '../assessment-logic.js';

export const preAssessmentSegments = {
  'pre-header': {
    type: 'pageHeader',
    eyebrow: 'Section 1 · Pre Assessment',
    title: 'Pre assessment',
    description:
      'This is the current assessment in its existing form. For now it stays intact and serves as the baseline before the main teaching content.',
  },
  'pre-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'The pre assessment is intentionally unchanged for now. It captures the learner’s starting point before they move through the revised content structure.',
      'The post assessment will mirror this section exactly so later comparisons stay straightforward.',
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
