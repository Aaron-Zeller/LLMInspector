export const mainPromptSegments = {
  'main-prompt-header': {
    type: 'pageHeader',
    tone: 'input',
    eyebrow: 'Section 5 · Prompt Injection',
    title: 'Why untrusted content can steer the model',
    description:
      'This section shows how uploaded, retrieved, or embedded content can quietly steer a model unless you set a boundary first.',
    frame: {
      label: 'Your task',
      body: 'Approve the workflow boundary, not only the happy path people hope the model will follow.',
    },
  },
  'main-prompt-outcomes': {
    type: 'contentCards',
    tone: 'input',
    eyebrow: 'Your Outcomes',
    title: 'What you should know before approving a workflow that reads outside content',
    description:
      'The goal is simple: decide what the model may read, what it may do with it, and where a human boundary must stay.',
    columns: 2,
    cards: [
      {
        tone: 'input',
        eyebrow: 'Outcome 1',
        title: 'Understand what prompt injection is and when it can occur',
        body:
          'Explain why documents, websites, or messages can change model behaviour instead of remaining neutral content to analyse.',
      },
      {
        tone: 'input',
        eyebrow: 'Outcome 2',
        title: 'Learn what mechanisms there are to defend against prompt injection',
        body:
          'Identify the boundaries, constraints, and approval rules that stop hostile content from gaining authority over the workflow.',
      },
    ],
  },
  'main-prompt-intro': {
    type: 'promptInjectionWalkthrough',
    eyebrow: 'Worked Examples',
    title: 'Walk through the workflow boundary the way it actually fails',
    description:
      'Each case shows what entered the workflow, where the boundary failed, and what you should have required before routine use.',
    scenarios: [
      {
        id: 'uploaded-file',
        eyebrow: 'Case 1',
        title: 'Uploaded file summarisation',
        meta: 'Low-agency workflow',
        role: 'Your Situation',
        headline: 'A team uses AI to summarise uploaded documents for faster review work.',
        context:
          'The workflow seems harmless because the model is "only summarising." But the model reads all text in the file, including anything a human reviewer never notices.',
        riskLabel: 'Untrusted File Risk',
        managerPressure:
          'Keep document review fast without making every upload a manual bottleneck.',
        managerDecision:
          'Decide whether uploaded files should be treated as trusted content or as untrusted inputs that need a stronger boundary.',
        decisionPrompt:
          'Which boundary would you rather normalise before your team starts using this kind of workflow?',
        decisionOptions: [
          {
            id: 'trust-human-readable',
            label: 'If the document looks normal to a human reader, the workflow can usually trust it as neutral content.',
            feedback:
              'That is too weak. A model can read hidden or attacker-planted text that no one saw during a quick human review.',
          },
          {
            id: 'treat-upload-untrusted',
            label: 'Treat uploaded files as untrusted by default and limit what the model may do with them.',
            feedback:
              'This is the stronger boundary. It assumes the file may carry hostile instructions and stops the workflow from giving it more authority than it deserves.',
            correct: true,
          },
        ],
        triggerTitle: 'A normal document enters the workflow',
        triggerBody:
          'A PDF, spreadsheet, or note is uploaded so the model can summarise it. The team experiences this as convenience, not as opening a new instruction channel.',
        triggerBullets: [
          'The file looks like ordinary content to the employee',
          'The task sounds passive because the model is "just reading"',
          'The workflow often lacks any distinction between trusted and untrusted files',
        ],
        boundaryTitle: 'The workflow treats content like authority',
        boundaryBody:
          'The model does not reliably separate "text to analyse" from "text to obey" unless the workflow enforces that boundary itself.',
        boundaryBullets: [
          'Hidden text can be read even if a human never noticed it',
          'The model may follow attacker language as if it were part of the prompt',
          'A simple summarisation task can still become a corrupted output problem',
        ],
        consequenceTitle: 'The summary becomes the carrier of the attack',
        consequenceBody:
          'The visible document stays ordinary, but the summary quietly repeats a false warning, instruction, or recommendation with professional confidence.',
        consequenceBullets: [
          'Reviewers may trust the summary more than the original file',
          'The team may act on a conclusion the document never supported',
          'A low-agency workflow still creates real decision risk',
        ],
        controlTitle: 'Require untrusted-input handling before approval',
        controlBody:
          'If a workflow reads uploaded files, approval should depend on how it handles hostile content, not only on how useful the summaries look in the happy path.',
        controlBullets: [
          'Treat uploaded documents as untrusted by default',
          'Limit what the model can do with their contents',
          'Test the workflow with adversarial files before routine use',
        ],
        takeaway:
          'If a file can influence the model, it is not just content. It is part of the workflow boundary you approved.',
      },
      {
        id: 'external-source',
        eyebrow: 'Case 2',
        title: 'Browsing or retrieval workflow',
        meta: 'Externally sourced content',
        role: 'Your Situation',
        headline: 'A team asks the model to browse, retrieve, or summarise content from external websites.',
        context:
          'This often feels safer than direct uploading because the content comes through a tool. The boundary problem is still the same.',
        riskLabel: 'External Source Risk',
        managerPressure:
          'Let the team gather information faster without manually reading every page first.',
        managerDecision:
          'Decide whether "available on the web" is enough to treat the content as safe input for the model.',
        decisionPrompt:
          'Which approval stance is stronger when a workflow retrieves outside content automatically?',
        decisionOptions: [
          {
            id: 'available-means-safe',
            label: 'If the workflow only reads public content, the main concern is answer quality, not manipulation.',
            feedback:
              'That is too optimistic. Public availability does not make the content safe as an instruction source for the model.',
          },
          {
            id: 'external-stays-untrusted',
            label: 'Treat retrieved external content as untrusted and limit what conclusions or actions the model may take from it.',
            feedback:
              'This is the stronger boundary. Attacker-planted instructions can arrive through browsing just as easily as through uploads.',
            correct: true,
          },
        ],
        triggerTitle: 'The workflow pulls in outside text automatically',
        triggerBody:
          'The model reads websites, linked pages, or retrieved snippets to help answer a question faster. External text enters the model context even when no employee explicitly pasted it.',
        triggerBullets: [
          'The retrieval tool can import text from places no one has reviewed closely',
          'The workflow often hides how much raw content the model actually saw',
          'The team may focus on speed and coverage rather than input trust',
        ],
        boundaryTitle: 'Availability gets mistaken for trust',
        boundaryBody:
          'The workflow confuses "content the model can access" with "content the model should treat as safe to follow or prioritise."',
        boundaryBullets: [
          'The model may absorb attacker text from a website or embedded source',
          'Retrieval can amplify instructions the user never intended to authorise',
          'The workflow may lack any stage that filters hostile content before the model reads it',
        ],
        consequenceTitle: 'Bad external content shapes internal decisions',
        consequenceBody:
          'The model may produce a confident answer or recommendation based on manipulated content that looked like ordinary source material.',
        consequenceBullets: [
          'A web-derived answer can quietly inherit an attacker\'s agenda',
          'The team may mistake retrieval for verification',
          'The problem surfaces only after the output has already influenced people',
        ],
        controlTitle: 'Separate retrieval from authority',
        controlBody:
          'Approval should depend on whether the workflow limits what retrieved content can do and what human checks remain before the output is used.',
        controlBullets: [
          'Treat external retrieval as untrusted input by default',
          'Keep human review between retrieval and sensitive use',
          'Do not let the model treat outside text as automatically authoritative',
        ],
        takeaway:
          'If the workflow reads from the outside world, the outside world is now part of your threat surface.',
      },
      {
        id: 'tool-agent',
        eyebrow: 'Case 3',
        title: 'Tool-using internal agent',
        meta: 'High-agency workflow',
        role: 'Your Situation',
        headline: 'An internal assistant can read documents, query systems, and trigger downstream actions on behalf of users.',
        context:
          'The workflow still begins with a document or message, but the consequences are much higher because the model can now do more than generate text.',
        riskLabel: 'Agent Control Risk',
        managerPressure:
          'Capture productivity gains from automation without adding a manual approval step to every routine task.',
        managerDecision:
          'Decide which actions the model may take on its own and which approvals must exist outside the model.',
        decisionPrompt:
          'Which approval boundary matters most once the model can use tools and access systems?',
        decisionOptions: [
          {
            id: 'system-prompt-enough',
            label: 'A strong system prompt should be enough if it clearly tells the agent not to break the rules.',
            feedback:
              'That is too fragile. If the model can still read hostile instructions and use powerful tools, wording alone is not a sufficient control.',
          },
          {
            id: 'constrain-outside-model',
            label: 'Sensitive actions should be constrained outside the model, and tool permissions should stay narrow by default.',
            feedback:
              'This is the stronger boundary. Once tool access exists, the workflow has to assume the model may be manipulated and still prevent unsafe actions.',
            correct: true,
          },
        ],
        triggerTitle: 'The same input weakness meets real agency',
        triggerBody:
          'A file, webpage, or message still carries the hidden instruction. The difference is that the model can now query systems, send messages, or trigger automations instead of stopping at a bad summary.',
        triggerBullets: [
          'The attack still starts as text entering the model context',
          'Tool access turns a content problem into a systems problem',
          'The employee may see only a normal output while hidden actions happen elsewhere',
        ],
        boundaryTitle: 'The workflow trusts the model with authority it cannot safely hold',
        boundaryBody:
          'If the model can directly call tools, sensitive approvals cannot live only inside the model\'s prompt. They need enforcement outside the model as well.',
        boundaryBullets: [
          'A hostile instruction can override behavioural guidance',
          'The agent may query systems or send data before a human notices',
          'Logging alone is not the same as preventing the action',
        ],
        consequenceTitle: 'The model can act before anyone reviews the output',
        consequenceBody:
          'A prompt injection can now trigger data access, outbound communication, or other downstream effects even if the employee only sees a normal-looking summary.',
        consequenceBullets: [
          'Sensitive data can move without informed user approval',
          'A quiet tool action may do more damage than a bad answer',
          'The workflow failure becomes a security and governance event',
        ],
        controlTitle: 'Move sensitive control outside the model',
        controlBody:
          'Once the system can act, the approval decision should focus on permission design, confirmation steps, and tool constraints rather than relying on the model to police itself.',
        controlBullets: [
          'Keep tool permissions narrow and role-specific',
          'Require confirmation outside the model for sensitive actions',
          'Test the workflow as if hostile content will eventually reach it',
        ],
        takeaway:
          'The same injection pattern becomes far more serious when the model can do more than speak.',
      },
    ],
  },
  'main-prompt-transfer': {
    type: 'transferCallout',
    tone: 'input',
    eyebrow: 'Before You Continue',
    title: 'Carry these three prompt-injection checks forward',
    description:
      'Use these checks whenever a model reads outside content or has access to tools, data, or downstream systems.',
    prompt:
      'As you move into the lab, keep asking whether the model is only generating text or whether it is in a position to influence something real.',
    checks: [
      {
        title: 'Is the content trusted, or merely available?',
        body: 'A file or webpage being present does not mean it is safe to treat as an instruction source.',
      },
      {
        title: 'Can the workflow separate content from authority?',
        body: 'If the workflow does not enforce that boundary, the model may follow attacker text as if it were part of the prompt.',
      },
      {
        title: 'What real actions could follow from a bad output?',
        body: 'The risk grows quickly when the model can query systems, send messages, or trigger automated steps.',
      },
    ],
  },
  'main-prompt-demo': {
    type: 'promptInjectionDemo',
    tone: 'input',
    eyebrow: 'Interactive Lab',
    title: 'Corrupted Document Walkthrough',
    description:
      'Run the workflow as the approving manager and watch how a routine-looking document can steer a tool-using agent past the boundary you thought was in place.',
    frame: {
      role: 'You are reviewing an internal AI assistant that can read documents and use real HR tools.',
      watch:
        'The issue is no longer just a bad summary. A hidden instruction can trigger real actions if the model has tool access.',
      emphasis:
        'The document carries a hidden instruction. Because the model has tool access, it queries data and sends it out without asking.',
    },
  },
  'main-prompt-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-sensitive-disclosure',
    nextPageId: 'main-misinformation',
    caption: 'Section 5 of 12',
    nextLabel: 'Go to Misinformation →',
  },
};
