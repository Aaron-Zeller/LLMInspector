export const mainSensitiveSegments = {
  'main-sensitive-header': {
    type: 'pageHeader',
    tone: 'input',
    eyebrow: 'Section 4 · Sensitive Information Disclosure',
    title: 'The Input Risk: What never to paste or upload',
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
      'See how a common shortcut creates strategic exposure, and learn the rules needed to protect the organisation.',
    scenarios: [
      {
        id: 'board-deck',
        eyebrow: 'Case 1',
        title: 'Board deck for polishing',
        role: 'Your Situation',
        headline: 'A strategy lead uploads a draft board deck to improve clarity before a meeting.',
        context:
          'The deck contains financial targets and product direction. Without personal data present, the team falsely assumes the risk is zero.',
        tone: 'delegation',
        riskLabel: 'Strategic Exposure & IP',
        employeeActionTitle: 'The shortcut',
        employeeAction:
          'They upload the full presentation to have the model tighten the language and draft an executive summary.',
        whyFeelsNormalTitle: 'Why It Gets Approved In The Moment',
        whyFeelsNormal:
          'It feels harmless because the intent is editing, not disclosure. Yet, the AI still absorbs the strategic IP.',
        decisionPrompt:
          'Which team rule should you normalise?',
        decisionOptions: [
          {
            id: 'full-deck-editing',
            label: 'Allow full-deck uploads if the intent is only language improvement.',
            feedback:
              'Incorrect. This underestimates exposure. The model still absorbs the strategic IP, regardless of intent.',
          },
          {
            id: 'excerpt-rule',
            label: 'Require excerpt-level editing, reserving full documents for approved, secure tools.',
            feedback:
              'Correct. This achieves the business goal while safely maintaining abstraction.',
            correct: true,
          },
        ],
        legalQuestionTitle: 'Why is this a governance and IP issue?',
        legalQuestion:
          'Uploading confidential strategy to unvetted tools can leak intellectual property and invalidate trade secret protections.',
        legalChecksTitle: 'Questions Before You Approve',
        legalChecks: [
          'Is this classified as confidential or trade-secret material?',
          'Is this AI platform explicitly vetted for strategic documents?',
          'Could disclosure harm patents, M&A negotiations, or market position?',
        ],
        consequenceTitle: 'What does the business actually lose?',
        consequence:
          'The damage is strategic and delayed. Exposure can weaken future leverage or surface later in competitor outputs.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Financial assumptions leave their secure context',
          'Unfiled patents may lose trade secret status',
          'Strategy fragments could train public AI models',
        ],
        controlTitle: 'Enforce the abstraction rule',
        control:
          'Require the lowest necessary level of detail: use decontextualised excerpts, or mandate secure enterprise tools for full files.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Use AI only on abstracted, isolated text excerpts',
          'Mandate enterprise-grade instances for confidential files',
          'If data cannot be abstracted safely, escalate to IT',
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
          body: 'If the work can be done using a summary or excerpt, the original sensitive data must stay out.',
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
    caption: 'Section 4 of 12',
    nextLabel: 'Go to Prompt Injection →',
  },
};