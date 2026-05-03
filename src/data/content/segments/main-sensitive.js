export const mainSensitiveSegments = {
  'main-sensitive-header': {
    type: 'pageHeader',
    tone: 'input',
    eyebrow: 'Section 4 · Sensitive Information Disclosure',
    title: 'The Input Risk: What never to paste or upload',
  },
  'main-sensitive-outcomes': {
    type: 'contentCards',
    tone: 'input',
    description: 'This section explores the most immediate security risk of generative AI: employees inadvertently sharing internal, proprietary, or personal data with unvetted models in the pursuit of productivity. By the end of this section, you will be able to:',
    columns: 2,
    cards: [
      {
        tone: 'input',
        body: 'Distinguish between sensitive information and transformed data that can be safely processed by an LLM',
      },
      {
        tone: 'input',
        body: 'Create company-wide workflows that maintain data security without bottlenecking productivity',
      },
    ],
  },
  'main-sensitive-legal': {
    type: 'sensitiveDisclosureWalkthrough',
    title: 'Experience the risks firsthand',
    description:
      'Each case starts with a common workplace shortcut. We then examine the legal vulnerability, the business consequence, and the safer workflow you must implement to protect the organisation.',
    scenarios: [
      {
        id: 'customer-email',
        eyebrow: 'Case 1',
        title: 'summary of customer\'s email',
        role: 'Your Situation',
        headline: 'A support lead pastes a customer complaint into a public AI tool.',
        context:
          'The employee wants a faster draft response and believes the message is "just one email." No approval step exists, and no clear policy dictates whether public AI tools are authorised for client communications.',
        tone: 'privacy',
        riskLabel: 'Personal Data Risk',
        employeeActionTitle: 'Shortcut',
        employeeAction:
          'The employee pastes the full message, including the customer\'s name, order details, and service history, into the model to generate a polished reply.',
        whyFeelsNormalTitle: 'Why It Gets Approved In The Moment',
        whyFeelsNormal:
          'It feels low-risk because the task is routine and the data is already visible in the inbox. The critical mistake is assuming "already visible to me" means "safe to upload to a third party."',
        decisionPrompt:
          'Which immediate move would better protect the workflow?',
        decisionOptions: [
          {
            id: 'allow-routine',
            label: 'Treat this as routine and allow public-tool drafting for customer emails unless a leak is reported.',
            feedback:
              'This reactive approach waits too long. The governance decision must happen before routine client data flows into an unapproved environment.',
          },
          {
            id: 'set-boundary',
            label: 'Pause and define whether replies require redaction, an approved internal tool, or no AI use at all.',
            feedback:
              'Correct. This is the stronger move. You are designing a firm boundary before the team normalises a dangerous shortcut.',
            correct: true,
          },
        ],
        legalQuestionTitle: 'What changed legally?',
        legalQuestion:
          'The organisation has just moved personal data into a new processing environment. Under frameworks like GDPR, uploading data to an unapproved third-party AI tool often violates the principle of lawful processing.',
        legalChecksTitle: 'Questions Before You Approve',
        legalChecks: [
          'Is there a lawful basis for processing this customer data in this specific tool?',
          'Was the AI provider vetted and approved for this tier of information?',
          'Could the organisation transparently explain this data transfer to a regulator?',
        ],
        consequenceTitle: 'What can go wrong next?',
        consequence:
          'Even if no immediate leak is visible, the organisation has created exposure it cannot legally justify. The issue is weak process control and breach of client trust.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Client trust is permanently damaged if the practice is discovered',
          'Complaint handling now involves an unapproved third-party processor',
          'Management inherits accountability for an unsecured workflow',
        ],
        controlTitle: 'Teach safe transformation',
        control:
          'AI can assist with wording, but identifiable customer information must stay out unless the system is explicitly vetted for it.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Extract key points or replace names with placeholders (e.g., "Customer A")',
          'Draft with summarised details rather than raw correspondence',
          'Escalate to the security team if raw data seems absolutely necessary',
        ],
        takeaway:
          'If the model only needs help with tone and structure, it should never receive the underlying customer record.',
      },
      {
        id: 'hr-sheet',
        eyebrow: 'Case 2',
        title: 'HR spreadsheet for analysis',
        role: 'Your Situation',
        headline: 'You upload a leave and salary sheet to "quickly spot patterns."',
        context:
          'The task sounds analytical, and you assume internal data is safe as long as it isn\'t shared publicly. However, the AI tool is external, and the file contains directly identifiable employee data.',
        tone: 'critical',
        riskLabel: 'GDPR + Employment Data',
        employeeActionTitle: 'The shortcut',
        employeeAction:
          'The full spreadsheet is uploaded so the model can quickly identify trends, summarise exceptions, and suggest staffing actions.',
        whyFeelsNormalTitle: 'Why It Gets Approved In The Moment',
        whyFeelsNormal:
          'The pressure is managerial: save time and get a fast overview. The file feels operational because it is already used in ordinary HR reporting.',
        decisionPrompt:
          'Before opening the walkthrough, which management move is safer here?',
        decisionOptions: [
          {
            id: 'upload-sheet',
            label: 'Use the whole sheet first because speed matters and the AI can sort out the patterns faster.',
            feedback:
              'This confuses speed with necessity. The management question is about trends, not about exposing the full, granular employee record set.',
          },
          {
            id: 'aggregate-first',
            label: 'Reframe the task around trends first, then decide whether an approved tool is needed for the reduced input.',
            feedback:
              'Correct. This is the stronger move. It separates the business goal from the raw data before any AI processing occurs.',
            correct: true,
          },
        ],
        legalQuestionTitle: 'Why is this a severe compliance issue?',
        legalQuestion:
          'Employment data is highly regulated. The organisation must justify not only the processing of this sensitive data but also the governance around who authorised an external AI to read it.',
        legalChecksTitle: 'Questions Before You Approve',
        legalChecks: [
          'Was this AI system strictly approved for handling employee HR data?',
          'Does the organisation know how the provider retains or trains on this file?',
          'Would employees reasonably expect their salary data to be processed this way?',
        ],
        consequenceTitle: 'What is the realistic business impact?',
        consequence:
          'The damage extends beyond regulatory fines. Employees will view this as negligent handling of highly personal information, destroying internal confidence in leadership.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Employee trust is much harder to restore than efficiency is to gain',
          'Standard HR workflows suddenly become major compliance liabilities',
          'The organisation cannot defend the decision under an audit',
        ],
        controlTitle: 'Make aggregation the default workflow',
        control:
          'If the core question is about trends, the AI should only receive trends. Raw employee data requires specialised internal tools.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Aggregate data first, analyse second',
          'Use approved, enterprise-grade tools when employee data is unavoidable',
          'Never let convenience redefine what counts as necessary input',
        ],
        takeaway:
          'When the goal is discovering patterns, the model must receive anonymised patterns, not the raw employee dataset.',
      },
      {
        id: 'board-deck',
        eyebrow: 'Case 3',
        title: 'Board deck for polishing',
        role: 'Your Situation',
        headline: 'A strategy lead uploads a draft board deck to improve clarity before a meeting.',
        context:
          'The slide deck contains market assumptions, financial targets, and product direction. Because no personal data is involved, the team incorrectly assumes there is zero risk.',
        tone: 'delegation',
        riskLabel: 'Strategic Exposure & IP',
        employeeActionTitle: 'The shortcut',
        employeeAction:
          'The entire presentation is uploaded so the model can improve the narrative flow, tighten the language, and draft an executive summary.',
        whyFeelsNormalTitle: 'Why It Gets Approved In The Moment',
        whyFeelsNormal:
          'This feels intellectually harmless because the goal is just editing, not disclosure. However, the model still receives the underlying strategic substance.',
        decisionPrompt:
          'Before opening the walkthrough, which design choice would you want to normalise?',
        decisionOptions: [
          {
            id: 'full-deck-editing',
            label: 'Allow full-deck uploads for editing tasks because the intent is only language improvement.',
            feedback:
              'This underestimates the exposure. The model still absorbs the strategic IP, regardless of the employee\'s intent.',
          },
          {
            id: 'excerpt-rule',
            label: 'Allow excerpt-level editing first, and reserve full strategic material for secure, approved environments only.',
            feedback:
              'Correct. This is the stronger move. It achieves the business goal while maintaining a safe level of abstraction.',
            correct: true,
          },
        ],
        legalQuestionTitle: 'Why is this a governance and IP issue?',
        legalQuestion:
          'Even without personal data, uploading unfiled patents or future strategy to an unvetted tool can invalidate trade secret protections and leak intellectual property.',
        legalChecksTitle: 'Questions Before You Approve',
        legalChecks: [
          'Does the organisation classify this as confidential or trade-secret material?',
          'Was this specific platform vetted for board-level or strategic documents?',
          'Could this disclosure negatively impact patents, M&A negotiations, or market position?',
        ],
        consequenceTitle: 'What does the business actually lose?',
        consequence:
          'The loss is strategic and delayed. A team won\'t see the damage today, but the exposure can theoretically surface in outputs for competitors or weaken future negotiation leverage.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Sensitive financial assumptions leave their intended secure context',
          'Unfiled patents may lose their legal status as protected trade secrets',
          'Fragments of your strategy could theoretically train the AI model',
        ],
        controlTitle: 'Enforce the abstraction rule',
        control:
          'Set the rule at the approved level of abstraction: a decontextualised excerpt, a high-level summary, or using a secure internal tool for the full deck.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Permit tone and structure help only on abstracted, isolated excerpts',
          'Require private enterprise instances for full confidential materials',
          'Make the "Escalation Rule" clear: if it can\'t be abstracted, escalate to IT',
        ],
        takeaway:
          'A simple writing problem does not justify exposing a comprehensive strategy document to a public model.',
      },
    ],
  },
  'main-sensitive-transfer': {
    type: 'transferCallout',
    tone: 'input',
    eyebrow: 'Before You Continue',
    title: 'Carry these three checks into the lab',
    checks: [
      {
        title: 'Is the raw data necessary?',
        body: 'If the work can be done using a summary or excerpt, the original sensitive data must stay out.',
      },
      {
        title: 'Is this the right tool for the job?',
        body: 'Match the AI tier to the data classification (e.g., Public, Internal, Confidential)',
      },
      {
        title: 'What is the standard?',
        body: 'Define team rules. If a task cannot be completed safely, employees must escalate rather than improvise.',
      },
    ],
  },
  'main-sensitive-lab': {
    type: 'governanceLab',
    tone: 'input',
    eyebrow: 'Interactive Lab',
    title: 'The Governance Lab: Input and Output Assurance',
    description:
      'Experience the full LLM task pipeline. Choose which documents to upload, how to phrase your prompt, and how to handle the output. Find the balance: too open leaks data, too restricted makes the task impossible.',
    frame: {
      role: 'You are approving a team workflow for drafting public-facing content under time pressure.',
      watch:
        'Notice where convenience starts widening the input boundary: document choice, prompt design, and the final decision to publish or pause.',
      emphasis:
        'This lab matters because a corporate data leak rarely begins with one dramatic mistake. It begins when an ordinary task quietly normalises an unsecured workflow.',
    },
    debrief: {
      eyebrow: 'After the Lab',
      title: 'What to carry into your next workflow decision',
      items: [
        {
          title: 'Enforce Minimisation & Abstraction',
          body: 'If the work can be done with a summary or placeholder, the original record should never reach the model. The lab demonstrates that the actual task is usually much narrower than the document provided.',
        },
        {
          title: 'Match the Tool to the Data',
          body: 'Not every AI tool is a vault. The decision to use a public tool versus a private enterprise instance belongs at the start of the workflow, not after a leak occurs.',
        },
        {
          title: 'Implement the Escalation Rule',
          body: 'A single careful choice only protects one task. A clear team rule—"If we can\'t abstract it safely, we escalate to IT"—protects every version of that task under time pressure.',
        },
      ],
    },
  },
  'main-sensitive-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-part',
    nextPageId: 'main-prompt-injection',
    caption: 'Section 4 of 12',
    nextLabel: 'Go to Prompt Injection →',
  },
};