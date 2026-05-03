import { useState } from 'react';
import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

const LENSES = [
  { id: 'trigger', label: '1. Trigger' },
  { id: 'legal', label: '2. Legal Exposure' },
  { id: 'business', label: '3. Business Consequence' },
  { id: 'control', label: '4. Manager Handbook' },
];

function LensPanel({ scenario, lensId }) {
  if (lensId === 'trigger') {
    return (
      <div className="sdw-panel-grid">
        <article className="sdw-panel-card">
          <h3 className="sdw-panel-card__title">{scenario.employeeActionTitle || 'Team Shortcut'}</h3>
          <p className="sdw-panel-card__body">{scenario.employeeAction}</p>
        </article>
        <article className="sdw-panel-card">
          <h3 className="sdw-panel-card__title">{scenario.whyFeelsNormalTitle || 'The productivity pressure'}</h3>
          <p className="sdw-panel-card__body">{scenario.whyFeelsNormal}</p>
        </article>
      </div>
    );
  }

  if (lensId === 'legal') {
    return (
      <div className="sdw-panel-grid">
        <article className="sdw-panel-card sdw-panel-card--input">
          <h3 className="sdw-panel-card__title">{scenario.legalQuestionTitle}</h3>
          <p className="sdw-panel-card__body">{scenario.legalQuestion}</p>
        </article>
        <article className="sdw-panel-card">
          <h3 className="sdw-panel-card__title">{scenario.legalChecksTitle || 'Questions Before You Approve'}</h3>
          <ul className="sdw-panel-list">
            {scenario.legalChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    );
  }

  if (lensId === 'business') {
    return (
      <div className="sdw-panel-grid">
        <article className="sdw-panel-card sdw-panel-card--input">
          <h3 className="sdw-panel-card__title">{scenario.consequenceTitle}</h3>
          <p className="sdw-panel-card__body">{scenario.consequence}</p>
        </article>
        <article className="sdw-panel-card">
          <h3 className="sdw-panel-card__title">{scenario.consequenceBulletsTitle || 'What This Costs You'}</h3>
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
      <article className="sdw-panel-card sdw-panel-card--input">
        <h3 className="sdw-panel-card__title">{scenario.controlTitle}</h3>
        <p className="sdw-panel-card__body">{scenario.control}</p>
      </article>
      <article className="sdw-panel-card">
        <h3 className="sdw-panel-card__title">{scenario.controlBulletsTitle || 'What The Team Should Hear'}</h3>
        <ul className="sdw-panel-list">
          {scenario.controlBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export function SensitiveDisclosureWalkthrough({ segment, segmentId }) {
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
    <Segment className="content-section sdw-root sdw-root--input" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>

      <div className="sdw-scenarios" role="tablist" aria-label="Sensitive disclosure examples">
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
          <span className="sdw-case__risk sdw-case__risk--input">
            {activeScenario.riskLabel}
          </span>
        </div>
        <p className="sdw-case__context">{activeScenario.context}</p>

        {activeScenario.decisionOptions?.length ? (
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
        ) : null}

        {selectedDecisionOption ? (
          <>
            <div className="sdw-lenses" role="tablist" aria-label="Case explanation steps">
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
          </>
        ) : (
          <div className="sdw-analysis-lock">
            <div className="sdw-analysis-lock__card">
              <p className="sdw-analysis-lock__label">Next Step</p>
              <p className="sdw-analysis-lock__body">
                Choose the boundary you would set first. Then the full case analysis opens.
              </p>
            </div>
          </div>
        )}
      </div>
    </Segment>
  );
}
