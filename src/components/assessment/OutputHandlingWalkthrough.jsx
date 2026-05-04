import { Fragment, useState } from 'react';
import { cx } from '../../lib/cx.js';
import { KeyPointList } from '../common/KeyPointList.jsx';
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

      <div className="sdw-case">
        <div className="sdw-case__header">
          <div>
            <p className="sdw-case__label">{activeScenario.role}</p>
            <h3 className="sdw-case__title">{activeScenario.headline}</h3>
          </div>
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
                  {activeScenario.analysis.map((block, index) => (
                    <Fragment key={block.title ?? index}>
                      {index > 0 ? <div className="sdw-panel-divider" /> : null}
                      <section className="sdw-panel-section">
                        {block.title ? (
                          <h3 className={cx('sdw-panel-card__title', index > 0 && 'mt-6')}>
                            {block.title}
                          </h3>
                        ) : null}
                        {Array.isArray(block.body) ? (
                          <KeyPointList items={block.body} />
                        ) : (
                          <p className="sdw-panel-card__body">{block.body}</p>
                        )}
                      </section>
                    </Fragment>
                  ))}
                </div>
              </article>
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
