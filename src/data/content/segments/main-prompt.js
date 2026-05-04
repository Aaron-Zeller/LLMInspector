export const mainPromptSegments = {
  'main-prompt-header': {
    type: 'pageHeader',
    tone: 'input',
    eyebrow: 'Section 5 · Prompt Injection',
    title: 'Why and how untrusted content can steer the model',
    frame: {
      label: 'Your role in this section',
      body: 'You are deciding what authority external content should have inside a workflow, and where the model must be constrained before it can act further.',
    },
  },
  'main-prompt-outcomes': {
    type: 'contentCards',
    tone: 'input',
    description:
      'This section shows that inputs do not only carry data. They can also carry instructions that influence the model in ways the user never intended. By the end of this section, you will be able to:',
    columns: 2,
    cards: [
      {
        tone: 'input',
        body: 'Explain how documents, websites, or messages can change model behaviour in malicious ways.',
      },
      {
        tone: 'input',
        body: 'Identify the boundaries, constraints, and approval rules that prevent hostile content from gaining authority over the workflow.',
      },
    ],
  },
  'main-prompt-intro': {
    type: 'promptInjectionWalkthrough',
    title: 'Experience the risks firsthand',
    description:
      'This example shows how retrieved content can quietly steer a model unless the workflow sets a clear boundary first.',
    scenarios: [
      {
        role: 'Your Situation',
        headline: 'A team asks the model to browse, retrieve, or summarise content from external websites.',
        context:
          'Automated retrieval feels safe because no one is manually pasting text. In practice, it still brings unchecked external content directly into the model’s instruction stream.',
        riskLabel: 'External Source Risk',
        decisionPrompt:
          'Which approval stance is stronger when a workflow retrieves outside content?',
        decisionOptions: [
          {
            id: 'available-means-safe',
            label: 'Allow automated retrieval if the content is publicly available.',
            feedback:
              'Incorrect. Public availability does not make external content safe from hidden instructions.',
          },
          {
            id: 'external-stays-untrusted',
            label: 'Treat all retrieved content as untrusted and limit its authority.',
            feedback:
              'Correct. Attacker-planted instructions can arrive through automated browsing just as easily as direct uploads.',
            correct: true,
          },
        ],
        analysis: [
          {
            title: 'Summary',
            body: 'Retrieved content enters the model context automatically, so untrusted text can begin steering the answer before anyone notices.',
          },
          {
            title: 'Possible Consequences:',
            body: [
              'Internal summaries can quietly inherit an attacker’s hidden agenda.',
              'Teams may mistake automated retrieval for factual verification.',
              'Managers may act on manipulated material that looked like ordinary source text.',
            ],
          },
          {
            title: 'Questions Before You Approve:',
            body: [
              'What is the workflow assuming about public content that has not actually been checked?',
              'Could this retrieved text influence a sensitive action, recommendation, or downstream tool step?',
            ],
          },
          {
            title: 'Guidelines:',
            body: [
              'Treat all retrieved content as untrusted input, even when it is public.',
              'Constrain what external text can influence before the model’s answer moves further.',
            ],
          },
          {
            title: 'What The Team Should Hear:',
            body: [
              'Public content is still untrusted content.',
              'Keep a human in the loop whenever the output could trigger a sensitive action.',
            ],
          },
        ],
      },
    ],
  },
  'main-prompt-demo': {
    type: 'promptInjectionDemo',
    tone: 'input',
    unlockRequirements: ['main-prompt-intro'],
    eyebrow: 'Interactive Lab',
    title: 'Corrupted Document Walkthrough',
    description:
      'Run the workflow as the approving manager and see how a routine-looking document can push a tool-using agent past the boundary you thought was in place.',
    frame: {
      role: 'You are reviewing an internal AI assistant that can read documents and use real HR tools.',
      watch:
        'The issue is no longer just a bad summary. With tool access, a hidden instruction can trigger real actions.',
      emphasis:
        'The document carries a hidden instruction. Because the model has tool access, it queries data and sends it externally without asking.',
    },
    debrief: {
      eyebrow: 'After the Lab',
      title: 'Self-check questions:',
      items: [
        {
          title: 'Is the content trusted, or merely available?',
          body: 'A file or webpage being present does not mean it is safe to treat as an instruction source.',
        },
        {
          title: 'Can the workflow separate content from authority?',
          body: 'If the workflow does not enforce that boundary, the model may follow attacker text as if it were part of the prompt.',
        },
        {
          title: 'What real actions could follow from a bad output?',
          body: 'The risk grows quickly when the model can query systems, send messages, or trigger automated steps.',
        },
      ],
    },
  },
  'main-prompt-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-sensitive-disclosure',
    nextRequiresCompletion: ['main-prompt-demo'],
    nextPageId: 'main-misinformation',
    nextLabel: 'Go to Misinformation →',
  },
};
