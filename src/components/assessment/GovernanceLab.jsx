import { useEffect, useState } from 'react';
import { cx } from '../../lib/cx.js';
import { AfterLabSection } from '../common/AfterLabSection.jsx';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

const TASK_DESCRIPTION =
  'Write a Q3 performance blog post for the company website. Marketing needs it by end of day.';

const DOCS = [
  {
    id: 'salary',
    name: 'Employee Salary Spreadsheet',
    desc: '847 staff: names, compensation, performance bands',
    icon: '',
    risk: 'critical',
    tag: 'PII · Confidential',
  },
  {
    id: 'forecast',
    name: 'Q3 Financial Forecast (Full)',
    desc: 'Internal projections, EBITDA targets, stretch goals',
    icon: '',
    risk: 'critical',
    tag: 'Trade Secret · Internal Only',
  },
  {
    id: 'summary',
    name: 'Draft Executive Summary',
    desc: 'Management notes with internal targets and operational priorities',
    icon: '',
    risk: 'medium',
    tag: 'Internal · Not for Publication',
  },
  {
    id: 'branding',
    name: 'Brand & Messaging Guidelines',
    desc: 'Approved tone of voice and communication standards',
    icon: '',
    risk: 'safe',
    tag: 'Public · Approved',
  },
  {
    id: 'press',
    name: 'Q3 Approved Press Release',
    desc: 'Publicly cleared financial highlights for external channels',
    icon: '',
    risk: 'safe',
    tag: 'Public · Cleared for External Use',
  },
];

const PROMPT_STYLES = [
  {
    id: 'raw',
    label: 'Direct Upload',
    sublabel: 'Send all documents as context',
    preview: '"Use the uploaded documents to write a Q3 blog post. Include relevant highlights."',
    tone: 'danger',
  },
  {
    id: 'anonymized',
    label: 'Filtered & Guided',
    sublabel: 'Restrict to publicly safe content',
    preview:
      '"Summarise only information cleared for external publication. Exclude internal targets, salary data, or unpublished projections."',
    tone: 'success',
  },
  {
    id: 'over-redacted',
    label: 'Maximum Restriction',
    sublabel: 'Block all internal references entirely',
    preview:
      '"Do not use any of the uploaded documents. Only include information already in the public domain."',
    tone: 'warn',
  },
];

const DOC_RISK_CLS = {
  critical: 'gl-doc--critical',
  medium: 'gl-doc--medium',
  safe: 'gl-doc--safe',
};

const PROMPT_TONE_CLS = {
  danger: 'gl-prompt-opt--danger',
  success: 'gl-prompt-opt--success',
  warn: 'gl-prompt-opt--warn',
};

const STEP_LABELS = ['Data Selection', 'Prompt Style', 'Output Review'];

function computeScores(docs, prompt, action) {
  let leakage = 0;

  if (docs.has('salary')) leakage += 38;
  if (docs.has('forecast')) leakage += 28;
  if (docs.has('summary')) leakage += 10;

  if (prompt === 'raw') {
    if (docs.has('salary')) leakage += 12;
    if (docs.has('forecast')) leakage += 10;
    if (docs.has('summary')) leakage += 5;
  } else if (prompt === 'anonymized') {
    leakage = Math.floor(leakage * 0.5);
  }

  if (action === 'publish' && leakage > 10) leakage = Math.min(leakage + 10, 100);

  const hasUseful =
    docs.has('press') || docs.has('branding') || docs.has('summary') || docs.has('forecast');
  let efficiency = hasUseful ? 55 : 15;
  if (docs.has('press')) efficiency += 25;
  if (docs.has('branding')) efficiency += 10;
  if (prompt === 'over-redacted') efficiency -= 35;
  else if (prompt === 'anonymized' && hasUseful) efficiency += 10;

  return {
    leakage: Math.min(Math.max(Math.round(leakage), 0), 100),
    efficiency: Math.min(Math.max(Math.round(efficiency), 0), 100),
  };
}

