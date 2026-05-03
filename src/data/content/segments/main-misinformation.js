export const mainMisinformationSegments = {
  'main-misinformation-header': {
    type: 'pageHeader',
    tone: 'output',
    eyebrow: 'Section 6 · Misinformation and Hallucinations',
    title: 'When confident output is still wrong',
  },
  'main-misinformation-outcomes': {
    type: 'contentCards',
    tone: 'output',
    description: 'This section is about managerial review, not model theory. The aim is to make weak claims visible before they travel.',
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
    title: 'Experience the risks firsthand',
    description:
      'This example shows why the claim feels ready, what the model is actually doing, and what review move you should require before it travels.',
    scenarios: [
      {
        id: 'policy-citation',
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
        analysis: [
          {
            title: 'The surface claim',
            body: 'A calm tone, exact article references, and policy-style wording make the answer feel lower-risk than it really is.',
          },
          {
            title: 'Why It Gets Approved In The Moment',
            body: [
              'Formal tone can mask weak sourcing',
              'Citation formatting signals authority even when the reference is wrong',
              'Managers may trust guidance that sounds careful more than they test it',
            ],
          },
          {
            title: 'The model mechanism',
            body: 'The answer may reproduce the style of a compliance memo without grounding the statement in an actual policy, law, or internal standard.',
          },
          {
            title: 'Questions Before You Approve',
            body: [
              'The citation may be invented or misapplied',
              'The summary may flatten important conditions or exceptions',
              'Internal guidance can drift if the source is never opened',
            ],
          },
          {
            title: 'The organisation starts following a rule that may not exist',
            body: 'If the memo is used as guidance, teams can align around a false requirement or a false permission. That creates governance confusion even before any external problem appears.',
          },
          {
            title: 'What This Costs You',
            body: [
              'Teams may act on a rule that has no real source basis',
              'Later corrections reduce confidence in internal guidance',
              'Escalations become harder once bad guidance has spread',
            ],
          },
          {
            title: 'Require source-opening for policy claims',
            body: 'If a statement sounds like policy, law, or compliance instruction, the underlying source should be opened, read, and attributable before the claim is distributed.',
          },
          {
            title: 'What The Team Should Hear',
            body: [
              'Open the cited source before the memo becomes guidance',
              'Remove legal-looking claims that cannot be traced quickly',
              'Escalate ambiguous policy questions rather than letting AI settle them',
            ],
          },
        ],
      },
    ],
  },
     'main-misinformation-verify': {
    type: 'sourceVerification',
    eyebrow: 'Verification Simulation',
    title: 'Source Verification Simulation',
    description:
      'The claims below come from the analysis above. For each one, decide how you would verify it before using it in a professional document. Select one approach per claim, then submit to see what happens.',
    claims: [
      {
        id: 'cv1',
        text: '"Swiss SMEs have increased AI tool adoption by 34% year-over-year" (World Innovation Institute, Q2 2024)',
        options: [
          {
            id: 'google',
            label: 'Search online',
            icon: '🔍',
            outcome: {
              result: 'dead-link',
              label: 'Dead End',
              tone: 'warn',
              message:
                'No results for the "World Innovation Institute Q2 2024" report. Multiple searches return no relevant results. The report cannot be located — the source appears to be fabricated.',
            },
          },
          {
            id: 'internal',
            label: 'Check internal data',
            icon: '📂',
            outcome: {
              result: 'contradiction',
              label: 'Contradiction Found',
              tone: 'danger',
              message:
                'Your own internal SME survey data from the same period shows a 12% adoption increase — significantly lower than the AI figure. The claim cannot be reconciled with your own data and the original source cannot be located.',
            },
          },
          {
            id: 'ignore',
            label: 'Use it as-is',
            icon: '→',
            outcome: {
              result: 'risk',
              label: 'Risk Accepted',
              tone: 'danger',
              message:
                'The unverified statistic enters the board briefing. When a board member asks for the original report in a follow-up, it cannot be provided. The credibility of the whole analysis is now in question.',
            },
          },
        ],
        bestOptionId: 'google',
        explanation:
          'Searching for the source first costs seconds and immediately exposes the fabrication. A failed search is itself useful information — it tells you the claim is unverifiable before it enters any professional document.',
      },
      {
        id: 'cv2',
        text: '"ChatGPT holds approximately 78% of the enterprise LLM market in Switzerland"',
        options: [
          {
            id: 'google',
            label: 'Search online',
            icon: '🔍',
            outcome: {
              result: 'partial',
              label: 'Partial Result',
              tone: 'warn',
              message:
                'Global AI tool usage data exists, but Switzerland-specific enterprise market share figures at this precision are not published by any credible source. The 78% figure remains unverifiable even after an extensive search.',
            },
          },
          {
            id: 'internal',
            label: 'Check internal data',
            icon: '📂',
            outcome: {
              result: 'validated',
              label: 'Best Approach Here',
              tone: 'success',
              message:
                'Your IT procurement records show the organisation actively uses three different LLM platforms. The claim of near-total single-vendor dominance does not match operational reality, and no external source supports the figure either.',
            },
          },
          {
            id: 'ignore',
            label: 'Use it as-is',
            icon: '→',
            outcome: {
              result: 'risk',
              label: 'Risk Accepted',
              tone: 'danger',
              message:
                'A board member with vendor relationships questions the figure mid-presentation. No source can be provided and the slide is withdrawn from the deck — in front of the full board.',
            },
          },
        ],
        bestOptionId: 'internal',
        explanation:
          'Internal procurement data is a concrete secondary check that does not depend on finding a public source. Combining it with an online search (which shows no credible source) gives a reliable, multi-angle picture.',
      },
      {
        id: 'cv3',
        text: '"The Swiss AI market is projected to reach CHF 8.2 billion by 2026"',
        options: [
          {
            id: 'google',
            label: 'Search online',
            icon: '🔍',
            outcome: {
              result: 'contradiction',
              label: 'Contradiction Found',
              tone: 'warn',
              message:
                'A credible market research firm publishes a Swiss digital economy forecast, but their 2026 projection for AI-related services is CHF 3.1 billion — significantly lower than the AI figure. The discrepancy must be flagged before use.',
            },
          },
          {
            id: 'internal',
            label: 'Check internal data',
            icon: '📂',
            outcome: {
              result: 'not-applicable',
              label: 'Not Applicable',
              tone: 'warn',
              message:
                'Internal data does not cover macro market projections. This approach does not help here — an external market research source is the right check for country-level forecasts.',
            },
          },
          {
            id: 'ignore',
            label: 'Use it as-is',
            icon: '→',
            outcome: {
              result: 'risk',
              label: 'Risk Accepted',
              tone: 'danger',
              message:
                'The figure enters board materials unchecked. A finance director later locates a credible source showing a significantly lower number. The report is revised after distribution and the discrepancy requires explanation.',
            },
          },
        ],
        bestOptionId: 'google',
        explanation:
          'For macro market projections, a credible external source is the right check. Even finding a different number is valuable — it shows the AI figure is inflated or unsupported and gives you something real to use instead.',
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
  },
  'main-misinformation-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-prompt-injection',
    nextPageId: 'main-output-handling',
    nextLabel: 'Go to Improper Output Handling →',
  },
};
