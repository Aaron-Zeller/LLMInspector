export const mainSensitiveSegments = {
  'main-sensitive-header': {
    type: 'pageHeader',
    tone: 'input',
    eyebrow: 'Section 1 · Sensitive Information Disclosure',
    title: 'The Input Risk: What never to paste or upload to an LLM',
    frame: {
      label: 'Your role in this section',
      body: 'You are setting the boundary for what your teams may safely share with an LLM, and when a task belongs in a different environment.',
    },
  },
  'main-sensitive-outcomes': {
    type: 'contentCards',
    tone: 'input',
    description:
      'This section addresses the most immediate LLM risk in everyday work: sensitive information being shared with tools that were never meant to receive it. By the end of this section, you will be able to:',
    columns: 2,
    cards: [
      {
        tone: 'input',
        body: 'Distinguish between sensitive information and transformed data that can be processed more safely.',
      },
      {
        tone: 'input',
        body: 'Design workflows that protect data without creating unnecessary friction.',
      },
    ],
  },
  'main-sensitive-legal': {
    type: 'sensitiveDisclosureWalkthrough',
    title: 'Experience the risks firsthand',
    description:
      'See how an ordinary shortcut creates strategic exposure, and what rule prevents it.',
    scenarios: [
      {
        role: 'Your Situation',
        headline: 'A strategy lead uploads a confidential presentation to an AI to fix typos and improve the writing.',
        context:
          'The presentation contains financial targets and future product plans. Because it includes no customer names or passwords, the team assumes it is safe to upload.',
        tone: 'delegation',
        riskLabel: 'Strategic Exposure & IP',
        decisionPrompt:
          'How should you proceed?',
        decisionOptions: [
          {
            id: 'excerpt-rule',
            label: 'Only allow pasting the specific sentences that need editing. Never upload the full document.',
            feedback:
              'Correct. You still get writing support without exposing the full strategy deck.',
            correct: true,
          },
          {
            id: 'full-deck-editing',
            label: 'Allow uploading the full document, as long as the employee only asks for writing help.',
            feedback:
              'Incorrect. The model still receives the full strategy document, even if the request is only to improve the wording.',
          },
        ],
        analysis: [
          {
            title: 'Summary',
            body: 'The shortcut feels harmless because the task is only editorial, but the full deck still exposes company strategy to the model.',
          },
          {
            title: 'Possible Consequences:',
            body: [
              'Unfiled patents and future product plans can leave the approved environment.',
              'Once strategic material is shared externally, legal protection and timing advantages may already be compromised.',
            ],
          },
          {
            title: 'Questions Before You Approve:',
            body: [
              'Does the task really require the full document, or only a short excerpt?',
              'If the full file is required, should the task move into an approved internal environment instead?',
            ],
          },
          {
            title: 'Guidelines:',
            body: [
              'Keep the input as small as possible and share only the exact sentence or paragraph that needs editing.',
              'If the full file is necessary, move the task into an approved internal AI environment.',
            ],
          },
          {
            title: 'What The Team Should Hear:',
            body: [
              'Do not upload full confidential decks just to get writing help.',
              'If the boundary is unclear, pause and ask IT instead of improvising.',
            ],
          },
        ],
      },
    ],
  },
  'main-sensitive-lab': {
    type: 'governanceLab',
    tone: 'input',
    unlockRequirements: ['main-sensitive-legal'],
    eyebrow: 'Interactive Lab',
    title: 'The Governance Lab: Input and Output Assurance',
    description:
      'Work through the full LLM task pipeline. Decide which documents to upload, how to phrase the prompt, and how to handle the output. The challenge is to protect the boundary without making the task impossible.',
    frame: {
      role: 'You are approving a team workflow for drafting public-facing content under time pressure.',
      watch:
        'Notice where convenience starts widening the boundary: document choice, prompt design, and the final decision to publish or pause.',
      emphasis:
        'This lab matters because most data leaks do not begin with one dramatic mistake. They begin when an ordinary task quietly normalises an unsafe workflow.',
    },
    debrief: {
      eyebrow: 'After the Lab',
      title: 'Self-check questions:',
      items: [
        {
          title: 'Is the raw data necessary?',
          body: 'If the work can be done using a summary or snippets, the original sensitive data must stay out.',
        },
        {
          title: 'Is this the right tool for the job?',
          body: 'Match the tool to the data classification, for example Public, Internal, or Confidential.',
        },
        {
          title: 'What is the standard?',
          body: 'Define team rules. If a task cannot be completed safely, employees must escalate rather than improvise.',
        },
      ],
    },
  },
  'main-sensitive-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-part',
    nextRequiresCompletion: ['main-sensitive-lab'],
    nextPageId: 'main-prompt-injection',
    nextLabel: 'Go to Prompt Injection →',
  },
};
