export const mainMisinformationSegments = {
  'main-misinformation-header': {
    type: 'pageHeader',
    eyebrow: 'Section 6 · Misinformation and Hallucinations',
    title: 'When confident output is still wrong',
    description:
      'This is the first output-side page. It focuses on false facts, unsupported claims, and plausible but unsafe code or recommendations.',
  },
  'main-misinformation-outcomes': {
    type: 'contentCards',
    eyebrow: 'Your Outcomes',
    title: 'What you should be able to do before approving AI-generated claims',
    description:
      'This section is about managerial review, not abstract model theory. By the end, you should be able to do three things with more confidence.',
    columns: 3,
    cards: [
      {
        tone: 'output',
        eyebrow: 'Outcome 1',
        title: 'Spot when polished language is carrying a weak claim',
        body:
          'Recognise when confidence, formatting, and specificity are making a fabricated or unsupported statement feel ready for professional use.',
      },
      {
        tone: 'output',
        eyebrow: 'Outcome 2',
        title: 'Match the claim to the right level of review',
        body:
          'Distinguish between a draft that needs verification, a claim that needs a source, and an answer that should not be used at all.',
      },
      {
        tone: 'output',
        eyebrow: 'Outcome 3',
        title: 'Turn one careful review into a repeatable workflow',
        body:
          'Set approval, escalation, and verification rules so your team does not rely on ad hoc judgement under time pressure.',
      },
    ],
  },
  'main-misinformation-hallucinations': {
    type: 'misinformationWalkthrough',
    eyebrow: 'Worked Examples',
    title: 'See how weak claims become “professional” before anyone checks them',
    description:
      'Each case starts with a useful-looking AI output. Then it shows what makes the claim feel trustworthy, what the model is actually doing, and what review standard you should have required before the claim moved any further.',
    scenarios: [
      {
        id: 'board-briefing',
        eyebrow: 'Case 1',
        title: 'Board briefing statistic',
        meta: 'Planning and reputation risk',
        role: 'Your Situation',
        headline: 'A briefing note arrives with exact percentages, named reports, and a market forecast that reads like finished analysis.',
        context:
          'The document is clear, concise, and well formatted. Under time pressure, the easiest mistake is to treat that polish as evidence rather than presentation.',
        riskLabel: 'Board Briefing Risk',
        managerPressure:
          'Move a strategic update forward quickly without turning every draft into a research project.',
        managerDecision:
          'Decide whether the note is ready for leadership use, needs source-checking, or should be rewritten before anyone relies on it.',
        decisionPrompt:
          'What is the safer first move when a clean briefing note contains exact figures and named sources?',
        decisionOptions: [
          {
            id: 'circulate',
            label: 'Circulate it as a draft and trust reviewers to challenge anything that looks wrong later.',
            feedback:
              'This lets unsupported precision enter the workflow first. Once the claim starts travelling, it becomes harder to unwind cleanly.',
          },
          {
            id: 'verify-before-travel',
            label: 'Pause the document and require source verification before those numbers or citations move any further.',
            feedback:
              'This is the stronger move. Exact claims should face review before they gain authority through circulation.',
            correct: true,
          },
        ],
        surfaceTitle: 'The note looks board-ready',
        surfaceBody:
          'It names an institute, gives precise percentages, and ends with a strong recommendation. The structure signals competence even before the content has been checked.',
        surfaceBullets: [
          'Specific figures feel more credible than approximate language',
          'Named sources reduce scepticism even when no one has opened them',
          'A decisive conclusion makes the note feel professionally finished',
        ],
        mechanismTitle: 'The model is optimising for plausibility, not verification',
        mechanismBody:
          'LLMs generate the next likely words in a convincing pattern. When the prompt asks for trends and projections, the model may invent the kind of report, statistic, or citation that usually appears in that genre.',
        mechanismBullets: [
          'The model may fabricate a source because a source is expected',
          'It may produce precise numbers without underlying evidence',
          'It can sound analytical while still guessing',
        ],
        consequenceTitle: 'The document gains authority before it earns it',
        consequenceBody:
          'If the note reaches leadership, the problem is no longer only factual accuracy. You now risk decisions, follow-up discussions, or board trust being built on unsupported material.',
        consequenceBullets: [
          'A follow-up question can expose the weakness in front of senior stakeholders',
          'The whole document becomes less credible once one source collapses',
          'You inherit the workflow failure, not just the factual mistake',
        ],
        controlTitle: 'Require evidence before precision travels',
        controlBody:
          'For board-facing material, percentages, named reports, forecasts, and expert attributions should not move forward without a verification step.',
        controlBullets: [
          'Pause circulation until the cited source can be found',
          'Replace unsupported figures with verified ones or remove them',
          'Make board-facing claims subject to explicit source review',
        ],
        takeaway:
          'A document that sounds ready is still only a draft until its claims survive review.',
      },
      {
        id: 'engineering-note',
        eyebrow: 'Case 2',
        title: 'Engineering recommendation',
        meta: 'Technical and security risk',
        role: 'Your Situation',
        headline: 'A team member shares an AI-generated implementation note with code patterns, package names, and deployment advice that look production-ready.',
        context:
          'The note is useful because it sounds specific and immediately actionable. That is also what makes it risky: weak code advice often arrives wrapped in confident technical language.',
        riskLabel: 'Repository Risk',
        managerPressure:
          'Help the team move faster without blocking useful technical drafting support.',
        managerDecision:
          'Decide which parts of the recommendation need testing or expert review before they reach the repository or deployment plan.',
        decisionPrompt:
          'What is the stronger managerial response to a confident AI-generated implementation note?',
        decisionOptions: [
          {
            id: 'merge-draft',
            label: 'Let the team try it quickly first and clean it up later if something fails.',
            feedback:
              'This treats production-like output as harmless experimentation. The problem is that insecure or broken guidance can enter the workflow before anyone has checked it properly.',
          },
          {
            id: 'test-before-use',
            label: 'Treat the note as a draft and require testing, dependency checks, and owner review before any adoption.',
            feedback:
              'This is the stronger move. Technical specificity should trigger validation, not automatic trust.',
            correct: true,
          },
        ],
        surfaceTitle: 'The technical detail feels reassuring',
        surfaceBody:
          'Named libraries, confident explanations, and step-by-step code advice create the impression that the answer already reflects real implementation knowledge.',
        surfaceBullets: [
          'Concrete package names feel more trustworthy than generic advice',
          'Step-by-step instructions lower resistance to reuse',
          'A fast-moving team may equate specificity with correctness',
        ],
        mechanismTitle: 'The model can simulate expertise without grounding',
        mechanismBody:
          'When asked for code or implementation guidance, the model predicts what a plausible engineering answer should look like. It does not guarantee the library exists, the pattern is secure, or the recommendation matches your stack.',
        mechanismBullets: [
          'Non-existent packages can appear fully believable',
          'Unsafe patterns can be presented as best practice',
          'Local constraints are invisible unless you verify them explicitly',
        ],
        consequenceTitle: 'Weak advice becomes operational debt',
        consequenceBody:
          'Once the note influences implementation, the cost is no longer only technical cleanup. You risk shipping broken logic, unsafe patterns, or time-consuming rework that could have been prevented by a review gate.',
        consequenceBullets: [
          'Bad code can enter a repository looking professionally justified',
          'Security issues may be introduced under the banner of speed',
          'Clean-up later costs more than review earlier',
        ],
        controlTitle: 'Separate drafting help from implementation approval',
        controlBody:
          'AI can support technical drafting, but repository, dependency, and security decisions still need explicit validation by the team or owner who is accountable for the result.',
        controlBullets: [
          'Require test and dependency validation before adoption',
          'Treat AI-generated code notes as suggestions, not implementation decisions',
          'Make an owner responsible for approving technical claims',
        ],
        takeaway:
          'Specific technical language should increase review, not reduce it.',
      },
      {
        id: 'policy-citation',
        eyebrow: 'Case 3',
        title: 'Policy or legal citation',
        meta: 'Governance and credibility risk',
        role: 'Your Situation',
        headline: 'A management memo includes a clean summary of legal or policy requirements with a confident citation that no one has opened yet.',
        context:
          'The text sounds measured and responsible, so it is tempting to treat it as a useful shortcut. The risk is that a fabricated or misquoted citation can quietly redefine policy expectations.',
        riskLabel: 'Policy Risk',
        managerPressure:
          'Provide timely direction without escalating every policy question into a slow legal review cycle.',
        managerDecision:
          'Decide when a policy or compliance statement needs source validation before it becomes internal guidance.',
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
        surfaceTitle: 'The memo sounds measured and compliant',
        surfaceBody:
          'A calm tone, exact article references, and policy-style wording make the answer feel lower-risk than it really is.',
        surfaceBullets: [
          'Formal tone can mask weak sourcing',
          'Citation formatting signals authority even when the reference is wrong',
          'Managers may trust guidance that sounds careful more than they test it',
        ],
        mechanismTitle: 'The model is mimicking the form of policy writing',
        mechanismBody:
          'The answer may reproduce the style of a compliance memo without grounding the statement in an actual policy, law, or internal standard.',
        mechanismBullets: [
          'The citation may be invented or misapplied',
          'The summary may flatten important conditions or exceptions',
          'Internal guidance can drift if the source is never opened',
        ],
        consequenceTitle: 'The organisation starts following a rule that may not exist',
        consequenceBody:
          'If the memo is used as guidance, teams can align around a false requirement or a false permission. That creates governance confusion even before any external problem appears.',
        consequenceBullets: [
          'Teams may act on a rule that has no real source basis',
          'Later corrections reduce confidence in internal guidance',
          'Escalations become harder once bad guidance has spread',
        ],
        controlTitle: 'Require source-opening for policy claims',
        controlBody:
          'If a statement sounds like policy, law, or compliance instruction, the underlying source should be opened, read, and attributable before the claim is distributed.',
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
  'main-misinformation-risks': {
    type: 'contentCards',
    eyebrow: 'Review Principles',
    title: 'Move from “sounds right” to “ready to use”',
    description:
      'A stronger workflow does not depend on catching every hallucination perfectly. It depends on applying a few review rules consistently before AI output gains authority.',
    columns: 3,
    cards: [
      {
        tone: 'output',
        eyebrow: 'Principle 1',
        title: 'Treat output as a draft',
        body:
          'The more specific the figure, citation, recommendation, or code pattern, the less you should trust it without checking. Clean language is not evidence.',
      },
      {
        tone: 'output',
        eyebrow: 'Principle 2',
        title: 'Ground the model where possible',
        body:
          'If the answer should come from a report, policy, or dataset, give the model that source instead of asking it to recall from memory and style the result convincingly.',
      },
      {
        tone: 'output',
        eyebrow: 'Principle 3',
        title: 'Match review to consequence',
        body:
          'Code needs testing, leadership material needs source review, and policy guidance may need escalation. The more the claim can affect decisions, the stronger the review should be.',
      },
    ],
  },
  'main-misinformation-transfer': {
    type: 'transferCallout',
    eyebrow: 'Before You Continue',
    title: 'Carry these three checks into the labs',
    description:
      'Use the labs to practice not just spotting mistakes, but judging whether the claim should be trusted, verified, or rejected before it reaches a real audience.',
    prompt:
      'As you work through the labs, keep asking what kind of evidence you would require before allowing the claim into a briefing, report, or codebase.',
    checks: [
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

  'main-misinformation-spot': {
    type: 'spotHallucination',
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
      title: 'What you should carry forward',
      items: [
        {
          title: 'Do not mistake polish for evidence',
          body: 'If a claim sounds specific, sourced, or professionally written, that still does not make it ready for use. Precision without verification is still risk.',
        },
        {
          title: 'Escalate review when the claim becomes more exact',
          body: 'Named reports, percentages, forecasts, and expert attributions should trigger a stronger check than general drafting language.',
        },
        {
          title: 'Give your team a stop rule',
          body: 'If a reviewer cannot trace a claim to a real source quickly, the claim should be rewritten, replaced, or removed before it travels further.',
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
  'main-misinformation-verify': {
    type: 'sourceVerification',
    eyebrow: 'Interactive Lab',
    title: 'Choose the verification move before the claim gets used',
    description:
      'The claims below come from the analysis above. For each one, choose the verification step you would take before allowing it into a professional document, then submit to see the consequence of that choice.',
    frame: {
      role: 'You are deciding what the workflow should do before a questionable claim enters a board briefing.',
      watch:
        'Do not ask only whether the claim is true. Ask which verification move is proportionate and useful before the claim travels further.',
      emphasis:
        'This second lab shifts from spotting problems to governing them. The question is not only whether the claim is wrong, but what review step you should require before anyone is allowed to use it.',
    },
    debrief: {
      eyebrow: 'After the Lab',
      title: 'What a stronger workflow looks like',
      items: [
        {
          title: 'Pick the check that matches the claim',
          body: 'Internal usage claims call for internal evidence. Market forecasts call for credible external sources. Not every verification move fits every statement.',
        },
        {
          title: 'Treat failed verification as useful information',
          body: 'If the source cannot be found or the numbers do not reconcile, that is already a decision signal. The claim should not proceed unchanged.',
        },
        {
          title: 'Turn verification into policy, not heroics',
          body: 'Do not rely on one careful reviewer. Set clear expectations for when teams must source, test, escalate, or remove AI-generated claims.',
        },
      ],
    },
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
                'No results for the "World Innovation Institute Q2 2024" report. Multiple searches return no relevant results. The report cannot be located. The source appears to be fabricated.',
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
                'Your own internal SME survey data from the same period shows a 12% adoption increase, significantly lower than the AI figure. The claim cannot be reconciled with your own data and the original source cannot be located.',
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
          'Searching for the source first costs seconds and immediately exposes the fabrication. A failed search is itself useful information. It tells you the claim is unverifiable before it enters any professional document.',
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
                'A board member with vendor relationships questions the figure mid-presentation. No source can be provided and the slide is withdrawn from the deck, in front of the full board.',
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
                'A credible market research firm publishes a Swiss digital economy forecast, but their 2026 projection for AI-related services is CHF 3.1 billion, significantly lower than the AI figure. The discrepancy must be flagged before use.',
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
                'Internal data does not cover macro market projections. This approach does not help here. An external market research source is the right check for country-level forecasts.',
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
          'For macro market projections, a credible external source is the right check. Even finding a different number is valuable. It shows the AI figure is inflated or unsupported and gives you something real to use instead.',
      },
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
