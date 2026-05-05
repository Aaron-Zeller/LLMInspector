import { ASSESSMENT_ITEMS } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { getItemFeedback } from '../../lib/assessment.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

export function QuestionCard({ itemId, revealFeedback = true, locked = false }) {
  const item = ASSESSMENT_ITEMS[itemId];
  const selectedOptionId = useAssessmentStore((state) => state.answers[itemId]);
  const answerItem = useAssessmentStore((state) => state.answerItem);

  const feedback = revealFeedback ? getItemFeedback(itemId, selectedOptionId) : null;
  const isCorrect = selectedOptionId === item.correctOptionId;

  return (
    <Segment className="question-card" segmentId={item.id}>
      <div className="question-card__meta">
        <span>{item.meta}</span>
        <span className={cx('question-card__badge', `question-card__badge--${item.badgeTone}`)}>
          {item.badge}
        </span>
      </div>
      <h2 className="question-card__title">{item.prompt}</h2>
      <div className="question-card__options">
        {item.options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              className={cx(
                'answer-option',
                isSelected && !revealFeedback && 'answer-option--selected',
                revealFeedback && isSelected && isCorrect && 'answer-option--correct',
                revealFeedback && isSelected && !isCorrect && 'answer-option--incorrect',
              )}
              disabled={locked}
              onClick={() => answerItem(item.id, option.id)}
              type="button"
            >
              <span className="answer-option__radio" aria-hidden="true" />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
      {feedback ? (
        <div className={cx('feedback-box', isCorrect ? 'feedback-box--correct' : 'feedback-box--incorrect')}>
          {feedback}
        </div>
      ) : null}
    </Segment>
  );
}
