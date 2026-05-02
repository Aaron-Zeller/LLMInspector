export const mainOversightSegments = {
  'main-agency-header': {
    type: 'pageHeader',
    eyebrow: 'Section 8 · Excessive Agency and Human Oversight',
    title: 'When the model should not act on its own',
    description:
      'This final output-side page focuses on responsibility, approvals, and the limits of automation when the consequences are meaningful.',
  },
  'main-agency-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'The core question here is not whether the model can assist. It is whether the model is being allowed to act, decide, or trigger consequences without sufficient human approval.',
      'This page should leave learners with a strong sense that high-impact actions still need a clearly accountable human in the loop.',
    ],
  },
  'main-agency-risks': {
    type: 'contentCards',
    eyebrow: 'Oversight',
    title: 'Agency, approvals, and accountability',
    description:
      'This page ties the output-side risks back to supervision, workflow design, and professional responsibility.',
    cards: [
      {
        eyebrow: 'Risk',
        title: 'Excessive agency in connected systems',
        body:
          'Once an LLM can call functions, draft external communications, approve actions, or influence a consequential workflow, the risk is no longer just “bad advice.” It becomes unauthorised or poorly supervised action.',
        bullets: [
          'Functions or tools triggered too freely',
          'Approvals skipped because the model seems helpful',
          'High-impact operations without enough human review',
        ],
      },
      {
        eyebrow: 'Supervision',
        title: 'Human approval as a real control',
        body:
          'Human-in-the-loop should be treated as an operational safeguard, not as a slogan. Approval points need to exist where the cost of being wrong is significant.',
        bullets: [
          'User approval for privileged operations',
          'Explicit review steps before publication or execution',
          'Clear separation between AI support and human decision',
        ],
      },
      {
        eyebrow: 'Responsibility',
        title: 'Who remains accountable',
        body:
          'The page should end with the principle that using AI output or automation does not transfer accountability away from the employee, manager, or organisation that chose to rely on it.',
        bullets: [
          'Responsibility stays with the team using the system',
          'Inaction is also a decision when warning signs exist',
          'Good governance means designing approvals in advance',
        ],
      },
    ],
  },
  'main-agency-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-output-handling',
    nextPageId: 'main-platform-choice',
    caption: 'Section 8 of 12',
    nextLabel: 'Go to Platform Choice →',
  },
};
