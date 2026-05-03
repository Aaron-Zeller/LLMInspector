export const mainPromptSegments = {
  'main-prompt-header': {
    type: 'pageHeader',
    tone: 'input',
    eyebrow: 'Section 5 · Prompt Injection',
    title: 'Why and how untrusted content can steer the model',
  },
  'main-prompt-outcomes': {
    type: 'contentCards',
    tone: 'input',
    description:
      'Now we will see that inputs can also manipulate the model itself through hidden or indirect instructions. By the end of this section, you will be able to:',
    columns: 2,
    cards: [
      {
        tone: 'input',
        body: 'Explain how documents, websites, or messages can change model behaviour in a malicious way',
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
      'This example shows how retrieved content can quietly steer a model unless you set a strict boundary first.',
    scenarios: [
      {
        role: 'Your Situation',
        headline: 'A team asks the model to browse, retrieve, or summarise content from external websites.',
        context:
          'Automated retrieval feels safe because the user isn\'t manually pasting text. However, it imports unchecked external text directly into the model’s instruction stream.',
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
            title: 'The Hidden Input',
            body: 'External text enters the model context automatically, bypassing any human review.',
          },
          {
            title: 'Possible consequences:',
            body: [
              'Internal answers inherit an attacker\'s hidden agenda',
              'Teams mistake automated retrieval for factual verification',
              'Decisions are made based on manipulated data',
            ],
          },
          {
            title: 'How to proceed?',
            body: [
              'Treat all external retrieval as untrusted input',
              'Limit what retrieved content can influence and require human checks before taking action.',
              'Maintain a human-in-the-loop for sensitive uses',
            ],
          },
        ],
      },
    ],
  },
  'main-prompt-demo': {
    type: 'promptInjectionDemo',
    tone: 'input',
    eyebrow: 'Interactive Lab',
    title: 'Corrupted Document Walkthrough',
    description:
      'Run the workflow as the approving manager and watch how a routine-looking document can steer a tool-using agent past the boundary you thought was in place.',
    frame: {
      role: 'You are reviewing an internal AI assistant that can read documents and use real HR tools.',
      watch:
        'The issue is no longer just a bad summary. A hidden instruction can trigger real actions if the model has tool access.',
      emphasis:
        'The document carries a hidden instruction. Because the model has tool access, it queries data and sends it out without asking.',
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
    nextPageId: 'main-misinformation',
    nextLabel: 'Go to Misinformation →',
  },
};
