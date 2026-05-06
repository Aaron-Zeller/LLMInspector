import { NAV_SECTIONS, PAGE_SEQUENCE } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';

const CORE_SCENARIO_LABELS = {
  'main-sensitive-disclosure': 'Sensitive Data',
  'main-prompt-injection': 'Prompt Injection',
  'main-misinformation': 'Misinformation',
  'main-output-handling': 'Oversight',
  'main-platform-choice': 'Platform Choice',
};

export function TopNavigation() {
  const currentPageId = useAssessmentStore((state) => state.currentPageId);
  const feedbackState = useAssessmentStore((state) => state.feedbackState);
  const goToPage = useAssessmentStore((state) => state.goToPage);
  const openAboutPage = useAssessmentStore((state) => state.openAboutPage);
  const closeAboutPage = useAssessmentStore((state) => state.closeAboutPage);

  const currentSectionIndex = Math.max(
    NAV_SECTIONS.findIndex((section) => section.pageIds.includes(currentPageId)),
    0,
  );
  const onAboutPage = currentPageId === 'project-about';
  const coreScenarioSection = NAV_SECTIONS.find((section) => section.id === 'main-part');
  const coreScenarioPages = coreScenarioSection?.pageIds ?? [];
  const onCoreScenarioPage = coreScenarioPages.includes(currentPageId);
  const currentCoreScenarioIndex = coreScenarioPages.indexOf(currentPageId);
  const coreScenarioItems = coreScenarioPages.map((pageId, index) => {
    const page = PAGE_SEQUENCE.find((entry) => entry.id === pageId);
    return {
      pageId,
      number: index + 4,
      label: CORE_SCENARIO_LABELS[pageId] ?? page?.label ?? pageId,
    };
  });

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
                <span className="nav-step__label">{section.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="topnav__actions">
          <button
            className={cx('nav-about', onAboutPage && 'nav-about--active')}
            onClick={() => {
              if (onAboutPage) {
                closeAboutPage();
                return;
              }
              openAboutPage();
            }}
            type="button"
          >
            About
          </button>
        </div>
      </div>
      {onCoreScenarioPage ? (
        <div className="core-subnav" aria-label="Core scenario navigation">
          <div className="core-subnav__inner">
            <div className="core-subnav__label">Core Scenarios</div>
            <div className="core-subnav__track" role="tablist" aria-label="Core scenarios">
              {coreScenarioItems.map((item, index) => {
                const isActive = item.pageId === currentPageId;
                const isComplete = currentCoreScenarioIndex > index;
                return (
                  <button
                    key={item.pageId}
                    className={cx(
                      'core-subnav__item',
                      isActive && 'core-subnav__item--active',
                      isComplete && 'core-subnav__item--complete',
                    )}
                    onClick={() => goToPage(item.pageId)}
                    type="button"
                  >
                    <span className="core-subnav__number">{item.number}</span>
                    <span className="core-subnav__text">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
