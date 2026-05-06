import { useEffect, useState } from 'react';
import { cx } from '../../lib/cx.js';
import { AfterLabSection } from '../common/AfterLabSection.jsx';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

export function SourceVerification({ segment, segmentId }) {
  const [choices, setChoices] = useState({});
  const markLabCompleted = useAssessmentStore((state) => state.markLabCompleted);

  const answeredCount = segment.claims.filter((c) => choices[c.id]).length;
  const allAnswered = answeredCount === segment.claims.length;

  useEffect(() => {
    if (allAnswered) {
      markLabCompleted(segmentId);
    }
  }, [allAnswered, markLabCompleted, segmentId]);

  function choose(claimId, optionId) {
    setChoices((prev) => ({ ...prev, [claimId]: optionId }));
  }

  return (
    <Segment className="content-section" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>

      {segment.brief ? (
        <div className="sv-brief">
          <p className="sv-brief__eyebrow">{segment.brief.eyebrow}</p>
          <p className="sv-brief__prompt">{segment.brief.prompt}</p>
          <div className="sv-brief__checks">
            {segment.brief.points.map((point) => (
              <p className="sv-brief__check" key={point}>
                {point}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      <div className="source-verification">
        {segment.claims.map((claim, index) => {
          const chosen = choices[claim.id];
          const chosenOption = claim.options.find((o) => o.id === chosen);
          const isBest = Boolean(chosenOption) && chosen === claim.bestOptionId;
          const outcomeTone = chosenOption?.outcome.tone;

          return (
            <div
              key={claim.id}
              className={cx(
                'sv-claim',
                chosenOption && 'sv-claim--answered',
                outcomeTone && `sv-claim--${outcomeTone}`,
              )}
            >
              <p className="sv-claim__label">Claim {index + 1}</p>
              <p className="sv-claim__text">{claim.text}</p>
              <p className="sv-claim__move-label">{claim.moveLabel ?? 'Choose the strongest move before this claim travels further.'}</p>

              <div className="sv-claim__options">
                {claim.options.map((option) => {
                  const isChosen = chosen === option.id;

                  return (
                    <button
                      key={option.id}
                      className={cx(
                        'sv-option',
                        isChosen && 'sv-option--chosen',
                        isChosen && isBest && 'sv-option--best',
                        isChosen && !isBest && 'sv-option--suboptimal',
                      )}
                      onClick={() => choose(claim.id, option.id)}
                      type="button"
                    >
                      <span className="sv-option__icon" aria-hidden="true">
                        {option.icon}
                      </span>
                      <span className="sv-option__content">
                        <span className="sv-option__label">{option.title ?? option.label}</span>
                        {option.detail ? (
                          <span className="sv-option__detail">{option.detail}</span>
                        ) : null}
                      </span>
                    </button>
                  );
                })}
              </div>

              {chosenOption && (
                <div className={`sv-outcome sv-outcome--${chosenOption.outcome.tone}`}>
                  <span className={`sv-outcome__label sv-outcome__label--${chosenOption.outcome.tone}`}>
                    {chosenOption.outcome.label}
                  </span>
                  <p className="sv-outcome__message">{chosenOption.outcome.message}</p>
                </div>
              )}

              {chosenOption ? (
                <div className="sv-claim__rule">
                  <p className="sv-claim__rule-label">
                    {isBest ? 'Manager Rule' : 'Stronger Move'}
                  </p>
                  <p className="sv-claim__explanation">{claim.explanation}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {!allAnswered ? (
        <div className="sv-footer">
          <p className="sv-footer__hint">
            {answeredCount} of {segment.claims.length} verification decisions completed.
          </p>
          <p className="sv-footer__subhint">
            Work claim by claim. In some cases the strongest move is to remove the claim, not rescue it.
          </p>
        </div>
      ) : (
        <div className="sv-footer sv-footer--reset">
          <p className="sv-footer__hint">Verification review complete. You can rerun the lab to compare different decisions.</p>
          <button
            className="btn-secondary"
            onClick={() => {
              setChoices({});
            }}
            type="button"
          >
            Run Lab Again
          </button>
        </div>
      )}

      {segment.debrief ? (
        <AfterLabSection
          eyebrow={segment.debrief.eyebrow}
          title={segment.debrief.title}
          items={segment.debrief.items}
          isComplete={allAnswered}
        />
      ) : null}
    </Segment>
  );
}
