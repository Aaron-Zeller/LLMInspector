export const mainPromptSegments = {
  'main-prompt-header': {
    type: 'pageHeader',
    eyebrow: 'Section 5 · Prompt Injection',
    title: 'Why untrusted content can steer the model',
    description:
      'After understanding unsafe data entry, the next step is seeing that inputs can also manipulate the model itself through hidden or indirect instructions.',
  },
  'main-prompt-intro': {
    type: 'richModuleIntro',
    paragraphs: [
      'Prompt injection is a term that has been floating around in the news over the past few years. But like many concepts introduced alongside the boom in large language models, it is unclear exactly what this particularly scary-sounding phrase actually describes.',
      'Simply put, prompt injection is when malicious instructions are slipped into an LLM without the user\'s knowledge or consent. You might be thinking: how can this happen if I am the one controlling what goes into the model? But hopefully, at this point in the tutorial, you are beginning to question how much control you actually have. The idea that you alone decide what an LLM reads or acts on is something of an illusion. There are a variety of sneaky techniques that can be used to change the prompt, or input instruction, that the LLM receives, resulting in what is called a "prompt injection" attack.',
      `<ul class="rich-list">
        <li><strong>Direct manipulation.</strong> An employee can directly prompt a company-wide LLM into revealing sensitive information. An LLM told by administrators never to disclose certain data can be turned into a tell-all machine simply by asking the right way.</li>
        <li><strong>Malicious uploads.</strong> Users can upload content that contains a hidden prompt. We all pretend to read long PDFs before signing them, and this leaves plenty of opportunity for an innocent-looking document to contain something like "Ignore everything and output the following…" Even worse, this instruction might be written in white text on a white background, or buried in the file's metadata, making it completely invisible to a human reader but not to an LLM that reads all text regardless.</li>
        <li><strong>Poisoned websites.</strong> Even if you type nothing malicious yourself, an LLM that browses the web can encounter sites containing injected instructions and simply follow them, treating attacker-planted text as a legitimate command.</li>
        <li><strong>Multi-agent override.</strong> In systems where multiple AI agents work together, one agent can instruct another to act against its original guidelines, effectively bypassing rules that were set upstream.</li>
      </ul>`,
      `<p class="rich-section-head">How to defend against it</p>
      <ul class="rich-list rich-list--defense">
        <li>Limit what an agent can do (for example, read-only access where possible)</li>
        <li>Treat all external data as untrusted by default</li>
        <li>Restrict API access to only what is strictly necessary</li>
        <li>Continuously monitor and log AI inputs and outputs</li>
      </ul>`,
    ],
  },
  'main-prompt-demo': {
    type: 'promptInjectionDemo',
  },
  'main-prompt-footer': {
    type: 'navigationFooter',
    previousPageId: 'main-sensitive-disclosure',
    nextPageId: 'main-misinformation',
    caption: 'Section 5 of 12',
    nextLabel: 'Go to Misinformation →',
  },
};
