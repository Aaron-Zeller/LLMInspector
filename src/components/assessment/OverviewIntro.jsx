import { useAssessmentStore } from '../../store/useAssessmentStore.js';
import { Segment } from '../dev/Segment.jsx';

export function OverviewIntro({ segment, segmentId }) {
  const goToPage = useAssessmentStore((state) => state.goToPage);

  return (
    <Segment className="overview-intro" segmentId={segmentId}>
      <div className="overview-intro__content hero">
        <p className="hero-eyebrow">{segment.eyebrow}</p>
        <h1 className="overview-intro__title">{segment.title}</h1>
        <p className="hero-desc">{segment.description}</p>
        {segment.helper ? <p className="hero-helper">{segment.helper}</p> : null}
        <button
          className="btn-primary"
          onClick={() => goToPage(segment.nextPageId)}
          type="button"
        >
          {segment.actionLabel}
        </button>
      </div>
    </Segment>
  );
}
