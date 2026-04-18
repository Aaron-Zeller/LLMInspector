import { Segment } from '../dev/Segment.jsx';
import { useAssessmentStore } from '../../store/useAssessmentStore.js';

export function RecommendationList({ segmentId }) {
  const results = useAssessmentStore((state) => state.resultsSnapshot);

  if (!results) {
    return null;
  }

  return (
    <Segment className="results-section" segmentId={segmentId}>
      <hr className="divider" />
      <div className="section-eyebrow">
        <div className="eyebrow-line" />
        <div className="eyebrow-text">Recommendations</div>
      </div>
      <h2 className="section-title">Next Steps</h2>
      <div className="recommendation-list">
        {results.domainBreakdown.map((domain) => (
          <article className="recommendation-card" key={domain.id}>
            <div className={`rec-icon ${domain.status === 'strong' ? 'good' : 'priority'}`}>
              {domain.status === 'strong' ? '✓' : '!'}
            </div>
            <div>
              <div className={`rec-label ${domain.status === 'strong' ? 'good' : 'priority'}`}>
                {domain.status === 'strong' ? 'Strength' : 'Area for Development'}
              </div>
              <h3 className="recommendation-card__title">{domain.label}</h3>
              <p className="recommendation-card__body">{domain.recommendation}</p>
            </div>
          </article>
        ))}
      </div>
    </Segment>
  );
}
