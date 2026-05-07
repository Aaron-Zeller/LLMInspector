export const thankYouSegments = {
  'thanks-header': {
    type: 'pageHeader',
    eyebrow: 'Section 12 · Completion',
    title: 'Thank you for participating',
    description:
      'Your assessment and feedback have been submitted successfully. You can now view your results.',
  },
  'thanks-intro': {
    type: 'richModuleIntro',
    paragraphs: [
      'This tool was developed as part of the course <a href="https://peachlab.inf.ethz.ch/teaching/diet2026/" target="_blank" rel="noreferrer">Design in Educational Technology</a> at ETH Zurich. Your participation helps us understand how AI literacy can be taught more effectively in professional settings.',
    ],
  },
  'thanks-callout': {
    type: 'callout',
    variant: 'success',
    icon: '🏆',
    title: 'Assessment Complete',
    body: 'You have completed all sections.',
  },
  'thanks-footer': {
    type: 'navigationFooter',
    previousPageId: 'experience-feedback',
  },
};
