import { useState } from 'react';
import { ASSESSMENT_ITEMS } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

const TYPE_META = {
  'pii-identity': { label: 'Personal Identity Data', tone: 'danger' },
  'pii-financial': { label: 'Sensitive Financial Data', tone: 'danger' },
  'confidential-data': { label: 'Confidential Internal Data', tone: 'warn' },
};

export function SanitisePromptTask({ itemId }) {
  const item = ASSESSMENT_ITEMS[itemId];
  const selectedAnswer = useAssessmentStore((state) => state.answers[itemId]);
  const answerItem = useAssessmentStore((state) => state.answerItem);

  const [selected, setSelected] = useState(() => {
    if (selectedAnswer) return new Set(selectedAnswer.split(',').filter(Boolean));
    return new Set();
  });

  const submitted = Boolean(selectedAnswer);
  const riskySpans = item.spans.filter((s) => !s.safe);
  const riskyIds = new Set(riskySpans.map((s) => s.id));

  const correctIds = new Set(item.correctOptionId.split(',').filter(Boolean));
  const isCorrect = submitted && selectedAnswer === item.correctOptionId;

  function toggleSpan(spanId) {
    if (submitted) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(spanId)) next.delete(spanId);
      else next.add(spanId);
      return next;
    });
  }

  function handleSubmit() {
    const sortedIds = [...selected].sort().join(',');
    answerItem(item.id, sortedIds || 'none');
  }

  const submittedIds = submitted ? new Set(selectedAnswer.split(',').filter(Boolean)) : selected;
  const correctCount = [...submittedIds].filter((id) => riskyIds.has(id)).length;
  const falsePositiveCount = [...submittedIds].filter((id) => !riskyIds.has(id)).length;

  return (
    <Segment className="sanitise-task question-card" segmentId={itemId}>
      <div className="question-card__meta">
        <span>{item.meta}</span>
        <span className={cx('question-card__badge', `question-card__badge--${item.badgeTone}`)}>{item.badge}</span>
      </div>
      <p className="sanitise-task__prompt-label">{item.prompt}</p>

      <div className="sanitise-task__prompt-box">
        <div className="sanitise-task__prompt-header">
          <span className="sanitise-task__prompt-icon">✏</span>
          <span className="sanitise-task__prompt-title">Prompt to be sent to AI tool</span>
        </div>
        <p className="sanitise-task__prompt-text">
          {item.spans.map((span) => {
            const isSelected = submittedIds.has(span.id);
            const isRisky = !span.safe;

            let stateClass = null;
            if (submitted) {
              if (isRisky && isSelected) stateClass = 'sanitise-span--correctly-removed';
              else if (isRisky && !isSelected) stateClass = 'sanitise-span--missed';
              else if (!isRisky && isSelected) stateClass = 'sanitise-span--false-positive';
            } else if (isSelected) {
              stateClass = 'sanitise-span--selected';
            }

            return (
              <span
                key={span.id}
                className={cx('sanitise-span', !submitted && !span.safe && 'sanitise-span--clickable', stateClass)}
                onClick={() => !span.safe && toggleSpan(span.id)}
              >
                {span.text}
              </span>
            );
          })}
        </p>
      </div>

      {!submitted ? (
        <div className="sanitise-task__actions">
          <p className="sanitise-task__hint">
            {selected.size === 0
              ? 'Click on any part of the prompt that should be removed before sending.'
              : `${selected.size} part${selected.size !== 1 ? 's' : ''} marked for removal — click again to deselect.`}
          </p>
          <button
            className="btn-primary"
            disabled={selected.size === 0}
            onClick={handleSubmit}
            type="button"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="sanitise-task__results">
          <div className={cx('sanitise-task__score', isCorrect && 'sanitise-task__score--full')}>
            <strong>{correctCount}</strong>
            <span> of {riskySpans.length} risky parts identified</span>
            {falsePositiveCount > 0 && (
              <span className="sanitise-task__score-fp"> · {falsePositiveCount} false positive{falsePositiveCount !== 1 ? 's' : ''}</span>
            )}
          </div>

          <div className="sanitise-findings">
            {riskySpans.map((span) => {
              const caught = submittedIds.has(span.id);
              const meta = TYPE_META[span.type] ?? { label: span.type, tone: 'warn' };
              return (
                <div
                  key={span.id}
                  className={cx('sanitise-finding', caught ? 'sanitise-finding--caught' : 'sanitise-finding--missed')}
                >
                  <div className="sanitise-finding__header">
                    <span className={`sanitise-finding__badge sanitise-finding__badge--${meta.tone}`}>{meta.label}</span>
                    <span className={cx('sanitise-finding__status', caught ? 'sanitise-finding__status--caught' : 'sanitise-finding__status--missed')}>
                      {caught ? '✓ Removed' : '✕ Missed'}
                    </span>
                  </div>
                  <p className="sanitise-finding__quote">"{span.text.trim()}"</p>
                  <p className="sanitise-finding__explanation">{span.explanation}</p>
                </div>
              );
            })}
          </div>

          <div className={cx('feedback-box', isCorrect ? 'feedback-box--correct' : 'feedback-box--incorrect')}>
            {isCorrect ? item.feedback.correct : item.feedback.incorrect}
          </div>
        </div>
      )}
    </Segment>
  );
}
