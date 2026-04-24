export const mainPromptSegments = {
  'main-prompt-header': {
    type: 'pageHeader',
    eyebrow: 'Section 5 · Prompt Injection',
    title: 'Why untrusted content can steer the model',
    description:
      'After learners understand unsafe data entry, the next step is seeing that inputs can also manipulate the model itself through hidden or indirect instructions.',
  },
  'main-prompt-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'Prompt injection is important here because it shows that the problem is not only what an employee types. A file, webpage, retrieval result, or embedded instruction can alter the behaviour of the model in unintended ways.',
      'This makes the issue more subtle: even a well-meaning employee can expose the system to risk if they treat external content as trustworthy just because it looks normal.',
    ],
  },
  'main-prompt-risks': {
    type: 'contentCards',
    eyebrow: 'Input Side',
    title: 'How prompt injection changes behaviour and access',
    description:
      'This page should help learners see that prompt injection is not a niche technical trick. It is a practical trust-boundary problem whenever models ingest external content.',
    cards: [
      {
        eyebrow: 'Mechanism',
        title: 'Indirect instructions hidden in content',
        body:
          'A retrieved webpage, uploaded PDF, or internal document can contain instructions that the model follows even though the human reader does not notice them. The employee thinks they are summarising content, but the model is also obeying it.',
        bullets: [
          'Hidden instructions in websites or files',
          'Retrieved content that alters the model’s behaviour',
          'Prompt design that is overruled by untrusted content',
        ],
      },
      {
        eyebrow: 'Consequence',
        title: 'What can go wrong',
        body:
          'Once the model is influenced, it may reveal information, ignore guardrails, produce biased or manipulated answers, or trigger downstream actions that should never have happened automatically.',
        bullets: [
          'Disclosure of sensitive information',
          'Manipulated summaries or recommendations',
          'Unsafe actions in connected systems',
        ],
      },
      {
        eyebrow: 'Response',
        title: 'What supervision looks like here',
        body:
          'The practical lesson is to treat external content as untrusted, separate it clearly, limit what the model can do with it, and avoid assuming that a system prompt will reliably override malicious instructions.',
        bullets: [
          'Separate trusted and untrusted content',
          'Limit tool access and downstream actions',
          'Require review for high-risk operations',
        ],
      },
    ],
  },
  'main-prompt-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-sensitive-disclosure',
    nextPageId: 'main-misinformation',
    caption: 'Section 5 of 12',
    nextLabel: 'Go to Misinformation →',
  },
};
