import { NAV_SECTIONS } from '../../data/assessmentContent.js';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

export function SectionProgress({ pageId }) {
  const currentPageId = useAssessmentStore((state) => state.currentPageId);
  const activeSection = NAV_SECTIONS.find((section) => section.pageIds.includes(pageId));

  if (!activeSection || activeSection.pageIds.length <= 1) {
    return null;
  }

  const currentIndex = Math.max(activeSection.pageIds.indexOf(currentPageId), 0);
  const totalPages = activeSection.pageIds.length;
  const progress = ((currentIndex + 1) / totalPages) * 100;

  return (
    <Segment className="section-progress" segmentId={`${activeSection.id}-progress`}>
      <div className="section-progress__meta">
        <span className="section-progress__label">{activeSection.label}</span>
        <span className="section-progress__count">
          {currentIndex + 1} of {totalPages}
        </span>
      </div>
      <div className="section-progress__track" aria-hidden="true">
        <span className="section-progress__fill" style={{ width: `${progress}%` }} />
      </div>
    </Segment>
  );
}
