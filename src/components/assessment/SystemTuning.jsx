import { useEffect, useRef, useMemo, useState } from 'react';
import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

const SLIDER_MARKS = {
  automationLevel: ['Manual', 'Assisted', 'Autonomous'],
  accessLevel: ['Restricted', 'Read-only', 'Full Access'],
};

const SLIDER_SUBLABELS = {
  automationLevel: [
    'Human decides everything',
    'AI suggests, human approves',
    'AI decides and acts',
  ],
  accessLevel: [
    'No external connections',
    'Read-only data access',
    'Write access to live systems',
  ],
};

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function computeMetrics({ automationLevel, accessLevel }) {
  const efficiency = clamp(30 + automationLevel * 28 + accessLevel * 12, 10, 100);
  const risk = clamp(8 + automationLevel * 12 + accessLevel * 22, 0, 100);
  const oversight = clamp(95 - automationLevel * 25 - accessLevel * 15, 5, 100);
  const failureProbability = clamp(Math.round(risk * 0.55 + (100 - oversight) * 0.45), 0, 100);
  return { efficiency, risk, oversight, failureProbability };
}

function generateEvents({ automationLevel, accessLevel }, metrics) {
  const tasksCompleted = 20 + automationLevel * 35 + accessLevel * 10;
  const events = [];

  events.push({
    id: 'routine',
    type: 'success',
    time: '09:12',
    message: `${tasksCompleted} routine tasks processed automatically`,
    reversible: true,
    detail: null,
  });

  if (automationLevel >= 2) {
    events.push({
      id: 'auto-comms',
      type: 'warn',
      time: '10:04',
      message: 'Customer notification sent without human review',
      reversible: false,
      detail: {
        cause: 'Automation set to Autonomous — outbound messages skip the review queue.',
        missing:
          'All external communications should require a review gate, even low-priority ones.',
      },
    });
  } else if (automationLevel >= 1) {
    events.push({
      id: 'assisted-queue',
      type: 'success',
      time: '10:04',
      message: 'Low-risk items queued — awaiting operator confirmation',
      reversible: true,
      detail: null,
    });
  }

  if (accessLevel >= 1) {
    events.push({
      id: 'ext-read',
      type: 'success',
      time: '10:38',
      message: 'External CRM data retrieved — read-only enrichment',
      reversible: true,
      detail: null,
    });
  }

  if (accessLevel >= 2) {
    events.push({
      id: 'ext-write',
      type: 'warn',
      time: '11:02',
      message: 'AI updated client contact record in external system',
      reversible: false,
      detail: {
        cause: 'Full Access enabled — AI can write to external systems without operator confirmation.',
        missing:
          'External writes should require explicit approval; they affect downstream processes and cannot always be rolled back.',
      },
    });
  }

  if (automationLevel >= 2 && accessLevel >= 1) {
    events.push({
      id: 'medium-risk',
      type: 'warn',
      time: '12:15',
      message: 'Medium-risk action executed: financial summary dispatched externally',
      reversible: false,
      detail: {
        cause: 'Autonomous mode with external access — no checkpoint before execution.',
        missing:
          'Medium-risk actions require explicit operator approval under standard control frameworks.',
      },
    });
  }

  if (metrics.failureProbability >= 45) {
    events.push({
      id: 'critical-1',
      type: 'danger',
      time: '14:22',
      message: 'Incorrect payment approved autonomously — €2,400',
      reversible: false,
      detail: {
        cause: 'Autonomous mode with no human in the financial approval loop.',
        missing:
          'Financial approvals above a value threshold require explicit human sign-off regardless of automation level.',
      },
    });
  }

  if (metrics.failureProbability >= 70) {
    events.push({
      id: 'critical-2',
      type: 'danger',
      time: '15:48',
      message: 'Unreviewed client message with inaccurate figures sent',
      reversible: false,
      detail: {
        cause:
          'Full automation + full access: AI generated and dispatched client communication without any review gate.',
        missing:
          'All client-facing communications must pass through at minimum a lightweight approval gate.',
      },
    });

    events.push({
      id: 'delayed',
      type: 'danger',
      time: '16:33',
      message: 'Compliance issue flagged — traces back to 11:02 write',
      reversible: false,
      delayed: true,
      detail: {
        cause:
          'Contact record updated at 11:02 referenced figures revised at 14:00. The afternoon audit cross-referenced both.',
        missing:
          'Delayed consequences are a known failure mode: the write happens at 11am, the violation surfaces in the 4pm audit.',
      },
    });
  }

  const criticalCount = events.filter((e) => e.type === 'danger' && !e.delayed).length;
  const irreversibleCount = events.filter((e) => e.reversible === false).length;

  return { events, tasksCompleted, criticalCount, irreversibleCount };
}

