export const mainSensitiveSegments = {
  'main-sensitive-header': {
    type: 'pageHeader',
    eyebrow: 'Section 4 · Sensitive Information Disclosure',
    title: 'What should never be pasted or uploaded casually',
    description:
      'This page introduces the most immediate input-side risk: employees sharing internal or personal data with an LLM before deciding whether the tool and the data are appropriate.',
  },
  'main-sensitive-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'Sensitive information disclosure is often the first mistake because it feels productive in the moment. A spreadsheet, board deck, customer email, or product draft gets pasted into a model because the employee wants a faster answer.',
      'The learning goal here is not only to say “do not upload sensitive data.” It is to teach how to reduce, transform, aggregate, or withhold information while still completing the task.',
    ],
  },
  'main-sensitive-legal': {
    type: 'moduleIntro',
    paragraphs: [
      'The legal story is not just “privacy matters.” It is about lawful processing, contractual obligations, sector rules, and the practical meaning of frameworks such as the EU AI Act and data protection law.',
      'Key considerations include:',
      '• Which kinds of internal data are especially sensitive',
      '• How to explain lawful basis and organisational responsibility',
      '• Why data handling decisions should not be delegated casually to employees under time pressure',
    ],
  },
  'main-sensitive-practical': {
    type: 'moduleIntro',
    paragraphs: [
      'Even when the legal framing is not the first thing a learner cares about, the practical consequences are immediate: leaked product design, exposed strategy, broken confidentiality, and loss of trust.',
      'Practical risks include:',
      '• Leaking product design before patents',
      '• Revealing customer or employee information',
      '• Sharing internal planning documents with the wrong system',
    ],
  },
  'main-sensitive-guidance': {
    type: 'moduleIntro',
    paragraphs: [
      'The content should not only forbid behaviour. It should show how to still complete the task with reduced inputs, abstraction, aggregation, or approved internal tools.',
      'Responsible practices:',
      '• Minimise and transform data before prompting',
      '• Use internal or approved enterprise instances where possible',
      '• Escalate when the task cannot be completed safely',
    ],
  },
  'main-sensitive-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-part',
    nextPageId: 'main-prompt-injection',
    caption: 'Section 4 of 12',
    nextLabel: 'Go to Prompt Injection →',
  },
};
