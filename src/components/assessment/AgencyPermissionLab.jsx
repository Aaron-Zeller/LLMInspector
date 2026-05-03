import { useState } from 'react';
import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

const CAPABILITIES = [
  {
    id: 'messaging',
    eyebrow: 'Capability 1',
    title: 'Customer Messaging',
    context: 'Drafting and sending replies to customer support requests',
    safeLabel: 'Draft Only',
    safeDesc: 'AI drafts replies. A person reviews and sends.',
    autoLabel: 'Send Autonomously',
    autoDesc: 'AI sends replies directly without human review.',
  },
  {
    id: 'transactions',
    eyebrow: 'Capability 2',
    title: 'Transaction Approvals',
    context: 'Processing vendor payments and operational expenses',
    safeLabel: 'Recommend Only',
    safeDesc: 'AI recommends approval. A person makes the final call.',
    autoLabel: 'Approve Autonomously',
    autoDesc: 'AI approves transactions that appear to meet policy.',
  },
  {
    id: 'system',
    eyebrow: 'Capability 3',
    title: 'System Configuration',
    context: 'Updating records and live operational settings',
    safeLabel: 'Stage Only',
    safeDesc: 'AI prepares changes. A person reviews and executes.',
    autoLabel: 'Execute Autonomously',
    autoDesc: 'AI applies configuration changes directly to live systems.',
  },
];

const INCIDENT_DATA = {
  messaging: {
    safeOutcome:
      'All customer replies were reviewed before delivery. No message was sent without a human sign-off.',
    incident:
      'Agent sent a refund commitment to a customer after misclassifying a routine complaint as an exception case. The message was delivered before anyone could review it.',
    recoveryNote:
      'The organisation is now bound by what the model wrote. Correction requires a follow-up message that cannot undo the first impression or the commitment already made.',
  },
  transactions: {
    safeOutcome:
      'All payments were recommended for review. No transaction was approved without a defined role sign-off.',
    incident:
      'Agent approved a £4,200 vendor payment containing an exception clause outside standard policy. The amount was within threshold; the clause was not identified.',
    recoveryNote:
      'The payment cleared before the exception was caught. Reversing a completed payment carries both financial cost and audit exposure.',
  },
  system: {
    safeOutcome:
      'All configuration changes were staged and awaited review. No live modifications occurred without explicit approval.',
    incident:
      'Agent pushed a pricing update directly to the live database, affecting 340 product listings. The error propagated before the staged review could catch it.',
    recoveryNote:
      'At machine speed, the change reached hundreds of records before containment. Rollback may be partial, and downstream effects may already be in motion.',
  },
};

const HARDEST_ID = 'messaging';

function computeRisk(perms) {
  const auto = Object.values(perms).filter((v) => v === 'auto').length;
  return auto * 33;
}

function computeOversight(perms) {
  const safe = Object.values(perms).filter((v) => v === 'safe').length;
  return Math.round((safe / 3) * 100);
}

function scoreTone(value, higherIsBad) {
  if (higherIsBad) return value >= 60 ? 'danger' : value >= 25 ? 'warn' : 'success';
  return value >= 70 ? 'success' : value >= 40 ? 'warn' : 'danger';
}

