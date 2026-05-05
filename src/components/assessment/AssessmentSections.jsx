import { ASSESSMENT_ITEMS } from '../../data/assessmentContent.js';
import { cx } from '../../lib/cx.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';
import { OrderingTask } from './OrderingTask.jsx';
import { QuestionCard } from './QuestionCard.jsx';
import { SanitisePromptTask } from './SanitisePromptTask.jsx';
import { ScenarioCard } from './ScenarioCard.jsx';
import { SelfEfficacyItem } from './SelfEfficacyItem.jsx';
import { WorkflowRiskTask } from './WorkflowRiskTask.jsx';

function renderAssessmentItem(itemId, revealFeedback, locked) {
  const item = ASSESSMENT_ITEMS[itemId];
  if (!item) return null;

  if (item.type === 'scenario') return <ScenarioCard key={itemId} itemId={itemId} revealFeedback={revealFeedback} locked={locked} />;
  if (item.type === 'ordering') return <OrderingTask key={itemId} itemId={itemId} revealFeedback={revealFeedback} locked={locked} />;
  if (item.type === 'selfEfficacy') return <SelfEfficacyItem key={itemId} itemId={itemId} locked={locked} />;
  if (item.type === 'sanitisePrompt') return <SanitisePromptTask key={itemId} itemId={itemId} revealFeedback={revealFeedback} locked={locked} />;
  if (item.type === 'workflowRisk') return <WorkflowRiskTask key={itemId} itemId={itemId} revealFeedback={revealFeedback} locked={locked} />;
  return <QuestionCard key={itemId} itemId={itemId} revealFeedback={revealFeedback} locked={locked} />;
}

function countAnswered(itemIds, answers) {
  return itemIds.filter((itemId) => Boolean(answers[itemId])).length;
}

export function AssessmentSections({ segment, segmentId }) {
  const answers = useAssessmentStore((state) => state.answers);
  const sectionIndex = useAssessmentStore((state) => state.assessmentSectionIndex[segment.stage] ?? 0);
  const setAssessmentSectionIndex = useAssessmentStore((state) => state.setAssessmentSectionIndex);
  const postAssessmentLocked = useAssessmentStore((state) => state.postAssessmentLocked);
  const sections = segment.sections ?? [];

  if (!sections.length) {
    return null;
  }

  const maxIndex = sections.length - 1;
  const activeIndex = Math.min(sectionIndex, maxIndex);
  const activeSection = sections[activeIndex];
  const totalItems = sections.reduce((sum, section) => sum + section.itemIds.length, 0);
  const totalAnswered = sections.reduce((sum, section) => sum + countAnswered(section.itemIds, answers), 0);
  const overallProgress = sections.length ? Math.round(((activeIndex + 1) / sections.length) * 100) : 0;
  const activeAnswered = countAnswered(activeSection.itemIds, answers);
  const stageLabel = segment.stage === 'post' ? 'Post assessment' : 'Pre assessment';
  const locked = segment.stage === 'post' && postAssessmentLocked;
  const revealFeedback = locked;

  function moveToSection(nextIndex) {
    const clampedIndex = Math.max(0, Math.min(nextIndex, maxIndex));
    setAssessmentSectionIndex(segment.stage, clampedIndex);

    if (typeof document !== 'undefined') {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const currentSegment = document.querySelector(`[data-segment-id="${segmentId}"]`);
          currentSegment?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }
  }

  return (
    <Segment className="assessment-sections" segmentId={segmentId}>
      <div className="assessment-subprogress panel">
        <div className="assessment-subprogress__header">
          <div>
            <p className="assessment-subprogress__label">{stageLabel} sub progress</p>
            <h2 className="assessment-subprogress__title">
              Part {activeIndex + 1} of {sections.length}
            </h2>
            <p className="assessment-subprogress__description">
              The assessment is split into parts so you can move through it in smaller units without losing your place.
            </p>
          </div>
          <p className="assessment-subprogress__summary">
            {totalAnswered} of {totalItems} items answered
          </p>
        </div>
        <div aria-hidden="true" className="assessment-subprogress__track">
          <span className="assessment-subprogress__fill" style={{ width: `${overallProgress}%` }} />
        </div>
        <div
          className="assessment-subprogress__steps"
          role="tablist"
          aria-label={`${stageLabel} sections`}
          style={{ gridTemplateColumns: `repeat(${sections.length}, minmax(0, 1fr))` }}
        >
          {sections.map((section, index) => {
            const answeredCount = countAnswered(section.itemIds, answers);
            const isActive = index === activeIndex;
            const isComplete = answeredCount === section.itemIds.length;

            return (
              <button
                key={section.id}
                aria-selected={isActive}
                className={cx(
                  'assessment-subprogress__step',
                  isActive && 'assessment-subprogress__step--active',
                  isComplete && 'assessment-subprogress__step--complete',
                )}
                onClick={() => moveToSection(index)}
                role="tab"
                type="button"
              >
                <span className="assessment-subprogress__step-label">{section.label}</span>
                <strong className="assessment-subprogress__step-title">{section.title}</strong>
                <span className="assessment-subprogress__step-meta">
                  {answeredCount}/{section.itemIds.length} answered
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <Segment className="assessment-group panel" segmentId={activeSection.id}>
        <div className="assessment-group__header">
          <div>
            <p className="assessment-group__label">{activeSection.label}</p>
            <h2 className="assessment-group__title">{activeSection.title}</h2>
          </div>
          <p className="assessment-group__count">
            {activeAnswered} / {activeSection.itemIds.length} answered
          </p>
        </div>
        <p className="assessment-group__description">{activeSection.description}</p>
        {activeSection.introParagraphs?.length ? (
          <div className="assessment-group__intro panel--intro">
            {activeSection.introParagraphs.map((paragraph) => (
              <p className="intro-copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
        {activeSection.callout ? (
          <div className={`callout ${activeSection.callout.variant ?? 'info'}`}>
            <div className="callout-icon">{activeSection.callout.icon}</div>
            <div>
              <strong>{activeSection.callout.title}</strong>
              <span>{activeSection.callout.body}</span>
            </div>
          </div>
        ) : null}
        <div className="assessment-group__items">{activeSection.itemIds.map((itemId) => renderAssessmentItem(itemId, revealFeedback, locked))}</div>
        <div className="assessment-group__footer">
          <p className="assessment-group__hint">Answers stay saved while moving between parts.</p>
          <div className="assessment-group__actions">
            <button
              className="btn-secondary"
              disabled={activeIndex === 0}
              onClick={() => moveToSection(activeIndex - 1)}
              type="button"
            >
              Previous part
            </button>
            {activeIndex === maxIndex ? (
              <span />
            ) : (
              <button
                className="btn-nav"
                onClick={() => moveToSection(activeIndex + 1)}
                type="button"
              >
                Next part
              </button>
            )}
          </div>
        </div>
      </Segment>
    </Segment>
  );
}
