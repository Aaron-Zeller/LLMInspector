export const mainMisinformationSegments = {
  'main-misinformation-header': {
    type: 'pageHeader',
    eyebrow: 'Section 6 · Misinformation and Hallucinations',
    title: 'When confident output is still wrong',
    description:
      'This is the first output-side page. It focuses on false facts, unsupported claims, and plausible but unsafe code or recommendations.',
  },
  'main-misinformation-hallucinations': {
    type: 'moduleIntro',
    paragraphs: [
      'As humans, we pay a lot of attention not only to what is being presented to us, but also how. Herein lies one of the most deceptive traits of Large Language Models: their ability to present complete nonsense with absolute conviction.',
      'This phenomenon, often called "hallucination," occurs when a model generates incorrect statistics, fabricated citations, or entirely invented events while maintaining a perfectly professional and authoritative tone. Because the language is polished and the reasoning appears structured, these errors are notoriously difficult to spot at a glance.',      
    ],
    },
  'main-misinformation-engineering': {
    type: 'moduleIntro',
    paragraphs: [
      'To understand why this happens, we must remember that LLMs are not databases of verified facts; they are highly advanced probabilistic engines designed to predict the next most plausible word.',
      '• The Plausibility Trap: Models prioritise sounding plausible over being factually accurate. If a legal citation or scientific paper looks structurally correct, the model considers its job done, even if that paper does not actually exist.',
      '• The Illusion of Understanding: Misinformation is dangerous precisely because it often looks credible, leading users to lower their guard and accept plausible-sounding claims as established facts.',
      ],
  },
  'main-misinformation-verification': {
    type: 'moduleIntro',
    paragraphs: [
      'The risk extends far beyond narrative text. In technical and business contexts, hallucinations have immediate, tangible consequences:',
      '1. Technical & Security Vulnerabilities: When asked for code, a model may suggest snippets that look syntactically correct but fail to run or, worse, introduce subtle security flaws. It might invent "hallucinated" software libraries that do not exist, or rely on deprecated coding patterns.',
      '2. Flawed Strategic Planning: If asked for architectural advice or market analysis, the model may suggest a completely infeasible plan and present it as an easy, manageable task. Relying on this without oversight can lead to massive misallocation of resources and waste of time.',
      '3. Erosion of Quality and Reputation: Publishing internal or external documents containing fabricated statistics, fake legal precedents, or non-existent product features can severely damage an organisation\'s credibility and erode client trust.',
    ],
  },
  'main-misinformation-risks': {
    type: 'moduleIntro',
    paragraphs: [
      'To mitigate these risks, a responsible workflow must move from blind trust to systematic verification. We cannot "patch" hallucinations out of the model entirely, but we can design processes to catch them:',
      '• Trust, but Verify: Treat every AI output as a first draft. Critical figures, legal citations, and complex logic must be independently cross-checked against trusted primary sources before being integrated into any final product.',
      '• Provide Grounding Context: Instead of asking the model to recall facts from its training data, provide the necessary information in your prompt (e.g., "Based only on the provided financial report, summarize..."). This constrains the model\'s tendency to invent details.',
      '• Domain-Expert Review: A trustworthy workflow never treats the model as its own validator. Code must be tested and reviewed by engineers; architectural plans must be scrutinized by architects.',
      '• Ask for "Chain of Thought": Encourage the model to break down its reasoning step-by-step. Asking it to explain how it arrived at an answer often reduces hallucinations and makes logical leaps easier for a human to spot.',
      'A reliable AI workflow uses the model as a powerful accelerator, not an infallible oracle. By understanding the illusion of confidence, we can protect our projects from the hidden costs of misinformation.',
      ],
    },

  'main-misinformation-spot': {
    type: 'spotHallucination',
    eyebrow: 'Interactive Exercise',
    title: 'Spot the Hallucination',
    description:
      'Read the AI-generated market analysis below. Click on every phrase you think is unreliable, fabricated, or overconfident. You can select as many phrases as you like, then submit your assessment.',
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
          'No such institute or report can be verified. This is a fabricated citation — a named, specific-sounding source that does not exist. Models frequently invent plausible-sounding organisations to add credibility to their output.',
      },
      { id: 'sp3', text: ', Swiss SMEs have increased AI tool adoption by ', safe: true },
      {
        id: 'sp4',
        text: '34% year-over-year',
        safe: false,
        type: 'fabricated-stat',
        explanation:
          'This statistic is unsourced and unverifiable. Specific percentage figures are one of the most common hallucination types — they look precise and authoritative, but are generated without any underlying data.',
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
  'main-misinformation-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-prompt-injection',
    nextPageId: 'main-output-handling',
    caption: 'Section 6 of 12',
    nextLabel: 'Go to Improper Output Handling →',
  },
};
