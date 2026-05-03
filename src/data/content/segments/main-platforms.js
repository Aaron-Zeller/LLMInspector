export const mainPlatformSegments = {
  'main-platform-header': {
    type: 'pageHeader',
    tone: 'platform',
    eyebrow: 'Section 9 · Platform Choice',
    title: 'Different tools create different governance choices',
    description:
      'This final main-part section treats platform choice as a governance decision, not a brand comparison.',
    frame: {
      label: 'Your task',
      body: 'Choose the environment whose controls and ownership model fit the work, not simply the tool that feels easiest to adopt.',
    },
  },
  'main-platform-outcomes': {
    type: 'contentCards',
    tone: 'platform',
    eyebrow: 'Your Outcomes',
    title: 'What you should be able to decide before choosing a platform',
    description:
      'The question is not which brand feels smartest. It is which environment fits the work, the data, and your oversight model.',
    columns: 3,
    cards: [
      {
        tone: 'platform',
        eyebrow: 'Outcome 1',
        title: 'Separate capability from governance fit',
        body:
          'Recognise that two platforms can feel similarly capable while creating very different data, admin, and oversight implications.',
      },
      {
        tone: 'platform',
        eyebrow: 'Outcome 2',
        title: 'Match the tool to the sensitivity of the work',
        body:
          'Distinguish when a public tool is inappropriate, when an enterprise instance may be enough, and when a local or internal deployment is worth the operational cost.',
      },
      {
        tone: 'platform',
        eyebrow: 'Outcome 3',
        title: 'Ask governance questions before adoption',
        body:
          'Evaluate storage, training use, admin controls, retention, and oversight before teams normalise a tool through convenience alone.',
      },
    ],
  },
  'main-platform-intro': {
    type: 'platformChoiceWalkthrough',
    eyebrow: 'Worked Examples',
    title: 'Walk through the platform decision the way it actually appears at work',
    description:
      'Each case shows the business need, the trade-off, the failure mode, and the governance move you should require.',
    scenarios: [
      {
        id: 'public-cloud',
        eyebrow: 'Case 1',
        title: 'Fast adoption through a public tool',
        meta: 'Low friction, high ambiguity',
        role: 'Your Situation',
        headline: 'A team wants to use a popular public AI tool immediately because it is fast, accessible, and already familiar.',
        context:
          'The business need is real: faster drafting, summarisation, or ideation. The problem is that convenience can make the platform decision happen before anyone has asked what happens to the data afterward.',
        riskLabel: 'Public Cloud Risk',
        managerPressure:
          'Move quickly and avoid slowing the team with procurement or internal tooling delays.',
        managerDecision:
          'Decide whether immediate access is enough reason to let work start in a public environment without clear governance guarantees.',
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
          'Public tools remove friction: no procurement delay, low onboarding effort, and familiar interfaces. That makes them attractive even for teams that have not yet defined what data they should never receive.',
        needBullets: [
          'The entry barrier is low',
          'The feature set often feels immediately useful',
          'The organisation may not yet have an internal alternative ready',
        ],
        tradeoffTitle: 'Convenience often comes with weak governance clarity',
        tradeoffBody:
          'The relevant issue is not whether the model is smart enough. It is whether the organisation understands retention, training use, data boundaries, and administrative control well enough for the work being done.',
        tradeoffBullets: [
          'Terms and defaults may be unclear to ordinary users',
          'IT may have little visibility into who is using what',
          'Consumer convenience can hide enterprise governance gaps',
        ],
        consequenceTitle: 'The tool becomes standard before the rules exist',
        consequenceBody:
          'If the team adopts the platform casually, input risk, prompt-injection exposure, and weak output discipline all start living inside a tool the organisation has not actually governed.',
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
        meta: 'Better contracts, still real trade-offs',
        role: 'Your Situation',
        headline: 'The organisation considers an enterprise version of a mainstream platform because it offers admin controls and stronger contractual guarantees.',
        context:
          'This is often the most realistic middle ground: familiar capability with clearer governance. The mistake is assuming this solves every risk just because the contract looks stronger.',
        riskLabel: 'Managed Cloud Trade-off',
        managerPressure:
          'Give teams a powerful approved tool without taking on the full cost of an internal deployment.',
        managerDecision:
          'Decide whether improved provider guarantees are enough for the work, or whether the organisation still needs tighter boundaries around use and oversight.',
        decisionPrompt:
          'What is the stronger governance stance when an enterprise cloud instance is available?',
        decisionOptions: [
          {
            id: 'enterprise-solves-all',
            label: 'Once the enterprise contract is in place, most platform risk is effectively solved.',
            feedback:
              'That is too broad. Enterprise controls help a lot, but they do not remove output risk, unsafe prompts, or the need for internal policy and review.',
          },
          {
            id: 'enterprise-needs-governance',
            label: 'Use the stronger contract and admin controls, but still define internal rules for data classes, approvals, and output use.',
            feedback:
              'This is the stronger move. Better provider guarantees improve the platform choice, but they do not replace internal governance.',
            correct: true,
          },
        ],
        needTitle: 'The organisation needs a scalable middle path',
        needBody:
          'Enterprise instances often preserve usability while adding admin features, retention controls, and stronger commitments around training use. That makes them attractive for broad organisational rollout.',
        needBullets: [
          'Teams can use a familiar interface and model quality',
          'IT and security gain more visibility and control',
          'The organisation avoids some of the infrastructure burden of local hosting',
        ],
        tradeoffTitle: 'The contract improves the platform, not the whole workflow',
        tradeoffBody:
          'The input side may be better governed, but the organisation still has to manage prompt injection, hallucinations, downstream approvals, and who may do what with the tool.',
        tradeoffBullets: [
          'A safer provider does not make weak team habits safe',
          'Admin controls matter only if the organisation uses them deliberately',
          'Output verification remains necessary no matter where the model runs',
        ],
        consequenceTitle: 'The platform becomes a false sense of safety',
        consequenceBody:
          'If the enterprise label is treated like a blanket answer, teams may relax the very governance disciplines that still matter most once the model is in use.',
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
        meta: 'Higher privacy, higher operational burden',
        role: 'Your Situation',
        headline: 'The organisation considers hosting a model internally to avoid sending sensitive information to a public cloud.',
        context:
          'This is often the most attractive option for privacy-sensitive work. The governance mistake is assuming “local” automatically means “safe enough” without examining capability, maintenance, and output risk.',
        riskLabel: 'Operational Shift',
        managerPressure:
          'Protect sensitive information while still giving teams access to AI support.',
        managerDecision:
          'Decide whether the privacy gain justifies the operational complexity and whether the organisation is prepared to govern the new internal system properly.',
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
        needBullets: [
          'Sensitive information can remain inside controlled infrastructure',
          'The organisation can shape the environment more directly',
          'Some high-trust workflows may only be viable in this setting',
        ],
        tradeoffTitle: 'Privacy improves, but the burden moves inward',
        tradeoffBody:
          'The organisation now owns more of the system’s operational reality: maintenance, permissions, model quality limits, monitoring, and internal oversight choices.',
        tradeoffBullets: [
          'Internal hosting does not remove hallucinations or prompt injection',
          'Security and maintenance become the organisation’s job',
          'Capability, performance, and cost trade-offs may change what teams can rely on',
        ],
        consequenceTitle: 'The platform is safer on one axis and weaker on another',
        consequenceBody:
          'If the organisation adopts a local model without an operating model around it, teams may still face unsafe output, weak permissions, or neglected maintenance inside a more private environment.',
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
  'main-platform-cloud': {
    type: 'contentCards',
    eyebrow: 'Platform Paths',
    title: 'Three platform paths and the governance logic behind each one',
    description:
      'Focus on the structural path you are choosing, what it enables, and what governance burden comes with it.',
    columns: 3,
    cards: [
      {
        tone: 'platform',
        eyebrow: 'Path 1',
        title: 'Public consumer cloud',
        body:
          'Fast adoption and low friction, but usually the weakest clarity around organisational control, retention, and visibility. Use only with narrow scope boundaries and explicit exclusions.',
      },
      {
        tone: 'platform',
        eyebrow: 'Path 2',
        title: 'Enterprise cloud instance',
        body:
          'Usually the most practical middle ground: stronger contracts and admin controls, but still not a substitute for internal policy, role design, and output review.',
      },
      {
        tone: 'platform',
        eyebrow: 'Path 3',
        title: 'Local or internal deployment',
        body:
          'Potentially the strongest data boundary, but only if the organisation is ready to own the operating burden, permissions, maintenance, and continuing oversight.',
      },
    ],
  },
  'main-platform-close': {
    type: 'callout',
    variant: 'platform',
    icon: '◆',
    title: 'Your final decision rule',
    body:
      'Choose the platform path whose controls, ownership, and review expectations fit the work. Better infrastructure never replaces your internal boundaries, approval rules, or review discipline.',
    points: [
      'Decide which work may stay in public tools and which must move elsewhere.',
      'Separate platform approval from workflow approval and output approval.',
      'Assign ownership for admin settings, retention, and review standards before rollout.',
    ],
  },
  'main-platform-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-excessive-agency',
    nextPageId: 'post-assessment',
    caption: 'Section 9 of 12',
    nextLabel: 'Go to Post Assessment →',
  },
};
