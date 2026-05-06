import { Fragment, useState } from 'react';
import { cx } from '../../lib/cx.js';
import { KeyPointList } from '../common/KeyPointList.jsx';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

function buildAnalysis(scenario) {
  return [
    {
      title: 'Summary',
      body: scenario.summary ?? `${scenario.needBody} ${scenario.tradeoffBody}`,
    },
    {
      title: 'Possible Consequences:',
      body: scenario.consequenceBullets,
    },
    {
      title: 'Questions Before You Approve:',
      body: scenario.tradeoffBullets,
    },
    {
      title: 'Guidelines:',
      body: scenario.controlBullets ?? scenario.standardChecks,
    },
    {
      title: 'What The Team Should Hear:',
      body: scenario.ruleBullets,
    },
  ];
}

export function PlatformChoiceWalkthrough({ segment, segmentId }) {
  const [activeScenarioId, setActiveScenarioId] = useState(segment.scenarios[0]?.id);
  const [decisionSelections, setDecisionSelections] = useState({});
  const recordDecisionCheck = useAssessmentStore((state) => state.recordDecisionCheck);

  const activeScenario =
    segment.scenarios.find((scenario) => scenario.id === activeScenarioId) ?? segment.scenarios[0];
  const selectedDecision = decisionSelections[activeScenario.id];
  const selectedDecisionOption = activeScenario.decisionOptions?.find(
    (option) => option.id === selectedDecision,
  );

  return (
    <Segment className="content-section sdw-root sdw-root--platform" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>

      <div className="sdw-scenarios" role="tablist" aria-label="Platform choice examples">
        {segment.scenarios.map((scenario) => {
          const isActive = scenario.id === activeScenario.id;
          return (
            <button
              key={scenario.id}
              className={cx('sdw-scenario', isActive && 'sdw-scenario--active')}
              onClick={() => {
                setActiveScenarioId(scenario.id);
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
        </div>
        <p className="sdw-case__context">{activeScenario.context}</p>

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
                  className={cx(
                    'sdw-decision__option',
                    isSelected && 'sdw-decision__option--selected',
                    isSelected && option.correct && 'sdw-decision__option--correct',
                    isSelected && !option.correct && 'sdw-decision__option--incorrect',
                  )}
                  onClick={() => {
                    setDecisionSelections((current) => ({
                      ...current,
                      [activeScenario.id]: option.id,
                    }));
                    recordDecisionCheck(segmentId, activeScenario.id, option.id, option.correct);
                  }}
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
                !selectedDecisionOption.correct && 'sdw-decision__feedback--incorrect',
              )}
            >
              {selectedDecisionOption.feedback}
            </p>
          ) : null}
          {selectedDecisionOption && !selectedDecisionOption.correct ? (
            <p className="sdw-decision__retry">Not yet. Revisit the case and choose the stronger answer.</p>
          ) : null}
        </div>

        {selectedDecisionOption ? (
          <>
            <div className="sdw-panel">
              <article className="sdw-panel-card">
                <div className="sdw-panel-full-content">
                  {buildAnalysis(activeScenario).map((block, index) => (
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
                Choose the platform stance you would formalise first. Then the full case analysis opens.
              </p>
            </div>
          </div>
        )}
      </div>
    </Segment>
  );
}
