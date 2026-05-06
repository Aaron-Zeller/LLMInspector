import { NAV_SECTIONS } from '../../data/assessmentContent.js';
import { Segment } from '../dev/Segment.jsx';

export function SectionProgress({ pageId }) {
  const activeSection = NAV_SECTIONS.find((section) => section.pageIds.includes(pageId));

  if (!activeSection || activeSection.pageIds.length <= 1) {
    return null;
  }

  const currentIndex = Math.max(activeSection.pageIds.indexOf(pageId), 0);
  const totalPages = activeSection.pageIds.length;
  const completedCount = currentIndex;
  const progress = (completedCount / totalPages) * 100;

  return (
    <Segment className="section-progress" segmentId={`${activeSection.id}-progress`}>
      <div className="section-progress__meta">
        <span className="section-progress__label">{activeSection.label}</span>
        <span className="section-progress__count">
          {completedCount} of {totalPages} completed
        </span>
      </div>
      <div className="section-progress__track" aria-hidden="true">
        <span className="section-progress__fill" style={{ width: `${progress}%` }} />
      </div>
    </Segment>
  );
}