const METRIC_DEFS = [
  { id: 'efficiency', label: 'Efficiency', icon: '⚡', goodHigh: true },
  { id: 'risk', label: 'Risk Exposure', icon: '⚠️', goodHigh: false },
  { id: 'oversight', label: 'Oversight', icon: '👁', goodHigh: true },
  { id: 'failureProbability', label: 'Failure Probability', icon: '💥', goodHigh: false },
];

function metricTone(defId, value) {
  const goodHigh = METRIC_DEFS.find((d) => d.id === defId)?.goodHigh ?? true;
  if (goodHigh) {
    if (value >= 65) return 'success';
    if (value >= 38) return 'warn';
    return 'danger';
  }
  if (value <= 30) return 'success';
  if (value <= 60) return 'warn';
  return 'danger';
}

const BRANCH_PRESETS = [
  { automationLevel: 2, accessLevel: 2, label: 'High Automation', icon: '🤖' },
  { automationLevel: 2, accessLevel: 0, label: 'Balanced', icon: '⚖️' },
  { automationLevel: 0, accessLevel: 0, label: 'High Oversight', icon: '🛡️' },
];

export function SystemTuning({ segment, segmentId }) {
  const [settings, setSettings] = useState({ automationLevel: 0, accessLevel: 0 });
  const [simulating, setSimulating] = useState(false);
  const [streamedEvents, setStreamedEvents] = useState([]);
  const [streamDone, setStreamDone] = useState(false);
  const [openEventId, setOpenEventId] = useState(null);
  const feedRef = useRef(null);
  const streamRef = useRef(null);

  const metrics = useMemo(
    () => computeMetrics(settings),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [settings.automationLevel, settings.accessLevel],
  );

  const fullSimulation = useMemo(
    () => generateEvents(settings, metrics),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [settings.automationLevel, settings.accessLevel, metrics.failureProbability],
  );

  const effGoal = metrics.efficiency >= 80;
  const riskGoal = metrics.risk <= 35;
  const criticalGoal = streamDone ? fullSimulation.criticalCount === 0 : null;

  function update(controlId, value) {
    stopStream();
    setSettings((prev) => ({ ...prev, [controlId]: value }));
  }

  function stopStream() {
    if (streamRef.current) clearInterval(streamRef.current);
    setSimulating(false);
    setStreamedEvents([]);
    setStreamDone(false);
    setOpenEventId(null);
  }

  function startSimulation() {
    stopStream();
    const events = generateEvents(settings, computeMetrics(settings)).events;
    let i = 0;
    setSimulating(true);
    setStreamDone(false);
    setStreamedEvents([]);
    const delay = 900 - settings.automationLevel * 220;
    streamRef.current = setInterval(() => {
      setStreamedEvents((prev) => [...prev, events[i]]);
      i += 1;
      if (i >= events.length) {
        clearInterval(streamRef.current);
        setSimulating(false);
        setStreamDone(true);
      }
    }, delay);
  }

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [streamedEvents]);

  useEffect(() => {
    return () => {
      if (streamRef.current) clearInterval(streamRef.current);
    };
  }, []);

  const isActive = simulating || streamDone;

  return (
    <Segment className="content-section" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>
      {segment.frame ? (
        <div className="lab-brief">
          <div className="lab-brief__grid">
            <article className="lab-brief__item">
              <p className="lab-brief__label">Your Role</p>
              <p className="lab-brief__body">{segment.frame.role}</p>
            </article>
            <article className="lab-brief__item">
              <p className="lab-brief__label">What To Watch</p>
              <p className="lab-brief__body">{segment.frame.watch}</p>
            </article>
            {segment.frame.emphasis ? (
              <article className="lab-brief__item lab-brief__item--full">
                <p className="lab-brief__label">Why This Lab Matters</p>
                <p className="lab-brief__body">{segment.frame.emphasis}</p>
              </article>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* Goal tracker */}
      <div className="st-goal">
        <span className="st-goal__label">Target</span>
        <div className="st-goal__checks">
          <span className={cx('st-goal__check', effGoal && 'st-goal__check--met')}>
            {effGoal ? '✓' : '○'} ≥80% Efficiency ({metrics.efficiency}%)
          </span>
          <span className={cx('st-goal__check', riskGoal && 'st-goal__check--met')}>
            {riskGoal ? '✓' : '○'} ≤35% Risk ({metrics.risk}%)
          </span>
          <span
            className={cx(
              'st-goal__check',
              streamDone && criticalGoal && 'st-goal__check--met',
              streamDone && !criticalGoal && 'st-goal__check--failed',
            )}
          >
            {streamDone ? (criticalGoal ? '✓' : '✕') : '○'} Zero critical failures
            {streamDone ? ` (${fullSimulation.criticalCount} found)` : ''}
          </span>
        </div>
      </div>

      {/* Sliders + metrics */}
      <div className="st-layout">
        <div className="panel st-panel">
          <p className="st-panel__title">Control Panel</p>
          {(['automationLevel', 'accessLevel']).map((controlId) => (
            <div key={controlId} className="st-slider-control">
              <div className="st-control__header">
                <span className="st-control__label">
                  {controlId === 'automationLevel' ? 'Automation Level' : 'External Access Level'}
                </span>
                <span className="st-control__desc">
                  {controlId === 'automationLevel'
                    ? 'How independently the AI acts'
                    : 'What external systems the AI can reach'}
                </span>
              </div>
              <div className="st-slider">
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="1"
                  value={settings[controlId]}
                  onChange={(e) => update(controlId, Number(e.target.value))}
                  className="st-slider__input"
                  aria-label={controlId === 'automationLevel' ? 'Automation Level' : 'External Access Level'}
                />
                <div className="st-slider__labels">
                  {SLIDER_MARKS[controlId].map((mark, i) => (
                    <span
                      key={i}
                      className={cx(
                        'st-slider__mark',
                        settings[controlId] === i && 'st-slider__mark--active',
                      )}
                    >
                      {mark}
                    </span>
                  ))}
                </div>
                <p className="st-slider__sublabel">
                  {SLIDER_SUBLABELS[controlId][settings[controlId]]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="panel st-metrics">
          <p className="st-panel__title">Live Metrics</p>
          {METRIC_DEFS.map((def) => {
            const value = metrics[def.id];
            const tone = metricTone(def.id, value);
            return (
              <div key={def.id} className="st-metric">
                <div className="st-metric__head">
                  <span className="st-metric__icon" aria-hidden="true">
                    {def.icon}
                  </span>
                  <span className="st-metric__label">{def.label}</span>
                  <span className={`st-metric__value st-metric__value--${tone}`}>{value}%</span>
                </div>
                <div className="st-metric__track">
                  <span
                    className={`st-metric__fill st-metric__fill--${tone}`}
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Simulate button */}
      <div className="st-simulate">
        <button
          className="btn-primary"
          onClick={startSimulation}
          disabled={simulating}
          type="button"
        >
          {simulating ? 'Simulating…' : streamDone ? 'Re-run Simulation' : 'Simulate Day'}
        </button>
        {isActive && (
          <button className="btn-secondary" onClick={stopStream} type="button">
            Reset
          </button>
        )}
      </div>

      {/* Live incident feed */}
      {isActive && (
        <div className="st-simulation">
          <p className="st-feed__title">
            Live System Log
            {simulating && <span className="st-feed__pulse" />}
          </p>
          <div className="st-feed" ref={feedRef}>
            {streamedEvents.filter(event => event).map((event) => (
              <div
                key={event.id}
                className={cx(
                  'st-feed-item',
                  `st-feed-item--${event.type}`,
                  event.delayed && 'st-feed-item--delayed',
                )}
              >
                <span className="st-feed-item__time">{event.time}</span>
                <div className="st-feed-item__body">
                  <span className="st-feed-item__msg">{event.message}</span>
                  {event.reversible === false && (
                    <span className="st-feed-item__irrev">
                      🔴 External action executed — no rollback possible
                    </span>
                  )}
                  {event.reversible === true && event.type !== 'success' && (
                    <span className="st-feed-item__rev">🟡 Still reversible with review</span>
                  )}
                  {event.delayed && (
                    <span className="st-feed-item__delayed-tag">Delayed consequence</span>
                  )}
                  {event.detail && (
                    <button
                      className="st-feed-item__detail-btn"
                      onClick={() =>
                        setOpenEventId((prev) => (prev === event.id ? null : event.id))
                      }
                      type="button"
                    >
                      {openEventId === event.id ? 'Hide ↑' : 'Inspect decision path ↓'}
                    </button>
                  )}
                  {event.detail && openEventId === event.id && (
                    <div className="st-feed-item__detail">
                      <p>
                        <strong>Cause: </strong>
                        {event.detail.cause}
                      </p>
                      <p>
                        <strong>Missing safeguard: </strong>
                        {event.detail.missing}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {simulating && (
              <div className="st-feed-item st-feed-item--loading">
                <span className="st-feed-item__time">—</span>
                <div className="st-feed-item__body">
                  <span className="st-feed-item__msg">Processing…</span>
                </div>
              </div>
            )}
          </div>

          {/* Summary + branching viewer after stream completes */}
          {streamDone && (
            <>
              <div className="st-sim-bar">
                <div className="st-sim-stat st-sim-stat--success">
                  <strong>{fullSimulation.tasksCompleted}</strong>
                  <span>tasks completed</span>
                </div>
                <div
                  className={`st-sim-stat st-sim-stat--${fullSimulation.irreversibleCount > 0 ? 'warn' : 'success'}`}
                >
                  <strong>{fullSimulation.irreversibleCount}</strong>
                  <span>irreversible actions</span>
                </div>
                <div
                  className={`st-sim-stat st-sim-stat--${fullSimulation.criticalCount > 0 ? 'danger' : 'success'}`}
                >
                  <strong>{fullSimulation.criticalCount}</strong>
                  <span>critical failures</span>
                </div>
              </div>

              {effGoal && riskGoal && criticalGoal ? (
                <p className="st-goal-result st-goal-result--success">
                  ✓ All targets met with this configuration.
                </p>
              ) : (
                <p className="st-goal-result st-goal-result--warn">
                  {!effGoal && `Efficiency below target (${metrics.efficiency}% — need ≥80%). `}
                  {!riskGoal && `Risk too high (${metrics.risk}% — target ≤35%). `}
                  {!criticalGoal &&
                    `${fullSimulation.criticalCount} critical failure${fullSimulation.criticalCount !== 1 ? 's' : ''} detected. `}
                  Adjust the controls and simulate again.
                </p>
              )}

              {/* Branching Reality Viewer */}
              <div className="st-branching">
                <p className="st-branching__title">
                  Branching Reality — what if you had configured this differently?
                </p>
                <div className="st-branch-cols">
                  {BRANCH_PRESETS.map((preset) => {
                    const pm = computeMetrics(preset);
                    const ps = generateEvents(preset, pm);
                    const isCurrentSettings =
                      preset.automationLevel === settings.automationLevel &&
                      preset.accessLevel === settings.accessLevel;
                    const tone =
                      ps.criticalCount === 0
                        ? 'success'
                        : ps.criticalCount === 1
                          ? 'warn'
                          : 'danger';
                    const outcomeIcon =
                      ps.criticalCount === 0 ? '✅' : ps.criticalCount === 1 ? '⚠️' : '💥';
                    return (
                      <div
                        key={preset.label}
                        className={cx(
                          'st-branch-col',
                          `st-branch-col--${tone}`,
                          isCurrentSettings && 'st-branch-col--current',
                        )}
                      >
                        <div className="st-branch-col__head">
                          <span className="st-branch-col__icon" aria-hidden="true">
                            {preset.icon}
                          </span>
                          <span className="st-branch-col__label">{preset.label}</span>
                          {isCurrentSettings && (
                            <span className="st-branch-col__you">← your config</span>
                          )}
                        </div>
                        <div className="st-branch-col__settings">
                          <span>
                            Automation: {['Manual', 'Assisted', 'Auto'][preset.automationLevel]}
                          </span>
                          <span>
                            Access: {['Restricted', 'Read-only', 'Full'][preset.accessLevel]}
                          </span>
                        </div>
                        <div className={`st-branch-col__outcome st-branch-col__outcome--${tone}`}>
                          <span className="st-branch-outcome-icon" aria-hidden="true">
                            {outcomeIcon}
                          </span>
                          <strong>
                            {ps.criticalCount === 0
                              ? 'Clean run'
                              : ps.criticalCount === 1
                                ? 'Minor failure'
                                : 'Major failure'}
                          </strong>
                        </div>
                        <div className="st-branch-col__stats">
                          <span>{pm.efficiency}% efficiency</span>
                          <span>{pm.risk}% risk</span>
                          <span>{ps.criticalCount} critical event{ps.criticalCount !== 1 ? 's' : ''}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {streamDone && segment.debrief ? (
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
