import { useState } from 'react';
import { ASSESSMENT_ITEMS } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

function getInitialOrder(item, selectedAnswer) {
  if (!selectedAnswer) {
    return [...item.steps.map((s) => s.id)];
  }

  const selectedIds = selectedAnswer.split(',').filter(Boolean);
  const missingIds = item.steps.map((s) => s.id).filter((id) => !selectedIds.includes(id));
  return [...selectedIds, ...missingIds];
}

function getInitialRemoved(item, selectedAnswer) {
  if (!selectedAnswer) {
    return new Set();
  }

  const selectedIds = new Set(selectedAnswer.split(',').filter(Boolean));
  return new Set(item.steps.map((s) => s.id).filter((id) => !selectedIds.has(id)));
}

export function OrderingTask({ itemId, revealFeedback = true, locked = false }) {
  const item = ASSESSMENT_ITEMS[itemId];
  const selectedAnswer = useAssessmentStore((state) => state.answers[itemId]);
  const answerItem = useAssessmentStore((state) => state.answerItem);

  const [order, setOrder] = useState(() => getInitialOrder(item, selectedAnswer));
  const [removed, setRemoved] = useState(() => getInitialRemoved(item, selectedAnswer));
  const [dragIdx, setDragIdx] = useState(null);

  const submitted = locked && Boolean(selectedAnswer);
  const isCorrect = selectedAnswer === item.correctOptionId;
  const activeOrder = order.filter((id) => !removed.has(id));

  function toggleRemove(stepId) {
    if (locked) return;
    setRemoved((prev) => {
      const next = new Set(prev);
      if (next.has(stepId)) next.delete(stepId);
      else next.add(stepId);
      return next;
    });
  }

  function moveItem(fromIdx, toIdx) {
    if (fromIdx === toIdx) return;
    setOrder((prev) => {
      const next = [...prev];
      const [moved] = next.splice(fromIdx, 1);
      next.splice(toIdx, 0, moved);
      return next;
    });
  }

  function handleDragStart(e, idx) {
    setDragIdx(idx);
    e.dataTransfer.effectAllowed = 'move';
  }

  function handleDragOver(e, idx) {
    e.preventDefault();
    if (dragIdx === null || dragIdx === idx) return;
    moveItem(dragIdx, idx);
    setDragIdx(idx);
  }

  function handleDragEnd() {
    setDragIdx(null);
  }

  function handleMoveUp(idx) {
    if (idx === 0) return;
    moveItem(idx, idx - 1);
  }

  function handleMoveDown(idx) {
    if (idx === order.length - 1) return;
    moveItem(idx, idx + 1);
  }

  function handleSubmit() {
    const answerString = activeOrder.join(',');
    answerItem(item.id, answerString);
  }

  if (submitted) {
    const submittedOrder = selectedAnswer.split(',');
    const correctOrder = item.correctOptionId.split(',');

    if (!revealFeedback) {
      return (
        <Segment className="ordering-task question-card" segmentId={itemId}>
          <div className="question-card__meta">
            <span>{item.meta}</span>
            <span className={cx('question-card__badge', `question-card__badge--${item.badgeTone}`)}>{item.badge}</span>
          </div>
          <p className="ordering-task__prompt">{item.prompt}</p>

          <div className="ordering-result ordering-result--saved">
            <p className="ordering-result__verdict">Response recorded</p>
            <ol className="ordering-result__list">
              {submittedOrder.map((id, i) => {
                const step = item.steps.find((s) => s.id === id);
                return (
                  <li key={id} className="ordering-result__item">
                    <span className="ordering-result__num">{i + 1}</span>
                    <span>{step?.label}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </Segment>
      );
    }

    return (
      <Segment className="ordering-task question-card" segmentId={itemId}>
        <div className="question-card__meta">
          <span>{item.meta}</span>
          <span className={cx('question-card__badge', `question-card__badge--${item.badgeTone}`)}>{item.badge}</span>
        </div>
        <p className="ordering-task__prompt">{item.prompt}</p>

        <div className={cx('ordering-result', isCorrect ? 'ordering-result--correct' : 'ordering-result--incorrect')}>
          <p className="ordering-result__verdict">{isCorrect ? '✓ Correct order' : '✕ Not quite — see the correct order below'}</p>
          <ol className="ordering-result__list">
            {submittedOrder.map((id, i) => {
              const step = item.steps.find((s) => s.id === id);
              const positionCorrect = correctOrder[i] === id;
              return (
                <li
                  key={id}
                  className={cx(
                    'ordering-result__item',
                    !isCorrect && (positionCorrect ? 'ordering-result__item--right' : 'ordering-result__item--wrong'),
                  )}
                >
                  <span className="ordering-result__num">{i + 1}</span>
                  <span>{step?.label}</span>
                </li>
              );
            })}
          </ol>
        </div>

        {!isCorrect && (
          <div className="ordering-correct-answer">
            <p className="ordering-correct-answer__label">Correct order:</p>
            <ol className="ordering-result__list">
              {correctOrder.map((id, i) => {
                const step = item.steps.find((s) => s.id === id);
                return (
                  <li key={id} className="ordering-result__item ordering-result__item--model">
                    <span className="ordering-result__num">{i + 1}</span>
                    <span>{step?.label}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        )}

        <div className={cx('feedback-box', isCorrect ? 'feedback-box--correct' : 'feedback-box--incorrect')}>
          {isCorrect ? item.feedback.correct : item.feedback.incorrect}
        </div>
      </Segment>
    );
  }

  return (
    <Segment className="ordering-task question-card" segmentId={itemId}>
      <div className="question-card__meta">
        <span>{item.meta}</span>
        <span className={cx('question-card__badge', `question-card__badge--${item.badgeTone}`)}>{item.badge}</span>
      </div>
      <p className="ordering-task__prompt">{item.prompt}</p>
      <p className="ordering-task__hint">
        Drag items or use ↑ ↓ buttons to reorder · Click <strong>✕ Remove</strong> on any step that does not belong
      </p>

      <div className="ordering-list" role="list" aria-label="Workflow steps">
        {order.map((stepId, idx) => {
          const step = item.steps.find((s) => s.id === stepId);
          const isRemoved = removed.has(stepId);
          const positionInActive = activeOrder.indexOf(stepId) + 1;

          return (
            <div
              key={stepId}
              className={cx(
                'ordering-item',
                isRemoved && 'ordering-item--removed',
                dragIdx === idx && 'ordering-item--dragging',
              )}
              draggable={!locked && !isRemoved}
              onDragStart={(e) => !locked && handleDragStart(e, idx)}
              onDragOver={(e) => !locked && handleDragOver(e, idx)}
              onDragEnd={handleDragEnd}
              role="listitem"
            >
              <span className="ordering-item__handle" aria-hidden="true">⠿</span>
              <span className="ordering-item__num" aria-hidden="true">
                {isRemoved ? '—' : positionInActive}
              </span>
              <span className="ordering-item__label">{step?.label}</span>
              <div className="ordering-item__controls">
                {!isRemoved && (
                  <>
                    <button
                      className="ordering-item__arrow"
                      disabled={locked || idx === 0}
                      onClick={() => handleMoveUp(idx)}
                      type="button"
                      aria-label="Move up"
                    >↑</button>
                    <button
                      className="ordering-item__arrow"
                      disabled={locked || idx === order.length - 1}
                      onClick={() => handleMoveDown(idx)}
                      type="button"
                      aria-label="Move down"
                    >↓</button>
                  </>
                )}
                <button
                  className={cx('ordering-item__remove', isRemoved && 'ordering-item__remove--undo')}
                  onClick={() => toggleRemove(stepId)}
                  disabled={locked}
                  type="button"
                >
                  {isRemoved ? '+ Add back' : '✕ Remove'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ordering-task__footer">
        <p className="ordering-task__count">{activeOrder.length} steps in workflow · {removed.size} removed</p>
        {locked ? null : (
          <button
            className="btn-nav"
            disabled={activeOrder.length === 0}
            onClick={handleSubmit}
            type="button"
          >
            {selectedAnswer && !revealFeedback ? 'Update Order' : 'Submit Order'}
          </button>
        )}
      </div>
    </Segment>
  );
}
