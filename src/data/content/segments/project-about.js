const EU_AI_ACT_URL = 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=en';
const EU_WORKPLACE_AI_URL =
  'https://digital-strategy.ec.europa.eu/en/news/commission-survey-shows-most-europeans-support-use-artificial-intelligence-workplace';
const MCKINSEY_AI_2024_URL =
  'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024';
const NIST_AIRMF_URL = 'https://www.nist.gov/itl/ai-risk-management-framework';
const NCSC_SECURE_AI_URL =
  'https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development';
const ICO_AI_TOOLKIT_URL =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/ai-and-data-protection-risk-toolkit/';
const OWASP_GENAI_URL =
  'https://owasp.org/www-project-top-10-for-large-language-model-applications';
const MITRE_ATLAS_URL = 'https://atlas.mitre.org/pdf-files/MITRE_ATLAS_Fact_Sheet.pdf';
const OECD_AI_WORK_URL =
  'https://www.oecd.org/en/about/projects/aisurveysofemployersandworkers.html';
const AI_LITERACY_CANVAS_URL =
  'https://www.sciencedirect.com/science/article/pii/S0007681325001673';
const GDPR_AI_STUDY_URL =
  'https://www.europarl.europa.eu/stoa/en/document/EPRS_STU%282020%29641530';

