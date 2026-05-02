export const mainPartSegments = {
  'main-header': {
    type: 'pageHeader',
    eyebrow: 'Section 3 · Main Part',
    title: 'Introduction',
  },
  'main-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'Modern LLM models are built upon decades, if not centuries, of scientific work, so it is a nearly impossible task for a single person to fully grasp all the inner workings of such models. On the bright side, this is a pretty common situation in our modern complex world. A pilot operating an airplane does not need to hold a PhD in aerodynamics, mechanical engineering, and many other disciplines to responsibly operate the vehicle. The same holds true for doctors using MRI machines, and so on.',
      'Throughout this course, we will treat the LLM itself as a "black box" and develop an intuition regarding what to feed into this magical item as input and how to evaluate the results it produces.',
    ],
  },
  'main-footer': {
    type: 'navigationFooter',
    previousPageId: 'pre-assessment',
    nextPageId: 'main-sensitive-disclosure',
    caption: 'Section 3 of 12',
    nextLabel: 'Go to Sensitive Information Disclosure →',
  },
};
