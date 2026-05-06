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
    description:
      'COLORCODE is a scenario-based AI literacy tool for workplace decision-makers. This page explains the problem it addresses, the evidence that shaped it, and the materials that support its use.',
  },
  'project-about-intro': {
    type: 'projectAboutLead',
    eyebrow: 'Project Overview',
    paragraphs: [
      'COLORCODE was designed for a moment in which AI adoption is moving faster than organisational judgement. The project therefore treats AI literacy not as a technical deep dive, but as a workplace governance problem.',
      'The result is a compact learning experience for managers who need to decide what can be shared with an AI system, what must be verified before it travels further, and where human responsibility must remain visible.',
    ],
  },
  'project-about-about': {
    type: 'projectAboutSection',
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
        sources: [{ label: 'McKinsey, The State of AI in Early 2024', href: MCKINSEY_AI_2024_URL }],
      },
      {
        value: '44%',
        label: 'Reported negative consequences',
        body:
          'The same study found that 44% of organisations had already experienced at least one negative consequence from generative AI use.',
        sources: [{ label: 'McKinsey, The State of AI in Early 2024', href: MCKINSEY_AI_2024_URL }],
      },
      {
        value: '84%',
        label: 'Europeans wanting careful management',
        body:
          'The European Commission’s 2025 workplace survey found that 84% of Europeans think AI at work requires careful management to protect privacy and transparency.',
        sources: [
          {
            label: 'European Commission, Eurobarometer on AI in the workplace (2025)',
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
          'Article 4 of the EU AI Act requires providers and deployers of AI systems to take measures to ensure a sufficient level of AI literacy among staff and other people using AI on their behalf. Recital 20 makes the intended outcome clear: people should be able to make informed decisions, interpret AI output appropriately, and support compliance in context.',
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
          'The project builds on existing governance and security guidance rather than trying to replace it. NIST provides the risk-management frame, NCSC and ICO translate that frame into secure and privacy-aware organisational practice, and OWASP plus MITRE ATLAS supply concrete generative-AI threat patterns. On the organisational-learning side, the AI literacy development canvas helped frame AI literacy as a capability that needs to reach executives, middle managers, and non-technical staff, not only AI specialists.',
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
    ],
    team: [
      { name: 'Aaron', initials: 'A', role: 'Photo placeholder' },
      { name: 'Aloha', initials: 'A', role: 'Photo placeholder' },
      { name: 'Nil', initials: 'N', role: 'Photo placeholder' },
      { name: 'Sara', initials: 'S', role: 'Photo placeholder' },
      { name: 'Sergey', initials: 'S', role: 'Photo placeholder' },
    ],
  },
  'project-about-tool': {
    type: 'projectAboutSection',
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
          'The pre- and post-assessments use the same structure so before-and-after responses can be compared directly. The pre-assessment stays neutral and does not reveal correctness. The post-assessment reveals solutions only after submission. This keeps the baseline cleaner while still turning the end of the course into a reflective learning moment.',
      },
      {
        label: 'AI Disclosure',
        title: 'AI tools supported the process, not the final judgement on their own',
        body:
          'We used AI tools alongside our own design, writing, and implementation work rather than as stand-alone generators. Codex, Claude Code, and Gemini supported parts of the coding process; ChatGPT was used to help create the logo; and Claude AI plus ChatGPT were used during ideation and research. All learning goals, scenario structures, and final educational content were reviewed, edited, and integrated by the team.',
      },
    ],
    media: {
      eyebrow: 'Screenshots Or Video',
      title: 'A small visual tour would complete the public project page',
      body:
        'The final public website should include one overview screenshot, one core-scenario screenshot, and one lab screenshot or short walkthrough video. The aim is not to reproduce the whole experience, but to show the look and rhythm of the interaction clearly.',
      placeholder: 'Screenshot or short walkthrough video placeholder',
    },
  },
  'project-about-resources': {
    type: 'projectAboutSection',
    chapter: 'Resources',
    title: 'Facilitation materials',
    description:
      'This chapter outlines the materials that would help others run the tool in teaching, workshops, or organisational training.',
    resources: [
      {
        title: 'Lesson Plan',
        body:
          'A ready-to-run structure with goals, timing, recommended sequence, and suggested pause points across briefing, assessment, scenarios, and closing discussion.',
        status: 'Planned',
      },
      {
        title: 'Worksheets',
        body:
          'Printable or digital prompts for approval-and-escalation decisions, prompt sanitisation, verification checklists, and platform-choice comparison exercises.',
        status: 'Planned',
      },
      {
        title: 'Facilitation Guide',
        body:
          'Notes for non-authors on common misconceptions, good discussion prompts, and ways to adapt the material without losing the central governance lessons.',
        status: 'Planned',
      },
      {
        title: 'Setup Instructions',
        body:
          'Practical notes on browser access, session preparation, response collection, and recommended timing for classroom or workshop use.',
        status: 'Planned',
      },
    ],
  },
};
