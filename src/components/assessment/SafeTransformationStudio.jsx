import { useState } from 'react';
import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

export function SafeTransformationStudio({ segment, segmentId }) {
  const [activeScenarioId, setActiveScenarioId] = useState(segment.scenarios[0]?.id);

  const activeScenario =
    segment.scenarios.find((scenario) => scenario.id === activeScenarioId) ?? segment.scenarios[0];

  return (
    <Segment className="content-section" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>

      <div className="sdw-scenarios" role="tablist" aria-label="Safe transformation examples">
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
          <span className="sdw-case__risk sdw-case__risk--input">
            {activeScenario.riskLabel}
          </span>
        </div>
        <p className="sdw-case__context">{activeScenario.context}</p>

        <div className="sdw-summary">
          <article className="sdw-summary__item">
            <p className="sdw-summary__label">Keep</p>
            <p className="sdw-summary__body">{activeScenario.managerGoal}</p>
          </article>
          <article className="sdw-summary__item">
            <p className="sdw-summary__label">Change</p>
            <p className="sdw-summary__body">{activeScenario.designMove}</p>
          </article>
        </div>

        <div className="sdw-panel">
          <article className="sts-sheet">
            <div className="sts-sheet__row">
              <div className="sts-sheet__label">Avoid</div>
              <div className="sts-sheet__content">
                <h3 className="sdw-panel-card__title">{activeScenario.unsafeTitle}</h3>
                <p className="sdw-panel-card__body">{activeScenario.unsafeBody}</p>
                <p className="sdw-panel-card__note">{activeScenario.unsafeWhy}</p>
              </div>
            </div>

            <div className="sts-sheet__row sts-sheet__row--input">
              <div className="sts-sheet__label">Use Instead</div>
              <div className="sts-sheet__content">
                <h3 className="sdw-panel-card__title">{activeScenario.transformedTitle}</h3>
                <p className="sdw-panel-card__body">{activeScenario.transformedBody}</p>
              </div>
            </div>

            <div className="sts-sheet__row">
              <div className="sts-sheet__label">Example Prompt</div>
              <div className="sts-sheet__content">
                <div className="sts-prompt">
                  <p className="sts-prompt__label">Prompt</p>
                  <p className="sts-prompt__body">{activeScenario.transformedPrompt}</p>
                </div>
              </div>
            </div>

            <div className="sts-sheet__row">
              <div className="sts-sheet__label">How To Operationalize</div>
              <div className="sts-sheet__content sts-sheet__content--stacked">
                <div className="sts-sheet__block">
                  <p className="sdw-panel-card__label">Process Check</p>
                  <h3 className="sdw-panel-card__title">{activeScenario.processTitle}</h3>
                  <p className="sdw-panel-card__body">{activeScenario.processBody}</p>
                  <ul className="sdw-panel-list">
                    {activeScenario.processChecks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="sts-sheet__block">
                  <p className="sdw-panel-card__label">Your Team Rule</p>
                  <h3 className="sdw-panel-card__title">{activeScenario.ruleTitle}</h3>
                  <p className="sdw-panel-card__body">{activeScenario.ruleBody}</p>
                  <ul className="sdw-panel-list">
                    {activeScenario.ruleBullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="sdw-takeaway">
          <p className="sdw-takeaway__label">Your Takeaway</p>
          <p className="sdw-takeaway__body">{activeScenario.takeaway}</p>
        </div>
      </div>
    </Segment>
  );
}
