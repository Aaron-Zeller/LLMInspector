import { NAV_SECTIONS } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';

export function TopNavigation() {
  const currentPageId = useAssessmentStore((state) => state.currentPageId);
  const feedbackState = useAssessmentStore((state) => state.feedbackState);
  const goToPage = useAssessmentStore((state) => state.goToPage);

  const currentSectionIndex = Math.max(
    NAV_SECTIONS.findIndex((section) => section.pageIds.includes(currentPageId)),
    0,
  );

  return (
    <header className="app-header">
      <div className="topnav">
        <div className="nav-logo">
          COLORCODE
          <div className="vr" />
          <span className="sub">AI Literacy Assessment</span>
        </div>
        <nav className="nav-steps" aria-label="Assessment steps">
          {NAV_SECTIONS.map((section, index) => {
            const targetPageId = section.pageIds[0];
            const isLockedThankYou = section.id === 'thank-you' && feedbackState !== 'submitted';
            const isDisabled = isLockedThankYou;
            const isActive = section.pageIds.includes(currentPageId);
            const isComplete = index < currentSectionIndex;

            return (
              <button
                key={section.id}
                className={cx(
                  'nav-step',
                  isActive && 'active',
                  isComplete && 'completed',
                )}
                disabled={isDisabled}
                onClick={() => {
                  if (!isDisabled) {
                    goToPage(targetPageId);
                  }
                }}
                type="button"
              >
                <span className="step-num">{index + 1}</span>
                <span>{section.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
