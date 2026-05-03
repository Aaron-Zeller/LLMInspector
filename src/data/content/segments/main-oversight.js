export const mainOversightSegments = {
  'main-agency-header': {
    type: 'pageHeader',
    tone: 'output',
    eyebrow: 'Section 8 · Excessive Agency and Human Oversight',
    title: 'When the model should not act on its own',
    description:
      'This section focuses on responsibility, approvals, and the point where assistance becomes unsafe autonomy.',
    frame: {
      label: 'Your task',
      body: 'Keep meaningful authority outside the model, especially once the workflow can send, approve, or change something real.',
    },
  },
  'main-agency-outcomes': {
    type: 'contentCards',
    tone: 'output',
    eyebrow: 'Your Outcomes',
    title: 'What you should be able to decide before granting an AI system real agency',
    description:
      'This section is about who keeps the steering wheel once the model can do more than generate text.',
    columns: 3,
    cards: [
      {
        tone: 'output',
        eyebrow: 'Outcome 1',
        title: 'Recognise when assistance has become agency',
        body:
          'Spot the moment a model stops being a drafting tool and starts acting like a decision-maker, operator, or system trigger.',
      },
      {
        tone: 'output',
        eyebrow: 'Outcome 2',
        title: 'Distinguish a useful automation from an unsafe autonomy jump',
        body:
          'See when speed gains are worth keeping and when the same design removes the human gate that should still exist.',
      },
      {
        tone: 'output',
        eyebrow: 'Outcome 3',
        title: 'Keep accountability attached to a real person or role',
        body:
          'Design approvals, permissions, and pause points so responsibility never gets delegated to the model by accident.',
      },
    ],
  },
  'main-agency-intro': {
    type: 'agencyWalkthrough',
    eyebrow: 'Worked Examples',
    title: 'Walk through how “helpful automation” becomes unsafe autonomy',
    description:
      'Each case shows what power the system received, where the boundary disappeared, and what supervision rule you should have required first.',
    scenarios: [
      {
        id: 'customer-replies',
        eyebrow: 'Case 1',
        title: 'Customer reply automation',
        meta: 'Client-facing communication',
        role: 'Your Situation',
        headline: 'A support workflow can draft and send customer replies without waiting for an agent.',
        context:
          'The benefit is obvious: faster response times and less queue pressure. The real question is whether a customer-facing system should ever cross the line from drafting to sending on its own.',
        riskLabel: 'Outbound Authority',
        decisionPrompt:
          'Which boundary is stronger when AI is involved in customer messaging?',
        decisionOptions: [
          {
            id: 'auto-send-routine',
            label: 'If the message category is routine, the system can usually send automatically.',
            feedback:
              'That is too permissive. “Routine” is exactly where weak autonomy often gets normalised before anyone notices the wrong message went out.',
          },
          {
            id: 'human-send-gate',
            label: 'Keep AI at the drafting stage and require a human gate before customer messages are actually sent.',
            feedback:
              'This is the stronger move. The productivity benefit stays, but the final outward action remains attached to a human decision.',
            correct: true,
          },
        ],
        handoffTitle: 'The system is not only writing anymore',
        handoffBody:
          'Once the workflow can send the message itself, it has crossed from assistance into agency. The risk is no longer only output quality, but autonomous execution.',
        handoffBulletsTitle: 'Why It Gets Approved In The Moment',
        handoffBullets: [
          'The action becomes externally visible immediately',
          'A bad send may create legal, reputational, or service consequences',
          'The workflow no longer pauses naturally for human judgement',
        ],
        failureTitle: 'The last human interruption disappeared',
        failureBody:
          'The workflow assumes the model should handle the final action because it handled the draft well enough. That removes the point where responsibility should still reattach to a person.',
        failureBulletsTitle: 'Questions Before You Approve',
        failureBullets: [
          'Helpful drafting becomes permission to act',
          'The team confuses speed with acceptable autonomy',
          'A quiet default can become a strong organisational norm',
        ],
        consequenceTitle: 'The model starts making promises in your name',
        consequenceBody:
          'A mistaken refund promise, wrong tone, or unsupported commitment is no longer an internal draft issue. It becomes a direct relationship and accountability problem with the customer.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'The organisation inherits the message whether it was reviewed or not',
          'A correction later does not undo the first impression',
          'Responsibility remains human even when the send was automated',
        ],
        controlTitle: 'Keep final customer actions behind a human gate',
        controlBody:
          'Customer communication can be accelerated by AI, but the system should still stop before the send, not after the incident.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Let AI draft, summarise, and suggest',
          'Require a human click or sign-off before outbound customer messages',
          'Review autonomy category by category rather than all at once',
        ],
        takeaway:
          'If the message goes out in your organisation’s name, the final send should still belong to a person.',
      },
      {
        id: 'financial-actions',
        eyebrow: 'Case 2',
        title: 'Financial or transactional action',
        meta: 'Money, approvals, and thresholds',
        role: 'Your Situation',
        headline: 'An internal agent can approve, process, or trigger transactions faster than the human queue.',
        context:
          'The system may look efficient because it removes waiting time. The governance question is whether financial actions should ever be allowed to move without a role-based approval step.',
        riskLabel: 'Transactional Authority',
        decisionPrompt:
          'What is the stronger design stance once the system can move money or approve value-bearing actions?',
        decisionOptions: [
          {
            id: 'policy-enough',
            label: 'If the policy is encoded clearly enough, the system can usually act without extra approval.',
            feedback:
              'That gives the model too much operational authority. A policy in the prompt is not the same thing as a control that holds when the system is wrong.',
          },
          {
            id: 'approval-outside-model',
            label: 'Keep transaction thresholds and sign-off rules outside the model, even when the AI recommendation looks correct.',
            feedback:
              'This is the stronger move. Financial authority should remain explicit and enforceable outside the model’s own reasoning.',
            correct: true,
          },
        ],
        handoffTitle: 'The system receives authority with financial consequence',
        handoffBody:
          'At this point the model is not merely recommending. It is positioned to change balances, approve exceptions, or trigger payments in a way that creates auditable consequences.',
        handoffBulletsTitle: 'Why It Gets Approved In The Moment',
        handoffBullets: [
          'A wrong action can become an immediate control breach',
          'The value threshold matters even when the model sounds confident',
          'Authority design matters more than output fluency',
        ],
        failureTitle: 'Policy wording replaced formal approval',
        failureBody:
          'The workflow relies on the model to interpret and enforce the rule itself. That is precisely when accountability starts to drift away from clearly defined human roles.',
        failureBulletsTitle: 'Questions Before You Approve',
        failureBullets: [
          'A correct recommendation can still be executed through the wrong path',
          'The model’s confidence can overshadow delegation limits',
          'Later review does not fix a bad authority design',
        ],
        consequenceTitle: 'A process exception becomes an accountability event',
        consequenceBody:
          'Even when the underlying action was reasonable, the organisation now has to answer why the system was allowed to act at that level without a human in the loop.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Audit and compliance exposure increases immediately',
          'Threshold controls lose meaning if they are easy to bypass',
          'The operator or manager still owns the system design choice',
        ],
        controlTitle: 'Keep value-bearing actions behind enforceable gates',
        controlBody:
          'The right supervision move is to preserve authority boundaries outside the model, not hope the model interprets them correctly every time.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Use hard thresholds and explicit approval roles',
          'Do not let financial execution rest only on model reasoning',
          'Require escalation when value or ambiguity rises',
        ],
        takeaway:
          'Once money or formal approval is involved, safe automation depends on authority design, not just policy wording.',
      },
      {
        id: 'system-operations',
        eyebrow: 'Case 3',
        title: 'Operational system control',
        meta: 'Infrastructure, writes, and live changes',
        role: 'Your Situation',
        headline: 'An AI operations workflow can change infrastructure, records, or live configurations without waiting for human confirmation.',
        context:
          'This can look like the highest-value use case because it removes friction from repetitive operations. It is also where machine-speed mistakes become hardest to contain.',
        riskLabel: 'Machine-Speed Agency',
        decisionPrompt:
          'What is the stronger stance when AI can make live system changes?',
        decisionOptions: [
          {
            id: 'monitor-after',
            label: 'If monitoring and alerts are good enough, the system can usually act first and be corrected later if needed.',
            feedback:
              'That is too reactive. For live writes, deletion, or infrastructure changes, prevention matters more than a later notification.',
          },
          {
            id: 'pause-before-impact',
            label: 'For high-impact system actions, keep a pause point before execution rather than relying only on monitoring after the fact.',
            feedback:
              'This is the stronger move. Monitoring is useful, but it should not replace the checkpoint that prevents the wrong action from happening.',
            correct: true,
          },
        ],
        handoffTitle: 'The system can change reality at machine speed',
        handoffBody:
          'The model is no longer just advising a person. It can alter records, configurations, or infrastructure directly, which means weak oversight scales faster than a human can react.',
        handoffBulletsTitle: 'Why It Gets Approved In The Moment',
        handoffBullets: [
          'The effect can propagate before a person sees the alert',
          'One wrong action can trigger multiple downstream effects',
          'Rollback may be partial, costly, or unavailable',
        ],
        failureTitle: 'Supervision was moved too late in the chain',
        failureBody:
          'The workflow kept observability but removed the meaningful pause before impact. That turns oversight into incident analysis instead of incident prevention.',
        failureBulletsTitle: 'Questions Before You Approve',
        failureBullets: [
          'The system acts before the human judgement arrives',
          'Alerting is treated as if it were equivalent to approval',
          'The design assumes reversibility that may not exist in practice',
        ],
        consequenceTitle: 'A local mistake becomes a systems incident',
        consequenceBody:
          'At machine speed, a bad operational action can delete, reconfigure, or propagate far beyond the original task before anyone understands what happened.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Small logic errors can become large operational failures',
          'Containment is harder once multiple systems have moved',
          'The governance question becomes “why was this allowed?” not only “why was this wrong?”',
        ],
        controlTitle: 'Keep high-impact operations behind an explicit pause',
        controlBody:
          'For live operational changes, the model may help prepare or recommend the action, but a human checkpoint should remain before execution when the impact is meaningful.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Limit execute or write permissions tightly',
          'Require approval before high-impact live changes',
          'Design for prevention, not just post-incident visibility',
        ],
        takeaway:
          'When the system can act at machine speed, human oversight has to happen before the impact, not after the alert.',
      },
    ],
  },
  'main-agency-transfer': {
    type: 'transferCallout',
    tone: 'output',
    eyebrow: 'Before You Continue',
    title: 'Carry these three oversight checks into the lab',
    description:
      'Use these checks whenever an AI workflow can do more than recommend, summarise, or draft.',
    prompt:
      'As you move into the lab, keep asking where the final authority still sits and what action the system should never take on its own.',
    checks: [
      {
        title: 'Has assistance quietly become authority?',
        body: 'A workflow may start as drafting support and gradually turn into autonomous sending, approving, or writing if no one redraws the boundary.',
      },
      {
        title: 'What must pause for a person?',
        body: 'Money, customer commitments, live system changes, and irreversible writes usually deserve a checkpoint outside the model.',
      },
      {
        title: 'Who remains accountable after the action?',
        body: 'The model never inherits responsibility. If the action has a real consequence, the workflow should still point clearly to a human role.',
      },
    ],
  },
  'main-agency-lab': {
    type: 'agencyPermissionLab',
    tone: 'output',
    eyebrow: 'Interactive Lab',
    title: 'Configure the agent before you deploy it',
    description:
      'Your team is deploying an AI agent across three workflows. For each capability, decide how much authority the agent should have before the first run. Then see what happens when those choices are in effect.',
    frame: {
      role: 'You are setting the permission boundary before an internal AI agent goes live across multiple workflows.',
      watch:
        'Pay attention to the moment assistance turns into authority: sending, approving, or changing something real without a person stopping it.',
      emphasis:
        'This lab matters because permission decisions look harmless in the setup screen. Their consequences only become visible once the agent acts at speed.',
    },
    debrief: {
      eyebrow: 'After the Lab',
      title: 'What to carry into your next automation decision',
      items: [
        {
          title: 'Drafting and sending are not the same boundary',
          body: 'A model that helps prepare a message is very different from one that sends it. The moment the system can do something real, the approval logic has to live outside the model.',
        },
        {
          title: 'Authority cannot rest only in the prompt',
          body: 'If a policy rule lives inside the model, the model is also the one deciding whether the rule was met. Meaningful limits need enforcement outside the model: permission design, thresholds, and explicit approval steps.',
        },
        {
          title: 'Design for the failure, not just the demo',
          body: 'Every automation looks reasonable in the best case. The governance question is what happens when something goes wrong at speed, and whether a human can still stop it in time.',
        },
      ],
    },
  },
  'main-agency-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-output-handling',
    nextPageId: 'main-platform-choice',
    caption: 'Section 8 of 12',
    nextLabel: 'Go to Platform Choice →',
  },
};
