import { ASSESSMENT_ITEMS } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { getItemFeedback } from '../../lib/assessment.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';
import { AiTranscript } from './AiTranscript.jsx';
import { DataPreview } from './DataPreview.jsx';

function ScenarioBlock({ block }) {
  if (block.type === 'transcript') {
    return <AiTranscript block={block} />;
  }

  if (block.type === 'table') {
    return <DataPreview block={block} />;
  }

  return (
    <div className="scenario-note">
      {block.emphasis ? <strong>{block.emphasis}: </strong> : null}
      <span className="scenario-note__content">{block.content}</span>
    </div>
  );
}

export function ScenarioCard({ itemId }) {
  const item = ASSESSMENT_ITEMS[itemId];
  const selectedOptionId = useAssessmentStore((state) => state.answers[itemId]);
  const answerItem = useAssessmentStore((state) => state.answerItem);

  const feedback = getItemFeedback(itemId, selectedOptionId);
  const isCorrect = selectedOptionId === item.correctOptionId;

  return (
    <Segment className="scenario-card" segmentId={item.id}>
      <header className="scenario-card__header">
        <div className="scenario-card__icon">{item.icon}</div>
        <div>
          <h2 className="scenario-card__title">{item.scenarioTitle}</h2>
          <p className="scenario-card__subtitle">{item.scenarioSubtitle}</p>
        </div>
      </header>
      <div className="scenario-card__body">
        {item.blocks.map((block, index) => (
          <ScenarioBlock block={block} key={`${item.id}-block-${index}`} />
        ))}
        <p className="scenario-card__prompt">{item.decisionLabel}</p>
        <div className="scenario-card__options">
          {item.options.map((option) => {
            const isSelected = selectedOptionId === option.id;

            return (
              <button
                key={option.id}
                className={cx(
                  'decision-option',
                  isSelected && isCorrect && 'decision-option--correct',
                  isSelected && !isCorrect && 'decision-option--incorrect',
                )}
                disabled={Boolean(selectedOptionId)}
                onClick={() => answerItem(item.id, option.id)}
                type="button"
              >
                <strong>{option.title}</strong>
                <span>{option.description}</span>
              </button>
            );
          })}
        </div>
        {feedback ? (
          <div className={cx('feedback-box', isCorrect ? 'feedback-box--correct' : 'feedback-box--incorrect')}>
            {feedback}
          </div>
        ) : null}
      </div>
    </Segment>
  );
}
