import { useState } from 'react';
import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

const LENSES = [
  { id: 'handoff', label: '1. What moved' },
  { id: 'failure', label: '2. What was skipped' },
  { id: 'impact', label: '3. If it continues' },
  { id: 'control', label: '4. What you should require' },
];

function LensPanel({ scenario, lensId }) {
  if (lensId === 'handoff') {
    return (
      <div className="sdw-panel-grid">
        <article className="sdw-panel-card sdw-panel-card--output">
          <p className="sdw-panel-card__label">What Moved Forward</p>
          <h3 className="sdw-panel-card__title">{scenario.handoffTitle}</h3>
          <p className="sdw-panel-card__body">{scenario.handoffBody}</p>
        </article>
        <article className="sdw-panel-card">
          <p className="sdw-panel-card__label">Why It Feels Routine</p>
          <ul className="sdw-panel-list">
            {scenario.handoffBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    );
  }

  if (lensId === 'failure') {
    return (
      <div className="sdw-panel-grid">
        <article className="sdw-panel-card sdw-panel-card--output">
          <p className="sdw-panel-card__label">Review Failure</p>
          <h3 className="sdw-panel-card__title">{scenario.failureTitle}</h3>
          <p className="sdw-panel-card__body">{scenario.failureBody}</p>
        </article>
        <article className="sdw-panel-card">
          <p className="sdw-panel-card__label">What The Workflow Forgot</p>
          <ul className="sdw-panel-list">
            {scenario.failureBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    );
  }

  if (lensId === 'impact') {
    return (
      <div className="sdw-panel-grid">
        <article className="sdw-panel-card sdw-panel-card--output">
          <p className="sdw-panel-card__label">If It Keeps Moving</p>
          <h3 className="sdw-panel-card__title">{scenario.consequenceTitle}</h3>
          <p className="sdw-panel-card__body">{scenario.consequenceBody}</p>
        </article>
        <article className="sdw-panel-card">
          <p className="sdw-panel-card__label">What This Costs You</p>
          <ul className="sdw-panel-list">
            {scenario.consequenceBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    );
  }

  return (
    <div className="sdw-panel-grid">
      <article className="sdw-panel-card sdw-panel-card--output">
        <p className="sdw-panel-card__label">Your Review Gate</p>
        <h3 className="sdw-panel-card__title">{scenario.controlTitle}</h3>
        <p className="sdw-panel-card__body">{scenario.controlBody}</p>
      </article>
      <article className="sdw-panel-card">
        <p className="sdw-panel-card__label">What The Team Should Hear</p>
        <ul className="sdw-panel-list">
          {scenario.controlBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export function OutputHandlingWalkthrough({ segment, segmentId }) {
  const [activeScenarioId, setActiveScenarioId] = useState(segment.scenarios[0]?.id);
  const [activeLens, setActiveLens] = useState(LENSES[0].id);
  const [decisionSelections, setDecisionSelections] = useState({});

  const activeScenario =
    segment.scenarios.find((scenario) => scenario.id === activeScenarioId) ?? segment.scenarios[0];
  const selectedDecision = decisionSelections[activeScenario.id];
  const selectedDecisionOption = activeScenario.decisionOptions?.find(
    (option) => option.id === selectedDecision,
  );

  return (
    <Segment className="content-section" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>

      <div className="sdw-scenarios" role="tablist" aria-label="Output handling examples">
        {segment.scenarios.map((scenario) => {
          const isActive = scenario.id === activeScenario.id;
          return (
            <button
              key={scenario.id}
              className={cx('sdw-scenario', isActive && 'sdw-scenario--active')}
              onClick={() => {
                setActiveScenarioId(scenario.id);
                setActiveLens(LENSES[0].id);
              }}
              role="tab"
              aria-selected={isActive}
              type="button"
            >
              <span className="sdw-scenario__eyebrow">{scenario.eyebrow}</span>
              <strong className="sdw-scenario__title">{scenario.title}</strong>
              <span className="sdw-scenario__meta">{scenario.meta}</span>
            </button>
          );
        })}
      </div>

      <div className="sdw-case">
        <div className="sdw-case__header">
          <div>
            <p className="sdw-case__label">{activeScenario.role}</p>
            <h3 className="sdw-case__title">{activeScenario.headline}</h3>
          </div>
          <span className="sdw-case__risk sdw-case__risk--output">{activeScenario.riskLabel}</span>
        </div>
        <p className="sdw-case__context">{activeScenario.context}</p>

        <div className="sdw-summary">
          <article className="sdw-summary__item">
            <p className="sdw-summary__label">Your Operating Pressure</p>
            <p className="sdw-summary__body">{activeScenario.managerPressure}</p>
          </article>
          <article className="sdw-summary__item">
            <p className="sdw-summary__label">Your Review Decision</p>
            <p className="sdw-summary__body">{activeScenario.managerDecision}</p>
          </article>
        </div>

        <div className="sdw-decision">
          <div className="sdw-decision__intro">
            <p className="sdw-decision__label">Decision Check</p>
            <p className="sdw-decision__prompt">{activeScenario.decisionPrompt}</p>
          </div>
          <div className="sdw-decision__options">
            {activeScenario.decisionOptions.map((option) => {
              const isSelected = selectedDecision === option.id;
              return (
                <button
                  key={option.id}
                  className={cx('sdw-decision__option', isSelected && 'sdw-decision__option--selected')}
                  onClick={() =>
                    setDecisionSelections((current) => ({
                      ...current,
                      [activeScenario.id]: option.id,
                    }))
                  }
                  type="button"
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          {selectedDecisionOption ? (
            <p
              className={cx(
                'sdw-decision__feedback',
                selectedDecisionOption.correct && 'sdw-decision__feedback--correct',
              )}
            >
              {selectedDecisionOption.feedback}
            </p>
          ) : null}
        </div>

        <div className="sdw-lenses" role="tablist" aria-label="Output handling explanation steps">
          {LENSES.map((lens) => (
            <button
              key={lens.id}
              className={cx('sdw-lens', activeLens === lens.id && 'sdw-lens--active')}
              onClick={() => setActiveLens(lens.id)}
              role="tab"
              aria-selected={activeLens === lens.id}
              type="button"
            >
              {lens.label}
            </button>
          ))}
        </div>

        <div className="sdw-panel">
          <LensPanel scenario={activeScenario} lensId={activeLens} />
        </div>

        <div className="sdw-takeaway">
          <p className="sdw-takeaway__label">Your Takeaway</p>
          <p className="sdw-takeaway__body">{activeScenario.takeaway}</p>
        </div>
      </div>
    </Segment>
  );
}
