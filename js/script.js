/* ============================================================
   COLORCODE — script.js
   Core assessment logic: navigation, scoring, feedback, results.
   ============================================================ */

// Stores the user's answers as { questionId: boolean (correct/incorrect) }
const answers = {};

/* ── SCORING MAP ──────────────────────────────────────────────
   Each key maps to a point value and a domain number:
     Domain 1 — Critical Evaluation  (max 35 pts)
     Domain 2 — Data Privacy         (max 35 pts)
     Domain 3 — Appropriate Delegation (max 30 pts)
   ──────────────────────────────────────────────────────────── */
const SCORING = {
  q1:  { pts: 7,  domain: 1 },
  q2:  { pts: 7,  domain: 1 },
  q3:  { pts: 9,  domain: 2 },
  q4:  { pts: 7,  domain: 1 },
  q5:  { pts: 7,  domain: 3 },
  q6:  { pts: 8,  domain: 2 },
  q7:  { pts: 7,  domain: 1 },
  d1:  { pts: 7,  domain: 1 },
  d2:  { pts: 9,  domain: 2 },
  q8:  { pts: 9,  domain: 2 },
  sim1:{ pts: 8,  domain: 3 },
  sim2:{ pts: 8,  domain: 3 },
  q9:  { pts: 7,  domain: 3 },
};

/* ── FEEDBACK COPY ────────────────────────────────────────────
   c = shown on a correct answer
   w = shown on a wrong answer
   ──────────────────────────────────────────────────────────── */
const FEEDBACK = {
  q1:  { c: 'Correct. AI tools can fabricate citations and statistics. Always verify against primary sources before any professional use.',
         w: 'AI tools frequently produce plausible but incorrect statistics and citations. Verification against primary sources is essential before presenting.' },
  q2:  { c: 'Correct. A hallucination is AI-generated content that sounds plausible but is factually false or entirely fabricated.',
         w: 'Hallucinations are not errors or refusals — they are confidently-stated fabrications, a core limitation of all current large language models.' },
  q3:  { c: 'Correct. GDPR applies to any processing of personal data regardless of the tool. Pasting employee data into a public AI tool without lawful basis is a compliance risk.',
         w: 'GDPR assigns data controller responsibility to your organisation, not the AI provider. Public AI tools typically lack the contractual safeguards required for lawful processing.' },
  q4:  { c: 'Correct. AI-generated financial figures without citation must always be verified against official disclosures before use.',
         w: 'AI tools do not have access to real-time financial data and frequently fabricate specific figures. Plausibility is not a substitute for verification.' },
  q5:  { c: 'Correct. Performance review outcomes carry legal accountability and significant consequences for individuals — these decisions require meaningful human judgment.',
         w: 'High-stakes personnel decisions with legal and ethical consequences must not be delegated entirely to AI.' },
  q6:  { c: 'Correct. Enterprise data processing agreements establish legal safeguards that free consumer tools typically do not provide.',
         w: 'A data processing agreement provides legal guarantees about how your data is handled, retained, and protected. Free consumer tools offer no such assurances.' },
  q7:  { c: 'Correct. Only independent verification using original data and a separate tool provides a robust check on AI arithmetic.',
         w: 'Asking an AI to verify its own output is not a reliable check — it may reproduce the same error. Independent verification using the raw data is required.' },
  d1:  { c: 'Correct. The specific report, statistics, author, and programme amount are all unverifiable and consistent with AI hallucination. All claims require source confirmation before professional use.',
         w: 'The response carries hallucination risk. Named commissioners, specific statistics, and programme figures are all unverified. Never use AI-generated facts without confirming against original sources.' },
  d2:  { c: 'Correct. The principle of data minimisation under GDPR means sharing only the minimum data necessary. Computing aggregates locally, then sharing only those figures, avoids exposing personal data.',
         w: 'The most privacy-preserving approach is to compute department totals locally in Excel, sharing only aggregated figures with the AI — not individual salary records, names, or birth dates.' },
  q8:  { c: 'Correct. Removing or pseudonymising personal identifiers before sharing with any AI tool is the appropriate privacy-preserving approach.',
         w: 'Personal identifiers must be removed or pseudonymised before sharing data with AI tools. You cannot rely on built-in anonymisation features, which are not guaranteed to be reliable.' },
  sim1:{ c: 'Correct. Data minimisation remains best practice even within enterprise tools. Share only the specific KPIs needed, not the full confidential model.',
         w: 'Even with an enterprise AI tool under a data processing agreement, data minimisation is required. The full confidential model should never be pasted into any AI prompt when specific figures will suffice.' },
  sim2:{ c: 'Correct. When AI output contradicts verified source data, the source data is authoritative. Presenting an incorrect AI-generated figure to a board is a serious professional error.',
         w: 'AI output that contradicts your source data must always be corrected. The source document takes precedence — never present an AI figure you know to be incorrect.' },
  q9:  { c: 'Correct. AI can assist with supporting analysis and structuring evidence, but final strategic recommendations require professional accountability and expert human judgment.',
         w: 'Strategic recommendations to a board require human expertise and professional accountability. AI may support the process but must not be the unchecked author of such recommendations.' },
};

