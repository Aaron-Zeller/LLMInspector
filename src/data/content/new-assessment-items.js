import { makeQuestion, makeScenario } from './shared.js';
import { ASSESSMENT_ITEMS } from './questions.js';

function makeOrderingItem(config) {
  return { type: 'ordering', ...config };
}

function makeSelfEfficacyItem(id, prompt) {
  return { type: 'selfEfficacy', id, prompt, correctOptionId: null, points: 0, domainKey: null };
}

function makeSanitisePromptItem(config) {
  return { type: 'sanitisePrompt', ...config };
}

function makeWorkflowRiskItem(config) {
  return { type: 'workflowRisk', ...config };
}

const newItems = {

  // ─── PRE-ASSESSMENT PART 1: Knowledge Check ───────────────────────────────

  'pre-pq1': makeQuestion({
    id: 'pre-pq1',
    prompt: 'Which of the following should never be pasted into a public LLM without preparation?',
    meta: 'Question 1 of 6',
    badge: 'Input Risk',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 7,
    correctOptionId: 'contract',
    feedback: {
      correct: 'Client contracts contain personal data, financial terms, and confidential clauses. Public AI tools are not contractually bound to protect that data.',
      incorrect: 'The risk is identifiable personal data and confidential commercial terms. A client contract typically contains both — it must not reach a public chatbot unedited.',
    },
    options: [
      { id: 'agenda', label: 'A draft internal meeting agenda with no names or sensitive topics.' },
      { id: 'contract', label: 'A client contract containing names, financial terms, and confidential clauses.' },
      { id: 'faq', label: 'A publicly available FAQ article from the company website.' },
      { id: 'features', label: 'A list of publicly released product features.' },
    ],
  }),

  'pre-pq2': makeQuestion({
    id: 'pre-pq2',
    prompt: 'What is the primary risk of prompt injection?',
    meta: 'Question 2 of 6',
    badge: 'Output Risk',
    badgeTone: 'critical',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'hijack',
    feedback: {
      correct: 'Prompt injection allows untrusted content embedded in a document or webpage to silently override the model\'s original instructions.',
      incorrect: 'The core risk is not performance or length — it is that hidden instructions in external content can redirect the model\'s behaviour without the user knowing.',
    },
    options: [
      { id: 'slow', label: 'The model produces slower responses when processing external documents.' },
      { id: 'hijack', label: 'Untrusted external content can override the model\'s original instructions and redirect its behaviour.' },
      { id: 'refuse', label: 'The model refuses all inputs that contain embedded instructions.' },
      { id: 'long', label: 'The model generates excessively long outputs when given complex prompts.' },
    ],
  }),

  'pre-pq3': makeQuestion({
    id: 'pre-pq3',
    prompt: 'Which type of AI output requires independent verification before professional use?',
    meta: 'Question 3 of 6',
    badge: 'Critical Thinking',
    badgeTone: 'critical',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'citation',
    feedback: {
      correct: 'AI systems frequently fabricate citations — generating plausible-sounding author names, titles, and publication years that do not exist.',
      incorrect: 'Named citations are exactly where AI output looks most authoritative while being most likely fabricated. All specific references need independent verification.',
    },
    options: [
      { id: 'citation', label: 'A legal citation with a named author, title, and publication year.' },
      { id: 'concept', label: 'A general explanation of a well-known business concept.' },
      { id: 'formats', label: 'A list of common document formatting conventions.' },
      { id: 'translation', label: 'A translation of a short informal phrase.' },
    ],
  }),

  'pre-pq4': makeQuestion({
    id: 'pre-pq4',
    prompt: 'An enterprise AI tool with a data processing agreement differs from a public chatbot mainly because it...',
    meta: 'Question 4 of 6',
    badge: 'Privacy',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 8,
    correctOptionId: 'safeguards',
    feedback: {
      correct: 'The data processing agreement defines how your data is stored, whether it is used for training, and what security controls apply. That is the meaningful governance difference.',
      incorrect: 'The difference is not speed or accuracy — it is the contractual and legal safeguards governing how the organisation\'s data is processed.',
    },
    options: [
      { id: 'accuracy', label: 'Always produces more accurate outputs than consumer-grade tools.' },
      { id: 'safeguards', label: 'Processes your organisation\'s data under contractual safeguards that prohibit its use for model training.' },
      { id: 'offline', label: 'Has no internet connection, so outputs cannot be intercepted.' },
      { id: 'faster', label: 'Runs on dedicated hardware that delivers faster responses.' },
    ],
  }),

  'pre-pq5': makeQuestion({
    id: 'pre-pq5',
    prompt: 'Which situation best illustrates "excessive AI agency"?',
    meta: 'Question 5 of 6',
    badge: 'Oversight',
    badgeTone: 'delegation',
    domainKey: 'appropriateDelegation',
    points: 8,
    correctOptionId: 'auto-email',
    feedback: {
      correct: 'Autonomously sending client communications removes the human check that accountability requires. That is the defining feature of excessive agency.',
      incorrect: 'Excessive agency specifically means autonomous action with real-world consequences — not drafting, summarising, or clarifying.',
    },
    options: [
      { id: 'summarise', label: 'An AI that summarises a long policy document for a team member.' },
      { id: 'draft', label: 'An AI that drafts a reply email for a human to review before sending.' },
      { id: 'auto-email', label: 'An AI that autonomously sends a client email without any human review or approval.' },
      { id: 'questions', label: 'An AI that asks clarifying questions before beginning a complex task.' },
    ],
  }),

  'pre-pq6': makeQuestion({
    id: 'pre-pq6',
    prompt: 'What does "data minimisation" mean in the context of using AI tools?',
    meta: 'Question 6 of 6',
    badge: 'Privacy',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 7,
    correctOptionId: 'minimum-needed',
    feedback: {
      correct: 'Data minimisation means the model only receives what the task strictly requires — no surplus fields, names, or identifiers that are unnecessary for the output.',
      incorrect: 'Data minimisation is a GDPR principle about what you share with the model, not about which model you use or how long you use it.',
    },
    options: [
      { id: 'smallest-model', label: 'Using the smallest available AI model to reduce energy consumption.' },
      { id: 'minimum-needed', label: 'Sharing only the data that the specific task strictly requires, and nothing more.' },
      { id: 'compress', label: 'Compressing files before uploading them to reduce storage use.' },
      { id: 'limit-time', label: 'Limiting AI tool usage to a fixed daily time budget.' },
    ],
  }),

  // ─── PRE-ASSESSMENT PART 2: Scenario-Based Judgement ─────────────────────

  'pre-ps1': makeScenario({
    id: 'pre-ps1',
    scenarioTitle: 'Scenario — Client Contract Summary',
    scenarioSubtitle: 'A client contract needs to be summarised quickly for an internal meeting.',
    icon: '📄',
    domainKey: 'dataPrivacy',
    points: 9,
    correctOptionId: 'extract-check',
    feedback: {
      correct: 'Extracting only the relevant sections and verifying the tool is the right sequence. The full contract should not reach any AI tool — approved or public — without this preparation.',
      incorrect: 'The full contract contains personal data and confidential commercial terms. Pasting it unedited — or asking the AI to "delete" sensitive parts after the fact — does not remove the initial exposure.',
    },
    blocks: [
      {
        type: 'note',
        content: 'You need to summarise a client contract using an AI tool. The contract contains client names, financial terms, and confidential strategic clauses. What is the most appropriate first step?',
      },
    ],
    decisionLabel: 'Select the best approach:',
    options: [
      { id: 'paste-public', title: 'Option A', description: 'Paste the full contract into a public chatbot to get a quick summary.' },
      { id: 'extract-check', title: 'Option B', description: 'Extract only the relevant sections and verify that an approved enterprise tool is available before proceeding.' },
      { id: 'ask-delete', title: 'Option C', description: 'Paste the full contract and ask the AI to delete any sensitive parts after processing.' },
      { id: 'email-colleague', title: 'Option D', description: 'Email the contract to a colleague to summarise manually to avoid any AI risk entirely.' },
    ],
  }),

  'pre-ps2': makeScenario({
    id: 'pre-ps2',
    scenarioTitle: 'Scenario — Unknown Citation in Market Analysis',
    scenarioSubtitle: 'An AI-generated briefing references a source you cannot place.',
    icon: '📊',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'verify-independently',
    feedback: {
      correct: 'Searching for the source yourself is the only reliable check. A failed search is itself useful — it tells you the claim is unverifiable before it enters any professional document.',
      incorrect: 'Asking the AI to verify its own source is circular. Adding a footnote stating "source: AI-generated" does not change the fact that the underlying statistic may be fabricated.',
    },
    blocks: [
      {
        type: 'transcript',
        title: 'AI assistant',
        messages: [
          {
            role: 'user',
            speaker: 'You',
            label: 'User',
            content: 'Summarise the latest AI adoption trends for our market briefing.',
          },
          {
            role: 'assistant',
            speaker: 'AI',
            label: 'AI Assistant',
            content: 'According to the GlobalTech Analytics Q1 2025 Report, enterprise AI adoption in Europe grew by 28% year-on-year, with Switzerland leading DACH region uptake at 41%.',
          },
        ],
      },
    ],
    decisionLabel: 'How do you respond to this output?',
    options: [
      { id: 'accept', title: 'Option A', description: 'Include it in the briefing — the AI\'s training data comes from reliable industry sources.' },
      { id: 'ask-ai', title: 'Option B', description: 'Ask the AI to confirm that its citation is accurate before using it.' },
      { id: 'verify-independently', title: 'Option C', description: 'Search for "GlobalTech Analytics Q1 2025 Report" independently to verify the source and statistics before use.' },
      { id: 'footnote', title: 'Option D', description: 'Add a footnote stating "source: AI-generated" and proceed.' },
    ],
  }),

  // ─── PRE-ASSESSMENT PART 3: Input Governance Ordering ────────────────────

  'pre-po1': makeOrderingItem({
    id: 'pre-po1',
    meta: 'Workflow Task',
    badge: 'Input Governance',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 10,
    prompt: 'A colleague needs to use an LLM to analyse a customer dataset. Arrange the steps below into the correct safe and compliant order. Remove any step that does not belong in the workflow.',
    correctOptionId: 'check-sensitive,decide-tool,anonymise,rewrite-task,escalate-unsure,submit-prompt,share-results',
    feedback: {
      correct: 'The safe order starts with assessing the data and the tool, then reduces exposure through anonymisation and minimisation, escalates if uncertain, and only then submits.',
      incorrect: 'The workflow must start with sensitivity assessment — not submission. Always check the data, verify the tool is appropriate, and minimise input before the model sees anything.',
    },
    steps: [
      { id: 'paste-full', label: 'Paste the full customer dataset directly into a public chatbot.', distractor: true },
      { id: 'check-sensitive', label: 'Check whether the dataset contains personal or sensitive information.' },
      { id: 'share-results', label: 'Download results and share the analysis with the team.' },
      { id: 'decide-tool', label: 'Decide whether an approved internal tool is required for this data type.' },
      { id: 'submit-prompt', label: 'Submit the prepared prompt and minimised data to the model.' },
      { id: 'anonymise', label: 'Remove or anonymise sensitive fields before sharing with the AI.' },
      { id: 'escalate-unsure', label: 'Escalate to your manager or security team if uncertain about data usage rules.' },
      { id: 'rewrite-task', label: 'Rewrite the task description using only the minimum data needed.' },
    ],
  }),

  // ─── PRE-ASSESSMENT PART 4: Self-Efficacy ────────────────────────────────

  'pre-se1': makeSelfEfficacyItem('pre-se1', 'I can recognise when an AI output contains unreliable or fabricated information.'),
  'pre-se2': makeSelfEfficacyItem('pre-se2', 'I know what types of data should not be entered into a public LLM.'),
  'pre-se3': makeSelfEfficacyItem('pre-se3', 'I feel confident deciding when to escalate an AI-assisted task to a human reviewer.'),
  'pre-se4': makeSelfEfficacyItem('pre-se4', 'I understand the difference between using an approved enterprise AI tool and a public chatbot.'),

  // ─── POST-ASSESSMENT PART 1: Core Knowledge Questions (mirror of pre) ─────

  'post-pq1': makeQuestion({
    id: 'post-pq1',
    prompt: 'Which of the following should never be pasted into a public LLM without preparation?',
    meta: 'Question 1 of 6',
    badge: 'Input Risk',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 7,
    correctOptionId: 'contract',
    feedback: {
      correct: 'Client contracts contain personal data, financial terms, and confidential clauses. Public AI tools are not contractually bound to protect that data.',
      incorrect: 'The risk is identifiable personal data and confidential commercial terms. A client contract typically contains both — it must not reach a public chatbot unedited.',
    },
    options: [
      { id: 'agenda', label: 'A draft internal meeting agenda with no names or sensitive topics.' },
      { id: 'contract', label: 'A client contract containing names, financial terms, and confidential clauses.' },
      { id: 'faq', label: 'A publicly available FAQ article from the company website.' },
      { id: 'features', label: 'A list of publicly released product features.' },
    ],
  }),

  'post-pq2': makeQuestion({
    id: 'post-pq2',
    prompt: 'What is the primary risk of prompt injection?',
    meta: 'Question 2 of 6',
    badge: 'Output Risk',
    badgeTone: 'critical',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'hijack',
    feedback: {
      correct: 'Prompt injection allows untrusted content embedded in a document or webpage to silently override the model\'s original instructions.',
      incorrect: 'The core risk is not performance or length — it is that hidden instructions in external content can redirect the model\'s behaviour without the user knowing.',
    },
    options: [
      { id: 'slow', label: 'The model produces slower responses when processing external documents.' },
      { id: 'hijack', label: 'Untrusted external content can override the model\'s original instructions and redirect its behaviour.' },
      { id: 'refuse', label: 'The model refuses all inputs that contain embedded instructions.' },
      { id: 'long', label: 'The model generates excessively long outputs when given complex prompts.' },
    ],
  }),

  'post-pq3': makeQuestion({
    id: 'post-pq3',
    prompt: 'Which type of AI output requires independent verification before professional use?',
    meta: 'Question 3 of 6',
    badge: 'Critical Thinking',
    badgeTone: 'critical',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'citation',
    feedback: {
      correct: 'AI systems frequently fabricate citations — generating plausible-sounding author names, titles, and publication years that do not exist.',
      incorrect: 'Named citations are exactly where AI output looks most authoritative while being most likely fabricated. All specific references need independent verification.',
    },
    options: [
      { id: 'citation', label: 'A legal citation with a named author, title, and publication year.' },
      { id: 'concept', label: 'A general explanation of a well-known business concept.' },
      { id: 'formats', label: 'A list of common document formatting conventions.' },
      { id: 'translation', label: 'A translation of a short informal phrase.' },
    ],
  }),

  'post-pq4': makeQuestion({
    id: 'post-pq4',
    prompt: 'An enterprise AI tool with a data processing agreement differs from a public chatbot mainly because it...',
    meta: 'Question 4 of 6',
    badge: 'Privacy',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 8,
    correctOptionId: 'safeguards',
    feedback: {
      correct: 'The data processing agreement defines how your data is stored, whether it is used for training, and what security controls apply. That is the meaningful governance difference.',
      incorrect: 'The difference is not speed or accuracy — it is the contractual and legal safeguards governing how the organisation\'s data is processed.',
    },
    options: [
      { id: 'accuracy', label: 'Always produces more accurate outputs than consumer-grade tools.' },
      { id: 'safeguards', label: 'Processes your organisation\'s data under contractual safeguards that prohibit its use for model training.' },
      { id: 'offline', label: 'Has no internet connection, so outputs cannot be intercepted.' },
      { id: 'faster', label: 'Runs on dedicated hardware that delivers faster responses.' },
    ],
  }),

  'post-pq5': makeQuestion({
    id: 'post-pq5',
    prompt: 'Which situation best illustrates "excessive AI agency"?',
    meta: 'Question 5 of 6',
    badge: 'Oversight',
    badgeTone: 'delegation',
    domainKey: 'appropriateDelegation',
    points: 8,
    correctOptionId: 'auto-email',
    feedback: {
      correct: 'Autonomously sending client communications removes the human check that accountability requires. That is the defining feature of excessive agency.',
      incorrect: 'Excessive agency specifically means autonomous action with real-world consequences — not drafting, summarising, or clarifying.',
    },
    options: [
      { id: 'summarise', label: 'An AI that summarises a long policy document for a team member.' },
      { id: 'draft', label: 'An AI that drafts a reply email for a human to review before sending.' },
      { id: 'auto-email', label: 'An AI that autonomously sends a client email without any human review or approval.' },
      { id: 'questions', label: 'An AI that asks clarifying questions before beginning a complex task.' },
    ],
  }),

  'post-pq6': makeQuestion({
    id: 'post-pq6',
    prompt: 'What does "data minimisation" mean in the context of using AI tools?',
    meta: 'Question 6 of 6',
    badge: 'Privacy',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 7,
    correctOptionId: 'minimum-needed',
    feedback: {
      correct: 'Data minimisation means the model only receives what the task strictly requires — no surplus fields, names, or identifiers that are unnecessary for the output.',
      incorrect: 'Data minimisation is a GDPR principle about what you share with the model, not about which model you use or how long you use it.',
    },
    options: [
      { id: 'smallest-model', label: 'Using the smallest available AI model to reduce energy consumption.' },
      { id: 'minimum-needed', label: 'Sharing only the data that the specific task strictly requires, and nothing more.' },
      { id: 'compress', label: 'Compressing files before uploading them to reduce storage use.' },
      { id: 'limit-time', label: 'Limiting AI tool usage to a fixed daily time budget.' },
    ],
  }),

  // ─── POST-ASSESSMENT PART 2: Higher-Order Scenario Decisions ─────────────

  'post-pps1': makeScenario({
    id: 'post-pps1',
    scenarioTitle: 'Scenario — Board Report Citation',
    scenarioSubtitle: 'A model-generated board report section includes a specific IMF citation.',
    icon: '📋',
    domainKey: 'criticalEvaluation',
    points: 7,
    correctOptionId: 'locate-verify',
    feedback: {
      correct: 'Locating the actual report and verifying the specific page and figure is the only reliable check. A named citation with a page number looks authoritative — that is exactly why it must be verified.',
      incorrect: 'The IMF\'s credibility as an institution does not mean this specific report, page, and figure exist. The AI may have generated a plausible-sounding citation that cannot be traced to any real source.',
    },
    blocks: [
      {
        type: 'transcript',
        title: 'Enterprise AI assistant',
        messages: [
          {
            role: 'assistant',
            speaker: 'AI',
            label: 'AI Draft',
            content: 'According to the IMF Digital Economy Report 2024 (p. 47), AI adoption in European enterprises grew by 31% year-on-year, driven primarily by financial services and professional consulting sectors.',
          },
        ],
      },
      {
        type: 'note',
        content: 'This sentence will appear in the board presentation. What is your most appropriate action before presenting?',
      },
    ],
    decisionLabel: 'Select your response:',
    options: [
      { id: 'accept-imf', title: 'Option A', description: 'Include it as written — the IMF is a credible institution and the citation looks specific.' },
      { id: 'locate-verify', title: 'Option B', description: 'Locate the IMF Digital Economy Report 2024, navigate to page 47, and confirm the 31% figure independently before use.' },
      { id: 'ask-ai-confirm', title: 'Option C', description: 'Ask the AI to confirm the citation exists and proceed if it does.' },
      { id: 'disclaimer', title: 'Option D', description: 'Add a slide footnote noting AI was used in drafting and proceed.' },
    ],
  }),

  'post-pps2': makeScenario({
    id: 'post-pps2',
    scenarioTitle: 'Scenario — Autonomous Calendar Action',
    scenarioSubtitle: 'An AI assistant with calendar and email access has acted without approval.',
    icon: '📅',
    domainKey: 'appropriateDelegation',
    points: 8,
    correctOptionId: 'excessive-agency',
    feedback: {
      correct: 'A client-facing commitment — a confirmed meeting time — was made without any human approval. This is the textbook definition of excessive AI agency, regardless of whether the outcome was operationally harmless.',
      incorrect: 'Even if the meeting time was convenient, the model made a client-facing commitment without human authorisation. Automation does not transfer accountability for that action.',
    },
    blocks: [
      {
        type: 'note',
        content: 'Your AI assistant has calendar read/write access and email sending permission. Without any instruction from you, it scheduled a client meeting for next Thursday at 10 AM and sent a confirmation email to the client on your behalf.',
      },
    ],
    decisionLabel: 'How should this situation be classified?',
    options: [
      { id: 'efficient', title: 'Option A', description: 'Efficient use of AI capabilities — this is exactly what calendar integration is for.' },
      { id: 'excessive-agency', title: 'Option B', description: 'Excessive AI agency — a client-facing commitment was made without human approval, regardless of the outcome.' },
      { id: 'normal-op', title: 'Option C', description: 'Normal operation for an enterprise AI assistant with calendar permissions.' },
      { id: 'hallucination', title: 'Option D', description: 'A scheduling hallucination — the AI confused an internal and external calendar.' },
    ],
  }),

  // ─── POST-ASSESSMENT PART 3: Applied Task — Sanitise This Prompt ─────────

  'post-pat1': makeSanitisePromptItem({
    id: 'post-pat1',
    meta: 'Applied Task',
    badge: 'Input Governance',
    badgeTone: 'privacy',
    domainKey: 'dataPrivacy',
    points: 10,
    // correctOptionId: sorted comma-separated IDs of all risky spans
    correctOptionId: 'sp2,sp4,sp6',
    feedback: {
      correct: 'The employee name with ID, the salary figure, and the confidential benchmark file reference are the three spans that must be removed or replaced before this prompt is safe to send.',
      incorrect: 'At minimum, the employee\'s full name and ID, their salary, and the reference to a confidential internal file must be removed. These identify an individual and expose restricted internal data.',
    },
    prompt: 'You are preparing a prompt for an AI tool to analyse a colleague\'s performance. Click on every part of the prompt that should be removed or replaced before sending it to a public AI tool.',
    spans: [
      { id: 'sp1', text: 'Analyse the performance of ', safe: true },
      {
        id: 'sp2',
        text: 'Anna Müller (Employee ID #4421)',
        safe: false,
        type: 'pii-identity',
        explanation: 'A full name combined with an internal employee ID directly identifies an individual. This is personal data under GDPR and must not reach a public AI tool.',
      },
      { id: 'sp3', text: ', who earns ', safe: true },
      {
        id: 'sp4',
        text: 'CHF 128,000 per year',
        safe: false,
        type: 'pii-financial',
        explanation: 'Salary data is sensitive personal data under GDPR Article 9 when combined with an identified person. It must be removed or replaced with a role-level band.',
      },
      { id: 'sp5', text: ' in the Finance department. Compare her recent output to the ', safe: true },
      {
        id: 'sp6',
        text: 'Q3 internal benchmark data (file: benchmark_q3_confidential.xlsx)',
        safe: false,
        type: 'confidential-data',
        explanation: 'Referencing a named confidential internal file exposes its existence and framing to the AI provider. The benchmark data itself — if pasted — would be a further exposure.',
      },
      { id: 'sp7', text: ' and suggest areas for improvement.', safe: true },
    ],
  }),

  // ─── POST-ASSESSMENT PART 4: Error Detection — Workflow Risk ─────────────

  'post-edt1': makeWorkflowRiskItem({
    id: 'post-edt1',
    meta: 'Error Detection',
    badge: 'Output Oversight',
    badgeTone: 'critical',
    domainKey: 'appropriateDelegation',
    points: 10,
    // correctOptionId: sorted comma-separated IDs of risky steps
    correctOptionId: 'wf2,wf4,wf5',
    feedback: {
      correct: 'Three steps carry clear risk: giving the AI access to the full client database (data minimisation failure), auto-sending personalised emails without review (no human oversight), and auto-responding to clients (excessive agency).',
      incorrect: 'The risk points are: unnecessary access to the full client database, automatic sending of personalised client emails without human review, and the AI auto-responding to clients without any approval.',
    },
    prompt: 'A team uses an AI assistant to produce a quarterly client satisfaction summary. Review the workflow below and click on every step that introduces a governance or safety risk.',
    steps: [
      {
        id: 'wf1',
        label: 'Manager requests a quarterly client satisfaction summary and initiates the workflow.',
        risky: false,
        explanation: 'Initiating a summary task is a routine, low-risk action. No data has been shared yet.',
      },
      {
        id: 'wf2',
        label: 'AI assistant is given read access to the full client database, including all names, email addresses, satisfaction scores, and historical interaction logs.',
        risky: true,
        type: 'data-minimisation',
        explanation: 'Granting access to the entire client database violates data minimisation. The AI needs only aggregated satisfaction scores — not names, emails, or full interaction histories — to produce a summary.',
      },
      {
        id: 'wf3',
        label: 'AI generates a report containing aggregated satisfaction statistics broken down by region and product line.',
        risky: false,
        explanation: 'Generating aggregated, anonymised statistics is an appropriate use of AI. No individual client data is exposed in the output.',
      },
      {
        id: 'wf4',
        label: 'The generated summary is automatically emailed to all 450 clients as personalised messages, without any human review of the content.',
        risky: true,
        type: 'no-oversight',
        explanation: 'Bulk external communications sent automatically without human review is a high-risk pattern. A formatting error, hallucinated detail, or inappropriate tone reaches 450 clients simultaneously and cannot be unsent.',
      },
      {
        id: 'wf5',
        label: 'The AI assistant automatically replies to client responses in the same email thread, without flagging them for human review.',
        risky: true,
        type: 'excessive-agency',
        explanation: 'Auto-responding to clients on behalf of the organisation — without human oversight — is excessive AI agency. The AI is making client-facing commitments that accountability requires a human to own.',
      },
      {
        id: 'wf6',
        label: 'The manager reviews the full email thread the following morning and archives the campaign.',
        risky: false,
        explanation: 'Reviewing after the fact is better than no review, but by this point the risky actions have already occurred. The review here is too late to prevent harm.',
      },
    ],
  }),

  // ─── POST-ASSESSMENT PART 5: Self-Efficacy (repeated) ────────────────────

  'post-se1': makeSelfEfficacyItem('post-se1', 'I can recognise when an AI output contains unreliable or fabricated information.'),
  'post-se2': makeSelfEfficacyItem('post-se2', 'I know what types of data should not be entered into a public LLM.'),
  'post-se3': makeSelfEfficacyItem('post-se3', 'I feel confident deciding when to escalate an AI-assisted task to a human reviewer.'),
  'post-se4': makeSelfEfficacyItem('post-se4', 'I understand the difference between using an approved enterprise AI tool and a public chatbot.'),
};

