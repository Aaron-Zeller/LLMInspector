export const mainOversightSegments = {
  'main-agency-header': {
    type: 'pageHeader',
    tone: 'output',
    eyebrow: 'Section 4 · Excessive Agency and Human Oversight',
    title: 'When the model should not act on its own',
  },
  'main-agency-outcomes': {
    type: 'contentCards',
    tone: 'output',
    description:
      'This section asks who stays in control once the model can do more than generate text.',
    columns: 2,
    cards: [
      {
        tone: 'output',
        body: 'Distinguish between useful automation and unsafe autonomy jumps that remove the human gate from a high-impact action.',
      },
      {
        tone: 'output',
        body: 'Design permissions and approval paths that keep accountability attached to a real person or role, even at machine speed.',
      },
    ],
  },
  'main-agency-intro': {
    type: 'agencyWalkthrough',
    title: 'Walk through how “helpful automation” becomes unsafe autonomy',
    description:
      'Each case shows what power the system received, where the boundary disappeared, and what supervision rule should have existed first.',
    scenarios: [
      {
        id: 'customer-replies',
        role: 'Your Situation',
        headline: 'A support workflow can draft and send customer replies without waiting for an agent.',
        context:
          'The benefit is obvious: faster response times and less queue pressure. The real question is whether a customer-facing system should ever move from drafting to sending on its own.',
        riskLabel: 'Outbound Authority',
        decisionPrompt:
          'Which boundary is stronger when AI is involved in customer messaging?',
        decisionOptions: [
          {
            id: 'human-send-gate',
            label: 'Keep AI at the drafting stage and require a human gate before customer messages are actually sent.',
            feedback:
              'This is the stronger move. The productivity benefit stays, but the final outbound action remains attached to a human decision.',
            correct: true,
          },
          {
            id: 'auto-send-routine',
            label: 'If the message category is routine, the system can usually send automatically.',
            feedback:
              'That is too permissive. “Routine” is exactly where weak autonomy often gets normalised before anyone notices the wrong message went out.',
          },
        ],
        analysis: [
          {
            title: 'Summary',
            body: 'Once the workflow can send the message itself, it has crossed from assistance into agency. The risk is no longer only output quality, but autonomous execution.',
          },
          {
            title: 'Possible Consequences:',
            body: [
              'A wrong send can create legal, reputational, or service consequences immediately.',
              'The first visible customer interaction may happen before any person has applied judgement.',
              'Responsibility still lands on the organisation even when the outward action was automated.',
            ],
          },
          {
            title: 'Questions Before You Approve:',
            body: [
              'Has helpful drafting quietly turned into permission to act on the organisation’s behalf?',
              'What outward action still deserves a human pause before impact?',
            ],
          },
          {
            title: 'Guidelines:',
            body: [
              'Keep final customer actions behind a human gate even when AI accelerates the drafting step.',
              'Review autonomy category by category rather than granting broad permissions at once.',
            ],
          },
          {
            title: 'What The Team Should Hear:',
            body: [
              'Let AI draft, summarise, and suggest before any outward action occurs.',
              'Require a human click or sign-off before outbound customer messages are sent.',
            ],
          },
        ],
      },
    ],
  },
  'main-agency-lab': {
    type: 'agencyPermissionLab',
    tone: 'output',
    eyebrow: 'Interactive Lab',
    title: 'Configure the agent before you deploy it',
    description:
      'Your team is deploying an AI agent across three workflows. For each capability, decide how much authority the agent should receive before the first run, then see what those choices produce in practice.',
    frame: {
      role: 'You are setting the permission boundary before an internal AI agent goes live across multiple workflows.',
      watch:
        'Pay attention to the moment assistance turns into authority: sending, approving, or changing something real without a person stopping it.',
      emphasis:
        'This lab matters because permission decisions often look harmless in the setup screen. Their consequences only become visible once the agent starts acting at speed.',
    },
    debrief: {
      eyebrow: 'After the Lab',
      title: 'Self-check questions:',
      items: [
        {
          title: 'Has assistance quietly become authority?',
          body: 'A workflow may start as drafting support and gradually turn into autonomous sending, approving, or writing if no one redraws the boundary.',
        },
        {
          title: 'What must pause for a person?',
          body: 'Money, customer commitments, live system changes, and irreversible writes usually deserve a checkpoint outside the model.',
        },
        {
          title: 'Who remains accountable after the action?',
          body: 'The model never inherits responsibility. If the action has a real consequence, the workflow should still point clearly to a human role.',
        },
      ],
    },
  },
  'main-agency-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-output-handling',
    nextPageId: 'main-platform-choice',
    nextLabel: 'Go to Platform Choice →',
  },
};
