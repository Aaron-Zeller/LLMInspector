export const mainOutputSegments = {
  'main-output-header': {
    type: 'pageHeader',
    tone: 'output',
    eyebrow: 'Section 7 · Improper Output Handling',
    title: 'The risk grows when unchecked output moves downstream',
    description:
      'This section shifts from “the model was wrong” to “the wrong output moved forward because the gate was too weak.”',
    frame: {
      label: 'Your task',
      body: 'Match every handoff to the consequence of being wrong before a draft becomes an action.',
    },
  },
  'main-output-outcomes': {
    type: 'contentCards',
    tone: 'output',
    eyebrow: 'Your Outcomes',
    title: 'What you should be able to do before AI output enters a real workflow',
    description:
      'This section is about what happens after generation: where to pause, who must review, and when escalation matters more than speed.',
    columns: 3,
    cards: [
      {
        tone: 'output',
        eyebrow: 'Outcome 1',
        title: 'Recognise when a draft is about to become an operational decision',
        body:
          'Spot the moment AI output stops being harmless text and starts influencing customers, systems, reports, or approvals.',
      },
      {
        tone: 'output',
        eyebrow: 'Outcome 2',
        title: 'Match the review gate to the consequence',
        body:
          'Decide when an output can be approved directly, when it needs review, and when it must be escalated before it moves any further.',
      },
      {
        tone: 'output',
        eyebrow: 'Outcome 3',
        title: 'Design workflows that keep accountability human',
        body:
          'Set thresholds, sign-off rules, and handoff logic so speed does not quietly replace control.',
      },
    ],
  },
  'main-output-workflows': {
    type: 'outputHandlingWalkthrough',
    eyebrow: 'Worked Examples',
    title: 'See how small review skips become downstream failures',
    description:
      'Each case shows what moved forward, which gate disappeared, and what you should have required before the handoff.',
    scenarios: [
      {
        id: 'bulk-email',
        eyebrow: 'Case 1',
        title: 'Bulk outbound email',
        meta: 'Client-facing communication',
        role: 'Your Situation',
        headline: 'A campaign draft looks routine, so the team is tempted to let it send on schedule.',
        context:
          'The output is not malicious and the wording is mostly fine. The risk comes from pushing it into a high-volume channel before anyone checks whether the final message is actually ready.',
        riskLabel: 'Customer Impact',
        decisionPrompt:
          'What is the safer stance when AI output is about to reach hundreds of customers at once?',
        decisionOptions: [
          {
            id: 'trust-template',
            label: 'If the draft follows a familiar template, approval can usually be automatic.',
            feedback:
              'That is too weak. Familiar structure does not remove the need to check what is actually about to be sent at scale.',
          },
          {
            id: 'review-before-send',
            label: 'Treat bulk outbound content as a high-consequence output and require a final review before send.',
            feedback:
              'This is the stronger move. The cost of one quick review is small compared with the cost of a mass error.',
            correct: true,
          },
        ],
        handoffTitle: 'A draft turns into an outbound action',
        handoffBody:
          'The AI output is no longer just text on a screen. It is about to become a real email in hundreds of inboxes, which means the workflow has crossed from drafting into execution.',
        handoffBulletsTitle: 'Why It Gets Approved In The Moment',
        handoffBullets: [
          'The channel is external, not internal',
          'The action is hard to reverse once sent',
          'One unnoticed placeholder or false claim multiplies instantly',
        ],
        failureTitle: 'The workflow skipped the last mile check',
        failureBody:
          'The team trusted the draft because it looked routine. What was missing was not a deep investigation, but a small review gate that checks the actual final output before distribution.',
        failureBulletsTitle: 'Questions Before You Approve',
        failureBullets: [
          'Template familiarity lowered attention',
          'The review step felt optional because the content was not strategic',
          'The workflow treated generation and publication as nearly the same thing',
        ],
        consequenceTitle: 'A trivial error becomes a visible incident',
        consequenceBody:
          'An unfilled variable, broken link, or wrong claim may be minor in isolation, but at scale it becomes a customer experience problem, a reputation problem, and often a rework problem.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'The message cannot be unsent',
          'Corrections often create more attention than the original campaign',
          'Teams spend more time repairing the error than preventing it would have taken',
        ],
        controlTitle: 'Require a pre-send gate for high-volume output',
        controlBody:
          'For mass outbound communication, the relevant control is not to distrust AI completely. It is to make sure publication still passes through a final human checkpoint.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Review the actual final message before distribution',
          'Treat placeholders, regulated phrases, and audience-facing claims as mandatory checks',
          'Keep the approval gate lightweight but non-optional',
        ],
        takeaway:
          'When output is about to become a customer action, generation is over and review must begin.',
      },
      {
        id: 'financial-threshold',
        eyebrow: 'Case 2',
        title: 'Refund or financial approval',
        meta: 'Threshold and delegation control',
        role: 'Your Situation',
        headline: 'The AI recommendation looks correct, but the amount or consequence exceeds the workflow’s delegated limit.',
        context:
          'The output may be accurate. The real issue is whether the workflow lets confidence in the answer override the authority boundary that should still govern the action.',
        riskLabel: 'Authority Boundary',
        decisionPrompt:
          'What matters more when an AI recommendation crosses a policy or value threshold?',
        decisionOptions: [
          {
            id: 'if-correct-approve',
            label: 'If the AI appears correct after a quick check, approving it is usually fine.',
            feedback:
              'That confuses factual confidence with authority. A correct recommendation can still require escalation if it crosses a control boundary.',
          },
          {
            id: 'threshold-beats-confidence',
            label: 'If the output crosses a threshold, escalation remains the correct path even when the recommendation looks right.',
            feedback:
              'This is the stronger move. Thresholds exist precisely so confidence does not quietly replace formal authority.',
            correct: true,
          },
        ],
        handoffTitle: 'The output is now asking for a consequential action',
        handoffBody:
          'At this point the question is no longer only “is the AI right?” The question is whether the workflow should allow this operator or system to act at this level at all.',
        handoffBulletsTitle: 'Why It Gets Approved In The Moment',
        handoffBullets: [
          'The value or impact exceeds routine handling',
          'The action creates an auditable decision trail',
          'Authority matters even when the recommendation feels reasonable',
        ],
        failureTitle: 'Confidence replaced delegation',
        failureBody:
          'The workflow treated a plausible AI recommendation as if it were permission. That bypasses the human authority design that should still govern financial or high-impact actions.',
        failureBulletsTitle: 'Questions Before You Approve',
        failureBullets: [
          'The operator may feel pressured to keep momentum',
          'The system wording can make the action sound pre-approved',
          'A correct recommendation can still be processed through the wrong path',
        ],
        consequenceTitle: 'The exception becomes your accountability problem',
        consequenceBody:
          'Once the action is approved outside the proper authority path, the issue is no longer just model quality. It becomes a governance, audit, and accountability failure.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'The action may be logged as a control exception',
          'Review later does not erase the path failure',
          'You inherit responsibility for the handoff, not only the outcome',
        ],
        controlTitle: 'Keep thresholds stronger than confidence',
        controlBody:
          'When outputs touch money, compliance, or exceptions, the workflow should preserve delegated authority even if the AI recommendation looks highly plausible.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Make value ceilings and escalation paths explicit',
          'Do not let “AI already checked it” substitute for authority',
          'Treat threshold breaches as workflow events, not optional judgement calls',
        ],
        takeaway:
          'A correct answer still needs the correct approval path.',
      },
      {
        id: 'system-write',
        eyebrow: 'Case 3',
        title: 'External system write or automated action',
        meta: 'Irreversible downstream effects',
        role: 'Your Situation',
        headline: 'An AI-generated output is about to update an external system, send a message, or trigger an automated workflow.',
        context:
          'The output may not look dramatic, but the system effect is. Once the action executes, rollback may be partial, delayed, or impossible.',
        riskLabel: 'Irreversible Action',
        decisionPrompt:
          'What is the stronger design stance once AI output can trigger a live system change?',
        decisionOptions: [
          {
            id: 'monitor-after',
            label: 'If the action is logged and monitored, it can usually proceed automatically.',
            feedback:
              'Logging is useful, but it is not the same as preventing a bad action. For irreversible or externally visible effects, prevention matters more than traceability alone.',
          },
          {
            id: 'confirm-before-write',
            label: 'If the action changes an external system or sends something real, keep a checkpoint before execution.',
            feedback:
              'This is the stronger move. Once the workflow can act, controls must exist before the write, not only after the fact.',
            correct: true,
          },
        ],
        handoffTitle: 'The output becomes a system event',
        handoffBody:
          'The handoff is no longer between two people. It is between a generated output and a live system, which raises the cost of being wrong even when the text itself looked ordinary.',
        handoffBulletsTitle: 'Why It Gets Approved In The Moment',
        handoffBullets: [
          'The effect may be invisible until later',
          'Rollback may be incomplete or operationally expensive',
          'The model’s draft has become a system instruction',
        ],
        failureTitle: 'The workflow removed the last human interruption',
        failureBody:
          'The system is no longer asking whether the action should happen. It is only asking whether the AI output exists. That is a control design problem, not merely a content problem.',
        failureBulletsTitle: 'Questions Before You Approve',
        failureBullets: [
          'Monitoring happens after the action',
          'A later audit cannot undo the original exposure',
          'The real missing safeguard is an execution checkpoint',
        ],
        consequenceTitle: 'The cost arrives downstream and often late',
        consequenceBody:
          'A wrong write, wrong recipient, or wrong record update can trigger delayed consequences that surface long after the AI output looked harmless.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Bad data can propagate into later reports or audits',
          'Customers or partners may experience the result before anyone reviews it',
          'The root cause becomes harder to trace once multiple systems have moved',
        ],
        controlTitle: 'Keep live actions behind live controls',
        controlBody:
          'As soon as output can cause an external system change, approval should focus on write permissions, execution gates, and reversibility rather than trusting the generated text.',
        controlBulletsTitle: 'What The Team Should Hear',
        controlBullets: [
          'Require confirmation before externally visible or irreversible actions',
          'Constrain which systems the workflow may write to',
          'Design review around execution impact, not only content quality',
        ],
        takeaway:
          'If the output can act, your workflow should treat it like a decision, not just a draft.',
      },
    ],
  },
  'main-output-transfer': {
    type: 'transferCallout',
    tone: 'output',
    eyebrow: 'Before You Continue',
    title: 'Carry these three output-handling checks into the labs',
    description:
      'Use these checks whenever AI output is about to leave the draft stage and enter a real workflow, audience, or system.',
    prompt:
      'As you work through the labs, keep asking what exactly happens between generation and use, and whether the current gate is strong enough for that consequence.',
    checks: [
      {
        title: 'What changes once this output moves forward?',
        body: 'A draft in a chat is different from an email, approval, code commit, or system write. The handoff changes the risk.',
      },
      {
        title: 'What review gate belongs at this moment?',
        body: 'The right question is not “should AI ever be used?” but “what check belongs before this exact kind of output is used?”',
      },
      {
        title: 'Who is still accountable after the model speaks?',
        body: 'The model may generate the content, but accountability for releasing, approving, or executing it remains human.',
      },
    ],
  },
  'main-output-approve-escalate': {
    type: 'approveOrEscalate',
    tone: 'output',
    eyebrow: 'Interactive Lab',
    title: 'Approve or Escalate?',
    description:
      'Seven workplace scenarios. An AI output is already in front of you. Choose how it should move next: approve, review, or escalate. A cumulative risk meter shows what those choices add up to over time.',
    frame: {
      role: 'You are the person deciding what happens after the AI has already produced a usable-looking output.',
      watch:
        'Do not ask only whether the draft looks reasonable. Ask what kind of consequence follows if you let it move now.',
      emphasis:
        'This lab is about downstream judgement. The failure pattern is not only a wrong answer. It is a workflow that let the wrong answer keep travelling.',
    },
    debrief: {
      eyebrow: 'After the Lab',
      title: 'What stronger output handling looks like',
      items: [
        {
          title: 'Match the gate to the consequence',
          body: 'Routine internal outputs can move faster. External, financial, regulated, or irreversible outputs need a stronger handoff before they continue.',
        },
        {
          title: 'Correctness is not the only question',
          body: 'Even a plausible or correct-looking output may still require escalation if it crosses a threshold, authority boundary, or release gate.',
        },
        {
          title: 'Workflow discipline prevents cumulative failure',
          body: 'One weak approval may seem manageable. Repeating that decision pattern is what turns AI convenience into systemic operational risk.',
        },
      ],
    },
    scenarios: [
      {
        id: 'aoe-s1',
        title: 'Weekly Internal Briefing',
        urgency: 'Routine · End of day deadline',
        context:
          'Your AI assistant has prepared the weekly internal performance summary for leadership. It aggregates sales figures from the internal BI dashboard. There is no client data, no recommendations, and no sensitive personal information.',
        aiOutputTitle: 'AI Draft: Internal Briefing',
        aiOutput:
          'Week 42 Performance Summary\n\nRevenue: €1.24M (↑ 3.1% vs. prior week)\nTop region: DACH (+8.2%)\nOpen pipeline: 47 deals, total value €3.8M\nNotable: Enterprise segment exceeded target for third consecutive week.\n\nFull breakdown attached.',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Send to leadership as-is',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Correct call',
              title: 'Efficient and appropriate',
              body:
                'This is exactly what AI-assisted automation is designed for: routine, internal, low-sensitivity information distribution. The data came from a controlled internal source and contains no personal data or external-facing content. Approving immediately is the right move.',
              lesson:
                'Not every AI output needs a review gate. Applying uniform caution to routine internal tasks creates friction without protecting anything. The skill is recognising when oversight adds value, and when it just adds delay.',
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review Before Sending',
            sublabel: 'Check figures manually',
            riskDelta: 5,
            consequence: {
              tone: 'warn',
              verdict: 'Overcautious',
              title: 'No issues found, but time was spent',
              body:
                'You reviewed the summary, confirmed all figures matched the BI dashboard, and sent it 22 minutes later than the deadline. No issues were found. The report was accurate.',
              lesson:
                'Reviewing low-risk internal reports is not wrong, but it can become a habit that crowds out oversight on tasks that actually need it. Calibrate your review effort to the actual risk level of the output.',
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Route to department head',
            riskDelta: 8,
            consequence: {
              tone: 'warn',
              verdict: 'Unnecessary escalation',
              title: 'Overhead without benefit',
              body:
                'The department head reviewed and approved the summary without changes. This added 90 minutes of delay to a routine weekly report and consumed a senior resource for a task that required no senior judgement.',
              lesson:
                'Escalation is a resource. Escalating low-risk, high-routine tasks dilutes the attention available for decisions that genuinely require senior oversight. Reserve escalation for situations where the stakes or the ambiguity justify it.',
            },
          },
        ],
      },
      {
        id: 'aoe-s2',
        title: 'Customer Courtesy Credit',
        urgency: 'Customer waiting · 1 day unresolved',
        context:
          'A customer contacted support after experiencing a 4-hour service outage. Your AI case system has assessed the complaint and recommends a €75 courtesy credit. Policy permits AI-assisted credits up to €200 without approval. The AI has correctly identified the outage in the system log.',
        aiOutputTitle: 'AI Case Decision',
        aiOutput:
          'Complaint Assessment: VALID\nService disruption confirmed: 4h 12m on Oct 14\nRecommended resolution: Courtesy credit: €75.00\nPolicy check: Within automated approval ceiling (€200 max)\nStatus: Awaiting operator confirmation.',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Confirm the credit',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Correct call',
              title: 'Policy used as intended',
              body:
                'The AI correctly identified a valid complaint and proposed a resolution within the approved ceiling. You confirmed it promptly. The customer received the credit within the hour and the case closed cleanly.',
              lesson:
                'Threshold controls and policy ceilings exist precisely so that routine, validated decisions can proceed without bottlenecks. Trusting the process here is the correct behaviour. The human role was to confirm, not re-investigate.',
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review the Case',
            sublabel: 'Verify the outage log',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Cautious but fine',
              title: 'Verified and approved',
              body:
                'You checked the system log directly, confirmed the 4-hour outage, and approved the credit. This added 8 minutes and confirmed what the AI had already found correctly.',
              lesson:
                'Reviewing a within-policy recommendation you are unsure about is a reasonable choice. Just be aware of the cost: if every within-ceiling decision gets individually reviewed, the automation ceiling loses its purpose.',
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Send to manager for sign-off',
            riskDelta: 5,
            consequence: {
              tone: 'warn',
              verdict: 'Unnecessary overhead',
              title: 'Manager approved without changes',
              body:
                'Your manager reviewed the case and approved the €75 credit. The process added 3 hours to the resolution time. No issues were identified. The manager noted that within-ceiling decisions do not require escalation.',
              lesson:
                'Escalating decisions that fall within the approved automation ceiling signals either a lack of trust in the policy or uncertainty about your own authority. Both can be addressed by clarifying what the policy boundary actually means.',
            },
          },
        ],
      },
      {
        id: 'aoe-s3',
        title: 'Marketing Email with Placeholder Error',
        urgency: 'Campaign launches in 2 hours',
        context:
          'Your AI content system has drafted a re-engagement email campaign for 450 lapsed customers. You are the campaign manager. The email is scheduled to send automatically in 2 hours unless you intervene.',
        aiOutputTitle: 'AI Draft: Re-engagement Email',
        aiOutput:
          'Subject: We miss you, [CUSTOMER NAME]\n\nHi [CUSTOMER NAME],\n\nIt\'s been a while since we\'ve seen you, and we\'d love to welcome you back.\n\nAs a valued customer, we\'re offering you an exclusive 20% discount on your next order, valid until October 31.\n\nClick below to claim your offer.\n\nWarm regards,\nThe Team',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Let it send as scheduled',
            riskDelta: 28,
            consequence: {
              tone: 'danger',
              verdict: 'Output error undetected',
              title: '450 customers received a broken email',
              body:
                "The email went out with '[CUSTOMER NAME]' unreplaced in both the subject line and body. 450 customers received it. Within 2 hours, 23 complaints arrived and 11 customers unsubscribed. The campaign had to be recalled and a correction sent.",
              lesson:
                "AI output errors are not always semantic. Sometimes they are literal, like an unfilled template variable. A single human review of the final output before a bulk send is a minimal safeguard with outsized value. The AI did not fail at content; it failed at a step the pipeline should have enforced.",
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review Before Send',
            sublabel: 'Read the draft carefully',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Error caught in time',
              title: 'Campaign corrected before launch',
              body:
                'Reading the first few lines of the draft revealed the unfilled placeholder immediately. You corrected the template variable, re-ran the personalisation step, and the campaign launched on time with clean output.',
              lesson:
                "Bulk outbound communications are a high-consequence category: an error reaches hundreds of customers simultaneously and cannot be unsent. A review step before any mass send, even when the content looks routine, is proportionate and necessary.",
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Flag to marketing lead',
            riskDelta: 8,
            consequence: {
              tone: 'warn',
              verdict: 'Error caught, but slowly',
              title: 'Campaign delayed by 3 hours',
              body:
                'The marketing lead eventually identified the placeholder error, but the review took 3 hours and the campaign missed its optimal send window. The error was caught before it reached customers.',
              lesson:
                'Escalating to a manager for a content review task adds overhead that was not necessary here. The issue was findable with a direct read. Marketing content errors are within the campaign manager\'s authority to catch and fix. The right call was a direct review, not a handoff.',
            },
          },
        ],
      },
      {
        id: 'aoe-s4',
        title: 'Scheduled Maintenance Notification',
        urgency: 'Routine · Maintenance window in 48 hours',
        context:
          'Your AI operations assistant has drafted a maintenance window notification for internal staff. The outage is a planned 3-hour infrastructure update confirmed by the ops team. The notification is internal-only, contains no sensitive data, and follows the standard format.',
        aiOutputTitle: 'AI Draft: Internal Maintenance Notice',
        aiOutput:
          'PLANNED MAINTENANCE NOTICE\n\nDate: Saturday, October 26 | 02:00–05:00 CET\nImpacted systems: Customer portal, internal CRM\nAction required: Save all work before 01:45 CET\n\nFor urgent issues during the window, contact ops-on-call@company.com\n\nThis notice has been generated and verified against the confirmed maintenance schedule.',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Send to all staff',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Correct call',
              title: 'Routine communication handled efficiently',
              body:
                'The notification was accurate, internally sourced, and non-sensitive. Staff received advance notice with clear instructions. No issues arose.',
              lesson:
                'Standardised internal operational communications are an ideal use case for AI-assisted automation. When the content is verified against a system of record and the audience is internal, routine approval is appropriate.',
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review the Draft',
            sublabel: 'Cross-check the schedule',
            riskDelta: 3,
            consequence: {
              tone: 'warn',
              verdict: 'Correct but cautious',
              title: 'No changes needed: 15 minutes spent',
              body:
                'You cross-referenced the maintenance window against the ops calendar. Everything matched. The notification went out unchanged.',
              lesson:
                "Cross-checking a maintenance notice against a source you trust is a reasonable instinct, but for routine operational communications the overhead may not be justified. If you find yourself reviewing this type of output every time, consider whether the review adds real value or just adds friction.",
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Get ops lead sign-off',
            riskDelta: 5,
            consequence: {
              tone: 'warn',
              verdict: 'Unnecessary escalation',
              title: 'Ops lead approved without changes: 40 minutes added',
              body:
                'The ops lead confirmed the maintenance window matched the schedule and approved the notification unchanged. The delay reduced the lead time staff had to prepare.',
              lesson:
                'Operational notifications generated from a verified source and addressed to internal staff do not require management escalation. Routing routine approvals through a senior resource increases process latency without improving outcomes.',
            },
          },
        ],
      },
      {
        id: 'aoe-s5',
        title: 'Client Portfolio Email with Account Data',
        urgency: 'Time-sensitive · 30 min to meeting',
        context:
          'An AI assistant has drafted an email to a wealth management client summarising their Q3 portfolio performance. You are the relationship manager and must send it before the client meeting. The draft is ready to go.',
        aiOutputTitle: 'AI Draft: Client Email',
        aiOutput:
          'Dear Mr. Hartmann,\n\nYour portfolio (Account #CH-20044-88) recorded a value of €127,450 at Q3 close, representing an 8.3% decline.\n\nBased on current volatility projections, we recommend reducing your equity exposure from 65% to 45% effective next week.\n\nBest regards,\nWealth Management Team',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Send as drafted',
            riskDelta: 30,
            consequence: {
              tone: 'danger',
              verdict: 'Compliance failure',
              title: 'Sensitive data sent without review',
              body:
                "The email included the client's full account number and exact portfolio value, both classified as sensitive personal data under GDPR and the firm's data processing agreement. Once sent, this cannot be recalled. The client's data left a controlled channel without compliance review.",
              lesson:
                'AI drafts for external communications must always be checked for sensitive data fields before sending. Account numbers and precise financial figures require specific handling under most data processing agreements. The time pressure was real, but it does not remove the obligation.',
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review and Edit',
            sublabel: 'Revise before sending',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Risk identified and removed',
              title: 'Email corrected and sent on time',
              body:
                'You caught the raw account number and replaced it with the approved masked format. You also removed the specific percentage recommendation, a field that triggers investment advice regulations, and substituted a general reference. The email went out 12 minutes later and passed compliance review.',
              lesson:
                'A structured review checklist for AI-drafted client communications (sensitive data fields, regulated language, investment recommendation triggers) takes less than two minutes and prevents reportable data incidents. This was the right call.',
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Flag for compliance review',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Risk contained via proper channel',
              title: 'Compliance team reformatted and sent',
              body:
                'The compliance team reformatted the email using an approved template that avoids raw account references and specific portfolio values. The client received a policy-compliant communication. The meeting proceeded without incident.',
              lesson:
                "Client-facing communications involving account data and financial recommendations benefit from compliance review. Escalating when you are unsure is a legitimate and responsible choice. The cost here was a few minutes, not a reportable data incident.",
            },
          },
        ],
      },
      {
        id: 'aoe-s6',
        title: 'Out-of-Policy Refund',
        urgency: 'Customer waiting · 3 days unresolved',
        context:
          'Your AI customer service system has reviewed a refund request and determined the customer qualifies. Policy permits AI-assisted approvals up to €500 without manager sign-off. This refund is €2,400.',
        aiOutputTitle: 'AI Recommendation',
        aiOutput:
          'Refund Decision: APPROVED\nAmount: €2,400.00\nReason: Customer complaint validated. Service failure confirmed.\nStatus: Queued for processing, awaiting operator confirmation.',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Approve',
            sublabel: 'Confirm immediately',
            riskDelta: 35,
            consequence: {
              tone: 'danger',
              verdict: 'Policy bypassed',
              title: 'Threshold control circumvented',
              body:
                "The €2,400 refund processed without required manager sign-off. The finance audit flagged the exception: this amount is 4.8× the approved AI-decision ceiling. The transaction appears in the compliance log as an unauthorised exception and sits with you personally.",
              lesson:
                'Threshold controls exist precisely for this situation. An AI recommendation is not an authorisation. The €500 ceiling ensures consequential financial decisions stay with a human approver regardless of how confident the AI output appears.',
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Review and Approve',
            sublabel: 'Verify the case, then confirm',
            riskDelta: 20,
            consequence: {
              tone: 'warn',
              verdict: 'Delegation limit exceeded',
              title: 'Approved, but outside your authority',
              body:
                "You confirmed the service failure was genuine and approved the refund under your own authority. The AI's assessment was correct, but the approval still exceeded your delegation limit. Accountability sits with you personally, and the exception was logged.",
              lesson:
                "Verifying that the AI was right does not change the approval authority rules. When an amount exceeds the AI approval ceiling, escalation is the required path regardless of confidence in the outcome. The investigation was useful; the approval was not yours to make.",
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Escalate',
            sublabel: 'Route to manager sign-off',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Controls maintained',
              title: 'Escalation followed the correct path',
              body:
                "The manager reviewed the case, confirmed the refund was legitimate, and approved it with a documented exception. The customer received the refund within 2 hours. The process remained auditable and compliant.",
              lesson:
                "Escalation is not a delay. It is a control. The customer's wait extended by 2 hours, but the organisation's financial controls stayed intact and the exception was properly documented. The AI did its job; so did you.",
            },
          },
        ],
      },
      {
        id: 'aoe-s7',
        title: 'Flagged Wire Transfer',
        urgency: 'Critical · Completes automatically in 12 minutes',
        context:
          'Your AI risk system has flagged an outbound wire transfer as unusual but did not block it. The system is configured to flag and continue unless a human intervenes. You are the only operator online.',
        aiOutputTitle: 'Risk System Alert',
        aiOutput:
          'TRANSACTION FLAGGED: AUTO-PROCEEDING\nAmount: €15,000 | Destination: New account (created 6 days ago)\nPattern: Unusual for account history | Confidence: 61% anomalous\nStatus: Proceeding in 12 minutes unless manually blocked.',
        options: [
          {
            id: 'approve',
            icon: '✅',
            label: 'Allow Transfer',
            sublabel: 'Let it proceed as flagged',
            riskDelta: 40,
            consequence: {
              tone: 'danger',
              verdict: 'Oversight failure',
              title: 'Fraudulent transfer completed',
              body:
                "The €15,000 transfer completed. Three days later it was confirmed as a fraudulent instruction. The account was created by a social engineering attacker. The AI flagged it correctly at 61% confidence. No human intervened.",
              lesson:
                "A 61% anomaly flag on a large transfer to a 6-day-old account is not a green light. It is a request for human judgement. 'Auto-proceeding' means the system defaulted because no oversight was present, not that it determined the transaction was safe.",
            },
          },
          {
            id: 'review',
            icon: '🔍',
            label: 'Investigate',
            sublabel: 'Hold and review the case',
            riskDelta: 10,
            consequence: {
              tone: 'warn',
              verdict: 'Good outcome, slower path',
              title: 'Transfer paused: investigation opened',
              body:
                'You placed a manual hold and reviewed the account. A 6-day-old destination with no prior activity raised concerns. You escalated to the fraud team who confirmed the issue within 40 minutes and blocked the transfer permanently.',
              lesson:
                'Investigating the flag was the right instinct and led to the correct outcome. For transfers of this value to brand-new accounts, direct escalation to the fraud team is faster and more appropriate than an individual operator investigation. Time was the critical variable.',
            },
          },
          {
            id: 'escalate',
            icon: '⛔',
            label: 'Block and Escalate',
            sublabel: 'Stop transfer, alert fraud team',
            riskDelta: 0,
            consequence: {
              tone: 'success',
              verdict: 'Threat neutralised',
              title: 'Best response to a live risk signal',
              body:
                "You blocked the transfer immediately and alerted the fraud team. They confirmed the account as fraudulent within 20 minutes and opened a case. The customer was protected and the attacker's method was logged for pattern analysis.",
              lesson:
                'When a risk system flags a large transfer to a brand-new account, the correct response is immediate escalation to the specialist team, not individual investigation. Your role in this moment is to stop the clock, not solve the case.',
            },
          },
        ],
      },
    ],
  },
  'main-output-system-tuning': {
    type: 'systemTuning',
    tone: 'output',
    eyebrow: 'Interactive Lab',
    title: 'Too Much Power',
    description:
      'Adjust two controls (Automation Level and External Access) and watch how efficiency, risk, oversight, and failure probability shift in real time. Then simulate a working day and see what the workflow actually does under that configuration.',
    frame: {
      role: 'You are configuring how much autonomy and system reach an AI workflow should get before it goes live.',
      watch:
        'Do not look only at efficiency. Watch what becomes irreversible, what loses oversight, and which failures surface only after the action has already happened.',
      emphasis:
        'This lab turns output handling into a systems question. The issue is not only what the AI says, but what your configuration allows its output to trigger.',
    },
    debrief: {
      eyebrow: 'After the Lab',
      title: 'What stronger configuration decisions look like',
      items: [
        {
          title: 'More automation is not a neutral upgrade',
          body: 'Every increase in autonomy changes the handoff between output and action. The right question is what safeguards expanded along with that power.',
        },
        {
          title: 'Access level and review gates have to move together',
          body: 'Read-only suggestions, external writes, and automated sends cannot share the same approval logic. System reach should tighten the workflow, not loosen it.',
        },
        {
          title: 'Downstream failures are often delayed',
          body: 'A configuration can look efficient in the morning and still create audit, compliance, or customer problems later in the day. Design for the delayed consequence, not only the immediate success path.',
        },
      ],
    },
  },
  'main-output-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-misinformation',
    nextPageId: 'main-excessive-agency',
    caption: 'Section 7 of 12',
    nextLabel: 'Go to Human Oversight →',
  },
};
