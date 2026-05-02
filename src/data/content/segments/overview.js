export const overviewSegments = {
  'overview-intro': {
    type: 'overviewIntro',
    eyebrow: 'ETH Zurich · AI Literacy Initiative',
    title: 'How AI-literate is your organisation?',
    description:
      'A structured learning experience on what employees put into LLMs, what models give back, and where responsibility stays human.',
    helper:
      'The flow moves from the overview to the pre assessment, into the teaching content, through the post assessment, and ends with a short feedback step.',
    actionLabel: 'Begin assessment',
    nextPageId: 'pre-assessment',
  },
  'overview-domains': {
    type: 'domainGrid',
    title: 'How the website is organised',
    description:
      'The main teaching section first separates input and output risk, then walks through the major problems one by one before ending with platform choice.',
  },
  'overview-callout': {
    type: 'callout',
    variant: 'info',
    icon: 'ℹ',
    title: 'Confidential assessment',
    body:
      'Throughout the experience, “privacy” is treated as input risk and “security” as output risk. On the site, those are framed more clearly as Input Governance and Output Assurance.',
  },
};
