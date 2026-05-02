export const mainPlatformSegments = {
  'main-platform-header': {
    type: 'pageHeader',
    eyebrow: 'Section 9 · Platform Choice',
    title: 'Different tools create different governance choices',
    description:
      'This final main-part page compares major LLM platforms only after learners understand why platform differences matter in the first place.',
  },
  'main-platform-intro': {
    type: 'moduleIntro',
    paragraphs: [
      'We have placed platform choice at the end of this journey intentionally. Now that you understand the mechanics of input risks (sensitive data disclosure, prompt injection) and output risks (hallucinations, excessive agency), you are fully equipped to evaluate AI tools through the lens of governance rather than getting distracted by flashy, unstable feature claims.',
      'The goal here is not to rank products like ChatGPT, Claude, or Gemini against one another. Instead, the focus must be on asking the right questions about data sovereignty and administrative control.',
    ],
  },
  'main-platform-cloud': {
    type: 'moduleIntro',
    paragraphs: [
      'When evaluating AI platforms, organisations generally face three distinct paths, each carrying its own structural trade-offs:',
      '1. Public Consumer Cloud (High Data Risk): Standard, free, or basic subscription versions of popular LLMs. The primary risk here is data sovereignty. Unless specifically stated otherwise, the data you input may be stored on external servers and used to train the provider\'s future models, putting intellectual property and client confidentiality at immediate risk.',
      '2. Enterprise Cloud Instances (Managed Risk): Enterprise versions often offer the exact same underlying intelligence as the consumer version, but with strictly different legal and data-handling guarantees. They ensure your prompts and files are ring-fenced, explicitly forbidding the provider from using your data for model training.',
      '3. Local or Internal Deployments (Operational Shift): Hosting models within your own controlled infrastructure offers the highest level of data privacy, as your information never touches a public cloud. However, "local" does not automatically mean "safe." These deployments carry heavy operational and maintenance burdens. Furthermore, a local model is still entirely vulnerable to hallucinations, bias, and prompt injection.',
    ],
  },
  'main-platform-private': {
    type: 'moduleIntro',
    paragraphs: [
      'To navigate this landscape responsibly, organisations must move past comparing benchmarks and focus on establishing robust governance. Before adopting any AI tool, evaluate it against these core criteria:',
      '• Verify Data Usage Policies: Ensure that contracts or terms of service explicitly prohibit the AI provider from using your inputs, uploads, and chat history to train their base models.',
      '• Assess Data Storage and Sovereignty: Determine exactly where the data is being stored and processed, ensuring it complies with regional frameworks like GDPR or industry-specific regulations.',
      '• Demand Administrative Controls: Prioritise platforms that allow IT and security teams to manage access, enforce strict data retention policies, and monitor usage logs across the organisation.',
      '• Maintain Output Oversight: Remember that choosing a secure, enterprise-grade platform only solves the input side of the risk equation. You must still apply the rigorous output verification and human-in-the-loop workflows discussed in previous chapters.',
    ],
  },
  'main-conclusion': {
    type: 'moduleIntro',
    paragraphs: [
      'Ultimately, responsible LLM use is not about banning tools or fearing the technology. It is about intentionally governing your inputs, systematically verifying your outputs, and choosing platforms with a crystal-clear understanding of where the risk resides. By applying these principles, we can safely and confidently harness the transformative power of Generative AI.',
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
