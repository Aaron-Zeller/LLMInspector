import { PAGE_SEQUENCE } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';

export function TopNavigation() {
  const currentPageId = useAssessmentStore((state) => state.currentPageId);
  const resultsSnapshot = useAssessmentStore((state) => state.resultsSnapshot);
  const feedbackState = useAssessmentStore((state) => state.feedbackState);
  const goToPage = useAssessmentStore((state) => state.goToPage);

  const currentIndex = Math.max(
    PAGE_SEQUENCE.findIndex((page) => page.id === currentPageId),
    0,
  );

  const progress = (currentIndex / (PAGE_SEQUENCE.length - 1)) * 100;

  return (
    <header className="app-header">
      <div className="topnav">
        <div className="nav-logo">
          COLORCODE
          <div className="vr" />
          <span className="sub">AI Literacy Assessment</span>
        </div>
        <nav className="nav-steps" aria-label="Assessment steps">
          {PAGE_SEQUENCE.map((page, index) => {
            const isResults = page.id === 'results';
            const isLockedThankYou = page.id === 'thank-you' && feedbackState !== 'submitted';
            const isDisabled = (isResults && !resultsSnapshot) || isLockedThankYou;
            const isActive = page.id === currentPageId;
            const isComplete = index < currentIndex || (isResults && Boolean(resultsSnapshot));

            return (
              <button
                key={page.id}
                className={cx(
                  'nav-step',
                  isActive && 'active',
                  isComplete && 'completed',
                )}
                disabled={isDisabled}
                onClick={() => {
                  if (!isDisabled) {
                    goToPage(page.id);
                  }
                }}
                type="button"
              >
                <span className="step-num">{index + 1}</span>
                <span>{page.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      <div className="progress-strip" aria-hidden="true">
        <span className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}
