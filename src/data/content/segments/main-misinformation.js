export const mainMisinformationSegments = {
  'main-misinformation-header': {
    type: 'pageHeader',
    tone: 'output',
    eyebrow: 'Section 6 · Misinformation and Hallucinations',
    title: 'When confident output is still wrong',
    description:
      'This section focuses on false facts, unsupported claims, and polished output that looks ready before anyone checks it.',
    frame: {
      label: 'Your task',
      body: 'Decide which claims may travel, which must be checked, and which should stop before they gain authority.',
    },
  },
  'main-misinformation-outcomes': {
    type: 'contentCards',
    tone: 'output',
    eyebrow: 'Your Outcomes',
    title: 'What you should be able to do before approving AI-generated claims',
    description:
      'This section is about managerial review, not model theory. The aim is to make weak claims visible before they travel.',
    columns: 2,
    cards: [
      {
        tone: 'output',
        body: 'Spot when polished language and confident formatting are masking fabricated or unsupported statements.',
      },
      {
        tone: 'output',
        body: 'Apply repeatable verification rules and source-checking thresholds before AI output gains professional authority.',
      },
    ],
  },
  'main-misinformation-hallucinations': {
    type: 'misinformationWalkthrough',
    eyebrow: 'Worked Examples',
    title: 'See how weak claims become “professional” before anyone checks them',
    description:
      'This example shows why the claim feels ready, what the model is actually doing, and what review move you should require before it travels.',
    scenarios: [
      {
        id: 'policy-citation',
        eyebrow: 'Case 1',
        title: 'Policy or legal citation',
        meta: 'Governance and credibility risk',
        role: 'Your Situation',
        headline: 'A management memo includes a clean summary of legal or policy requirements with a confident citation that no one has opened yet.',
        context:
          'The text sounds measured and responsible, so it is tempting to treat it as a useful shortcut. The risk is that a fabricated or misquoted citation can quietly redefine policy expectations.',
        riskLabel: 'Policy Risk',
        decisionPrompt:
          'What is the safer move when an AI-generated memo includes a polished legal or policy citation?',
        decisionOptions: [
          {
            id: 'use-internal',
            label: 'Use the memo internally first and verify the citation only if someone challenges it later.',
            feedback:
              'This gives the claim authority before you know whether it is real. Internal circulation can still change decisions, expectations, and team behaviour.',
          },
          {
            id: 'check-source',
            label: 'Open the underlying source or remove the citation before the memo becomes guidance.',
            feedback:
              'This is the stronger move. Policy statements should not rest on citations that nobody has actually checked.',
            correct: true,
          },
        ],
        employeeActionTitle: 'The surface claim',
        employeeAction:
          'A calm tone, exact article references, and policy-style wording make the answer feel lower-risk than it really is.',
        whyFeelsNormalTitle: 'Why It Gets Approved In The Moment',
        whyFeelsNormal: [
          'Formal tone can mask weak sourcing',
          'Citation formatting signals authority even when the reference is wrong',
          'Managers may trust guidance that sounds careful more than they test it',
        ],
        legalQuestionTitle: 'The model mechanism',
        legalQuestion:
          'The answer may reproduce the style of a compliance memo without grounding the statement in an actual policy, law, or internal standard.',
        legalChecksTitle: 'Questions Before You Approve',
        legalChecks: [
          'The citation may be invented or misapplied',
          'The summary may flatten important conditions or exceptions',
          'Internal guidance can drift if the source is never opened',
        ],
        consequenceTitle: 'The organisation starts following a rule that may not exist',
        consequence:
          'If the memo is used as guidance, teams can align around a false requirement or a false permission. That creates governance confusion even before any external problem appears.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Teams may act on a rule that has no real source basis',
          'Later corrections reduce confidence in internal guidance',
          'Escalations become harder once bad guidance has spread',
        ],
        controlTitle: 'Require source-opening for policy claims',
        control:
          'If a statement sounds like policy, law, or compliance instruction, the underlying source should be opened, read, and attributable before the claim is distributed.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Open the cited source before the memo becomes guidance',
          'Remove legal-looking claims that cannot be traced quickly',
          'Escalate ambiguous policy questions rather than letting AI settle them',
        ],
        takeaway:
          'A policy-sounding answer is still unfit for guidance until someone has checked the actual source.',
      },
    ],
  },
  'main-misinformation-spot': {
    type: 'spotHallucination',
    tone: 'output',
    eyebrow: 'Interactive Lab',
    title: 'Stress-test the analysis before you trust it',
    description:
      'Review the AI-generated market analysis below as if it were about to enter a professional briefing. Mark every phrase you judge to be unreliable, fabricated, or overconfident, then submit your assessment.',
    frame: {
      role: 'You are reviewing a board-facing market analysis before it reaches senior decision-makers.',
      watch:
        'Look for claims that feel authoritative but do not yet have the evidence or source quality required for professional use.',
      emphasis:
        'This first lab is about diagnosis. Your goal is not to prove every sentence false. Your goal is to stop unsupported precision from slipping into a document that others may treat as evidence.',
    },
    debrief: {
      eyebrow: 'After the Lab',
      title: 'What to carry forward',
      items: [
        {
          title: 'What in this answer is factual, and what is only persuasive?',
          body: 'Polished language and strong conclusions should not be treated as evidence on their own.',
        },
        {
          title: 'Which claims need a source before they travel any further?',
          body: 'Statistics, named reports, legal citations, and market projections should trigger verification automatically.',
        },
        {
          title: 'What is the consequence if this claim is wrong?',
          body: 'The higher the operational or reputational impact, the stronger the review should be.',
        },
      ],
    },
    transcriptTitle: 'AI Assistant',
    context:
      'Summarise the latest AI adoption trends in Switzerland for a board briefing. Include relevant statistics and market projections.',
    transcriptLabel: 'AI Summary',
    spans: [
      { id: 'sp1', text: 'According to the ', safe: true },
      {
        id: 'sp2',
        text: "World Innovation Institute's Q2 2024 report",
        safe: false,
        type: 'invented-citation',
        explanation:
          'No such institute or report can be verified. This is a fabricated citation: a named, specific-sounding source that does not exist. Models frequently invent plausible-sounding organisations to add credibility to their output.',
      },
      { id: 'sp3', text: ', Swiss SMEs have increased AI tool adoption by ', safe: true },
      {
        id: 'sp4',
        text: '34% year-over-year',
        safe: false,
        type: 'fabricated-stat',
        explanation:
          'This statistic is unsourced and unverifiable. Specific percentage figures are one of the most common hallucination types. They look precise and authoritative, but are generated without any underlying data.',
      },
      { id: 'sp5', text: '. The report, authored by ', safe: true },
      {
        id: 'sp6',
        text: 'Dr. Miriam Hartley',
        safe: false,
        type: 'invented-person',
        explanation:
          'This name cannot be verified as the author of any such report. AI tools frequently generate plausible-sounding names attached to fabricated publications to lend the appearance of authority.',
      },
      {
        id: 'sp7',
        text: ", specifically highlights Zurich's financial sector as the fastest-growing adopter, with a ",
        safe: true,
      },
      {
        id: 'sp8',
        text: '52% uptake rate',
        safe: false,
        type: 'fabricated-stat',
        explanation:
          'Another unsourced sector-level figure. Adoption statistics of this specificity require verification from official industry surveys or government data. No such survey for the Zurich financial sector has been published.',
      },
      { id: 'sp9', text: '. ChatGPT currently holds ', safe: true },
      {
        id: 'sp10',
        text: 'approximately 78% of the enterprise LLM market in Switzerland',
        safe: false,
        type: 'fabricated-stat',
        explanation:
          'Country-specific AI market share figures at this level of precision are not publicly available from any credible source. The specificity makes the claim look authoritative while having no verifiable basis.',
      },
      { id: 'sp11', text: '. Based on these trends, the Swiss AI market is projected to reach ', safe: true },
      {
        id: 'sp12',
        text: 'CHF 8.2 billion by 2026',
        safe: false,
        type: 'fabricated-stat',
        explanation:
          'A market projection without a source or methodology. The specific figure lends false precision to an unsupported claim. Available third-party forecasts for the Swiss AI market show significantly lower numbers.',
      },
      { id: 'sp13', text: ', representing an ', safe: true },
      {
        id: 'sp14',
        text: 'exceptional investment opportunity',
        safe: false,
        type: 'overconfidence',
        explanation:
          'This is an opinion presented as a conclusion. The model has no basis for making investment judgements, yet the confident framing is designed to close the paragraph persuasively. Overconfident evaluative language like this is a reliable warning sign.',
      },
      { id: 'sp15', text: ' for forward-thinking organisations.', safe: true },
    ],
  },
  'main-misinformation-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-prompt-injection',
    nextPageId: 'main-output-handling',
    caption: 'Section 6 of 12',
    nextLabel: 'Go to Improper Output Handling →',
  },
};
