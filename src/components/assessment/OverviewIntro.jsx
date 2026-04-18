import { OVERVIEW_STATS } from '../../data/assessmentContent.js';
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
        <div className="hero-meta">
          {OVERVIEW_STATS.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              {stat.label}
            </div>
          ))}
        </div>
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