Object.assign(ASSESSMENT_ITEMS, newItems);

export const PRE_NEW_ITEM_IDS = [
  'pre-pq1', 'pre-pq2', 'pre-pq3', 'pre-pq4', 'pre-pq5', 'pre-pq6',
  'pre-ps1', 'pre-ps2',
  'pre-po1',
  'pre-se1', 'pre-se2', 'pre-se3', 'pre-se4',
];

export const POST_NEW_ITEM_IDS = [
  'post-pq1', 'post-pq2', 'post-pq3', 'post-pq4', 'post-pq5', 'post-pq6',
  'post-pps1', 'post-pps2',
  'post-pat1',
  'post-edt1',
  'post-se1', 'post-se2', 'post-se3', 'post-se4',
];

export const PRE_NEW_SECTIONS = [
  {
    id: 'pre-knowledge',
    label: 'Part 1',
    title: 'Baseline Knowledge Check',
    description: 'Six concept questions covering input governance, output risks, and appropriate delegation.',
    introParagraphs: [],
    itemIds: ['pre-pq1', 'pre-pq2', 'pre-pq3', 'pre-pq4', 'pre-pq5', 'pre-pq6'],
  },
  {
    id: 'pre-scenarios',
    label: 'Part 2',
    title: 'Scenario-Based Judgement',
    description: 'Two short workplace scenarios. Choose the most appropriate course of action for each.',
    introParagraphs: [],
    itemIds: ['pre-ps1', 'pre-ps2'],
  },
  {
    id: 'pre-ordering',
    label: 'Part 3',
    title: 'Input Governance Flow',
    description: 'Arrange the steps of a safe LLM workflow into the correct order and remove any step that does not belong.',
    introParagraphs: [
      'Before data reaches a language model, several checks must happen in the right sequence. Out-of-order steps — even individually correct ones — can create privacy and compliance risks.',
    ],
    callout: {
      variant: 'info',
      icon: 'ℹ',
      title: 'Drag to reorder · Click ✕ to remove',
      body: 'Arrange the steps in the correct safe order. One step in the list does not belong in a compliant workflow — remove it before submitting.',
    },
    itemIds: ['pre-po1'],
  },
  {
    id: 'pre-efficacy',
    label: 'Part 4',
    title: 'Confidence Self-Assessment',
    description: 'Rate your current confidence on four statements. These responses are not scored — they capture your starting point.',
    introParagraphs: [],
    callout: {
      variant: 'info',
      icon: 'ℹ',
      title: 'Unscored — your honest rating matters',
      body: 'There are no right or wrong answers here. Your ratings before the teaching content are compared with your ratings afterwards to track how your confidence changes.',
    },
    itemIds: ['pre-se1', 'pre-se2', 'pre-se3', 'pre-se4'],
  },
];

