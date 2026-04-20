import { useState } from 'react';
import { cx } from '../../lib/cx.js';
import { Segment } from '../dev/Segment.jsx';

export function SourceVerification({ segment, segmentId }) {
  const [choices, setChoices] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = segment.claims.every((c) => choices[c.id]);

  function choose(claimId, optionId) {
    if (submitted) return;
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

      <div className="source-verification">
        {segment.claims.map((claim, index) => {
          const chosen = choices[claim.id];
          const chosenOption = claim.options.find((o) => o.id === chosen);
          const isBest = chosen === claim.bestOptionId;

          return (
            <div key={claim.id} className="sv-claim">
              <p className="sv-claim__label">Claim {index + 1}</p>
              <p className="sv-claim__text">{claim.text}</p>

              <div className="sv-claim__options">
                {claim.options.map((option) => {
                  const isChosen = chosen === option.id;
                  const isBestOption = option.id === claim.bestOptionId;

                  return (
                    <button
                      key={option.id}
                      className={cx(
                        'sv-option',
                        isChosen && 'sv-option--chosen',
                        submitted && isChosen && isBest && 'sv-option--best',
                        submitted && isChosen && !isBest && 'sv-option--suboptimal',
                        submitted && !isChosen && isBestOption && 'sv-option--reveal-best',
                      )}
                      disabled={submitted}
                      onClick={() => choose(claim.id, option.id)}
                      type="button"
                    >
                      <span className="sv-option__icon" aria-hidden="true">
                        {option.icon}
                      </span>
                      <span className="sv-option__label">{option.label}</span>
                    </button>
                  );
                })}
              </div>

              {submitted && chosenOption && (
                <div className={`sv-outcome sv-outcome--${chosenOption.outcome.tone}`}>
                  <span className={`sv-outcome__label sv-outcome__label--${chosenOption.outcome.tone}`}>
                    {chosenOption.outcome.label}
                  </span>
                  <p className="sv-outcome__message">{chosenOption.outcome.message}</p>
                  {!isBest && (
                    <p className="sv-outcome__hint">
                      <strong>Better approach: </strong>
                      {claim.explanation}
                    </p>
                  )}
                </div>
              )}

              {submitted && isBest && (
                <p className="sv-claim__explanation">{claim.explanation}</p>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <div className="sv-footer">
          <p className="sv-footer__hint">
            {allAnswered
              ? 'All claims addressed. Submit to see the outcomes.'
              : 'Select a verification approach for each claim above.'}
          </p>
          <button
            className="btn-primary"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            type="button"
          >
            See Outcomes
          </button>
        </div>
      ) : (
        <div className="sv-footer sv-footer--reset">
          <button
            className="btn-secondary"
            onClick={() => {
              setChoices({});
              setSubmitted(false);
            }}
            type="button"
          >
            Try Again
          </button>
        </div>
      )}
    </Segment>
  );
}
