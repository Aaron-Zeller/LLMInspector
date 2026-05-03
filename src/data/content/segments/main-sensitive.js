export const mainSensitiveSegments = {
  'main-sensitive-header': {
    type: 'pageHeader',
    eyebrow: 'Section 4 · Sensitive Information Disclosure',
    title: 'What should never be pasted or uploaded casually',
    description:
      'This section will tell you about the most immediate input-side risk of interacting with an LLM: inputting sensitive content.',
  },
  'main-sensitive-outcomes': {
    type: 'contentCards',
    eyebrow: 'Your Outcomes',
    title: 'What you should be able to do before deciding what to input into an LLM',
    description:
      'By the end of this section, you should be able to do two things more confidently.',
    columns: 2,
    cards: [
      {
        tone: 'privacy',
        eyebrow: 'Outcome 1',
        title: 'Decide which information can be input into an LLM',
        body:
          'Distinguish between raw sensitive data that should stay out and transformed or aggregated inputs that keep the work moving safely.',
      },
      {
        tone: 'privacy',
        eyebrow: 'Outcome 2',
        title: 'Create company wide procedures for inputting data into LLM to retain both productivity and security',
        body:
          'Turn one good judgement call into a repeatable team rule that still allows the work to get done.',
      },
    ],
  },
  'main-sensitive-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'For you as a manager, this risk rarely begins with malicious intent. It usually begins with a reasonable pressure: move faster, reduce friction, and still get good work out of the team.',
      'Sometimes this section asks you to imagine your own direct AI use. Sometimes it asks you to judge a workflow your team might use. In both cases, the point is the same: treat the data decision and the workflow decision as your responsibility.',
      'Here, "sensitive information" includes both **personal data** and **confidential business information**. The common issue is not the exact category. It is whether the tool, the data, and the workflow actually belong together.',
      'The key governance question is **not** "Was the AI helpful?" It is "What would a well-designed team workflow have allowed here?"',
    ],
  },
  'main-sensitive-legal': {
    type: 'sensitiveDisclosureWalkthrough',
    eyebrow: 'Worked Examples',
    title: 'Walk through the risk the way it actually appears at work',
    description:
      'Each case starts with a normal workplace shortcut. Then it shows the legal question, the business consequence, and the safer workflow you should already have put in place.',
    scenarios: [
      {
        id: 'customer-email',
        eyebrow: 'Case 1',
        title: 'Customer email for summarisation',
        meta: 'Client-facing communication',
        role: 'Your Situation',
        headline: 'A support lead pastes a customer complaint into a public AI tool.',
        context:
          'The employee wants a faster draft response and believes the message is "just one email." No approval step exists, and no one has clarified whether public AI tools are allowed for client communications.',
        tone: 'privacy',
        riskLabel: 'Personal Data Risk',
        employeeActionTitle: 'The shortcut',
        employeeAction:
          'The employee pastes the full message, including the customer\'s name, order details, and service history, into the model to generate a polished reply.',
        whyFeelsNormal:
          'It feels low-risk because the task is routine, the employee is trying to be efficient, and the data is already visible in the inbox. The mistake is assuming "already visible to me" means "safe to upload elsewhere."',
        managerPressure:
          'Respond quickly to the customer without slowing service operations down.',
        managerDecision:
          'Decide whether client-response drafting belongs in a public tool, an approved internal tool, or a no-AI workflow for this category of data.',
        decisionPrompt:
          'Before opening the walkthrough, which immediate move would better protect the workflow?',
        decisionOptions: [
          {
            id: 'allow-routine',
            label: 'Treat this as routine and allow public-tool drafting for customer emails unless a leak is reported.',
            feedback:
              'This waits too long. The real design decision has to happen before routine client data starts flowing into an unapproved environment.',
          },
          {
            id: 'set-boundary',
            label: 'Pause and define whether replies require redaction, an approved internal tool, or no AI use for this data.',
            feedback:
              'This is the stronger move. You are designing the boundary before the team normalises the shortcut.',
            correct: true,
          },
        ],
        legalQuestionTitle: 'What changed legally?',
        legalQuestion:
          'The organisation has just moved personal data into a new processing environment. The relevant question is whether this tool was approved, justified, and governed for that use.',
        legalChecks: [
          'Is there a lawful basis for processing this customer data in this tool?',
          'Was the provider approved for this category of information?',
          'Could the organisation explain this data transfer to the customer or regulator?',
        ],
        consequenceTitle: 'What can go wrong next?',
        consequence:
          'Even if no immediate leak is visible, the organisation has created exposure it may not be able to justify later. The issue is not just privacy; it is weak process control.',
        consequenceBullets: [
          'Client trust drops if the practice becomes visible',
          'Complaint handling may now involve an unapproved third party',
          'You still inherit accountability for a workflow you did not design carefully enough',
        ],
        controlTitle: 'Teach the response pattern, not just the prohibition',
        control:
          'AI may help with wording, but customer-identifiable information stays out unless the system is explicitly approved for it.',
        controlBullets: [
          'Draft with summarised case details rather than raw correspondence',
          'Escalate if the raw data seems necessary',
          'Write the rule so it can be applied under time pressure',
        ],
        takeaway:
          'If the model only needs help with tone and structure, it should not receive the customer record itself.',
      },
      {
        id: 'hr-sheet',
        eyebrow: 'Case 2',
        title: 'HR spreadsheet for analysis',
        meta: 'Internal people data',
        role: 'Your Situation',
        headline: 'You upload a leave and salary sheet to "quickly spot patterns."',
        context:
          'The task sounds analytical rather than risky, and you may assume internal data is safe as long as it never leaves the company intentionally. But the AI tool is external and the file contains directly identifiable employee data.',
        tone: 'critical',
        riskLabel: 'GDPR + Employment Data',
        employeeActionTitle: 'The shortcut',
        employeeAction:
          'The full spreadsheet is uploaded so the model can identify trends, summarise exceptions, and suggest staffing actions.',
        whyFeelsNormal:
          'The pressure is managerial: save time, get a faster overview, and move on. The file feels operational, not sensitive, because it is already used in ordinary HR reporting.',
        managerPressure:
          'Get faster organisational oversight without creating another heavy reporting step.',
        managerDecision:
          'Decide whether the question is really about people-level records or about trends that could be prepared and analysed in a safer form.',
        decisionPrompt:
          'Before opening the walkthrough, which management move is safer here?',
        decisionOptions: [
          {
            id: 'upload-sheet',
            label: 'Use the whole sheet first because speed matters and the AI can sort out the patterns faster.',
            feedback:
              'This confuses speed with necessity. The management question is about patterns, not about exposing the full employee record set.',
          },
          {
            id: 'aggregate-first',
            label: 'Reframe the task around trends first, then decide whether an approved tool is needed for the reduced input.',
            feedback:
              'This is the stronger move. It separates the management question from the raw record set before any AI use happens.',
            correct: true,
          },
        ],
        legalQuestionTitle: 'Why is this a harder case?',
        legalQuestion:
          'Employment data is usually more sensitive, more regulated, and more consequential than a generic business document. The organisation needs to be able to justify not only the processing, but also the governance around who made that decision.',
        legalChecks: [
          'Was this AI system approved for employee data?',
          'Does the organisation know how long the provider retains the file?',
          'Would employees reasonably expect their HR data to be processed this way?',
        ],
        consequenceTitle: 'What is the realistic business impact?',
        consequence:
          'The damage is not only regulatory. Employees may interpret the act as careless handling of highly personal information, which weakens confidence in leadership and internal controls.',
        consequenceBullets: [
          'Employee trust is harder to restore than efficiency is to gain',
          'HR workflows can become compliance liabilities',
          'The organisation may struggle to defend the decision after the fact',
        ],
        controlTitle: 'Make aggregation the default, not the exception',
        control:
          'If the question is about trends, the AI receives trends. Raw employee data needs special justification.',
        controlBullets: [
          'Aggregate first, analyse second',
          'Use approved internal tools when employee data is unavoidable',
          'Do not let convenience redefine what counts as necessary input',
        ],
        takeaway:
          'When the management question is about patterns, the model should receive patterns rather than the employee record set.',
      },
      {
        id: 'board-deck',
        eyebrow: 'Case 3',
        title: 'Board deck for polishing',
        meta: 'Strategy and IP exposure',
        role: 'Your Situation',
        headline: 'A strategy lead uploads a draft board deck to improve clarity before a meeting.',
        context:
          'The slide deck contains market assumptions, financial targets, and product direction. No personal data is involved, so the team incorrectly treats the risk as "not really privacy-related."',
        tone: 'delegation',
        riskLabel: 'Strategic Exposure',
        employeeActionTitle: 'The shortcut',
        employeeAction:
          'The entire presentation is uploaded so the model can improve the flow, tighten the language, and propose a better executive summary.',
        whyFeelsNormal:
          'This feels intellectually harmless because the goal is editing, not disclosure. But the model still receives the underlying strategic content, not just the writing task.',
        managerPressure:
          'Improve board-level communication quality quickly without delaying a high-stakes meeting.',
        managerDecision:
          'Decide whether editing support truly requires the full strategy deck or only a decontextualised excerpt and a clear writing brief.',
        decisionPrompt:
          'Before opening the walkthrough, which design choice would you want to normalise?',
        decisionOptions: [
          {
            id: 'full-deck-editing',
            label: 'Allow full-deck uploads for editing tasks because the intent is only language improvement, not disclosure.',
            feedback:
              'This underestimates the exposure. The model still receives the strategic substance even if the team only wants writing help.',
          },
          {
            id: 'excerpt-rule',
            label: 'Allow excerpt-level or abstracted editing help first, and reserve full strategic material for approved environments only.',
            feedback:
              'This is the stronger move. It keeps the business goal while defining a safer level of abstraction.',
            correct: true,
          },
        ],
        legalQuestionTitle: 'Why is this still a governance issue?',
        legalQuestion:
          'Even without personal data, the organisation may be exposing trade secrets, confidential strategy, and board-level information to a tool that was never approved for that category of content.',
        legalChecks: [
          'Does the organisation classify this as confidential or trade-secret material?',
          'Was this platform approved for board or strategy documents?',
          'Could disclosure affect patents, negotiations, or competitive position?',
        ],
        consequenceTitle: 'What does the business actually lose?',
        consequence:
          'The loss is often strategic rather than immediate. A team may not see the damage on the same day, but the exposure can weaken future negotiation, product timing, or intellectual-property protection.',
        consequenceBullets: [
          'Sensitive assumptions leave their intended context',
          'Negotiation leverage can be weakened',
          'Trade-secret boundaries become harder to defend later',
        ],
        controlTitle: 'Define the approved level of abstraction',
        control:
          'Set the rule at the approved level of abstraction: excerpt, summary, or full deck.',
        controlBullets: [
          'Permit tone and structure help on decontextualised excerpts',
          'Require internal tools for full confidential materials',
          'Make the abstraction level part of the approval rule',
        ],
        takeaway:
          'A writing problem does not justify exposing the whole strategy document if the same support can be given at a higher level of abstraction.',
      },
    ],
  },
  'main-sensitive-transfer': {
    type: 'transferCallout',
    eyebrow: 'Before You Continue',
    title: 'Carry these three checks into the lab',
    description:
      'Use the lab to practice not just spotting risk, but designing the safer workflow you would want your team to follow.',
    prompt:
      'Start with the check your team would be most likely to skip under time pressure, and see how that choice changes the workflow.',
    checks: [
      {
        title: 'Is the raw data truly necessary?',
        body: 'If the work can be done with a summary, excerpt, or aggregate, the original data should stay out.',
      },
      {
        title: 'Is this tool approved for this kind of information?',
        body: 'Match the tool to the data category instead of deciding ad hoc in the moment.',
      },
      {
        title: 'What rule should your team be able to repeat?',
        body: 'Turn one good judgement call into a simple pattern people can follow under pressure.',
      },
    ],
  },
  'main-sensitive-lab': {
    type: 'governanceLab',
    eyebrow: 'Interactive Lab',
    title: 'The Governance Lab: Input and Output Assurance',
    description:
      'Act as the person designing the workflow. Choose which documents may be used, how the prompt should constrain the task, and whether the output is useful enough without exposing more than the work requires.',
    debrief: {
      eyebrow: 'After the Lab',
      title: 'What to carry into your next workflow decision',
      items: [
        {
          title: 'Ask whether the raw data is necessary',
          body: 'If the work can be done with a summary, excerpt, or aggregate, the original record should not reach the model. The lab shows how often the task is narrower than the document.',
        },
        {
          title: 'Match the tool to the data category',
          body: 'Not every AI tool is approved for every kind of content. The approval decision belongs before the workflow starts, not after something goes wrong.',
        },
        {
          title: 'Turn one good call into a repeatable rule',
          body: 'A single careful choice only protects one task. A team rule protects every version of that task under time pressure.',
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