/* ── NAVIGATION ──────────────────────────────────────────────
   Shows the target page, updates the nav strip and progress bar.
   ──────────────────────────────────────────────────────────── */
function goTo(n) {
  document.querySelectorAll('.page').forEach((p, i) => p.classList.toggle('active', i === n));
  document.querySelectorAll('.nav-step').forEach((s, i) => {
    s.classList.toggle('active', i === n);
    s.classList.toggle('completed', i < n);
  });
  document.getElementById('progress-bar').style.width = (n / 5 * 100) + '%';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── STANDARD MCQ INTERACTION ────────────────────────────────
   Locks the card after first selection, shows feedback.
   ──────────────────────────────────────────────────────────── */
function selectOption(el, qid, isCorrect) {
  const card = el.closest('.quiz-card');
  if (card.classList.contains('answered')) return;  // prevent re-answering

  card.classList.add('answered');
  card.querySelectorAll('.option-item').forEach(opt => {
    if (opt === el) opt.classList.add(isCorrect ? 'correct' : 'incorrect');
  });

  const fb = document.getElementById('fb-' + qid);
  if (fb && FEEDBACK[qid]) {
    const f = FEEDBACK[qid];
    fb.innerHTML = `<strong>${isCorrect ? '✓ Correct' : '✗ Incorrect'}</strong>${isCorrect ? f.c : f.w}`;
    fb.className = 'feedback-box show ' + (isCorrect ? 'correct-fb' : 'incorrect-fb');
  }

  // Only record the first attempt
  if (!(qid in answers)) answers[qid] = isCorrect;
}

/* ── SCENARIO DECISION INTERACTION ──────────────────────────
   Same logic as selectOption but scoped to scenario-body blocks.
   ──────────────────────────────────────────────────────────── */
function selectDecision(el, did, isCorrect) {
  const body = el.closest('.scenario-body');
  if (body.dataset.answered) return;  // prevent re-answering
  body.dataset.answered = '1';

  body.querySelectorAll('.decision-option').forEach(opt => {
    if (opt === el) opt.classList.add(isCorrect ? 'correct' : 'incorrect');
  });

  const fb = document.getElementById('fb-' + did);
  if (fb && FEEDBACK[did]) {
    const f = FEEDBACK[did];
    fb.innerHTML = `<strong>${isCorrect ? '✓ Correct' : '✗ Incorrect'}</strong>${isCorrect ? f.c : f.w}`;
    fb.className = 'feedback-box show ' + (isCorrect ? 'correct-fb' : 'incorrect-fb');
  }

  if (!(did in answers)) answers[did] = isCorrect;
}

/* ── RESULTS COMPUTATION & DISPLAY ──────────────────────────
   Tallies domain scores, animates the ring, renders recommendations,
   then submits the result payload to the backend (fire-and-forget).
   ──────────────────────────────────────────────────────────── */
function computeAndShowResults() {
  let d1 = 0, d2 = 0, d3 = 0;

  for (const [key, correct] of Object.entries(answers)) {
    if (!correct || !SCORING[key]) continue;
    const { pts, domain } = SCORING[key];
    if (domain === 1) d1 += pts;
    else if (domain === 2) d2 += pts;
    else d3 += pts;
  }

  const total = d1 + d2 + d3;

  let grade;
  if      (total >= 85) grade = 'Distinguished';
  else if (total >= 70) grade = 'Proficient';
  else if (total >= 50) grade = 'Developing';
  else                  grade = 'Foundational';

  // Navigate to results page first so DOM elements exist
  goTo(5);

  // Submit results to backend (defined in database.js); fails silently
  submitResults({ total, domain1: d1, domain2: d2, domain3: d3, grade, answers: { ...answers } });

  // Short delay so page transition completes before animating
  setTimeout(() => {
    // Animated score ring
    const circle = document.getElementById('score-circle');
    circle.style.transition = 'stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)';
    circle.style.strokeDashoffset = 364.4 - (total / 100) * 364.4;

    // Count-up number animation
    const disp = document.getElementById('score-display');
    let cur = 0;
    const iv = setInterval(() => {
      cur++;
      disp.innerHTML = cur + '<span>/ 100</span>';
      if (cur >= total) clearInterval(iv);
    }, Math.max(10, 1200 / Math.max(total, 1)));

    document.getElementById('score-grade').textContent = grade;
    document.getElementById('result-date').textContent =
      new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    // Helper: classify a domain score as high / mid / low
    const classify = (s, m) => s / m >= 0.75 ? 'high' : s / m >= 0.5 ? 'mid' : 'low';

    // Render domain breakdown cards
    [
      [d1, 35, '1',
        'Strong ability to detect and challenge unreliable AI outputs.',
        'Further practice identifying hallucinations and verifying AI outputs is recommended.'],
      [d2, 35, '2',
        'Good awareness of GDPR obligations and safe AI data sharing practices.',
        'Review GDPR obligations and practice applying data minimisation principles.'],
      [d3, 30, '3',
        'Appropriate delegation judgement demonstrated across scenarios.',
        'Consider which decisions carry legal or ethical accountability requiring human oversight.'],
    ].forEach(([score, max, idx, goodDesc, badDesc]) => {
      const cl = classify(score, max);
      document.getElementById('d-score-' + idx).textContent = score;
      document.getElementById('d-score-' + idx).className = 'domain-score ' + cl;
      document.getElementById('d-desc-' + idx).textContent = cl === 'high' ? goodDesc : badDesc;
      const bar = document.getElementById('d-bar-' + idx);
      bar.className = 'domain-bar-fill fill-' + cl;
      setTimeout(() => bar.style.width = Math.round(score / max * 100) + '%', 500);
    });

    // Render personalised recommendations
    const recs = [
      { ok: d1 >= 26, icon: '🔍', title: 'Critical Evaluation',
        good: 'You demonstrated strong judgement in identifying unreliable AI outputs. Continue applying these verification habits before any professional use of AI-generated content.',
        dev:  'Practice verifying AI outputs independently before professional use. Before citing any AI-generated statistic or claim, confirm it against a primary source.' },
      { ok: d2 >= 26, icon: '🔒', title: 'Data Privacy & GDPR',
        good: 'You applied appropriate caution with personal data throughout the assessment. Ensure your organisation applies the same data minimisation standards.',
        dev:  'Review GDPR Article 4 on personal data and Article 5 on data minimisation. Before using any AI tool with business data, confirm a valid data processing agreement is in place.' },
      { ok: d3 >= 22, icon: '⚖️', title: 'Appropriate Delegation',
        good: 'You correctly identified where human oversight is non-negotiable. This judgement is critical for responsible AI use at leadership level.',
        dev:  'Identify which decisions in your role carry legal accountability or significant consequences for individuals. These require meaningful human review — AI should support but not replace this judgment.' },
    ];

    document.getElementById('recommendations-container').innerHTML = recs.map(r => `
      <div class="rec-card">
        <div class="rec-icon ${r.ok ? 'good' : 'priority'}">${r.icon}</div>
        <div>
          <div class="rec-label ${r.ok ? 'good' : 'priority'}">${r.ok ? 'Strength' : 'Area for Development'}</div>
          <div class="rec-title">${r.title}</div>
          <div class="rec-desc">${r.ok ? r.good : r.dev}</div>
        </div>
      </div>`).join('');
  }, 200);
}

/* ── RESET ───────────────────────────────────────────────────
   Clears all selections and returns to the landing page.
   ──────────────────────────────────────────────────────────── */
function resetAssessment() {
  Object.keys(answers).forEach(k => delete answers[k]);

  document.querySelectorAll('.quiz-card').forEach(c => {
    c.classList.remove('answered');
    c.querySelectorAll('.option-item').forEach(o => o.classList.remove('selected', 'correct', 'incorrect'));
    c.querySelectorAll('.feedback-box').forEach(f => { f.className = 'feedback-box'; f.innerHTML = ''; });
  });

  document.querySelectorAll('.scenario-body').forEach(b => {
    delete b.dataset.answered;
    b.querySelectorAll('.decision-option').forEach(d => d.classList.remove('selected', 'correct', 'incorrect'));
    b.querySelectorAll('.feedback-box').forEach(f => { f.className = 'feedback-box'; f.innerHTML = ''; });
  });

  goTo(0);
}
