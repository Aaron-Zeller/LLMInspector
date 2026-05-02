export const mainOversightSegments = {
  'main-agency-header': {
    type: 'pageHeader',
    eyebrow: 'Section 8 · Excessive Agency and Human Oversight',
    title: 'When the model should not act on its own',
    description:
      'This final output-side page focuses on responsibility, approvals, and the limits of automation when the consequences are meaningful.',
  },
  'main-agency-outcomes': {
    type: 'contentCards',
    eyebrow: 'Your Outcomes',
    title: 'What you should be able to decide before granting an AI system real agency',
    description:
      'This section is about who keeps the steering wheel once the model can do more than generate text. By the end, you should be able to do three things more deliberately.',
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
      'Each case starts with a reasonable automation idea. Then it shows what power the system received, what boundary disappeared, what happens if the model acts alone, and what supervision rule you should already have required.',
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
        managerPressure:
          'Reduce support backlog without slowing the team down with unnecessary reviews.',
        managerDecision:
          'Decide whether AI should stop at drafting, or whether it should be trusted to send customer communications autonomously.',
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
        handoffBullets: [
          'The action becomes externally visible immediately',
          'A bad send may create legal, reputational, or service consequences',
          'The workflow no longer pauses naturally for human judgement',
        ],
        failureTitle: 'The last human interruption disappeared',
        failureBody:
          'The workflow assumes the model should handle the final action because it handled the draft well enough. That removes the point where responsibility should still reattach to a person.',
        failureBullets: [
          'Helpful drafting becomes permission to act',
          'The team confuses speed with acceptable autonomy',
          'A quiet default can become a strong organisational norm',
        ],
        consequenceTitle: 'The model starts making promises in your name',
        consequenceBody:
          'A mistaken refund promise, wrong tone, or unsupported commitment is no longer an internal draft issue. It becomes a direct relationship and accountability problem with the customer.',
        consequenceBullets: [
          'The organisation inherits the message whether it was reviewed or not',
          'A correction later does not undo the first impression',
          'Responsibility remains human even when the send was automated',
        ],
        controlTitle: 'Keep final customer actions behind a human gate',
        controlBody:
          'Customer communication can be accelerated by AI, but the system should still stop before the send, not after the incident.',
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
        managerPressure:
          'Reduce turnaround time on operational approvals without creating a backlog.',
        managerDecision:
          'Decide whether the agent may execute within broad policy rules, or whether financial actions still need explicit approval boundaries outside the model.',
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
        handoffBullets: [
          'A wrong action can become an immediate control breach',
          'The value threshold matters even when the model sounds confident',
          'Authority design matters more than output fluency',
        ],
        failureTitle: 'Policy wording replaced formal approval',
        failureBody:
          'The workflow relies on the model to interpret and enforce the rule itself. That is precisely when accountability starts to drift away from clearly defined human roles.',
        failureBullets: [
          'A correct recommendation can still be executed through the wrong path',
          'The model’s confidence can overshadow delegation limits',
          'Later review does not fix a bad authority design',
        ],
        consequenceTitle: 'A process exception becomes an accountability event',
        consequenceBody:
          'Even when the underlying action was reasonable, the organisation now has to answer why the system was allowed to act at that level without a human in the loop.',
        consequenceBullets: [
          'Audit and compliance exposure increases immediately',
          'Threshold controls lose meaning if they are easy to bypass',
          'The operator or manager still owns the system design choice',
        ],
        controlTitle: 'Keep value-bearing actions behind enforceable gates',
        controlBody:
          'The right supervision move is to preserve authority boundaries outside the model, not hope the model interprets them correctly every time.',
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
        managerPressure:
          'Improve operational responsiveness and reduce manual intervention in routine changes.',
        managerDecision:
          'Decide whether the system may execute live changes directly, or whether certain actions must always stop for human approval.',
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
        handoffBullets: [
          'The effect can propagate before a person sees the alert',
          'One wrong action can trigger multiple downstream effects',
          'Rollback may be partial, costly, or unavailable',
        ],
        failureTitle: 'Supervision was moved too late in the chain',
        failureBody:
          'The workflow kept observability but removed the meaningful pause before impact. That turns oversight into incident analysis instead of incident prevention.',
        failureBullets: [
          'The system acts before the human judgement arrives',
          'Alerting is treated as if it were equivalent to approval',
          'The design assumes reversibility that may not exist in practice',
        ],
        consequenceTitle: 'A local mistake becomes a systems incident',
        consequenceBody:
          'At machine speed, a bad operational action can delete, reconfigure, or propagate far beyond the original task before anyone understands what happened.',
        consequenceBullets: [
          'Small logic errors can become large operational failures',
          'Containment is harder once multiple systems have moved',
          'The governance question becomes “why was this allowed?” not only “why was this wrong?”',
        ],
        controlTitle: 'Keep high-impact operations behind an explicit pause',
        controlBody:
          'For live operational changes, the model may help prepare or recommend the action, but a human checkpoint should remain before execution when the impact is meaningful.',
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
  'main-agency-risks': {
    type: 'contentCards',
    eyebrow: 'Risk Clusters',
    title: 'What changes once the model gets its hands on the steering wheel',
    description:
      'Once agency is granted, the danger is no longer only misinformation. The danger is that a weak decision can become a live action before a human has a chance to stop it.',
    columns: 3,
    cards: [
      {
        tone: 'output',
        eyebrow: 'Cluster 1',
        title: 'Unsanctioned operations',
        body:
          'A system that can send, approve, delete, purchase, or modify records can carry out actions the organisation never intended to authorise directly.',
      },
      {
        tone: 'output',
        eyebrow: 'Cluster 2',
        title: 'Machine-speed cascading failures',
        body:
          'Once the system can act quickly across connected tools, one wrong move can propagate before a human even recognises the problem.',
      },
      {
        tone: 'output',
        eyebrow: 'Cluster 3',
        title: 'Accountability without a clear human checkpoint',
        body:
          'Automation never transfers responsibility. If no real person is clearly holding the final gate, the organisation still owns the outcome anyway.',
      },
    ],
  },
  'main-agency-supervision': {
    type: 'agencyControlStudio',
    eyebrow: 'Manager Playbook',
    title: 'Replace vague “human in the loop” language with actual supervision rules',
    description:
      'The goal is not to block all automation. The goal is to decide explicitly which actions remain assisted, which ones pause for approval, and which powers the system should never receive at all.',
    scenarios: [
      {
        id: 'customer-replies',
        eyebrow: 'Case 1',
        title: 'Customer communication workflow',
        meta: 'Drafting without autonomous sending',
        role: 'Safer Workflow',
        headline: 'Keep the drafting speed, but hold the final customer action behind a person.',
        context:
          'The system can still prepare replies, suggest resolutions, and reduce queue pressure. The safer move is to preserve the final send as a human-owned step.',
        riskLabel: 'Outbound Authority',
        managerGoal: 'Keep support efficiency high without letting the system speak for the organisation unchecked.',
        designMove: 'Use AI for preparation, not autonomous release.',
        unsafeTitle: 'Let the system send because the category seems routine',
        unsafeBody:
          'The workflow treats familiar communication categories as safe enough for automatic execution, even though the final outward action still carries legal and reputational consequences.',
        unsafeWhy:
          'Routine volume makes automatic sending feel efficient, which hides the fact that the system is now acting in the organisation’s name.',
        verifyTitle: 'Keep the send outside the model',
        verifyBody:
          'The system may draft and queue, but the release step should still belong to a person or a clearly bounded approval mechanism outside the model.',
        standardLabel: 'Workflow Check',
        standardTitle: 'Separate drafting from release',
        standardBody:
          'If the system prepares the message, the workflow should still ask who owns the final send and what happens if the message is wrong.',
        standardChecks: [
          'Does a person still approve before the message leaves?',
          'Are high-risk categories excluded from autonomous handling?',
          'Can the team tell clearly where assistance ends and release begins?',
        ],
        ruleLabel: 'Team Rule',
        ruleTitle: 'AI may draft; a person decides to send',
        ruleBody:
          'This keeps the efficiency benefit without allowing a quietly expanding autonomy boundary in customer-facing channels.',
        ruleBullets: [
          'Queue messages for human confirmation before send',
          'Define which message types can never auto-send',
          'Treat outbound release as an explicit authority step',
        ],
        takeaway:
          'Keep the benefit of AI drafting, but do not let drafting quietly become autonomous communication.',
      },
      {
        id: 'financial-actions',
        eyebrow: 'Case 2',
        title: 'Financial or approval workflow',
        meta: 'Thresholds and sign-off',
        role: 'Safer Workflow',
        headline: 'Keep the recommendation support, but make approval authority impossible to blur.',
        context:
          'The AI may still identify legitimate exceptions or valid cases. The safer design move is to keep value thresholds and approval rights hard and visible outside the model.',
        riskLabel: 'Transactional Authority',
        managerGoal: 'Preserve speed for ordinary cases without weakening formal authority rules.',
        designMove: 'Tie money and exception handling to hard thresholds and real approvers.',
        unsafeTitle: 'Let confidence in the recommendation stand in for approval',
        unsafeBody:
          'The workflow treats a persuasive AI recommendation as if it were close enough to a sign-off, especially when the system is usually helpful.',
        unsafeWhy:
          'Once teams trust the model operationally, they often start stretching what counts as a “routine” approval.',
        verifyTitle: 'Keep thresholds stronger than convenience',
        verifyBody:
          'High-value or exceptional actions should pause automatically for the correct human role, regardless of how plausible or accurate the recommendation seems.',
        standardLabel: 'Workflow Check',
        standardTitle: 'Preserve the authority chain',
        standardBody:
          'The meaningful question is not “was the model right?” but “who is actually allowed to approve this?”',
        standardChecks: [
          'Are thresholds enforced outside the model?',
          'Does the workflow know which role owns the approval?',
          'Can the system proceed only after that approval is real?',
        ],
        ruleLabel: 'Team Rule',
        ruleTitle: 'Recommendations do not carry authority',
        ruleBody:
          'Use the AI to speed up review, not to replace the person or role who is formally accountable for the decision.',
        ruleBullets: [
          'Escalate above-threshold actions automatically',
          'Keep approval identity explicit and auditable',
          'Do not let AI confidence blur delegation rules',
        ],
        takeaway:
          'A fast recommendation is still not the same thing as a valid approval.',
      },
      {
        id: 'system-operations',
        eyebrow: 'Case 3',
        title: 'Operational control workflow',
        meta: 'Live systems and pause points',
        role: 'Safer Workflow',
        headline: 'Keep the diagnostic and planning support, but make live execution earn a human pause.',
        context:
          'You may still want the system to detect issues, recommend changes, or prepare fixes. The safer move is to constrain when it may actually execute on a live environment.',
        riskLabel: 'Machine-Speed Agency',
        managerGoal: 'Gain operational responsiveness without turning every alert into an unbounded autonomous action.',
        designMove: 'Use human approval and least-privilege permissions to bound live system agency.',
        unsafeTitle: 'Treat alerts, logs, and rollback as enough oversight',
        unsafeBody:
          'The workflow allows the system to act first because the team believes monitoring or later intervention will catch anything serious enough.',
        unsafeWhy:
          'This feels technically mature because dashboards and alerts exist, but those tools often arrive after the action has already changed the environment.',
        verifyTitle: 'Put the pause before the action, not after the incident',
        verifyBody:
          'The system can still recommend, queue, or simulate changes, but high-impact live actions should remain bounded by approval logic outside the model.',
        standardLabel: 'Workflow Check',
        standardTitle: 'Treat execution rights as scarce permissions',
        standardBody:
          'Write, delete, and infrastructure powers should be intentionally narrow because they change reality faster than a person can always recover from.',
        standardChecks: [
          'Is the action reversible if the recommendation is wrong?',
          'Can the system execute without a meaningful pause point?',
          'Are execute permissions narrower than read or diagnostic permissions?',
        ],
        ruleLabel: 'Team Rule',
        ruleTitle: 'Assistance may be broad; execution must be narrow',
        ruleBody:
          'This preserves the value of AI support while making the highest-impact powers the hardest ones to use automatically.',
        ruleBullets: [
          'Grant least privilege by default',
          'Keep high-impact live actions behind approval',
          'Review agency expansion as a governance decision, not just an engineering feature',
        ],
        takeaway:
          'The most important control is often not whether the system can reason, but whether it can act before you do.',
      },
    ],
  },
  'main-agency-transfer': {
    type: 'transferCallout',
    eyebrow: 'Before You Continue',
    title: 'Carry these three oversight checks into the lab',
    description:
      'Use these checks whenever an AI workflow can do more than recommend, summarise, or draft.',
    prompt:
      'As you move into the lab placeholder, keep asking where the final authority still sits and what action the system should never take on its own.',
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
    type: 'interactiveLabPlaceholder',
    eyebrow: 'Interactive Lab',
    title: 'Interactive Lab',
    description:
      'This section is being prepared as the next hands-on supervision exercise. The teaching flow is already in place so the lab can plug into the same manager-facing sequence as the earlier sections.',
    frame: {
      role: 'You will be deciding how much authority an AI workflow should receive before it is allowed to act.',
      watch:
        'The key question will not be whether the model is useful, but where approval, execution, and accountability should still stay human.',
      emphasis:
        'This lab will focus on the moment automation becomes agency and on the specific pause points that should remain outside the model.',
    },
    placeholderEyebrow: 'Coming Next',
    placeholderTitle: 'Interactive supervision lab placeholder',
    placeholderBody:
      'The future lab will let you inspect agent-like workflows, choose where human approval must remain, and see how different permission designs change the risk of autonomous actions.',
    placeholderBullets: [
      'scenarios where the system can draft, approve, or execute',
      'manager decisions about approval thresholds and least privilege',
      'feedback on when a workflow has crossed from assistance into unsafe autonomy',
    ],
  },
  'main-agency-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-output-handling',
    nextPageId: 'main-platform-choice',
    caption: 'Section 8 of 12',
    nextLabel: 'Go to Platform Choice →',
  },
};
