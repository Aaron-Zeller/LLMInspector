import { Segment } from '../dev/Segment.jsx';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { useDevStore } from '../../store/useDevStore.js';

export function NavigationFooter({ segment, segmentId }) {
  const goToPage = useAssessmentStore((state) => state.goToPage);
  const resetAssessment = useAssessmentStore((state) => state.resetAssessment);
  const continueFromPreAssessment = useAssessmentStore((state) => state.continueFromPreAssessment);
  const submitPostAssessment = useAssessmentStore((state) => state.submitPostAssessment);
  const submitExperienceFeedbackOnly = useAssessmentStore((state) => state.submitExperienceFeedbackOnly);
  const completedLabs = useAssessmentStore((state) => state.completedLabs);
  const simulateCompletedFlow = useDevStore((state) => state.simulateCompletedFlow);
  const feedbackResponses = useAssessmentStore((state) => state.feedbackResponses);
  const postAssessmentState = useAssessmentStore((state) => state.postAssessmentState);
  const postAssessmentLocked = useAssessmentStore((state) => state.postAssessmentLocked);
  const feedbackState = useAssessmentStore((state) => state.feedbackState);
  const completionGatePassed =
    simulateCompletedFlow ||
    !segment.nextRequiresCompletion?.length ||
    segment.nextRequiresCompletion.every((id) => completedLabs[id]);
  const hasNext = Boolean(segment.nextPageId || segment.nextMode || segment.action) && completionGatePassed;
  const hasLockedNext = Boolean(segment.nextPageId || segment.nextMode || segment.action) && !completionGatePassed;
  const feedbackComplete = Object.values(feedbackResponses).every((value) => Number.isInteger(value));
  const shouldDisableSubmit =
    (segment.action === 'submitPostAssessment' &&
      postAssessmentState === 'submitting') ||
    (segment.action === 'submitFeedback' &&
      (!feedbackComplete || feedbackState === 'submitting' || feedbackState === 'submitted'));
  const footerLabel =
    segment.action === 'submitPostAssessment' && postAssessmentLocked
      ? (segment.submittedLabel ?? segment.nextLabel ?? 'Continue →')
      : (segment.nextLabel ?? 'Continue →');

  return (
    <Segment as="footer" className="footer-nav" segmentId={segmentId}>
      <button
        className="btn-secondary"
        onClick={() => goToPage(segment.previousPageId)}
        type="button"
      >
        ← Back
      </button>
      {segment.caption ? <p className="footer-nav__caption">{segment.caption}</p> : <div />}
      {hasNext ? (
        <button
          className="btn-nav"
          onClick={() => {
            if (segment.action === 'submitPreAssessment') {
              void continueFromPreAssessment(segment.nextPageId);
              return;
            }

            if (segment.action === 'submitPostAssessment') {
              if (postAssessmentLocked) {
                if (segment.nextPageId) {
                  goToPage(segment.nextPageId);
                }
                return;
              }

              void submitPostAssessment();
              return;
            }

            if (segment.action === 'submitFeedback') {
              void submitExperienceFeedbackOnly();
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
          {footerLabel}
        </button>
      ) : hasLockedNext ? (
        <p className="footer-nav__gate">Complete this lab once to unlock the next section.</p>
      ) : (
        <div />
      )}
    </Segment>
  );
}
