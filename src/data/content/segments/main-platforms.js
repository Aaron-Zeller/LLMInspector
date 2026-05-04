export const mainPlatformSegments = {
  'main-platform-header': {
    type: 'pageHeader',
    tone: 'platform',
    eyebrow: 'Section 8 · Platform Choice',
    title: 'Different tools create different governance choices',
    frame: {
      label: 'Your role in this section',
      body: 'You are deciding which environment fits the work, and what governance obligations come with that choice before usage becomes routine.',
    },
  },
  'main-platform-outcomes': {
    type: 'contentCards',
    tone: 'platform',
    description:
      'The real question is not which brand feels smartest. It is which environment fits the work, the data, and your oversight model.',
    columns: 2,
    cards: [
      {
        tone: 'platform',
        body:
          'Recognise that two platforms can feel similarly capable while creating very different implications for data, administration, and oversight.',
      },
      {
        tone: 'platform',
        body:
          'Distinguish when a public tool is inappropriate, when an enterprise instance may be enough, and when local deployment is worth the operational burden.',
      },
    ],
  },
  'main-platform-intro': {
    type: 'platformChoiceWalkthrough',
    title: 'Walk through the platform decision the way it actually appears at work',
    description:
      'Each case shows the business need, the trade-off, the failure mode, and the governance move that should be required.',
    scenarios: [
      {
        id: 'public-cloud',
        eyebrow: 'Case 1',
        title: 'Fast adoption through a public tool',
        role: 'Your Situation',
        headline: 'A team wants to use a popular public AI tool immediately because it is fast, accessible, and already familiar.',
        context:
          'The business need is real: faster drafting, summarisation, or ideation. The problem is that convenience can make the platform decision happen before anyone asks what happens to the data afterward.',
        summary:
          'The team genuinely needs speed, but convenience can turn an unexamined platform choice into de facto policy before any boundary has been set.',
        riskLabel: 'Public Cloud Risk',
        decisionPrompt:
          'What is the stronger first move when a public tool is the fastest option available?',
        decisionOptions: [
          {
            id: 'allow-until-problem',
            label: 'Allow it for now and revisit the governance questions only if a concrete issue appears later.',
            feedback:
              'That is too reactive. Once the tool becomes routine, unsafe data habits can spread faster than governance can catch up.',
          },
          {
            id: 'decide-before-normalise',
            label: 'Pause long enough to decide what data classes and use cases this public environment should or should not receive.',
            feedback:
              'This is the stronger move. The key governance question should be answered before convenience becomes policy by default.',
            correct: true,
          },
        ],
        needTitle: 'The team genuinely needs speed',
        needBody:
          'Public tools remove friction: no procurement delay, low onboarding effort, and familiar interfaces. That makes them attractive even when teams have not yet defined what data those tools should never receive.',
        needBulletsTitle: 'Why It Gets Approved In The Moment',
        needBullets: [
          'The entry barrier is low',
          'The feature set often feels immediately useful',
          'The organisation may not yet have an internal alternative ready',
        ],
        tradeoffTitle: 'Convenience often comes with weak governance clarity',
        tradeoffBody:
          'The relevant issue is not whether the model is smart enough. It is whether the organisation understands retention, training use, data boundaries, and administrative control well enough for the work being done.',
        tradeoffBulletsTitle: 'Questions Before You Approve',
        tradeoffBullets: [
          'Terms and defaults may be unclear to ordinary users',
          'IT may have little visibility into who is using what',
          'Consumer convenience can hide enterprise governance gaps',
        ],
        consequenceTitle: 'The tool becomes standard before the rules exist',
        consequenceBody:
          'If the team adopts the platform casually, input risk, prompt-injection exposure, and weak output discipline all end up living inside a tool the organisation has not actually governed.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Sensitive work may drift into an unsuitable environment',
          'Different teams may build inconsistent practices on the same tool',
          'Governance becomes a clean-up task instead of an adoption decision',
        ],
        controlTitle: 'Decide platform scope before behaviour scales',
        controlBody:
          'If a public platform is allowed at all, the organisation should define what categories of work belong there and what categories do not before usage spreads by habit.',
        controlBullets: [
          'Set explicit data and use-case boundaries',
          'Communicate what is out of scope, not only what is convenient',
          'Treat access decisions as policy, not personal preference',
        ],
        managerGoal:
          'Preserve speed for low-risk use cases without letting convenience become default policy.',
        designMove: 'Use explicit scope boundaries instead of informal tolerance.',
        unsafeTitle: 'Let teams self-define what “probably fine” means',
        unsafeBody:
          'Without a written boundary, individual users decide case by case what to upload, paste, or ask, which creates inconsistent governance across the organisation.',
        unsafeWhy:
          'This feels flexible in the short term, but it creates more risk drift than actual clarity.',
        verifyTitle: 'Define a narrow approved scope first',
        verifyBody:
          'If the organisation allows public tools at all, it should be clear which data classes, tasks, and outputs are still excluded.',
        standardLabel: 'Governance Check',
        standardTitle: 'Make scope visible before usage spreads',
        standardBody:
          'A usable public-tool policy should tell people both what they may do and what they must not do with that environment.',
        standardChecks: [
          'Which data classes are explicitly out of scope?',
          'Which tasks are acceptable only in approved enterprise or internal tools?',
          'Who is responsible for communicating and updating the boundary?',
        ],
        ruleLabel: 'Team Rule',
        ruleTitle: 'Public tools may be convenient, but their scope is narrow',
        ruleBody:
          'Keep low-risk drafting and ideation possible if you want, but do not let convenience become permission for more sensitive work.',
        ruleBulletsTitle: 'What The Team Should Hear',
        ruleBullets: [
          'List prohibited data and task categories explicitly',
          'Route higher-sensitivity work to better-governed environments',
          'Review public-tool usage as a policy issue, not a personal habit',
        ],
        takeaway:
          'The fastest platform choice is often the one that most needs an explicit boundary first.',
      },
      {
        id: 'enterprise-cloud',
        eyebrow: 'Case 2',
        title: 'Enterprise cloud instance',
        role: 'Your Situation',
        headline: 'The organisation considers an enterprise version of a mainstream platform because it offers admin controls and stronger contractual guarantees.',
        context:
          'This is often the most realistic middle ground: familiar capability with clearer governance. The mistake is assuming it solves every risk just because the contract is stronger.',
        summary:
          'An enterprise platform can improve the environment substantially, but it still needs internal rules for data, access, and output use if the approval is going to mean anything in practice.',
        riskLabel: 'Managed Cloud Trade-off',
        decisionPrompt:
          'What is the stronger governance stance when an enterprise cloud instance is available?',
        decisionOptions: [
          {
            id: 'enterprise-needs-governance',
            label: 'Use the stronger contract and admin controls, but still define internal rules for data classes, approvals, and output use.',
            feedback:
              'This is the stronger move. Better provider guarantees improve the platform choice, but they do not replace internal governance.',
            correct: true,
          },
          {
            id: 'enterprise-solves-all',
            label: 'Once the enterprise contract is in place, most platform risk is effectively solved.',
            feedback:
              'That is too broad. Enterprise controls help a lot, but they do not remove output risk, unsafe prompts, or the need for internal policy and review.',
          },
        ],
        needTitle: 'The organisation needs a scalable middle path',
        needBody:
          'Enterprise instances often preserve usability while adding admin features, retention controls, and stronger commitments around training use. That makes them attractive for broad organisational rollout.',
        needBulletsTitle: 'Why It Gets Approved In The Moment',
        needBullets: [
          'Teams can use a familiar interface and model quality',
          'IT and security gain more visibility and control',
          'The organisation avoids some of the infrastructure burden of local hosting',
        ],
        tradeoffTitle: 'The contract improves the platform, not the whole workflow',
        tradeoffBody:
          'The input side may be better governed, but the organisation still has to manage prompt injection, hallucinations, downstream approvals, and who may do what with the tool.',
        tradeoffBulletsTitle: 'Questions Before You Approve',
        tradeoffBullets: [
          'A safer provider does not make weak team habits safe',
          'Admin controls matter only if the organisation uses them deliberately',
          'Output verification remains necessary no matter where the model runs',
        ],
        consequenceTitle: 'The platform becomes a false sense of safety',
        consequenceBody:
          'If the enterprise label is treated like a blanket answer, teams may relax the very governance disciplines that still matter most once the model is in use.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Users may over-trust output because the tool is “approved”',
          'Sensitive use cases may still need narrower controls',
          'Platform approval can be confused with workflow approval',
        ],
        controlTitle: 'Treat enterprise choice as the start of governance, not the end',
        controlBody:
          'Enterprise platforms are often a strong option, but they still need internal role design, retention choices, access policies, and output review expectations around them.',
        controlBullets: [
          'Use admin controls deliberately rather than symbolically',
          'Map data classes to allowed use cases explicitly',
          'Keep output and workflow controls as separate responsibilities',
        ],
        managerGoal: 'Enable broad usage in a provider environment with stronger guardrails.',
        designMove: 'Treat platform approval and workflow approval as separate governance steps.',
        unsafeTitle: 'Assume the enterprise label solves the risk by itself',
        unsafeBody:
          'Teams may hear “approved platform” and conclude that any use within it is acceptable, even when the task, data, or downstream action still needs local rules.',
        unsafeWhy:
          'The procurement decision feels like the hard part, so internal governance can accidentally become vague afterward.',
        verifyTitle: 'Wrap the approved platform in an internal operating model',
        verifyBody:
          'Use the stronger provider environment, but still decide access roles, retention settings, allowed use cases, and oversight expectations inside the organisation.',
        standardLabel: 'Governance Check',
        standardTitle: 'Ask what the organisation still has to decide',
        standardBody:
          'The provider can improve the environment, but the organisation still owns usage policy, admin setup, and the output-side workflow rules around the tool.',
        standardChecks: [
          'Who controls workspace access and retention settings?',
          'Which use cases still need escalation or specialist approval?',
          'How will teams be taught the difference between platform approval and content approval?',
        ],
        ruleLabel: 'Team Rule',
        ruleTitle: 'An approved platform still needs approved ways of using it',
        ruleBody:
          'This keeps the enterprise environment valuable without letting the approval label blur the remaining governance decisions.',
        ruleBulletsTitle: 'What The Team Should Hear',
        ruleBullets: [
          'Use admin controls intentionally',
          'Document allowed and disallowed use cases by role',
          'Keep output verification and approval rules separate from platform choice',
        ],
        takeaway:
          'An enterprise platform can improve the environment, but it does not remove the need for internal governance discipline.',
      },
      {
        id: 'local-internal',
        eyebrow: 'Case 3',
        title: 'Local or internal deployment',
        role: 'Your Situation',
        headline: 'The organisation considers hosting a model internally to avoid sending sensitive information to a public cloud.',
        context:
          'This is often the most attractive option for privacy-sensitive work. The governance mistake is assuming “local” automatically means “safe enough” without examining capability, maintenance, and output risk.',
        summary:
          'Internal hosting can improve the privacy boundary, but it also moves responsibility inward. The governance question is no longer just where the model runs, but who owns it once it does.',
        riskLabel: 'Operational Shift',
        decisionPrompt:
          'What is the stronger stance when a local or internal model seems safest on paper?',
        decisionOptions: [
          {
            id: 'local-means-safe',
            label: 'If the model runs locally, the main governance problem is basically solved.',
            feedback:
              'That is too simplistic. Local deployment changes the privacy picture, but it does not remove hallucinations, prompt injection, permission design, or maintenance responsibilities.',
          },
          {
            id: 'local-needs-operating-model',
            label: 'Treat internal deployment as a shift in responsibility: stronger privacy, but also stronger operational and governance obligations.',
            feedback:
              'This is the stronger move. Internal hosting can be appropriate, but only if the organisation is ready to own the platform, not just install it.',
            correct: true,
          },
        ],
        needTitle: 'The organisation wants tighter data control',
        needBody:
          'Internal deployment can reduce exposure to public-cloud handling and may fit work that involves highly sensitive data or stricter regulatory expectations.',
        needBulletsTitle: 'Why It Gets Approved In The Moment',
        needBullets: [
          'Sensitive information can remain inside controlled infrastructure',
          'The organisation can shape the environment more directly',
          'Some high-trust workflows may only be viable in this setting',
        ],
        tradeoffTitle: 'Privacy improves, but the burden moves inward',
        tradeoffBody:
          'The organisation now owns more of the system’s operational reality: maintenance, permissions, model quality limits, monitoring, and internal oversight choices.',
        tradeoffBulletsTitle: 'Questions Before You Approve',
        tradeoffBullets: [
          'Internal hosting does not remove hallucinations or prompt injection',
          'Security and maintenance become the organisation’s job',
          'Capability, performance, and cost trade-offs may change what teams can rely on',
        ],
        consequenceTitle: 'The platform is safer on one axis and weaker on another',
        consequenceBody:
          'If the organisation adopts a local model without an operating model around it, teams may still face unsafe output, weak permissions, or neglected maintenance inside a more private environment.',
        consequenceBulletsTitle: 'What This Costs You',
        consequenceBullets: [
          'Privacy gains can be offset by weak internal controls',
          'Operational burden can quietly reduce reliability or oversight',
          'A local system can still create the same output-side failures discussed earlier',
        ],
        controlTitle: 'Choose local deployment only with a real operating model',
        controlBody:
          'Internal hosting should come with clear ownership for permissions, monitoring, updates, model limitations, and acceptable use, not just a server to run it on.',
        controlBullets: [
          'Define who owns the platform operationally',
          'Keep the same output-side controls as any other model',
          'Do not confuse infrastructure location with complete governance',
        ],
        managerGoal: 'Protect highly sensitive work while still supporting useful AI tasks.',
        designMove:
          'Adopt internal hosting only with clear platform ownership and continuing governance.',
        unsafeTitle: 'Treat local hosting as automatic safety',
        unsafeBody:
          'The organisation may focus on data location and overlook the fact that permissions, maintenance, model limitations, and output governance still need active ownership.',
        unsafeWhy:
          'Privacy gains feel concrete, which can overshadow the operational risks that move inward with the deployment.',
        verifyTitle: 'Choose internal only with an operating model',
        verifyBody:
          'The right question is not only “can we host it?” but “who will govern, maintain, monitor, and constrain it once we do?”',
        standardLabel: 'Governance Check',
        standardTitle: 'Check readiness, not only preference',
        standardBody:
          'Internal deployment is strongest when the organisation is ready to own platform operations and still apply the same output-side discipline as anywhere else.',
        standardChecks: [
          'Who owns security, updates, and permissions?',
          'How will usage be monitored and limited by role?',
          'Are teams being told clearly that local does not mean infallible?',
        ],
        ruleLabel: 'Team Rule',
        ruleTitle: 'Local hosting changes ownership, not the need for governance',
        ruleBody:
          'This keeps internal deployment from becoming a false comfort. The platform may be private, but it still needs policy, oversight, and operational stewardship.',
        ruleBulletsTitle: 'What The Team Should Hear',
        ruleBullets: [
          'Assign explicit platform ownership',
          'Retain the same output-review and approval discipline',
          'Treat local deployment as a governed product, not just infrastructure',
        ],
        takeaway:
          'Local deployment changes where the risk sits, not whether governance is still required.',
      },
    ],
  },
  'main-platform-close': {
    type: 'callout',
    variant: 'platform',
    icon: '◆',
    title: 'Default decision order',
    body:
      'When you are choosing between the three paths, do not start with brand familiarity. Start with data sensitivity, the governance burden, and the amount of authority the workflow will eventually carry.',
    points: [
      'Start with the narrowest acceptable public-tool scope, not with broad convenience.',
      'Move to an enterprise instance when teams need wider use, admin control, and clearer contractual boundaries.',
      'Choose local or internal deployment only when the privacy boundary matters enough to justify real platform ownership, maintenance, and continuing oversight.',
      'Separate platform approval from workflow approval and output approval.',
      'If no one can name the owner of retention, permissions, and review standards, the platform is not ready for routine use.',
    ],
  },
  'main-platform-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-output-handling',
    nextPageId: 'post-assessment',
    nextLabel: 'Go to Post Assessment →',
  },
};