function buildOutputSpans(docs, prompt) {
  if (!docs.size) {
    return [
      {
        id: 'empty',
        text: 'No documents were uploaded. The AI cannot generate a blog post without source material.',
        safe: true,
      },
    ];
  }

  if (prompt === 'over-redacted') {
    return [
      { id: 'or1', text: 'Task Incomplete\n\n', safe: true },
      {
        id: 'or2',
        text: 'The current prompt restrictions block access to all uploaded documents, and no publicly available alternative was provided. The AI cannot generate a blog post under these constraints.',
        safe: true,
      },
    ];
  }

  const spans = [];

  spans.push({ id: 'h1', text: 'Q3 Highlights: Continued Growth and Customer Momentum\n\n', safe: true });

  if (docs.has('press')) {
    spans.push({
      id: 'press1',
      text: "Q3 was a record quarter. Revenue grew 12% year-over-year, driven by strong enterprise demand and continued product investment. We welcomed 340 new enterprise customers this quarter, reinforcing the strength of our go-to-market strategy.",
      safe: true,
    });
  } else {
    spans.push({
      id: 'gen1',
      text: 'Q3 marked continued momentum across our business, with positive performance across major segments.',
      safe: true,
    });
  }

  if (docs.has('salary') && prompt === 'raw') {
    spans.push({
      id: 'leak-salary',
      text: ' Our 847-person team, averaging $94,200 in annual compensation, delivered exceptional results this quarter',
      safe: false,
      type: 'pii',
      label: 'PII · Internal Salary Data',
    });
    spans.push({ id: 'ls2', text: ', driving operational excellence across all regions.', safe: true });
  }

  if (docs.has('forecast') && prompt === 'raw') {
    spans.push({
      id: 'leak-forecast',
      text: ' Internal models project a 23% EBITDA margin for Q4, with a full-year revenue stretch goal of $2.4B',
      safe: false,
      type: 'trade-secret',
      label: 'Trade Secret · Unpublished Forecast',
    });
    spans.push({ id: 'lf2', text: ', positioning us well for sustained 2025 growth.', safe: true });
  } else if (docs.has('forecast') && prompt === 'anonymized') {
    spans.push({
      id: 'fa1',
      text: ' We remain confident in our financial trajectory heading into Q4 and beyond.',
      safe: true,
    });
  }

  if (docs.has('summary') && prompt === 'raw') {
    spans.push({
      id: 'leak-summary',
      text: ' The management team has approved an 18% operating expense reduction initiative for H2',
      safe: false,
      type: 'internal',
      label: 'Internal · Unpublished Strategic Target',
    });
    spans.push({
      id: 'lm2',
      text: ', reinforcing our commitment to long-term efficiency.',
      safe: true,
    });
  } else if (docs.has('summary') && prompt === 'anonymized') {
    spans.push({
      id: 'sa1',
      text: ' Internally, leadership remains focused on disciplined cost management and sustainable growth.',
      safe: true,
    });
  }

  if (docs.has('branding')) {
    spans.push({
      id: 'br1',
      text: '\n\nWe are proud of what our team has built and remain deeply committed to delivering value to every customer we serve.',
      safe: true,
    });
  }

  spans.push({
    id: 'outro',
    text: '\n\nWe look forward to an equally strong Q4. Thank you to our customers, partners, and entire team.',
    safe: true,
  });

  return spans;
}

function getPrimaryLeakStep(docs, prompt, action, leakage) {
  if (leakage === 0) return null;
  if (docs.has('salary') || docs.has('forecast')) return 1;
  if (prompt === 'raw') return 2;
  if (action === 'publish') return 3;
  return 1;
}

function scoreTone(value, higherIsBad) {
  if (higherIsBad) return value >= 50 ? 'danger' : value >= 20 ? 'warn' : 'success';
  return value >= 70 ? 'success' : value >= 40 ? 'warn' : 'danger';
}

