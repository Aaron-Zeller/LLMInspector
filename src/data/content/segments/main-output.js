export const mainOutputSegments = {
  'main-output-header': {
    type: 'pageHeader',
    tone: 'output',
    eyebrow: 'Section 7 · Excessive Agency and Human Oversight',
    title: 'Keep powerful AI workflows inside real human boundaries',
    frame: {
      label: 'Your role in this section',
      body: 'You are deciding what happens after AI generates something useful, and where a human gate must remain before the workflow can act.',
    },
  },
  'main-output-outcomes': {
    type: 'contentCards',
    tone: 'output',
    description:
      'This section brings together two linked questions: what happens after generation, and when a helpful system has quietly gained too much authority.',
    columns: 2,
    cards: [
      {
        tone: 'output',
        body:
          'Part 1: match the review gate to the consequence of being wrong, especially when output influences customers, approvals, or operational systems.',
      },
      {
        tone: 'output',
        body:
          'Part 2: distinguish useful automation from unsafe autonomy, and keep permissions, escalation paths, and accountability attached to a real person or role.',
      },
    ],
  },
  'main-output-workflows': {
    type: 'outputHandlingWalkthrough',
    title: 'Part 1 · See how small review skips become downstream failures',
    description:
      'Each case shows what moved forward, which gate disappeared, and what should have been required before the handoff.',
    scenarios: [
      {
        id: 'bulk-email',
        role: 'Your Situation',
        headline: 'A campaign draft looks routine, so the team is tempted to let it send on schedule.',
        context:
          'The output is not malicious and the wording is mostly fine. The risk comes from sending it into a high-volume channel before anyone checks whether the final message is actually ready.',
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
        analysis: [
          {
            title: 'Summary',
            body: 'The AI output is no longer just a draft on a screen. It is about to become a real action at scale, which means the workflow has already crossed from generation into execution.',
          },
          {
            title: 'Possible Consequences:',
            body: [
              'A minor drafting error can turn into a visible customer incident once it reaches hundreds of inboxes.',
              'Corrections often attract more attention than the original campaign itself.',
              'Teams usually spend more time repairing the error than preventing it would have taken.',
            ],
          },
          {
            title: 'Questions Before You Approve:',
            body: [
              'Is this still just drafting, or is it about to become a public action?',
              'What is the consequence if one placeholder, wrong link, or bad claim escapes at scale?',
            ],
          },
          {
            title: 'Guidelines:',
            body: [
              'Keep a lightweight but mandatory final review gate before high-volume outbound communication is sent.',
              'Treat placeholders, regulated phrases, and public-facing claims as mandatory checks before distribution.',
            ],
          },
          {
            title: 'What The Team Should Hear:',
            body: [
              'Review the actual final message before distribution, not just the template.',
              'Keep the approval gate lightweight, but never optional for high-volume sends.',
            ],
          },
        ],
      },
    ],
  },
  'main-output-bridge': {
    type: 'moduleIntro',
    tone: 'output',
    paragraphs: [
      '**Part 2 · Excessive agency** begins where output review ends.',
      'The question is no longer whether the answer looks plausible. It is whether the system has been given authority to send, approve, or change something real without a person stopping it first.',
      'Keep the same managerial lens, but shift the checkpoint: you are now judging permissions and authority, not only output quality.',
    ],
  },
  'main-output-approve-escalate': {
    type: 'approveOrEscalate',
    tone: 'output',
    unlockRequirements: ['main-output-workflows', 'main-agency-intro'],
    eyebrow: 'Interactive Lab',
    title: 'Approve or Escalate?',
    description:
      'Five workplace scenarios. An AI output is already in front of you. Decide what should happen next: approve, review, or escalate. A cumulative risk meter shows what those choices add up to over time.',
    frame: {
      role: 'You are the person deciding what happens after the AI has already produced a usable-looking output.',
      watch:
        'Do not ask only whether the draft looks reasonable. Ask what follows if you let it move now.',
      emphasis:
        'This lab is about downstream judgement. The failure pattern is not only a wrong answer. It is a workflow that lets the wrong answer keep travelling.',
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
    debrief: {
      eyebrow: 'After the Lab',
      title: 'Self-check questions:',
      items: [
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
  },
  'main-output-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-misinformation',
    nextRequiresCompletion: ['main-output-approve-escalate'],
    nextPageId: 'main-platform-choice',
    caption: 'The lab is intentionally short and high-stakes: five decisions, one accumulated risk pattern.',
    nextLabel: 'Go to Platform Choice →',
  },
};
