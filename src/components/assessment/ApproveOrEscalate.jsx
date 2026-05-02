import { useState } from 'react';
import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

const RISK_BANDS = [
  { max: 25, label: 'Low', tone: 'success' },
  { max: 55, label: 'Moderate', tone: 'warn' },
  { max: 80, label: 'High', tone: 'danger' },
  { max: 100, label: 'Critical', tone: 'danger' },
];

function getRiskBand(level) {
  return RISK_BANDS.find((b) => level <= b.max) ?? RISK_BANDS[3];
}

export function ApproveOrEscalate({ segment, segmentId }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choices, setChoices] = useState({});
  const [riskLevel, setRiskLevel] = useState(0);

  const { scenarios } = segment;
  const allDone = currentIndex >= scenarios.length;
  const current = allDone ? null : scenarios[currentIndex];
  const chosenId = current ? choices[current.id] : null;
  const chosenOption = current && chosenId
    ? current.options.find((o) => o.id === chosenId)
    : null;

  function pickOption(option) {
    if (chosenId) return;
    setChoices((prev) => ({ ...prev, [current.id]: option.id }));
    setRiskLevel((prev) => Math.min(100, prev + option.riskDelta));
  }

  function advance() {
    setCurrentIndex((i) => i + 1);
  }

  function reset() {
    setCurrentIndex(0);
    setChoices({});
    setRiskLevel(0);
  }

  const band = getRiskBand(riskLevel);

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

      {/* Persistent risk meter */}
      <div className="aoe-meter">
        <div className="aoe-meter__head">
          <span className="aoe-meter__label">Cumulative Risk Level</span>
          <span className={`aoe-meter__value aoe-meter__value--${band.tone}`}>
            {riskLevel}% — {band.label}
          </span>
        </div>
        <div className="aoe-meter__track">
          <span
            className={`aoe-meter__fill aoe-meter__fill--${band.tone}`}
            style={{ width: `${riskLevel}%` }}
          />
        </div>
        <div className="aoe-meter__steps">
          {scenarios.map((s, i) => (
            <span
              key={s.id}
              className={cx(
                'aoe-meter__step',
                i < currentIndex && 'aoe-meter__step--done',
                i === currentIndex && !allDone && 'aoe-meter__step--active',
              )}
            />
          ))}
        </div>
      </div>

      {/* Active scenario */}
      {current && (
        <div className="aoe-scenario">
          <div className="aoe-scenario__head">
            <div>
              <p className="aoe-scenario__index">
                Scenario {currentIndex + 1} of {scenarios.length}
              </p>
              <h3 className="aoe-scenario__title">{current.title}</h3>
            </div>
            <span className="aoe-urgency">{current.urgency}</span>
          </div>

          <p className="aoe-scenario__context">{current.context}</p>

          <div className="transcript-card aoe-scenario__transcript">
            <div className="transcript-card__title">{current.aiOutputTitle}</div>
            <div className="transcript-message">
              <div className="transcript-message__avatar transcript-message__avatar--assistant">
                AI
              </div>
              <div className="transcript-message__body">
                <p className="transcript-message__label">AI Output</p>
                <p className="transcript-message__content">{current.aiOutput}</p>
              </div>
            </div>
          </div>

          <div className="aoe-options">
            {current.options.map((option) => {
              const isChosen = chosenId === option.id;
              return (
                <button
                  key={option.id}
                  className={cx(
                    'aoe-option',
                    `aoe-option--${option.id}`,
                    isChosen && 'aoe-option--chosen',
                    chosenId && !isChosen && 'aoe-option--dimmed',
                  )}
                  disabled={Boolean(chosenId)}
                  onClick={() => pickOption(option)}
                  type="button"
                >
                  <span className="aoe-option__icon" aria-hidden="true">
                    {option.icon}
                  </span>
                  <span className="aoe-option__label">{option.label}</span>
                  <span className="aoe-option__sub">{option.sublabel}</span>
                </button>
              );
            })}
          </div>

          {chosenOption && (
            <div
              className={`aoe-consequence aoe-consequence--${chosenOption.consequence.tone}`}
            >
              <div className="aoe-consequence__head">
                <span
                  className={`aoe-verdict aoe-verdict--${chosenOption.consequence.tone}`}
                >
                  {chosenOption.consequence.verdict}
                </span>
                <span className="aoe-consequence__title">
                  {chosenOption.consequence.title}
                </span>
              </div>
              <p className="aoe-consequence__body">{chosenOption.consequence.body}</p>
              <p className="aoe-consequence__lesson">
                <strong>Key insight: </strong>
                {chosenOption.consequence.lesson}
              </p>
              <div className="aoe-consequence__nav">
                {currentIndex < scenarios.length - 1 ? (
                  <button className="btn-nav" onClick={advance} type="button">
                    Next Scenario →
                  </button>
                ) : (
                  <button
                    className="btn-nav"
                    onClick={() => setCurrentIndex(scenarios.length)}
                    type="button"
                  >
                    See Risk Summary →
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Final summary */}
      {allDone && (
        <>
          <div className="aoe-summary">
            <div className={`aoe-summary__score aoe-summary__score--${band.tone}`}>
              <strong className="aoe-summary__num">{riskLevel}%</strong>
              <span className="aoe-summary__label">Final Risk Level — {band.label}</span>
            </div>

            <div className="aoe-summary__rows">
              {scenarios.map((scenario) => {
                const opt = scenario.options.find((o) => o.id === choices[scenario.id]);
                return (
                  <div
                    key={scenario.id}
                    className={`aoe-summary__row aoe-summary__row--${opt?.consequence.tone ?? 'warn'}`}
                  >
                    <span className="aoe-summary__row-title">{scenario.title}</span>
                    <span
                      className={`aoe-summary__row-verdict aoe-summary__row-verdict--${opt?.consequence.tone}`}
                    >
                      {opt?.consequence.verdict}
                    </span>
                    <span className="aoe-summary__row-delta">+{opt?.riskDelta ?? 0}%</span>
                  </div>
                );
              })}
            </div>

            <div className={`aoe-summary__message aoe-summary__message--${band.tone}`}>
              {riskLevel <= 25
                ? 'Strong oversight applied throughout. Every decision kept accountability with a human where it mattered most.'
                : riskLevel <= 55
                  ? 'Some oversight gaps present. Review the scenarios where risk was added — each one represents a real-world failure pattern that escalation would have prevented.'
                  : 'Significant oversight failures accumulated. Each approval without adequate review or escalation represents a decision pattern that compounds over time in live systems.'}
            </div>

            <button className="btn-secondary" onClick={reset} type="button">
              Try Again
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
        </>
      )}
    </Segment>
  );
}