export function GovernanceLab({ segment, segmentId }) {
  const [step, setStep] = useState(1);
  const [selectedDocs, setSelectedDocs] = useState(new Set());
  const [promptStyle, setPromptStyle] = useState(null);
  const [outputAction, setOutputAction] = useState(null);
  const [phase, setPhase] = useState('employee');
  const [managerHighlight, setManagerHighlight] = useState(null);
  const [managerSubmitted, setManagerSubmitted] = useState(false);
  const markLabCompleted = useAssessmentStore((state) => state.markLabCompleted);

  const scores = computeScores(selectedDocs, promptStyle, outputAction);
  const leakTone = scoreTone(scores.leakage, true);
  const effTone = scoreTone(scores.efficiency, false);
  const outputSpans = step >= 3 ? buildOutputSpans(selectedDocs, promptStyle) : [];
  const hasLeakableOutput = outputSpans.some((s) => !s.safe);
  const taskCompleted = scores.efficiency >= 50;
  const primaryLeakStep = getPrimaryLeakStep(selectedDocs, promptStyle, outputAction, scores.leakage);
  const selectedDocNames = DOCS.filter((d) => selectedDocs.has(d.id)).map((d) => d.name);
  const promptLabel = PROMPT_STYLES.find((p) => p.id === promptStyle)?.label ?? 'Not selected';
  const actionLabel =
    outputAction === 'publish'
      ? 'Published directly without editing'
      : outputAction === 'edit'
        ? 'Reviewed and edited before publishing'
        : 'Not selected';

  function toggleDoc(id) {
    setSelectedDocs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function reset() {
    setStep(1);
    setSelectedDocs(new Set());
    setPromptStyle(null);
    setOutputAction(null);
    setPhase('employee');
    setManagerHighlight(null);
    setManagerSubmitted(false);
  }

  function getLeakFeedback() {
    if (scores.leakage === 0)
      return 'No sensitive data was exposed. Document selection and prompt choices kept all internal information out of the LLM context.';
    if (scores.leakage < 20)
      return 'A small amount of internal information was included. The anonymized prompt helped reduce exposure, but the correct fix is not to upload internal documents in the first place.';
    if (scores.leakage < 50)
      return 'Internal information, including potentially sensitive targets or operational data, was passed to the LLM and may have surfaced in the generated output.';
    return 'Critical data was exposed: salary records or unpublished financial projections reached the LLM and appeared in the generated blog post. Publishing this output would constitute a serious data leak.';
  }

  function getEffFeedback() {
    if (scores.efficiency >= 80)
      return 'The task was completed effectively. The approved press release and brand guidelines provided sufficient context for a high-quality blog post.';
    if (scores.efficiency >= 55)
      return 'The task was mostly achievable. Some document or prompt choices limited output quality, but a usable draft was generated.';
    if (scores.efficiency >= 35)
      return 'The output was only partially useful. The combination of document selection and prompt restrictions reduced what the LLM could generate.';
    return 'The task could not be completed. Either no useful source documents were provided, or the prompt restrictions prevented the LLM from using any of the uploaded content.';
  }

  const logStepRiskTone = [
    selectedDocs.has('salary') || selectedDocs.has('forecast')
      ? 'danger'
      : selectedDocs.has('summary')
        ? 'warn'
        : 'safe',
    promptStyle === 'raw' ? 'danger' : promptStyle === 'over-redacted' ? 'warn' : 'safe',
    outputAction === 'publish' && hasLeakableOutput ? 'danger' : 'safe',
  ];

  const scoreBars = [
    { label: 'Leakage Risk', value: scores.leakage, tone: leakTone },
    { label: 'Task Efficiency', value: scores.efficiency, tone: effTone },
  ];

  useEffect(() => {
    if (managerSubmitted) {
      markLabCompleted(segmentId);
    }
  }, [managerSubmitted, markLabCompleted, segmentId]);

  // ── Manager Phase ──────────────────────────────────────────────────────
  if (phase === 'manager') {
    const managerCorrect =
      managerSubmitted &&
      (primaryLeakStep === null || managerHighlight === primaryLeakStep);

    return (
      <Segment className="content-section gl-segment" segmentId={segmentId}>
        <div className="gl-manager-banner">
          <div className="gl-manager-banner__eyebrow">Supervision Mode</div>
          <div className="gl-manager-banner__title">Manager View: Action Log</div>
          <div className="gl-manager-banner__desc">
            {primaryLeakStep !== null
              ? 'Review the decisions your employee made and identify which step introduced the highest data risk.'
              : 'Review the decisions your employee made and assess whether the workflow was handled correctly.'}
          </div>
        </div>

        <div className="gl-scores">
          {scoreBars.map((b) => (
            <div key={b.label} className="gl-scores__item">
              <div className="gl-scores__label">{b.label}</div>
              <div className="gl-scores__bar-track">
                <div
                  className={cx('gl-scores__bar-fill', `gl-scores__bar-fill--${b.tone}`)}
                  style={{ width: `${b.value}%` }}
                />
              </div>
              <div className={cx('gl-scores__value', `gl-scores__value--${b.tone}`)}>{b.value}%</div>
            </div>
          ))}
        </div>

        {primaryLeakStep !== null ? (
          <p className="gl-manager-hint">Click the step where the data risk was first introduced:</p>
        ) : (
          <div className="gl-no-leak-note">
            No significant data leak was detected in this workflow. All three steps appear appropriate for the task.
          </div>
        )}

        <div className="gl-log">
          {[
            {
              num: 1,
              label: 'Data Selection',
              desc:
                selectedDocNames.length > 0 ? selectedDocNames.join(', ') : 'No documents selected',
            },
            { num: 2, label: 'Prompt Style', desc: promptLabel },
            { num: 3, label: 'Output Review', desc: actionLabel },
          ].map((entry) => {
            const isChosen = managerHighlight === entry.num;
            const isCorrect = managerSubmitted && primaryLeakStep === entry.num;
            const isWrong = managerSubmitted && isChosen && primaryLeakStep !== entry.num;
            const riskTone = logStepRiskTone[entry.num - 1];

            return (
              <button
                key={entry.num}
                type="button"
                disabled={managerSubmitted || primaryLeakStep === null}
                className={cx(
                  'gl-log-step',
                  `gl-log-step--side-${riskTone}`,
                  isChosen && !managerSubmitted && 'gl-log-step--selected',
                  isCorrect && 'gl-log-step--correct',
                  isWrong && 'gl-log-step--incorrect',
                )}
                onClick={() => !managerSubmitted && setManagerHighlight(entry.num)}
              >
                <span className="gl-log-step__num">Step {entry.num}</span>
                <span className="gl-log-step__label">{entry.label}</span>
                <span className="gl-log-step__desc">{entry.desc}</span>
                {isCorrect && (
                  <span className="gl-log-step__verdict gl-log-step__verdict--danger">
                    Primary Risk Point
                  </span>
                )}
                {isWrong && (
                  <span className="gl-log-step__verdict gl-log-step__verdict--muted">
                    Not the primary issue
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {!managerSubmitted && (
          <div className="gl-manager-actions">
            <button
              type="button"
              className="btn-primary"
              disabled={primaryLeakStep !== null && managerHighlight === null}
              onClick={() => setManagerSubmitted(true)}
            >
              Submit Assessment
            </button>
          </div>
        )}

        {managerSubmitted && (
          <div className="gl-report-card">
            <div className="gl-report-card__title">Final Report Card</div>

            <div className="gl-report-metrics">
              <div className={cx('gl-report-metric', `gl-report-metric--${leakTone}`)}>
                <span className="gl-report-metric__value">{scores.leakage}%</span>
                <span className="gl-report-metric__label">Data Leaked</span>
              </div>
              <div className={cx('gl-report-metric', `gl-report-metric--${effTone}`)}>
                <span className="gl-report-metric__value">{taskCompleted ? 'Yes' : 'No'}</span>
                <span className="gl-report-metric__label">Task Completed</span>
              </div>
              {primaryLeakStep === null ? (
                <div className="gl-report-metric gl-report-metric--success">
                  <span className="gl-report-metric__value">✓</span>
                  <span className="gl-report-metric__label">No Leak</span>
                </div>
              ) : (
                <div
                  className={cx(
                    'gl-report-metric',
                    `gl-report-metric--${managerCorrect ? 'success' : 'danger'}`,
                  )}
                >
                  <span className="gl-report-metric__value">{managerCorrect ? '✓' : '✕'}</span>
                  <span className="gl-report-metric__label">Leak Identified</span>
                </div>
              )}
            </div>

            <div className={cx('gl-report-feedback', `gl-report-feedback--${leakTone}`)}>
              <strong>Data Leakage: </strong>
              {getLeakFeedback()}
            </div>
            <div className={cx('gl-report-feedback', `gl-report-feedback--${effTone}`)}>
              <strong>Task Effectiveness: </strong>
              {getEffFeedback()}
            </div>

            <button type="button" className="btn-secondary" onClick={reset}>
              Try Again
            </button>
          </div>
        )}

        {segment.debrief ? (
          <AfterLabSection
            eyebrow={segment.debrief.eyebrow}
            title={segment.debrief.title}
            items={segment.debrief.items}
            isComplete={managerSubmitted}
          />
        ) : null}
      </Segment>
    );
  }

  // ── Employee Phase ────────────────────────────────────────────────────
  return (
    <Segment className="content-section gl-segment" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>

      <div className="gl-task-banner">
        <div className="gl-task-banner__label">Your Task</div>
        <div className="gl-task-banner__text">{TASK_DESCRIPTION}</div>
      </div>

      <div className="gl-steps">
        {STEP_LABELS.map((label, i) => {
          const num = i + 1;
          const state = num < step ? 'done' : num === step ? 'active' : 'pending';
          return (
            <div key={num} className={cx('gl-step', `gl-step--${state}`)}>
              <span className="gl-step__dot">{state === 'done' ? '✓' : num}</span>
              <span className="gl-step__label">{label}</span>
            </div>
          );
        })}
      </div>

      <div className="gl-scores">
        {scoreBars.map((b) => (
          <div key={b.label} className="gl-scores__item">
            <div className="gl-scores__label">{b.label}</div>
            <div className="gl-scores__bar-track">
              <div
                className={cx('gl-scores__bar-fill', `gl-scores__bar-fill--${b.tone}`)}
                style={{ width: `${b.value}%` }}
              />
            </div>
            <div className={cx('gl-scores__value', `gl-scores__value--${b.tone}`)}>{b.value}%</div>
          </div>
        ))}
      </div>

      <div className="gl-layout">
        {/* Left: Workplace Desk */}
        <div className="gl-desk">
          <div className="gl-desk__title">
            {step === 1 ? 'Available Documents: Choose What to Upload' : 'Uploaded Documents'}
          </div>
          <div className="gl-doc-list">
            {DOCS.map((doc) => {
              const isSelected = selectedDocs.has(doc.id);
              const locked = step > 1;
              return (
                <button
                  key={doc.id}
                  type="button"
                  disabled={locked}
                  className={cx(
                    'gl-doc',
                    DOC_RISK_CLS[doc.risk],
                    isSelected && 'gl-doc--selected',
                    locked && !isSelected && 'gl-doc--excluded',
                  )}
                  onClick={() => toggleDoc(doc.id)}
                >
                  <span className="gl-doc__icon">{doc.icon}</span>
                  <span className="gl-doc__body">
                    <span className="gl-doc__name">{doc.name}</span>
                    <span className="gl-doc__desc">{doc.desc}</span>
                  </span>
                  <span className={`gl-doc__tag gl-doc__tag--${doc.risk}`}>{doc.tag}</span>
                  {!locked && (
                    <span className={cx('gl-doc__check', isSelected && 'gl-doc__check--on')} />
                  )}
                  {locked && isSelected && (
                    <span className="gl-doc__uploaded-badge">Uploaded</span>
                  )}
                </button>
              );
            })}
          </div>

          {step === 3 && (
            <div className="gl-legend">
              <div className="gl-legend__title">Highlighted Text</div>
              <div className="gl-legend__item">
                <span className="gl-legend__swatch gl-legend__swatch--pii" />
                PII: Personal data remnant
              </div>
              <div className="gl-legend__item">
                <span className="gl-legend__swatch gl-legend__swatch--trade-secret" />
                Trade secret: Unpublished financials
              </div>
              <div className="gl-legend__item">
                <span className="gl-legend__swatch gl-legend__swatch--internal" />
                Internal: Unpublished strategic target
              </div>
            </div>
          )}
        </div>

        {/* Right: Chatbot Interface */}
        <div className="gl-chat">
          <div className="gl-chat__bar">
            <span className="gl-chat__bar-dot" />
            <span className="gl-chat__bar-label">LLM Interface</span>
          </div>

          <div className="gl-chat__messages">
            {step === 1 && (
              <p className="gl-chat__placeholder">
                Select documents from the desk to upload. The LLM will use everything you choose as
                context. Choose carefully.
              </p>
            )}

            {step >= 2 && (
              <div className="gl-chat__msg gl-chat__msg--system">
                <span className="gl-chat__msg-label">Context Loaded</span>
                <span className="gl-chat__msg-text">
                  {selectedDocNames.length > 0
                    ? `${selectedDocNames.length} document${selectedDocNames.length !== 1 ? 's' : ''} uploaded: ${selectedDocNames.join(', ')}.`
                    : 'No documents uploaded.'}
                </span>
              </div>
            )}

            {step === 2 && (
              <>
                <div className="gl-chat__msg gl-chat__msg--user">
                  <span className="gl-chat__msg-label">You</span>
                  <span className="gl-chat__msg-text">Select how to phrase your prompt:</span>
                </div>
                <div className="gl-prompt-options">
                  {PROMPT_STYLES.map((ps) => (
                    <button
                      key={ps.id}
                      type="button"
                      className={cx(
                        'gl-prompt-opt',
                        PROMPT_TONE_CLS[ps.tone],
                        promptStyle === ps.id && 'gl-prompt-opt--selected',
                      )}
                      onClick={() => setPromptStyle(ps.id)}
                    >
                      <span className="gl-prompt-opt__label">{ps.label}</span>
                      <span className="gl-prompt-opt__sub">{ps.sublabel}</span>
                      <span className="gl-prompt-opt__preview">{ps.preview}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step >= 3 && (
              <>
                <div className="gl-chat__msg gl-chat__msg--user">
                  <span className="gl-chat__msg-label">Your Prompt</span>
                  <span className="gl-chat__msg-text">
                    {PROMPT_STYLES.find((p) => p.id === promptStyle)?.preview}
                  </span>
                </div>
                <div className="gl-chat__msg gl-chat__msg--assistant">
                  <span className="gl-chat__msg-label">AI Response</span>
                  <span className="gl-chat__msg-text gl-output-text">
                    {outputSpans.map((span) =>
                      span.safe ? (
                        <span key={span.id}>{span.text}</span>
                      ) : (
                        <span
                          key={span.id}
                          className={cx('gl-remnant', `gl-remnant--${span.type}`)}
                          title={span.label}
                        >
                          {span.text}
                        </span>
                      ),
                    )}
                  </span>
                </div>
              </>
            )}
          </div>

          {step === 1 && (
            <div className="gl-chat__actions">
              <span className="gl-chat__hint">
                {selectedDocs.size === 0
                  ? 'Select at least one document to continue.'
                  : `${selectedDocs.size} document${selectedDocs.size !== 1 ? 's' : ''} selected.`}
              </span>
              <button
                type="button"
                className="btn-primary"
                disabled={selectedDocs.size === 0}
                onClick={() => setStep(2)}
              >
                Upload & Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="gl-chat__actions">
              <span className="gl-chat__hint">
                {promptStyle
                  ? 'Prompt selected. Ready to generate.'
                  : 'Select a prompt style above.'}
              </span>
              <button
                type="button"
                className="btn-primary"
                disabled={!promptStyle}
                onClick={() => setStep(3)}
              >
                Generate Response
              </button>
            </div>
          )}

          {step === 3 && !outputAction && (
            <div className="gl-chat__actions gl-chat__actions--review">
              {hasLeakableOutput && (
                <div className="gl-output-alert">
                  Highlighted text in the response may contain sensitive internal data.
                </div>
              )}
              <div className="gl-review-btns">
                <button
                  type="button"
                  className={cx('btn-secondary', hasLeakableOutput && 'gl-btn--risky')}
                  onClick={() => {
                    setOutputAction('publish');
                    setPhase('manager');
                  }}
                >
                  Publish Directly
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    setOutputAction('edit');
                    setPhase('manager');
                  }}
                >
                  Review &amp; Edit First
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {segment.debrief ? (
        <AfterLabSection
          eyebrow={segment.debrief.eyebrow}
          title={segment.debrief.title}
          items={segment.debrief.items}
          isComplete={false}
        />
      ) : null}
    </Segment>
  );
}
