import { useState } from 'react';
import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

export function OutputHandlingWalkthrough({ segment, segmentId }) {
  const [activeScenarioId, setActiveScenarioId] = useState(segment.scenarios[0]?.id);
  const [decisionSelections, setDecisionSelections] = useState({});

  const activeScenario =
    segment.scenarios.find((scenario) => scenario.id === activeScenarioId) ?? segment.scenarios[0];
  const selectedDecision = decisionSelections[activeScenario.id];
  const selectedDecisionOption = activeScenario.decisionOptions?.find(
    (option) => option.id === selectedDecision,
  );

  return (
    <Segment className="content-section sdw-root sdw-root--output" segmentId={segmentId}>
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
              onClick={() => setActiveScenarioId(scenario.id)}
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
            <div className="sdw-panel">
              <article className="sdw-panel-card">
                <div className="sdw-panel-full-content">
                  <section className="sdw-panel-section">
                    <h3 className="sdw-panel-card__title">{activeScenario.employeeActionTitle || 'The output handoff'}</h3>
                    <p className="sdw-panel-card__body">{activeScenario.employeeAction}</p>
                    
                    <h3 className="sdw-panel-card__title mt-6">{activeScenario.whyFeelsNormalTitle || 'Why It Gets Approved In The Moment'}</h3>
                    <ul className="sdw-panel-list">
                      {activeScenario.whyFeelsNormal.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <div className="sdw-panel-divider" />

                  <section className="sdw-panel-section">
                    <h3 className="sdw-panel-card__title">{activeScenario.legalQuestionTitle || 'The core failure'}</h3>
                    <p className="sdw-panel-card__body">{activeScenario.legalQuestion}</p>
                    
                    <h3 className="sdw-panel-card__title mt-6">{activeScenario.legalChecksTitle || 'Questions Before You Approve'}</h3>
                    <ul className="sdw-panel-list">
                      {activeScenario.legalChecks.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <div className="sdw-panel-divider" />

                  <section className="sdw-panel-section">
                    <h3 className="sdw-panel-card__title">{activeScenario.consequenceTitle || 'The Business Impact'}</h3>
                    <p className="sdw-panel-card__body">{activeScenario.consequence}</p>
                    
                    <h3 className="sdw-panel-card__title mt-6">{activeScenario.consequenceBulletsTitle || 'What This Costs You'}</h3>
                    <ul className="sdw-panel-list">
                      {activeScenario.consequenceBullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <div className="sdw-panel-divider" />

                  <section className="sdw-panel-section">
                    <h3 className="sdw-panel-card__title">{activeScenario.controlTitle || 'Enforce the gate'}</h3>
                    <p className="sdw-panel-card__body">{activeScenario.control}</p>
                    
                    <h3 className="sdw-panel-card__title mt-6">{activeScenario.controlBulletsTitle || 'What The Team Should Hear'}</h3>
                    <ul className="sdw-panel-list">
                      {activeScenario.controlBullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </article>
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
                Choose the review gate you would require first. Then the full case analysis opens.
              </p>
            </div>
          </div>
        )}
      </div>
    </Segment>
  );
}