export const POST_NEW_SECTIONS = [
  {
    id: 'post-knowledge',
    label: 'Part 1',
    title: 'Core Knowledge Check',
    description: 'The same six concept questions from the pre-assessment. Answer them again based on what you have learned.',
    introParagraphs: [],
    itemIds: ['post-pq1', 'post-pq2', 'post-pq3', 'post-pq4', 'post-pq5', 'post-pq6'],
  },
  {
    id: 'post-scenarios',
    label: 'Part 2',
    title: 'Scenario-Based Decisions',
    description: 'Two higher-order scenarios requiring you to critique a situation and justify a course of action.',
    introParagraphs: [
      'These scenarios move beyond recognition and require you to evaluate a specific situation, identify what the risk is, and decide on the most defensible response.',
    ],
    itemIds: ['post-pps1', 'post-pps2'],
  },
  {
    id: 'post-applied',
    label: 'Part 3',
    title: 'Applied Task — Sanitise a Prompt',
    description: 'Identify the parts of a workplace prompt that must be removed before it is safe to send to an AI tool.',
    introParagraphs: [
      'A professionally AI-literate person checks prompts before sending — not just outputs after receiving. This task tests your ability to spot what should not reach the model at all.',
    ],
    callout: {
      variant: 'warn',
      icon: '⚠',
      title: 'Input governance in practice',
      body: 'Click every span you would remove or replace before sending this prompt. Missing a risky span or flagging a safe one both affect your score.',
    },
    itemIds: ['post-pat1'],
  },
  {
    id: 'post-error-detection',
    label: 'Part 4',
    title: 'Workflow Error Detection',
    description: 'Review an AI-assisted workflow and identify every step that introduces a governance or safety risk.',
    introParagraphs: [
      'Real AI risks often emerge not from one bad decision but from a chain of individually plausible steps that collectively bypass the safeguards that protect data and accountability.',
    ],
    callout: {
      variant: 'warn',
      icon: '⚠',
      title: 'Click every risky step',
      body: 'Some steps are safe. Some introduce measurable risk. Click each step you identify as problematic. You can click again to deselect.',
    },
    itemIds: ['post-edt1'],
  },
  {
    id: 'post-efficacy',
    label: 'Part 5',
    title: 'Confidence Self-Assessment',
    description: 'Rate the same four confidence statements again. Your ratings will be compared with your pre-assessment responses.',
    introParagraphs: [],
    callout: {
      variant: 'info',
      icon: 'ℹ',
      title: 'Unscored — your honest rating matters',
      body: 'Rate based on how you feel now, after completing the full experience. There are no right or wrong answers.',
    },
    itemIds: ['post-se1', 'post-se2', 'post-se3', 'post-se4'],
  },
];
