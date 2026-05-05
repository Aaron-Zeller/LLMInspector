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
      'COLORCODE is a scenario-based AI literacy tool for workplace decision-makers. This page documents the problem it addresses, the evidence that shaped it, and the materials that support its use.',
  },
  'project-about-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'COLORCODE was designed for a moment in which AI adoption is moving faster than organisational judgement. The project therefore treats AI literacy not as a technical deep dive, but as a workplace governance problem.',
      'The result is a compact learning experience for managers who need to decide what can be shared with an AI system, what must be verified before it travels further, and where human responsibility must remain visible.',
    ],
  },
  'project-about-about': {
    type: 'contentCards',
    title: 'About',
    description:
      'This chapter explains the problem behind the project, the needs analysis that shaped it, and the design choices that followed from that analysis.',
    columns: 2,
    cards: [
      {
        title: 'Problem',
        body:
          'AI use has moved into everyday work faster than safe practice has. McKinsey reported in 2024 that 65% of surveyed organisations were already using generative AI regularly in at least one business function, and 44% reported at least one negative consequence from that use. In parallel, the European Commission’s 2025 workplace survey found that 84% of Europeans think AI at work requires careful management to protect privacy and transparency.',
        sources: [
          { label: 'McKinsey, The State of AI in Early 2024', href: MCKINSEY_AI_2024_URL },
          {
            label: 'European Commission, Eurobarometer on AI in the workplace (2025)',
            href: EU_WORKPLACE_AI_URL,
          },
        ],
      },
      {
        title: 'Policy Context',
        body:
          'The need for AI literacy is no longer only a best-practice issue. Article 4 of the EU AI Act requires providers and deployers of AI systems to take measures to ensure a sufficient level of AI literacy among staff and other people using AI on their behalf. Recital 20 makes the intended outcome explicit: people should be able to make informed decisions, interpret AI output appropriately, and support compliance in context.',
        sources: [
          { label: 'EU AI Act, Article 4 and Recital 20', href: EU_AI_ACT_URL },
        ],
      },
      {
        title: 'Audience',
        body:
          'The primary audience is managers, team leads, and other workplace decision-makers who are affected by AI use without necessarily building AI systems themselves. They often approve workflows, supervise teams, choose platforms, or inherit AI-enabled processes designed elsewhere. The course therefore speaks to people who need practical judgement, not model-internals expertise.',
      },
      {
        title: 'Learning Objectives',
        bullets: [
          'Input governance: recognise what may and may not be shared with an AI tool, including sensitive, internal, and transformed data.',
          'Output assurance: decide what must be verified, narrowed, removed, or escalated before an AI-generated output is used in work.',
          'Oversight and platform choice: keep accountability attached to a real person or role, and choose a platform model that matches the sensitivity and integration needs of the task.',
        ],
      },
      {
        title: 'How Learning Is Assessed',
        body:
          'The project uses mirrored pre- and post-assessments together with interactive tasks inside the course. The assessment checks whether participants can distinguish safe from unsafe data sharing, sanitise prompts, judge verification needs, detect weak workflow design, and make stronger oversight decisions after working through the scenarios.',
      },
      {
        title: 'Research Process And Needs Analysis',
        bullets: [
          'We defined the need by combining regulatory review, practitioner guidance, and pilot observations from prospective users.',
          'The regulatory and practitioner review pointed repeatedly to privacy, security, verification, and meaningful human oversight as the practical issues organisations must manage.',
          'Early pilot thinking suggested that participants reasoned more clearly about approval decisions than about model architecture, so the course uses a broad black-box treatment rather than technical explanation.',
          'Short workplace scenarios consistently produced better discussion than abstract policy statements, which is why the course is organised around concrete managerial cases.',
        ],
      },
      {
        title: 'Design Rationale',
        body:
          'COLORCODE was designed as a judgement tool rather than a content dump. Each section begins with a worked managerial scenario, asks for a decision before explanation, and then moves into a practice task where the learner has to act on the same underlying principle. We avoided a single open-ended LLM simulation as the sole evaluation method because it can blur together AI literacy, interface confusion, and task strategy. Instead, the project combines stable assessment items with guided scenario practice.',
      },
      {
        title: 'Related Work',
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
      {
        title: 'Team',
        body:
          'COLORCODE was developed by five ETH Zurich master’s students in computer science. The public project page will replace the placeholders below with final headshots.',
        fullWidth: true,
        people: [
          { name: 'Aaron', initials: 'A', role: 'Photo placeholder' },
          { name: 'Aloha', initials: 'A', role: 'Photo placeholder' },
          { name: 'Nil', initials: 'N', role: 'Photo placeholder' },
          { name: 'Sara', initials: 'S', role: 'Photo placeholder' },
          { name: 'Sergey', initials: 'S', role: 'Photo placeholder' },
        ],
      },
    ],
  },
  'project-about-tool': {
    type: 'contentCards',
    title: 'Tools',
    description:
      'This chapter explains how the tool is accessed, how it is used, how it is evaluated, and what should be disclosed about AI assistance in the project.',
    columns: 2,
    cards: [
      {
        title: 'Access And Setup',
        body:
          'COLORCODE is designed as a browser-based learning experience. Participants only need a current desktop browser. In classroom or workshop settings, the tool can be shared through a deployment link; during development, it can also be run locally by the project team for testing and iteration.',
      },
      {
        title: 'Usage',
        bullets: [
          'Learners start with a short pre-assessment to establish a baseline.',
          'They then move through five core scenario sections focused on input governance, prompt injection, misinformation, oversight, and platform choice.',
          'The course ends with a mirrored post-assessment and a short experience-feedback step.',
        ],
      },
      {
        title: 'Evaluation Logic',
        body:
          'The pre- and post-assessments now use the same structure so before-and-after responses can be compared directly. The pre-assessment stays neutral and does not reveal correctness. The post-assessment reveals solutions only after submission. This keeps the baseline cleaner while still turning the end of the course into a reflective learning moment.',
      },
      {
        title: 'Screenshots And Video',
        body:
          'The final public website should include a small visual tour of the tool, ideally with one overview screenshot, one core-scenario screenshot, and one lab screenshot or short walkthrough video. The aim is not to reproduce the whole experience, but to show the look and rhythm of the interaction clearly.',
      },
      {
        title: 'AI Disclosure',
        body:
          'We used AI tools alongside our own design, writing, and implementation work rather than as stand-alone generators. Codex, Claude Code, and Gemini supported parts of the coding process; ChatGPT was used to help create the logo; and Claude AI plus ChatGPT were used during ideation and research. All learning goals, scenario structures, and final educational content were reviewed, edited, and integrated by the team.',
      },
    ],
  },
  'project-about-resources': {
    type: 'contentCards',
    title: 'Resources',
    description:
      'This chapter outlines the facilitation materials that accompany the tool and make it easier to use in teaching, workshops, or organisational training.',
    columns: 2,
    cards: [
      {
        title: 'Lesson Plan',
        body:
          'A lesson plan should give facilitators a ready-to-run structure: goals, timing, recommended sequence, and suggested pause points. In practice, that means a short briefing, the pre-assessment, guided work through the core scenarios, the post-assessment, and a closing discussion about transfer to workplace practice.',
      },
      {
        title: 'Worksheets',
        body:
          'The worksheet pack should help teams move from individual judgement to shared discussion. Useful additions include approval-and-escalation sheets, prompt-sanitisation prompts, verification checklists, and a short platform-choice comparison sheet for group work.',
      },
      {
        title: 'Facilitation Guide',
        body:
          'The facilitation guide should help non-authors run the experience well. That includes common misconceptions to watch for, suggested discussion prompts for each section, and practical ways to adapt the material to different organisational contexts without diluting the central governance lessons.',
      },
      {
        title: 'Setup Instructions',
        body:
          'Setup notes should cover how to access the tool, what kind of device and browser setup is recommended, how responses are collected, and what a facilitator should check before the session starts. For classroom use, the guide should also state how much time is needed and where optional discussion can be shortened if necessary.',
      },
    ],
  },
};
