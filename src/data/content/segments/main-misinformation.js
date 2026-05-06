export const mainMisinformationSegments = {
  'main-misinformation-header': {
    type: 'pageHeader',
    tone: 'output',
    eyebrow: 'Section 3 · Misinformation and Hallucinations',
    title: 'When confident output is still wrong',
    frame: {
      label: 'Your role in this section',
      body: 'You are reviewing AI-generated claims before they influence reports, guidance, or decisions that others may treat as evidence.',
    },
  },
  'main-misinformation-outcomes': {
    type: 'contentCards',
    tone: 'output',
    description:
      'This section is about review standards, not model theory. The goal is to catch weak claims before they gain authority.',
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
      'This example shows why the claim feels ready, what the model is actually doing, and what review move should be required before it travels.',
    scenarios: [
      {
        id: 'policy-citation',
        role: 'Your Situation',
        headline: 'A management memo includes a clean summary of legal or policy requirements with a confident citation that no one has opened yet.',
        context:
          'The text sounds measured and responsible, so it is tempting to treat it as a useful shortcut. The risk is that a fabricated or misquoted citation quietly reshapes policy expectations.',
        riskLabel: 'Policy Risk',
        decisionPrompt:
          'What is the safer move when an AI-generated memo includes a polished legal or policy citation?',
        decisionOptions: [
          {
            id: 'check-source',
            label: 'Open the underlying source or remove the citation before the memo becomes guidance.',
            feedback:
              'This is the stronger move. Policy statements should not rest on citations that nobody has actually checked.',
            correct: true,
          },
          {
            id: 'use-internal',
            label: 'Use the memo internally first and verify the citation only if someone challenges it later.',
            feedback:
              'This gives the claim authority before you know whether it is real. Internal circulation can still change decisions, expectations, and team behaviour.',
          },
        ],
        analysis: [
          {
            title: 'Summary',
            body: 'A calm tone, exact article references, and policy-style wording can make a weak claim feel far more reliable than it actually is.',
          },
          {
            title: 'Possible Consequences:',
            body: [
              'Teams can align around a rule that does not exist or does not apply to the situation.',
              'Later corrections weaken trust in internal guidance and review standards.',
              'Escalation and cleanup get harder once the weak guidance has already spread.',
            ],
          },
          {
            title: 'Questions Before You Approve:',
            body: [
              'Has anyone opened the underlying source, or are we trusting the citation format alone?',
              'Could the summary be flattening exceptions, conditions, or context that matter to the decision?',
            ],
          },
          {
            title: 'Guidelines:',
            body: [
              'If a statement sounds like policy, law, or compliance instruction, the underlying source should be opened and checked before distribution.',
              'Remove legal-looking claims that cannot be traced quickly to a real source.',
            ],
          },
          {
            title: 'What The Team Should Hear:',
            body: [
              'Open the cited source before the memo becomes guidance.',
              'Escalate ambiguous policy questions rather than letting AI settle them by default.',
            ],
          },
        ],
      },
    ],
  },
  'main-misinformation-verify': {
    type: 'sourceVerification',
    tone: 'output',
    unlockRequirements: ['main-misinformation-hallucinations'],
    eyebrow: 'Verification Simulation',
    title: 'Source Verification Simulation',
    description:
      'For each of the below claims, decide whether it should be externally verified, internally narrowed, or removed before it enters a professional document.',
    brief: {
      eyebrow: 'Verification Lens',
      prompt: 'Do not ask only, “Can I verify this?” Ask what should happen to the claim right now.',
      points: [
        'Match the check to the type of claim: internal evidence for internal facts, external evidence for external market claims.',
        'If the source cannot be found or the number cannot be supported, remove or replace the claim instead of preserving it.',
        'The higher the consequence of being wrong, the less unsupported precision should be allowed to travel.',
      ],
    },
    claims: [
      {
        id: 'cv1',
        text: '"Swiss SMEs have increased AI tool adoption by 34% year-over-year" (World Innovation Institute, Q2 2024)',
        moveLabel: 'Decide whether this claim should be verified, narrowed, or removed.',
        options: [
          {
            id: 'google',
            title: 'Check source existence',
            detail: 'If the report cannot be found, remove the statistic.',
            icon: '🔍',
            outcome: {
              result: 'dead-link',
              label: 'Strongest Move Here',
              tone: 'success',
              message:
                'No results for the "World Innovation Institute Q2 2024" report. Multiple searches return no relevant results. The named source cannot be located, so the statistic should not stay in the document.',
            },
          },
          {
            id: 'internal',
            title: 'Cross-check internally',
            detail: 'Use internal survey data only to test whether the direction seems plausible.',
            icon: '📂',
            outcome: {
              result: 'contradiction',
              label: 'Useful But Weaker',
              tone: 'warn',
              message:
                'Internal data does expose a contradiction, but it is still the wrong first move for a named external source. The fabrication problem remains: the cited report itself cannot be located.',
            },
          },
          {
            id: 'ignore',
            title: 'Leave it in',
            detail: 'Keep the claim unless someone later asks for the source.',
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
          'When a claim names a report and a precise figure, first verify that the source exists at all. If the source cannot be located quickly, the claim should be removed rather than defended with other evidence.',
      },
      {
        id: 'cv2',
        text: '"ChatGPT holds approximately 78% of the enterprise LLM market in Switzerland"',
        moveLabel: 'Decide whether this market claim should be externally verified, internally reframed, or dropped.',
        options: [
          {
            id: 'google',
            title: 'Check external evidence',
            detail: 'If no credible Swiss market-share source exists, remove or replace the figure.',
            icon: '🔍',
            outcome: {
              result: 'strongest',
              label: 'Strongest Move Here',
              tone: 'success',
              message:
                'No credible Swiss enterprise market-share source supports the 78% claim. That means the number should not stay in the document unless it can be replaced with something defensible.',
            },
          },
          {
            id: 'internal',
            title: 'Narrow it internally',
            detail: 'Use internal usage data to replace the claim with a narrower internal observation.',
            icon: '📂',
            outcome: {
              result: 'useful-next-step',
              label: 'Useful Next Step',
              tone: 'warn',
              message:
                'Your IT procurement records show that the organisation actively uses several LLM platforms. That helps you replace the original claim, but it is still a second step after establishing that no credible external source supports the 78% figure.',
            },
          },
          {
            id: 'ignore',
            title: 'Keep it as context',
            detail: 'Leave the 78% figure in place even without a clean source.',
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
        bestOptionId: 'google',
        explanation:
          'For an external market-share claim, the first question is whether a credible external source exists at all. If it does not, remove the figure or replace it with a narrower internal observation you can actually support.',
      },
      {
        id: 'cv3',
        text: '"The Swiss AI market is projected to reach CHF 8.2 billion by 2026"',
        moveLabel: 'Decide whether this forecast should be externally checked, internally reworked, or removed.',
        options: [
          {
            id: 'google',
            title: 'Check the forecast',
            detail: 'Use a credible external forecast and replace or remove the number if it does not match.',
            icon: '🔍',
            outcome: {
              result: 'contradiction',
              label: 'Strongest Move Here',
              tone: 'success',
              message:
                'A credible market research firm publishes a Swiss digital economy forecast, but their 2026 projection for AI-related services is CHF 3.1 billion — significantly lower than the AI figure. The 8.2 billion number should be replaced or removed before use.',
            },
          },
          {
            id: 'internal',
            title: 'Use internal data',
            detail: 'Try to support the national forecast with internal business information.',
            icon: '📂',
            outcome: {
              result: 'not-applicable',
              label: 'Wrong Source Type',
              tone: 'warn',
              message:
                'Internal data may help with your own pipeline or revenue, but it does not validate a country-level market forecast. This claim needs an external forecast source, not an internal substitute.',
            },
          },
          {
            id: 'ignore',
            title: 'Keep it for now',
            detail: 'Leave the projection in place and add a source later if needed.',
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
          'Macro market projections require credible external forecasting sources. If the external number does not support the AI claim, replace or remove the claim instead of letting unsupported precision stay in the deck.',
      },
    ],
    debrief: {
      eyebrow: 'After the Lab',
      title: 'Self-check questions:',
      items: [
        {
          title: 'What type of source should this claim depend on?',
          body: 'Use internal evidence for internal facts, and independent external evidence for market, policy, or regulatory claims.',
        },
        {
          title: 'Should this claim be verified, replaced, or removed?',
          body: 'If the source cannot be located or the number cannot be supported, the default should not be to keep the claim.',
        },
        {
          title: 'How costly would this claim be if it stayed wrong?',
          body: 'The stronger the consequence, the less unsupported precision should be allowed to travel.',
        },
      ],
    },
  },
  'main-misinformation-spot': {
    type: 'spotHallucination',
    tone: 'output',
    unlockRequirements: ['main-misinformation-hallucinations'],
    eyebrow: 'Interactive Lab',
    title: 'Stress-test the analysis before you trust it',
    description:
      'Review the AI-generated market analysis below as if it were about to enter a professional briefing. Mark every phrase you judge to be unreliable, fabricated, or overconfident, then submit your assessment.',
    frame: {
      role: 'You are reviewing a board-facing market analysis before it reaches senior decision-makers.',
      watch:
        'Look for claims that feel authoritative but do not yet have the evidence or source quality required for professional use.',
      emphasis:
        'This first lab is about diagnosis. Your goal is not to prove every sentence false. Your goal is to stop unsupported precision from slipping into a document that others may mistake for evidence.',
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
      title: 'Self-check questions:',
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
    nextRequiresCompletion: ['main-misinformation-verify', 'main-misinformation-spot'],
    nextPageId: 'main-output-handling',
    nextLabel: 'Go to Improper Output Handling →',
  },
};
