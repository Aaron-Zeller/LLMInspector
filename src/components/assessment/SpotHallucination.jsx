import { useState } from 'react';
import { cx } from '../../lib/cx.js';
import { AfterLabSection } from '../common/AfterLabSection.jsx';
import { LabBrief } from '../common/LabBrief.jsx';
import { Segment } from '../dev/Segment.jsx';

const TYPE_META = {
  'invented-citation': { label: 'Invented Citation', tone: 'danger' },
  'fabricated-stat': { label: 'Fabricated Statistic', tone: 'warn' },
  'invented-person': { label: 'Invented Person', tone: 'danger' },
  overconfidence: { label: 'Overconfident Language', tone: 'info-blue' },
};

export function SpotHallucination({ segment, segmentId }) {
  const [selected, setSelected] = useState(new Set());
  const [submitted, setSubmitted] = useState(false);

  const hallucinations = segment.spans.filter((s) => !s.safe);
  const hallucinationIds = new Set(hallucinations.map((s) => s.id));

  function toggleSpan(spanId) {
    if (submitted) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(spanId)) next.delete(spanId);
      else next.add(spanId);
      return next;
    });
  }

  const correctCount = [...selected].filter((id) => hallucinationIds.has(id)).length;
  const falsePositiveCount = [...selected].filter((id) => !hallucinationIds.has(id)).length;
  const totalHallucinations = hallucinations.length;

  return (
    <Segment className="content-section" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>
      <LabBrief frame={segment.frame} tone={segment.tone} />

      <div className="transcript-card spot-hallucination">
        <div className="transcript-card__title">{segment.transcriptTitle}</div>
        {segment.context && (
          <div className="transcript-message">
            <div className="transcript-message__avatar transcript-message__avatar--user">You</div>
            <div className="transcript-message__body">
              <p className="transcript-message__label">User</p>
              <p className="transcript-message__content">{segment.context}</p>
            </div>
          </div>
        )}
        <div className="transcript-message">
          <div className="transcript-message__avatar transcript-message__avatar--assistant">AI</div>
          <div className="transcript-message__body">
            <p className="transcript-message__label">{segment.transcriptLabel}</p>
            <p className="transcript-message__content spot-span-host">
              {segment.spans.map((span) => {
                const isSelected = selected.has(span.id);
                const isHallucination = !span.safe;

                let stateClass = null;
                if (submitted) {
                  if (isHallucination && isSelected) {
                    stateClass = cx('spot-span--correct', `spot-span--type-${span.type}`);
                  } else if (isHallucination && !isSelected) {
                    stateClass = 'spot-span--missed';
                  } else if (!isHallucination && isSelected) {
                    stateClass = 'spot-span--false-positive';
                  }
                } else if (isSelected) {
                  stateClass = 'spot-span--selected';
                }

                return (
                  <span
                    key={span.id}
                    className={cx('spot-span', !submitted && 'spot-span--clickable', stateClass)}
                    onClick={() => toggleSpan(span.id)}
                  >
                    {span.text}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      {!submitted ? (
        <div className="spot-hallucination__actions">
          <p className="spot-hallucination__hint">
            {selected.size === 0
              ? 'Click on any phrase you think is unreliable, fabricated, or overconfident.'
              : `${selected.size} phrase${selected.size !== 1 ? 's' : ''} marked — click again to deselect.`}
          </p>
          <button
            className="btn-primary"
            disabled={selected.size === 0}
            onClick={() => setSubmitted(true)}
            type="button"
          >
            Review Your Assessment
          </button>
        </div>
      ) : (
        <div className="spot-hallucination__results">
          <div
            className={cx(
              'spot-hallucination__score',
              correctCount === totalHallucinations && falsePositiveCount === 0 && 'spot-hallucination__score--full',
            )}
          >
            <strong className="spot-hallucination__score-num">{correctCount}</strong>
            <span> of {totalHallucinations} unreliable claims identified</span>
            {falsePositiveCount > 0 && (
              <span className="spot-hallucination__score-fp">
                {' '}· {falsePositiveCount} false positive{falsePositiveCount !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          <div className="spot-hallucination__findings">
            {hallucinations.map((span) => {
              const caught = selected.has(span.id);
              const meta = TYPE_META[span.type] ?? { label: span.type, tone: 'warn' };
              return (
                <div
                  key={span.id}
                  className={cx('spot-finding', caught ? 'spot-finding--caught' : 'spot-finding--missed')}
                >
                  <div className="spot-finding__header">
                    <span className={`spot-finding__badge spot-finding__badge--${meta.tone}`}>
                      {meta.label}
                    </span>
                    <span
                      className={cx(
                        'spot-finding__status',
                        caught ? 'spot-finding__status--caught' : 'spot-finding__status--missed',
                      )}
                    >
                      {caught ? '✓ Identified' : '✕ Missed'}
                    </span>
                  </div>
                  <p className="spot-finding__quote">"{span.text.trim()}"</p>
                  <p className="spot-finding__explanation">{span.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {segment.debrief ? (
        <AfterLabSection
          eyebrow={segment.debrief.eyebrow}
          title={segment.debrief.title}
          items={segment.debrief.items}
          isComplete={submitted}
        />
      ) : null}

      {submitted ? (
        <button
          className="btn-secondary"
          onClick={() => {
            setSelected(new Set());
            setSubmitted(false);
          }}
          type="button"
        >
          Run Lab Again
        </button>
      ) : null}
    </Segment>
  );
}
