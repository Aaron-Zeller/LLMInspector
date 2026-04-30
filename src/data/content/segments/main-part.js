export const mainPartSegments = {
  'main-header': {
    type: 'pageHeader',
    eyebrow: 'Section 3 · Main Part',
    title: 'Introduction',
  },
  'main-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'Modern LLM models are build upon decades, if not centuries, if scientific work, so it is a near impossible task for a single person to fully grasp all inner workings of such models. On the bright side, it is a pretty common situation in our modern complex world. A pilot operating an airplane doesn’t need to hold a PhD in aerodynamics, mechanical engineering and many other disciplines to responsibly operate the vehicle. Same holds for doctors using MRI machines, and so on. ',
      'During the course of this course we will treat the LLM itself as a a ”black box” and develop an intuition regarding what and how to feed to this magical item as input and how to evaluate the results it produces. ',
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
