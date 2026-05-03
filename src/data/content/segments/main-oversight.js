export const mainOversightSegments = {
  'main-agency-header': {
    type: 'pageHeader',
    tone: 'output',
    eyebrow: 'Section 8 · Excessive Agency and Human Oversight',
    title: 'When the model should not act on its own',
    description:
      'This section focuses on responsibility, approvals, and the point where assistance becomes unsafe autonomy.',
    frame: {
      label: 'Your task',
      body: 'Keep meaningful authority outside the model, especially once the workflow can send, approve, or change something real.',
    },
  },
  'main-agency-outcomes': {
    type: 'contentCards',
    tone: 'output',
    eyebrow: 'Your Outcomes',
    title: 'What you should be able to decide before granting an AI system real agency',
    description:
      'This section is about who keeps the steering wheel once the model can do more than generate text.',
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
    eyebrow: 'Worked Examples',
    title: 'Walk through how “helpful automation” becomes unsafe autonomy',
    description:
      'Each case shows what power the system received, where the boundary disappeared, and what supervision rule you should have required first.',
    scenarios: [
      {
        id: 'customer-replies',
        eyebrow: 'Case 1',
        title: 'Customer reply automation',
        meta: 'Client-facing communication',
        role: 'Your Situation',
        headline: 'A support workflow can draft and send customer replies without waiting for an agent.',
        context:
          'The benefit is obvious: faster response times and less queue pressure. The real question is whether a customer-facing system should ever cross the line from drafting to sending on its own.',
        riskLabel: 'Outbound Authority',
        decisionPrompt:
          'Which boundary is stronger when AI is involved in customer messaging?',
        decisionOptions: [
          {
            id: 'auto-send-routine',
            label: 'If the message category is routine, the system can usually send automatically.',
            feedback:
              'That is too permissive. “Routine” is exactly where weak autonomy often gets normalised before anyone notices the wrong message went out.',
          },
          {
            id: 'human-send-gate',
            label: 'Keep AI at the drafting stage and require a human gate before customer messages are actually sent.',
            feedback:
              'This is the stronger move. The productivity benefit stays, but the final outbound action remains attached to a human decision.',
            correct: true,
          },
        ],
        employeeActionTitle: 'The system is not only writing anymore',
        employeeAction:
          'Once the workflow can send the message itself, it has crossed from assistance into agency. The risk is no longer only output quality, but autonomous execution.',
        whyFeelsNormalTitle: 'Why It Gets Approved In The Moment',
        whyFeelsNormal: [
          'The action becomes externally visible immediately',
          'A bad send may create legal, reputational, or service consequences',
          'The workflow no longer pauses naturally for human judgement',
        ],
        legalQuestionTitle: 'The last human interruption disappeared',
        legalQuestion:
          'The workflow assumes the model should handle the final action because it handled the draft well enough. That removes the point where responsibility should still reattach to a person.',
        legalChecksTitle: 'Questions Before You Approve',
        legalChecks: [
          'Helpful drafting becomes permission to act',
          'The team confuses speed with acceptable autonomy',
          'A quiet default can become a strong organisational norm',
        ],
        consequenceTitle: 'The model starts making promises in your name',
        consequence:
          'A mistaken refund promise, wrong tone, or unsupported commitment is no longer an internal draft issue. It becomes a direct relationship and accountability problem with the customer.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'The organisation inherits the message whether it was reviewed or not',
          'A correction later does not undo the first impression',
          'Responsibility remains human even when the send was automated',
        ],
        controlTitle: 'Keep final customer actions behind a human gate',
        control:
          'Customer communication can be accelerated by AI, but the system should still stop before the send, not after the incident.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Let AI draft, summarise, and suggest',
          'Require a human click or sign-off before outbound customer messages',
          'Review autonomy category by category rather than all at once',
        ],
        takeaway:
          'If the message goes out in your organisation’s name, the final send should still belong to a person.',
      },
    ],
  },
  'main-agency-lab': {
    type: 'agencyPermissionLab',
    tone: 'output',
    eyebrow: 'Interactive Lab',
    title: 'Configure the agent before you deploy it',
    description:
      'Your team is deploying an AI agent across three workflows. For each capability, decide how much authority the agent should have before the first run. Then see what happens when those choices are in effect.',
    frame: {
      role: 'You are setting the permission boundary before an internal AI agent goes live across multiple workflows.',
      watch:
        'Pay attention to the moment assistance turns into authority: sending, approving, or changing something real without a person stopping it.',
      emphasis:
        'This lab matters because permission decisions look harmless in the setup screen. Their consequences only become visible once the agent acts at speed.',
    },
    debrief: {
      eyebrow: 'After the Lab',
      title: 'What to carry forward',
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
    caption: 'Section 8 of 12',
    nextLabel: 'Go to Platform Choice →',
  },
};
