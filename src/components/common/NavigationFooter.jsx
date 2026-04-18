import { Segment } from '../dev/Segment.jsx';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';

export function NavigationFooter({ segment, segmentId }) {
  const goToPage = useAssessmentStore((state) => state.goToPage);
  const resetAssessment = useAssessmentStore((state) => state.resetAssessment);
  const continueFromPreAssessment = useAssessmentStore((state) => state.continueFromPreAssessment);
  const submitPostAssessmentAndFeedback = useAssessmentStore(
    (state) => state.submitPostAssessmentAndFeedback,
  );
  const feedbackResponses = useAssessmentStore((state) => state.feedbackResponses);
  const postAssessmentState = useAssessmentStore((state) => state.postAssessmentState);
  const hasNext = Boolean(segment.nextPageId || segment.nextMode || segment.action);
  const feedbackComplete = Object.values(feedbackResponses).every((value) => Number.isInteger(value));
  const shouldDisableSubmit =
    segment.action === 'submitPostFlow' &&
    (!feedbackComplete || postAssessmentState === 'submitting' || postAssessmentState === 'submitted');

  return (
    <Segment as="footer" className="footer-nav" segmentId={segmentId}>
      <button
        className="btn-secondary"
        onClick={() => goToPage(segment.previousPageId)}
        type="button"
      >
        ← Back
      </button>
      <p className="footer-nav__caption">{segment.caption}</p>
      {hasNext ? (
        <button
          className="btn-nav"
          onClick={() => {
            if (segment.action === 'submitPreAssessment') {
              void continueFromPreAssessment(segment.nextPageId);
              return;
            }

            if (segment.action === 'submitPostFlow') {
              void submitPostAssessmentAndFeedback();
              return;
            }

            if (segment.action === 'resetAssessment') {
              resetAssessment();
              return;
            }

            if (segment.nextPageId) {
              goToPage(segment.nextPageId);
            }
          }}
          disabled={shouldDisableSubmit}
          type="button"
        >
          {segment.nextLabel ?? 'Continue →'}
        </button>
      ) : (
        <div />
      )}
    </Segment>
  );
}
