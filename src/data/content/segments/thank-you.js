export const thankYouSegments = {
  'thanks-header': {
    type: 'pageHeader',
    eyebrow: 'Section 12 · Completion',
    title: 'Thank you for participating',
    description:
      'Your assessment and feedback have been submitted successfully. You can now see your results breakdown.',
  },
  'thanks-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'This tool was developed as part of a Design in Educational Technology project at ETH Zurich. Your participation helps us understand how to better teach AI literacy in a professional context.',
    ],
  },
  'thanks-callout': {
    type: 'callout',
    variant: 'success',
    icon: '🏆',
    title: 'Assessment Complete',
    body: 'You have completed all sections. Click below to view your results and recommendations.',
  },
  'thanks-footer': {
    type: 'navigationFooter',
    action: 'viewResults',
    nextLabel: 'View Results →',
    caption: 'Final Step',
  },
};
