export const mainSensitiveSegments = {
  'main-sensitive-header': {
    type: 'pageHeader',
    eyebrow: 'Section 4 · Sensitive Information Disclosure',
    title: 'What should never be pasted or uploaded casually',
    description:
      'This page introduces the most immediate input-side risk: employees sharing internal or personal data with an LLM before deciding whether the tool and the data are appropriate.',
  },
  'main-sensitive-outcomes': {
    type: 'moduleIntro',
    paragraphs: [
      'By the end of this section, you should be able to do three things confidently:',
      '1. Decide when an AI task can be done with transformed or aggregated input instead of raw data.',
      '2. Distinguish a productivity shortcut from a governance decision that needs an approved tool or escalation path.',
      '3. Turn one-off judgement into a repeatable team rule that still allows the work to get done.',
    ],
  },
  'main-sensitive-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'For you as a manager, this risk rarely begins with malicious intent. It usually begins with a reasonable pressure: move faster, reduce friction, and still get good work out of the team.',
      'Sometimes this section asks you to imagine your own direct AI use. Sometimes it asks you to judge a workflow your team might use. In both cases, the point is the same: treat the data decision and the workflow decision as your responsibility.',
      'Here, “sensitive information” includes both **personal data** and **confidential business information**. The common issue is not the exact category. It is whether the tool, the data, and the workflow actually belong together.',
      'The key governance question is **not** "Was the AI helpful?" It is "What would a well-designed team workflow have allowed here?"',
    ],
  },
  'main-sensitive-legal': {
    type: 'sensitiveDisclosureWalkthrough',
    eyebrow: 'Worked Examples',
    title: 'Walk through the risk the way it actually appears at work',
    description:
      'Each case starts with a normal workplace shortcut. Then it shows the legal question, the business consequence, and the control you should already have put in place before the shortcut ever happened.',
    scenarios: [
      {
        id: 'customer-email',
        eyebrow: 'Case 1',
        title: 'Customer email for summarisation',
        meta: 'Client-facing communication',
        role: 'Your Situation',
        headline: 'A support lead pastes a customer complaint into a public AI tool.',
        context:
          'The employee wants a faster draft response and believes the message is “just one email.” No approval step exists, and no one has clarified whether public AI tools are allowed for client communications.',
        tone: 'privacy',
        riskLabel: 'Personal Data Risk',
        employeeActionTitle: 'The shortcut',
        employeeAction:
          'The employee pastes the full message, including the customer’s name, order details, and service history, into the model to generate a polished reply.',
        whyFeelsNormal:
          'It feels low-risk because the task is routine, the employee is trying to be efficient, and the data is already visible in the inbox. The mistake is assuming “already visible to me” means “safe to upload elsewhere.”',
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
        controlTitle: 'What should management have set up?',
        control:
          'You should define whether client correspondence may be used with AI at all, under what conditions, and in which tools. Employees should not be improvising that decision during live service work.',
        controlBullets: [
          'Allow only approved tools for client-facing tasks',
          'Require redaction or paraphrasing before use',
          'Make “do not paste raw client messages into public tools” an explicit rule',
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
        headline: 'You upload a leave and salary sheet to “quickly spot patterns.”',
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
        controlTitle: 'What should management have set up?',
        control:
          'For employee data, the control should be stricter by default. If AI support is needed, it should happen in an approved environment with minimised or transformed data, not by uploading the raw sheet.',
        controlBullets: [
          'Default to transformed or aggregated HR inputs',
          'Use approved internal AI instances only',
          'Escalate unclear HR use cases instead of improvising them',
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
          'The slide deck contains market assumptions, financial targets, and product direction. No personal data is involved, so the team incorrectly treats the risk as “not really privacy-related.”',
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
        controlTitle: 'What should management have set up?',
        control:
          'You should teach that “no personal data” does not mean “no risk.” Strategy material needs its own rule set, with clear approval boundaries for what may and may not be processed by external AI tools.',
        controlBullets: [
          'Define a separate rule for strategic and board material',
          'Prefer excerpts over full-document uploads',
          'Treat confidential strategy as governed input, not generic writing material',
        ],
        takeaway:
          'A writing problem does not justify exposing the whole strategy document if the same support can be given at a higher level of abstraction.',
      },
    ],
  },
  'main-sensitive-guidance': {
    type: 'safeTransformationStudio',
    eyebrow: 'Manager Playbook',
    title: 'Replace the shortcut with a rule the team can actually use',
    description:
      'Keep the business goal, change the input, and make the safer move easy to repeat under time pressure.',
    scenarios: [
      {
        id: 'customer-email',
        eyebrow: 'Case 1',
        title: 'Customer email response',
        meta: 'Redact and paraphrase before use',
        role: 'Safer Alternative',
        headline: 'Keep the task, but transform the input before it reaches the model.',
        context:
          'The employee still needs help drafting a reply. The educational goal is not to ban the task, but to teach the safer version of it.',
        tone: 'privacy',
        riskLabel: 'Use Redacted Input',
        managerGoal: 'Keep rapid drafting support available for client service work.',
        designMove: 'Transform the customer message before it reaches the model.',
        unsafeTitle: 'Raw client message in a public tool',
        unsafeBody:
          'Uploading the full complaint moves personal data, order context, and service history into a tool that may not be approved for that information.',
        unsafeWhy:
          'The employee is trying to save time and assumes the AI only “helps write,” but the tool still receives the full underlying data.',
        transformedTitle: 'Abstract the case, not the customer',
        transformedBody:
          'Remove names, order numbers, and account details. Keep only the issue type, tone, and response goal.',
        transformedPrompt:
          'Draft a calm reply to a customer who is frustrated about a delayed delivery and unclear refund communication. Do not mention names, order numbers, or account details. Keep the tone empathetic and concise.',
        processTitle: 'Use the least exposed workflow that still solves the task',
        processBody:
          'If AI is used, only transformed content should reach it. If this becomes routine, move the workflow into an approved internal tool.',
        processChecks: [
          'Can the task be completed with paraphrased input only?',
          'Is there an approved internal tool for client-response drafting?',
          'Does the workflow separate drafting help from client-identifiable data?',
        ],
        ruleTitle: 'Teach the response pattern, not just the prohibition',
        ruleBody:
          'State a repeatable rule: AI may help with wording, but customer-identifiable information stays out unless the system is explicitly approved for it.',
        ruleBullets: [
          'Draft with summarised case details rather than raw correspondence',
          'Escalate if the raw data seems necessary',
          'Write the rule so it can be applied under time pressure',
        ],
        takeaway:
          'Your takeaway: if the model only needs the issue pattern, the workflow should never send the customer record.',
      },
      {
        id: 'hr-sheet',
        eyebrow: 'Case 2',
        title: 'HR trend analysis',
        meta: 'Aggregate rather than upload the sheet',
        role: 'Safer Alternative',
        headline: 'Keep the analytical goal, but remove the identifiable record.',
        context:
          'You still want help spotting patterns. The better design move is to preserve the analytical question while changing the form of the data.',
        tone: 'critical',
        riskLabel: 'Use Aggregated Data',
        managerGoal: 'Keep analytical support for staffing and workload decisions.',
        designMove: 'Separate the internal preparation step from the AI reasoning step.',
        unsafeTitle: 'Full leave and salary file uploaded for analysis',
        unsafeBody:
          'The model gets names, roles, salaries, and absences when the real task is pattern recognition rather than individual record handling.',
        unsafeWhy:
          'You want speed and may assume the most efficient input is the whole spreadsheet, even though the actual question is much narrower.',
        transformedTitle: 'Convert the file into an aggregated management summary',
        transformedBody:
          'Turn the sheet into an aggregate summary first. Give the model trends, not names, salaries, and absence records.',
        transformedPrompt:
          'Review the following aggregate HR summary and suggest three possible management follow-up actions. Do not infer anything about individuals. Focus on workload, staffing, and communication measures.',
        processTitle: 'Move from person-level data to decision-level data',
        processBody:
          'Separate the internal preparation step from the AI step. The model receives the management summary, not the employee file.',
        processChecks: [
          'Can the analysis be done on counts, trends, or grouped data instead of names?',
          'Is there a clear internal preparation step before any AI use?',
          'Would the prompt still work if every person-level detail were removed?',
        ],
        ruleTitle: 'Make aggregation the default, not the exception',
        ruleBody:
          'Make one rule clear: if the question is about trends, the AI receives trends. Raw employee data needs special justification.',
        ruleBullets: [
          'Aggregate first, analyse second',
          'Use approved internal tools when employee data is unavoidable',
          'Do not let convenience redefine what counts as necessary input',
        ],
        takeaway:
          'Your takeaway: if the decision is about trends, design the workflow around trends instead of person-level data.',
      },
      {
        id: 'board-deck',
        eyebrow: 'Case 3',
        title: 'Board deck polishing',
        meta: 'Extract the writing task from the strategy deck',
        role: 'Safer Alternative',
        headline: 'Ask the model for help with structure or tone without handing over the whole strategy.',
        context:
          'The team wants editing help, not strategic disclosure. That means the safe replacement is to isolate the writing problem from the confidential content.',
        tone: 'delegation',
        riskLabel: 'Use Excerpts, Not The Deck',
        managerGoal: 'Keep editing support available before high-stakes board communication.',
        designMove: 'Give the tool the writing task, not the strategic substance behind it.',
        unsafeTitle: 'Whole board presentation uploaded for “polish”',
        unsafeBody:
          'A tool that was never approved for strategic content now receives targets, assumptions, and board-level direction just because the team wanted clearer prose.',
        unsafeWhy:
          'Editing feels operational rather than risky, so teams forget that the model still consumes the entire substance of the document, not just the writing challenge.',
        transformedTitle: 'Provide only the writing pattern that needs improvement',
        transformedBody:
          'Share only a short excerpt or the writing goal itself. Do not upload the full strategy deck for editing help.',
        transformedPrompt:
          'Rewrite the following generic executive-summary paragraph to be sharper, shorter, and more board-ready. Preserve a formal tone. Do not introduce new claims, figures, or strategic recommendations.',
        processTitle: 'Separate editing support from strategic disclosure',
        processBody:
          'Allow AI help with tone and structure without allowing full strategy uploads. The workflow should enforce that distinction.',
        processChecks: [
          'Can the team use a generic excerpt instead of the full deck?',
          'Is a confidential internal AI environment available for higher-sensitivity materials?',
          'Has the team separated “editing help” from “strategy exposure”?',
        ],
        ruleTitle: 'Define the approved level of abstraction',
        ruleBody:
          'Do not ban AI for board work entirely. Set the rule at the approved level of abstraction: excerpt, summary, or full deck.',
        ruleBullets: [
          'Permit tone and structure help on decontextualised excerpts',
          'Require internal tools for full confidential materials',
          'Make the abstraction level part of the approval rule',
        ],
        takeaway:
          'Your takeaway: if the team wants language help, design the process so language help is all the model gets.',
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
    title: 'The Governance Lab: Input & Output Assurance',
    description:
      'Act as the person designing the workflow. Choose which documents may be used, how the prompt should constrain the task, and whether the output is useful enough without exposing more than the work requires.',
  },
  'main-sensitive-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-part',
    nextPageId: 'main-prompt-injection',
    caption: 'Section 4 of 12',
    nextLabel: 'Go to Prompt Injection →',
  },
};
