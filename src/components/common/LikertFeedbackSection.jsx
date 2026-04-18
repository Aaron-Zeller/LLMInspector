import { EXPERIENCE_FEEDBACK_QUESTIONS } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

const LIKERT_OPTIONS = [
  { value: 1, label: 'Strongly disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly agree' },
];

export function LikertFeedbackSection({ segment, segmentId }) {
  const feedbackResponses = useAssessmentStore((state) => state.feedbackResponses);
  const feedbackComment = useAssessmentStore((state) => state.feedbackComment);
  const feedbackState = useAssessmentStore((state) => state.feedbackState);
  const experienceMessage = useAssessmentStore((state) => state.experienceMessage);
  const experienceError = useAssessmentStore((state) => state.experienceError);
  const setFeedbackResponse = useAssessmentStore((state) => state.setFeedbackResponse);
  const setFeedbackComment = useAssessmentStore((state) => state.setFeedbackComment);

  return (
    <Segment className="feedback-section" segmentId={segmentId}>
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">{segment.eyebrow}</div>
      </div>
      <h2 className="section-title">{segment.title}</h2>
      <p className="section-desc">{segment.description}</p>
      <div className="feedback-grid">
        {EXPERIENCE_FEEDBACK_QUESTIONS.map((question, index) => (
          <article className="feedback-question" key={question.id}>
            <p className="feedback-question__prompt">
              {index + 1}. {question.prompt}
            </p>
            <div className="feedback-question__options">
              {LIKERT_OPTIONS.map((option) => {
                const isSelected = feedbackResponses[question.id] === option.value;

                return (
                  <button
                    key={`${question.id}-${option.value}`}
                    className={cx(
                      'feedback-scale-option',
                      isSelected && 'feedback-scale-option--selected',
                    )}
                    disabled={feedbackState === 'submitting' || feedbackState === 'submitted'}
                    onClick={() => setFeedbackResponse(question.id, option.value)}
                    type="button"
                  >
                    <span className="feedback-scale-option__value">{option.value}</span>
                    <span className="feedback-scale-option__label">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
      <label className="feedback-comment">
        <span className="feedback-comment__label">Optional comment</span>
        <textarea
          className="feedback-comment__input"
          disabled={feedbackState === 'submitting' || feedbackState === 'submitted'}
          onChange={(event) => setFeedbackComment(event.target.value)}
          placeholder="Anything else you want to tell us about the experience?"
          rows={4}
          value={feedbackComment}
        />
      </label>
      {experienceError ? <div className="feedback-status feedback-status--error">{experienceError}</div> : null}
      {experienceMessage ? <div className="feedback-status feedback-status--success">{experienceMessage}</div> : null}
    </Segment>
  );
}