export function AgencyPermissionLab({ segment, segmentId }) {
  const [phase, setPhase] = useState('configure');
  const [permissions, setPermissions] = useState({ messaging: null, transactions: null, system: null });
  const [selectedRecovery, setSelectedRecovery] = useState(null);
  const [recoverySubmitted, setRecoverySubmitted] = useState(false);

  const allConfigured = Object.values(permissions).every((v) => v !== null);
  const autoCaps = CAPABILITIES.filter((c) => permissions[c.id] === 'auto');
  const hasIncidents = autoCaps.length > 0;
  const multipleIncidents = autoCaps.length > 1;

  const risk = computeRisk(permissions);
  const oversight = computeOversight(permissions);

  const scoreBars = [
    { label: 'Autonomy Risk', value: risk, tone: scoreTone(risk, true) },
    { label: 'Human Oversight', value: oversight, tone: scoreTone(oversight, false) },
  ];

  function reset() {
    setPhase('configure');
    setPermissions({ messaging: null, transactions: null, system: null });
    setSelectedRecovery(null);
    setRecoverySubmitted(false);
  }

  // ── Report Phase ────────────────────────────────────────────────────────
  if (phase === 'report') {
    const riskTone = scoreTone(risk, true);
    const oversightTone = scoreTone(oversight, false);

    return (
      <Segment className="content-section gl-segment" segmentId={segmentId}>
        <div className="gl-manager-banner">
          <div className="gl-manager-banner__eyebrow">Lab Report</div>
          <div className="gl-manager-banner__title">Your permission configuration</div>
          <div className="gl-manager-banner__desc">
            Review how each capability choice shaped the agent's behaviour and the consequences that
            followed.
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

        <div className="gl-report-card">
          <div className="gl-report-card__title">Configuration Assessment</div>

          <div className="gl-report-metrics">
            <div className={cx('gl-report-metric', `gl-report-metric--${riskTone}`)}>
              <span className="gl-report-metric__value">{risk}%</span>
              <span className="gl-report-metric__label">Autonomy Risk</span>
            </div>
            <div className={cx('gl-report-metric', `gl-report-metric--${oversightTone}`)}>
              <span className="gl-report-metric__value">{oversight}%</span>
              <span className="gl-report-metric__label">Human Oversight</span>
            </div>
            <div
              className={cx(
                'gl-report-metric',
                hasIncidents ? 'gl-report-metric--danger' : 'gl-report-metric--success',
              )}
            >
              <span className="gl-report-metric__value">{autoCaps.length}</span>
              <span className="gl-report-metric__label">Incidents</span>
            </div>
          </div>

          {CAPABILITIES.map((cap) => {
            const isAuto = permissions[cap.id] === 'auto';
            const data = INCIDENT_DATA[cap.id];
            const tone = isAuto ? 'danger' : 'success';
            const choiceLabel = isAuto ? cap.autoLabel : cap.safeLabel;
            return (
              <div key={cap.id} className={cx('gl-report-feedback', `gl-report-feedback--${tone}`)}>
                <strong>
                  {cap.title} — {choiceLabel}:{' '}
                </strong>
                {isAuto ? data.recoveryNote : data.safeOutcome}
              </div>
            );
          })}

          <button type="button" className="btn-secondary" onClick={reset}>
            Reset and try again
          </button>
        </div>

        {segment.debrief ? (
          <div className="lab-debrief">
            <p className="lab-debrief__eyebrow">{segment.debrief.eyebrow}</p>
            <h3 className="lab-debrief__title">{segment.debrief.title}</h3>
            <div className="lab-debrief__grid">
              {segment.debrief.items.map((item) => (
                <article className="lab-debrief__item" key={item.title}>
                  <h4 className="lab-debrief__item-title">{item.title}</h4>
                  <p className="lab-debrief__item-body">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </Segment>
    );
  }

  // ── Incidents Phase ─────────────────────────────────────────────────────
  if (phase === 'incidents') {
    const recoveryIsCorrect = selectedRecovery === HARDEST_ID;
    const canAdvance = !multipleIncidents || recoverySubmitted;

    return (
      <Segment className="content-section gl-segment" segmentId={segmentId}>
        <div className="gl-manager-banner">
          <div className="gl-manager-banner__eyebrow">First Run</div>
          <div className="gl-manager-banner__title">What the agent did with your configuration</div>
          <div className="gl-manager-banner__desc">
            {hasIncidents
              ? 'Review the outcome for each capability. Where authority was granted, the agent acted on it.'
              : 'No incidents occurred. Every capability operated within a safe boundary.'}
          </div>
        </div>

        <div className="gl-log">
          {CAPABILITIES.map((cap) => {
            const isAuto = permissions[cap.id] === 'auto';
            const data = INCIDENT_DATA[cap.id];
            return (
              <div
                key={cap.id}
                className={cx(
                  'gl-log-step',
                  isAuto ? 'gl-log-step--side-danger' : 'gl-log-step--side-safe',
                )}
                style={{ cursor: 'default' }}
              >
                <span className="gl-log-step__num">{cap.eyebrow}</span>
                <span className="gl-log-step__label">{cap.title}</span>
                <span className="gl-log-step__desc">
                  {isAuto ? data.incident : data.safeOutcome}
                </span>
                {isAuto && (
                  <span className="gl-log-step__verdict gl-log-step__verdict--danger">Incident</span>
                )}
              </div>
            );
          })}
        </div>

        {multipleIncidents && !recoverySubmitted && (
          <>
            <p className="gl-manager-hint">
              Which of these incidents will be hardest for the organisation to recover from?
            </p>
            <div className="gl-log">
              {autoCaps.map((cap) => {
                const isChosen = selectedRecovery === cap.id;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    className={cx(
                      'gl-log-step',
                      'gl-log-step--side-danger',
                      isChosen && 'gl-log-step--selected',
                    )}
                    onClick={() => setSelectedRecovery(cap.id)}
                  >
                    <span className="gl-log-step__label">{cap.title}</span>
                    <span className="gl-log-step__desc">{INCIDENT_DATA[cap.id].recoveryNote}</span>
                  </button>
                );
              })}
            </div>
            <div className="gl-manager-actions">
              <button
                type="button"
                className="btn-primary"
                disabled={selectedRecovery === null}
                onClick={() => setRecoverySubmitted(true)}
              >
                Submit
              </button>
            </div>
          </>
        )}

        {multipleIncidents && recoverySubmitted && (
          <div
            className={cx(
              'gl-report-feedback',
              recoveryIsCorrect ? 'gl-report-feedback--danger' : 'gl-report-feedback--warn',
            )}
            style={{ marginTop: 20 }}
          >
            {recoveryIsCorrect
              ? "Correct. Customer messaging creates an external commitment that cannot be quietly undone. The organisation is bound by what the model wrote, and a follow-up correction cannot cancel the first impression already received."
              : `The hardest incident to recover from is Customer Messaging. An external commitment was sent before anyone reviewed it. ${INCIDENT_DATA.messaging.recoveryNote}`}
          </div>
        )}

        {canAdvance && (
          <div className="gl-manager-actions">
            <button type="button" className="btn-primary" onClick={() => setPhase('report')}>
              View Report Card
            </button>
          </div>
        )}
      </Segment>
    );
  }

  // ── Configure Phase ──────────────────────────────────────────────────────
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
        <div className="gl-task-banner__text">
          Your team is deploying an AI agent across three workflows. For each capability, decide how
          much authority the agent should have before its first run.
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

      <div className="apl-capabilities">
        {CAPABILITIES.map((cap) => {
          const current = permissions[cap.id];
          return (
            <div key={cap.id} className="apl-capability">
              <p className="apl-capability__eyebrow">{cap.eyebrow}</p>
              <p className="apl-capability__title">{cap.title}</p>
              <p className="apl-capability__context">{cap.context}</p>
              <div className="apl-opts">
                <button
                  type="button"
                  className={cx('apl-opt', 'apl-opt--safe', current === 'safe' && 'apl-opt--safe-on')}
                  onClick={() => setPermissions((p) => ({ ...p, [cap.id]: 'safe' }))}
                >
                  <span className="apl-opt__label">{cap.safeLabel}</span>
                  <span className="apl-opt__desc">{cap.safeDesc}</span>
                </button>
                <button
                  type="button"
                  className={cx('apl-opt', 'apl-opt--auto', current === 'auto' && 'apl-opt--auto-on')}
                  onClick={() => setPermissions((p) => ({ ...p, [cap.id]: 'auto' }))}
                >
                  <span className="apl-opt__label">{cap.autoLabel}</span>
                  <span className="apl-opt__desc">{cap.autoDesc}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="gl-manager-actions">
        <button
          type="button"
          className="btn-primary"
          disabled={!allConfigured}
          onClick={() => setPhase('incidents')}
        >
          Deploy Configuration
        </button>
      </div>
    </Segment>
  );
}
