export const mainOversightSegments = {
  'main-agency-header': {
    type: 'pageHeader',
    eyebrow: 'Section 8 · Excessive Agency and Human Oversight',
    title: 'When the model should not act on its own',
    description:
      'This final output-side page focuses on responsibility, approvals, and the limits of automation when the consequences are meaningful.',
  },
  'main-agency-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'Up until now, we have discussed the risks of the model giving us bad information. But the risk profile of Generative AI shifts entirely when the model is granted "agency"—the ability to independently act, decide, or trigger external events.',
      'The core question here is not whether the model can assist us, but whether it is allowed to execute actions without sufficient human approval. Once an AI is integrated with system tools—given the ability to execute code, send emails, alter database records, or initiate transactions—we are no longer just dealing with bad advice. We are dealing with an automated system that has its hands on the steering wheel.',
      'Without rigorous supervision, granting an AI excessive agency can lead to actions that directly impact clients, budgets, and operational stability. The danger arises when approvals are skipped because the model seems helpful, or because engineers want to build completely "frictionless" automated pipelines.',
    ],
  },
  'main-agency-risks': {
    type: 'moduleIntro',
    paragraphs: [
      'When an AI system takes action without a human in the loop, the consequences are immediate and tangible:',
      '1. Unsanctioned Operations: An autonomous agent tasked with optimizing cloud infrastructure might unexpectedly delete active servers, or an AI managing supply chain orders might execute massive, unauthorized financial purchases based on a hallucinated market trend.',
      '2. Cascading System Failures: Because AI agents operate at machine speed, a flawed decision can trigger a domino effect across interconnected APIs before a human even realizes an error has occurred.',
      '3. Automated Client Friction: An AI given access to customer support channels might automatically send inappropriate replies, issue unapproved refunds, or make legally binding promises to clients without human consent.',
      'The ultimate rule of AI integration is that automation does not transfer accountability. Whether it is an individual employee or the organisation as a whole, the responsibility for the outcome stays with those who chose to rely on the system.',
    ],
  },
  'main-agency-supervision': {
    type: 'moduleIntro',
    paragraphs: [
      'To prevent these failures, “human-in-the-loop" must be treated as a hardcoded operational safeguard, not just a corporate slogan:',
      '• Design Intentional Friction: High-impact operations—such as financial transfers, data deletion, or public communications—must require a cryptographic or physical human approval step (e.g., clicking "Approve Action") before the AI can proceed.',
      '• Implement Granular Permissions: If an AI model needs access to internal tools, operate on the principle of least privilege. Give the model read-only access where possible, and strictly limit its write/execute capabilities.',
      '• Monitor "Agentic" Workflows: Set up alerting systems that notify human operators whenever an AI attempts to perform an action outside of its expected, narrowly defined parameters.',
      '• Acknowledge Warning Signs: Inaction is also a decision. If an automated workflow shows signs of erratic behavior or hallucination, it must be paused immediately. Good governance means ensuring that responsibility is never accidentally delegated to a "black box."',
    ],
  },
  'main-agency-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-output-handling',
    nextPageId: 'main-platform-choice',
    caption: 'Section 8 of 12',
    nextLabel: 'Go to Platform Choice →',
  },
};
