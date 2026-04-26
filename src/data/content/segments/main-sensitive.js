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
      'In the fast-paced modern workplace, Generative AI tools have become indispensable for efficiency. However, this productivity jump may come with hidden risk: the casual disclosure of sensitive information.',
      'It usually happens in a moment of flow—pasting a customer email for a summary, uploading a spreadsheet for analysis, or sharing a product draft for polishing. It feels productive because the answer comes instantly, but the long-term cost to the organisation can be severe.',
      'The fundamental challenge is that most public AI tools are not "vaults." Unless specifically configured as private enterprise instances, the data you input may be used to train future models or could be accessible to the service provider\'s employees and systems.',
    ],
  },
  'main-sensitive-legal': {
    type: 'moduleIntro',
    paragraphs: [
      'The legal implications of data disclosure to AI tools extend far beyond simple privacy concerns. Organisations must navigate a complex web of regulations and obligations:',
      '• Lawful Processing & GDPR: Under frameworks like the GDPR, organisations must have a lawful basis for processing personal data. Uploading such data to an unapproved third-party AI tool often violates these principles.',
      '• The EU AI Act: Companies are now legally required to ensure that the AI systems they use handle data according to strict transparency and safety standards.',
      '• Contractual & Sectoral Obligations: A casual "copy-paste" can inadvertently breach client contracts or industry-specific laws (like HIPAA or MiFID II).',
      '• Delegation of Risk: One of the greatest organisational risks is allowing data handling decisions to be delegated to individual employees under time pressure without clear guidance.',
    ],
  },
  'main-sensitive-practical': {
    type: 'moduleIntro',
    paragraphs: [
      'Even if legal repercussions weren\'t a factor, the practical business risks are immediate and tangible:',
      '1. Intellectual Property Leakage: Uploading a product design or a novel algorithm before a patent is filed can potentially invalidate that patent. Once information is "publicly" disclosed, it may lose its status as a trade secret.',
      '2. Strategic Exposure: Pasting board decks or internal strategy documents can reveal the company’s future direction to the AI provider, where fragments of your strategy could theoretically surface in outputs for competitors.',
      '3. Breach of Trust: For clients and employees, processing their sensitive data via an unapproved AI tool can lead to a total loss of trust.',
    ],
  },
  'main-sensitive-guidance': {
    type: 'moduleIntro',
    paragraphs: [
      'The goal is not to stop using AI, but to use it responsibly through "safe transformation":',
      '• Minimisation and Abstraction: Extract key points or replace names with placeholders (e.g., "Customer A") instead of pasting entire files.',
      '• Aggregation: Provide high-level summaries rather than granular, identifiable data points.',
      '• Use Approved Internal Tools: Use enterprise-grade AI instances vetted by IT and Legal that guarantee your data will not be used for training.',
      '• The "Escalation" Rule: If a task cannot be completed safely, escalate to a manager or the security team rather than taking the risk.',
      'Sensitive information disclosure is the most immediate "input-side" risk. By moving to intentional, transformed prompting, we can harness AI without compromising our reputation.',
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
