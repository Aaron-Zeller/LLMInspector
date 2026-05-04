import { ASSESSMENT_ITEMS } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

const LIKERT_OPTIONS = [
  { value: '1', label: 'Strongly disagree' },
  { value: '2', label: 'Disagree' },
  { value: '3', label: 'Neutral' },
  { value: '4', label: 'Agree' },
  { value: '5', label: 'Strongly agree' },
];

export function SelfEfficacyItem({ itemId }) {
  const item = ASSESSMENT_ITEMS[itemId];
  const selectedValue = useAssessmentStore((state) => state.answers[itemId]);
  const answerItem = useAssessmentStore((state) => state.answerItem);

  return (
    <Segment className="self-efficacy-item question-card" segmentId={itemId}>
      <p className="self-efficacy-item__prompt">{item.prompt}</p>
      <div className="self-efficacy-item__scale">
        {LIKERT_OPTIONS.map((option) => (
          <button
            key={option.value}
            className={cx(
              'self-efficacy-option',
              selectedValue === option.value && 'self-efficacy-option--selected',
            )}
            disabled={Boolean(selectedValue)}
            onClick={() => answerItem(item.id, option.value)}
            type="button"
          >
            <span className="self-efficacy-option__value">{option.value}</span>
            <span className="self-efficacy-option__label">{option.label}</span>
          </button>
        ))}
      </div>
      {selectedValue && (
        <p className="self-efficacy-item__saved">Response saved.</p>
      )}
    </Segment>
  );
}
