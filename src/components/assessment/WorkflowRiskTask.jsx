import { useState } from 'react';
import { ASSESSMENT_ITEMS } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

const TYPE_META = {
  'data-minimisation': { label: 'Data Minimisation Failure', tone: 'warn' },
  'no-oversight': { label: 'No Human Oversight', tone: 'danger' },
  'excessive-agency': { label: 'Excessive AI Agency', tone: 'danger' },
};

export function WorkflowRiskTask({ itemId, revealFeedback = true, locked = false }) {
  const item = ASSESSMENT_ITEMS[itemId];
  const selectedAnswer = useAssessmentStore((state) => state.answers[itemId]);
  const answerItem = useAssessmentStore((state) => state.answerItem);

  const [flagged, setFlagged] = useState(() => {
    if (selectedAnswer) return new Set(selectedAnswer.split(',').filter(Boolean));
    return new Set();
  });

  const submitted = locked && Boolean(selectedAnswer);
  const riskySteps = item.steps.filter((s) => s.risky);
  const riskyIds = new Set(riskySteps.map((s) => s.id));
  const correctIds = new Set(item.correctOptionId.split(',').filter(Boolean));
  const isCorrect = submitted && selectedAnswer === item.correctOptionId;
  const shouldReveal = revealFeedback && submitted;

  function toggleStep(stepId) {
    if (locked) return;
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(stepId)) next.delete(stepId);
      else next.add(stepId);
      return next;
    });
  }

  function handleSubmit() {
    const sortedIds = [...flagged].sort().join(',');
    answerItem(item.id, sortedIds || 'none');
  }

  const submittedIds = submitted ? new Set(selectedAnswer.split(',').filter(Boolean)) : flagged;
  const correctCount = [...submittedIds].filter((id) => riskyIds.has(id)).length;
  const falsePositiveCount = [...submittedIds].filter((id) => !riskyIds.has(id)).length;

  return (
    <Segment className="workflow-risk-task question-card" segmentId={itemId}>
      <div className="question-card__meta">
        <span>{item.meta}</span>
        <span className={cx('question-card__badge', `question-card__badge--${item.badgeTone}`)}>{item.badge}</span>
      </div>
      <p className="workflow-risk-task__prompt">{item.prompt}</p>

      <ol className="workflow-steps" aria-label="Workflow steps">
        {item.steps.map((step, idx) => {
          const isFlagged = submittedIds.has(step.id);
          const isRisky = step.risky;

          let revealClass = null;
          if (shouldReveal) {
            if (isRisky && isFlagged) revealClass = 'workflow-step--correctly-flagged';
            else if (isRisky && !isFlagged) revealClass = 'workflow-step--missed';
            else if (!isRisky && isFlagged) revealClass = 'workflow-step--false-positive';
            else revealClass = 'workflow-step--safe';
          } else if (isFlagged) {
            revealClass = 'workflow-step--flagged';
          }

          return (
            <li key={step.id} className="workflow-step-wrap">
              <button
                className={cx('workflow-step', !locked && 'workflow-step--interactive', revealClass)}
                disabled={locked}
                onClick={() => toggleStep(step.id)}
                type="button"
              >
                <span className="workflow-step__num">{idx + 1}</span>
                <span className="workflow-step__label">{step.label}</span>
                {!submitted && isFlagged && (
                  <span className="workflow-step__flag-badge" aria-hidden="true">⚠ Flagged</span>
                )}
                {shouldReveal && isRisky && isFlagged && (
                  <span className="workflow-step__flag-badge workflow-step__flag-badge--correct" aria-hidden="true">✓ Risk found</span>
                )}
                {shouldReveal && isRisky && !isFlagged && (
                  <span className="workflow-step__flag-badge workflow-step__flag-badge--missed" aria-hidden="true">✕ Missed risk</span>
                )}
                {shouldReveal && !isRisky && isFlagged && (
                  <span className="workflow-step__flag-badge workflow-step__flag-badge--fp" aria-hidden="true">False positive</span>
                )}
              </button>
              {shouldReveal && (isRisky || isFlagged) && (
                <div className={cx('workflow-step__explanation', isRisky ? 'workflow-step__explanation--risk' : 'workflow-step__explanation--safe')}>
                  {isRisky && (
                    <span className={`workflow-step-type-badge workflow-step-type-badge--${(TYPE_META[step.type] ?? {}).tone ?? 'warn'}`}>
                      {(TYPE_META[step.type] ?? { label: step.type }).label}
                    </span>
                  )}
                  <p>{step.explanation}</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {!locked ? (
        <div className="workflow-risk-task__actions">
          <p className="workflow-risk-task__hint">
            {flagged.size === 0
              ? 'Click on any step you think introduces a governance or safety risk.'
              : `${flagged.size} step${flagged.size !== 1 ? 's' : ''} flagged — click again to unflag.`}
          </p>
          <button
            className="btn-primary"
            disabled={flagged.size === 0}
            onClick={handleSubmit}
            type="button"
          >
            {selectedAnswer && !revealFeedback ? 'Update Assessment' : 'Submit Assessment'}
          </button>
        </div>
      ) : shouldReveal ? (
        <div className="workflow-risk-task__results">
          <div className={cx('workflow-risk-task__score', isCorrect && 'workflow-risk-task__score--full')}>
            <strong>{correctCount}</strong>
            <span> of {riskySteps.length} risk points identified</span>
            {falsePositiveCount > 0 && (
              <span className="workflow-risk-task__score-fp"> · {falsePositiveCount} false positive{falsePositiveCount !== 1 ? 's' : ''}</span>
            )}
          </div>
          <div className={cx('feedback-box', isCorrect ? 'feedback-box--correct' : 'feedback-box--incorrect')}>
            {isCorrect ? item.feedback.correct : item.feedback.incorrect}
          </div>
        </div>
      ) : (
        <div className="assessment-saved-note">
          {selectedAnswer ? 'Response locked.' : 'No response submitted.'}
        </div>
      )}
    </Segment>
  );
}
