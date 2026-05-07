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
        moveLabel: 'Choose the strongest review move before this statistic enters the briefing.',
        options: [
          {
            id: 'google',
            title: 'Trace the named citation',
            detail: 'Look for the exact institute, report, quarter, and figure cited in the sentence.',
            icon: '🔍',
            outcome: {
              result: 'dead-link',
              label: 'Strongest Move Here',
              tone: 'success',
              message:
                'No credible record of the "World Innovation Institute Q2 2024" report can be located. Because the claim names a precise external source, the statistic should be removed or replaced rather than supported with weaker evidence.',
            },
          },
          {
            id: 'internal',
            title: 'Use client survey as a proxy',
            detail: 'Check whether your own SME client survey shows a similar adoption trend.',
            icon: '📂',
            outcome: {
              result: 'scope-mismatch',
              label: 'Wrong Scope',
              tone: 'warn',
              message:
                'Your client survey may support a narrower statement about your own respondents, but it cannot rescue a citation to a report that cannot be found. If you use the survey, the sentence must be rewritten around that evidence.',
            },
          },
          {
            id: 'ignore',
            title: 'Keep it for review copy',
            detail: 'Leave the citation in the draft and flag it for source cleanup during the final edit.',
            icon: '→',
            outcome: {
              result: 'risk',
              label: 'Risk Accepted',
              tone: 'danger',
              message:
                'The citation survives because it looks specific and no one owns the cleanup step. When a reviewer asks for the report, no one can provide it, and the unsupported number weakens confidence in the rest of the briefing.',
            },
          },
        ],
        bestOptionId: 'google',
        explanation:
          'A named external report needs external verification. If the source cannot be found, remove the statistic or replace it with a claim that matches evidence you actually have.',
      },
      {
        id: 'cv2',
        text: '"ChatGPT is the dominant tool in our Swiss manager pilot, with most participants choosing it for everyday drafting tasks"',
        moveLabel: 'Choose the strongest review move for a claim about your own pilot.',
        options: [
          {
            id: 'google',
            title: 'Use a public adoption benchmark',
            detail: 'Find a recent Swiss or European AI adoption report and use it to support the pilot wording.',
            icon: '🔍',
            outcome: {
              result: 'wrong-source-type',
              label: 'Wrong Source Type',
              tone: 'warn',
              message:
                'A public benchmark can provide context, but it cannot prove what happened in your own pilot. The claim is about your participants, so the wording needs to be checked against pilot records.',
            },
          },
          {
            id: 'internal',
            title: 'Check the pilot counts',
            detail: 'Use participant choices or usage logs and revise the wording to match the actual distribution.',
            icon: '📂',
            outcome: {
              result: 'strongest',
              label: 'Strongest Move Here',
              tone: 'success',
              message:
                'The pilot records show ChatGPT was the most frequently selected tool, but not by a majority of participants. The sentence is rewritten to "the most frequently selected tool in our pilot" before it travels further.',
            },
          },
          {
            id: 'ignore',
            title: 'Keep it as qualitative',
            detail: 'Because it avoids a percentage, treat “dominant” and “most” as acceptable summary language.',
            icon: '→',
            outcome: {
              result: 'risk',
              label: 'Risk Accepted',
              tone: 'danger',
              message:
                'The soft wording still overstates the pilot result. A reader later compares it with the participant records and finds that "most" was not supported.',
            },
          },
        ],
        bestOptionId: 'internal',
        explanation:
          'Internal facts need internal evidence. Public market data cannot validate what happened in your own pilot, and qualitative wording still needs to match the underlying records.',
      },
      {
        id: 'cv3',
        text: '"The Swiss AI market is projected to reach CHF 8.2 billion by 2026, creating a clear case for immediate enterprise-wide rollout"',
        moveLabel: 'Choose the strongest review move for a forecast used to justify a major recommendation.',
        options: [
          {
            id: 'google',
            title: 'Trace the forecast definition',
            detail: 'Find the forecast, confirm the number, and check whether it measures the same market category.',
            icon: '🔍',
            outcome: {
              result: 'contradiction',
              label: 'Strongest Move Here',
              tone: 'success',
              message:
                'A credible forecast exists, but it measures a broader digital automation category, not the Swiss AI market alone. Because this number supports an enterprise-wide rollout recommendation, the claim must be removed or rewritten before use.',
            },
          },
          {
            id: 'internal',
            title: 'Pair it with demand signals',
            detail: 'Add internal business-unit interest to make the rollout recommendation feel better supported.',
            icon: '📂',
            outcome: {
              result: 'not-applicable',
              label: 'Wrong Source Type',
              tone: 'warn',
              message:
                'Internal demand may justify a pilot or staged rollout, but it does not validate the market-size forecast. The number and the recommendation need separate evidence.',
            },
          },
          {
            id: 'ignore',
            title: 'Keep it in the appendix',
            detail: 'Use the number as background context rather than the main basis for the rollout decision.',
            icon: '→',
            outcome: {
              result: 'risk',
              label: 'Risk Accepted',
              tone: 'danger',
              message:
                'The unsupported forecast anchors a high-cost recommendation. Once the number is challenged, both the evidence and the rollout proposal have to be walked back.',
            },
          },
        ],
        bestOptionId: 'google',
        explanation:
          'External forecasts require external evidence, and high-consequence recommendations need a stricter threshold. Unsupported precision should not travel when it is used to justify major action.',
      },
      {
        id: 'cv4',
        text: '"Last quarter, 38% of our support replies were drafted with AI before human review"',
        moveLabel: 'Choose the strongest review move for an operational metric from your own workflow.',
        options: [
          {
            id: 'google',
            title: 'Benchmark against industry reports',
            detail: 'Compare the number with public customer-service AI adoption reports to see whether it is plausible.',
            icon: '🔍',
            outcome: {
              result: 'wrong-source-type',
              label: 'Wrong Source Type',
              tone: 'warn',
              message:
                'Public reports can tell you whether the number sounds plausible, but they cannot verify your own team’s drafting rate. The metric needs the underlying workflow records.',
            },
          },
          {
            id: 'internal',
            title: 'Trace the dashboard number',
            detail: 'Open the underlying usage logs or query definition before the metric enters the briefing.',
            icon: '📂',
            outcome: {
              result: 'strongest-move',
              label: 'Strongest Move Here',
              tone: 'success',
              message:
                'Your internal support dashboard shows that 36% of replies were AI-drafted last quarter, not 38%. The slide is corrected before it reaches the operations review.',
            },
          },
          {
            id: 'ignore',
            title: 'Leave the dashboard export as-is',
            detail: 'The number came from a dashboard tile, and a few percentage points will not change the story.',
            icon: '→',
            outcome: {
              result: 'risk',
              label: 'Risk Accepted',
              tone: 'danger',
              message:
                'The metric is questioned during the meeting, but no one can show the underlying log query or definition. Confidence drops because an internal number was left unsupported.',
            },
          },
        ],
        bestOptionId: 'internal',
        explanation:
          'Internal operational claims should be checked against internal records, dashboards, or approved reporting systems. The key question is not whether the number sounds plausible, but whether your own organisation can stand behind it.',
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
