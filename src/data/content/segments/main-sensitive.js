export const mainSensitiveSegments = {
  'main-sensitive-header': {
    type: 'pageHeader',
    tone: 'input',
    eyebrow: 'Section 4 · Sensitive Information Disclosure',
    title: 'The Input Risk: What never to paste or upload to an LLM',
  },
  'main-sensitive-outcomes': {
    type: 'contentCards',
    tone: 'input',
    description: 'This section explores the most immediate security risk of generative AI: employees inadvertently sharing internal, proprietary, or personal data with unvetted models in the pursuit of productivity. By the end of this section, you will be able to:',
    columns: 2,
    cards: [
      {
        tone: 'input',
        body: 'Distinguish between sensitive information and transformed data that can be safely processed by an LLM',
      },
      {
        tone: 'input',
        body: 'Create company-wide workflows that maintain data security without bottlenecking productivity',
      },
    ],
  },
  'main-sensitive-legal': {
    type: 'sensitiveDisclosureWalkthrough',
    title: 'Experience the risks firsthand',
    description:
      'See how a common shortcut creates strategic exposure, and learn the rules to prevent it.',
    scenarios: [
      {
        role: 'Your Situation',
        headline: 'A strategy lead uploads a confidential presentation to an AI to fix typos and improve the writing.',
        context:
          'The presentation contains financial targets and future product plans. Because there are no customer names or passwords in it, the team falsely assumes uploading it is safe.',
        tone: 'delegation',
        riskLabel: 'Strategic Exposure & IP',
        decisionPrompt:
          'How should you proceed?',
        decisionOptions: [
          {
            id: 'full-deck-editing',
            label: 'Allow uploading the full document, as long as the employee only asks for writing help.',
            feedback:
              'Incorrect. The AI model still reads and absorbs your company\'s secret strategy, even if you only asked it to fix grammar.',
          },
          {
            id: 'excerpt-rule',
            label: 'Only allow pasting the specific sentences that need editing. Never upload the full document.',
            feedback:
              'Correct. This gets the writing help you need without handing over the entire company strategy.',
            correct: true,
          },
        ],
        analysis: [
          {
            title: 'The shortcut',
            body: 'Uploading the presentation feels harmless because the employee just wants an editor, not to leak data. But the AI still reads the secret strategy.',
          },
          {
            title: 'Possible consequences:',
            body: [
              'Unfiled patents may lose their legal protection',
              'Secret strategy details could leak into public AI models and be used for training',
            ],
          },
          {
            title: 'Correct way to proceed:',
            body: [
              'Only paste short snippets of text, never entire documents',
              'If you must upload a whole confidential file, use an approved internal AI',
              'If you aren\'t sure if it\'s safe to paste, stop and ask IT',
            ],
          },
        ],
      },
    ],
  },
  'main-sensitive-lab': {
    type: 'governanceLab',
    tone: 'input',
    eyebrow: 'Interactive Lab',
    title: 'The Governance Lab: Input and Output Assurance',
    description:
      'Experience the full LLM task pipeline. Choose which documents to upload, how to phrase your prompt, and how to handle the output. Find the balance: too open leaks data, too restricted makes the task impossible.',
    frame: {
      role: 'You are approving a team workflow for drafting public-facing content under time pressure.',
      watch:
        'Notice where convenience starts widening the input boundary: document choice, prompt design, and the final decision to publish or pause.',
      emphasis:
        'This lab matters because a corporate data leak rarely begins with one dramatic mistake. It begins when an ordinary task quietly normalises an unsecured workflow.',
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
          body: 'Match the AI tier to the data classification (e.g., Public, Internal, Confidential)',
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
    nextPageId: 'main-prompt-injection',
    nextLabel: 'Go to Prompt Injection →',
  },
};