export const projectAboutSegments = {
  'project-about-header': {
    type: 'pageHeader',
    eyebrow: 'Project Website',
    title: 'About COLORCODE',
  },
  'project-about-intro': {
    type: 'projectAboutLead',
    paragraphs: [
      'COLORCODE was designed for a moment in which AI adoption is moving faster than organisational judgement. The project therefore treats AI literacy not as a technical deep dive, but as a workplace governance problem.',
      'The result is a compact learning experience for managers who need to decide what can be shared with an AI system, what must be verified before it travels further, and where human responsibility must remain visible.',
    ],
  },
  'project-about-about': {
    type: 'projectAboutSection',
    headerFullWidth: true,
    chapter: 'About',
    title: 'Problem, audience, and rationale',
    description:
      'This chapter explains why the project exists, who it is for, how learning is assessed, and which sources and design decisions shaped the tool.',
    stats: [
      {
        value: '65%',
        label: 'Organisations using generative AI',
        body:
          'McKinsey reported in 2024 that 65% of surveyed organisations were regularly using generative AI in at least one business function.',
        showSourceIndex: false,
        sources: [{ label: 'McKinsey, The State of AI in Early 2024', href: MCKINSEY_AI_2024_URL }],
      },
      {
        value: '44%',
        label: 'Reported negative consequences',
        body:
          'The same study found that 44% of organisations had already experienced at least one negative consequence from generative AI use.',
        showSourceIndex: false,
        sources: [{ label: 'McKinsey, The State of AI in Early 2024', href: MCKINSEY_AI_2024_URL }],
      },
      {
        value: '84%',
        label: 'Europeans wanting careful management',
        body:
          'The European Commission found in its 2025 workplace survey that 84% of Europeans think AI at work requires careful management to protect privacy and transparency.',
        showSourceIndex: false,
        sources: [
          {
            label: 'European Commission, AI at Work survey (2025)',
            href: EU_WORKPLACE_AI_URL,
          },
        ],
      },
    ],
    rows: [
      {
        label: 'Problem',
        title: 'AI adoption has outrun safe everyday practice',
        body:
          'Many organisations now use LLMs in routine work, but practical judgement about privacy, verification, approval boundaries, and accountability often remains underdeveloped. People can therefore use AI effectively enough to get work done while still making unsafe decisions about what is shared, trusted, or allowed to act.',
      },
      {
        label: 'Policy Context',
        title: 'AI literacy is now a governance expectation, not only a best-practice ideal',
        body:
          'Article 4 of the EU AI Act [1] requires providers and deployers of AI systems, to their best extent, to take measures to ensure a sufficient level of AI literacy among staff and other people using AI on their behalf. Recital 20 makes the intended outcome clear: people should be able to make informed decisions, interpret AI output appropriately, and support compliance in context.',
        sources: [{ label: 'EU AI Act, Article 4 and Recital 20', href: EU_AI_ACT_URL }],
      },
      {
        label: 'Audience',
        title: 'Managers and workplace decision-makers',
        body:
          'The primary audience is managers, team leads, and other decision-makers who are affected by AI use without necessarily building AI systems themselves. They approve workflows, supervise teams, choose platforms, or inherit AI-enabled processes designed elsewhere. The course therefore focuses on practical judgement rather than model internals.',
      },
      {
        label: 'Learning Objectives',
        title: 'What the learner should be able to do afterward',
        bullets: [
          'Input governance: recognise what may and may not be shared with an AI tool, including sensitive, internal, and transformed data.',
          'Output assurance: decide what must be verified, narrowed, removed, or escalated before an AI-generated output is used in work.',
          'Oversight and platform choice: keep accountability attached to a real person or role, and choose a platform model that matches the sensitivity and integration needs of the task.',
        ],
      },
      {
        label: 'Assessment Design',
        title: 'How the tool checks whether learning took place',
        body:
          'The project uses mirrored pre- and post-assessments together with interactive tasks inside the course. The assessment checks whether participants can distinguish safe from unsafe data sharing, sanitise prompts, judge verification needs, detect weak workflow design, and make stronger oversight decisions after working through the scenarios.',
      },
      {
        label: 'Needs Analysis',
        title: 'Why the course is scenario-based rather than policy-heavy',
        bullets: [
          'We defined the need by combining regulatory review, practitioner guidance, and pilot observations from prospective users.',
          'The review repeatedly pointed to privacy, security, verification, and meaningful human oversight as the practical issues organisations must manage.',
          'Early pilot thinking suggested that participants reasoned more clearly about approval decisions than about model architecture, so the course uses a broad black-box treatment rather than technical explanation.',
          'Short workplace scenarios consistently produced better discussion than abstract policy statements, which is why the course is organised around concrete managerial cases.',
        ],
      },
      {
        label: 'Design Rationale',
        title: 'Judgement before explanation',
        body:
          'COLORCODE was designed as a judgement tool rather than a content dump. Each section begins with a worked managerial scenario, asks for a decision before explanation, and then moves into a practice task where the learner has to act on the same underlying principle. We avoided a single open-ended LLM simulation as the sole evaluation method because it can blur together AI literacy, interface confusion, and task strategy. Instead, the project combines stable assessment items with guided scenario practice.',
      },
      {
        label: 'Related Work',
        title: 'Built on governance, security, and organisational AI-literacy work',
        body:
          'The project builds on existing governance and security guidance rather than trying to replace it. NIST [1] provides the risk-management frame, NCSC [2] and ICO [3] translate that frame into secure and privacy-aware organisational practice, and OWASP [4] plus MITRE ATLAS [5] supply concrete generative-AI threat patterns. On the organisational-learning side, the AI literacy development canvas [6] helped frame AI literacy as a capability that needs to reach executives, middle managers, and non-technical staff, not only AI specialists.',
        sources: [
          { label: 'NIST AI Risk Management Framework', href: NIST_AIRMF_URL },
          { label: 'NCSC Guidelines for Secure AI System Development', href: NCSC_SECURE_AI_URL },
          { label: 'ICO AI and Data Protection Risk Toolkit', href: ICO_AI_TOOLKIT_URL },
          { label: 'OWASP Top 10 for LLM Applications / GenAI Security Project', href: OWASP_GENAI_URL },
          { label: 'MITRE ATLAS Fact Sheet', href: MITRE_ATLAS_URL },
          { label: 'The AI Literacy Development Canvas (Business Horizons, 2025)', href: AI_LITERACY_CANVAS_URL },
          { label: 'European Parliament, GDPR and AI study', href: GDPR_AI_STUDY_URL },
          { label: 'OECD AI Surveys of Employers and Workers', href: OECD_AI_WORK_URL },
        ],
      },
      {
        label: 'FAQ',
        title: 'Common questions before using COLORCODE',
        body:
          'The FAQ addresses common misconceptions about AI literacy, technical difficulty, responsibility, and whether governance training is only relevant for AI specialists.',
        actionLabel: 'Open FAQ',
        actionPageId: 'project-faq',
      },
    ],
    team: [
      {
        name: 'Aaron',
        initials: 'A',
        role: 'Master’s Student ETH\nComputer Science',
        image: '/team/aaron.png',
        photoClassName: 'project-about-team__photo--aaron',
      },
      {
        name: 'Aloha',
        initials: 'A',
        role: 'Master’s Student ETH\nComputer Science',
        image: '/team/aloha-no-green-transparent.png',
        photoClassName: 'project-about-team__photo--aloha',
      },
      { name: 'Nil', initials: 'N', role: 'Master’s Student ETH\nComputer Science' },
      {
        name: 'Sara',
        initials: 'S',
        role: 'Master’s Student ETH\nComputer Science',
        image: '/team/sara-cropped.png',
        photoClassName: 'project-about-team__photo--sara',
      },
      {
        name: 'Sergey',
        initials: 'S',
        role: 'Master’s Student ETH\nComputer Science',
        image: '/team/sergey.webp',
        photoClassName: 'project-about-team__photo--sergey',
      },
    ],
  },
  'project-about-tool': {
    type: 'projectAboutSection',
    headerFullWidth: true,
    chapter: 'Tools',
    title: 'Access, use, and evaluation',
    description:
      'This chapter explains how the tool is accessed, how it is used, how the learning flow is evaluated, and how AI assistance is disclosed.',
    rows: [
      {
        label: 'Access And Setup',
        title: 'Browser-based and lightweight to deploy',
        body:
          'COLORCODE is designed as a browser-based learning experience. Participants only need a current desktop browser. In classroom or workshop settings, the tool can be shared through a deployment link; during development, it can also be run locally by the project team for testing and iteration.',
        actionLabel: 'Start COLORCODE',
        actionPageId: 'overview',
      },
      {
        label: 'Usage',
        title: 'A short guided sequence rather than a long open simulation',
        bullets: [
          'Learners start with a short pre-assessment to establish a baseline.',
          'They then move through five core scenario sections focused on input governance, prompt injection, misinformation, oversight, and platform choice.',
          'The course ends with a mirrored post-assessment and a short experience-feedback step.',
        ],
      },
      {
        label: 'Evaluation Logic',
        title: 'Stable before-and-after structure',
        body:
          'The pre- and post-assessments use the same item structure and mirrored questions so before-and-after responses can be compared directly, while recognising that repeated items may also capture some familiarity with the assessment itself. The pre-assessment stays neutral and does not reveal correctness. The post-assessment reveals solutions only after submission. This keeps the baseline cleaner while still turning the end of the course into a reflective learning moment.',
      },
      {
        label: 'AI Disclosure',
        title: 'AI tools supported the process, not the final judgement on their own',
        body:
          'We used AI tools alongside our own design, writing, and implementation work rather than as stand-alone generators. Codex, Claude Code, and Gemini supported parts of the coding process; ChatGPT was used to help create the logo; and Claude AI plus ChatGPT were used during ideation and research. All learning goals, scenario structures, and final educational content were reviewed, edited, and integrated by the team.',
      },
    ],
    media: {
      eyebrow: 'Walkthrough',
      title: 'See the full website flow',
      body:
        'The walkthrough page shows the video tour and annotated screenshots of the pre-assessment, core scenarios, interactive labs, post-assessment, and feedback step.',
      actionLabel: 'Open walkthrough',
      actionPageId: 'project-walkthrough',
    },
  },
  'project-faq-header': {
    type: 'pageHeader',
    eyebrow: 'About',
    title: 'FAQ',
  },
  'project-faq': {
    type: 'projectFaq',
    intro:
      'COLORCODE is built for people who already live with AI decisions at work, even if they do not build AI systems themselves. These questions address the doubts we expect before someone starts the tool.',
    groups: [
      {
        title: 'Who It Is For',
        items: [
          {
            question: 'Who needs AI literacy in an organisation?',
            answer:
              'Not only data scientists. Anyone who approves work, handles sensitive information, supervises AI-assisted workflows, or relies on AI output needs enough literacy to ask the right safety questions.',
          },
          {
            question: 'Is COLORCODE only for managers?',
            answer:
              'Managers are the primary audience because they make approval and governance decisions. The tool also works for team leads, consultants, analysts, HR staff, and students preparing for organisational AI use.',
          },
          {
            question: 'What if participants already use AI every day?',
            answer:
              'That is exactly the point. Familiarity with AI tools does not automatically create good judgement about data boundaries, verification, platform choice, or accountability.',
          },
        ],
      },
      {
        title: 'Level and Learning Style',
        items: [
          {
            question: 'Is this too technical for non-technical participants?',
            answer:
              'No. COLORCODE avoids model internals and focuses on decisions people recognise from work: what to upload, what to trust, when to verify, and when a human gate is needed.',
          },
          {
            question: 'Is this a prompt-engineering course?',
            answer:
              'No. Prompt wording appears where it matters, but the deeper goal is safer judgement around input risk, output assurance, oversight, and responsible platform use.',
          },
          {
            question: 'Can it be completed as self-study?',
            answer:
              'Yes. The tool is designed as a guided self-study sequence. A facilitator can support access and pacing, but the website carries the main learning flow.',
          },
        ],
      },
      {
        title: 'Value for Organisations',
        items: [
          {
            question: 'Why not just give people an AI policy?',
            answer:
              'Policies are necessary, but people still need practice applying them under realistic pressure. COLORCODE turns abstract rules into concrete workplace decisions.',
          },
          {
            question: 'Does an enterprise AI tool make this unnecessary?',
            answer:
              'No. Enterprise tools can improve privacy and administration, but they do not remove the need to classify data, verify output, define approval gates, and keep human accountability visible.',
          },
          {
            question: 'What does success look like?',
            answer:
              'A successful learner becomes slower in the right places: they recognise tempting shortcuts, ask what evidence is missing, and know when AI output must be reviewed before it travels further.',
          },
        ],
      },
      {
        title: 'Data and Evaluation',
        items: [
          {
            question: 'Does COLORCODE store personal data?',
            answer:
              'The public learning flow is designed around anonymous assessment and feedback responses. Organisations running their own evaluation should use their own deployment and database.',
          },
          {
            question: 'Can the tool be used without evaluation?',
            answer:
              'Yes. It can be used simply as a learning experience. The pre/post structure is useful for reflection even when an instructor does not export or analyse results.',
          },
          {
            question: 'Why use a pre- and post-assessment?',
            answer:
              'The mirrored structure helps show whether judgement changes after the scenarios. It also makes the final assessment a reflective checkpoint, not just a score.',
          },
        ],
      },
    ],
  },
  'project-about-resources': {
    type: 'projectAboutSection',
    headerFullWidth: true,
    chapter: 'Resources',
    title: 'Facilitation materials',
    description:
      'This chapter outlines the materials that would help others run the tool in teaching, workshops, or organisational training.',
    resources: [
      {
        title: 'Source Code Repository',
        body:
          'The GitHub repository contains the COLORCODE source code. The README file contains the information needed to get started, including setup and run instructions.',
        href: 'https://github.com/Aaron-Zeller/LLMInspector',
        linkLabel: 'Open GitHub',
      },
      {
        title: 'Lesson Plan',
        body:
          'A 60-minute session structure for classroom, workshop, or organisational training use. It includes timing, facilitator moves, and a didactic rationale for the activity flow.',
        actionLabel: 'Open lesson plan',
        actionPageId: 'project-lesson-plan',
      },
      {
        title: 'Worksheets',
        body:
          'Learner-facing prompts and instructor guidance for the main activities: decision checks, prompt sanitisation, verification, oversight, and transfer to participants’ own workplace.',
        actionLabel: 'Open worksheets',
        actionPageId: 'project-worksheets',
      },
      {
        title: 'Facilitation Guide',
        body:
          'Guidance for running the session with mixed audiences, including discussion prompts, likely participant responses, timing risks, and contingency moves for late arrivals or interruptions.',
        actionLabel: 'Open guide',
        actionPageId: 'project-facilitation-guide',
      },
      {
        title: 'Setup Instructions',
        body:
          'Access and deployment guidance for students, instructors, and teams who want to run their own evaluated version with a private database.',
        actionLabel: 'Open setup',
        actionPageId: 'project-setup',
      },
    ],
  },
  'project-walkthrough-header': {
    type: 'pageHeader',
    eyebrow: 'Project Website',
    title: 'Walkthrough',
  },
  'project-walkthrough': {
    type: 'projectWalkthrough',
    intro:
      'COLORCODE is structured as a short guided learning sequence: baseline assessment, scenario practice, interactive labs, mirrored post-assessment, and experience feedback. The video gives a quick overview; the screenshots below explain the important interface elements.',
    video: {
      mp4Src: '/walkthrough/colorcode-walkthrough.mp4',
      src: '/walkthrough/colorcode-walkthrough.mov',
      title: 'COLORCODE walkthrough video',
    },
    items: [
      {
        title: 'Pre-assessment',
        image: '/walkthrough/pre-assessment.png',
        alt: 'Pre-assessment progress view with five assessment parts',
        body:
          'Learners begin with a baseline check split into five small parts. The progress view keeps the assessment manageable and makes it clear which kind of judgement is being tested: core knowledge, scenario decisions, prompt sanitisation, workflow risk, and confidence self-assessment.',
      },
      {
        title: 'Decision check',
        image: '/walkthrough/decision-check.png',
        alt: 'Decision-check question in a core scenario',
        body:
          'Core scenarios start with a concrete workplace situation and ask for a safer action before the explanation opens. This keeps the task focused on applied judgement rather than passive reading.',
      },
      {
        title: 'Self-check questions',
        image: '/walkthrough/self-check-questions.png',
        alt: 'Self-check questions after a lab',
        body:
          'After a lab, learners see short reflection prompts. These questions reinforce the transfer pattern: what changes when an output moves forward, what review gate belongs here, and who remains accountable.',
      },
      {
        title: 'Interactive lab',
        image: '/walkthrough/interactive-lab.png',
        alt: 'Interactive lab with data selection, prompt style, and output review steps',
        body:
          'The lab turns governance principles into action. Learners make choices about what to upload, how to phrase a prompt, and how to handle the output while seeing trade-offs such as leakage risk and task efficiency.',
      },
      {
        title: 'Post-assessment',
        image: '/walkthrough/post-assessment.png',
        alt: 'Post-assessment progress view with five assessment parts',
        body:
          'The post-assessment mirrors the structure of the pre-assessment so changes in judgement and self-efficacy can be compared. Correctness and feedback are revealed only after submission.',
      },
      {
        title: 'Experience feedback',
        image: '/walkthrough/feedback.png',
        alt: 'Experience feedback Likert question',
        body:
          'The final feedback step collects learners’ perceived clarity, relevance, confidence support, platform-choice learning, and understanding of human supervision. Responses are stored anonymously with the assessment results.',
      },
    ],
  },
  'project-lesson-plan-header': {
    type: 'pageHeader',
    eyebrow: 'Resources',
    title: 'Lesson Plan',
  },
  'project-lesson-plan': {
    type: 'projectLessonPlan',
    intro:
      'This lesson plan is designed for a 60-minute facilitated session using COLORCODE as a practical AI-literacy activity. It can be used in a university classroom, executive education course, internal corporate workshop, or team training session where participants need to practise safer AI-related judgement in workplace situations.',
    setting: {
      title: 'Recommended Setting',
      body:
        'The session works best with individual device access, a stable browser, and a facilitator who can frame the governance questions before participants work independently. Participants should work alone during the assessments so the pre/post comparison remains meaningful, while short plenary pauses can be used to surface reasoning patterns after the core scenarios.',
      bullets: [
        'Audience: professionals, students, or managers who use or supervise AI in organisational contexts.',
        'Group size: 5 to 40 participants with one facilitator; larger groups can work if technical access is prepared in advance.',
        'Format: classroom, workshop, continuing education, onboarding, or internal AI-governance training.',
        'Materials: website link, projector for framing and debrief, and optional QR code or short URL for quick access.',
      ],
    },
    flowTitle: '60-Minute Session Flow',
    flow: [
      {
        time: '0-5 min',
        phase: 'Introduction',
        activity:
          'Welcome participants, explain the purpose of COLORCODE, and clarify that the activity focuses on workplace judgement rather than technical AI theory.',
        facilitator:
          'State that responses are anonymous if the study mode is used, participation in assessment items is voluntary where applicable, and participants should answer independently.',
      },
      {
        time: '5-15 min',
        phase: 'Pre-assessment',
        activity:
          'Participants complete the baseline assessment. They should spend at most 10 minutes and avoid overthinking individual items.',
        facilitator:
          'Do not reveal answers. The goal is to activate prior knowledge and establish a clean baseline before instruction.',
      },
      {
        time: '15-45 min',
        phase: 'Core scenarios',
        activity:
          'Participants work through the five standardised scenario sections: sensitive data, prompt injection, misinformation, output oversight, and platform choice.',
        facilitator:
          'Encourage steady progress of about 6 minutes per scenario. If the room slows down, ask participants to prioritise the decision checks and labs over rereading every explanation.',
      },
      {
        time: '45-55 min',
        phase: 'Post-assessment',
        activity:
          'Participants complete the mirrored post-assessment. Again, they should spend at most 10 minutes.',
        facilitator:
          'Explain that the repeated structure helps compare judgement before and after the learning sequence, while the final feedback turns the assessment into a reflective closure.',
      },
      {
        time: '55-60 min',
        phase: 'Feedback and closing debrief',
        activity:
          'Participants submit the feedback form and the facilitator closes with two or three transfer questions.',
        facilitator:
          'Ask where similar risks appear in participants’ own work: what data should not enter a public model, when source verification is required, and who remains accountable after AI output is used.',
      },
    ],
    rationale: {
      title: 'Didactic Rationale',
      bullets: [
        'The pre-assessment activates prior knowledge and makes participants commit to an initial judgement before instruction.',
        'The standardised scenario design creates a repeated learning pattern: situation, decision, explanation, lab or reflection, and transfer question.',
        'The core scenarios use situated learning because the risks are framed as concrete workplace decisions rather than abstract policy statements.',
        'The interactive labs add formative feedback by letting participants see the consequences of choices around data sharing, prompt wording, verification, and oversight.',
        'The post-assessment and feedback step close the loop by combining performance evidence with self-efficacy and perceived usefulness.',
      ],
    },
    facilitatorNotes: {
      title: 'Facilitator Notes',
      bullets: [
        'Keep the introduction short. The website carries the main instruction, and participants need enough time for the scenarios.',
        'Avoid explaining the correct answers before the post-assessment. Use questions such as “What would make this safe enough to use?” rather than giving away the rule.',
        'If time is tight, protect the post-assessment window. The evaluation depends on participants having enough time to answer without rushing.',
        'During the final debrief, connect the scenarios back to local governance practices: data classification, source verification, approval gates, and platform choice.',
      ],
    },
  },
  'project-worksheets-header': {
    type: 'pageHeader',
    eyebrow: 'Resources',
    title: 'Worksheets',
  },
  'project-worksheets': {
    type: 'projectWorksheets',
    intro:
      'These worksheets translate the website flow into learner tasks that can be used during or after a COLORCODE session. They are intended as short working documents rather than long handouts: participants capture decisions, reasons, evidence requirements, and transfer points while instructors monitor pace and quality of reasoning.',
    sections: [
      {
        title: 'How Students Should Use the Worksheets',
        body:
          'Students should complete the worksheets individually while moving through the website. The aim is not to copy every explanation, but to externalise the judgement they make at each step: what risk they notice, what evidence they would require, and what action they would take before AI output is allowed to move forward.',
        bullets: [
          'Write down the first decision before reading the full explanation.',
          'Record the reason for the decision in one or two sentences.',
          'Mark what would need to be verified, removed, escalated, or approved.',
          'After each scenario, add one transfer example from their own work or study context.',
        ],
      },
      {
        title: 'Instructor Role',
        body:
          'The instructor should keep the worksheets lightweight and use them to observe reasoning patterns. The strongest facilitation move is to ask why a participant chose a safeguard, not simply whether the selected answer was correct.',
        bullets: [
          'Before the activity, tell participants that concise notes are enough.',
          'During the core scenarios, watch for common shortcuts: trusting polished output, overusing public tools, or skipping verification because the task feels internal.',
          'Use the notes for a short debrief: compare which risks participants noticed first and which risks only became visible after feedback.',
          'Protect the post-assessment time; worksheet discussion should not crowd out the final measurement.',
        ],
      },
    ],
    tasks: [
      {
        title: '1. Decision Log',
        section:
          'Every Core Scenario decision check: The Input Risk; Prompt Injection; Misinformation; Output Oversight; AI Agency; Platform Choice.',
        purpose:
          'Helps participants slow down at each scenario decision point and state the governance reason behind their choice.',
        student:
          'For each decision check, write the decision you would take, the main risk you see, and the minimum review step required before moving on.',
        studentItems: [
          'The Input Risk: What never to paste or upload to an LLM',
          'Why and how untrusted content can steer the model',
          'When confident output is still wrong',
          'Keep powerful AI workflows inside real human boundaries',
          'When the model should not act on its own',
          'Different tools create different governance choices',
        ],
        instructor:
          'Collect two or three examples during the debrief and ask whether the decision would still hold if the output were sent to a client, manager, or system.',
        prompts: [
          'Decision I would take:',
          'Main risk I noticed:',
          'Before this moves forward, someone must:',
        ],
      },
      {
        title: '2. Data Boundary Checklist',
        section: 'The Governance Lab: Input and Output Assurance.',
        purpose:
          'Connects the sensitive-data lab to concrete upload decisions and helps participants distinguish task efficiency from leakage risk.',
        student:
          'List which materials are safe to use, which must be removed or transformed, and which require an enterprise-approved tool or human review.',
        instructor:
          'Ask participants to justify one exclusion. This makes the boundary visible and prevents “just upload everything” reasoning.',
        prompts: [
          'Safe to use as provided:',
          'Remove, redact, or transform:',
          'Escalate or move to an approved environment:',
        ],
      },
      {
        title: '3. Prompt Sanitisation Sheet',
        section: 'Assessment part: Sanitise a Prompt.',
        purpose:
          'Turns prompt safety into an editing task by asking participants to identify risky details before they submit a prompt.',
        student:
          'Underline identifiers, confidential context, unnecessary personal data, and hidden operational details. Rewrite the prompt so it preserves the task without carrying avoidable exposure.',
        instructor:
          'Look for over-redaction as well as under-redaction. A good answer protects boundaries while keeping the task solvable.',
        prompts: [
          'Original detail in the prompt:',
          'Why this detail is risky or unnecessary:',
          'Safer replacement that preserves the task:',
        ],
      },
      {
        title: '4. Evidence and Verification Map',
        section: 'Source Verification Simulation; Stress-test the analysis before you trust it.',
        purpose:
          'Matches claim types to evidence types so participants can decide what should be verified, replaced, or removed.',
        student:
          'For each AI-generated claim, decide whether the evidence should be internal, external, or both. If a source or number cannot be supported, mark the claim for removal or replacement.',
        instructor:
          'Emphasise that unsupported precision is not neutral. The higher the consequence of being wrong, the less precision should travel without evidence.',
        prompts: [
          'Claim that needs checking:',
          'Evidence needed: internal / external / both',
          'If unsupported, I would remove, replace, or qualify it by:',
        ],
      },
      {
        title: '5. Approval Gate Planner',
        section: 'Approve or Escalate?; Configure the agent before you deploy it.',
        purpose:
          'Links output oversight to accountability by making participants name the human gate before an AI-assisted action is released or executed.',
        student:
          'Identify who must review the output, what they should check, and what action must remain blocked until approval is given.',
        instructor:
          'Push participants beyond “a human should check it” by asking what exactly the reviewer is accountable for.',
        prompts: [
          'Reviewer or approval role:',
          'What they must check before release:',
          'The AI-assisted workflow must not do this until approval:',
        ],
      },
      {
        title: '6. Transfer Card',
        section: 'Different tools create different governance choices; final debrief.',
        purpose:
          'Makes the learning portable by asking participants to connect one COLORCODE pattern to a real task from their own environment.',
        student:
          'Choose one current or likely AI-use case from their work. Name the risk, the safer workflow, and the first policy or team norm they would clarify.',
        instructor:
          'Use this as the closing bridge from the training setting to workplace practice. Invite examples without requiring participants to disclose sensitive details.',
        prompts: [
          'A real task where I might use AI:',
          'COLORCODE pattern that applies:',
          'Safer next step I would take at work:',
        ],
      },
    ],
  },
  'project-facilitation-guide-header': {
    type: 'pageHeader',
    eyebrow: 'Resources',
    title: 'Facilitation Guide',
  },
  'project-facilitation-guide': {
    type: 'projectFacilitationGuide',
    intro:
      'COLORCODE is primarily designed as a self-study experience. Participants move through the assessments, scenarios, labs, and feedback individually, while the facilitator protects the conditions that make this possible: access, pacing, quiet support, and a short optional debrief. This guide helps instructors run that self-study format with real classroom or workshop constraints such as uneven technical confidence, managers stepping out for calls, late arrivals, and time pressure.',
    principles: [
      {
        title: 'Protect the baseline',
        body:
          'Do not explain the answers before the pre-assessment. Frame it as a starting point, not a test of intelligence.',
      },
      {
        title: 'Keep support light',
        body:
          'Avoid turning the session into a lecture or group discussion while participants are working. Support navigation, clarify the task, and let the website carry the main instruction.',
      },
      {
        title: 'Plan for interruptions',
        body:
          'Assume that some managers may arrive late, take calls, or leave temporarily. Assign one teaching-team member to handle quick recaps without stopping the whole room.',
      },
    ],
    phases: [
      {
        title: 'Before Participants Arrive',
        moves: [
          'Open the website and QR code on the projector before the session starts.',
          'Test the website on at least one laptop and one phone-sized screen if participants may use mixed devices.',
          'Prepare a one-minute recap script for late arrivals: purpose, current step, and whether they should join the current page or start at the beginning.',
          'Assign roles in the teaching team: lead facilitator, technical helper, timekeeper, and recap person.',
        ],
      },
      {
        title: 'Opening the Session',
        moves: [
          'Explain that COLORCODE is about practical AI judgement in workplace situations, not technical model internals.',
          'Tell participants that the activity is self-paced and individual. They should complete the assessments and core scenarios without comparing answers during the main work phase.',
          'Name the time boxes clearly: 10 minutes for pre-assessment, 30 minutes for core scenarios, 10 minutes for post-assessment, 5 minutes for feedback and closing.',
          'For less technical participants, reassure them that the task is to reason about risk, evidence, and accountability; no coding or AI configuration knowledge is required.',
        ],
      },
      {
        title: 'While Participants Work',
        moves: [
          'Walk the room quietly and look for navigation problems before interpreting slow progress as lack of understanding.',
          'If someone is stuck, help them find the current instruction or button before explaining content. The goal is to keep the self-study flow intact.',
          'If several people fall behind, announce a soft checkpoint: “Try to finish the current scenario in the next two minutes, then move on.”',
          'If a participant leaves for a call, tell them which page to resume on and remind them to preserve time for the post-assessment.',
        ],
      },
      {
        title: 'Closing and Optional Debrief',
        moves: [
          'Keep the debrief short. Ask for one or two reflections rather than opening a long plenary discussion.',
          'If time allows, connect the self-study experience to organisational practice: data classification, verification routines, approval gates, platform choice, and human accountability.',
          'Use two or three transfer prompts only after participants have completed the post-assessment and feedback.',
          'End by making the post-assessment and feedback submission feel like part of the learning loop, not just data collection.',
        ],
      },
    ],
    discussionPrompts: [
      'Where did the unsafe option feel most efficient or realistic?',
      'Which scenario most resembles an AI-use case in your own work?',
      'What evidence would you require before this output becomes guidance?',
      'Who is accountable once an AI-assisted action affects a customer, employee, or system?',
      'Which safeguards can be designed into the workflow, and which still require human judgement?',
      'Which risk or safeguard felt most surprising, and what did it change about how you would approach AI use?',
    ],
    responses: [
      {
        response: '“We would never upload sensitive data.”',
        facilitation:
          'Acknowledge the intention, then ask what happens under time pressure, with partial documents, or when the data looks harmless because it is already in a draft.',
      },
      {
        response: '“If the source looks official, I would trust it.”',
        facilitation:
          'Ask participants to distinguish a plausible citation from an opened and verified source. Emphasise that polished form is not evidence.',
      },
      {
        response: '“A human review step slows everything down.”',
        facilitation:
          'Ask which outputs truly need review and which can use lighter controls. The goal is proportional oversight, not blocking every use of AI.',
      },
      {
        response: '“An enterprise tool solves the risk.”',
        facilitation:
          'Separate platform controls from usage rules. Enterprise access can reduce some risks, but data classes, permissions, output use, and accountability still need governance.',
      },
    ],
    contingencies: [
      {
        situation: 'Participants are slower than expected',
        move:
          'Protect the post-assessment by shortening or skipping the optional debrief, not by removing the final measurement. Ask participants to prioritise decision checks and labs over rereading every explanation.',
      },
      {
        situation: 'Participants are less comfortable with technology',
        move:
          'Have the technical helper support navigation and device issues. The lead facilitator should avoid turning technical support into a whole-room interruption.',
      },
      {
        situation: 'Managers arrive late or leave for calls',
        move:
          'The recap person gives a quiet 30-second orientation: current page, session purpose, and what to complete next. If they missed the pre-assessment, they can still work through the scenarios but should not be treated as a complete pre/post record.',
      },
      {
        situation: 'The room wants to debate policy in depth',
        move:
          'Acknowledge the point, park it as an optional follow-up, and move on. The main session should remain a self-study learning flow.',
      },
    ],
  },
  'project-setup-header': {
    type: 'pageHeader',
    eyebrow: 'Resources',
    title: 'Setup Instructions',
  },
  'project-setup': {
    type: 'projectSetupInstructions',
    intro:
      'COLORCODE can be used in two ways. For a normal teaching session, instructors can simply share the hosted website and let participants work through the tool in their browser. For evaluation, research, or institutional reuse, organisers should deploy their own copy connected to their own database so that assessment and feedback data remain under their control.',
    readme: {
      title: 'Start from the GitHub README',
      body:
        'The repository README is the best starting point for technical setup. It explains the local development commands, production build, Render deployment blueprint, database connection, and protected export routes.',
      href: 'https://github.com/Aaron-Zeller/LLMInspector#readme',
      label: 'Open README',
    },
    requirements: [
      {
        title: 'Student Access',
        items: [
          'A current browser on a laptop, tablet, or phone.',
          'Stable internet access for the full session.',
          'No account is required for normal participation.',
          'A laptop or tablet is recommended for the interactive labs; phones work, but the experience is denser.',
        ],
      },
      {
        title: 'Instructor Setup',
        items: [
          'Share the website link or QR code before the session starts.',
          'Project the opening instructions and keep a timer visible or announced.',
          'Have one person available for technical help and late-arrival recaps.',
          'If the session is used for evaluation, decide in advance who owns the deployment, database, and export token.',
        ],
      },
      {
        title: 'Evaluation Setup',
        items: [
          'Use a deployment connected to a database you control.',
          'Configure an export token if you need CSV or JSON exports.',
          'Tell participants whether responses are being collected and how anonymity is handled.',
          'Test pre-assessment, post-assessment, feedback submission, and export before running the session.',
        ],
      },
    ],
    steps: [
      {
        title: 'Use the public website for self-study or demonstration',
        body:
          'For a simple workshop or classroom run, share https://colorcode-ai.ch and ask participants to complete the flow individually. This is the lowest-friction option and requires no installation.',
      },
      {
        title: 'Use your own deployment for evaluated sessions',
        body:
          'If you need access to raw submissions or exports, deploy your own copy of the repository and connect it to your own database. The current public build of colorcode-ai.ch does not expose database access directly to outside users.',
      },
      {
        title: 'Deploy with Render or a similar service',
        body:
          'The project is optimised for Render through the included render.yaml blueprint: one Node web service plus one Render Postgres database. It is not locked to Render, though. Any service that can run the Node server, build the Vite frontend, and provide a PostgreSQL DATABASE_URL can host the same application.',
      },
      {
        title: 'Verify the full data path before teaching',
        body:
          'Submit one test pre-assessment, one post-assessment, and one feedback form. Then confirm that the database receives the entries and that protected exports work if an EXPORT_TOKEN has been configured.',
      },
    ],
    notes: [
      {
        title: 'What students need to do',
        body:
          'Students only need to open the link, work through the pages in order, and submit the assessment and feedback screens. They should not need credentials, database access, or installation steps.',
      },
      {
        title: 'What instructors should prepare',
        body:
          'Instructors should prepare the access link, a fallback QR code, a short opening script, a timing plan, and a support role for technical issues. For evaluated sessions, they should also prepare a private deployment and data-export plan.',
      },
      {
        title: 'Why database ownership matters',
        body:
          'Evaluation data should belong to the organising team or institution. Running a separate deployment with a separate database avoids depending on the public project instance and makes export permissions explicit.',
      },
    ],
  },
};
