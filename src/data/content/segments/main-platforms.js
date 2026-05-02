export const mainPlatformSegments = {
  'main-platform-header': {
    type: 'pageHeader',
    eyebrow: 'Section 9 · Platform Choice',
    title: 'Different tools create different governance choices',
    description:
      'This final main-part page compares major LLM platforms only after learners understand why platform differences matter in the first place.',
  },
  'main-platform-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'Platform choice comes at the end on purpose. Once learners understand the input and output risks, they are better positioned to compare tools without treating the section like a product ranking.',
      'The goal is to ask the right governance questions about ChatGPT, Claude, Gemini, and local or internal deployments rather than memorising unstable feature claims.',
    ],
  },
  'main-platforms': {
    type: 'contentCards',
    eyebrow: 'Platform Choice',
    title: 'Compare major LLM platforms without turning the section into a product ad',
    description:
      'Rather than hard-coding fast-changing platform claims, this section can teach learners which questions to ask when comparing ChatGPT, Claude, Gemini, and local or internal deployments.',
    cards: [
      {
        eyebrow: 'Cloud Platform',
        title: 'ChatGPT, Claude, and Gemini',
        body:
          'These tools can be compared through governance questions: where data goes, what admin controls exist, what retention choices are available, and what kinds of integrations or document access they allow.',
        bullets: [
          'What happens to prompts, files, and chats',
          'What organisational controls are available',
          'How enterprise versions differ from public consumer use',
        ],
      },
      {
        eyebrow: 'Private Deployment',
        title: 'Local or internal LLM instances',
        body:
          'Local or internally hosted LLMs shift the trade-offs. They may reduce cloud exposure, but they do not remove the need for supervision, quality checks, or internal access controls.',
        bullets: [
          'Benefits of not uploading data to a public cloud service',
          'Operational cost and maintenance burden',
          'Why “local” does not automatically mean “safe” or “reliable”',
        ],
      },
    ],
  },
  'main-conclusion': {
    type: 'moduleIntro',
    paragraphs: [
      'The conclusion can reinforce one central message: responsible LLM use is not about banning tools. It is about governing inputs, verifying outputs, and choosing tools with a clear understanding of where the data and decision risk sit.',
      'That sets up the post assessment naturally, because the learner has now moved through the exact concepts the second assessment is meant to test.',
    ],
  },
  'main-platform-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-excessive-agency',
    nextPageId: 'post-assessment',
    caption: 'Section 9 of 12',
    nextLabel: 'Go to Post Assessment →',
  },
};
