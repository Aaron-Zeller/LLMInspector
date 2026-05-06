export const feedbackSegments = {
  'feedback-header': {
    type: 'pageHeader',
    eyebrow: 'Section 11 · Experience Feedback',
    title: 'Overall qualitative feedback',
    description:
      'After the post assessment, rate your experience of the overall learning journey. These responses are stored anonymously alongside your assessment results.',
  },
  'post-feedback': {
    type: 'likertFeedback',
    eyebrow: 'Experience Feedback',
    title: 'Feedback on the overall experience',
    description:
      'Please rate each statement before submitting. These responses are stored anonymously alongside your assessment results.',
  },
  'feedback-footer': {
    type: 'navigationFooter',
    previousPageId: 'post-assessment',
    action: 'submitFeedback',
    nextLabel: 'Submit Feedback',
  },
};
